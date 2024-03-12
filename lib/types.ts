const SITE_CATEGORIES = ["Diary", "Photo", "Computer"] as const

export type SiteInfo = {
    name: string
    domain: string
    thumbnail: string
    categories: typeof SITE_CATEGORIES[number][]
}
