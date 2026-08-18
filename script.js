/* ============================================================
   KIPPAX ASC — site logic
   You should not need to edit this file. All content that
   changes regularly lives in data.js.
   ============================================================ */

/* ---------- Mobile navigation ---------- */
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

/* ---------- Current year in footer ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Helper: escape any stray HTML in text ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c =>
  ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));

/* ---------- Render NEWS ---------- */
function renderNews() {
  const grid = document.getElementById('newsGrid');
  if (!grid || typeof ANNOUNCEMENTS === 'undefined') return;
  grid.innerHTML = ANNOUNCEMENTS.map(n => `
    <article class="news-card">
      <div class="news-meta">
        <span class="news-tag ${esc(n.tag)}">${esc(n.tag)}</span>
        <span class="news-date">${esc(n.date)}</span>
      </div>
      <h3>${esc(n.title)}</h3>
      <p>${esc(n.body)}</p>
    </article>`).join('');
}

/* ---------- Render TIMETABLE ---------- */
function renderTimetable() {
  const body = document.querySelector('#timetable tbody');
  if (!body || typeof TIMETABLE === 'undefined') return;
  body.innerHTML = TIMETABLE.map(r => `
    <tr>
      <td>${esc(r.group)}</td>
      <td>${esc(r.day)}</td>
      <td>${esc(r.time)}</td>
      <td>${esc(r.venue)}</td>
    </tr>`).join('');
}

/* ---------- Render EVENTS (with filtering) ---------- */
function splitDate(str) {
  // expects "18 Aug 2026" -> {d:"18", m:"Aug"}
  const parts = String(str).trim().split(/\s+/);
  return { d: parts[0] || '', m: (parts[1] || '').toUpperCase() };
}

function renderEvents(filter = 'All') {
  const list = document.getElementById('eventsList');
  if (!list || typeof EVENTS === 'undefined') return;

  const items = EVENTS.filter(e => filter === 'All' || e.type === filter);

  if (!items.length) {
    list.innerHTML = `<p class="no-events">No ${esc(filter.toLowerCase())} events listed right now — check back soon!</p>`;
    return;
  }

  list.innerHTML = items.map(e => {
    const dt = splitDate(e.date);
    const time = (e.start || e.end)
      ? `${esc(e.start)}${e.end ? ' – ' + esc(e.end) : ''} &bull; ` : '';
    return `
      <div class="event-row">
        <div class="event-date">
          <span class="d">${esc(dt.d)}</span>
          <span class="m">${esc(dt.m)}</span>
        </div>
        <div class="event-body">
          <h4>${esc(e.title)}</h4>
          <p class="meta">${time}${esc(e.group)}</p>
        </div>
        <span class="event-type ${esc(e.type)}">${esc(e.type)}</span>
      </div>`;
  }).join('');
}

/* ---------- Event filter buttons ---------- */
const filterBar = document.getElementById('eventFilters');
if (filterBar) {
  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    filterBar.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    renderEvents(btn.dataset.filter);
  });
}

/* ---------- Go! ---------- */
renderNews();
renderTimetable();
renderEvents();
