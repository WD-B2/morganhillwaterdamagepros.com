(function () {
  var BP = 768;
  var root = document.documentElement;
  var overlay = document.querySelector('.mob-overlay');
  var drawer = document.getElementById('mob-drawer');
  var burger = document.querySelector('.hamburger');
  function setOpen(open) {
    root.classList.toggle('nav-open', open);
    root.style.overflow = open ? 'hidden' : '';
    if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (drawer) drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
  }
  if (burger) burger.addEventListener('click', function () { setOpen(true); });
  if (overlay) overlay.addEventListener('click', function () { setOpen(false); });
  var closeBtn = document.querySelector('.mob-close');
  if (closeBtn) closeBtn.addEventListener('click', function () { setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > BP) setOpen(false); });
  if (drawer) drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });

  var items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    var panel = item.querySelector('.faq-a');
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
    });
  });
  window.addEventListener('resize', function () {
    document.querySelectorAll('.faq-item.open .faq-a').forEach(function (p) { p.style.maxHeight = p.scrollHeight + 'px'; });
  });
})();
