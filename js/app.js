/* Paper Blossom — main script (config lives in products.js) */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const money = n => SITE.currency + Number(n).toLocaleString("en-IN");
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const byId = id => PRODUCTS.find(p => p.id === id);

  const safeLS = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { } },
  };

  /* ---------- Drawn flower (fallback art + decoration) ---------- */
  function flowerSVG(petal = "#d94f7b", center = "#f4c542", n = 8) {
    let p = "";
    for (let i = 0; i < n; i++) {
      p += `<ellipse cx="50" cy="24" rx="11" ry="22" fill="${petal}" opacity=".92" transform="rotate(${(360 / n) * i} 50 50)"/>`;
    }
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${p}
      <circle cx="50" cy="50" r="13" fill="${center}"/><circle cx="50" cy="50" r="6" fill="rgba(0,0,0,.18)"/></svg>`;
  }
  window.imgFallback = img => {
    const p = byId(img.dataset.id);
    const wrap = document.createElement("div");
    wrap.innerHTML = flowerSVG(...(p && p.colors ? p.colors : ["#d94f7b", "#f4c542"]));
    img.replaceWith(wrap.firstElementChild);
  };
  const media = p => (p && p.img)
    ? `<img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy" data-id="${p.id}" onerror="imgFallback(this)">`
    : flowerSVG(...(p && p.colors ? p.colors : ["#d94f7b", "#f4c542"]));

  /* ---------- Theme ---------- */
  const PALETTES = {
    burgundy: ["#8b1538", "#d94f7b", "#f3b6c8", "#fff0f3", "#c9973b"],
    sunflower: ["#e0740c", "#f5b81c", "#ffd566", "#ffe9a8", "#b8791a"],
    emerald: ["#0d6b5f", "#2a8fb0", "#8fd3c4", "#c7efe6", "#c9a24a"],
  };
  let theme = safeLS.get("pb-theme");
  if (!PALETTES[theme]) theme = "burgundy";
  function setTheme(t) {
    theme = t;
    document.documentElement.dataset.theme = t;
    safeLS.set("pb-theme", t);
    $$("[data-set-theme]").forEach(b => b.classList.toggle("active", b.dataset.setTheme === t));
    renderHeroArt();
    renderPlFlower();
  }

  /* ---------- Preloader ---------- */
  function renderPlFlower() { $("#plFlower").innerHTML = flowerSVG(PALETTES[theme][1], PALETTES[theme][4], 10); }
  (function preload() {
    const bar = $("#plBar"); let v = 0;
    const iv = setInterval(() => { v = Math.min(v + 8 + Math.random() * 14, 92); bar.style.width = v + "%"; }, 120);
    const finish = () => {
      clearInterval(iv); bar.style.width = "100%";
      setTimeout(() => $("#preloader").classList.add("done"), 350);
    };
    const minWait = new Promise(r => setTimeout(r, 900));
    const loaded = document.readyState === "complete" ? Promise.resolve() : new Promise(r => addEventListener("load", r, { once: true }));
    Promise.all([minWait, loaded]).then(finish);
    setTimeout(finish, 4000); // safety net
  })();

  /* ---------- Hero art & ticker ---------- */
  function renderHeroArt() {
    const c = PALETTES[theme];
    $("#heroArt").innerHTML =
      `<div class="big">${flowerSVG(c[1], c[4], 12)}</div>` +
      `<div class="s1">${flowerSVG(c[0], c[4], 6)}</div>` +
      `<div class="s2">${flowerSVG(c[2], c[0], 8)}</div>`;
    $$("#heroArt .big, #heroArt .s1, #heroArt .s2").forEach(el => { el.style.position = "absolute"; });
    $("#heroArt .big").style.cssText = "position:absolute;inset:6%";
    $("#heroArt .big svg").style.cssText = "width:100%;height:100%;animation:spin 60s linear infinite;filter:drop-shadow(0 20px 40px rgba(0,0,0,.18))";
    $("#heroArt .s1").style.cssText = "position:absolute;width:30%;top:0;right:4%;animation:float 7s ease-in-out infinite";
    $("#heroArt .s2").style.cssText = "position:absolute;width:22%;bottom:6%;left:0;animation:float 9s ease-in-out -3s infinite";
  }
  const tickWords = ["Everlasting Paper Flowers", "Custom Bouquets", "Handcrafted with Love", "Crepe Paper Florals", "Wedding Keepsakes", "Special Gifting", "Made to Order"];
  const tickHtml = tickWords.map(w => `<span>✿ ${w}</span>`).join("");
  $("#ticker").innerHTML = tickHtml + tickHtml;

  /* ---------- Catalogue ---------- */
  let filter = "all", q = "";
  const chips = $("#chips");
  chips.innerHTML = CATEGORIES.map(([k, l]) => `<button class="chip${k === "all" ? " on" : ""}" data-cat="${k}">${l}</button>`).join("");
  chips.addEventListener("click", e => {
    const b = e.target.closest("[data-cat]"); if (!b) return;
    filter = b.dataset.cat;
    $$(".chip", chips).forEach(c => c.classList.toggle("on", c === b));
    renderGrid();
  });
  $("#search").addEventListener("input", e => { q = e.target.value.trim().toLowerCase(); renderGrid(); });

  function renderAnthuriumSpotlight() {
    const el = $("#anthuriumSpotlight");
    if (!el || typeof ANTHURIUM_INFO === "undefined") return;
    const info = ANTHURIUM_INFO;
    el.innerHTML = `
      <div class="spotlight-head">
        <div>
          <span class="spotlight-kicker">Flower Spotlight</span>
          <h3>🔶 Anthurium Collection</h3>
          <p class="spotlight-desc">${esc(info.description)}</p>
        </div>
        <div class="spotlight-moq-badge">MOQ: 5 pcs (same colour &amp; size)</div>
      </div>

      <div class="spotlight-specs-row">
        <div class="spec-i"><b>Material:</b> <span>${esc(info.material)}</span></div>
        <div class="spec-i"><b>Flower Size:</b> <span>${esc(info.size)}</span></div>
        <div class="spec-i"><b>Stem Height:</b> <span>${esc(info.stem)}</span></div>
        <div class="spec-i"><b>Colours:</b> <span>${esc(info.colorsNote)}</span></div>
      </div>

      <div class="spotlight-pricing-grid">
        <div class="pricing-card">
          <div class="pc-head">
            <h4>${esc(info.plain.title)}</h4>
            <span class="pc-price">₹${info.plain.price} <small>/ flower</small></span>
          </div>
          <div class="pc-moq">MOQ: ${esc(info.plain.moq)}</div>
          <div class="pc-tiers-label">Bulk Pricing:</div>
          <div class="pc-tiers">
            ${info.plain.tiers.map(t => `
              <div class="pc-tier-row"><span>${t.qty}</span><b>${t.rate}</b></div>
            `).join("")}
          </div>
        </div>

        <div class="pricing-card shaded">
          <div class="pc-head">
            <h4>${esc(info.shaded.title)}</h4>
            <span class="pc-price">₹${info.shaded.price} <small>/ flower</small></span>
          </div>
          <div class="pc-moq">MOQ: ${esc(info.shaded.moq)}</div>
          <div class="pc-tiers-label">Bulk Pricing:</div>
          <div class="pc-tiers">
            ${info.shaded.tiers.map(t => `
              <div class="pc-tier-row"><span>${t.qty}</span><b>${t.rate}</b></div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderCardDetails(p) {
    let html = "";

    // MOQ
    if (p.moq) {
      const moqTxt = p.specs?.moq || `${p.moq} flowers (same colour and size)`;
      html += `<div class="cd-sec moq-sec"><span class="cd-label">MOQ:</span> <strong>${esc(moqTxt)}</strong></div>`;
    }

    // Options / Finishes
    if (p.options && p.options.length) {
      html += `
        <div class="cd-sec">
          <div class="cd-title">Options &amp; Finishes:</div>
          <div class="cd-options">
            ${p.options.map(o => `
              <div class="cd-opt-row">
                <span>${esc(o.name)}</span>
                <b>${money(o.price)} <small>/ ${o.unit || "pc"}</small></b>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    // Bulk Pricing
    if (p.bulkPricing && p.bulkPricing.length) {
      html += `
        <div class="cd-sec">
          <div class="cd-title">Bulk Pricing:</div>
          <div class="cd-bulk-grid">
            ${p.bulkPricing.map(t => `
              <div class="cd-bulk-cell">
                <span class="bp-q">${t.qty}</span>
                <b class="bp-p">${money(t.price)} <small>/pc</small></b>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    // Specifications
    if (p.specs) {
      html += `
        <div class="cd-sec specs-sec">
          <div class="cd-title">Product Details:</div>
          <div class="cd-specs-list">
            ${p.specs.material ? `<div><b>Material:</b> <span>${esc(p.specs.material)}</span></div>` : ""}
            ${p.specs.diameter ? `<div><b>Flower Diameter:</b> <span>${esc(p.specs.diameter)}</span></div>` : ""}
            ${p.specs.size ? `<div><b>Flower Size:</b> <span>${esc(p.specs.size)}</span></div>` : ""}
            ${p.specs.stem ? `<div><b>Stem Height:</b> <span>${esc(p.specs.stem)}</span></div>` : ""}
            ${p.specs.leafHeight ? `<div><b>Leaf Height:</b> <span>${esc(p.specs.leafHeight)}</span></div>` : ""}
            ${p.specs.fullStick ? `<div><b>Full Stick Height:</b> <span>${esc(p.specs.fullStick)}</span></div>` : ""}
            ${p.specs.colors ? `<div><b>Colours:</b> <span>${esc(p.specs.colors)}</span></div>` : ""}
            ${p.specs.uses ? `<div><b>Best For:</b> <span>${esc(p.specs.uses)}</span></div>` : ""}
          </div>
        </div>
      `;
    }

    return html;
  }

  function renderGrid() {
    const list = PRODUCTS.filter(p =>
      (filter === "all" || p.category === filter) &&
      (!q || (p.name + " " + (p.hindi || "") + " " + p.category + " " + p.desc).toLowerCase().includes(q)));

    const showSpotlight = filter === "anthurium" || (q && "anthurium".includes(q));
    const banner = $("#anthuriumSpotlight");
    if (banner) {
      banner.hidden = !showSpotlight;
      if (showSpotlight) renderAnthuriumSpotlight();
    }

    $("#grid").innerHTML = list.map((p, i) => {
      const inCart = cart[p.id] || 0;
      const hasDetails = Boolean(p.moq || p.options || p.bulkPricing || p.specs);
      return `
      <article class="card reveal" style="transition-delay:${Math.min(i, 6) * 60}ms" data-id="${p.id}">
        <div class="card-img">
          ${media(p)}
          <span class="tag">${esc(CATEGORIES.find(c => c[0] === p.category)?.[1] || p.category)}</span>
          ${p.variantType ? `<span class="tag-variant">${esc(p.variantType)}</span>` : ""}
          ${p.moq ? `<span class="tag-moq">MOQ: ${p.moq} pcs</span>` : ""}
        </div>
        <div class="card-body">
          <span class="hi">${esc(p.hindi || "")}</span>
          <h3>${esc(p.name)}</h3>
          <p class="card-desc">${esc(p.desc)}</p>

          ${hasDetails ? `
            <button type="button" class="expand-btn" data-toggle="${p.id}" aria-expanded="false" title="Click to view pricing, options & specs">
              <span>Pricing &amp; Details</span>
              <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="card-details-panel" id="panel-${p.id}" hidden>
              ${renderCardDetails(p)}
            </div>
          ` : ""}

          <div class="card-foot">
            <div class="price">
              <b>${money(p.price)}</b>
              <small>${esc(p.unit)}</small>
            </div>
            <button class="add" data-add="${p.id}">${p.moq && !inCart ? `Add MOQ (${p.moq}) +` : "Add +"}</button>
          </div>
        </div>
      </article>`;
    }).join("");
    $("#empty").hidden = list.length > 0;
    observeReveals();
  }

  $("#grid").addEventListener("click", e => {
    // Handle Expand Accordion Toggle
    const toggleBtn = e.target.closest("[data-toggle]");
    if (toggleBtn) {
      const id = toggleBtn.dataset.toggle;
      const panel = $(`#panel-${id}`);
      if (panel) {
        const isHidden = panel.hidden;
        panel.hidden = !isHidden;
        toggleBtn.setAttribute("aria-expanded", isHidden ? "true" : "false");
        toggleBtn.classList.toggle("open", isHidden);
      }
      return;
    }

    // Handle Add to Basket
    const b = e.target.closest("[data-add]");
    if (b) {
      const pid = b.dataset.add;
      addToCart(pid);
      b.textContent = "Added ✓"; b.classList.add("added");
      setTimeout(() => {
        const p = byId(pid);
        b.textContent = (p && p.moq && !cart[p.id]) ? `Add MOQ (${p.moq}) +` : "Add +";
        b.classList.remove("added");
      }, 1200);
      return;
    }
  });

  // 3D tilt on cards
  $("#grid").addEventListener("pointermove", e => {
    if (paused || e.pointerType === "touch") return;
    const c = e.target.closest(".card"); if (!c) return;
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px)`;
  });
  $("#grid").addEventListener("pointerout", e => { const c = e.target.closest(".card"); if (c) c.style.transform = ""; });

  /* ---------- Other sections ---------- */
  $("#langGrid").innerHTML = FLOWER_LANGUAGE.map(([n, m], i) => {
    const cols = [["#c2185b", "#f8d66d"], ["#fff4f0", "#e9a53a"], ["#f7b500", "#5b3a1a"], ["#ff8a00", "#c25a00"], ["#fffaf0", "#f1d98a"], ["#f27aa6", "#f9d64a"]][i % 6];
    return `<div class="lang-c reveal d${i % 4}">${flowerSVG(cols[0], cols[1], 7)}<h3>${n}</h3><p>${m}</p></div>`;
  }).join("");
  $("#occ").innerHTML = OCCASIONS.map(([t, d], i) => `<div class="occ-c reveal d${i % 4}" data-n="0${i + 1}"><h3>${t}</h3><p>${d}</p></div>`).join("");

  // Real photos in Instagram showcase
  const instaImages = [
    "images/products/PicsArt_04-19-09.43.39.jpg",
    "images/products/PicsArt_04-29-10.52.49.jpg",
    "images/products/PicsArt_06-11-02.58.42.jpg",
    "images/products/PicsArt_02-24-05.46.34.jpg",
    "images/products/PicsArt_06-09-10.22.57.jpg",
    "images/products/PicsArt_09-03-10.40.24.jpg"
  ];
  $("#instaGrid").innerHTML = instaImages.map(src => `
    <a class="reveal" href="${SITE.instagramUrl}" target="_blank" rel="noopener" aria-label="Open Instagram">
      <img src="${src}" alt="Paper Blossom on Instagram" loading="lazy">
    </a>
  `).join("");
  $("#igHandle").textContent = SITE.instagramHandle;

  /* ---------- Links / contact ---------- */
  const waBase = () => /^\d{8,15}$/.test(SITE.whatsappNumber) ? `https://wa.me/${SITE.whatsappNumber}` : "https://wa.me/";
  const hello = encodeURIComponent("Hi Paper Blossom! I'd like to know more about your handcrafted paper flowers.");
  const custom = encodeURIComponent("Hi Paper Blossom! I'd like to ask about a custom paper bouquet order.");
  ["#footWa", "#floatWa"].forEach(s => {
    const el = $(s);
    if (el) el.href = `${waBase()}?text=${hello}`;
  });
  if ($("#footMail")) $("#footMail").href = `mailto:${SITE.email}`;
  if ($("#customWa")) $("#customWa").href = `${waBase()}?text=${custom}`;
  ["#footIg", "#igBtn"].forEach(s => {
    const el = $(s);
    if (el) el.href = SITE.instagramUrl;
  });
  if ($("#deliveryNote")) $("#deliveryNote").textContent = SITE.deliveryNote;
  if ($("#year")) $("#year").textContent = new Date().getFullYear();

  /* ---------- Cart ---------- */
  let cart = {};
  try { cart = JSON.parse(safeLS.get("pb-cart") || "{}") || {}; } catch { cart = {}; }
  Object.keys(cart).forEach(id => { if (!byId(id) || !(cart[id] > 0)) delete cart[id]; });
  const save = () => safeLS.set("pb-cart", JSON.stringify(cart));

  const getUnitPrice = (p, n) => {
    if (!p) return 0;
    if (p.bulkPricing && Array.isArray(p.bulkPricing)) {
      const tier = p.bulkPricing.find(t => n >= t.min && (!t.max || n <= t.max));
      if (tier) return tier.price;
    }
    return p.price;
  };

  const total = () => Object.entries(cart).reduce((s, [id, n]) => {
    const item = byId(id);
    return s + (item ? getUnitPrice(item, n) * n : 0);
  }, 0);
  const count = () => Object.values(cart).reduce((s, n) => s + n, 0);

  function addToCart(id) {
    const p = byId(id);
    const step = (p && p.moq && !cart[id]) ? p.moq : 1;
    cart[id] = (cart[id] || 0) + step;
    save();
    renderCart();
    renderGrid();
    const b = $("#cartBtn");
    b.classList.remove("bump");
    void b.offsetWidth;
    b.classList.add("bump");
  }

  function renderCart() {
    const ids = Object.keys(cart);
    $("#cartCount").textContent = count();
    $("#cartList").innerHTML = ids.map(id => {
      const p = byId(id), n = cart[id];
      if (!p) return "";
      const unitP = getUnitPrice(p, n);
      const isDiscounted = unitP < p.price;
      return `<li class="ci">
        <div class="ci-img">${media(p)}</div>
        <div>
          <h5>${esc(p.name)}</h5>
          <small>${money(unitP)} / pc · ${esc(p.unit)}</small>
          ${isDiscounted ? `<span class="ci-bulk-badge">Bulk rate applied: ₹${unitP}/pc</span>` : ""}
          <div class="qty">
            <button data-dec="${id}" aria-label="Less">−</button>
            <span>${n}</span>
            <button data-inc="${id}" aria-label="More">+</button>
          </div>
        </div>
        <div class="ci-price">
          ${money(unitP * n)}
          <button class="ci-rm" data-rm="${id}">Remove</button>
        </div>
      </li>`;
    }).join("");
    $("#cartEmpty").hidden = ids.length > 0;
    $("#cartTotalWrap").hidden = !ids.length;
    $("#cartTotal").textContent = money(total());
    $("#toCheckout").disabled = !ids.length;
  }

  $("#cartList").addEventListener("click", e => {
    const t = e.target.closest("button"); if (!t) return;
    const id = t.dataset.inc || t.dataset.dec || t.dataset.rm; if (!id) return;
    const p = byId(id);
    if (t.dataset.inc) {
      cart[id]++;
    } else if (t.dataset.dec) {
      if (p && p.moq && cart[id] <= p.moq) {
        delete cart[id];
      } else {
        cart[id]--;
        if (cart[id] <= 0) delete cart[id];
      }
    } else {
      delete cart[id];
    }
    save(); renderCart(); renderGrid();
    if (!count()) showView("cart");
  });

  const drawer = $("#drawer"), scrim = $("#scrim");
  function openCart() { drawer.classList.add("on"); scrim.classList.add("on"); document.body.style.overflow = "hidden"; }
  function closeCart() { drawer.classList.remove("on"); scrim.classList.remove("on"); document.body.style.overflow = ""; }
  function showView(v) { $("#cartView").hidden = v !== "cart"; $("#orderForm").hidden = v !== "form"; $("#drawerBody").scrollTop = 0; }
  $("#cartBtn").onclick = () => { showView("cart"); openCart(); };
  $("#closeCart").onclick = closeCart; scrim.onclick = closeCart;
  addEventListener("keydown", e => { if (e.key === "Escape") closeCart(); });
  $("#toCheckout").onclick = () => showView("form");
  $("#backCart").onclick = () => showView("cart");

  const dateEl = $("#orderForm [name=date]");
  const tmr = new Date(); tmr.setDate(tmr.getDate() + 1);
  dateEl.min = new Date(tmr.getTime() - tmr.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  $("#orderForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target));
    const err = $("#formErr");
    const phone = (f.phone || "").replace(/\D/g, "");
    if (!count()) return err.textContent = "Your basket is empty.";
    if (!f.name.trim()) return err.textContent = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(phone)) return err.textContent = "Enter a valid 10-digit Indian mobile number.";
    if (!f.address.trim() || !f.city.trim()) return err.textContent = "Please enter your address and city.";
    if (!/^\d{6}$/.test(f.pin || "")) return err.textContent = "Enter a valid 6-digit pincode.";
    if (!f.date) return err.textContent = "Please choose a delivery date.";
    err.textContent = "";

    const hasAnthurium = Object.keys(cart).some(id => byId(id)?.category === "anthurium");

    const lines = Object.entries(cart).map(([id, n], i) => {
      const p = byId(id);
      if (!p) return "";
      const unitP = getUnitPrice(p, n);
      const isDiscounted = unitP < p.price;
      const rateInfo = isDiscounted
        ? ` (${n} pcs @ bulk rate ₹${unitP}/pc)`
        : (p.moq ? ` (${n} pcs @ ₹${unitP}/pc, MOQ ${p.moq})` : ` (${p.unit}) × ${n}`);
      return `${i + 1}. *${p.name}*${rateInfo} = ${money(unitP * n)}`;
    }).filter(Boolean);

    const msg = [
      `🌸 *New Handcrafted Paper Floral Order — ${SITE.brand}*`, "",
      "*Ordered Items:*", ...lines, "",
      `*Estimated Total:* ${money(total())}`, "",
      "*Delivery Details:*",
      `• Name: ${f.name.trim()}`,
      `• Mobile: ${phone}`,
      `• Address: ${f.address.trim()}, ${f.city.trim()} - ${f.pin}`,
      `• Delivery Date: ${f.date}`,
      `• Occasion: ${f.occasion}`,
      f.note.trim() ? `• Special Request / Note: ${f.note.trim()}` : "",
      hasAnthurium ? "• *Anthurium Customisation:* Handcrafted in your chosen colour & finish!" : "",
      "",
      `_Handled with love by ${SITE.handledBy}_ 🌸`
    ].filter((l, i, a) => l !== "" || a[i - 1] !== "").join("\n");

    window.open(`${waBase()}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    cart = {}; save(); renderCart(); renderGrid(); e.target.reset(); showView("cart"); closeCart();
  });

  /* ---------- Falling petals + pause ---------- */
  const cvs = $("#petals"), ctx = cvs.getContext("2d");
  let W = 0, H = 0, dpr = 1, petals = [], last = 0, lastSpawn = 0, raf = 0, mx = -1, my = -1;
  let paused = safeLS.get("pb-paused") === "1" || matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MAX = 90;
  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth;
    H = innerHeight;
    cvs.width = W * dpr;
    cvs.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (paused) ctx.clearRect(0, 0, W, H);
  }
  addEventListener("resize", resize); resize();

  function spawn(x, y, burst) {
    if (petals.length >= MAX) petals.shift();
    const pal = PALETTES[theme];
    petals.push({
      x, y, vx: (Math.random() - .5) * (burst ? 60 : 24), vy: (burst ? 20 : 30) + Math.random() * 40,
      s: 6 + Math.random() * 9, r: Math.random() * 6.28, vr: (Math.random() - .5) * 3,
      sw: Math.random() * 6.28, swS: 1 + Math.random() * 2, c: pal[Math.floor(Math.random() * 3)], a: .85,
    });
  }
  addEventListener("pointermove", e => {
    if (paused || e.pointerType === "touch") return;
    mx = e.clientX; my = e.clientY;
    const now = performance.now();
    if (now - lastSpawn > 70) { lastSpawn = now; spawn(mx + (Math.random() - .5) * 14, my, true); }
  }, { passive: true });
  addEventListener("pointerdown", e => {
    if (paused || e.target.closest("#pauseBtn")) return;
    for (let i = 0; i < 6; i++) spawn(e.clientX, e.clientY, true);
  }, { passive: true });

  function drawPetal(p) {
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
    ctx.globalAlpha = p.a; ctx.fillStyle = p.c;
    ctx.beginPath(); ctx.ellipse(0, 0, p.s * .55, p.s, 0, 0, 6.2832); ctx.fill();
    ctx.globalAlpha = p.a * .35; ctx.fillStyle = "#fff";
    ctx.beginPath(); ctx.ellipse(-p.s * .12, -p.s * .2, p.s * .15, p.s * .5, 0, 0, 6.2832); ctx.fill();
    ctx.restore();
  }
  function frame(t) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((t - last) / 1000 || 0, .05); last = t;
    ctx.clearRect(0, 0, W, H);
    if (Math.random() < dt * 2.2 && petals.length < MAX * .55) spawn(Math.random() * W, -20, false); // ambient
    for (let i = petals.length - 1; i >= 0; i--) {
      const p = petals[i];
      p.sw += p.swS * dt; p.x += (p.vx + Math.sin(p.sw) * 28) * dt; p.y += p.vy * dt; p.r += p.vr * dt;
      if (p.y > H + 30) { petals.splice(i, 1); continue; }
      if (p.y > H - 120) p.a = Math.max(0, (H - p.y + 30) / 150) * .85;
      drawPetal(p);
    }
  }
  function setPaused(v) {
    paused = v; safeLS.set("pb-paused", v ? "1" : "0");
    document.body.classList.toggle("paused", v);
    const b = $("#pauseBtn");
    if (b) {
      b.setAttribute("aria-pressed", v);
      b.innerHTML = v ? "▶ <span>Play</span>" : "⏸ <span>Pause</span>";
      b.title = v ? "Resume falling flowers" : "Pause falling flowers";
    }
    if (v) {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      petals = [];
      ctx.clearRect(0, 0, W, H);
    } else {
      petals = [];
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }
  }
  $("#pauseBtn").onclick = () => setPaused(!paused);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
    else if (!paused && !raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
  });

  /* ---------- Nav, reveal, themes ---------- */
  const nav = $("#nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30), { passive: true });
  $("#menuBtn").onclick = () => $("#links").classList.toggle("open");
  $("#links").addEventListener("click", e => { if (e.target.closest("a")) $("#links").classList.remove("open"); });
  $$("[data-set-theme]").forEach(b => b.addEventListener("click", () => setTheme(b.dataset.setTheme)));

  let io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach(el => el.classList.add("in")); return; }
    io = io || new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal:not(.in)").forEach(el => io.observe(el));
  }

  /* ---------- Init ---------- */
  setTheme(theme);
  renderGrid();
  renderCart();
  showView("cart");
  observeReveals();
  setPaused(paused);
})();
