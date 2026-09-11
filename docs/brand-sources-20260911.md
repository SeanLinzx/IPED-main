# Partner brand sources — 2026-09-11

## Ready to use

- `assets/partners/oppo.svg`: extracted the first OPPO homepage header inline SVG from https://www.oppo.com/cn/ (`aria-label="OPPO homepage"`). Original path geometry retained; black fills changed to white for the dark background. Transparent vector, no background rectangle.
- `assets/partners/vivo.svg`: extracted homepage header inline SVG from https://www.vivo.com/en/about-vivo (`class="vep-pc-logo"`). Original white paths and geometry retained. Transparent vector, no background rectangle.

## VATTI source, needs background removal

- **Ready alternative found:** `assets/partners/vatti-global.png`, directly downloaded from https://www.vatti-global.com/wp-content/uploads/2021/06/acv.png, linked as the header logo on https://www.vatti-global.com/about/. 1136 × 466 PNG, alpha channel present, visually clean teal wordmark without a teal background shape. Original file retained without raster editing. This is the preferred asset; CSS may render it white for a dark page.

- `assets/partners/vatti.png`: downloaded directly from https://www.vatti.com.cn/images/logo.png, referenced by the fetched homepage header. PNG includes an alpha channel but visual inspection shows a white wordmark on a large teal shape, so it is NOT ready as a transparent wordmark. Do not use unprocessed. No guessed or text-rendered replacement has been created.
- The official shop https://shop.vatti.com.cn/ references another raster logo at https://shop.vatti.com.cn/public/static/images/ad/5a4ef6592832e.jpg; JPG is not transparent.

## School WeChat entry

- Official school article https://design.hnu.edu.cn/info/1032/8215.htm explicitly identifies the school's official account as **设计四合院**. Other official articles (8190.htm, 8191.htm) corroborate it.
- The current official school homepage https://design.hnu.edu.cn/ directly links to https://mp.weixin.qq.com/s/DfVOvd3gBqtiCqoaJLSRNA (精彩回顾｜《数字文化创新模块专题设计二》课程展).
- A stable official account profile URL has not been verified. The article is an official-school-linked WeChat content entry, NOT a verified account profile URL. Do not invent a `__biz` ID or claim the article URL is the account homepage.

Brand marks are used solely to identify the named collaboration partners. Their ownership remains with the respective companies.
