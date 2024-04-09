<script setup>

const props = defineProps({
    id: Number,
    name: String,
    image: String
})

</script>

<template>
    <div class="d-flex overflow-hidden mb-3 bg-light">
        <img class="img-fluid" :src='image' style="width: 100px; height: 100px; object-fit: cover;" alt="">
        <RouterLink :to="`/monsterdetails/${id}`" class="h5 d-flex align-items-center bg-light px-3 mb-0">
            {{ name }}</RouterLink>
    </div>
</template>

<style></style>