# cosense-theme-default

公開中の [Cosense](https://scrapbox.io)（旧 Scrapbox）プロジェクトを、そのまま静的サイトにして公開するためのスターターテンプレートです。中身は [cosense-site-kit](https://github.com/shinyaoguri/cosense-site-kit) を使った最小構成の Astro サイト + デフォルトテーマ。

- **書くのは Cosense だけ** — `#publish` を付けたページが、そのままサイトのページになります。
- **ビルドとデプロイは GitHub Actions が自動実行** — ローカル環境ゼロ、ブラウザだけで公開できます。
- **見た目はデフォルトテーマ（npm パッケージ）** — リポジトリにテーマ本体は同梱されず、`npm update` で改善を取り込めます。

> 非公式のコミュニティ製ツールです。Cosense およびその運営会社とは関係ありません。

このリポジトリ自身がこのテンプレートのライブデモで、Cosense プロジェクト [cosense-theme-default](https://scrapbox.io/cosense-theme-default/) から <https://shinyaoguri.github.io/cosense-theme-default/> に公開されています。

使い方は2通り。**まずは「A. ブラウザだけで公開する」だけで完結します**。見た目を手元で調整したくなったら「B. ローカルで開発する」へ。

---

## 必要なもの

- **公開設定の Cosense（Scrapbox）プロジェクト**（1つ）。URL が `https://scrapbox.io/<プロジェクト名>/` の形で、ブラウザでログインなしに開けること（API が読める必要があります）。
- **GitHub アカウント**。
- （ローカル開発する場合のみ）**Node.js 20 以上** と **Git**。

---

## A. ブラウザだけで公開する（おすすめ・ターミナル不要）

所要 5〜10 分。上から順にやれば公開まで行けます。

### 0. Cosense（Scrapbox）の公開ページの準備
取り込みたいCosenseのプロジェクトを公開状態で準備します

### 1. このテンプレートから自分のリポジトリを作る

1. このページ右上の緑のボタン **「Use this template」→「Create a new repository」** をクリック。
2. **Repository name** を決めます。これがそのまま公開 URL の一部になります（例: `my-notes` → `https://<ユーザー名>.github.io/my-notes/`）。
   - リポジトリ名を **`<ユーザー名>.github.io`** にすると、サブパスなしの `https://<ユーザー名>.github.io/` で公開できます。
3. 公開範囲は **Public** を選びます（GitHub Pages を無料で使うには Public が必要。Private は GitHub Pro / Team が要ります）。

### 2. `cosense.config.ts` を自分のサイトに向ける

作成したリポジトリで **`cosense.config.ts`** を開きます（ファイル右上の鉛筆アイコンでブラウザ上で編集できます）。次の **3か所** を書き換えます。

| 項目 | 何を書くか | 例 |
|---|---|---|
| `source.project` | あなたの Cosense プロジェクト名（URL `scrapbox.io/<ここ>/` の部分） | `"my-notes"` |
| `site.baseUrl` | あなたの GitHub Pages のオリジン | `"https://taro.github.io"` |
| `site.base` | `/` + リポジトリ名。`<ユーザー名>.github.io` リポジトリなら `"/"` | `"/my-notes"` |

`site.title` / `site.description` はデモのままなので、自分のサイト名に変えておきましょう。書き換えたら下部の **「Commit changes」** で保存します。

```ts
// cosense.config.ts（書き換える部分の例）
site: {
  title: "My Notes",
  description: "私の公開ノート",
  baseUrl: "https://taro.github.io",
  base: "/my-notes",
  lang: "ja",
},
source: {
  type: "cosense",
  project: "my-notes",
},
```

### 3. GitHub Pages を有効化する

リポジトリの **Settings → Pages → Build and deployment → Source** を **「GitHub Actions」** に変更します（「Deploy from a branch」ではありません）。

### 4. 最初のビルドを実行する

**Actions** タブ → 左側の **「Build and deploy」** → 右側の **「Run workflow」→「Run workflow」** をクリック。

- 1〜2 分でビルドとデプロイが走ります。緑のチェックが付けば成功です。
- 以降は **1 日 2 回の cron が自動で再ビルド** するので、Cosense を編集すれば放っておいても反映されます（すぐ反映したいときは再度 Run workflow）。

> はじめて Actions を使うとき「I understand my workflows, go ahead and enable them」の確認が出たら許可してください。

### 5. 公開を確認する

`https://<ユーザー名>.github.io/<リポジトリ名>/` を開きます（Settings → Pages の上部にも公開 URL が表示されます）。

---

## Cosense 側の準備（最低限）

サイトに「どのページを・どう出すか」は Cosense 側で決めます。

- **公開したいページに `#publish` を付ける** — これが公開スイッチです。付いていないページはサイトに出ません（既定は「全ページ非公開」で、1 ページずつ opt-in する設計）。
- **下書きは `#draft`** — `#publish` が付いていても除外されます。
- **`.site` ページで構造を宣言**（任意・推奨）— タイトル `.site` のページを作り、`code:site.yaml` ブロックを 1 つ置くと、ナビ・ホーム・記事一覧などを宣言できます:

```
.site

code:site.yaml
 home:
   page: "Home"
 nav:
   - { label: "About",  page: "About" }
   - { label: "GitHub", href: "https://github.com/you" }
```

`.site` が無くても動きます（`/` に最近のページ一覧が出ます）。タグや `.site` YAML の全フィールドは [cosense-site-kit のドキュメント](https://github.com/shinyaoguri/cosense-site-kit) を参照してください。

---

## カラーテーマ（スキン）

デフォルトテーマは配色スキンの切り替えに対応しています。組み込みスキンは次の2つ:

| スキン | 説明 |
|---|---|
| `light` | 既定。明るい配色 |
| `dark` | Notion 風の暖色を保ったダーク配色 |

切り替え方は2通り。**`.site` の指定が最優先**です。

1. **Cosense の `.site` から**（ブラウザだけ・再ビルド不要・**おすすめ**）— `code:site.yaml` に `theme.skin` を足すだけ。運用者がコードを触らず色を変えられます。

   ```
   code:site.yaml
    theme:
      skin: dark
   ```

2. **`astro.config.ts` から**（ビルド時の既定）— `themeDefault({ preset: presetDark })`。独自配色にしたいときは CSS 変数を上書きします:

   ```ts
   import themeDefault, { presetDark } from "@cosense-site-kit/theme-default";
   // ...
   themeDefault({
     preset: presetDark,
     // 独自配色の例（light をベースに CSS 変数を上書き）:
     // preset: { tokens: { "--color-bg": "#191919", "--color-text": "#e6e6e3" }, colorScheme: "dark" },
   })
   ```

`light` / `dark` 以外の名前付きスキンを `.site` から選べるようにするには、テーマ本体の `PRESETS` レジストリに追加します（詳しくは [cosense-site-kit のドキュメント](https://github.com/shinyaoguri/cosense-site-kit)）。

---

## B. ローカルで開発する（任意）

見た目を確認しながら調整したいときや、公開前に手元でビルドを通したいときに使います。**「A.」で公開できていれば必須ではありません。**

### 必要なもの

- **Node.js 20 以上**（`node -v` で確認）と **Git**。

### 手順

```bash
# 1. 自分のリポジトリを clone（「Use this template」で作ったもの）
git clone https://github.com/<ユーザー名>/<リポジトリ名>.git
cd <リポジトリ名>

# 2. 依存をインストール
npm install

# 3. （まだなら）cosense.config.ts の3項目を編集 — 上の「A. の 2.」と同じ

# 4. Cosense からページを取得（.cosense-cache/ に保存される）
npm run fetch

# 5. 開発サーバーを起動
npm run dev
```

開発サーバーは **`http://localhost:4321/<site.base>/`** で開きます（`site.base` が `/my-notes` なら `http://localhost:4321/my-notes/`）。起動時のログにも URL が出ます。

押さえておくポイント:

- `npm run dev` は `.cosense-cache/` に取得済みの内容を表示します。**Cosense を編集して反映したいときは、もう一度 `npm run fetch`** してください（dev は自動では取得し直しません）。
- **全文検索（ヘッダーの🔍）は `npm run dev` では動きません。** 検索インデックスはビルド時に生成するため、下の `npm run build` → `npm run preview` で確認します。

### 本番ビルドを手元で確認する

```bash
npm run build     # cosense-site fetch && astro build（dist/ を生成）
npm run preview   # 本番と同じ出力をローカル配信（検索もここで動く）
```

### 公開前チェック（任意・推奨）

```bash
npm run doctor    # ナビの参照切れ・内部リンク切れ・draft 漏れ・公開0件などを検出
npm run validate  # 設定と取得データの整合を検査
```

### デプロイ

ローカルでの変更（`cosense.config.ts` や `astro.config.ts` など）を **commit して push** すれば、「A.」で有効化した GitHub Actions が自動でビルド & 公開します。手元から直接アップロードする必要はありません。

```bash
git add -A
git commit -m "configure my site"
git push
```

---

## 設定ファイル早見表

| ファイル | 役割 |
|---|---|
| `cosense.config.ts` | データソース（Cosense プロジェクト）、公開ルール（`#publish` 等のタグ）、slug 戦略、公開先。**最初に編集する所。** |
| `astro.config.ts` | テーマのオプション（`themeDefault({ nav, copyright, preset, search, ... })`）や他の Astro インテグレーションの追加。 |
| `.github/workflows/build.yml` | 取得 → ビルド → GitHub Pages デプロイの自動化。cron は `cosense.config.ts` の `deploy.schedule` 由来。 |
| Cosense の `.site` ページ | ナビ / ホーム / 記事一覧などのサイト構造（ブラウザだけで変更可）。 |

テーマのオプション、`.site` の全フィールド、ページごとの見た目を変えるテンプレート機能などの詳細は **[cosense-site-kit のドキュメント](https://github.com/shinyaoguri/cosense-site-kit)** にまとまっています。

---

## うまくいかないとき

- **サイトが空 / ページが出ない** — 公開したいページに `#publish` が付いていますか？ `cosense.config.ts` の `source.project` がプロジェクト名と一致していますか（`https://scrapbox.io/<その名前>/` が開けるか確認）。`npm run doctor` で診断できます。
- **ビルドは成功するのにページが 404** — `site.base` がリポジトリ名とズレている可能性大。`"/<リポジトリ名>"`（先頭スラッシュあり）になっているか確認してください。
- **CSS が当たらない / リンクが壊れる** — これも `site.base` のズレが原因のことが多いです。
- **検索が出ない（ローカル）** — 仕様です。`npm run build` → `npm run preview` で確認してください。
- **Actions が失敗（赤）** — Actions のログを開き `cosense-site fetch` の行を確認。`404` ならプロジェクト名か Cosense の公開設定の問題です。

---

仕組みの詳細・テーマの作り込み・他テーマへの差し替えは [cosense-site-kit](https://github.com/shinyaoguri/cosense-site-kit) を参照してください。
