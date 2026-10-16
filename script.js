/* ==========================================================
   CONTENT — edit everything about you here
   ========================================================== */
const PROFILE = {
  name: "Yashdeep Singh Yash",
  email: "y.yashjagait@gmail.com",
  linkedin: "https://www.linkedin.com/in/yashdeep-singh-363a53387/",
  github: "https://github.com/Yash",
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

const PROJECTS = [
  { title:"VaultPass", cat:"Security", year:"2025",
    summary:"A zero-knowledge password manager where the server never sees plaintext data.",
    problem:"Users reuse weak passwords and most free managers require trusting a third-party server.",
    approach:"Client-side AES-256-GCM encryption with PBKDF2 key derivation; breach checks via k-anonymity API.",
    outcome:"End-to-end encrypted vault with sub-100ms unlock and zero plaintext stored server-side.",
    stack:["React","Node.js","WebCrypto","PostgreSQL"], code:"#", live:"#" },
  { title:"TaskForge", cat:"Engineering", year:"2025",
    summary:"A real-time task management platform for small teams.",
    problem:"Capstone client needed a lightweight alternative to costly project tools.",
    approach:"React front end, Express API, WebSocket sync, JWT auth with role-based access control.",
    outcome:"Delivered to 3 student teams; 94% test coverage and zero critical findings in security review.",
    stack:["React","Express","MongoDB","Socket.io"], code:"#", live:"#" },
  { title:"NetSentinel", cat:"Security", year:"2024",
    summary:"An intrusion detection dashboard that surfaces suspicious network behaviour.",
    problem:"Raw packet captures are difficult for junior analysts to triage quickly.",
    approach:"Python pipeline parses PCAPs with Scapy, flags port scans and brute force patterns, visualises in Flask.",
    outcome:"Reduced manual triage time in lab exercises by roughly 70%.",
    stack:["Python","Scapy","Flask","Chart.js"], code:"#", live:"" },
  { title:"ShopSecure API", cat:"Engineering", year:"2024",
    summary:"A hardened e-commerce REST API with security tests built into CI.",
    problem:"Typical tutorial APIs ignore injection, CSRF and rate-limiting concerns.",
    approach:"Parameterised queries, input validation, CSRF tokens, rate limiting and automated OWASP ZAP scans in CI.",
    outcome:"Passed all OWASP ZAP baseline checks; documented as a secure reference implementation.",
    stack:["Node.js","PostgreSQL","Jest","GitHub Actions"], code:"#", live:"" }
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

function renderWork(filter="all"){
  const list = PROJECTS.filter(p => filter==="all" || p.cat===filter);
  $("#work-list").innerHTML = list.map((p,i) => `
    <article class="case glass" style="animation-delay:${i*.07}s"><span class="edge"></span>
      <span class="num">${String(PROJECTS.indexOf(p)+1).padStart(2,"0")} / ${p.year}</span>
      <div>
        <span class="cat">${p.cat}</span>
        <h3>${p.title}</h3>
        <p class="summary">${p.summary}</p>
        <div class="tags">${p.stack.map(s=>`<span>${s}</span>`).join("")}</div>
      </div>
      <dl>
        <dt>Problem</dt><dd>${p.problem}</dd>
        <dt>Approach</dt><dd>${p.approach}</dd>
        <dt>Outcome</dt><dd>${p.outcome}</dd>
      </dl>
      <div class="links">
        ${p.code?`<a href="${p.code}" target="_blank" rel="noopener" data-track="project-${p.title}-source">Source ↗</a>`:""}
        ${p.live?`<a href="${p.live}" target="_blank" rel="noopener" data-track="project-${p.title}-live">Live ↗</a>`:""}
      </div>
    </article>`).join("");
  bindGlass();
}
renderWork();
$$(".filter").forEach(b => b.addEventListener("click", () => {
  $(".filter.active").classList.remove("active"); b.classList.add("active"); renderWork(b.dataset.f);
}));

$("#xp").innerHTML = EXPERIENCE.map(x => `
  <li class="reveal"><span class="when">${x.when}</span>
    <div><h3>${x.title}</h3><p class="org">${x.org}</p>
    ${x.points ? `<ul class="xp-list">${x.points.map(p => `<li>${p}</li>`).join("")}</ul>` : `<p>${x.text}</p>`}
    </div>
    <span class="type">${x.type}</span></li>`).join("");

$("#yr").textContent = new Date().getFullYear();

/* ==========================================================
   INTERACTIONS
   ========================================================== */
// Real refraction where supported (desktop Chromium)
const ua = navigator.userAgent;
if (/Chrome|Edg/.test(ua) && !/Mobile|Android|CriOS/.test(ua) && innerWidth > 960) document.documentElement.classList.add("refract");

// Scroll reveal + counters
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  const n = e.target.querySelector("[data-count]");
  if (n) countUp(n);
  io.unobserve(e.target);
}), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
$$(".reveal").forEach(el => io.observe(el));

function countUp(el){
  const end = +el.dataset.count, suffix = el.dataset.suffix || (end >= 10 ? "+" : ""), dur = 1400, t0 = performance.now();
  (function tick(t){
    const p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(end * eased) + (p === 1 ? suffix : "");
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}

// Glass specular highlight follows pointer
function bindGlass(){
  $$(".glass").forEach(g => {
    if (g._bound) return; g._bound = true;
    g.addEventListener("pointermove", e => {
      const r = g.getBoundingClientRect();
      g.style.setProperty("--mx", `${e.clientX - r.left}px`);
      g.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}
bindGlass();

// Background spotlight + hero parallax
const root = document.documentElement, hero = $("#parallax");
const fine = matchMedia("(pointer:fine)").matches;
if (fine) addEventListener("pointermove", e => {
  root.style.setProperty("--sx", `${e.clientX}px`);
  root.style.setProperty("--sy", `${e.clientY}px`);
  const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
  $$("[data-depth]", hero).forEach(el => {
    const d = +el.dataset.depth;
    el.style.transform = `translate3d(${-x*d}px, ${-y*d}px, 0)`;
  });
}, { passive: true });

// Nav: active section + mobile menu
const menu = $("#menu"), burger = $(".burger");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.classList.toggle("x", open); burger.setAttribute("aria-expanded", open);
});
$$("#menu a").forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); burger.classList.remove("x"); }));
const sections = $$("main section[id]");
addEventListener("scroll", () => {
  const y = scrollY + 160;
  sections.forEach(s => {
    const a = $(`#menu a[href="#${s.id}"]`);
    if (a) a.classList.toggle("active", y >= s.offsetTop && y < s.offsetTop + s.offsetHeight);
  });
}, { passive: true });

// Copy email
const copyBtn = $("#copyEmail");
copyBtn.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(copyBtn.dataset.email); }
  catch { location.href = `mailto:${copyBtn.dataset.email}`; return; }
  track("email-copy"); const l = $(".copy-label", copyBtn); l.textContent = "Copied"; setTimeout(() => l.textContent = "Copy", 1800);
});

/* ==========================================================
   INTERACTIVE CONSOLE
   ========================================================== */
const body = $("#termBody"), input = $("#termIn");
const COMMANDS = {
  help: () => `Available commands:
  <span class="hl">whoami</span>      short introduction
  <span class="hl">skills</span>      technical skills
  <span class="hl">projects</span>    selected work
  <span class="hl">education</span>   credentials
  <span class="hl">contact</span>     how to reach me
  <span class="hl">resume</span>      download résumé
  <span class="hl">clear</span>       clear the screen`,
  whoami: () => `${PROFILE.name} — software developer and cybersecurity specialist based in ${PROFILE.location}.
I build secure, maintainable applications and review code with an attacker's mindset.`,
  skills: () => CAPABILITIES.map(c => `<span class="hl">${c.title}</span>\n  ${c.tags.join(" · ")}`).join("\n"),
  projects: () => PROJECTS.map((p,i) => `${String(i+1).padStart(2,"0")}  <span class="hl">${p.title.padEnd(16)}</span>${p.summary}`).join("\n"),
  education: () => EXPERIENCE.filter(x => x.type === "Education").map(x => `<span class="hl">${x.title}</span> — ${x.org} (${x.when})`).join("\n"),
  contact: () => `email     <a class="hl" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
linkedin  <a class="hl" href="${PROFILE.linkedin}" target="_blank" rel="noopener">${PROFILE.linkedin.replace("https://","")}</a>
github    <a class="hl" href="${PROFILE.github}" target="_blank" rel="noopener">${PROFILE.github.replace("https://","")}</a>`,
  resume: () => { setTimeout(() => { const a = document.createElement("a"); a.href = "resume.pdf"; a.download = ""; a.click(); }, 300); return "Downloading résumé…"; },
  sudo: () => "Nice try. Access is granted by interview only — type <span class=\"hl\">contact</span>.",
  ls: () => "about.md  projects/  resume.pdf  contact.txt",
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
   LAB — AES-256-GCM encryption demo (Web Crypto API)
   ========================================================== */
(function(){
  const msg = $("#labMsg"), pass = $("#labPass"), status = $("#labStatus"),
        cOut = $("#labCipher"), pOut = $("#labPlain"), saltEl = $("#labSalt"), ivEl = $("#labIv"),
        bEnc = $("#labEnc"), bDec = $("#labDec"), bTam = $("#labTamper");
  const enc = new TextEncoder(), dec = new TextDecoder();
  const hex = b => [...b].map(x => x.toString(16).padStart(2, "0")).join("");
  const b64 = b => btoa(String.fromCharCode(...b));
  let state = null;

  if (!(window.crypto && crypto.subtle)) { status.textContent = "Web Crypto is unavailable here (needs HTTPS)."; status.className = "lab-status mono err"; bEnc.disabled = true; return; }

  async function deriveKey(passphrase, salt){
    const base = await crypto.subtle.importKey("raw", enc.encode(passphrase), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: 250000, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  }
  function scrambleTo(el, text, dur = 700){
    if (reduce) { el.textContent = text; return; }
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    const t0 = performance.now();
    (function step(t){
      const p = Math.min(1, (t - t0) / dur), n = Math.floor(text.length * p);
      el.textContent = text.slice(0, n) + [...text.slice(n)].map(c => c === " " ? " " : chars[Math.random() * chars.length | 0]).join("");
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }
  function setStatus(t, cls = ""){ status.textContent = t; status.className = "lab-status mono " + cls; }

  $("#labShow").addEventListener("click", e => { const show = pass.type === "password"; pass.type = show ? "text" : "password"; e.target.textContent = show ? "Hide" : "Show"; });

  bEnc.addEventListener("click", async () => {
    if (!msg.value.trim() || !pass.value) return setStatus("Enter a message and a passphrase.", "err");
    bEnc.disabled = true; setStatus("Deriving 256-bit key (250,000 PBKDF2 rounds)…");
    const t0 = performance.now();
    const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(pass.value, salt);
    const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(msg.value)));
    state = { salt, iv, ct };
    scrambleTo(cOut, b64(ct)); saltEl.textContent = hex(salt); ivEl.textContent = hex(iv);
    pOut.textContent = "—"; pOut.classList.remove("err");
    setStatus(`Encrypted ${msg.value.length} characters in ${Math.round(performance.now() - t0)} ms. Now try decrypting.`, "ok");
    bEnc.disabled = false; bDec.disabled = false; bTam.disabled = false;
    track("lab-encrypt");
  });

  bDec.addEventListener("click", async () => {
    if (!state) return;
    setStatus("Verifying authentication tag and decrypting…");
    try {
      const key = await deriveKey(pass.value, state.salt);
      const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: state.iv }, key, state.ct);
      pOut.classList.remove("err"); scrambleTo(pOut, dec.decode(pt), 600);
      setStatus("Integrity verified ✓ — message decrypted successfully.", "ok");
    } catch {
      pOut.classList.add("err"); pOut.textContent = "✕ Decryption rejected";
      setStatus("Authentication failed: wrong passphrase or tampered ciphertext. AES-GCM refused to return any data.", "err");
    }
  });

  bTam.addEventListener("click", () => {
    if (!state) return;
    const i = Math.random() * state.ct.length | 0;
    state.ct = state.ct.slice(); state.ct[i] ^= 1 << (Math.random() * 8 | 0);
    cOut.textContent = b64(state.ct); cOut.classList.remove("flash"); void cOut.offsetWidth; cOut.classList.add("flash");
    setStatus(`Flipped one bit at byte ${i}. Click Decrypt to see what happens.`, "err");
  });
})();

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
  if (!endpoint) {
    out.classList.add("err");
    out.textContent = `The form isn't connected yet — please email me directly at ${PROFILE.email}.`;
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
