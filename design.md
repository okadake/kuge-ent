# 久下耳鼻咽喉科 サイトリニューアル デザインシステム

## 概要
医療機関としての信頼感と親しみやすさを両立させた、モダンで落ち着いたデザイン。シックなグリーンを基調とした色彩計画により、安心感と清潔感を表現します。

---

## カラーシステム

### プライマリカラー：シックなグリーン

#### グリーンパレット（深い落ち着き～明るさまで）
- **primary-900**: `#1b453e` - 最も深い緑（背景の濃いエレメント）
- **primary-800**: `#245d55` - 濃い深緑（テキスト、アイコン）
- **primary-700**: `#2d7c6f` - ダーク緑（メインの深い色）
- **primary-600**: `#3a9b89` - ミディアム緑（ホバー状態）
- **primary-500**: `#4db8a8` - **アクセント** 標準の明るい緑
- **primary-400**: `#64afa5` - ライト緑（ボタンホバー）
- **primary-300**: `#8cc3bc` - ライター緑（背景）
- **primary-200**: `#b3d7d3` - 薄い緑（フォーカス状態）
- **primary-100**: `#d9ebe9` - 非常に薄い緑
- **primary-50**: `#f0f7f6` - **背景色** グリーンティント

### セマンティックカラー
- **Primary**: `#2d7c6f` - ボタン、リンク、重要な要素
- **Accent**: `#4db8a8` - ハイライト、CTA
- **Success**: `#10b981` - 成功・確認メッセージ
- **Warning**: `#f59e0b` - 警告・注意
- **Error**: `#ef4444` - エラー・危険
- **Background**: `#f0f7f6` - ページ背景
- **Text**: `#1f2937` - 本文テキスト
- **Text Light**: `#6b7280` - サブテキスト
- **Border**: `#e5e7eb` - 枠線

---

## タイポグラフィ

### フォントファミリー
- **本文**: `Noto Sans JP` + システムフォント
- **見出し**: `Noto Sans JP` + システムフォント
- **装飾**: `Noto Serif JP`（必要に応じて）

### フォントサイズ・行送り（医療機関向け読みやすさ重視）
| 用途 | サイズ | 行送り | 用例 |
|------|--------|--------|------|
| Small | 12px | 16px | ラベル、補助テキスト |
| Base | 14px | 20px | ボタンテキスト、フォーム |
| Normal | 16px | 24px | 本文 |
| Large | 18px | 28px | サブ見出し |
| XL | 20px | 28px | 見出し |
| 2XL | 24px | 32px | セクション見出し |
| 3XL | 30px | 36px | ページ見出し |
| 4XL | 36px | 40px | ヒーロータイトル |

### フォントウェイト
- **Light**: 300（補助情報）
- **Regular**: 400（本文）
- **Medium**: 500（強調）
- **Bold**: 700（見出し、強調）

---

## スペーシング

統一されたスペーシングスケールにより、整然とした印象を実現します。

### スペーシングスケール
```
0 → 0
1 → 4px
2 → 8px
3 → 12px
4 → 16px
5 → 20px
6 → 24px
8 → 32px
10 → 40px
12 → 48px
16 → 64px
20 → 80px
24 → 96px
32 → 128px
```

### 用途ガイド
- **p-2 ~ p-4**: ボタン内パディング
- **p-4 ~ p-6**: カード内パディング
- **p-6 ~ p-8**: セクションパディング
- **gap-4 ~ gap-6**: グリッドアイテム間隔
- **mb-6 ~ mb-8**: セクション間隔

---

## コンポーネント仕様

### ボタン

#### プライマリボタン
- 背景: `primary-700` (#2d7c6f)
- テキスト: white
- パディング: `px-6 py-3`
- 角丸: `rounded-lg`
- フォント: bold
- ホバー: `primary-600`背景, スケール UP
- 遷移: `transition-all duration-200`

```html
<button class="px-6 py-3 bg-primary-700 text-white rounded-lg font-bold hover:bg-primary-600 active:bg-primary-800 transition-all duration-200">
  ボタンテキスト
</button>
```

#### セカンダリボタン
- 背景: transparent
- ボーダー: `primary-700` (2px)
- テキスト: `primary-700`
- パディング: `px-6 py-3`
- 角丸: `rounded-lg`
- ホバー: 背景`primary-50`

```html
<button class="px-6 py-3 border-2 border-primary-700 text-primary-700 rounded-lg font-bold hover:bg-primary-50 transition-all duration-200">
  ボタンテキスト
</button>
```

### カード

- 背景: white
- ボーダー: `primary-100` or none
- 角丸: `rounded-lg`
- シャドウ: `shadow-md`
- パディング: `p-6`
- ホバー時: シャドウ増加、スケール微UP

```html
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-200">
  カード内容
</div>
```

### ナビゲーション

#### ヘッダーナビゲーション
- 背景: white
- ボーダー: bottom に `primary-200` (1px)
- 高さ: 64px (h-16)
- ロゴ: 左側、`text-2xl font-bold text-primary-700`
- リンク: 中央揃え、`text-sm font-medium text-gray-700`
- ホバー: `text-primary-700`、下線なし

#### フッターナビゲーション
- 背景: `primary-800` (#245d55)
- テキスト: white
- パディング: `py-8`
- 区切り線: `primary-700`
- テキストサイズ: `text-sm`

### 見出し（Heading）

#### H1
- サイズ: 36px (4xl)
- ウェイト: 700 bold
- カラー: `primary-900`
- マージン: `mb-6`

#### H2
- サイズ: 30px (3xl)
- ウェイト: 700 bold
- カラー: `primary-800`
- マージン: `mt-8 mb-4`

#### H3
- サイズ: 24px (2xl)
- ウェイト: 600 semibold
- カラー: `primary-700`
- マージン: `mt-6 mb-3`

### フォーム要素

#### Input / Textarea
- ボーダー: `primary-300` (1px)
- 角丸: `rounded-md`
- パディング: `p-3`
- フォーカス: `outline-none border-primary-600`
- プレイスホルダーテキスト: `text-gray-400`

```html
<input 
  type="text" 
  placeholder="プレイスホルダー" 
  class="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:border-primary-600"
/>
```

### バッジ・タグ

- 背景: `primary-100`
- テキスト: `primary-700`
- パディング: `px-3 py-1`
- 角丸: `rounded-full`
- フォントサイズ: `text-xs`
- フォント: medium

```html
<span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
  タグ
</span>
```

---

## レスポンシブデザイン

### ブレークポイント
Tailwind CSS の標準ブレークポイントを使用：

| クラス | 最小幅 | デバイス |
|--------|--------|----------|
| (なし) | 0px | モバイル |
| sm | 640px | 小型タブレット |
| md | 768px | タブレット |
| lg | 1024px | 小型PC |
| xl | 1280px | PC |
| 2xl | 1536px | 大型PC |

### モバイルファースト設計
- **モバイル** (0px): 1列レイアウト、フルWIDTH、タッチフレンドリー
- **Tablet** (768px): 2列グリッド
- **PC** (1024px): 3列以上、最大幅コンテナ (max-w-6xl)

### 例：レスポンシブグリッド
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- アイテム -->
</div>
```

---

## デザインパターン

### セクションレイアウト
```html
<section class="py-12 md:py-16 lg:py-20 px-4 md:px-6">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-primary-900 mb-8">セクションタイトル</h2>
    <!-- コンテンツ -->
  </div>
</section>
```

### ヒーローセクション
- 背景: グラデーション (`primary-700` → `primary-600`)
- テキスト: white
- 高さ: `min-h-screen` (モバイル) / `h-96` (PC)
- 背景画像: オーバーレイ付き

### CTA セクション
- 背景: `primary-50` (薄い緑)
- ボーダー: top に `primary-700` (3px)
- テキスト中央揃え
- ボタン: プライマリスタイル

---

## アクセシビリティ

- **コントラスト比**: WCAG AA 以上
- **フォーカス状態**: すべてのインタラクティブ要素に明示的なフォーカス表示
- **モーション**: `prefers-reduced-motion` に対応
- **Alt テキスト**: すべての画像に設定
- **セマンティックHTML**: `<button>` `<a>` `<nav>` 等を適切に使用
- **ライトボックス**: キーボード操作対応

---

## ブランドボイス

### 医療機関としての信頼感
- クリーン・ミニマルなデザイン
- 明確な情報階層
- 親しみやすさと専門性のバランス

### 配色の意味
- **グリーン**: 自然、清潔、回復、希望
- **ホワイト**: 清潔感、透明性
- **ダークグレー**: 専門性、信頼感

---

## 実装ガイドライン

### 色の使い分け
1. **プライマリ機能**: `primary-700` (メインボタン、ナビゲーション)
2. **セカンダリ機能**: `primary-500` (補助ボタン、ホバー状態)
3. **背景**: `primary-50` (薄い背景)
4. **テキスト**: `gray-900`, `gray-700` (本文)
5. **アクセント**: `primary-500` (強調、CTA)

### 推奨される組み合わせ
- **H1 + body**: `primary-900` + `gray-700`
- **Button**: `primary-700` 背景 + white テキスト
- **Card**: white 背景 + `primary-100` ボーダー
- **Alert**: `primary-50` 背景 + `primary-700` ボーダー + `primary-900` テキスト

---

## 実装チェックリスト

- [ ] Tailwind CSS カラーパレット確認
- [ ] Google Fonts で Noto Sans JP / Noto Serif JP 読み込み
- [ ] ボタンコンポーネントの実装・テスト
- [ ] カードコンポーネントの実装・テスト
- [ ] ナビゲーション コンポーネント実装
- [ ] モバイル・タブレット・PC での動作確認
- [ ] アクセシビリティ監査 (コントラスト、フォーカス)
- [ ] クロスブラウザテスト
