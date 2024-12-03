export const SITE_CATEGORIES = ["Diary", "Computer", "Photo", "Poetry", "Novel"] as const
export const TECH_DICT = {
    Astro: "#ff5903",
    Svelte: "#ff3e00",
    Hugo: "#ff4088",
    React: "#58c4dc",
    Rust: "#dfa484",
    Python: "#3572a5",
}

export type SiteInfo = {
    name: string
    domain: string
    thumbnail: string
    categories: (typeof SITE_CATEGORIES)[number][]
    techStack: (keyof typeof TECH_DICT)[]
    registeredAt: Date
}
