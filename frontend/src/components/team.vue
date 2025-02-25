<template>
    <div class="container team">
        <div class="profile">
            <img src="../assets/team/test.jpg" alt="Photo Steven">
            <h3>Steven</h3>
            <a href="https://github.com/S1even" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/steven-devin-107849246/" target="_blank">LinkedIn</a>
        </div>
        <div class="profile">
            <img src="../assets/team/test.jpg" alt="Photo Scotty">
            <h3>Scotty</h3>
            <a href="https://github.com/scotty800" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/scotty-ndanga-5a24aa1b0/" target="_blank">LinkedIn</a>
        </div>
        <div class="profile">
            <img src="../assets/team/test.jpg" alt="Photo Morgan">
            <h3>Morgan</h3>
            <a href="https://github.com/Morg92b" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/morgan-bouaziz-50a2811b6/" target="_blank">LinkedIn</a>
        </div>
        <div class="profile">
            <img src="../assets/team/test.jpg" alt="Photo Dylan">
            <h3>Dylan</h3>
            <a href="https://github.com/Bruqui" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/dylan-gros-desormeaux-a24044348/" target="_blank">LinkedIn</a>
        </div>
    </div>
</template>

<script>
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
}

.profile {
  flex: 1 1 200px;
  margin: 10px;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.profile img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.profile h3 {
  margin: 10px 0;
  font-size: 18px;
  color: white;
}

.profile a {
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: #0073b1;
  font-weight: bold;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  .profile {
    width: 80%;
  }
}

</style>