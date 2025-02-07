const request = require("supertest");
const app = require("./server");
const mongoose = require("mongoose");
const UserModel = require("./models/user.model");
const BlacklistModel = require("./models/blacklist.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

jest.mock("nodemailer", () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue({}),
  }),
}));

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe("User Controller", () => {
    let testUser;
    let token;

    beforeEach(async () => {
        await BlacklistModel.deleteMany({});
        testUser = await UserModel.create({
            username: "testuser",
            email: "testuser@example.com",
            password: await bcrypt.hash("password123", 10),
            isEmailconfirmed: true
        });
        token = jwt.sign({ id: testUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    });

    afterEach(async () => {
        await UserModel.deleteMany({});
        await BlacklistModel.deleteMany({});
    });

    test("should register a new user", async () => {
        const res = await request(app)
            .post("/api/auth/register")
            .send({
                username: "newuser",
                email: "newuser@example.com",
                password: "password123",
                confirmpassword: "password123"
            });
        expect(res.status).toBe(201);
        expect(res.body.message).toBe("User created! Please check your email to confirm.");

        expect(nodemailer.createTransport().sendMail).toHaveBeenCalled();
    });

    test("should not register a user with an existing email", async () => {
        const res = await request(app)
            .post("/api/auth/register")
            .send({
                username: "anotheruser",
                email: "testuser@example.com",
                password: "password123",
                confirmpassword: "password123"
            });
        expect(res.status).toBe(400);
        expect(res.body.message).toBe("This email is already in use.");
    });


    

    test("should not login with incorrect password", async () => {
        const res = await request(app)
            .post("/api/auth/login")
            .send({ email: "testuser@example.com", password: "wrongpassword" });
        expect(res.status).toBe(400);
        expect(res.body.message).toBe("Incorrect password.");
    });

    test("should delete user successfully", async () => {
        const res = await request(app)
            .delete(`/api/auth/delete/${testUser._id}`)
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(res.body.message).toBe("User deleted successfully");
    });

    test("should not delete another user", async () => {
        const anotherUser = await UserModel.create({
            username: "anotheruser",
            email: "anotheruser@example.com",
            password: await bcrypt.hash("password123", 10),
            isEmailconfirmed: true
        });
        const res = await request(app)
            .delete(`/api/auth/delete/${anotherUser._id}`)
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(403);
        expect(res.body.message).toBe("You are not allowed to delete another user");
    });
});
