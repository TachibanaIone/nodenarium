<script lang="ts" setup>
import { sites } from "~/lib/datas/sites"

useHead({
    title: "Home - Nodenarium",
})
</script>

<template>
    <main>
        <hgroup>
            <h1 class="flex items-center justify-center font-bold text-2xl">Nodenarium</h1>
        </hgroup>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <SiteCard v-for="site in sites" :site="site" :key="site.domain" />
        </div>
    </main>
</template>
