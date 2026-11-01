// app.js — tiny helpers. Add data-* attributes in HTML; no setup needed.
// data-nav-toggle="menu-id": open/close the mobile navbar menu.
document.querySelectorAll('[data-nav-toggle]').forEach(btn => btn.addEventListener('click', () => {
  const menu = document.getElementById(btn.dataset.navToggle);
  const open = menu.hidden;
  menu.hidden = !open;
  btn.setAttribute('aria-expanded', open);
}));
// data-sidebar-toggle / data-sidebar-close: open/close the sidebar on small screens.
const shell = document.querySelector('.app-shell');
document.querySelectorAll('[data-sidebar-toggle]').forEach(b => b.addEventListener('click', () => { if (shell) shell.dataset.sidebarOpen = 'true'; }));
document.querySelectorAll('[data-sidebar-close]').forEach(b => b.addEventListener('click', () => { if (shell) shell.dataset.sidebarOpen = 'false'; }));
// data-theme-toggle: switch light/dark and remember the choice.
const saved = localStorage.getItem('theme'); if (saved) document.documentElement.dataset.theme = saved;
document.querySelectorAll('[data-theme-toggle]').forEach(b => b.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next; localStorage.setItem('theme', next);
}));
// data-table-search on an <input>, data-table-status on a <select>; rows carry data-status. data-table="id" points at the <tbody>.
document.querySelectorAll('[data-table-search]').forEach(box => {
  const body = document.getElementById(box.dataset.tableSearch);
  const status = document.querySelector(`[data-table-status="${box.dataset.tableSearch}"]`);
  const empty = document.getElementById(`${box.dataset.tableSearch}-empty`);
  const run = () => {
    const q = box.value.trim().toLowerCase(), s = status ? status.value : '';
    let shown = 0;
    body.querySelectorAll('tr').forEach(row => {
      const ok = row.textContent.toLowerCase().includes(q) && (!s || row.dataset.status === s);
      row.hidden = !ok; if (ok) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  };
  box.addEventListener('input', run); if (status) status.addEventListener('change', run);
});
// data-modal-open="id" / data-modal-close: open and close a <dialog class="modal">.
document.querySelectorAll('[data-modal-open]').forEach(b => b.addEventListener('click', () => document.getElementById(b.dataset.modalOpen).showModal()));
document.querySelectorAll('[data-modal-close]').forEach(b => b.addEventListener('click', () => b.closest('dialog').close()));
document.querySelectorAll('dialog.modal').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
// data-toast="Message" (optional data-toast-type="success|warning|danger"): show a toast. Creates .toast-region if missing.
document.querySelectorAll('[data-toast]').forEach(b => b.addEventListener('click', () => {
  let region = document.querySelector('.toast-region');
  if (!region) { region = document.createElement('div'); region.className = 'toast-region'; region.setAttribute('aria-live', 'polite'); document.body.append(region); }
  const t = document.createElement('div');
  t.className = 'toast' + (b.dataset.toastType ? ' toast--' + b.dataset.toastType : ''); t.setAttribute('role', 'status'); t.textContent = b.dataset.toast;
  region.append(t); setTimeout(() => t.remove(), 3500);
}));
// data-tabs on a wrapper: buttons with role="tab" + aria-controls switch matching role="tabpanel" elements.
document.querySelectorAll('[data-tabs]').forEach(wrap => {
  const tabs = [...wrap.querySelectorAll('[role="tab"]')];
  const pick = t => tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; const p = document.getElementById(x.getAttribute('aria-controls')); if (p) p.hidden = !on; });
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => pick(t));
    t.addEventListener('keydown', e => { const n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (n) { const nt = tabs[(i + n + tabs.length) % tabs.length]; pick(nt); nt.focus(); } });
  });
});
