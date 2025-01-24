<template>
  <div class="login-background">
    <div class="login-container">
      <div class="login-box">
        <h1>Mini-Racers</h1>
        <form @submit.prevent="handleLogin">
          <div class="user-box">
            <input type="email" id="email" v-model="email" required />
            <label for="email">Email</label>
          </div>
          <div class="user-box">
            <input type="password" id="password" v-model="password" required />
            <label for="password">Password</label>
          </div>
          <a href="#" @click="handleLogin">
            Connexion
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </form>
        <p>Not registered yet? <router-link to="/register" class="a2">Register</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:5500/api/auth/login', {
          email: this.email,
          password: this.password,
        });
        alert('Connexion réussie !');
        console.log(response.data); // Gérer la réponse, ex : token
      } catch (error) {
        this.errorMessage = "Email ou mot de passe incorrect.";
      }
    },
  },
};
</script>

<style scoped>
/* From Uiverse.io by glisovic01 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Empêche le défilement horizontal */
  font-family: 'Arial', sans-serif; /* Typographie moderne */
}

.login-background {
  background-image: url('@/assets/background.png'); /* Assure-toi que le chemin est correct */
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  top: 0; /* Commence dès le haut de la page */
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.login-box {
  width: 400px;
  padding: 40px;
  margin: 20px auto;
  background: rgba(0,0,0,.9);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box h1 {
  margin-bottom: 20px;
  text-align: center; /* Centre le titre horizontalement */
  font-size: 2rem; /* Agrandit le texte */
  font-weight: bold; /* Rend le texte en gras */
  background: linear-gradient(to bottom, #488eff, #d81d65); /* Dégradé de bleu du haut vers le bas */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.login-box p:first-child {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #fff;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 3px;
}

.login-box a:hover {
  background: #fff;
  color: #272727;
  border-radius: 5px;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #fff);
  animation: btn-anim1 1.5s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #fff);
  animation: btn-anim2 1.5s linear infinite;
  animation-delay: .375s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #fff);
  animation: btn-anim3 1.5s linear infinite;
  animation-delay: .75s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #fff);
  animation: btn-anim4 1.5s linear infinite;
  animation-delay: 1.125s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

.login-box p:last-child {
  color: #aaa;
  font-size: 14px;
}

.login-box a.a2 {
  color: #fff;
  text-decoration: none;
}

.login-box a.a2:hover {
  background: transparent;
  color: #aaa;
  border-radius: 5px;
}
</style>
