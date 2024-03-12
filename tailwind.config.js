/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
    theme: {
        extend: {
            width: {
                body: "max(45vw, 720px)",
            },
            fontSize: {
                semi: "0.925rem"
            },
            borderWidth: {
                1: "1px",
            },
            colors: {
                "neutral-750": "#2d2d2d",
                "neutral-850": "#1c1c1c"
            },
        },
    },
    plugins: [],
}
