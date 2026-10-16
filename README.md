# Yashdeep Singh Yash — Portfolio

Pure HTML / CSS / JavaScript. No build step — open `index.html` in a browser (or use a local server like `npx serve` for the 3D shield, globe and Lab to load properly).

## Files
| File | What it does |
|---|---|
| `index.html` | Page structure, hero text, SEO + social preview tags, analytics snippet |
| `style.css` | Design tokens at the top (`:root` controls all colours) |
| `script.js` | **All your content** at the top (`PROFILE`, `STACK`, `CAPABILITIES`, `CERTS`, `PROJECTS`, `EXPERIENCE`) + all interactions |
| `shield.js` | 3D Liquid Glass shield in the hero (Three.js) |
| `favicon.svg`, `apple-touch-icon.png` | Browser / phone icons |
| `og-image.png` | Preview image shown when your link is shared on LinkedIn, X, Slack |
| `robots.txt`, `sitemap.xml` | Help Google find and index the site |

## Features
- 3D glass shield hero — follows the mouse, drag to spin
- Smooth scrolling (Lenis) + scroll effects: hero fade/parallax, card parallax, marquee skew, blur-in reveals
- Lab: live AES-256-GCM encrypt / decrypt / tamper demo (Web Crypto API, runs fully in the browser)
- Interactive globe with real continents, borders and cities, with connections from Calgary (drag to rotate)
- Working contact form (FormSubmit), command-line console, case studies, certifications, timeline

## Before publishing — checklist
1. **Your details**: email is set (your phone number is intentionally NOT on the site); replace the LinkedIn and GitHub URLs in `index.html` **and** `PROFILE` in `script.js`.
2. **Résumé**: add `resume.pdf` to this folder.
3. **Content**: update projects, certifications and experience in `script.js`.
4. **Domain**: replace every `https://yourdomain.com` in `index.html`, `robots.txt` and `sitemap.xml` with your real address.

## Contact form (messages saved to your private Google Sheet)
Your site has no server, so the form uses a small Google Apps Script Web App as its backend.
Every message is saved to a private "Messages" tab in your Google Sheet — like a notepad you open anytime —
with the date and time it arrived (Calgary time) added automatically.

### One-time setup (~5 minutes)
1. Go to https://sheets.new → create a blank spreadsheet (e.g. "Portfolio Messages").
2. In the sheet: **Extensions → Apps Script**.
3. Delete the sample code and paste in the contents of `message-backend.gs` (included with your site files).
4. In the editor select the **setup** function and click **Run** once (approve the permission prompt — it's your own script).
5. **Deploy → New deployment → Web app**: Execute as **Me**, Who has access: **Anyone** → Deploy.
6. Copy the Web app URL (ends in `/exec`) and paste it into `PROFILE.formEndpoint` at the top of `script.js`.

That's it — messages now land in your sheet, one row each: date & time, name, email, company, message.
Only you can read them; the endpoint can only add messages, never show them.
If you ever update the script, use **Deploy → Manage deployments → edit (pencil) → Version: New version**.

## Visitor analytics (GoatCounter — free, no cookies)
1. Sign up at https://www.goatcounter.com and pick a code (e.g. `yash`).
2. In `script.js`, set `goatcounter: "yash"` inside `PROFILE` at the top. That's it.
3. Your dashboard shows, for every visit: date & time, device type (desktop / phone / tablet), browser, operating system, screen size, country/region, where they came from (LinkedIn, Google, Indeed…), pages viewed, and total + unique visitor counts.
4. Events tracked: résumé downloads, project clicks, contact form sent, Lab used.

### Know which recruiter or company visited
Visitors are anonymous by law/browser design, so add a tag to the link you send:
`https://yourdomain.com/?ref=amazon-recruiter`  ·  `https://yourdomain.com/?ref=rbc-application`
Each time someone opens that link, `ref/amazon-recruiter` appears in your dashboard with the time and device — so you know exactly when that company looked at your portfolio, and how many times.

## Google & LinkedIn
1. Publish (Netlify drop: https://app.netlify.com/drop, or GitHub Pages).
2. Google Search Console → add your URL → verify → submit `sitemap.xml` → "Request indexing".
3. Check your LinkedIn preview at https://www.linkedin.com/post-inspector/ .
