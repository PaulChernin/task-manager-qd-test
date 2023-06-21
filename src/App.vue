<template>
    <div>
        <header>
            <nav>
                <router-link to="/">Главная</router-link>
                <router-link to="/tasks">Задачи</router-link>
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
