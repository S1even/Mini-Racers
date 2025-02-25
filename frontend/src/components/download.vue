<template>
    <div class="download">
        <div class="container-dw">
            <img src="../assets/Mini_Racers.png" alt="Game title" />
            <button class="button-download">
                <span class="button-content">Download</span>
            </button>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.container-dw {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 60%;
}

.container-dw img {
    width: 100%;
    height: auto;
}

.button-download {
    position: relative;
    overflow: hidden;
    height: 5rem;
    padding: 0 2rem;
    border-radius: 3rem;
    background: #3d3a4e;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

.button-download::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
        82.3deg,
        rgba(225, 138, 159, 1) 10.8%,
        rgba(74, 75, 128, 1) 94.3%
    );
    transition: all 0.475s;
}

.button-download:hover::before {
    transform: scaleX(1);
}

.button-content {
    position: relative;
    z-index: 1;
    font-size: 2.5rem;
    font-family: 'Merriweather', serif;
}
</style>
