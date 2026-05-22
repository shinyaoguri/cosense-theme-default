# cosense-theme-default

公開 Cosense プロジェクトを静的サイトに変換する [cosense-site-kit](https://github.com/shinyaoguri/cosense-site-kit) のスターターテンプレートです。ビルドとデプロイは GitHub Actions が行うため、**ローカル環境なしでブラウザだけ**で立ち上げられます。

> 非公式のコミュニティ製ツールです。Cosense およびその運営会社とは関係ありません。

## ブラウザだけで使う（clone・ターミナル不要）

1. GitHub で **「Use this template」→「Create a new repository」** をクリック。
2. GitHub の Web エディタで **`cosense.config.ts`** を開き、次の3項目を設定:
   - `source.project` — あなたの公開 Cosense プロジェクト名
   - `site.baseUrl` — `https://<あなたのユーザー名>.github.io`
   - `site.base` — `/<このリポジトリ名>`（リポジトリ名を `<ユーザー名>.github.io` にした場合は `/`）
3. **Settings → Pages → Build and deployment → Source を「GitHub Actions」に。**
4. **Actions → 「Build and deploy」→ Run workflow**（または毎日の cron を待つ）。
   `https://<ユーザー名>.github.io/<リポジトリ名>/` に公開されます。

Cosense のページは `#publish` タグで公開、`#draft` で非公開になります。

## ローカル開発（任意）

```bash
npm install
npm run fetch   # Cosense からページを .cosense-cache/ に取得
npm run dev     # Astro 開発サーバー（http://localhost:4321）
npm run build   # cosense-site fetch && astro build
npm run validate
```

## 設定

- `cosense.config.ts` — データソース・公開ルール・slug 戦略・デプロイ先。
- `astro.config.ts` — テーマの差し替え（`themeDefault({ ... })`）や Astro インテグレーションの追加。
- `.site` ページ（Cosense 側でナビ / ホーム / 記事一覧を宣言）や `doctor` コマンドは [cosense-site-kit のドキュメント](https://github.com/shinyaoguri/cosense-site-kit) を参照してください。
