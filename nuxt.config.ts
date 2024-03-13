// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/lib/stylesheets/app.css"],

    app: {
        head: {
            link: [{ rel: "icon", type: "image/webp", href: "/favicon.webp" }],
            htmlAttrs: { lang: "ja" },
        },
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: ["@nuxt/image"],
})
