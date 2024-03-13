<script lang="ts" setup>
import { type SiteInfo } from "~/lib/types"
const props = defineProps<{
    site: SiteInfo
}>()
</script>

<template>
    <a :href="`//${site.domain}`" target="_blank" class="rounded-lg p-4 border-2 border-neutral-750 bg-neutral-850 transition-shadow duration-300">
        <article>
            <NuxtImg :src="`/assets/images/thumbnails/${site.thumbnail}`" alt="" loading="lazy" decoding="async" class="w-full rounded-md overflow-hidden aspect-video" />
            <p class="text-sm text-neutral-400 mt-2">{{ site.domain }}</p>
            <h2 class="text-xl font-bold mb-1">{{ site.name }}</h2>
            <ul class="flex">
                <li class="site-category text-semi text-neutral-400" v-for="category in site.categories">{{ category }}</li>
            </ul>
        </article>
    </a>
</template>

<style scoped>
a {
    box-shadow: theme("boxShadow.lg");
}

a:hover {
    box-shadow: theme("boxShadow.lg"), inset 0 0 20px 8px theme("colors.neutral.800");
}

.site-category:not(:last-of-type):after {
    content: "/";
    @apply text-neutral-600 mx-1;
}
</style>
