<template>
    <header class="border-b-[1px] border-white">
        <nav>
            <ul class="flex justify-end gap-4 md:w-body-desktop w-body-mobile mx-auto py-3">
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/submit">Submit</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
li {
    @apply transition-colors duration-300;
}

li:hover {
    @apply text-neutral-400;
}
</style>
