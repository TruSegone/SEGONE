const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
const navLinks = [...nav.querySelectorAll('a')];

function closeMenu({ returnFocus = false } = {}) {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('is-open', !isOpen);
  if (!isOpen) navLinks[0].focus();
});

navLinks.forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu({ returnFocus: true });
});
document.querySelector('#year').textContent = new Date().getFullYear();

const form = document.querySelector('#enquiry-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', event => {
  event.preventDefault();
  status.textContent = '';
  if (!form.reportValidity()) return;
  const description = form.elements.description.value.trim();
  if (description.length < 20) {
    form.elements.description.setCustomValidity('Please add at least 20 characters so we can understand the enquiry.');
    form.elements.description.reportValidity();
    form.elements.description.setCustomValidity('');
    return;
  }
  const fields = new FormData(form);
  const subject = `SEGONE project enquiry — ${fields.get('service')}`;
  const body = [
    `Name: ${fields.get('name')}`,
    `Business email: ${fields.get('email')}`,
    `Company: ${fields.get('company') || 'Not provided'}`,
    `Service: ${fields.get('service')}`,
    `Budget: ${fields.get('budget') || 'Not provided'}`,
    `Timeline: ${fields.get('timeline') || 'Not provided'}`,
    '', 'Project description:', description,
    '', 'Consent: Agreed to use these details to respond to this enquiry.'
  ].join('\n');
  const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.classList.remove('error');
  status.textContent = 'Your email application should open with the enquiry details. Review and send it there; this website has not transmitted or stored anything.';
  window.location.href = mailto;
});
