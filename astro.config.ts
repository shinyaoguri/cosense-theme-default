import { defineConfig } from "astro/config";
import cosense from "@cosense-site-kit/astro";
import themeDefault from "@cosense-site-kit/theme-default";

// Astro 本体の設定。ここでは2つのインテグレーションを使います。
//   1. cosense()      … Cosense からページを取り込む（設定の本体は cosense.config.ts）
//   2. themeDefault() … 見た目（デフォルトテーマ）。オプションはすべて任意で、
//                       未指定なら賢いデフォルトが効きます。下の値はデモ兼サンプルなので、
//                       自分のサイトに合わせて書き換えてください。
export default defineConfig({
  integrations: [
    cosense({ configFile: "./cosense.config.ts" }),

    themeDefault({
      // フッターの著作者表示（"© <年>" の後ろ）。未指定なら cosense.config.ts の site.title。
      // 自身のサイトの著作者名を入れてください（例: "Shinya Oguri"）。個人サイトなら自分の名前、法人サイトなら会社名など。
      copyright: "Shinya Oguri",
      // 著作者名をリンクにするときの URL（未指定ならただのテキスト表示）。
      copyrightUrl: "https://github.com/shinyaoguri",

      // 全文検索（ヘッダーの🔍）。既定 true。小さなサイトで不要なら false に。
      // ※ 検索インデックスはビルド時に生成されるため、npm run dev では出ません
      //   （npm run build → npm run preview で確認できます）。
      search: true,

      // ── ここから下はよく使うオプションの例。必要に応じてコメントを外してください ──

      // ヘッダーに出すサイト名。未指定なら cosense.config.ts の site.title を使います。
      // siteTitle: "My Notes",

      // ヘッダーのナビ。
      // ※ Cosense の .site ページで nav: を宣言しているとそちらが優先され、これは
      //   「.site に nav が無いとき」のフォールバックです（このデモは .site で宣言済み）。
      //     { label, page } … page は Cosense ページタイトルへの内部リンク
      //     { label, href } … href は任意の URL（外部リンク）
      // nav: [
      //   { label: "Home",   page: "Home" },
      //   { label: "GitHub", href: "https://github.com/shinyaoguri/cosense-theme-default" },
      // ],

      // ホームに本文として表示する Cosense ページのタイトル。
      // 未指定なら「最近のページ一覧」を自動表示します（.site の home.page が優先）。
      // homePage: "Home",

      // 配色スキン。既定はライト。ダークにするには上の import 行を
      //   import themeDefault, { presetDark } from "@cosense-site-kit/theme-default";
      // に変えて、preset: presetDark を渡します。独自配色は CSS 変数を上書き:
      //   preset: { tokens: { "--color-bg": "#191919" }, colorScheme: "dark" }
      // .site の theme.skin でブラウザから切り替える運用も可能です。
      // preset: presetDark,
    }),
  ],
});
