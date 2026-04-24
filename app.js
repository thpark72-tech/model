/* ═══════════════════════════════════════════════
   MICHELIN KOREA – APP.JS
═══════════════════════════════════════════════ */

// ── State ──────────────────────────────────────
let state = {
  search: '',
  stars: new Set([1, 2, 3]),
  categories: new Set(),
  regions: new Set(),
  maxPrice: 500000,
  sort: 'star-desc',
  filtered: [...RESTAURANTS],
  map: null,
  currentView: 'map',
  bbrShow: true,
  bbrSeasons: new Set([1, 2]),
  bbrTiers: new Set(['백수저', '흑수저']),
  bakeryShow: true,
  markers: [],
  bbrMarkers: [],
  bakeryMarkers: [],
  userPos: null,
  userMarker: null
};

// ── Init ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildFilters();
  initMap();
  renderList();
  renderStats();
  bindEvents();
  applyFilters();
  setupLocationBtn();
});

// ── Build dynamic filters ───────────────────────
function buildFilters() {
  const cats = [...new Set(RESTAURANTS.map(r => r.category))].sort();
  const regs = [...new Set(RESTAURANTS.map(r => r.region))].sort();

  const catEl = document.getElementById('category-filters');
  cats.forEach(c => {
    state.categories.add(c);
    const btn = document.createElement('button');
    btn.className = 'filter-chip active';
    btn.dataset.cat = c;
    btn.textContent = c;
    btn.addEventListener('click', () => toggleChip(btn, state.categories, c));
    catEl.appendChild(btn);
  });

  const regEl = document.getElementById('region-filters');
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

function toggleChip(btn, set, val) {
  if (set.has(val)) { set.delete(val); btn.classList.remove('active'); }
  else { set.add(val); btn.classList.add('active'); }
  applyFilters();
}

// ── Map ─────────────────────────────────────────
function initMap() {
  state.map = L.map('map', { center: [36.5, 127.8], zoom: 7, zoomControl: true });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    maxZoom: 18
  }).addTo(state.map);
}

function getBbrClass(r) {
  if (r.season === 1 && r.tier === '백수저') return 'bbr-s1-white';
  if (r.season === 1 && r.tier === '흑수저') return 'bbr-s1-black';
  if (r.season === 2 && r.tier === '백수저') return 'bbr-s2-white';
  return 'bbr-s2-black';
}

function updateBbrMarkers() {
  if (state.bbrMarkers) state.bbrMarkers.forEach(m => m.marker.remove());
  state.bbrMarkers = [];
  
  state.filtered.forEach(r => {
    if (r.type !== 'bbr') return;
    const cls = getBbrClass(r);
    const icon_html = `<div class="bbr-map-label ${cls}"><span class="bbr-name">${r.name}</span></div>`;
    const w = Math.max(r.name.length * 13 + 30, 70);
    const icon = L.divIcon({ className:'', html: icon_html, iconSize:[w,26], iconAnchor:[w/2,13], popupAnchor:[0,-16] });
    const marker = L.marker([r.lat, r.lng], { icon })
      .addTo(state.map)
      .bindPopup(buildBbrPopup(r), { maxWidth: 260 });
    state.bbrMarkers.push({ id: r.id, marker });
  });
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

function goToNaver(name, lat, lng) {
  const url = `https://m.map.naver.com/route.nhn?menu=route&ename=${encodeURIComponent(name)}&ex=${lng}&ey=${lat}&pathType=0`;
  window.open(url, '_blank');
}

function openBbrModal(id) {
  const r = BBR_RESTAURANTS.find(x => x.id === id);
  if (!r) return;
  const priceStr = `${r.priceMin.toLocaleString()}원 ~ ${r.priceMax.toLocaleString()}원`;
  document.getElementById('modal-star').textContent = `시즌${r.season} ${r.tier}`;
  document.getElementById('modal-star').style.color = r.tier === '백수저' ? '#555' : '#111';
  document.getElementById('modal-name').textContent = r.name;
  document.getElementById('modal-category-region').textContent = `${r.chef} 셰프 · ${r.category} · ${r.region}`;
  document.getElementById('modal-address').textContent = r.address;
  document.getElementById('modal-desc').textContent = r.desc;
  document.getElementById('modal-hours').textContent = r.hours;
  document.getElementById('modal-phone').textContent = r.phone;
  document.getElementById('modal-price').textContent = priceStr;
  document.getElementById('modal-menus').innerHTML = r.menus.map(m =>
    `<div class="menu-item"><span class="menu-name">${m.name}</span><span class="menu-price">${m.price.toLocaleString()}원</span></div>`).join('');
  
  // Update modal nav button
  const navBtn = document.getElementById('modal-nav-btn');
  if(navBtn) {
    navBtn.onclick = () => goToNaver(r.name, r.lat, r.lng);
  }

  document.getElementById('modal-overlay').classList.remove('hidden');
}

function updateMarkers() {
  if (state.markers) state.markers.forEach(m => m.marker.remove());
  state.markers = [];

  state.filtered.forEach(r => {
    if (r.type !== 'michelin') return;
    const starStr = '★'.repeat(r.stars);
    const colorClass = `mlabel-${r.stars}`;
    // Pill label: [★★★] 가온
    const html = `
      <div class="map-label ${colorClass}">
        <span class="mlabel-stars">${starStr}</span>
        <span class="mlabel-name">${r.name}</span>
      </div>`;

    const labelW = Math.max(r.name.length * 13 + 48, 80);
    const icon = L.divIcon({
      className: '',
      html,
      iconSize:   [labelW, 28],
      iconAnchor: [labelW / 2, 14],
      popupAnchor:[0, -18]
    });

    const marker = L.marker([r.lat, r.lng], { icon })
      .addTo(state.map)
      .bindPopup(buildPopup(r), { maxWidth: 260, className: 'michelin-popup' });

    state.markers.push({ id: r.id, marker });
  });
}

// ── Bakery Map ──────────────────────────────────
function updateBakeryMarkers() {
  if (state.bakeryMarkers) state.bakeryMarkers.forEach(m => m.marker.remove());
  state.bakeryMarkers = [];

  state.filtered.forEach(r => {
    if (r.type !== 'bakery') return;
    const icon_html = `<div class="bakery-map-label"><span class="bakery-emoji">🥐</span><span class="bakery-name">${r.name}</span></div>`;
    const w = Math.max(r.name.length * 13 + 45, 90);
    const icon = L.divIcon({ className:'', html: icon_html, iconSize:[w,26], iconAnchor:[w/2,13], popupAnchor:[0,-16] });
    const marker = L.marker([r.lat, r.lng], { icon })
      .addTo(state.map)
      .bindPopup(buildBakeryPopup(r), { maxWidth: 260 });
    state.bakeryMarkers.push({ id: r.id, marker });
  });
}

function buildBakeryPopup(r) {
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

function openBakeryModal(id) {
  const r = BAKERY_DATA.find(x => x.id === id);
  if (!r) return;
  const priceStr = `${r.priceMin.toLocaleString()}원 ~ ${r.priceMax.toLocaleString()}원`;
  document.getElementById('modal-star').textContent = `🥐 천하제빵`;
  document.getElementById('modal-star').style.color = '#8d5524';
  document.getElementById('modal-name').textContent = r.name;
  document.getElementById('modal-category-region').textContent = `${r.chef} 셰프 · ${r.category} · ${r.region}`;
  document.getElementById('modal-address').textContent = r.address;
  document.getElementById('modal-desc').textContent = r.desc;
  document.getElementById('modal-hours').textContent = r.hours;
  document.getElementById('modal-phone').textContent = r.phone;
  document.getElementById('modal-price').textContent = priceStr;
  document.getElementById('modal-menus').innerHTML = r.menus.map(m =>
    `<div class="menu-item"><span class="menu-name">${m.name}</span><span class="menu-price">${m.price.toLocaleString()}원</span></div>`).join('');
  
  const navBtn = document.getElementById('modal-nav-btn');
  if(navBtn) navBtn.onclick = () => goToNaver(r.name, r.lat, r.lng);

  document.getElementById('modal-overlay').classList.remove('hidden');
}


function buildPopup(r) {
  const starStr = '★'.repeat(r.stars) + '☆'.repeat(3 - r.stars);
  const priceStr = r.priceMin === r.priceMax
    ? `${r.priceMin.toLocaleString()}원`
    : `${r.priceMin.toLocaleString()} ~ ${r.priceMax.toLocaleString()}원`;
  return `
    <div class="popup-card">
      <div class="popup-star-row">
        <span class="popup-stars">${starStr}</span>
        <span class="popup-category">${r.category}</span>
      </div>
      <div class="popup-name">${r.name}</div>
      <div class="popup-region">📍 ${r.region} · ${r.address.split(' ').slice(0, 3).join(' ')}</div>
      <div class="popup-price">💰 ${priceStr}</div>
      <div style="display:flex;gap:6px">
        <button class="popup-btn" style="flex:1" onclick="openModal(${r.id})">상세 보기</button>
        <button class="popup-btn btn-nav" style="flex:1;background:var(--gold)" onclick="goToNaver('${r.name}', ${r.lat}, ${r.lng})">길찾기</button>
      </div>
    </div>`;
}

// ── Filter Logic ────────────────────────────────
function applyFilters() {
  const q = state.search.toLowerCase();
  
  // Filter Michelin
  const filteredMichelin = RESTAURANTS.filter(r =>
    state.stars.has(r.stars) &&
    state.categories.has(r.category) &&
    state.regions.has(r.region) &&
    r.priceMin <= state.maxPrice &&
    (r.name.toLowerCase().includes(q) ||
     r.category.toLowerCase().includes(q) ||
     r.region.toLowerCase().includes(q) ||
     r.address.toLowerCase().includes(q) ||
     r.menus.some(m => m.name.toLowerCase().includes(q)))
  );

  // Filter BBR
  let filteredBbr = [];
  if (state.bbrShow) {
    filteredBbr = BBR_RESTAURANTS.filter(r =>
      state.bbrSeasons.has(r.season) &&
      state.bbrTiers.has(r.tier) &&
      (r.name.toLowerCase().includes(q) ||
       r.category.toLowerCase().includes(q) ||
       r.region.toLowerCase().includes(q) ||
       r.address.toLowerCase().includes(q) ||
       r.chef.toLowerCase().includes(q) ||
       r.menus.some(m => m.name.toLowerCase().includes(q)))
    );
  }

  // Filter Bakery
  let filteredBakery = [];
  if (state.bakeryShow) {
    filteredBakery = BAKERY_DATA.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.chef.toLowerCase().includes(q) ||
      r.region.toLowerCase().includes(q) ||
      r.address.toLowerCase().includes(q) ||
      r.menus.some(m => m.name.toLowerCase().includes(q))
    );
  }

  // Combine
  state.filtered = [
    ...filteredMichelin.map(r => ({ ...r, type: 'michelin' })),
    ...filteredBbr.map(r => ({ ...r, type: 'bbr' })),
    ...filteredBakery.map(r => ({ ...r, type: 'bakery' }))
  ];

  sortResults();
  document.getElementById('result-count-num').textContent = state.filtered.length;
  updateMarkers();
  updateBbrMarkers();
  updateBakeryMarkers();
  renderList();
}

function sortResults() {
  const s = state.sort;
  state.filtered.sort((a, b) => {
    // Both types have these properties
    if (s === 'price-asc') return a.priceMin - b.priceMin;
    if (s === 'price-desc')return b.priceMax - a.priceMax;
    if (s === 'name')      return a.name.localeCompare(b.name, 'ko');
    
    // Sort by stars/tier
    if (s === 'star-desc') {
      const aVal = a.type === 'michelin' ? a.stars : 0;
      const bVal = b.type === 'michelin' ? b.stars : 0;
      return bVal - aVal;
    }
    if (s === 'star-asc') {
      const aVal = a.type === 'michelin' ? a.stars : 0;
      const bVal = b.type === 'michelin' ? b.stars : 0;
      return aVal - bVal;
    }
    return 0;
  });
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
          <div class="card-top">
            <span class="card-star-badge badge-${r.stars}">${'★'.repeat(r.stars)} ${r.stars}스타</span>
            <span class="card-category">${r.category}</span>
          </div>
          <div class="card-name">${r.name}</div>
          <div class="card-region">📍 ${r.region} · ${r.address.split(' ').slice(0, 3).join(' ')}</div>
          <div class="card-menus">
            ${r.menus.slice(0, 2).map(m =>
              `<div class="card-menu"><span class="card-menu-item">${m.name} — ${m.price.toLocaleString()}원</span></div>`
            ).join('')}
          </div>
          <div class="card-price">💰 ${r.priceMin.toLocaleString()} ~ ${r.priceMax.toLocaleString()}원 (1인)</div>
        </div>`;
      card.addEventListener('click', () => openModal(r.id));
    } else {
      // BBR Design
      const tierClass = r.tier === '백수저' ? 'tier-white' : 'tier-black';
      const seasonClass = `season-${r.season}`;
      card.className = `rest-card bbr-card ${tierClass} ${seasonClass}`;
      card.innerHTML = `
        <div class="card-body">
          <div class="card-top">
            <span class="bbr-badge-chip">${r.tier}</span>
            <span class="card-category">시즌 ${r.season} · ${r.category}</span>
          </div>
          <div class="card-name">${r.name}</div>
          <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px">👨‍🍳 ${r.chef} 셰프</div>
          <div class="card-region">📍 ${r.region} · ${r.address.split(' ').slice(0, 3).join(' ')}</div>
          <div class="card-menus">
            ${r.menus.slice(0, 2).map(m =>
              `<div class="card-menu"><span class="card-menu-item">${m.name} — ${m.price.toLocaleString()}원</span></div>`
            ).join('')}
          </div>
          <div class="card-price">💰 ${r.priceMin.toLocaleString()} ~ ${r.priceMax.toLocaleString()}원</div>
        </div>`;
      card.addEventListener('click', () => openBbrModal(r.id));
    } else if (r.type === 'bakery') {
      // Bakery Design
      card.className = `rest-card bakery-card`;
      card.innerHTML = `
        <div class="card-body">
          <div class="card-top">
            <span class="bakery-badge-chip">천하제빵</span>
            <span class="card-category">${r.category}</span>
          </div>
          <div class="card-name">${r.name}</div>
          <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px">👨‍🍳 ${r.chef} 셰프</div>
          <div class="card-region">📍 ${r.region} · ${r.address.split(' ').slice(0, 3).join(' ')}</div>
          <div class="card-menus">
            ${r.menus.slice(0, 2).map(m =>
              `<div class="card-menu"><span class="card-menu-item">${m.name} — ${m.price.toLocaleString()}원</span></div>`
            ).join('')}
          </div>
          <div class="card-price">💰 ${r.priceMin.toLocaleString()} ~ ${r.priceMax.toLocaleString()}원</div>
        </div>`;
      card.addEventListener('click', () => openBakeryModal(r.id));
    }
    grid.appendChild(card);
  });
}


// ── Stats View ──────────────────────────────────
function renderStats() {
  const all = RESTAURANTS;
  document.getElementById('stat-total').textContent = all.length;
  document.getElementById('stat-3star').textContent = all.filter(r => r.stars === 3).length;
  document.getElementById('stat-2star').textContent = all.filter(r => r.stars === 2).length;
  document.getElementById('stat-1star').textContent = all.filter(r => r.stars === 1).length;

  // Category chart
  const catMap = {};
  all.forEach(r => catMap[r.category] = (catMap[r.category] || 0) + 1);
  renderBarChart('category-chart', catMap, '#7c6fff');

  // Region chart
  const regMap = {};
  all.forEach(r => regMap[r.region] = (regMap[r.region] || 0) + 1);
  renderBarChart('region-chart', regMap, '#ff6b9d');

  // Price chart
  const priceBuckets = { '~5만원': 0, '5~10만원': 0, '10~20만원': 0, '20~30만원': 0, '30만원+': 0 };
  all.forEach(r => {
    const p = r.priceMin;
    if (p < 50000) priceBuckets['~5만원']++;
    else if (p < 100000) priceBuckets['5~10만원']++;
    else if (p < 200000) priceBuckets['10~20만원']++;
    else if (p < 300000) priceBuckets['20~30만원']++;
    else priceBuckets['30만원+']++;
  });
  renderBarChart('price-chart', priceBuckets, '#f0c040');
}

function renderBarChart(elId, dataMap, color) {
  const el = document.getElementById(elId);
  if (!el) return;
  const max = Math.max(...Object.values(dataMap));
  const sorted = Object.entries(dataMap).sort((a, b) => b[1] - a[1]);
  el.innerHTML = sorted.map(([label, count]) => `
    <div class="bar-row">
      <div class="bar-label" title="${label}">${label}</div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${(count/max*100).toFixed(1)}%;background:${color}"></div>
      </div>
      <div class="bar-count">${count}</div>
    </div>`).join('');
}

// ── Modal ────────────────────────────────────────
function openModal(id) {
  const r = RESTAURANTS.find(x => x.id === id);
  if (!r) return;

  const starStr = '★'.repeat(r.stars);
  document.getElementById('modal-star').textContent = starStr;
  document.getElementById('modal-star').style.color =
    r.stars === 3 ? 'var(--gold)' : r.stars === 2 ? 'var(--silver)' : 'var(--bronze)';
  document.getElementById('modal-name').textContent = r.name;
  document.getElementById('modal-category-region').textContent = `${r.category} · ${r.region}`;
  document.getElementById('modal-address').textContent = r.address;
  document.getElementById('modal-desc').textContent = r.desc;
  document.getElementById('modal-hours').textContent = r.hours;
  document.getElementById('modal-phone').textContent = r.phone;

  const priceStr = r.priceMin === r.priceMax
    ? `${r.priceMin.toLocaleString()}원`
    : `${r.priceMin.toLocaleString()}원 ~ ${r.priceMax.toLocaleString()}원`;
  document.getElementById('modal-price').textContent = priceStr;

  document.getElementById('modal-menus').innerHTML = r.menus.map(m =>
    `<div class="menu-item">
       <span class="menu-name">${m.name}</span>
       <span class="menu-price">${m.price.toLocaleString()}원</span>
     </div>`).join('');

  // Update modal nav button
  const navBtn = document.getElementById('modal-nav-btn');
  if(navBtn) {
    navBtn.onclick = () => goToNaver(r.name, r.lat, r.lng);
  }

  document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

// ── Events ───────────────────────────────────────
function bindEvents() {
  // Search
  const searchEl = document.getElementById('search-input');
  searchEl.addEventListener('input', e => { state.search = e.target.value; applyFilters(); });
  document.getElementById('clear-search').addEventListener('click', () => {
    searchEl.value = ''; state.search = ''; applyFilters();
  });

  // Star checkboxes
  document.querySelectorAll('.star-check').forEach(cb => {
    cb.checked = true;
    cb.addEventListener('change', e => {
      const v = parseInt(e.target.value);
      e.target.checked ? state.stars.add(v) : state.stars.delete(v);
      applyFilters();
    });
  });

  // Price range
  const priceEl = document.getElementById('price-range');
  priceEl.addEventListener('input', e => {
    state.maxPrice = parseInt(e.target.value);
    document.getElementById('price-display').textContent =
      state.maxPrice >= 500000 ? '500,000원 이하' : `${state.maxPrice.toLocaleString()}원 이하`;
    applyFilters();
  });

  // Sort
  document.getElementById('sort-select').addEventListener('change', e => {
    state.sort = e.target.value; applyFilters();
  });

  // BBR filters
  document.querySelector('.bbr-check').addEventListener('change', e => {
    state.bbrShow = e.target.checked;
    updateBbrMarkers();
  });
  document.querySelectorAll('.season-check').forEach(cb => {
    cb.checked = true;
    cb.addEventListener('change', e => {
      const v = parseInt(e.target.value);
      e.target.checked ? state.bbrSeasons.add(v) : state.bbrSeasons.delete(v);
      updateBbrMarkers();
    });
  });
  document.querySelectorAll('.tier-check').forEach(cb => {
    cb.checked = true;
    cb.addEventListener('change', e => {
      const v = e.target.value;
      e.target.checked ? state.bbrTiers.add(v) : state.bbrTiers.delete(v);
      updateBbrMarkers();
      applyFilters();
    });
  });

  // Bakery filter
  document.querySelector('.bakery-check').addEventListener('change', e => {
    state.bakeryShow = e.target.checked;
    updateBakeryMarkers();
    applyFilters();
  });

  // Nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      state.currentView = view;
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById(`view-${view}`).classList.add('active');
      if (view === 'map') setTimeout(() => state.map.invalidateSize(), 100);
    });
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ── Geolocation ────────────────────────────────
function setupLocationBtn() {
  const mapEl = document.getElementById('view-map');
  const btn = document.createElement('button');
  btn.className = 'my-location-btn';
  btn.innerHTML = '📍 내 위치';
  btn.title = '현재 위치 확인';
  btn.onclick = locateUser;
  mapEl.appendChild(btn);
}

function locateUser() {
  if (!navigator.geolocation) {
    alert('이 브라우저는 위치 정보를 지원하지 않습니다.');
    return;
  }

  const btn = document.querySelector('.my-location-btn');
  btn.textContent = '📍 찾는 중...';
  btn.disabled = true;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      state.userPos = [lat, lng];

      if (state.userMarker) {
        state.userMarker.setLatLng(state.userPos);
      } else {
        const icon = L.divIcon({
          className: 'user-marker',
          html: '<div class="user-marker-pulse"></div>',
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });
        state.userMarker = L.marker(state.userPos, { icon, zIndexOffset: 1000 }).addTo(state.map);
      }

      state.map.setView(state.userPos, 13);
      btn.textContent = '📍 내 위치';
      btn.disabled = false;
    },
    (err) => {
      console.error(err);
      alert('위치 정보를 가져올 수 없습니다. 권한 설정을 확인해주세요.');
      btn.textContent = '📍 내 위치';
      btn.disabled = false;
    },
    { enableHighAccuracy: true }
  );
}
