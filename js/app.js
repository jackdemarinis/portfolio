/*
 * app.js — the portfolio's page behaviour.
 *
 * Three independent pieces:
 *   1. the hero typewriter tagline
 *   2. the scroll-reveal class toggle
 *   3. positioning the experience timeline bars against a real date scale
 *
 * Loaded as <script type="module">, so it runs deferred, after the document
 * has been parsed and before DOMContentLoaded fires.
 */

const TAGLINE =
  'Computer engineer building generative AI systems, full-stack prototypes, and robotics software.';
const TYPE_DELAY_MS = 75;
const TYPE_START_DELAY_MS = 1000;
const REVEAL_OFFSET_PX = 150;
const TIMELINE_ANCHOR = new Date(2022, 8, 1);

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('typewriter');
  if (!target) return;

  let index = 0;

  function typeWriter() {
    if (index < TAGLINE.length) {
      target.textContent += TAGLINE.charAt(index);
      index++;
      setTimeout(typeWriter, TYPE_DELAY_MS);
    } else {
      target.classList.add('typing-done');
    }
  }

  setTimeout(typeWriter, TYPE_START_DELAY_MS);
});

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  for (const element of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - REVEAL_OFFSET_PX) {
      element.classList.add('reveal-visible');
    }
  }
}

window.addEventListener('scroll', reveal);
reveal();

/*
 * Each .timeline-bar carries data-start / data-end dates; each scale label
 * carries a data-date. Both are converted to a percentage along the span from
 * the anchor date to now, and handed to CSS as --start / --span / --marker.
 */
(function renderTimeline() {
  const anchor = TIMELINE_ANCHOR.getTime();
  const now = Date.now();
  const total = now - anchor;
  const parse = (value) => (value === 'present' ? now : new Date(value + 'T00:00:00').getTime());
  const pct = (time) => ((time - anchor) / total) * 100;

  document.querySelectorAll('.timeline-bar[data-start]').forEach((bar) => {
    const start = parse(bar.dataset.start);
    const end = parse(bar.dataset.end || 'present');
    bar.style.setProperty('--start', pct(start).toFixed(2) + '%');
    bar.style.setProperty('--span', (pct(end) - pct(start)).toFixed(2) + '%');
  });

  document.querySelectorAll('.timeline-scale span[data-date]').forEach((span) => {
    const time = parse(span.dataset.date);
    span.style.setProperty('--marker', pct(time).toFixed(2) + '%');
  });
})();
