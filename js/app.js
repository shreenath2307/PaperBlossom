/* Paper Blossom — main script (config lives in products.js) */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const money = n => SITE.currency + Number(n).toLocaleString("en-IN");
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  
  // byId supports both catalogue products and custom generated items
  const customItems = {};
  const byId = id => PRODUCTS.find(p => p.id === id) || customItems[id];

  const safeLS = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  };

  // Restore saved custom items from localStorage
  try {
    const savedCustom = JSON.parse(safeLS.get("pb-custom-items") || "{}");
    Object.assign(customItems, savedCustom);
  } catch {}

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

  function renderGrid() {
    const list = PRODUCTS.filter(p =>
      (filter === "all" || p.category === filter) &&
      (!q || (p.name + " " + (p.hindi || "") + " " + p.category + " " + p.desc).toLowerCase().includes(q)));
    
    $("#grid").innerHTML = list.map((p, i) => `
      <article class="card reveal" style="transition-delay:${Math.min(i, 6) * 60}ms" data-id="${p.id}">
        <div class="card-img">
          ${media(p)}
          <span class="tag">${esc(CATEGORIES.find(c => c[0] === p.category)?.[1] || p.category)}</span>
        </div>
        <div class="card-body">
          <span class="hi">${esc(p.hindi || "")}</span>
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.desc)}</p>
          <div class="card-foot">
            <div class="price"><b>${money(p.price)}</b><small>${esc(p.unit)}</small></div>
            <button class="add" data-add="${p.id}">Add +</button>
          </div>
        </div>
      </article>`).join("");
    $("#empty").hidden = list.length > 0;
    observeReveals();
  }

  $("#grid").addEventListener("click", e => {
    const b = e.target.closest("[data-add]"); if (!b) return;
    addToCart(b.dataset.add);
    b.textContent = "Added ✓"; b.classList.add("added");
    setTimeout(() => { b.textContent = "Add +"; b.classList.remove("added"); }, 1200);
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

  /* ---------- Interactive Custom Bouquet Builder ---------- */
  const customState = {
    sizeId: "classic",
    flowerIds: ["red-roses", "white-lilies"],
    wrapId: "korean-pink",
    extraIds: ["note"]
  };

  const bouquetSizeImages = {
    mini: "images/products/PicsArt_09-03-10.40.24.jpg",
    classic: "images/products/PicsArt_02-24-05.38.41.jpg",
    luxe: "images/products/PicsArt_08-19-01.20.47.jpg",
    royal: "images/products/PicsArt_11-08-11.59.23.jpg"
  };

  function initBouquetBuilder() {
    if (!CUSTOM_BOUQUET_OPTIONS || !$("#bSizes")) return;

    // Render Sizes
    $("#bSizes").innerHTML = CUSTOM_BOUQUET_OPTIONS.sizes.map(s => `
      <div class="b-opt-card size-card ${s.id === customState.sizeId ? "active" : ""}" data-size="${s.id}">
        <div class="opt-head"><b>${esc(s.name)}</b> <span class="opt-badge">${money(s.price)}</span></div>
        <small>${s.stems} handcrafted stems</small>
      </div>
    `).join("");

    // Render Flower choices
    $("#bFlowers").innerHTML = CUSTOM_BOUQUET_OPTIONS.flowers.map(f => {
      const isSel = customState.flowerIds.includes(f.id);
      return `
        <div class="b-chip-opt ${isSel ? "active" : ""}" data-flower="${f.id}">
          <span class="color-dot" style="background:${f.color}"></span>
          <span>${esc(f.name)}</span>
        </div>
      `;
    }).join("");

    // Render Wraps
    $("#bWraps").innerHTML = CUSTOM_BOUQUET_OPTIONS.wraps.map(w => `
      <div class="b-opt-card wrap-card ${w.id === customState.wrapId ? "active" : ""}" data-wrap="${w.id}">
        <b>${esc(w.name)}</b>
        <small>${esc(w.desc)}</small>
      </div>
    `).join("");

    // Render Extras
    $("#bExtras").innerHTML = CUSTOM_BOUQUET_OPTIONS.extras.map(x => {
      const isChecked = customState.extraIds.includes(x.id);
      return `
        <label class="b-extra-opt ${isChecked ? "active" : ""}">
          <input type="checkbox" data-extra="${x.id}" ${isChecked ? "checked" : ""}>
          <span>${esc(x.name)}</span>
          <b>${x.price ? "+ " + money(x.price) : "Included"}</b>
        </label>
      `;
    }).join("");

    updateBuilderPreview();
  }

  function calculateBuilderPrice() {
    const size = CUSTOM_BOUQUET_OPTIONS.sizes.find(s => s.id === customState.sizeId) || CUSTOM_BOUQUET_OPTIONS.sizes[1];
    let sum = size.price;
    customState.extraIds.forEach(eid => {
      const ext = CUSTOM_BOUQUET_OPTIONS.extras.find(x => x.id === eid);
      if (ext && ext.price) sum += ext.price;
    });
    return sum;
  }

  function updateBuilderPreview() {
    const size = CUSTOM_BOUQUET_OPTIONS.sizes.find(s => s.id === customState.sizeId) || CUSTOM_BOUQUET_OPTIONS.sizes[1];
    const wrap = CUSTOM_BOUQUET_OPTIONS.wraps.find(w => w.id === customState.wrapId) || CUSTOM_BOUQUET_OPTIONS.wraps[0];
    const selFlowers = customState.flowerIds.map(fid => CUSTOM_BOUQUET_OPTIONS.flowers.find(f => f.id === fid)?.name).filter(Boolean);

    $("#builderTitle").textContent = `${size.name.split(" ")[0]} Custom Paper Bouquet`;
    $("#builderSub").textContent = `${selFlowers.join(", ") || "Custom Flower Mix"} · ${wrap.name}`;
    $("#builderPrice").textContent = money(calculateBuilderPrice());
    $("#builderImg").src = bouquetSizeImages[customState.sizeId] || bouquetSizeImages.classic;
  }

  // Builder event delegations
  if ($("#builderForm")) {
    $("#builderForm").addEventListener("click", e => {
      // Size clicked
      const sizeCard = e.target.closest("[data-size]");
      if (sizeCard) {
        customState.sizeId = sizeCard.dataset.size;
        $$(".size-card", $("#bSizes")).forEach(c => c.classList.toggle("active", c === sizeCard));
        updateBuilderPreview();
        return;
      }

      // Flower clicked
      const flChip = e.target.closest("[data-flower]");
      if (flChip) {
        const fid = flChip.dataset.flower;
        if (customState.flowerIds.includes(fid)) {
          if (customState.flowerIds.length > 1) {
            customState.flowerIds = customState.flowerIds.filter(id => id !== fid);
            flChip.classList.remove("active");
          }
        } else {
          if (customState.flowerIds.length < 3) {
            customState.flowerIds.push(fid);
            flChip.classList.add("active");
          } else {
            // Replace oldest
            const removed = customState.flowerIds.shift();
            customState.flowerIds.push(fid);
            $(`[data-flower="${removed}"]`)?.classList.remove("active");
            flChip.classList.add("active");
          }
        }
        updateBuilderPreview();
        return;
      }

      // Wrap clicked
      const wrapCard = e.target.closest("[data-wrap]");
      if (wrapCard) {
        customState.wrapId = wrapCard.dataset.wrap;
        $$(".wrap-card", $("#bWraps")).forEach(c => c.classList.toggle("active", c === wrapCard));
        updateBuilderPreview();
        return;
      }

      // Extras checkbox changed
      const extraInput = e.target.closest("input[data-extra]");
      if (extraInput) {
        const eid = extraInput.dataset.extra;
        if (extraInput.checked) {
          if (!customState.extraIds.includes(eid)) customState.extraIds.push(eid);
        } else {
          customState.extraIds = customState.extraIds.filter(id => id !== eid);
        }
        extraInput.closest(".b-extra-opt").classList.toggle("active", extraInput.checked);
        updateBuilderPreview();
      }
    });

    // Add custom bouquet to basket
    $("#addCustomBouquetBtn").addEventListener("click", () => {
      const size = CUSTOM_BOUQUET_OPTIONS.sizes.find(s => s.id === customState.sizeId) || CUSTOM_BOUQUET_OPTIONS.sizes[1];
      const wrap = CUSTOM_BOUQUET_OPTIONS.wraps.find(w => w.id === customState.wrapId) || CUSTOM_BOUQUET_OPTIONS.wraps[0];
      const selFlowers = customState.flowerIds.map(fid => CUSTOM_BOUQUET_OPTIONS.flowers.find(f => f.id === fid)?.name).filter(Boolean);
      const selExtras = customState.extraIds.map(eid => CUSTOM_BOUQUET_OPTIONS.extras.find(x => x.id === eid)?.name).filter(Boolean);
      const cardNote = ($("#builderNote")?.value || "").trim();

      const customId = `custom-b-${Date.now()}`;
      const itemPrice = calculateBuilderPrice();
      const customItem = {
        id: customId,
        name: `Custom Bouquet (${size.name.split(" ")[0]})`,
        hindi: "कस्टम गुलदस्ता",
        category: "bouquet",
        price: itemPrice,
        unit: `${size.stems} paper flowers · ${wrap.name}`,
        img: bouquetSizeImages[customState.sizeId] || bouquetSizeImages.classic,
        desc: `Flowers: ${selFlowers.join(", ")} | Extras: ${selExtras.join(", ") || "None"}${cardNote ? ` | Card: "${cardNote}"` : ""}`,
        isCustom: true
      };

      customItems[customId] = customItem;
      safeLS.set("pb-custom-items", JSON.stringify(customItems));

      addToCart(customId);
      const btn = $("#addCustomBouquetBtn");
      btn.textContent = "Added to Basket ✓ 🌸";
      btn.classList.add("added");
      setTimeout(() => {
        btn.textContent = "Add Custom Bouquet to Basket 🌸";
        btn.classList.remove("added");
      }, 1500);

      // Open cart drawer so user sees their custom bouquet
      setTimeout(() => {
        openCart();
      }, 400);
    });
  }

  /* ---------- Other sections ---------- */
  $("#langGrid").innerHTML = FLOWER_LANGUAGE.map(([n, m], i) => {
    const cols = [["#c2185b", "#f8d66d"], ["#fff4f0", "#e9a53a"], ["#f7b500", "#5b3a1a"], ["#ff8a00", "#c25a00"], ["#fffaf0", "#f1d98a"], ["#f27aa6", "#f9d64a"]][i % 6];
    return `<div class="lang-c reveal d${i % 4}">${flowerSVG(cols[0], cols[1], 7)}<h3>${n}</h3><p>${m}</p></div>`;
  }).join("");
  $("#occ").innerHTML = OCCASIONS.map(([t, d], i) => `<div class="occ-c reveal d${i % 4}" data-n="0${i + 1}"><h3>${t}</h3><p>${d}</p></div>`).join("");
  
  // Real photos in Instagram showcase
  const instaImages = [
    "images/products/PicsArt_02-24-05.43.27.jpg",
    "images/products/PicsArt_04-19-09.43.39.jpg",
    "images/products/PicsArt_04-29-10.52.49.jpg",
    "images/products/PicsArt_06-11-02.58.42.jpg",
    "images/products/PicsArt_08-19-01.20.47.jpg",
    "images/products/PicsArt_11-08-11.59.23.jpg"
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
  const total = () => Object.entries(cart).reduce((s, [id, n]) => {
    const item = byId(id);
    return s + (item ? item.price * n : 0);
  }, 0);
  const count = () => Object.values(cart).reduce((s, n) => s + n, 0);

  function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    save();
    renderCart();
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
      return `<li class="ci">
        <div class="ci-img">${media(p)}</div>
        <div>
          <h5>${esc(p.name)}</h5>
          <small>${esc(p.unit)} · ${money(p.price)}</small>
          ${p.desc && p.isCustom ? `<p class="ci-custom-desc">${esc(p.desc)}</p>` : ""}
          <div class="qty">
            <button data-dec="${id}" aria-label="Less">−</button>
            <span>${n}</span>
            <button data-inc="${id}" aria-label="More">+</button>
          </div>
        </div>
        <div class="ci-price">
          ${money(p.price * n)}
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
    if (t.dataset.inc) cart[id]++;
    else if (t.dataset.dec) { cart[id]--; if (cart[id] <= 0) delete cart[id]; }
    else delete cart[id];
    save(); renderCart();
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

    const lines = Object.entries(cart).map(([id, n], i) => {
      const p = byId(id);
      if (!p) return "";
      let itemLine = `${i + 1}. *${p.name}* (${p.unit}) × ${n} = ${money(p.price * n)}`;
      if (p.isCustom && p.desc) {
        itemLine += `\n   ↳ _${p.desc}_`;
      }
      return itemLine;
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
      "",
      `_Handled with love by ${SITE.handledBy}_ 🌸`
    ].filter((l, i, a) => l !== "" || a[i - 1] !== "").join("\n");

    window.open(`${waBase()}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    cart = {}; save(); renderCart(); e.target.reset(); showView("cart"); closeCart();
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
  initBouquetBuilder();
  renderCart();
  showView("cart");
  observeReveals();
  setPaused(paused);
})();
