# 🟢 SHREEKAMAL WEBSITE — MASTER ROOT FILE

> **Last updated:** 14 August 2026

---

## ⭐ INSTRUCTIONS FOR CLAUDE (naye chat mein ye file padho)

**Agar aap Claude ho aur yeh file ek nayi chat mein upload ki gayi hai — pehle isse poora padho.** Yeh ek cattle-feed business "Shreekamal Oil Industries" ki website ka project hai. User (naam: Shreekamal ji) **non-technical** hai aur **Hinglish** (Hindi + English roman script) mein baat karta hai — usse Hinglish mein hi, simple bhaasha mein jawab dena. Yeh file poore project ka record hai — business info, tech, files, ab tak ka kaam, aur pending cheezein. Isse padhke seedha kaam continue karo, user ko dobara sab samjhane ko mat bolo.

**Kaam karne ka tarika (IMPORTANT):**
- User ke computer ki website folder yeh hai: `C:\Users\lenovo\Documents\nikhil sheet\website\shreekamal` (Windows, device bridge `mcp__remote-devices__*` se pahunchti hai). **YEH FOLDER HI ASLI SOURCE HAI** — cloud workspace `/root/new-files/` kabhi-kabhi reset ho jata hai (ephemeral). Isliye kaam shuru karne se pehle device se latest files `device_stage_files` se stage karke usi par kaam karo, warna user ki manual changes revert ho sakti hain.
- Nayi/badli hui file pehle cloud workspace `/root/new-files/` mein banao, phir `SendUserFile` se do, phir `mcp__remote-devices__device_commit_files` (force:true) se user ke folder mein likho.
- User apne aap VS Code se **Commit + Sync** karke site live karta hai (GitHub Pages). Har kaam ke baad usse yeh yaad dilana, aur **incognito** mein check karne ko kehna (cache issue).
- Image cache-busting ke liye HTML mein `?v=1` → `?v=2` badalte raho jab image replace ho.
- Local render/screenshot ke liye: `playwright-core` + Chromium `/opt/pw-browsers/chromium`. Splash hide karne ke liye `#skIntro{display:none!important}` addStyleTag. Splash JS ~2.6s scroll lock karta hai, isliye test mein ~3s wait karo. `images` symlink → staged images folder.
- **Har naye change ke baad NEECHE "CHANGE LOG" aur "PENDING" section update karo, aur yeh file dobara user ke folder mein save kar do — taaki hamesha up-to-date rahe.** (User ne yeh khaaskar kaha hai — 14 Aug ko dobara bola.)

---

## 1. BASIC INFO (ek nazar mein)

| Cheez | Detail |
|---|---|
| Business | Shreekamal Oil Industries |
| Product | **Cotton Seed Oil Cake** (Binola Khal), **Cotton Seed**, **Cotton Seed Oil** (3 products) |
| Founded | 2011 (family legacy since 1969) |
| Address | Mauza Kohli, Jamb Road, Hinganghat — 442301, Maharashtra |
| Reach | 5 Lakh+ clients, 7 states (site par "5 Lakh+" likha hai) |
| WhatsApp / Phone | +91 95285 47179 (link: https://wa.me/919528547179), +91 98739 32670 |
| Instagram | https://www.instagram.com/shreekamalagro/ |
| Facebook | https://www.facebook.com/shreekamalagro/ |
| YouTube | https://www.youtube.com/@shreekamalagro |
| Live website | https://nikhil96235.github.io/shreekamal/ |
| GitHub repo | Nikhil96235 / shreekamal |
| Computer folder | C:\Users\lenovo\Documents\nikhil sheet\website\shreekamal |

**Group companies:** Aadit Oil Mill · Singhal Agro Products · Fenixx Innovation Private Limited
**Brands:** Radha Govind · Panchratan · Radha Kaithal · Gaiyya · Shri Kamal · Amrit Kalash · Butter Milk
*(Note: "Radha Kaithal — Gold Pack" / radhagovind_kaithal brand user ke kehne par DELETE kiya tha gallery + cattle-feed-cake se.)*

---

## 2. WEBSITE KAISE BANI HAI (Tech stack)

- **HTML** — har page ka structure
- **CSS** — ek hi shared file `style.css` mein saara design
- **JavaScript** — `script.js` (sliders, menu, animations, count-up) + kuch inline JS
- **Firebase (Firestore)** — reviews aur admin login. Project id: `shreekamal-36ba3`. Config file: `firebase-config.js`. Storage use nahi hota — photos data-URL ke roop mein.
- **FormSubmit** — Contact form ka message email par bhejne ke liye
- **GitHub Pages** — free hosting (live)

**Design system (LATEST):**
- Top redesign (friend shailesh7277.github.io/Skoi jaisa): **navy topbar + WHITE navbar + full-width hero slider + spiky white grass edge.**
- Accent colours ab: **navy `#132147` + gold `#f5c030`** (stats box, facility cards, icons). Base cream `--cr:#fffdf5`. Purane green variables abhi bhi CSS mein hain (`--gm`, `--gr`, `--gy` etc.) kyunki neeche ke kuch sections green use karte hain.
- Fonts: **Playfair Display** (headings/numbers) + **Inter** (body)
- **Logo:** LOTUS (kamal) — `images/logo.png` (navbar), favicon bhi lotus.
- Reveal animations: **facility section side se** (left content left se `rv-left`, right boxes right se `rv-right`), **baaki sab sections neeche-se-upar slide** (`.reveal` = translateY 48px, smooth ease-out). script.js IntersectionObserver.
- Count-up numbers (`.cf-count`): scroll par 0 se ginti; **har baar view mein aane par dobara chalta hai** (bahar jaate hi 0 reset). Facility "50 MT" + stats box (5 Lakh+/55+/7).

---

## 3. SAARE PAGES / FILES

| File | Kya hai |
|---|---|
| index.html | Home — splash, hero slider (drift-proof), stats box, products (3 cards), brands slider, cotton section, quality, 7 states, **facility/company section (50 MT + checklist)**, group, why-us, about/timeline, testimonials, contact form, footer |
| products.html | Products — 3 product cards (Cotton Seed Oil Cake, Cotton Seed, Cotton Seed Oil) |
| brands.html | Brands — full-width banner + brand cards + lightbox |
| gallery.html | Gallery — brand bags, lightbox |
| about.html | About — 55+ saal legacy, timeline, vision/mission, group, why-us |
| contact.html | Contact — Google map, form, phone, WhatsApp |
| cattle-feed-cake.html | Product page: **Cotton Seed Oil Cake** (URL/filename purana hi hai) |
| cotton-seed.html | Product page: Cotton Seed |
| cotton-seed-oil.html | Product page: **Cotton Seed Oil** (naya, 13 Aug) |
| admin.html | Admin login (reviews — Firebase) |
| style.css | Poore site ka shared design |
| script.js | Sliders, menu, reveal animations, count-up |
| firebase-config.js | Firebase settings |
| PROJECT-NOTES.md | **Yeh file** — master root record |

**Navbar links:** Home · Products · Brands · Gallery · About · Contact · Get Quote
**Logo files:** `images/logo.png` (lotus, navbar sab pages), `favicon.png` + `favicon-180.png` (lotus tab icon).

**Key product images (user ki ASLI photos — inhe replace mat karna):** `COTTONSEEDOIL.jpeg` (Cotton Seed Oil Cake), `COTTONSEED.jpeg` (Cotton Seed), `COTTONOIL.jpeg` (Cotton Seed Oil). Hero: hero1-3.jpg, farm.jpeg. Splash: splash.jpg + splash-mobile.jpg (lotus + cow, "पशु स्वस्थ, दूध ज्यादा").

---

## 4. CHANGE LOG (kya-kya kaam hua)

*(Purane changes 21 July–3 Aug niche list mein hain — sabse latest sabse upar.)*

**13–14 August 2026:**
- **gallery.html captions se company sub-line (Aadit Oil Mill/Avik Agro/Singhal) hatai** — sab items me sirf brand name. gal-cap span + data-cap ka "|Company" part removed; lightbox JS already safe. *(14 Aug)*
- **Right-side blank space (horizontal overflow) fix** — desktop-site mode/mobile par content screen se ~38px chauda tha (contact form fields + sliders), page ke right me blank strip aata tha. Fix: `html{overflow-x:hidden}` + `body{max-width:100%}` (pehle sirf body pe overflow-x tha). Ab docW==viewport har width par. *(14 Aug)*
- **Mobile splash box/strip fix** — pehle landscape splash contain hone se mobile par beech me strip dikhti thi. Ab portrait (1080x1920) splash-mobile.jpg banayi (splash ka sky upar-neeche edge-extend karke), mobile CSS object-fit contain→cover, v3. Full-screen dikhti hai. *(14 Aug)*
- **Facility section me infrastructure photo (images/infra.jpeg) lagai** — placeholder ki jagah. Scroll par UPAR-SE-NEECHE "open" animation (clip-path inset reveal, class .rv-open). Trigger scroll-based check se (reliable). CSS: .cf-photo img cover + .reveal.rv-open clip-path. *(14 Aug)*
- **Language toggle (English/Hindi) add kiya** — navbar me "🌐 हिंदी" button (script.js me inject hota hai, isliye sab pages pe). Google Translate widget use karta hai (googtrans cookie /en/hi <-> /en/en, reload). Default GT banner CSS se hide kiya. Machine translation — live site (internet) par hi chalega. *(14 Aug)*
- **products.html product section heading home jaisa kiya** — "Our Product Range" ab center + gold Playfair (section-eyebrow style), pehle left plain pd-block-title tha. Cards home se already same. *(14 Aug)*
- **about.html ka Group section bhi home jaisa kiya** — 4 cards (Shreekamal+Aadit+Singhal+Fenixx) asli logos ke saath, bina description. *(14 Aug)*
- **cattle-feed-cake.html ke brand cards bhi same simplify** (maker+desc hataye, common 2 tags). *(14 Aug)*
- **brands.html cards simplify:** pd-brand-maker (Aadit Oil Mill etc.) + pd-brand-desc hataye, "★ Flagship" hataya. Sirf brand name (16px) + 2 common tags sab me: COTTON SEED OIL CAKE + 100% PURE. *(14 Aug)*
- **Testimonials (Success Story) section ko darker warm bg (#f1e6ce) + top/bottom line** (border 2px rgba(180,120,40,.30)) diya taaki upar/neeche wale sections se alag block dikhe. *(14 Aug)*
- **Testimonials section dost ki site jaisa redesign:** dark green → light cream (--c2) + village-beige watermark. Cards ab gold quote-badge (circle) + 5 stars + review text (Hindi text waise hi rakha). Name/role/photo NAHI (user ne mana kiya). Firebase dynamic review template (index.html JS) bhi naye design me update kiya. *(14 Aug)*
- **"Why Trust Us" (why-section) background dark green → LIGHT ORANGE (#fae1be)** taaki village/hut line-art dikhe. Watermark village-white.png → village-beige.png (brown lines). Text colors dark kiye (title/why-title navy #132147, why-text muted navy, eyebrow #b26a12); why-card light translucent white. *(14 Aug)*
- **Group logos ko TRUE transparent banaya:** user ne AOM2.jpeg/FENIXX1.jpeg "transparent" samajh ke daali thi par wo BLACK-bg JPEG thi. Inka black bg (aur SAP ka white bg) key-out karke transparent PNG banaye: `aom-logo.png`, `fenixx-logo.png`, `sap-logo.png`. mix-blend-mode hataya. Ab charo logos card pe bilkul clean (bina box). Fenixx me pehle sirf phoenix reh gaya tha (FENIXX1 me text black-on-black tha) → original FENIXX.png (text+phoenix) se color-distance keying karke fenixx-logo.png banaya, ab "FENIX INNOVATION" text + phoenix dono transparent. *(14 Aug)*
- **Group cards ke emoji icons → asli company logos:** Shreekamal=logo.png (lotus), Aadit Oil Mill=AOM1.jpeg, Singhal=SAP.jpeg, Fenixx=FENIXX.png. Card content center kiya. Pehle white tile diya tha, user ko box nahi chahiye tha → tile hataya, `mix-blend-mode:multiply` se logos ke white/cream bg card me blend (box na dikhe). AOM1/FENIXX me halki baked border reh sakti hai (transparent PNG mile to fully clean). *(14 Aug)*
- **Group Companies section:** naya card "Shreekamal Oil Industries" (lotus 🪷) add — ab 4 cards. Descriptions (group-desc) hataaye, names bade (17px→21px), grid 3→4 columns ek line me (card padding chhota). *(14 Aug)*
- **7 States section:** state names bade kiye (`.state-name` 14px→19px, weight 700, same green `--gm`); har state ki sub-line (Largest Market/Headquarters etc.) hatai — sirf "Expanding… / More states coming soon" rahi. *(14 Aug)*
- **Quality section grid 4→3 columns** (FSSAI card hatne ke baad 3 cards side me lag rahe the) + max-width 980 center. *(14 Aug)*
- **"FSSAI" sab jagah se hataya** — index (cotton feature chip, quality section ka poora FSSAI card, section-desc), products.html (meta, benefit text, spec row → "Purity Guaranteed"), about.html (why-text). Quality section ab 3 cards. *(14 Aug)*
- **Cotton Seed section (index.html "Premium Cotton Seed" block) ki image** purani `product-cotton-seed.jpg.jpeg` → user ki nayi `COTTONSEED.jpeg`. *(14 Aug)*
- **Brands slider (index.html) cards chhote kiye** — har brand-desc sirf PEHLE sentence tak (first "." tak); brand-tags mein 2 ki jagah SIRF 1 tag "COTTON SEED OIL CAKE" (sabhi 7 cards). *(14 Aug)*
- **"Our Products" aur "Our Brands" section headings ko CENTER kiya** (title + subtitle + desc). Reveal div par `text-align:center;max-width:640px;margin:0 auto`. *(14 Aug)*
- **Stats (5 Lakh+ / 55+ / 7) ko ek WHITE BOX (card) mein daala** — section bg WHITE, box bahut HALKA (soft shadow `0 4px 18px .05` + patli border `.05` + patle dividers) taaki bas halka sa box dikhe (Kapila reference jaisa; pehle cream+strong shadow tha, user ko zyada laga to soften kiya). Mobile par stacked, horizontal dividers. *(14 Aug)*
- **Favicon (browser tab icon) LOTUS kiya** — navy rounded square + white lotus. `favicon.png` (64) + `favicon-180.png` (180), sabhi pages, v2. Pehle favicon.svg (flame) tha. *(14 Aug)*
- **Naya LOTUS logo** — purana diya/flame SVG hataya, sabhi 9 pages ke navbar mein `images/logo.png` (splash se extract, black lotus, transparent). Naya CSS class `.nav-logo-img` (height:46px). *(14 Aug)*
- **Nayi splash image** — user ki WhatsApp image (lotus + श्रीकमल + gaay, "पशु स्वस्थ, दूध ज्यादा"). `splash.jpg` + `splash-mobile.jpg` dono replace; mobile par `object-fit:contain` (pura logo dikhe); v2. *(14 Aug)*
- **User ne khud asli product photos wire ki** (COTTONSEEDOIL/COTTONSEED/COTTONOIL) home + detail pages par. Humne `products.html` ko bhi inhi photos se match kiya (consistency). *(14 Aug)*
- **Sections reveal animation** — facility section side se (rv-left/rv-right), baaki sab neeche-se-upar slide (48px). *(13 Aug)*
- **Stats bar count-up + re-trigger** — 5 Lakh+/55+/7 scroll par ginti; har baar view mein aane par dobara. *(13 Aug)*
- **Teesra product "Cotton Seed Oil" add kiya** — home + products cards, nayi detail page `cotton-seed-oil.html`, footer links, products grid 3-column. *(13 Aug)*
- **"Cattle Feed Cake" naam poori site par "Cotton Seed Oil Cake" kiya** — links/filenames (cattle-feed-cake.html) same rakhe. *(13 Aug)*
- **Facility / Company section banaya** (7-states ke neeche): left text + gold "50 MT Daily Production Capacity" card (count-up) + navy checklist card. Location/map card baad mein hataya, dono box center kiye. *(13 Aug)*
- **Hero slider fix** — friend jaisa seamless slide; scroll/tab-switch ke baad blank ho jata tha (drift) → off-screen/hidden par pause + valid slide par snap. Hero 6th image hataya. *(13 Aug)*

**Purane (21 July – 6 Aug):**
- WhatsApp number theek kiya; Splash/intro screen banaya; 4 detail pages (Products/Brands/About/Contact); hero + brands slider auto-move fix; Gallery + lightbox; Founder frame; hero-side marquee popup; Quality section; images optimize (21MB→~160KB); brand banner; PDF guide; footer auto-year.
- PROJECT-NOTES.md master file banayi *(21–22 July)*; Facebook + Instagram + YouTube icons sab pages *(22–31 July)*.
- **Top design friend jaisa** (navy topbar + white navbar + full-width hero + spiky grass; marquee hataya; stats bar white + navy icon cards; farm.jpeg hero slide 1) *(6 Aug)*.
- **Founder ki photo + naam poori tarah HATAYA** (user ne kaha naam kahin na ho) *(3 Aug)*.
- **Splash mobile fix** (portrait splash-mobile.jpg) *(3 Aug)*.

---

## 5. PENDING / KARNA BAAKI HAI

- [ ] **Domain jodna** — `shreekamalagro.co.in` (GoDaddy). ⚠️ Domain **expire ho chuka hai / renew karna hai** (user ko ~₹749 renewal karna hai) — tab tak PAUSED. CNAME file abhi **khali** hai (repo mein). Renew ke baad SAHI ORDER: (1) GoDaddy login recover (2) DNS: 4 A records (185.199.108–111 .153) + www CNAME → nikhil96235.github.io (3) SABSE AAKHIR mein CNAME file mein domain daalna.
- [ ] **SEO** — domain ke BAAD: Google Search Console, Google Business Profile, sitemap.xml, robots.txt, business schema, keyword titles, IndiaMART/JustDial/TradeIndia listings.
- [ ] **FSSAI number + GST number** — Quality/Contact section mein daalne (trust ke liye).
- [ ] **FormSubmit activate** — pehli baar confirmation email aata hai, use click karna zaroori (warna contact form kaam nahi karega).
- [ ] **Firebase account** — project `shreekamal-36ba3` kis Google account mein hai dhoondna baaki.
- [ ] **Infrastructure photo** — facility section mein abhi blank placeholder hai; user asli factory photo dega tab lagani hai.
- [x] ~~Cotton Seed Oil card placeholder~~ — user ki asli COTTONOIL.jpeg lag gayi.
- [x] ~~Lotus logo + favicon~~ — ho gaya *(14 Aug)*.

---

## 6. WEBSITE LIVE KAISE KARE (deploy)

Jab bhi files change ho, VS Code mein:
1. **Source Control** kholo (left side branch icon)
2. Saare changes **+** se stage karo (nayi file/image ho to zaroor stage karna)
3. Message box mein chhota note likho
4. **Commit** → phir **Sync Changes** (push)
5. 1–2 minute baad site update — **incognito window** mein `?v=` laga ke check karna (cache).

---

## 7. IMPORTANT DECISIONS / GOTCHAS (yaad rakhne layak)

- **DEVICE FOLDER = SOURCE OF TRUTH.** Cloud `/root/new-files/` reset ho jata hai. User apne aap bhi images/HTML badalta hai. Isliye kaam se pehle device se stage karke latest par kaam karo — purani copy se deploy mat karo (warna user ka kaam ud jayega). *(14 Aug ko yeh issue aaya tha.)*
- **User ki images kabhi purani se replace mat karna** — jo naam user ne di hain (COTTONSEEDOIL/COTTONSEED/COTTONOIL, splash, logo) wahi rakhna.
- **SEO domain ke BAAD.**
- **Domain se editing nahi badalti** — domain sirf naya naam, deploy tarika same.
- **Windows filename issue** — capital naam / double extension (hero5.jpg.jpeg). GitHub case-sensitive — file seedha device par correct naam se likhna safe.
- **Cache** — image replace par `?v=` badalna + incognito. Favicon zyada cache hota hai → Ctrl+Shift+R.
- **External github.io Playwright se nahi khulta** — local files `/root/new-files/` se render karo.
- **VS Code "file is newer" error** — Overwrite mat dabao; tab close (Don't Save) / Revert; phir Commit+Sync.
- **Facility count / stats count** — sab `.cf-count` class use karte hain; ek hi script sabko handle karta hai.

---

*Yeh master root file hai. Nayi chat mein isse upload karo — hum wahin se continue karenge. Har naye change ke baad yeh file update hoti rahegi.*
