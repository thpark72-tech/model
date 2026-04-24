/* ═══════════════════════════════════════════════
   MICHELIN & BBR & BAKERY PORTAL – APP.JS
═══════════════════════════════════════════════ */

// ── State ──────────────────────────────────────
let state = {
  search: '',
  stars: new Set([1, 2, 3]),
  categories: new Set(),
  regions: new Set(),
  maxPrice: 500000,
  sort: 'star-desc',
  filtered: [],
  map: null,
  markers: [],
  bbrMarkers: [],
  bakeryMarkers: [],
  currentView: 'map',
  bbrShow: true,
  bbrSeasons: new Set([1, 2]),
  bbrTiers: new Set(['백수저', '흑수저']),
  bakeryShow: true,
  userPos: null,
  userMarker: null
};

// ── Init ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log("Initializing App...");
    buildFilters();
    initMap();
    renderStats();
    bindEvents();
    applyFilters();
    setupLocationBtn();
    
    // Refresh map size
    if (state.map) {
      setTimeout(() => state.map.invalidateSize(), 500);
    }
  } catch (err) {
    console.error("Initialization Error:", err);
  }
});

// ── Build dynamic filters ───────────────────────
function buildFilters() {
  const allRes = typeof RESTAURANTS !== 'undefined' ? RESTAURANTS : [];
  const cats = [...new Set(allRes.map(r => r.category))].sort();
  const regs = [...new Set(allRes.map(r => r.region))].sort();

  const catEl = document.getElementById('category-filters');
  if (catEl) {
    catEl.innerHTML = '';
    cats.forEach(c => {
      state.categories.add(c);
      const btn = document.createElement('button');
      btn.className = 'filter-chip active';
      btn.dataset.cat = c;
      btn.textContent = c;
      btn.addEventListener('click', () => toggleChip(btn, state.categories, c));
      catEl.appendChild(btn);
    });
  }

  const regEl = document.getElementById('region-filters');
  if (regEl) {
    regEl.innerHTML = '';
    regs.forEach(r => {
      state.regions.add(r);
      const btn = document.createElement('button');
      btn.className = 'filter-chip active';
      btn.dataset.reg = r;
      btn.textContent = r;
      btn.addEventListener('click', () => toggleChip(btn, state.regions, r));
      regEl.appendChild(btn);
    });
  }
}

function toggleChip(btn, set, val) {
  if (set.has(val)) { set.delete(val); btn.classList.remove('active'); }
  else { set.add(val); btn.classList.add('active'); }
  applyFilters();
}

// ── Map ─────────────────────────────────────────
function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;
  
  state.map = L.map('map', { center: [36.5, 127.8], zoom: 7, zoomControl: true });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    maxZoom: 18
  }).addTo(state.map);
}

// ── Marker Management ──────────────────────────
function clearAllMarkers() {
  if (state.markers) state.markers.forEach(m => m.marker.remove());
  if (state.bbrMarkers) state.bbrMarkers.forEach(m => m.marker.remove());
  if (state.bakeryMarkers) state.bakeryMarkers.forEach(m => m.marker.remove());
  state.markers = [];
  state.bbrMarkers = [];
  state.bakeryMarkers = [];
}

function updateAllMarkers() {
  if (!state.map) return;
  clearAllMarkers();

  state.filtered.forEach(r => {
    try {
      if (r.type === 'michelin') renderMichelinMarker(r);
      else if (r.type === 'bbr') renderBbrMarker(r);
      else if (r.type === 'bakery') renderBakeryMarker(r);
    } catch (e) {
      console.error("Error rendering marker for:", r.name, e);
    }
  });
}

function renderMichelinMarker(r) {
  const starCount = r.stars || 1;
  const starStr = '★'.repeat(starCount);
  const colorClass = `mlabel-${starCount}`;
  const html = `<div class="map-label ${colorClass}"><span class="mlabel-stars">${starStr}</span><span class="mlabel-name">${r.name}</span></div>`;
  const labelW = Math.max(r.name.length * 13 + 48, 80);
  const icon = L.divIcon({ className: '', html, iconSize: [labelW, 28], iconAnchor: [labelW / 2, 14], popupAnchor: [0, -18] });
  const marker = L.marker([r.lat, r.lng], { icon }).addTo(state.map).bindPopup(buildPopup(r), { maxWidth: 260, className: 'michelin-popup' });
  state.markers.push({ id: r.id, marker });
}

function getBbrClass(r) {
  if (r.season === 1 && r.tier === '백수저') return 'bbr-s1-white';
  if (r.season === 1 && r.tier === '흑수저') return 'bbr-s1-black';
  if (r.season === 2 && r.tier === '백수저') return 'bbr-s2-white';
  return 'bbr-s2-black';
}

function renderBbrMarker(r) {
  const cls = getBbrClass(r);
  const icon_html = `<div class="bbr-map-label ${cls}"><span class="bbr-name">${r.name}</span></div>`;
  const w = Math.max(r.name.length * 13 + 30, 70);
  const icon = L.divIcon({ className:'', html: icon_html, iconSize:[w,26], iconAnchor:[w/2,13], popupAnchor:[0,-16] });
  const marker = L.marker([r.lat, r.lng], { icon }).addTo(state.map).bindPopup(buildBbrPopup(r), { maxWidth: 260 });
  state.bbrMarkers.push({ id: r.id, marker });
}

function renderBakeryMarker(r) {
  const icon_html = `<div class="bakery-map-label"><span class="bakery-emoji">🥐</span><span class="bakery-name">${r.name}</span></div>`;
  const w = Math.max(r.name.length * 13 + 45, 90);
  const icon = L.divIcon({ className:'', html: icon_html, iconSize:[w,26], iconAnchor:[w/2,13], popupAnchor:[0,-16] });
  const marker = L.marker([r.lat, r.lng], { icon }).addTo(state.map).bindPopup(buildBakeryPopup(r), { maxWidth: 260 });
  state.bakeryMarkers.push({ id: r.id, marker });
}

// ── Popups ─────────────────────────────────────
function buildPopup(r) {
  const starCount = r.stars || 1;
  const starStr = '★'.repeat(starCount) + '☆'.repeat(3 - starCount);
  const priceStr = r.priceMin === r.priceMax ? `${r.priceMin.toLocaleString()}원` : `${r.priceMin.toLocaleString()} ~ ${r.priceMax.toLocaleString()}원`;
  return `<div class="popup-card">
    <div class="popup-star-row"><span class="popup-stars">${starStr}</span><span class="popup-category">${r.category}</span></div>
    <div class="popup-name">${r.name}</div>
    <div class="popup-region">📍 ${r.region} · ${r.address.split(' ').slice(0, 3).join(' ')}</div>
    <div class="popup-price">💰 ${priceStr}</div>
    <div style="display:flex;gap:6px">
      <button class="popup-btn" style="flex:1" onclick="openModal(${r.id})">상세 보기</button>
      <button class="popup-btn btn-nav" style="flex:1;background:var(--gold)" onclick="goToNaver('${r.name}', ${r.lat}, ${r.lng})">길찾기</button>
    </div>
  </div>`;
}

function buildBbrPopup(r) {
  const priceStr = r.priceMin === r.priceMax ? `${r.priceMin.toLocaleString()}원` : `${r.priceMin.toLocaleString()} ~ ${r.priceMax.toLocaleString()}원`;
  const tierColor = r.tier === '백수저' ? '#888' : '#222';
  return `<div class="popup-card">
    <div class="popup-star-row">
      <span style="font-size:0.75rem;background:${tierColor};color:#fff;padding:2px 8px;border-radius:8px;font-weight:700">${r.tier}</span>
      <span class="popup-category">시즌${r.season} · ${r.category}</span>
    </div>
    <div class="popup-name">${r.name}</div>
    <div style="font-size:0.78rem;color:#888;margin-bottom:4px">👨‍🍳 ${r.chef} 셰프</div>
    <div class="popup-region">📍 ${r.region} · ${r.address.split(' ').slice(0,3).join(' ')}</div>
    <div class="popup-price">💰 ${priceStr}</div>
    <div style="display:flex;gap:6px">
      <button class="popup-btn" style="flex:1" onclick="openBbrModal('${r.id}')">상세 보기</button>
      <button class="popup-btn btn-nav" style="flex:1;background:var(--gold)" onclick="goToNaver('${r.name}', ${r.lat}, ${r.lng})">길찾기</button>
    </div>
  </div>`;
}

function buildBakeryPopup(r) {
  const priceStr = r.priceMin === r.priceMax ? `${r.priceMin.toLocaleString()}원` : `${r.priceMin.toLocaleString()} ~ ${r.priceMax.toLocaleString()}원`;
  return `<div class="popup-card">
    <div class="popup-star-row">
      <span style="font-size:0.75rem;background:#8d5524;color:#fff;padding:2px 8px;border-radius:8px;font-weight:700">천하제빵</span>
      <span class="popup-category">${r.category}</span>
    </div>
    <div class="popup-name">${r.name}</div>
    <div style="font-size:0.78rem;color:#888;margin-bottom:4px">👨‍🍳 ${r.chef} 셰프</div>
    <div class="popup-region">📍 ${r.region} · ${r.address.split(' ').slice(0,3).join(' ')}</div>
    <div style="display:flex;gap:6px">
      <button class="popup-btn" style="flex:1" onclick="openBakeryModal('${r.id}')">상세 보기</button>
      <button class="popup-btn btn-nav" style="flex:1;background:var(--gold)" onclick="goToNaver('${r.name}', ${r.lat}, ${r.lng})">길찾기</button>
    </div>
  </div>`;
}

// ── Navigation Link ─────────────────────────────
function goToNaver(name, lat, lng) {
  const url = `https://m.map.naver.com/route.nhn?menu=route&ename=${encodeURIComponent(name)}&ex=${lng}&ey=${lat}&pathType=0`;
  window.open(url, '_blank');
}

// ── Filter Logic ────────────────────────────────
function applyFilters() {
  const q = state.search.toLowerCase();
  
  // Michelin
  const mData = typeof RESTAURANTS !== 'undefined' ? RESTAURANTS : [];
  const filteredMichelin = mData.filter(r =>
    state.stars.has(r.stars) &&
    state.categories.has(r.category) &&
    state.regions.has(r.region) &&
    r.priceMin <= state.maxPrice &&
    (r.name.toLowerCase().includes(q) || r.category.toLowerCase().includes(q) || r.region.toLowerCase().includes(q) || r.address.toLowerCase().includes(q))
  );

  // BBR
  let filteredBbr = [];
  if (state.bbrShow && typeof BBR_RESTAURANTS !== 'undefined') {
    filteredBbr = BBR_RESTAURANTS.filter(r =>
      state.bbrSeasons.has(r.season) &&
      state.bbrTiers.has(r.tier) &&
      (r.name.toLowerCase().includes(q) || r.chef.toLowerCase().includes(q) || r.category.toLowerCase().includes(q) || r.region.toLowerCase().includes(q))
    );
  }

  // Bakery
  let filteredBakery = [];
  if (state.bakeryShow && typeof BAKERY_DATA !== 'undefined') {
    filteredBakery = BAKERY_DATA.filter(r =>
      (r.name.toLowerCase().includes(q) || r.chef.toLowerCase().includes(q) || r.category.toLowerCase().includes(q) || r.region.toLowerCase().includes(q))
    );
  }

  state.filtered = [
    ...filteredMichelin.map(r => ({ ...r, type: 'michelin' })),
    ...filteredBbr.map(r => ({ ...r, type: 'bbr' })),
    ...filteredBakery.map(r => ({ ...r, type: 'bakery' }))
  ];

  sortResults();
  
  const countEl = document.getElementById('result-count-num');
  if (countEl) countEl.textContent = state.filtered.length;

  updateAllMarkers();
  renderList();
}

function sortResults() {
  const s = state.sort;
  state.filtered.sort((a, b) => {
    if (s === 'price-asc') return (a.priceMin || 0) - (b.priceMin || 0);
    if (s === 'price-desc') return (b.priceMax || 0) - (a.priceMax || 0);
    if (s === 'name') return a.name.localeCompare(b.name, 'ko');
    if (s === 'star-desc') {
      const aVal = a.type === 'michelin' ? a.stars : 0;
      const bVal = b.type === 'michelin' ? b.stars : 0;
      return bVal - aVal;
    }
    return 0;
  });
}

// ── Modals ──────────────────────────────────────
function openModal(id) {
  const r = RESTAURANTS.find(x => x.id === id);
  if (!r) return;
  populateModal(r, '★'.repeat(r.stars), r.stars === 3 ? 'var(--gold)' : r.stars === 2 ? 'var(--star2-color)' : 'var(--star1-color)');
}

function openBbrModal(id) {
  const r = BBR_RESTAURANTS.find(x => x.id === id);
  if (!r) return;
  populateModal(r, `시즌${r.season} ${r.tier}`, r.tier === '백수저' ? '#555' : '#111', `${r.chef} 셰프 · ${r.category} · ${r.region}`);
}

function openBakeryModal(id) {
  const r = BAKERY_DATA.find(x => x.id === id);
  if (!r) return;
  populateModal(r, `🥐 천하제빵`, '#8d5524', `${r.chef} 셰프 · ${r.category} · ${r.region}`);
}

function populateModal(r, starText, starColor, subText) {
  document.getElementById('modal-star').textContent = starText;
  document.getElementById('modal-star').style.color = starColor;
  document.getElementById('modal-name').textContent = r.name;
  document.getElementById('modal-category-region').textContent = subText || `${r.category} · ${r.region}`;
  document.getElementById('modal-address').textContent = r.address;
  document.getElementById('modal-desc').textContent = r.desc;
  document.getElementById('modal-hours').textContent = r.hours;
  document.getElementById('modal-phone').textContent = r.phone;
  document.getElementById('modal-price').textContent = `${r.priceMin.toLocaleString()}원 ~ ${r.priceMax.toLocaleString()}원`;
  document.getElementById('modal-menus').innerHTML = r.menus.map(m =>
    `<div class="menu-item"><span class="menu-name">${m.name}</span><span class="menu-price">${m.price.toLocaleString()}원</span></div>`).join('');
  
  const navBtn = document.getElementById('modal-nav-btn');
  if(navBtn) navBtn.onclick = () => goToNaver(r.name, r.lat, r.lng);
  
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

// ── List View ───────────────────────────────────
function renderList() {
  const grid = document.getElementById('restaurant-list');
  if (!grid) return;
  grid.innerHTML = '';

  if (state.filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:60px">검색 결과가 없습니다.</div>';
    return;
  }

  state.filtered.forEach(r => {
    const card = document.createElement('div');
    if (r.type === 'michelin') {
      card.className = `rest-card stars-${r.stars}`;
      card.innerHTML = `
        <div class="card-body">
          <div class="card-top"><span class="card-star-badge star-${r.stars}">${'★'.repeat(r.stars)}</span><span class="card-category">${r.category}</span></div>
          <div class="card-name">${r.name}</div>
          <div class="card-region">📍 ${r.region} · ${r.address.split(' ').slice(0, 3).join(' ')}</div>
          <div class="card-price">💰 ${r.priceMin.toLocaleString()} ~ ${r.priceMax.toLocaleString()}원</div>
        </div>`;
      card.addEventListener('click', () => openModal(r.id));
    } else if (r.type === 'bbr') {
      const tierClass = r.tier === '백수저' ? 'tier-white' : 'tier-black';
      card.className = `rest-card bbr-card ${tierClass}`;
      card.innerHTML = `
        <div class="card-body">
          <div class="card-top"><span class="bbr-badge-chip">${r.tier}</span><span class="card-category">시즌 ${r.season} · ${r.category}</span></div>
          <div class="card-name">${r.name}</div>
          <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:8px">👨‍🍳 ${r.chef} 셰프</div>
          <div class="card-region">📍 ${r.region} · ${r.address.split(' ').slice(0, 3).join(' ')}</div>
        </div>`;
      card.addEventListener('click', () => openBbrModal(r.id));
    } else {
      card.className = `rest-card bakery-card`;
      card.innerHTML = `
        <div class="card-body">
          <div class="card-top"><span class="bakery-badge-chip">천하제빵</span><span class="card-category">${r.category}</span></div>
          <div class="card-name">${r.name}</div>
          <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:8px">👨‍🍳 ${r.chef} 셰프</div>
          <div class="card-region">📍 ${r.region} · ${r.address.split(' ').slice(0, 3).join(' ')}</div>
        </div>`;
      card.addEventListener('click', () => openBakeryModal(r.id));
    }
    grid.appendChild(card);
  });
}

// ── Stats ───────────────────────────────────────
function renderStats() {
  const all = typeof RESTAURANTS !== 'undefined' ? RESTAURANTS : [];
  const setVal = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  setVal('stat-total', all.length);
  setVal('stat-3star', all.filter(r => r.stars === 3).length);
  setVal('stat-2star', all.filter(r => r.stars === 2).length);
  setVal('stat-1star', all.filter(r => r.stars === 1).length);
}

// ── Events ───────────────────────────────────────
function bindEvents() {
  const listen = (id, evt, fn) => { const el = document.getElementById(id); if(el) el.addEventListener(evt, fn); };
  
  listen('search-input', 'input', e => { state.search = e.target.value; applyFilters(); });
  listen('clear-search', 'click', () => { const el = document.getElementById('search-input'); if(el) el.value = ''; state.search = ''; applyFilters(); });
  
  document.querySelectorAll('.star-check').forEach(cb => {
    cb.addEventListener('change', e => {
      const v = parseInt(e.target.value);
      e.target.checked ? state.stars.add(v) : state.stars.delete(v);
      applyFilters();
    });
  });

  listen('price-range', 'input', e => {
    state.maxPrice = parseInt(e.target.value);
    const disp = document.getElementById('price-display');
    if(disp) disp.textContent = state.maxPrice >= 500000 ? '500,000원 이하' : `${state.maxPrice.toLocaleString()}원 이하`;
    applyFilters();
  });

  listen('sort-select', 'change', e => { state.sort = e.target.value; applyFilters(); });

  const bbrCheck = document.querySelector('.bbr-check');
  if(bbrCheck) bbrCheck.addEventListener('change', e => { state.bbrShow = e.target.checked; applyFilters(); });

  document.querySelectorAll('.season-check').forEach(cb => {
    cb.addEventListener('change', e => {
      const v = parseInt(e.target.value);
      e.target.checked ? state.bbrSeasons.add(v) : state.bbrSeasons.delete(v);
      applyFilters();
    });
  });

  document.querySelectorAll('.tier-check').forEach(cb => {
    cb.addEventListener('change', e => {
      const v = e.target.value;
      e.target.checked ? state.bbrTiers.add(v) : state.bbrTiers.delete(v);
      applyFilters();
    });
  });

  const bakeryCheck = document.querySelector('.bakery-check');
  if(bakeryCheck) bakeryCheck.addEventListener('change', e => { state.bakeryShow = e.target.checked; applyFilters(); });

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      state.currentView = view;
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      const viewEl = document.getElementById(`view-${view}`);
      if(viewEl) viewEl.classList.add('active');
      if (view === 'map' && state.map) setTimeout(() => state.map.invalidateSize(), 100);
    });
  });

  listen('modal-close', 'click', closeModal);
  listen('modal-overlay', 'click', e => { if (e.target === document.getElementById('modal-overlay')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ── Geolocation ────────────────────────────────
function setupLocationBtn() {
  const mapEl = document.getElementById('view-map');
  if(!mapEl) return;
  const btn = document.createElement('button');
  btn.className = 'my-location-btn';
  btn.innerHTML = '📍 내 위치';
  btn.onclick = locateUser;
  mapEl.appendChild(btn);
}

function locateUser() {
  if (!navigator.geolocation) { alert('위치 정보 미지원'); return; }
  const btn = document.querySelector('.my-location-btn');
  if(btn) btn.textContent = '📍 찾는 중...';
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      state.userPos = [lat, lng];
      if (state.userMarker) state.userMarker.setLatLng(state.userPos);
      else {
        const icon = L.divIcon({ className: 'user-marker', html: '<div class="user-marker-pulse"></div>', iconSize: [20, 20], iconAnchor: [10, 10] });
        state.userMarker = L.marker(state.userPos, { icon, zIndexOffset: 1000 }).addTo(state.map);
      }
      state.map.setView(state.userPos, 13);
      if(btn) btn.textContent = '📍 내 위치';
    },
    (err) => { alert('위치 정보 오류'); if(btn) btn.textContent = '📍 내 위치'; },
    { enableHighAccuracy: true }
  );
}
