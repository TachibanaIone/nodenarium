<script lang="ts" setup>
import { sites } from "~/lib/datas/sites"

useHead({
    title: "Home | Nodenarium",
})
</script>

<template>
    <main>
        <hgroup>
            <h1 class="flex items-center justify-center font-bold text-2xl">Nodenarium</h1>
        </hgroup>
        <figure class="flex flex-col items-center gap-2 w-full py-6 border-b-1">
            <NuxtImg src="/assets/images/hero.webp" title="Photo by Thomas Verbruggen" alt="" class="md:w-3/4 w-full mx-auto aspect-video" />
            <p class="text-center text-semi italic text-neutral-400">『――わたしたちはどうして、自らについての詩を書くのでしょうか？』</p>
        </figure>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
            <SiteCard v-for="site in sites" :site="site" :key="site.domain" />
        </section>
    </main>
</template>
