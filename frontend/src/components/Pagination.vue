<template>
    <div class="container-pag">
        <router-link :to="prevLink" class="button-pag" v-if="prevLink">Previous</router-link>
        <router-link :to="nextLink" class="button-pag" v-if="nextLink">Next</router-link>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    prevLink: String,
    nextLink: String,
})
</script>

<style scoped>
.container-pag {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  padding: 20px;
  margin: 0 auto;
}

.button-pag {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #d67d91;
  color: white;
  text-decoration: none;
  text-align: center;
}
</style>