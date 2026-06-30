// Plan data — single source of truth
const plans = {
  starter: { monthly: 19,  annual: 190  },
  growth:  { monthly: 49,  annual: 490  },
  scale:   { monthly: 129, annual: 1290 },
}

// ── Nav scroll state ──────────────────────────────────────────────────────────
const nav = document.getElementById('main-nav')
if (nav) {
  const syncNav = () => nav.classList.toggle('nav-scrolled', window.scrollY > 50)
  window.addEventListener('scroll', syncNav, { passive: true })
  syncNav()
}

// ── Mobile menu ───────────────────────────────────────────────────────────────
const menuToggle  = document.getElementById('menu-toggle')
const mobileMenu  = document.getElementById('mobile-menu')
menuToggle?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'))

// Close mobile menu when an anchor link is tapped
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
})

// ── Pricing toggle ────────────────────────────────────────────────────────────
let isAnnual = false
const pricingToggle  = document.getElementById('pricing-toggle')
const toggleThumb    = document.getElementById('toggle-thumb')
const labelMonthly   = document.getElementById('label-monthly')
const labelAnnual    = document.getElementById('label-annual')

function updatePricing() {
  Object.entries(plans).forEach(([key, plan]) => {
    const priceEl  = document.getElementById(`price-${key}`)
    const periodEl = document.getElementById(`period-${key}`)
    if (priceEl)  priceEl.textContent  = isAnnual ? plan.annual  : plan.monthly
    if (periodEl) periodEl.textContent = isAnnual ? '/yr'        : '/mo'
  })

  if (toggleThumb) toggleThumb.style.transform = isAnnual ? 'translateX(20px)' : ''

  labelMonthly?.classList.toggle('text-ink',      !isAnnual)
  labelMonthly?.classList.toggle('text-ink-mute',  isAnnual)
  labelAnnual?.classList.toggle('text-ink',         isAnnual)
  labelAnnual?.classList.toggle('text-ink-mute',   !isAnnual)
}

pricingToggle?.addEventListener('click', () => {
  isAnnual = !isAnnual
  updatePricing()
})

// ── FAQ accordion ─────────────────────────────────────────────────────────────
document.querySelectorAll('.faq-item').forEach(item => {
  const btn    = item.querySelector('.faq-question')
  const answer = item.querySelector('.faq-answer')
  const icon   = item.querySelector('.faq-icon')

  btn?.addEventListener('click', () => {
    const opening = answer.classList.contains('hidden')

    // Collapse all
    document.querySelectorAll('.faq-item').forEach(other => {
      other.querySelector('.faq-answer')?.classList.add('hidden')
      const oi = other.querySelector('.faq-icon')
      if (oi) oi.textContent = '+'
    })

    if (opening) {
      answer.classList.remove('hidden')
      if (icon) icon.textContent = '−'
    }
  })
})
