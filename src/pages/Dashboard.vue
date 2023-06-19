<script setup>
defineProps({
    user: Object,
})
</script>

<template>
    <!-- Title -->
    <h1> Dashboard </h1>

    <!-- NavBar -->
    <router-link class="m-2" to="/">Home</router-link>
    <router-link class="m-2 here" to="/Dashboard">Dashboard</router-link>
    <router-link class="m-2" to="/About">About</router-link>

    <!-- Variables -->
    <ul>
        <li><strong>Username: </strong>{{ user.username }}</li>
        <li><strong>Email: </strong>{{ user.email }}</li>
    </ul>
</template>