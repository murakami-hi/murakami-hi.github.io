# Researcher Homepage

Astro + GitHub Pagesで公開する研究者個人ホームページです。

## 構成

- `src/pages/index.astro`: トップページ
- `src/pages/research/themes/[id].astro`: Research Themeごとのプロジェクトページ
- `src/components/`: Hero、About、Research CardなどのUI
- `src/data/research.ts`: Research Theme、Project、Publicationの構造化データ
- `src/data/publications.generated.ts`: researchmap APIから生成したPublicationデータ
- `src/data/publication-overrides.ts`: Projectリンク、受賞、IF、Acceptance Rateなどの手動補正
- `src/styles/global.css`: 全体のスタイル
- `public/assets/`: 公開画像。現在のHero写真は `murakami_lab.JPG` です。

## ローカル確認

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:4321` を開きます。

## Publication更新

researchmapの公開情報からPublicationデータを更新します。

```bash
npm run update:publications
npm run build
```

`src/data/publications.generated.ts` は自動生成ファイルです。Projectリンクや受賞情報など、サイト独自の表示情報は `src/data/publication-overrides.ts` に追加してください。

## GitHub Pages

`astro.config.mjs` の `site` と、必要に応じて `base` を自分の公開URLに合わせて変更してください。

- ユーザーサイト: `https://YOUR_NAME.github.io/`
- プロジェクトサイト: `https://YOUR_NAME.github.io/YOUR_REPOSITORY/`

GitHub Actionsで公開する場合は、Astro公式のGitHub Pages手順に沿って `.github/workflows/deploy.yml` を追加します。
