<script lang="ts" setup>
useHead({
    title: "Submit site | Nodenarium",
})
</script>

<template>
    <main>
        <hgroup>
            <h1 class="flex items-center justify-center font-bold text-2xl">Submit site</h1>
        </hgroup>
        <ul class="text-contents">
            <li>
                <section>
                    <h2>掲載を申請する前に</h2>
                    <p>NodenariumへのWebサイトの掲載を申請する前に、以下のガイドラインをご一読ください。</p>
                </section>
            </li>
            <li>
                <section>
                    <h2>審査基準</h2>
                    <p>
                        WebサイトがNodenariumに掲載されるためには、以下の審査基準を満たす必要があります。<br />
                        <span class="exception-sign">*</span>のついた項目は橘いおねの個人的な裁量によって判断されます。コンテンツが十分に良質であればこれらの基準には厳密に一致する必要はないので、基準に一致しているか不安な場合でも恐れずに申請を送信してみてください。
                    </p>
                    <ol>
                        <li>個人、または同人サークルなどの特定少数人が運営するWebサイトであること。</li>
                        <li>noteやtumblrなどの既存のプラットフォーム上にないこと。</li>
                        <li>2015年以降に誕生または全面改訂が行われたWebサイトであること。</li>
                        <li>外部への情報発信を目的としない私的な内容の投稿（日記やスナップなど）<span class="exception-sign">*</span>を3つ以上含み、最終更新が掲載申請の直近1年以内であること。</li>
                        <li>コンテンツが十分に良質<span class="exception-sign">*</span>であること。<br />大量のアフィリエイト記事を含むなど、Nodenariumを宣伝の場に使おうとしていると判断した場合は申請を却下します。</li>
                    </ol>
                </section>
            </li>
            <li>
                <section>
                    <h2>申請方法</h2>
                    <p>掲載申請は以下のフォームから自薦・他薦問わず受け付けています。審査結果は掲載をもって代えさせていただきます。</p>
                    <a href="https://forms.gle/N4ZG4MTLqXeUFUgs7" target="_blank" class="text-emerald-400 underline">掲載申請フォーム</a>
                </section>
            </li>
        </ul>
    </main>
</template>

<style scoped>
.exception-sign {
    @apply text-emerald-400;
}

ol {
    @apply list-decimal ml-4;
}

ol li::marker {
    @apply text-neutral-400;
}
</style>
