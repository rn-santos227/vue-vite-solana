<script setup lang="ts">
import { ref } from "vue";
import Link from "../types/Link.ts";

const links = ref<Link[]>([
  { name: "Home", link: "/" },
  { name: "Users", link: "/users" },
])
</script>

<template>
    <div v-for="(link, index) in links" :key="index">
        <router-link :to="link.link">
            <button>{{ link.name }}</button>
        </router-link>
    </div>
</template>