# Member portrait update — 2026-09-11

Source: the updated `官网信息收集表 (2).xlsx` supplied from Downloads. Workbook is read-only; original photos, contact details and student identifiers are not included in this update.

Compared embedded photo SHA-256 values with the prior workbook, excluded the header's example image, and matched site entries by name rather than row number. Eight newly supplied portraits replace empty avatar slots. Existing 14 processed portraits are retained.

| Member | Source cell/anchor row, 工作表1 | Website asset under assets/people |
| --- | --- | --- |
| 李文萱 | B7 / row 7 | li-wenxuan-simple-20260911.png |
| 汤开杨 | B27 / row 27 | tang-kaiyang-simple-20260911.png |
| 李嘉祥 | B28 / row 28 | li-jiaxiang-simple-20260911.png |
| 王漪璇 | B30 / row 30 | wang-yixuan-simple-20260911.png |
| 陈泓桥 | B40 / row 40 | chen-hongqiao-simple-20260911.png |
| 梁清华 | B43 / row 43 | liang-qinghua-simple-20260911.png |
| 王吉辉 | B44 / row 44 | wang-jihui-simple-20260911.png |
| 左卡 | B46 / row 46 | zuo-ka-simple-20260911.png |

## Image generation

Final targeted refinement for Zuo Ka, also using built-in image editing: “Fix only the eyebrows in this doodle: it currently has TWO arcs above each eye (four eyebrow arcs). Remove the upper extra pair of short arcs, retain exactly ONE eyebrow arc above each eye. Preserve the hair silhouette, face, two dot eyes, nose, smile, clothing, black background, framing and all other lines exactly. No other changes.”

Mode: built-in image generation, one style-transfer edit per portrait. Input 1 is that member's extracted photo. Input 2 is the existing `assets/people/member-9-simple.png` as a style reference only.

Shared prompt for each of the eight members:

> Use case: style-transfer. Create ONE square website member avatar. Image 1 is the person to portray; image 2 is STYLE ONLY, do not copy its identity or clothing. Translate person 1 into an extremely simple friendly line doodle like reference 2: thick rounded ivory-white outlines on solid near-black #0b0b0b background. Dot eyes, two eyebrow strokes, a tiny bent-line nose and single mouth curve; recognizable simplified hair silhouette and original collar/clothing outline. Preserve person 1's hairstyle, face shape, no invented glasses or accessories. Center head and shoulders, generous ~12% margin, same visual size as style reference. Very few lines, NO realistic facial details, NO shading, NO hair strands, NO textures, NO gradients, NO text, no border. Output exactly one portrait, not a collage.
