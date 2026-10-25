/* =====================================================================
   EDIT ME — contact + links live here so you only change them once.
   (Placeholders below: swap in your real email, LinkedIn and links.)
   ===================================================================== */
const CONTACT = {
  email: 'zoe.azfar@gmail.com',                    
  linkedin: 'https://www.linkedin.com/in/zoya-azfar-1a8365350/',     
};

/* Links for each work card. Add as many as you like per project.
   Leave url as '' and it shows as a greyed-out "soon" pill until you fill it in. */
const PROJECT_LINKS = {
  'TPI Research Internship':          [{ label: 'Poster',          url: '' }],
  'Humor Translation Research Paper': [{ label: 'Paper (NHSJS)',   url: '' }],
  'Hospital Nama':                    [{ label: 'hospitalnama.pk', url: 'https://hospitalnama.pk' }],
  'Zuban Daraz':                      [{ label: 'Dictionary',      url: 'https://zubandaraz.org' }],
  'MILAP':                        [{ label: 'Project',         url: 'https://milap.org.pk' }],
  'Accent=Worth?':                    [{ label: 'Project',         url: 'https://accentequalsworth.org' }],
};

/* ---------- shape helpers (all drawn in a 120x120 box) ---------- */
const INK = '#1A1A16';

function burst(n, r1, r2, cx = 60, cy = 60) {
  let d = '';
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 ? r2 : r1;
    const a = (i * Math.PI) / n - Math.PI / 2;
    d += (i ? 'L' : 'M') + (cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1);
  }
  return d + 'Z';
}

function shapeSVG(type, fill) {
  const s = `stroke="${INK}" stroke-width="3" stroke-linejoin="round"`;
  switch (type) {
    case 'flower': {
      let c = '';
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4;
        c += `<circle cx="${60 + 33 * Math.cos(a)}" cy="${60 + 33 * Math.sin(a)}" r="19"/>`;
      }
      c += '<circle cx="60" cy="60" r="30"/>';
      return `<svg viewBox="0 0 120 120"><g fill="${INK}" stroke="${INK}" stroke-width="6">${c}</g><g fill="${fill}">${c}</g></svg>`;
    }
    case 'burst':
      return `<svg viewBox="0 0 120 120"><path d="${burst(14, 56, 36)}" fill="${fill}" ${s}/></svg>`;
    case 'wavy':
      return `<svg viewBox="0 0 120 120"><path d="${burst(16, 56, 49)}" fill="${fill}" ${s} stroke-width="5"/></svg>`;
    case 'sun':
      return `<svg viewBox="0 0 120 120"><path d="${burst(22, 57, 43)}" fill="${fill}" ${s}/></svg>`;
    default: // squircle
      return `<svg viewBox="0 0 120 120"><rect x="8" y="8" width="104" height="104" rx="40" fill="${fill}" ${s}/></svg>`;
  }
}

/* sparkle stickers (pink star, red outline) */
document.querySelectorAll('.spark').forEach((p) => p.setAttribute('d', burst(8, 46, 12, 50, 50)));

/* ---------- project data ---------- */
const projects = [
  {
    title: 'TPI Research Internship',
    date: 'Winter 2025',
    word: 'تحقیق',
    blurb: 'Comparing public & private healthcare in Pakistan through patient reviews.',
    details: [
      'A comparative study of public and private healthcare in Pakistan.',
      'Built an original dataset by collecting and processing reviews of healthcare institutions.',
      'Used Python to compare 3 NLP models and identify complaint patterns across cities and healthcare sectors, with thorough statistical analysis of findings.',
      'Presented a poster at the 3rd International SutCon Conference 2026.',
    ],
    tags: ['NLP', 'Policy'],
    bg: '#2B3FA8', fg: '#FFFDF6', shape: 'flower', shapeFill: '#F6B3C8', wordColor: '#1A1A16',
  },
  {
    title: 'Humor Translation Research Paper',
    date: 'Spring 2026',
    word: 'مزاح',
    blurb: 'How do six LLMs translate humour between English and Urdu?',
    details: [
      'A four-month research project under a mentor from Cornell, examining how six large language models translate humour between English and Urdu.',
      'Applied quantitative and qualitative evaluation methods, including interviews, to compare the models’ performance in translating short-form humour across languages.',
      'Revise & resubmit at NHSJS.',
      'Won the STEM CREST Gold Award.',
    ],
    tags: ['Linguistics', 'LLMs'],
    bg: '#F6B3C8', fg: '#1A1A16', shape: 'burst', shapeFill: '#F7E01B',
  },
  {
    title: 'Hospital Nama',
    date: 'Spring 2026',
    word: 'ہسپتال',
    blurb: 'An online platform and AI chatbot for 45 hospitals in Lahore.',
    details: [
      'Created an online platform with an integrated AI chatbot to display information about 45 hospitals in Lahore.',
      'Analyzed over 5000 reviews to create themes of complaints, and calculated city-wide averages for complaint frequency.',
      'Compiled a novel dataset on hospital characteristics in Pakistan through primary and secondary research.',
       'Endorsed by PSIM'
    ],
    tags: ['NLP', 'Policy'],
    bg: '#FF6B3D', fg: '#1A1A16', shape: 'squircle', shapeFill: '#FFFDF6',
  },
  {
    title: 'Zuban Daraz',
    date: 'Summer 2026',
    word: 'زبان دراز',
    blurb: 'An open-source dictionary & ontology of gendered language in South Asia.',
    details: [
      'Created an online, open-source dictionary and ontology to explore the phenomenology of gendered language in South Asia.',
      'Collected over 500 words and proverbs, along with accompanying stories in 10 languages.',
      'Conducted a corpus analysis of 1M newspapers to analyze for linguistic sexism.',
      'Launched at Kitaab Ghar, featured on the Daily Times.',
    ],
    tags: ['Linguistics', 'NLP'],
    bg: '#F7E01B', fg: '#1A1A16', shape: 'wavy', shapeFill: '#2B3FA8', wordColor: '#FFFDF6',
  },
  {
    title: 'MILAP',
    date: 'Summer 2024',
    word: 'صحت',
    blurb: 'Special education mapping, 1-on-1 teaching, and a Pakistan Sign Language book.',
    details: [
      'Interned at the Lahore Autism center for 2 months, teaching 20+ children 1-on-1.',
      'Inspired by that work, mapped out 68 public and private special education facilities in Lahore.',
      'Illustrating a book teaching children how to sign 12 basics words in Pakistan Sign Language, published with TWS Books.',
    ],
    tags: ['QGIS', 'Procreate'],
    bg: '#7A8A22', fg: '#FFFDF6', shape: 'sun', shapeFill: '#FF6B3D',
  },
  {
    title: 'Accent=Worth?',
    date: 'Summer 2026',
    word: 'لہجہ',
    blurb: 'Does the way you speak change how employable you sound?',
    details: [
      'Collected over 25 primary interviews from different areas of Lahore to gather accent sample recordings.',
      'Co-wrote Python scripts using Parselmouth to extract accent features from the recordings, grounded in linguistics research.',
      'Surveyed 50 people for primary data on the perceived employability of the sample recordings, and analyzed how accent correlates with the findings.',
    ],
    tags: ['Linguistics', 'NLP'],
    bg: '#D8283C', fg: '#FFFDF6', shape: 'flower', shapeFill: '#F7E01B',
  },
];

projects.forEach((p) => { p.links = PROJECT_LINKS[p.title] || []; });

const pad = (n) => String(n + 1).padStart(2, '0');
const el = (id) => document.getElementById(id);

/* a link pill: real link if it has a url, greyed-out "soon" pill if not */
const pill = (l) => l.url
  ? `<a class="pill" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`
  : `<span class="pill pill--soon">${l.label} · soon</span>`;

/* ---------- live Lahore clock (like the "TODAY" block) ---------- */
function tick() {
  const now = new Date();
  const tz = { timeZone: 'Asia/Karachi' };
  const date = new Intl.DateTimeFormat('en-GB', { ...tz, day: '2-digit', month: 'short' }).format(now).toUpperCase();
  const time = new Intl.DateTimeFormat('en-GB', { ...tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(now);
  el('clock-date').textContent = date;
  el('clock-time').textContent = time;
}
tick();
setInterval(tick, 1000);

/* ---------- index list in the intro ---------- */
el('index').innerHTML = projects
  .map((p, i) => `<li><button type="button" data-i="${i}"><span>${p.title}</span><span>${p.date}</span></button></li>`)
  .join('');
el('index').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-i]');
  if (b) openModal(+b.dataset.i);
});

/* ---------- work cards (big) ---------- */
const track = el('track');
projects.forEach((p, i) => {
  const card = document.createElement('button');
  card.className = 'card';
  card.type = 'button';
  card.style.setProperty('--bg', p.bg);
  card.style.setProperty('--fg', p.fg);
  card.style.setProperty('--wc', p.wordColor || '#1A1A16');
  card.setAttribute('aria-label', `${p.title} — open details`);
  card.innerHTML = `
    <div class="card__art">
      <span class="bubble bubble--date">${p.date}</span>
      <div class="shape">${shapeSVG(p.shape, p.shapeFill)}<span class="shape__word ur">${p.word}</span></div>
      <span class="bubble bubble--tag2">${p.tags[0]}</span>
      <span class="bubble bubble--tag">${p.tags[1] || 'details +'}</span>
    </div>
    <div class="card__body">
      <h3>${p.title}</h3>
      <span class="card__meta">${pad(i)} — ${p.date} · details +</span>
      <p class="card__blurb">${p.blurb}</p>
    </div>`;
  card.addEventListener('click', () => openModal(i));
  track.appendChild(card);
});

/* ---------- carousel arrows ---------- */
const step = () => Math.min(track.clientWidth * 0.8, 660);
el('prev').addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
el('next').addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

/* ---------- modal ---------- */
const modal = el('modal');
let current = 0;

function fillModal(i) {
  const p = projects[i];
  current = i;
  modal.style.setProperty('--bg', p.bg);
  modal.style.setProperty('--fg', p.fg);
  modal.style.setProperty('--wc', p.wordColor || '#1A1A16');
  el('m-art').innerHTML = `<div class="shape">${shapeSVG(p.shape, p.shapeFill)}<span class="shape__word ur">${p.word}</span></div>`;
  el('m-date').textContent = `${pad(i)} — ${p.date}`;
  el('m-title').textContent = p.title;
  el('m-list').innerHTML = p.details.map((d) => `<li>${d}</li>`).join('');
  el('m-tags').innerHTML = p.tags.map((t) => `<span>${t}</span>`).join('');
  el('m-links').innerHTML = p.links.map(pill).join('');
  el('m-links').hidden = !p.links.length;
  el('m-count').textContent = `${i + 1} / ${projects.length}`;
}

function openModal(i) {
  fillModal(i);
  if (!modal.open) modal.showModal();
  document.body.classList.add('no-scroll');
}
const go = (d) => fillModal((current + d + projects.length) % projects.length);

el('m-close').addEventListener('click', () => modal.close());
el('m-prev').addEventListener('click', () => go(-1));
el('m-next').addEventListener('click', () => go(1));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
modal.addEventListener('close', () => document.body.classList.remove('no-scroll'));
modal.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') go(-1);
  if (e.key === 'ArrowRight') go(1);
});

/* ---------- links + contact ---------- */
el('linklist').innerHTML = projects.map((p, i) => `
  <li class="linkrow">
    <span class="num">${pad(i)}</span>
    <button type="button" class="t" data-i="${i}">
      <span class="t__title">${p.title}</span>
      <span class="mono">${p.blurb}</span>
    </button>
    <span class="pills">${p.links.map(pill).join('')}</span>
  </li>`).join('');
el('linklist').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-i]');
  if (b) openModal(+b.dataset.i);
});

const mail = el('contact-email');
mail.href = `mailto:${CONTACT.email}`;
mail.textContent = CONTACT.email;
el('contact-linkedin').href = CONTACT.linkedin;

el('year').textContent = new Date().getFullYear();
