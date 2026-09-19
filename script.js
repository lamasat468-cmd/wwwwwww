/* ========================================================
   تأجير لوازم حفلات ومناسبات - JavaScript خفيف وسريع
   ======================================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Hamburger Navigation Drawer
  const menuBtn = document.getElementById('menuToggle');
  const navDrawer = document.getElementById('navDrawer');
  const closeBtn = document.getElementById('closeNav');
  const backdrop = document.getElementById('backdrop');

  function openMenu() {
    if (navDrawer && backdrop) {
      navDrawer.classList.add('open');
      backdrop.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    if (navDrawer && backdrop) {
      navDrawer.classList.remove('open');
      backdrop.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // إغلاق البقية
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
});
