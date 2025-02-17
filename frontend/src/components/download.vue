<style scoped>
  .shadow__btn {
    padding: 10px 20px;
    border: none;
    font-size: 17px;
    color: #fff;
    border-radius: 7px;
    letter-spacing: 4px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.5s;
    transition-property: box-shadow;
    position: fixed;
    bottom: 115px;
    left: 41%;
  }

  .shadow__btn {
    background: #d67d91;
    box-shadow: 0 0 25px #d67d91;
  }

  .shadow__btn:hover {
    box-shadow: 0 0 5px #d67d91,
                0 0 25px #d67d91,
                0 0 50px #d67d91,
                0 0 100px #d67d91;
  }

  /* Responsive styles for phones */
  @media (max-width: 768px) {
    .shadow__btn {
      font-size: 15px;
      padding: 8px 16px;
      left: 50%;
      transform: translateX(-50%); /* Centers the button horizontally */
      bottom: 80px; /* Adjusts the bottom space for smaller screens */
    }
  }

  @media (max-width: 480px) {
    .shadow__btn {
      font-size: 14px;
      padding: 7px 14px;
      bottom: 60px; /* Adjust bottom spacing further for very small screens */
    }
  }
</style>

<template>
  <button class="shadow__btn">
      Download
  </button>
</template>
