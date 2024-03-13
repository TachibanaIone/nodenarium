export const SITE_CATEGORIES = ["Diary", "Computer", "Photo", "Poetry"] as const

export type SiteInfo = {
    name: string
    domain: string
    thumbnail: string
    categories: (typeof SITE_CATEGORIES)[number][]
    registeredAt: Date
}
