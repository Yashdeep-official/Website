/* ==========================================================
   CONTENT — edit everything about you here
   ========================================================== */
const PROFILE = {
  name: "Yashdeep Singh Yash",
  email: "y.yashjagait@gmail.com",
  linkedin: "https://www.linkedin.com/in/yashdeep-singh-363a53387/",
  github: "https://github.com/yourname",
  location: "Calgary, AB",
  // Contact form backend: paste your Google Apps Script Web App URL here (see README).
  // Every message is stored in your private Google Sheet with the date and time it arrived.
  formEndpoint: "",
  // Visitor analytics: sign up free at goatcounter.com, then put your code here (e.g. "yash").
  // Leave empty to turn analytics off.
  goatcounter: ""
};

const STACK = ["TypeScript","React","Node.js","Python","Java","C#","PostgreSQL","MongoDB","Docker","AWS","Linux","Burp Suite","Wireshark","Nmap","Splunk","Git","CI/CD","OWASP ASVS"];

const CAPABILITIES = [
  { ico:"{ }", title:"Engineering", text:"Full-stack web applications with clean architecture, typed APIs and automated tests.",
    tags:["TypeScript","React","Node.js","Python","Java","SQL","REST","Git"] },
  { ico:"◇", title:"Application security", text:"Threat modelling, secure code review and remediation against OWASP Top 10 risks.",
    tags:["OWASP","Pen testing","Burp Suite","Auth & IAM","Cryptography","SAST/DAST"] },
  { ico:">_", title:"Infrastructure & defence", text:"Hardened Linux environments, network monitoring, incident response and CI/CD security.",
    tags:["Linux","Docker","AWS","Wireshark","Splunk","Nmap","IR"] }
];

// Replace with your real certifications (or delete the section in index.html)
const CERTS = [
  { abbr:"SEC+", name:"CompTIA Security+", meta:"In progress" },
  { abbr:"GC",   name:"Google Cybersecurity", meta:"Professional Certificate" },
  { abbr:"AWS",  name:"AWS Cloud Practitioner", meta:"Planned · 2026" }
];

const EXPERIENCE = [
  { when:"Dec 2024 — Present", title:"Full-Stack Developer", org:"WebEquator · Remote", type:"Work",
    points:[
      "Build and maintain custom full-stack web applications using Angular, TypeScript, Node.js and Python to execute complex business logic and client workflows.",
      "Design, develop and integrate secure RESTful APIs and middleware that connect web applications to third-party platforms, databases and e-commerce services.",
      "Model and manage relational databases (SQL/PostgreSQL) and write efficient queries to support application state, user data and backend storage needs.",
      "Translate Figma designs into responsive, cross-browser frontend interfaces using modern HTML5, CSS3 and modular Angular components.",
      "Collaborate with cross-functional teams in daily Agile stand-ups and code reviews to debug production issues and deliver features on schedule.",
      "Manage code deployments and versioning with Git, using feature-branching strategies and assisting with CI/CD build pipelines."
    ] },
  { when:"Oct 15, 2026", title:"POS System Restoration — Freelance Service Call", org:"Fatburger · Calgary, AB", type:"Freelance",
    text:"Diagnosed and restored the restaurant's point-of-sale system after an outage — performed a full software update and clean reinstall of the POS platform, then verified the complete order and payment workflow to bring the store back online with minimal downtime." },
  { when:"", title:"Cybersecurity Degree", org:"SAIT — Southern Alberta Institute of Technology", type:"Education",
    text:"Network security, digital forensics, applied cryptography, ethical hacking and incident response." },
  { when:"", title:"Software Development Diploma", org:"SAIT — Southern Alberta Institute of Technology", type:"Education",
    text:"Full-stack development, object-oriented programming, databases, mobile apps and an agile capstone project." }
];

/* ==========================================================
   RENDER
   ========================================================== */
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];

$("#marquee").innerHTML = [...STACK, ...STACK].map(s => `<span>${s}</span>`).join("");

$("#bento").innerHTML = CAPABILITIES.map(c => `
  <article class="cap glass reveal"><span class="edge"></span>
    <div class="cap-ico">${c.ico}</div>
    <h3>${c.title}</h3><p>${c.text}</p>
    <div class="tags">${c.tags.map(t=>`<span>${t}</span>`).join("")}</div>
  </article>`).join("");

$("#certs").innerHTML = CERTS.map(c => `
  <div class="cert glass"><i>${c.abbr}</i><div><b>${c.name}</b><small>${c.meta}</small></div></div>`).join("");

/* ==========================================================
   INTERACTIVE CONSOLE
   ========================================================== */
const body = $("#termBody"), input = $("#termIn");
const COMMANDS = {
  help: () => `Available commands:
  <span class="hl">whoami</span>      short introduction
  <span class="hl">skills</span>      technical skills
  <span class="hl">education</span>   credentials
  <span class="hl">contact</span>     how to reach me
  <span class="hl">resume</span>      download résumé
  <span class="hl">clear</span>       clear the screen`,
  whoami: () => `${PROFILE.name} — software developer and cybersecurity specialist based in ${PROFILE.location}.
I build secure, maintainable applications and review code with an attacker's mindset.`,
  skills: () => CAPABILITIES.map(c => `<span class="hl">${c.title}</span>\n  ${c.tags.join(" · ")}`).join("\n"),
  education: () => EXPERIENCE.filter(x => x.type === "Education").map(x => `<span class="hl">${x.title}</span> — ${x.org} (${x.when})`).join("\n"),
  contact: () => `email     <a class="hl" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
linkedin  <a class="hl" href="${PROFILE.linkedin}" target="_blank" rel="noopener">${PROFILE.linkedin.replace("https://","")}</a>
github    <a class="hl" href="${PROFILE.github}" target="_blank" rel="noopener">${PROFILE.github.replace("https://","")}</a>`,
  resume: () => { setTimeout(() => { const a = document.createElement("a"); a.href = "resume.pdf"; a.download = ""; a.click(); }, 300); return "Downloading résumé…"; },
  sudo: () => "Nice try. Access is granted by interview only — type <span class=\"hl\">contact</span>.",
  ls: () => "about.md  resume.pdf  contact.txt",
  clear: () => { body.innerHTML = ""; return null; }
};
const history = []; let hIdx = 0;
function run(raw){
  const cmd = raw.trim(); if (!cmd) return;
  history.push(cmd); hIdx = history.length;
  const p = document.createElement("p"); p.className = "cmd"; p.textContent = cmd; body.appendChild(p);
  const fn = COMMANDS[cmd.split(" ")[0].toLowerCase()];
  const res = fn ? fn() : `command not found: ${cmd.replace(/[<>&]/g,"")} — type <span class="hl">help</span>`;
  if (res !== null) { const o = document.createElement("p"); o.className = "out"; o.innerHTML = res; body.appendChild(o); }
  body.scrollTop = body.scrollHeight;
}
$("#termForm").addEventListener("submit", e => { e.preventDefault(); run(input.value); input.value = ""; });
input.addEventListener("keydown", e => {
  if (e.key === "ArrowUp" && hIdx > 0) { input.value = history[--hIdx]; e.preventDefault(); }
  if (e.key === "ArrowDown") { hIdx = Math.min(history.length, hIdx + 1); input.value = history[hIdx] || ""; }
  if (e.key === "Tab") { e.preventDefault(); const m = Object.keys(COMMANDS).find(k => k.startsWith(input.value)); if (m) input.value = m; }
});
$("#term").addEventListener("click", () => input.focus({ preventScroll: true }));

/* ==========================================================
   PREMIUM LAYER
   ========================================================== */
// Auto-number section indexes (01, 02, …)
$$("main .idx").forEach((el,i) => el.textContent = String(i+1).padStart(2,"0"));

// Hero headline: word-by-word mask reveal
(function(){
  const h = $("#heroTitle"); let i = 0;
  const wrap = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
          const w = document.createElement("span"); w.className = "w";
          w.innerHTML = `<span style="animation-delay:${.15 + i++ * .07}s">${part}</span>`; frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeName === "EM") {
        const w = document.createElement("span"); w.className = "w";
        n.style.animationDelay = `${.15 + i++ * .07}s`; n.replaceWith(w); w.appendChild(n); n.classList.add("rise");
      }
    });
  };
  wrap(h);
})();

// Section headings "decrypt" into place when revealed
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*<>/";
function decrypt(el){
  const final = el.dataset.text || el.textContent; el.dataset.text = final;
  let frame = 0; const total = 22;
  (function step(){
    el.textContent = final.split("").map((c,k) => c === " " ? " " : (k < (frame/total)*final.length ? c : GLYPHS[Math.random()*GLYPHS.length|0])).join("");
    if (frame++ < total) requestAnimationFrame(step); else el.textContent = final;
  })();
}
const hio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ decrypt(e.target); hio.unobserve(e.target); } }), { threshold: .6 });
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) $$(".sec-head h2").forEach(h => hio.observe(h));

// Scroll progress bar
const bar = $(".progress");
addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
}, { passive: true });

// Re-bind glass for new elements
bindGlass();

// Approach steps: highlight the step in view
const sio = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("active", e.isIntersecting)), { rootMargin: "-45% 0px -45% 0px" });
$$(".step").forEach(s => sio.observe(s));

// Real-world globe: continents, country borders, cities and secured connection arcs
(function(){
  const cv = $("#globe"), ctx = cv.getContext("2d");
  if (!window.d3 || !window.topojson) return;
  const HOME = { name: "Calgary", c: [-114.07, 51.05] }; // highlighted city
  const CITIES = [
    { name: "Vancouver", c: [-123.12, 49.28], al: "left" }, { name: "Toronto", c: [-79.38, 43.65], dy: -10 },
    { name: "San Francisco", c: [-122.42, 37.77] }, { name: "New York", c: [-74.0, 40.71], dy: 8 },
    { name: "São Paulo", c: [-46.63, -23.55] }, { name: "London", c: [-0.13, 51.51], al: "left" },
    { name: "Frankfurt", c: [8.68, 50.11] }, { name: "Dubai", c: [55.27, 25.2] },
    { name: "Bengaluru", c: [77.59, 12.97] }, { name: "Singapore", c: [103.82, 1.35] },
    { name: "Tokyo", c: [139.69, 35.68] }, { name: "Sydney", c: [151.21, -33.87] }
  ];
  // A calm collaboration network (not "attacks"): faint lifted arcs with small data packets moving both ways
  const ALL = Object.fromEntries([HOME, ...CITIES].map(c => [c.name, c.c]));
  const LINKS = [["Calgary","Vancouver"],["Calgary","Toronto"],["Calgary","San Francisco"],["Toronto","New York"],
    ["New York","London"],["London","Frankfurt"],["Frankfurt","Dubai"],["Dubai","Bengaluru"],["Bengaluru","Singapore"],
    ["Singapore","Tokyo"],["Singapore","Sydney"],["San Francisco","Tokyo"],["New York","São Paulo"]];
  const arcs = LINKS.map(([a, b], i) => {
    const A = ALL[a], B = ALL[b], dist = d3.geoDistance(A, B);
    return { interp: d3.geoInterpolate(A, B), lift: 0.04 + dist * 0.09, t: (i * 0.173) % 1, speed: 0.0016 + (i % 3) * 0.0004, dir: i % 2 ? -1 : 1 };
  });

  let W, H, R, dpr = Math.min(2, devicePixelRatio || 1), land = null, borders = null, visible = true;
  const proj = d3.geoOrthographic().clipAngle(90).precision(0.4);
  const path = d3.geoPath(proj, ctx);
  const grat = d3.geoGraticule10();
  let rot = [-HOME.c[0] - 15, -HOME.c[1] * 0.5, 0];

  function size(){
    const b = cv.getBoundingClientRect(); W = b.width; H = b.height;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    R = Math.min(W, H) * 0.44; proj.scale(R).translate([W / 2, H / 2]);
  }
  addEventListener("resize", size); size();
  new IntersectionObserver(es => visible = es[0].isIntersecting).observe(cv);

  // theme colours
  let C = {};
  function readTheme(){
    const s = getComputedStyle(document.documentElement), light = document.documentElement.dataset.theme === "light";
    C = { accent: s.getPropertyValue("--accent").trim(), ok: s.getPropertyValue("--ok").trim(), text: s.getPropertyValue("--text").trim(),
      muted: s.getPropertyValue("--muted").trim(),
      ocean: light ? "rgba(53,99,240,.06)" : "rgba(143,184,255,.05)",
      land: light ? "rgba(53,99,240,.20)" : "rgba(143,184,255,.20)",
      border: light ? "rgba(12,13,18,.18)" : "rgba(220,230,255,.22)",
      grat: light ? "rgba(12,13,18,.06)" : "rgba(255,255,255,.05)",
      rim: light ? "rgba(53,99,240,.35)" : "rgba(143,184,255,.35)" };
  }
  readTheme(); addEventListener("themechange", readTheme);

  // drag to rotate
  let drag = null, idle = 0;
  cv.style.touchAction = "pan-y"; cv.style.cursor = "grab";
  cv.addEventListener("pointerdown", e => { drag = { x: e.clientX, y: e.clientY, r: rot.slice() }; cv.setPointerCapture(e.pointerId); cv.style.cursor = "grabbing"; });
  cv.addEventListener("pointermove", e => { if (!drag) return;
    rot = [drag.r[0] + (e.clientX - drag.x) * 0.35, Math.max(-60, Math.min(60, drag.r[1] - (e.clientY - drag.y) * 0.35)), 0]; });
  const end = () => { drag = null; idle = 120; cv.style.cursor = "grab"; };
  cv.addEventListener("pointerup", end); cv.addEventListener("pointercancel", end);

  const isFront = c => d3.geoDistance(c, [-rot[0], -rot[1]]) < Math.PI / 2 - 0.05;
  function dot([x, y], r, fill){ ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fillStyle = fill; ctx.fill(); }

  function draw(time){
    requestAnimationFrame(draw);
    if (!visible || !land) return;
    if (!drag) { if (idle > 0) idle--; else rot[0] += reduce ? 0 : 0.12; }
    proj.rotate(rot);
    ctx.clearRect(0, 0, W, H);

    // halo + ocean
    const g = ctx.createRadialGradient(W/2, H/2, R * 0.9, W/2, H/2, R * 1.25);
    g.addColorStop(0, C.rim.replace(/[\d.]+\)$/, ".18)")); g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(W/2, H/2, R * 1.25, 0, 7); ctx.fill();
    ctx.beginPath(); path({ type: "Sphere" }); ctx.fillStyle = C.ocean; ctx.fill();
    ctx.strokeStyle = C.rim; ctx.lineWidth = 1; ctx.stroke();

    ctx.beginPath(); path(grat); ctx.strokeStyle = C.grat; ctx.lineWidth = .6; ctx.stroke();
    ctx.beginPath(); path(land); ctx.fillStyle = C.land; ctx.fill();
    ctx.beginPath(); path(borders); ctx.strokeStyle = C.border; ctx.lineWidth = .5; ctx.stroke();

    // network arcs (lifted off the surface) + travelling data packets
    const cx = W / 2, cy = H / 2;
    const lifted = (ll, h) => { const p = proj(ll); return [cx + (p[0] - cx) * (1 + h), cy + (p[1] - cy) * (1 + h)]; };
    ctx.lineCap = "round"; ctx.lineWidth = 1;
    for (const a of arcs) {
      ctx.beginPath(); let on = false;
      for (let k = 0; k <= 40; k++) {
        const s = k / 40, ll = a.interp(s);
        if (!isFront(ll)) { on = false; continue; }
        const [x, y] = lifted(ll, a.lift * Math.sin(Math.PI * s));
        on ? ctx.lineTo(x, y) : ctx.moveTo(x, y); on = true;
      }
      ctx.strokeStyle = C.accent; ctx.globalAlpha = 0.28; ctx.stroke();
      a.t = (a.t + a.speed) % 1;
      for (let k = 0; k < 7; k++) {
        let s = a.t - k * 0.012; if (s < 0) continue;
        if (a.dir < 0) s = 1 - s;
        const ll = a.interp(s); if (!isFront(ll)) continue;
        const [x, y] = lifted(ll, a.lift * Math.sin(Math.PI * s));
        ctx.globalAlpha = 0.75 * (1 - k / 7); dot([x, y], 1.6 - k * 0.15, C.accent);
      }
      ctx.globalAlpha = 1;
    }

    // cities + labels
    ctx.font = "500 11px Inter, system-ui, sans-serif"; ctx.textBaseline = "middle";
    for (const c of CITIES) {
      if (!isFront(c.c)) continue;
      const p = proj(c.c); dot(p, 2.6, C.ok);
      ctx.fillStyle = C.muted; ctx.textAlign = c.al === "left" ? "right" : "left";
      ctx.fillText(c.name, p[0] + (c.al === "left" ? -6 : 6), p[1] + (c.dy || 0)); ctx.textAlign = "left";
    }
    if (isFront(HOME.c)) {
      const p = proj(HOME.c), pulse = (time / 1000) % 1.6 / 1.6;
      ctx.beginPath(); ctx.arc(p[0], p[1], 4 + pulse * 14, 0, 7);
      ctx.strokeStyle = C.ok; ctx.globalAlpha = 1 - pulse; ctx.lineWidth = 1.5; ctx.stroke(); ctx.globalAlpha = 1;
      dot(p, 4, C.ok);
      ctx.font = "600 12px Inter, system-ui, sans-serif"; ctx.fillStyle = C.text; ctx.textAlign = "center"; ctx.fillText("Calgary", p[0], p[1] - 16); ctx.textAlign = "left";
    }
  }

  fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(r => r.json()).then(world => {
    land = topojson.feature(world, world.objects.land);
    borders = topojson.mesh(world, world.objects.countries, (a, b) => a !== b);
    requestAnimationFrame(draw);
  }).catch(() => {});
})();

/* ==========================================================
   ANALYTICS (GoatCounter — set PROFILE.goatcounter at the top)
   ========================================================== */
const gcQueue = [];
function track(name){
  const gc = window.goatcounter;
  if (gc && gc.count) { try { gc.count({ path: name, title: name, event: true }); } catch {} }
  else if (PROFILE.goatcounter) gcQueue.push(name);
}
if (PROFILE.goatcounter) {
  const s = document.createElement("script");
  s.async = true; s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = `https://${PROFILE.goatcounter}.goatcounter.com/count`;
  s.onload = () => setTimeout(() => gcQueue.splice(0).forEach(track), 300);
  document.head.appendChild(s);
}
// Personal tracking links: share yoursite.com/?ref=amazon-recruiter and see "ref/amazon-recruiter" in your dashboard
const ref = new URLSearchParams(location.search).get("ref");
if (ref) track("ref/" + ref.toLowerCase().replace(/[^a-z0-9-_]/g, "").slice(0, 40));
document.addEventListener("click", e => { const t = e.target.closest("[data-track]"); if (t) track(t.dataset.track); });

/* Theme: dark only */
root.dataset.theme = "dark";

/* ==========================================================
   SMOOTH SCROLL + SCROLL-DRIVEN EFFECTS
   ========================================================== */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
let lenis = null;
if (window.Lenis && !reduce) {
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1, smoothWheel: true });
  (function raf(t){ lenis.raf(t); requestAnimationFrame(raf); })(performance.now());
}
$$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
  const id = a.getAttribute("href"); const target = id === "#top" ? 0 : $(id);
  if (target === null) return;
  e.preventDefault();
  if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.4 });
  else (target === 0 ? scrollTo({ top: 0, behavior: "smooth" }) : target.scrollIntoView({ behavior: "smooth" }));
}));

const heroCopy = $("#heroCopy"), heroVis = $("#parallax"), track2 = $("#marquee");
const speedEls = $$("[data-speed]");
let lastY = scrollY, skew = 0;
function scrollFx(){
  const y = scrollY, vh = innerHeight;
  if (!reduce) {
    // hero: drift up + fade as you leave it (desktop only — on phones the visual sits below the text)
    const p = innerWidth > 960 ? Math.min(1, y / (vh * .9)) : 0;
    heroCopy.style.transform = `translate3d(0, ${p * -80}px, 0)`;
    heroCopy.style.opacity = 1 - p * .85;
    heroVis.style.transform = `translate3d(0, ${p * 60}px, 0) scale(${1 - p * .08})`;
    heroVis.style.opacity = 1 - p * .7;
    // parallax elements
    speedEls.forEach(el => {
      const r = el.getBoundingClientRect(); const d = (r.top + r.height/2) - vh/2;
      el.style.translate = `0 ${d * +el.dataset.speed}px`;
    });
    // marquee skews with scroll velocity
    const v = y - lastY; skew += (Math.max(-8, Math.min(8, v * .25)) - skew) * .12;
    track2.parentElement.style.transform = `skewX(${-skew}deg)`;
  }
  lastY = y;
  requestAnimationFrame(scrollFx);
}
requestAnimationFrame(scrollFx);

/* ==========================================================
   CONTACT FORM — messages are stored in a private Google Sheet
   (a "notepad" you can open anytime) with the arrival date.
   Set PROFILE.formEndpoint to your Apps Script Web App URL.
   ========================================================== */
$("#form").addEventListener("submit", async e => {
  e.preventDefault();
  const f = e.target, out = $("#formOut"), btn = $("#formBtn");
  out.className = "form-out mono";
  if (!f.checkValidity()) { out.classList.add("err"); out.textContent = "Please complete the required fields with a valid email."; return; }
  const data = Object.fromEntries(new FormData(f));
  if (data._honey) { out.textContent = "Thanks — your message has been sent."; f.reset(); return; } // bot trap
  delete data._honey;
  const endpoint = (PROFILE.formEndpoint || "").trim();
  const subject = `Portfolio inquiry from ${data.name}`;
  const plainBody = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "—"}\n\n${data.message}`;
  if (!endpoint) {
    // No backend configured — open the visitor's email app with everything pre-filled.
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(plainBody)}`;
    out.textContent = "Opening your email app with the message pre-filled — just hit send.";
    f.reset();
    return;
  }
  btn.disabled = true; out.textContent = "Sending…";
  try {
    const body = new FormData();
    body.append("name", data.name);
    body.append("email", data.email);
    body.append("company", data.company || "");
    body.append("message", data.message);
    const res = await fetch(endpoint, { method: "POST", body });
    if (!res.ok) throw new Error("HTTP " + res.status);
    out.textContent = "Thanks — your message has been sent. I'll reply soon.";
    f.reset(); track("contact-sent");
  } catch {
    out.classList.add("err");
    out.textContent = `Sorry — the message couldn't be sent right now. Please email me directly at ${PROFILE.email}.`;
  } finally { btn.disabled = false; }
});
