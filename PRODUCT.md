# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro、TypeScript、Markdown／MDX，輸出為可免費部署的靜態網站。

## Users

網站訪客包括認識盧鼎頤的人，以及希望快速了解其能力、自我介紹、學習、技術實作、藝術創作與其他成果的人。主要受眾尚未限定為求職、升學或一般交流。

## Product Purpose

這是盧鼎頤的個人成果網站，用來展示與記錄各類成果，讓他人能快速了解盧鼎頤的能力與自我介紹，同時讓盧鼎頤能自行用 Markdown 持續新增與維護內容。

## Operating Context

盧鼎頤會在專案中新增 Markdown 檔案、圖片與分類資料，網站在建置時產生靜態成果頁與文章頁。

## Capabilities and Constraints

- 成果以兩個獨立維度整理：領域分為技術型與藝術型；形式可為作品／專案、競賽、證照、學習經歷或其他。
- 對外用語統一使用「成果」，不把所有內容稱為「作品」。
- 內容與圖片必須來自真實經歷；沒有真實素材時以排版呈現，不生成假電路圖、假程式碼或假成品。
- 內容以 Markdown／MDX 管理，不依賴付費 CMS、資料庫或後端。
- 網站必須支援手機與桌面瀏覽，並維持靜態部署。

## Brand Commitments

- 顯示姓名「盧鼎頤」。
- 自我介紹事實：畢業於大安高工資訊科，目前就讀於台灣科技大學電子工程系。
- 這是個人網站，不是商品、公司或商業品牌。
- 文案應直接、真實且克制，不使用品牌 slogan、人格包裝或行銷式宣言。
- 視覺方向為現代古典藝術感。

## Evidence on Hand

- 目前已有自我介紹與學歷資料。
- `src/content/achievements/` 與 `src/content/posts/` 內為展示內容系統用的範例，不能當成真實經歷宣稱。
- `public/images/profile-placeholder.svg` 是明確標示的臨時大頭照剪影，不代表真實外貌，也不得用作成果封面。
- 已提供聯絡 Email：`dennylulu1215@gmail.com`。
- 尚未提供真實成果照片、競賽名稱、獎項或社群帳號。

## Product Principles

1. 個人與成果優先，不塑造商業品牌。
2. 只呈現可確認的事實，不製造看似真實的經歷或成果。
3. 讓內容本身成為主角，介面退居其後。
4. 新增成果與文章必須維持簡單、可預期的 Markdown 流程。
