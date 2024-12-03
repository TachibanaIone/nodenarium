import type { SiteInfo } from "~/lib/types"

export const sites: SiteInfo[] = [
    {
        name: "いんたーねっと☆えくすぷろーらー！",
        domain: "blog.tachibanai.one",
        thumbnail: "internet-explorer.webp",
        categories: ["Diary", "Computer"],
        techStack: ["Svelte"],
        registeredAt: new Date("2024-03-13"),
    },
    {
        name: "午睡機構",
        domain: "gosuikikou.net",
        thumbnail: "gosuikikou.webp",
        categories: ["Diary"],
        techStack: ["Svelte"],
        registeredAt: new Date("2024-03-13"),
    },
    {
        name: "花園シャトー107号室",
        domain: "hanazonochateau.net",
        thumbnail: "hanazonochateau.webp",
        categories: ["Diary", "Computer", "Photo", "Poetry"],
        techStack: ["Hugo", "React"],
        registeredAt: new Date("2024-03-13"),
    },
    {
        name: "あまねけ！",
        domain: "ama.ne.jp",
        thumbnail: "ama-ne-jp.webp",
        categories: ["Computer", "Novel"],
        techStack: ["Python"],
        registeredAt: new Date("2024-03-29"),
    },
    {
        name: "宇田の家さがされ",
        domain: "gitdmnt.github.io",
        thumbnail: "gitdmnt-github-io.webp",
        categories: ["Diary", "Computer"],
        techStack: ["Astro"],
        registeredAt: new Date("2024-09-12"),
    },
    {
        name: "みそは入ってませんけど",
        domain: "not-miso-inside.net",
        thumbnail: "not-miso-inside.webp",
        categories: ["Diary", "Novel"],
        techStack: ["Rust"],
        registeredAt: new Date("2024-09-12"),
    },
]
