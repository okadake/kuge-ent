# 久下耳鼻咽喉科 サイトリニューアル

Astro + Tailwind CSS で構築された、医療機関向けのモダンで親しみやすいウェブサイトです。

## 特徴

- **Astro**: 高速で最小限のJavaScript
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク
- **レスポンシブデザイン**: モバイル、タブレット、PCに完全対応
- **シックなグリーンカラー**: 医療機関としての信頼感と清潔感
- **GitHub Pages デプロイ対応**: CI/CD 自動化

## セットアップ

### 1. 依存パッケージのインストール

```bash
cd ~/Document/Claude/kuge-ent-renewal
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスします。

### 3. 本番ビルド

```bash
npm run build
```

生成された `dist/` フォルダが本番用のスタティックファイルです。

## プロジェクト構成

```
src/
├── layouts/
│   └── Layout.astro           # メインレイアウト
├── pages/
│   ├── index.astro            # ホーム
│   ├── information.astro      # 診療案内
│   ├── about.astro            # 院長あいさつ
│   ├── facilities.astro       # 院内設備
│   ├── news.astro             # ニュース
│   └── contact.astro          # お問い合わせ
├── components/
│   ├── Header.astro           # ヘッダー
│   ├── Footer.astro           # フッター
│   └── Navigation.astro       # ナビゲーション
└── styles/
    └── global.css             # グローバルスタイル
```

## デザインシステム

詳細なデザイン仕様は `design.md` をご参照ください。

### カラーパレット

| 用途 | カラー | HEX値 |
|------|--------|--------|
| Primary 900 | 最も深い緑 | #1b453e |
| Primary 700 | ダーク緑 | #2d7c6f |
| Primary 500 | アクセント | #4db8a8 |
| Primary 50 | 背景 | #f0f7f6 |

### フォント

- **本文**: Noto Sans JP
- **見出し**: Noto Sans JP
- **装飾**: Noto Serif JP

## GitHub Pages へのデプロイ

このプロジェクトは GitHub Actions で自動ビルド・デプロイに対応しています。

1. リポジトリを GitHub にプッシュ
2. `.github/workflows/deploy.yml` が自動で実行
3. ビルド完了後、自動的に GitHub Pages にデプロイ

デプロイ先: `https://okadake.github.io/kuge-ent/`

### デプロイ設定

- **Site**: `https://okadake.github.io/kuge-ent/`
- **Output**: Static

GitHub Pages リポジトリ設定で、デプロイソースを「GitHub Actions」に設定してください。

## スクリプト

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# Astro CLI コマンド
npm run astro
```

## 推奨される今後の作業

- [ ] コンテンツの実際の情報に更新
- [ ] 診療時間、連絡先など実際の情報を入力
- [ ] 院長の写真、施設の写真を追加
- [ ] SEO メタデータの追加・最適化
- [ ] Google Analytics などの分析ツール統合
- [ ] フォーム送信のバックエンド実装
- [ ] お知らせのデータベース化

## ライセンス

© 2026 久下耳鼻咽喉科. All rights reserved.

## お問い合わせ

ご不明な点やご質問は、サイト内のお問い合わせフォームからお気軽にご連絡ください。
