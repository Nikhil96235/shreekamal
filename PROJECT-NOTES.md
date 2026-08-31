# 🟢 SHREEKAMAL WEBSITE — MASTER ROOT FILE

> **Last updated:** 27 August 2026

---

## ⭐ INSTRUCTIONS FOR CLAUDE (naye chat mein ye file padho)

**Agar aap Claude ho aur yeh file ek nayi chat mein upload ki gayi hai — pehle isse poora padho.** Yeh ek cattle-feed business "Shreekamal Oil Industries" ki website ka project hai. User (naam: Shreekamal ji) **non-technical** hai aur **Hinglish** (Hindi + English roman script) mein baat karta hai — usse Hinglish mein hi, simple bhaasha mein jawab dena. Yeh file poore project ka record hai — business info, tech, files, ab tak ka kaam, aur pending cheezein. Isse padhke seedha kaam continue karo, user ko dobara sab samjhane ko mat bolo.

**Kaam karne ka tarika (IMPORTANT):**
- 🚨 **SABSE PEHLA RULE (user ne khaaskar kaha — 27 Aug): koi bhi naya change/update karne se PEHLE, hamesha user ke device se us file ki LATEST copy `device_stage_files` se stage karo aur apni cloud copy se `diff` karke dekho ki user ne khud manually kuch edit to nahi kiya. Agar kiya hai to us latest copy ko adopt karke (cloud me copy karke) USI ke upar kaam karo — user ki manual edits kabhi overwrite/revert mat karo.** User apne aap bhi code/text/images manually badalta rehta hai.
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

**27 August 2026:**
- **Cotton Seed Oil Cake card image update** — user ne nayi `cake1.png` (asli binola khal cake photo) di. Optimize → `cake1.jpg` (1400px, 331KB). `COTTONSEEDOIL.jpeg` ki jagah 3 spots: index card, products card, cattle-feed-cake hero. ?v=1. *(27 Aug)*
- **Nayi splash image lagayi** — user ne `spl.png` (Shreekamaloil Industries wordmark + tagline + cow) di. White bg whiten + trim + optimize → `splash.jpg` (1660x722, 128KB). Ek hi image contain se desktop+mobile dono pe (existing setup). ?v=6. *(27 Aug)*
- **Cotton Seed card image update** — user ne nayi `cssed1.jpeg` (burlap sack se seeds nikalte hue) di. Optimize karke `cssed1.jpg` (1400px, 190KB). `cottonseed1.jpg` ki jagah 4 spots pe lagayi: index (product card + Premium Cotton Seed section), products.html card, cotton-seed.html hero. (Beech me cseed.jpeg bhi try ki thi par cssed1 use ki.) *(27 Aug)*
- **Footer BRANDS list se duplicate "Radha Govind" hataya** (Radha Kaithal→Radha Govind karne se do baar aa gaya tha). Panchratan ke baad wala Radha Govind li remove kiya. Sirf 4 pages me BRANDS footer-column thi: index, cattle-feed-cake, cotton-seed, cotton-seed-oil (baaki me PRODUCTS/COMPANY/GROUP columns). *(27 Aug)*

**26 August 2026:**
- **About stats box labels me gold bracket-tag jode** (index.html about-stat): "LEGACY BEGINS **(Manufacturing)**", "COMPANY FOUNDED **(Trading)**". Naya span `.about-stat-lbl .stat-sub{color:var(--gy);font-weight:700}` (nowrap, chhota font taaki ek line me). Desktop-site-mode (mobile) me About box cut ho raha tha (2-col me about-visual side column ~980px pe off-screen) → `.about-grid` ko `@media ≤1024px` pe 1-col kiya → box full-width, dono cards poore dikhte hain. Aur brand-banner.png (3MB) → brand-banner.jpg (368KB) optimize + brands.html reference update. Cloud copy user ki manual edits se sync ki. *(26 Aug)*
- **Nayi WIDE hero images lagayi (6)** — user ne 1920×818 (~2.35 / 21:9) ki 6 images di (jaisa maine suggest kiya). Optimize karke `hu1.jpg`–`hu6.jpg` banaya (2-3MB PNG → ~300-416KB JPEG). User ke order me: hu1=update2, hu2=update, hu3=update3, hu4=update4, hu5=update5, hu6=update6. `.hero-slides` ko `aspect-ratio:1920/818` kiya (height:56.25vw+max-height:620 hataya) → ab hero images POORI dikhti hain (no cut/bar) AUR chhoti height (1280px pe 545px, aspect 2.35). Purani hero images (farm/hero1-5) ab use nahi. NOTE: mobile pe wide banner short strip dikhega (wide image ka nature). *(26 Aug)*
- **"Why Trust Us" (why-section) cards clean kiye** — har card se `why-text` (sub-line) hataya (4 cards: 55+ Year Legacy, Timely Delivery, Best Prices, Quality Certified), aur heading badi ki `.why-title` 15px→21px (weight 600→700, margin-bottom 8→0). Ab icon + badi heading. *(26 Aug)*
- **Timeline ke aakhri 2 points merge kiye** (index+about): "2015–2020 Expansion" + "TODAY — Trusted across 7 states" → ek point **"2015 – ONGOING — EXPANSION ACROSS INDIA"**, dono ka text ek tl-text me joda ("Network grows… Radha Govind & Panchratan. Today, 5 Lakh+ happy clients across 7 states — …journey continues."). Ab timeline me 3 points. *(26 Aug)*
- **Facility section se navy checkmark-box hataya** — `.cf-card.cf-navy` (2 points: "Most modern plant…" + "Less dependence…") poora remove. Ab `.cf-right` me sirf gold "500 MT Daily Production Capacity" card, jo `justify-content:center` se apne aap vertically center (left photo ke saath balanced). Baad me card bada kiya (chota lag raha tha): `.cf-card` padding 26/28→42/40, `.cf-big` 46→64px, lbl 14→16, desc 13.5→15, ico 46→56px. *(26 Aug)*
- **Home brand slider cards clean kiye** (user ki latest manual-edited index.html pe kaam kiya — unki text edits preserve): har card se `brand-desc` (sub-line) hataya (static 7 + dynamic Firebase template), brand-name bada (`.brand-name` 20px→26px, margin-bottom 8→14). Tags pehle se sab same the ("COTTON SEED OIL CAKE") — barabar rahe; dynamic template me bhi wahi tag add kiya consistency ke liye. *(26 Aug)*

**25 August 2026:**
- **Hero: chhoti-vs-poori experiment, aakhir me ORIGINAL wapas.** Pehle max-height:620 hataya (full 16:9, poori image par taller) → user ko tall laga. Blur-fill (contain + blurred bg) try kiya → user ne mana kiya (wide screen pe blur bars dikhe). Aakhir user ne "jaise suru me the waise" bola → `.hero-slides max-height:620px` + `.hs-img object-position:center 78%` wapas (original chhoti height, cover). NOTE: `.grass-hero` display:none (straight line) waisa hi rakha (wo alag request thi). *(25 Aug)*
- **Hero ke neeche wala zigzag/grass divider hataya** — `.grass-hero` (clip-path polygon sawtooth) ko `display:none` kiya, ab hero ki bottom edge bilkul straight line hai (user ne plain straight chaha). *(25 Aug)*
- **Home page pe VIDEO SECTION add kiya** (Products section ke baad, Brands slider se pehle). User ne `video/` folder me 2 mp4 di. Web ke liye compress kiya: video1 6.6MB→2.8MB, video2 122MB(2.7K!)→4.2MB (720p, crf 26-27, +faststart). `video/shreekamal-video1.mp4` (dada-pota-gaay emotional ad) + `video/shreekamal-video2.mp4` (2 kisaan conversation, Shri Kamal binola khal). Posters `video/poster1.jpg`/`poster2.jpg`. Native `<video controls preload="none" poster>` 2-up grid (`.video-grid` — mobile stack). Heading "Swasth Pashu, Adhik Doodh". CSS `.video-section/.video-grid/.video-card`. Poster2 pehle motion-blur frame tha → 21s ka clean frame (?v=2). Script.js me IntersectionObserver add: video screen se bahar (threshold 0.2) jaate hi pause + currentTime=0 + load() → wapas poster/start par (chalti nahi rehti). Plus: ek video play hone par baaki auto-pause (ek time par ek hi chale). User ne video2 ka caption manually chhota kiya ("Kisaan ki Zubaani — 100% Shudh Binola Khal" → "100% Shudh Binola Khal") — wahi rakha (cloud copy bhi sync kar di). *(25 Aug)*

**18 August 2026:**
- **Timeline "2015–2020 Expansion" ka text trim** (index+about): "Group expands operations — Aadit Oil Mill and Singhal Agro Products established." hataya; bacha "Network grows to 5+ states with multiple brand launches including Radha Govind & Panchratan." *(18 Aug)*
- **REVERT: naya logo (logo23) hata ke wapas pehla (1st) logo lagaya usi original size me.** `shreekamal-logo.png` ko phir se `log.jpeg` se banaya (horizontal compact "Shreekamaloil Industries" + leaf side me, 1149x323). CSS wapas: `.nav-logo-full` 44px, navbar height 72px (scrolled 60px). ?v=3 (cache bust). (Neeche wala "naya logo lagaya" wala kaam undo ho gaya.) *(18 Aug)*
- **Shreekamal ka naya logo lagaya** (user ne `logo23.jpeg` di — wahi wordmark, thoda stacked layout, leaf upar). White bg hata ke transparent `shreekamal-logo.png` banaya (distance-from-white key + trim, 1122x768). Purane shreekamal-logo.png ki jagah — navbar (9 pages) + group card (index+about) — sab jagah automatically. Stacked hone se navbar me chhota lag raha tha → `.nav-logo-full` height 44px → 54px. ?v=2 (cache bust). User ne aur bada bola → logo 66px (navbar 86px). Phir aur bada → **logo 80px, navbar height 100px (scrolled 84px)** — text clear bada, EST fit. (Logo stacked+leaf-upar hone se height chahiye thi.) *(18 Aug)*

**17 August 2026:**
- **index.html Premium Cotton Seed section se "Gossypium hirsutum — Premium Grade" line hatai.** "Cotton Seed" label ko `notranslate` + `translate="no"` kiya (Hindi me English rahe). Aur script.js ke notranslate selector me `.pd-title` add kiya taaki product detail pages ke naam (Cotton Seed Oil Cake / Cotton Seed / Cotton Seed Oil) Hindi mode me shudh-hindi na ho ke English rahein. (Side effect: products.html ka pd-title tagline "Pure Quality…" bhi ab English rahega.) *(17 Aug)*
- **Product detail pages ka hero background dark-green → CREAM** kiya (user ne cream swatch bheja). `.pd-hero` bg `var(--gd)` → `var(--c2)` (#f7f2e8, site ka existing cream). Text cream pe readable banaya: pd-title `#fff`→`var(--td)`, pd-desc white→`var(--tm)`, pd-eyebrow gold(--gy)→amber(--gr), breadcrumb white→`--tt`/links `--gr`, pd-tag amber-on-cream. Ek style.css change se sabhi 4 pages (cattle-feed-cake/cotton-seed/cotton-seed-oil + products.html listing) ka hero cream ho gaya. *(17 Aug)*
- **Cotton Seed ki nayi image lagayi** — user ne `cottonseed1.png` (2.8MB, burlap sack + seeds + "Cotton Seeds" sign + cotton field) di. Web ke liye optimize karke `cottonseed1.jpg` (1400px, ~318KB) banaya. Purani `COTTONSEED.jpeg` ko 4 jagah replace kiya: products.html card, cotton-seed.html hero, index.html (product card + Premium Cotton Seed section). ?v=1. *(17 Aug)*
- **Home brand slider ke 2 naam badle** (index.html): "Shreekamal Cotton Seed Oil Cake" → **"Shreekamal"**; "Radha Kaithal" → **"Radha Govind"**. (Cotton Seed Cake page ka heading bhi "Our Cattle Feed Brands" → "Our Brands" kiya tha.) *(17 Aug)*
- **"Radha Kaithal" har jagah → "Radha Govind"** kiya (brands.html, gallery.html, product pages, contact + footer lists, index). Alt text bhi update. "Our Story" timeline (index+about) me "Radha Govind, Panchratan & Radha Kaithal" → "Radha Govind & Panchratan" (duplicate na ho). NOTE: cattle-feed-cake.html ka sub-brand label "Radha Govind — Kaithal Quality" waisa hi (ye "Radha Kaithal" nahi hai). Image filenames (radha_govind_kaithal.jpg) waise hi. *(17 Aug)*
- **Cotton Seed Oil Cake page (cattle-feed-cake.html) ke benefit cards ke 2 icons badle** — user ne `icon1.jpeg` (milk bucket+splash) + `icon2.jpeg` (cow) di. Border flood-fill se transparent PNG banaye (`icon1.png`/`icon2.png` — cow/milk ka andar ka white bacha ke). Card 1 "More Milk Yield" → icon1, Card 2 "Better Animal Health" → icon2 (emoji 🥛/💪 hataye). Card 3 (Cost-Effective Feed 💰) waisa hi. Naya CSS `.pd-benefit-icon img{width:40px;height:40px;object-fit:contain}`. Yellow badge waise hi rakha. Baad me products.html ke "More Milk, Better Health" card pe bhi cow icon (icon2) lagaya (🥛 → icon2.png). Cotton Seed Oil Cake page ke scrolling slogan band (.slogan-band) ke separator emojis bhi badle: 🐄 → icon2.png (cow), 🥛 → icon1.png (bucket+milk). CSS `.slogan-track .sep img{height:1.7em}`. **Fix:** cow icon (icon2.png) me legs ke beech trapped background-white dark band pe blob dikh raha tha → grass-adjacent + bottom-touching near-white components ko transparent kiya (cow ka apna white body intact). icon2.png ?v=2 (cattle-feed-cake + products). Milk bucket (icon1.png) me bhi same trapped white (handle-loop + base pocket) tha → enclosed PURE-white (mean min>245) components transparent kiye, cream milk intact. icon1.png ?v=2. (Cow ka apna white body pure-white hone se wahaan grass-adjacency rule use kiya, bucket me pure-white rule — dono ka distinguisher alag.) Niche wale RADHA GOVIND banner (.rg-slogan, white bg) ke 🐄🥛 emoji bhi cow(icon2)+bucket(icon1) images se badle. CSS `.rg-slogan .rg-ico{height:1.5em}`. *(17 Aug)*
- **Premium Cotton Seed section se "18-20% Oil Content" feature chip hataya** (index.html `.cotton-features`). Pehle 5 chips the (2+2+1, aakhri akela) → ab 4 (Lab Tested Quality, Pan India Delivery, Bulk Orders Welcome, High Protein Feed) → saaf 2×2 grid, apne aap balanced. Koi CSS change nahi lagi. *(17 Aug)*
- **Nayi splash image lagayi** (user ne `spl.jpeg` = "Shreekamal oil Industries" wordmark + leaf + tagline "श्रीकमल का एक ही वादा - पशु स्वस्थ, दूध ज्यादा!" + gaay, paper bg, 1363x768 landscape di). Desktop `splash.jpg` = seedha yeh image (v3). Mobile ke liye `splash-mobile.jpg` (v4) naya portrait 1080x1920 banaya: paper bg color (#e7e6e4) se poora canvas bhara, content 880px wide center me rakha (narrow phones pe object-fit:cover crop kare to bhi content na kate — safe side margin), aur content ke chaaro edges ko feather karke bg me blend kiya → koi BOX/strip nahi dikhta, background seamless. `.sk-intro` container bg blue gradient → `#e7e6e4` (paper) kiya taaki match kare. **Fix (usi din):** pehle `object-fit:cover` tha → image zoom hoke edges crop ho rahe the (user: "bhot bda, poora dikh nahi raha"). Ab `object-fit:contain` (desktop+mobile) → poori image dikhti hai; bg paper-color match karta hai isliye contain ke thode bars invisible (koi box nahi). Mobile image dobara banayi: canvas 1080x1500, content 1040px wide center, feather. Mobile ?v=5. **Fix-2:** paper bg abhi bhi container se thoda alag (vignette/texture) lag raha tha → box jaisa. Solution: image ka background **PURE WHITE** kiya (PIL: light + low-saturation pixels → white, HSV smoothstep; text/leaf/cow/tagline intact — cow protected via low-sat brown patches). `.sk-intro` bg `#e7e6e4` → `#ffffff`. Ab image-bg = container-bg = white, bilkul seamless (Kapila-style popup). Desktop ?v=4, mobile ?v=6. **Fix-3 (zoom):** user ko abhi bhi zyada zoom lag raha tha (image poori width bhar rahi thi) → Kapila jaisa moderate popup chahiye. Ab logo ko tight crop karke (~9% white padding) center kiya `splash.jpg` (ek hi image desktop+mobile). CSS: `.sk-intro-img` ab `width:auto;max-width:min(540px,84vw);max-height:68vh` (mobile 82vw/56vh) — full-width nahi, centered popup with white space around. Mobile `<source>` hataya (ek hi image sab pe). Desktop ?v=5. splash-mobile.jpg ab use nahi hoti. *(17 Aug)*
- **Shreekamal ka naya WORDMARK logo lagaya** (user ne `log.jpeg` = "Shreekamaloil Industries" blue text + leaf mark di). Usse transparent PNG banaya `images/shreekamal-logo.png` (border crop + distance-from-white key, 1147x321). Do jagah lagaya (user ne "Group card + navbar dono me" choose kiya): **(1)** Group section ka Shreekamal card (index+about) — purana lotus logo.png hataya. **(2)** Sabhi 9 pages ke navbar me — purana lotus `nav-logo-img` + alag text (`nav-brand-name` "Shreekamal Oil Industries" + `nav-brand-sub` "EST. 2011") dono hataye, unki jagah sirf yeh wordmark (naam logo me hi hai). Naya CSS `.nav-logo-full{height:44px;width:auto}`. Baad me user ne bola "EST. 2011" wapas chahiye → logo ke saath `<div class="nav-brand-sub">EST. 2011</div>` re-add kiya (wahi purana gold style, colour/design same). Sirf company name text nahi (wo logo me hai). Phir user ne bola EST. 2011 ko logo ke NICHE laao → `.nav-logo` ko `flex-direction:column; align-items:flex-start` kiya (logo upar, EST. 2011 niche gold, left-align). *(17 Aug)*

**13–14 August 2026:**
- **Home brands slider ke saare cards ab brands.html pe jaate hain** (pehle kuch #contact, kuch cattle-feed-cake.html jaate the). Static 7 cards + dynamic Firebase template dono. *(14 Aug)*
- **Our Story timeline se "Building on 40+ years of legacy..." (2011 item ka text) hataya** — index + about. Year heading "2011 — SHREEKAMAL OIL INDUSTRIES FOUNDED" rahi. *(14 Aug)*
- **Hindi mode me brand/company names mangle ho rahe the** (Google Translate proper nouns ko translate kar deta — "Butter Milk"→"छाछ" etc.). Fix: script.js me `.brand-name,.pd-brand-name,.group-name,.gal-cap,.nav-brand-name,.footer-brand-name,.testi-name` ko `class="notranslate" translate="no"` mark kiya (GT inject hone se pehle). Ab brand names Hindi mode me bhi asli (English/Roman) form me rehte hain. Devanagari script chahiye to manual mapping karni padegi. Product card names + tags + stat numbers (.product-name,.tag,.pd-tag,.pd-brand-tag,.brand-tag,.sbar-num,.cf-count) bhi notranslate kiye (card content English jaisa rahe; descriptions Hindi me translate hote hain). *(14 Aug)*
- **cotton-seed-oil.html spec table trim** — Source, Use, Packaging, Availability rows hatai. Bache: Quality, Min. Bulk Order. (Ab teeno product pages ke spec tables chhote/clean.) *(14 Aug)*
- **cotton-seed.html spec table trim** — Grade, Use, Packaging, Availability rows poori hatai. Bache: Quality, Min. Bulk Order. *(14 Aug)*
- **cattle-feed-cake.html spec table trim** — Source: "Mustard /" hataya (ab "Cotton Seed Cake"); Form, Packaging, Suitable For rows poori hatai. Bache: Source, Protein, Min. Bulk Order. *(14 Aug)*
- **products.html "Quality You Can Trust" spec table trim** — Quality → sirf "Purity Guaranteed" (Lab-Tested hataya); Packaging aur Suitable For rows poori hatai. Bache: Product Range, Quality, Delivery, Min. Bulk Order. *(14 Aug)*
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
