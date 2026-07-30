# 🟢 SHREEKAMAL WEBSITE — MASTER ROOT FILE

> **Last updated:** 30 July 2026

---

## ⭐ INSTRUCTIONS FOR CLAUDE (naye chat mein ye file padho)

**Agar aap Claude ho aur yeh file ek nayi chat mein upload ki gayi hai — pehle isse poora padho.** Yeh ek cattle-feed business "Shreekamal Oil Industries" ki website ka project hai. User (naam: Shreekamal ji) **non-technical** hai aur **Hinglish** (Hindi + English roman script) mein baat karta hai — usse Hinglish mein hi, simple bhaasha mein jawab dena. Yeh file poore project ka record hai — business info, tech, files, ab tak ka kaam, aur pending cheezein. Isse padhke seedha kaam continue karo, user ko dobara sab samjhane ko mat bolo.

**Kaam karne ka tarika (IMPORTANT):**
- User ke computer ki website folder yeh hai: `C:\Users\lenovo\Documents\nikhil sheet\website\shreekamal` (Windows, device bridge `mcp__remote-devices__*` se pahunchti hai).
- Nayi/badli hui file pehle cloud workspace `/root/new-files/` mein banao, phir `SendUserFile` se do, phir `mcp__remote-devices__device_commit_files` (force:true) se user ke folder mein likho.
- User apne aap VS Code se **Commit + Sync** karke site live karta hai (GitHub Pages). Har kaam ke baad usse yeh yaad dilana, aur **incognito** mein check karne ko kehna (cache issue).
- Image cache-busting ke liye HTML mein `?v=1` → `?v=2` badalte raho jab image replace ho.
- **Har naye change ke baad NEECHE "CHANGE LOG" aur "PENDING" section update karo, aur yeh file dobara user ke folder mein save kar do — taaki hamesha up-to-date rahe.** (User ne yeh khaaskar kaha hai.)

---

## 1. BASIC INFO (ek nazar mein)

| Cheez | Detail |
|---|---|
| Business | Shreekamal Oil Industries |
| Product | Cattle Feed, Binola Khal (Cotton Seed Cake), Cotton Seed, Oil |
| Founded | 2011 (family legacy since 1969) |
| Founder | Sh. Suresh Singhal Ji (Founder & Director) |
| Address | Mauza Kohli, Jamb Road, Hinganghat — 442301, Maharashtra |
| Reach | 10 Lakh+ clients, 7 states |
| WhatsApp / Phone | +91 95285 47179 (link: https://wa.me/919528547179) |
| Instagram | https://www.instagram.com/shreekamalagro/ |
| Facebook | https://www.facebook.com/shreekamalagro/ |
| Live website | https://nikhil96235.github.io/shreekamal/ |
| GitHub repo | Nikhil96235 / shreekamal |
| Computer folder | C:\Users\lenovo\Documents\nikhil sheet\website\shreekamal |

**Group companies:** Aadit Oil Mill · Singhal Agro Products · Fenixx Innovation Private Limited
**Brands:** Radha Govind · Panchratan · Radha Kaithal (Radha Govind Kaithal) · Gaiyya · Shri Kamal · Amrit Kalash

---

## 2. WEBSITE KAISE BANI HAI (Tech stack)

- **HTML** — har page ka structure
- **CSS** — ek hi shared file `style.css` mein saara design
- **JavaScript** — `script.js` (sliders, menu, animations) + kuch inline JS
- **Firebase (Firestore)** — reviews aur admin login. Project id: `shreekamal-36ba3`. Config file: `firebase-config.js` (apiKey `AIzaSyBJvRtVoKeMWMGLiycaCVpsK3ahemjlqvo`). Storage use nahi hota — photos data-URL ke roop mein.
- **FormSubmit** — Contact form ka message email par bhejne ke liye
- **GitHub Pages** — free hosting (live)

**Design system:**
- Colours (CSS variables): `--gd:#0b1f0e` (dark green) · `--gk:#0f3318` · `--gm:#1a5c2a` · `--gr:#c8860a` (gold dark) · `--gy:#f5c030` (gold) · `--gl:#fdd85a` · `--td:#0a1a0c` · `--tt:#5a7a5e` · `--cr:#fffdf5` (cream) · `--c2:#f7f2e8`
- Fonts: **Playfair Display** (headings) + **Inter** (body)
- Theme: Green + Gold premium look

---

## 3. SAARE PAGES / FILES

| File | Kya hai |
|---|---|
| index.html | Home — splash screen, hero slider (7 slides), hero-side popup marquee, founder frame, quality section, navbar, footer |
| products.html | Products detail page |
| brands.html | Brands — full-width brand banner (images/brand-banner.jpg) + brand cards + lightbox |
| gallery.html | Gallery — 8 brand bags, click par lightbox (zoom, ‹›/ESC nav) |
| about.html | About — 55+ saal legacy, timeline, founder frame, vision/mission, group companies, why-us |
| contact.html | Contact — Google map embed, form, phone, WhatsApp |
| cattle-feed-cake.html | Product page: Cattle Feed Cake |
| cotton-seed.html | Product page: Cotton Seed |
| admin.html | Admin login (reviews manage karne ke liye — Firebase) |
| style.css | Poore site ka shared design |
| script.js | Sliders, hamburger menu, reveal-on-scroll animations |
| firebase-config.js | Firebase connection settings |
| PROJECT-NOTES.md | **Yeh file** — master root record |

**Navbar links:** Home · Products · Brands · Gallery · About · Contact · Get Quote

**Key images:** hero1-6, farm.jpeg (hero slide 3), gaiyya.jpg, brand-banner.jpg, splash.jpg, radha_govind_kaithal.jpg, panchratan_shri.jpg, amrit_kalash.jpg, buttermilk.jpg, founder.jpg (MISSING — daalni hai)

---

## 4. CHANGE LOG (kya-kya kaam hua)

- WhatsApp number theek kiya (placeholder → 919528547179)
- Splash / intro screen banaya (diya/flame logo), final version fix kiya
- 4 nayi detail pages banayi: Products, Brands, About, Contact (Kapila-style reference)
- Hero slider + brands slider auto-move theek kiya (scroll ke baad ruk jaate the — hover-pause hataya)
- Gallery page banaya (lightbox/zoom, 8 brand bags)
- Founder ka golden circle photo frame banaya (About + Home)
- Hero ke side wali marquee images ko hover/touch par popup kiya
- Quality & Certifications section banaya (clean white 4-card: FSSAI / In-house Lab / 100% Pure / Full Weight)
- Bhaari images optimize ki (21MB → ~160KB) — site fast ki
- Naya hero slide add kiya (farm.jpeg — 3rd position)
- Brands page par full-width brand banner lagaya (farmer + bags wali image, na cut na khali space)
- Poore project ka step-by-step PDF guide banaya (Shreekamal-Website-Guide.pdf)
- Footer copyright auto-year kiya
- **PROJECT-NOTES.md master root file banayi** *(21 July)*
- **Brand banner image change ki** (nayi image se replace, cache v2) *(22 July)*
- **PROJECT-NOTES.md ko full master/context file banaya** (nayi chat mein upload karke continue karne ke liye) *(22 July)*
- **Facebook float icon add kiya** (neela, link: https://www.facebook.com/shreekamalagro/) sabhi 8 pages par *(22 July)*
- **Instagram link theek ki** (placeholder → https://www.instagram.com/shreekamalagro/), aur do product pages par Instagram bhi add kiya *(22 July)*
- **Founder photo add ki** (Sh. Suresh Singhal Ji) — `images/founder.jpg`, circular frame ke liye square crop, index+about par v2 *(30 July)*

---

## 5. PENDING / KARNA BAAKI HAI

- [ ] **Domain khareedna** (shreekamal.com / shreekamal.in / shreekamalindustries.com) — sabse bada upgrade. Setup domain ke BAAD.
- [ ] **Domain jodna** — domain lene ke baad: repo mein CNAME file + domain company ki DNS settings. (Editing/deploy ka tarika same rahega, sirf ek-baar ka setup.)
- [ ] **SEO** — domain ke BAAD: Google Search Console, Google Business Profile, sitemap.xml, robots.txt, business schema, keyword-rich titles, directory listings (IndiaMART/JustDial/TradeIndia).
- [x] ~~Instagram link theek~~ — ho gaya (https://www.instagram.com/shreekamalagro/). Facebook bhi add ho gaya (https://www.facebook.com/shreekamalagro/).
- [x] ~~Founder photo~~ — ho gaya. `images/founder.jpg` (Sh. Suresh Singhal Ji, square crop, circular frame ke liye) *(30 July)*
- [ ] **FSSAI number + GST number** — Quality/Contact section mein daalne (trust ke liye).
- [ ] **FormSubmit activate** — pehli baar confirmation email aata hai, use click karna zaroori (warna contact form kaam nahi karega).
- [ ] **Firebase account** — project `shreekamal-36ba3` kis Google account mein hai woh dhoondna baaki (abhi access nahi mil raha — Gmail mein "Firebase"/"shreekamal-36ba3" search karke dekho, ya naya project banao).
- [ ] **About page banner** (optional) — abhi clean text header hai (theek). Chaho to farm/factory image banner laga sakte hain.

---

## 6. WEBSITE LIVE KAISE KARE (deploy)

Jab bhi files change ho, VS Code mein:
1. **Source Control** kholo (left side branch icon)
2. Saare changes **+** se stage karo (nayi file/image ho to use zaroor stage karna)
3. Message box mein chhota note likho (jaise "banner update")
4. **Commit** → phir **Sync Changes** (push)
5. 1-2 minute baad site update — check karne ke liye **incognito window** mein site kholna (purana cache na dikhe)

---

## 7. IMPORTANT DECISIONS / GOTCHAS (yaad rakhne layak)

- **SEO domain ke BAAD** — abhi github.io URL pe SEO/Business Profile karenge to domain lene par sab dobara karna padega. In-code SEO (sitemap/schema) file ke saath chalta hai, woh kabhi bhi.
- **Domain se editing nahi badalti** — domain sirf naya "naam" hai jo isi GitHub site par point karta hai. Change karne ka tarika (Commit + Sync) bilkul same rahega. Change dono URL par dikhega.
- Domain na mile to `.in`, `.co.in`, ya `shreekamalindustries.com` jaisa option. Naam chhota aur simple rakhna.
- **Windows filename issue** — user kabhi-kabhi image ko capital naam ya extra extension (jaise Splash.jpeg, hero5.jpg.jpeg) se save kar deta hai. GitHub case-sensitive hai, isliye file ko correct naam se **seedha device par likhna** (device_commit_files) safe rehta hai.
- **Cache** — image replace karne par HTML mein `?v=` number badalna, aur incognito mein check karna.
- **External github.io Playwright se nahi khulta** (tunnel error). Local render ke liye files `/root/new-files/test/` mein rakhke Chromium se screenshot lena. WebFetch sirf raw.githubusercontent.com / api.github.com par chalta hai.
- **VS Code "file is newer" error** — agar Claude ne file disk par likhi jabki woh VS Code mein khuli thi. Fix: Overwrite mat dabao; tab close (Don't Save) ya Revert File; phir Commit+Sync.

---

*Yeh master root file hai. Nayi chat mein isse upload karo — hum wahin se continue karenge. Har naye change ke baad yeh file update hoti rahegi.*
