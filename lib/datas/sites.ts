import type { SiteInfo } from "~/lib/types"

export const sites: SiteInfo[] = [
    {
        name: "Digial Rain Memories",
        domain: "blog.tachibanai.one",
        thumbnail: "digital-rain-memories.webp",
        categories: ["Diary", "Computer"],
        registeredAt: new Date("2024-03-13"),
    },
    {
        name: "午睡機構",
        domain: "gosuikikou.net",
        thumbnail: "gosuikikou.webp",
        categories: ["Diary"],
        registeredAt: new Date("2024-03-13"),
    },
    {
        name: "花園シャトー107号室",
        domain: "hanazonochateau.net",
        thumbnail: "hanazonochateau.webp",
        categories: ["Diary", "Computer", "Photo", "Poetry"],
        registeredAt: new Date("2024-03-13"),
    },
    {
        name: "あまねけ！",
        domain: "ama.ne.jp",
        thumbnail: "ama-ne-jp.webp",
        categories: ["Computer", "Novel"],
        registeredAt: new Date("2024-03-29"),
    },
]
