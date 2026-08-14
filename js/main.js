/* ==========================================================================
   GK MAIN — shared interactivity across every page
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initNav();
  initNetworkCanvas();
  initRevealObserver();
  initFooterYear();
  initTyping();
  initCounters();
  initSkillBars();
  renderFeaturedProject();
  renderProjectGrid();
  renderCertGrid();
  renderProjectDetail();
  initLightbox();
  initContactForm();
  initAIAssistant();
});

/* ---------------------------------------------------------------------- */
/* LOADER                                                                  */
/* ---------------------------------------------------------------------- */
function initLoader(){
  const loader = document.getElementById("loader");
  if(!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hide"), 450);
  });
  // fallback in case load already fired
  setTimeout(() => loader.classList.add("hide"), 2200);
}

/* ---------------------------------------------------------------------- */
/* NAVBAR                                                                  */
/* ---------------------------------------------------------------------- */
function initNav(){
  const nav = document.querySelector(".gk-nav");
  if(!nav) return;
  const toggle = nav.querySelector(".nav-toggle");
  const links = nav.querySelector(".gk-links");

  const onScroll = () => {
    if(window.scrollY > 30) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });

  if(toggle && links){
    toggle.addEventListener("click", () => links.classList.toggle("mobile-open"));
  }

  // mark active link
  const current = (location.pathname.split("/").pop() || "index.html");
  Array.from(nav.querySelectorAll(".gk-links a")).forEach(a => {
    const href = a.getAttribute("href");
    if(href === current || (current === "" && href === "index.html")){
      a.classList.add("active");
    }
  });
}

/* ---------------------------------------------------------------------- */
/* SCROLL REVEAL                                                           */
/* ---------------------------------------------------------------------- */
function initRevealObserver(){
  const items = document.querySelectorAll(".reveal");
  if(!items.length) return;
  if(typeof IntersectionObserver === "undefined"){
    Array.from(items).forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: 0.15 });
  Array.from(items).forEach(el => io.observe(el));
}

/* ---------------------------------------------------------------------- */
/* FOOTER YEAR                                                             */
/* ---------------------------------------------------------------------- */
function initFooterYear(){
  Array.from(document.querySelectorAll(".gk-year")).forEach(el => el.textContent = new Date().getFullYear());
}

/* ---------------------------------------------------------------------- */
/* NETWORK CANVAS BACKGROUND — signature ambient motif (security scan)     */
/* ---------------------------------------------------------------------- */
function initNetworkCanvas(){
  const canvas = document.getElementById("net-canvas");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, nodes = [];
  const mouse = { x: -9999, y: -9999 };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(70, Math.floor((w * h) / 22000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.6
    }));
  }
  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });

  function tick(){
    ctx.clearRect(0, 0, w, h);
    for(const n of nodes){
      if(!reduceMotion){
        n.x += n.vx; n.y += n.vy;
        if(n.x < 0 || n.x > w) n.vx *= -1;
        if(n.y < 0 || n.y > h) n.vy *= -1;
      }
    }
    for(let i = 0; i < nodes.length; i++){
      for(let j = i + 1; j < nodes.length; j++){
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < 140){
          ctx.strokeStyle = `rgba(147,51,234,${(1 - dist/140) * 0.18})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for(const n of nodes){
      const dx = n.x - mouse.x, dy = n.y - mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 160){
        ctx.strokeStyle = `rgba(34,211,238,${(1 - dist/160) * 0.35})`;
        ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      ctx.fillStyle = "rgba(192,132,252,0.55)";
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  tick();
}

/* ---------------------------------------------------------------------- */
/* HERO TYPING ANIMATION                                                   */
/* ---------------------------------------------------------------------- */
function initTyping(){
  const el = document.getElementById("typed");
  if(!el || typeof GK_PROFILE === "undefined") return;
  const words = GK_PROFILE.taglines;
  let wi = 0, ci = 0, deleting = false;

  function step(){
    const word = words[wi];
    if(!deleting){
      ci++;
      el.textContent = word.slice(0, ci);
      if(ci === word.length){
        deleting = true;
        setTimeout(step, 1400);
        return;
      }
    } else {
      ci--;
      el.textContent = word.slice(0, ci);
      if(ci === 0){
        deleting = false;
        wi = (wi + 1) % words.length;
      }
    }
    setTimeout(step, deleting ? 35 : 65);
  }
  step();
}

/* ---------------------------------------------------------------------- */
/* ANIMATED COUNTERS                                                       */
/* ---------------------------------------------------------------------- */
function initCounters(){
  const holder = document.querySelector("[data-stats]");
  if(!holder || typeof GK_STATS === "undefined") return;
  holder.innerHTML = GK_STATS.map(s => `
    <div class="stat-card glass glass-hover reveal">
      <b data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</b>
      <span>${s.label}</span>
    </div>
  `).join("");

  const nums = holder.querySelectorAll("b[data-target]");

  function animateCounter(el){
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    function frame(now){
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(eased * target);
      el.textContent = val + suffix;
      if(p < 1) requestAnimationFrame(frame);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(frame);
  }

  if(typeof IntersectionObserver === "undefined"){
    Array.from(nums).forEach(animateCounter);
    initRevealObserver();
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      animateCounter(entry.target);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
  Array.from(nums).forEach(n => io.observe(n));
  initRevealObserver();
}

/* ---------------------------------------------------------------------- */
/* SKILLS PAGE                                                             */
/* ---------------------------------------------------------------------- */
const GK_ICONS = {
  css: `<svg viewBox="0 0 128 128"><rect width="128" height="128" rx="14" fill="#1572B6"/><text x="64" y="82" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#fff" text-anchor="middle">CSS</text></svg>`,
  js: `<svg viewBox="0 0 128 128"><rect width="128" height="128" rx="14" fill="#F0DB4F"/><text x="64" y="86" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700" fill="#323330" text-anchor="middle">JS</text></svg>`,
  bootstrap: `<svg viewBox="0 0 24 24"><path fill="#7952B3" d="M11.77 21.6c-3.72-.16-6.28-1.3-8.06-2.87-1.83-1.6-2.65-3.6-2.65-5.44 0-1.9.9-3.7 2.6-5.2C2.9 6.5 2 4.9 2 3.2c0-.6.1-1.2.4-1.7C3.1.3 4.7 0 6.7 0h9.5c2.2 0 3.9.4 5 1.5 1 .9 1.5 2.2 1.5 3.7 0 1.8-1 3.6-2.9 5 1.9 1.5 3.2 3.5 3.2 5.9 0 4.3-3.7 7.5-9.3 7.5-.6 0-1.2 0-1.9-.1zM8 4.6v4.6h4.4c2 0 3.2-.9 3.2-2.4 0-1.5-1.2-2.2-3.3-2.2zm0 8.2v5.2h4.9c2.4 0 3.7-1 3.7-2.7 0-1.6-1.3-2.5-3.9-2.5z"/></svg>`,
  python: `<svg viewBox="0 0 128 128"><path fill="#3776AB" d="M63.4 6c-5.8 0-11.2.5-16 1.4C33 9.7 30.5 15.2 30.5 22.7v9.6h33.7v4.3H18.4c-7.5 0-14 4.5-16.1 13.1-2.4 9.9-2.5 16 0 26.4 1.8 7.7 6.2 13.1 13.7 13.1h8.9V78.5c0-8.5 7.4-16 16.1-16h33.6c7.2 0 12.9-5.9 12.9-13.1V22.7c0-7-5.9-12.3-12.9-13.3C69.6 6.4 66.3 6 63.4 6z"/><circle fill="#fff" cx="41.5" cy="18.7" r="4"/><path fill="#FFD43B" d="M64.6 122c5.8 0 11.2-.5 16-1.4 14.4-2.3 16.9-7.8 16.9-15.3v-9.6H63.8v-4.3h45.8c7.5 0 14-4.5 16.1-13.1 2.4-9.9 2.5-16 0-26.4-1.8-7.7-6.2-13.1-13.7-13.1h-8.9V49.5c0 8.5-7.4 16-16.1 16H53.4c-7.2 0-12.9 5.9-12.9 13.1v22.7c0 7 5.9 12.3 12.9 13.3 4.8.9 8.1 1.4 11 1.4z"/><circle fill="#fff" cx="86.5" cy="109.3" r="4"/></svg>`,
  java: `<svg viewBox="0 0 128 128"><path fill="#EA2D2E" d="M47.6 100.9s-4.7 2.7 3.3 3.6c9.6 1.2 14.5 1 25.1-1.1 0 0 2.8 1.7 6.6 3.2-23.6 10.1-53.4-.6-35-5.7"/><path fill="#EA2D2E" d="M44.7 87.6s-5.2 3.8 2.8 4.7c10.3 1.1 18.4 1.2 32.5-1.6 0 0 1.9 2 5 3-28.6 8.4-60.4.7-40.3-6.1"/><path fill="#5382A1" d="M69.2 65.5c5.9 6.8-1.6 12.8-1.6 12.8s15-7.7 8.1-17.5c-6.4-9.1-11.4-13.6 15.4-29.2 0 0-42.1 10.5-21.9 33.9"/><path fill="#EA2D2E" d="M107.7 111.3s3.4 2.8-3.8 5c-13.7 4-57.1 5.2-69.2.2-4.3-1.8 3.8-4.4 6.4-4.9 2.7-.6 4.2-.5 4.2-.5-4.9-3.4-31.6 6.8-13.6 9.7 49.2 8 89.7-3.6 76-9.5"/></svg>`,
  c: `<svg viewBox="0 0 128 128"><path fill="#00599C" d="M115.4 30.7 67.1 2.9c-1.9-1.1-4.2-1.1-6.1 0L12.6 30.7c-1.9 1.1-3.1 3.2-3.1 5.4v55.7c0 2.2 1.2 4.3 3.1 5.4l48.4 27.9c1.9 1.1 4.2 1.1 6.1 0l48.3-27.9c1.9-1.1 3.1-3.2 3.1-5.4V36.1c0-2.2-1.2-4.3-3.1-5.4z"/><path fill="#fff" d="M64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c8.5 0 16.4 4.5 20.8 11.7l-10.6 6.1c-2.2-3.6-6-5.8-10.2-5.8-6.9 0-12.5 5.6-12.5 12.5S57.1 76.5 64 76.5c4.2 0 8.1-2.2 10.2-5.8l10.6 6.1C80.4 84 72.5 88.5 64 88.5z"/></svg>`
};

function initSkillBars(){
  const holder = document.querySelector("[data-skills]");
  if(!holder || typeof GK_SKILLS === "undefined") return;
  holder.innerHTML = GK_SKILLS.map((s, i) => `
    <div class="skill-card glass glass-hover reveal reveal-delay-${(i % 4) + 1}">
      <div class="icon-wrap">${s.logo ? `<img src="${s.logo}" alt="${s.name} logo">` : (GK_ICONS[s.iconKey] || "")}</div>
      <h5>${s.name}</h5>
      <span class="lvl">Proficiency — ${s.level}%</span>
      <div class="skill-bar"><i data-level="${s.level}"></i></div>
    </div>
  `).join("");

  const bars = holder.querySelectorAll(".skill-bar i");
  if(typeof IntersectionObserver === "undefined"){
    Array.from(bars).forEach(b => { b.style.width = b.dataset.level + "%"; });
    initRevealObserver();
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.style.width = e.target.dataset.level + "%";
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  Array.from(bars).forEach(b => io.observe(b));
  initRevealObserver();
}

/* ---------------------------------------------------------------------- */
/* FEATURED PROJECT (home + projects page)                                 */
/* ---------------------------------------------------------------------- */
function renderFeaturedProject(){
  const holder = document.querySelector("[data-featured-project]");
  if(!holder || typeof GK_PROJECTS === "undefined") return;
  const p = GK_PROJECTS.find(x => x.featured);
  if(!p) return;
  holder.innerHTML = `
    <div class="featured-card glass reveal">
      <span class="badge-featured">★ Flagship Project</span>
      <div class="featured-media"><img src="${p.cover}" alt="${p.title} screenshot"></div>
      <div class="featured-body">
        <h3>${p.title}</h3>
        <p>${p.tagline}</p>
        <div class="chip-row">${p.tech.map(t => `<span class="chip primary">${t}</span>`).join("")}</div>
        <div class="featured-actions">
          <a href="${p.links.details}" class="btn-glow">View Details →</a>
          ${p.links.demo ? `<a href="${p.links.demo}" target="_blank" rel="noopener" class="btn-ghost">Live Demo ↗</a>` : ""}
        </div>
      </div>
    </div>
  `;
  initRevealObserver();
}

/* ---------------------------------------------------------------------- */
/* PROJECT GRID (non-featured projects)                                    */
/* ---------------------------------------------------------------------- */
function renderProjectGrid(){
  const holder = document.querySelector("[data-project-grid]");
  if(!holder || typeof GK_PROJECTS === "undefined") return;
  const list = GK_PROJECTS.filter(p => !p.featured);
  holder.innerHTML = list.map((p, i) => `
    <div class="project-card glass glass-hover reveal reveal-delay-${(i % 4) + 1}">
      <div class="media ${p.cover ? "" : "code-media"}">
        ${p.cover
          ? `<img src="${p.cover}" alt="${p.title} screenshot">`
          : `<span class="file-tag">&lt;/&gt;</span><span>${p.codeLang || "Source Code"}</span>`}
      </div>
      <div class="body">
        <span class="chip signal">${p.tech[0]}</span>
        <h4>${p.title}</h4>
        <p>${p.tagline}</p>
        <div class="chip-row">${p.tech.slice(1).map(t => `<span class="chip">${t}</span>`).join("")}</div>
        <a href="${p.links.details}" class="btn-ghost btn-sm">View Details →</a>
      </div>
    </div>
  `).join("");
  initRevealObserver();
}

/* ---------------------------------------------------------------------- */
/* CERTIFICATES GRID                                                       */
/* ---------------------------------------------------------------------- */
function renderCertGrid(){
  const holder = document.querySelector("[data-cert-grid]");
  if(!holder || typeof GK_CERTIFICATES === "undefined") return;
  holder.innerHTML = GK_CERTIFICATES.map((c, i) => `
    <div class="cert-card glass glass-hover reveal reveal-delay-${(i % 3) + 1}">
      <div class="cert-media"><img src="${c.image}" alt="${c.title} certificate"></div>
      <div class="cert-body">
        <span class="chip signal">${c.issuer}</span>
        <h4>${c.title}</h4>
        <p style="font-size:13.5px;margin:0 0 14px;">${c.subtitle}</p>
        <div class="cert-meta">
          <span>Issued: <b>${c.date}</b></span>
          <span>ID: <b>${c.credentialId}</b></span>
        </div>
        <button class="btn-ghost btn-sm" data-view-cert="${c.image}">View Certificate</button>
      </div>
    </div>
  `).join("");
  initRevealObserver();
}

function initLightbox(){
  const lb = document.getElementById("lightbox");
  if(!lb) return;
  const img = lb.querySelector("img");
  document.body.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-view-cert], [data-lightbox]");
    if(trigger){
      const src = trigger.dataset.viewCert || trigger.dataset.lightbox;
      img.src = src;
      lb.classList.add("open");
    }
    if(e.target === lb || e.target.closest(".lightbox-close")){
      lb.classList.remove("open");
    }
  });
  document.addEventListener("keydown", e => { if(e.key === "Escape") lb.classList.remove("open"); });
}

/* ---------------------------------------------------------------------- */
/* PROJECT DETAIL TEMPLATE (project-detail.html?id=slug)                   */
/* ---------------------------------------------------------------------- */
function renderProjectDetail(){
  const holder = document.querySelector("[data-project-detail]");
  if(!holder || typeof GK_PROJECTS === "undefined") return;
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const p = GK_PROJECTS.find(x => x.id === id) || GK_PROJECTS[0];
  document.title = `${p.title} — Guhan Kalaivanan`;

  const techRows = Object.entries(p.technologies || {}).map(([k, v]) => `
    <div class="spec-row" style="display:block;padding:14px 0;">
      <span style="display:block;margin-bottom:4px;">${k.toUpperCase()}</span>
      <span style="display:block;text-align:left;color:var(--text-mid);font-size:13.5px;">${v}</span>
    </div>`).join("");

  holder.innerHTML = `
    <div class="container-xl detail-hero">
      <div class="breadcrumb-min"><a href="projects.html">Projects</a> / ${p.title}</div>
      <h1 style="font-size:clamp(30px,4.6vw,48px);max-width:780px;">${p.title}</h1>
      <p style="max-width:640px;color:var(--text-low);margin-top:14px;">${p.tagline}</p>
      <div class="chip-row" style="margin-top:20px;">${p.tech.map(t => `<span class="chip primary">${t}</span>`).join("")}</div>
      <div class="hero-actions" style="margin-top:26px;">
        ${p.links.demo ? `<a href="${p.links.demo}" target="_blank" rel="noopener" class="btn-glow">Live Demo →</a>` : ""}
        <a href="projects.html" class="btn-ghost">← Back to Projects</a>
      </div>
      ${p.cover ? `<div class="detail-media"><img src="${p.cover}" alt="${p.title}"></div>` : ""}
    </div>

    <div class="container-xl">
      <div class="row g-5">
        <div class="col-lg-8">

          <div class="detail-section reveal">
            <h3><span class="num">01</span>Purpose</h3>
            <p>${p.purpose}</p>
          </div>

          <div class="detail-section reveal">
            <h3><span class="num">02</span>Features</h3>
            <ul class="feature-list">${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
          </div>

          <div class="detail-section reveal">
            <h3><span class="num">03</span>Workflow</h3>
            <ul class="feature-list" style="grid-template-columns:1fr;">
              ${p.workflow.map((w, i) => `<li><b style="color:var(--signal);margin-right:4px;">${i+1}.</b>${w}</li>`).join("")}
            </ul>
          </div>

          <div class="detail-section reveal">
            <h3><span class="num">04</span>Technologies Used</h3>
            <div class="glass" style="padding:6px 26px;">${techRows}</div>
          </div>

          ${p.security ? `
          <div class="detail-section reveal">
            <h3><span class="num">05</span>Security Note</h3>
            <p>${p.security}</p>
          </div>` : ""}

          <div class="detail-section reveal">
            <h3><span class="num">${p.security ? "06" : "05"}</span>Code Snippet</h3>
            <div class="code-block">${escapeHtml(p.code_snippet || "")}</div>
          </div>

          ${p.gallery && p.gallery.length ? `
          <div class="detail-section reveal">
            <h3><span class="num">${p.security ? "07" : "06"}</span>Screenshots</h3>
            <div class="detail-gallery">
              ${p.gallery.map(g => `<img src="${g}" alt="${p.title} screenshot" data-lightbox="${g}">`).join("")}
            </div>
          </div>` : ""}

          <div class="detail-section reveal">
            <h3><span class="num">${p.security ? "08" : "07"}</span>Future Improvements</h3>
            <ul class="feature-list" style="grid-template-columns:1fr;">
              ${(p.future || []).map(f => `<li>${f}</li>`).join("")}
            </ul>
          </div>

        </div>

        <div class="col-lg-4">
          <div class="detail-sidebar glass reveal" style="padding:28px;">
            <div class="spec-row"><span>ROLE</span><span>Sole Developer</span></div>
            <div class="spec-row"><span>STACK</span><span>${p.tech.join(", ")}</span></div>
            <div class="spec-row"><span>STATUS</span><span>Completed</span></div>
            <div class="spec-row"><span>TYPE</span><span>${p.featured ? "Flagship Project" : "Practice Build"}</span></div>
            <a href="contact.html" class="btn-glow" style="width:100%;justify-content:center;margin-top:24px;">Discuss this project</a>
          </div>
        </div>
      </div>
    </div>
  `;
  initRevealObserver();
}

function escapeHtml(str){
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ---------------------------------------------------------------------- */
/* CONTACT FORM — sends via EmailJS (service_n1j360p / template_8iqxy6t)   */
/* ---------------------------------------------------------------------- */
function initContactForm(){
  const form = document.getElementById("contact-form");
  if(!form) return;
  const status = document.getElementById("form-status");
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitBtnDefaultText = submitBtn ? submitBtn.textContent : "Send Message →";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!form.checkValidity()){
      status.className = "form-status err";
      status.textContent = "Please fill in every required field.";
      return;
    }

    if(typeof emailjs === "undefined"){
      status.className = "form-status err";
      status.textContent = "Email service failed to load — check your connection and try again.";
      return;
    }

    const params = {
      name: document.getElementById("c-name").value,
      email: document.getElementById("c-email").value,
      subject: document.getElementById("c-subject").value,
      message: document.getElementById("c-message").value
    };

    if(submitBtn){ submitBtn.disabled = true; submitBtn.textContent = "Sending..."; }
    status.className = "form-status";
    status.textContent = "";

    emailjs.send("service_n1j360p", "template_8iqxy6t", params).then(
      () => {
        status.className = "form-status ok";
        status.textContent = "Message sent! I'll get back to you soon.";
        form.reset();
        if(submitBtn){ submitBtn.disabled = false; submitBtn.textContent = submitBtnDefaultText; }
      },
      (error) => {
        status.className = "form-status err";
        status.textContent = "Something went wrong sending that — please try again or email me directly.";
        if(submitBtn){ submitBtn.disabled = false; submitBtn.textContent = submitBtnDefaultText; }
        console.error("EmailJS error:", error);
      }
    );
  });
}

/* ==========================================================================
   FLOATING AI ASSISTANT
   Answers only from GK_PROFILE / GK_PROJECTS / GK_CERTIFICATES / GK_SKILLS.
   Simple keyword-matched knowledge base — fully client-side, no API calls.
   ========================================================================== */
function initAIAssistant(){
  const fab = document.getElementById("ai-fab");
  const panel = document.getElementById("ai-panel");
  if(!fab || !panel) return;

  const body = panel.querySelector(".ai-body");
  const input = panel.querySelector("#ai-input");
  const sendBtn = panel.querySelector("#ai-send");
  const closeBtn = panel.querySelector(".ai-close");
  const suggestRow = panel.querySelector(".ai-suggest");

  const suggestions = [
    "Tell me about yourself",
    "Explain the admission system",
    "Which languages do you know?",
    "Tell me about SMVEC",
    "Explain your certificates",
    "Future goals?"
  ];
  if(suggestRow){
    suggestRow.innerHTML = suggestions.map(s => `<button type="button">${s}</button>`).join("");
  }

  fab.addEventListener("click", () => {
    panel.classList.toggle("open");
    if(panel.classList.contains("open") && !panel.dataset.greeted){
      panel.dataset.greeted = "1";
      addMsg("bot", `Hey! Ask me anything about my background, projects, certificates, skills or goals — I can only answer questions about what's on this site.`);
    }
  });
  closeBtn.addEventListener("click", () => panel.classList.remove("open"));

  panel.addEventListener("click", (e) => {
    const s = e.target.closest("[data-suggest], .ai-suggest button");
    if(s){ input.value = s.textContent; handleSend(); }
  });

  sendBtn.addEventListener("click", handleSend);
  input.addEventListener("keydown", e => { if(e.key === "Enter") handleSend(); });

  function addMsg(role, text){
    const div = document.createElement("div");
    div.className = `ai-msg ${role}`;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function handleSend(){
    const text = input.value.trim();
    if(!text) return;
    if(suggestRow && !suggestRow.classList.contains("hidden")){
      suggestRow.classList.add("hidden");
    }
    addMsg("user", text);
    input.value = "";

    const typing = document.createElement("div");
    typing.className = "ai-typing";
    typing.innerHTML = "<i></i><i></i><i></i>";
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
      typing.remove();
      addMsg("bot", answerFromKB(text));
    }, 500 + Math.random() * 400);
  }

  function answerFromKB(raw){
    const q = raw.toLowerCase();
    if(typeof GK_PROFILE === "undefined") return "I can only answer questions about my portfolio.";

    // certificates
    if(/certificat|webinar|bug.?bounty|bootcamp|cappriciosec/.test(q)){
      if(/webinar|career/.test(q)){
        const c = GK_CERTIFICATES.find(c => c.id === "cybersecurity-webinar-101");
        return `${c.title} (${c.issuer}, ${c.date}): ${c.description}`;
      }
      if(/linux|bug.?bounty|bootcamp/.test(q)){
        const c = GK_CERTIFICATES.find(c => c.id === "linux-bugbounty-bootcamp");
        return `${c.title} (${c.issuer}, ${c.date}): ${c.description}`;
      }
      return `I hold two certificates so far, both from Cappriciosec University: "${GK_CERTIFICATES[0].title}" and "${GK_CERTIFICATES[1].title}", completed on ${GK_CERTIFICATES[0].date}. These are basic, foundational-level certificates — I'm still early in my cybersecurity journey and actively working toward Cisco certifications and the free Google career certificates next.`;
    }

    // specific projects
    const projectHit = GK_PROJECTS.find(p =>
      q.includes(p.title.toLowerCase()) ||
      p.id.split("-").every(w => q.includes(w))
    );
    if(projectHit || /admission/.test(q)){
      const p = projectHit || GK_PROJECTS.find(x => x.id === "admission-system");
      return `${p.title}: ${p.purpose}`.replace(/\s+/g, " ").trim();
    }
    if(/hospital/.test(q)){
      const p = GK_PROJECTS.find(x => x.id === "hospital-management");
      return `${p.title}: ${p.purpose}`;
    }
    if(/bank/.test(q)){
      const p = GK_PROJECTS.find(x => x.id === "bank-management");
      return `${p.title}: ${p.purpose}`;
    }
    if(/library/.test(q)){
      const p = GK_PROJECTS.find(x => x.id === "library-details");
      return `${p.title}: ${p.purpose}`;
    }
    if(/article/.test(q)){
      const p = GK_PROJECTS.find(x => x.id === "article-website");
      return `${p.title}: ${p.purpose}`;
    }
    if(/timetable|school/.test(q)){
      const p = GK_PROJECTS.find(x => x.id === "school-timetable");
      return `${p.title}: ${p.purpose}`;
    }
    if(/project/.test(q)){
      return `I've built ${GK_PROJECTS.length} projects, headlined by the College Admission Registration System (Supabase + EmailJS + live admin dashboard). The others are the Bank Management System, Library Details Management System, Hospital Management System, an Online Article Website, and a School Timetable Website. Ask me about any one by name!`;
    }

    // skills / languages
    if(/language|skill|know|tech stack|stack/.test(q)){
      return `I work with ${GK_SKILLS.map(s => s.name).join(", ")}. HTML, CSS, JavaScript and Bootstrap are my front-end toolkit; Java, Python and C round out my programming foundation.`;
    }

    // SMVEC / education
    if(/smvec|college|school|education|study|studying/.test(q)){
      return `I study ${GK_PROFILE.role} at ${GK_PROFILE.college} in ${GK_PROFILE.location} — currently in my ${GK_PROFILE.year}.`;
    }

    // goals
    if(/goal|future|career|cybersecurity|security/.test(q)){
      return GK_PROFILE.goals.replace(/\s+/g, " ").trim();
    }

    // about / who
    if(/who are you|about yourself|tell me about|yourself|guhan|who is/.test(q)){
      return GK_PROFILE.about.replace(/\s+/g, " ").trim();
    }

    // contact
    if(/contact|email|reach|hire/.test(q)){
      return `You can reach me through the contact form on the Contact page — happy to connect about projects, internships or cybersecurity collaboration.`;
    }

    if(/hi|hello|hey/.test(q)){
      return `Hey there! Ask me about my projects, certificates, skills, education, or my goals in cybersecurity.`;
    }

    return "I can only answer questions about my portfolio.";
  }
}
