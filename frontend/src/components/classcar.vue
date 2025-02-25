<template>
    <div class="ClassCar">
        <div class="container-class">
            <div class="card-class" onclick="location.href='/content/class-a'">
                <img src="@/assets/Class/Class-A.png" alt="Class A">
                <div class="card-title">Class A</div>
            </div>
            <div class="card-class" onclick="location.href='/content/class-b'">
                <img src="@/assets/Class/Class-B.png" alt="Class B">
                <div class="card-title">Class B</div>
            </div>
            <div class="card-class" onclick="location.href='/content/class-c'">
                <img src="@/assets/Class/Class-C.png" alt="Class C">
                <div class="card-title">Class C</div>
            </div>
            <div class="card-class" onclick="location.href='/content/class-d'">
                <img src="@/assets/Class/Class-D.png" alt="Class D">
                <div class="card-title">Class D</div>
            </div>
            <div class="card-class" onclick="location.href='/content/class-e'">
                <img src="@/assets/Class/Class-E.png" alt="Class E">
                <div class="card-title">Class E</div>
            </div>
            <div class="card-class" onclick="location.href='/content/class-extra'">
                <img src="@/assets/Class/Class-Extra.png" alt="Class Extra">
                <div class="card-title">Class Extra</div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
.container-class {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    width: 90%;
    max-width: 1000px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 20px;
}

.card-class {
    text-align: center;
    cursor: pointer;
}

.card-class img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s;
}

.card-class img:hover {
    transform: scale(1.1);
}

.card-title {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: white;
}
</style>