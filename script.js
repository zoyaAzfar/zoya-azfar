/* =====================================================================
   EDIT ME — contact + the links on each work card live here.
   ===================================================================== */
const CONTACT = {
  email: 'zoe.azfar@gmail.com',                      // <- your email
  linkedin: 'https://www.linkedin.com/in/zoya-azfar-1a8365350/',    // <- your LinkedIn URL
};

/* Links shown on each work card. Add as many as you like per project.
   Leave url as '' and it shows as a greyed-out "soon" pill until you fill it in. */
const PROJECT_LINKS = {
  'TPI Research Internship':          [{ label: 'View',          url: 'https://drive.google.com/file/d/1Sy9ztjgKNrz8kpEQbdYvoSjGGvXwO0E6/view?usp=sharing' }],
  'Humor Translation Research Paper': [{ label: 'View',   url: 'https://drive.google.com/file/d/1NFph8tbu3qagu1QzFBov8iluNZY44jqR/view?usp=sharing' }],
  'Hospital Nama':                    [{ label: 'View', url: 'https://hospitalnama.pk' }],
  'Zuban Daraz':                      [{ label: 'View',      url: 'https://zubandaraz.org' }],
  'MILAP':                            [{ label: 'View',         url: 'https://milap.org.pk' }],
  'Accent=Worth?':                    [{ label: 'View',         url: 'https://accentequalsworth.org.pk' }],
     'The Master\'s Tools':                    [{ label: 'Game',         url: 'https://zoyaazfar.itch.io/the-masters-tools' }]
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

/* ---------- project data ---------- */
const projects = [
  {
    title: 'TPI Research Internship',
    date: 'Winter 2025',
    word: 'تحقیق',
    details: [
      'Conducted comparative study of public and private healthcare in Pakistan.',
      'Built an original dataset by collecting and processing 14K reviews of healthcare institutions.',
      'Used Python to compare 3 NLP models and identify complaint patterns across cities and healthcare sectors, with thorough statistical analysis of findings.',
      'Conducted tangential analysis of frequency correlation with star ratings and 3 sentiment analysis models to verify validity of dataset.',
      'Presented a poster at the 3rd International SutCon Conference 2026.',
    ],
    tags: ['NLP', 'Policy'],
    bg: '#2B3FA8', fg: '#FFFDF6', shape: 'flower', shapeFill: '#F6B3C8', wordColor: '#1A1A16',
  },
  {
    title: 'Humor Translation Research Paper',
    date: 'Spring 2026',
    word: 'مزاق',
    details: [
      'A four-month research project under a PhD mentor from Cornell, examining how six large language models translate humour between English and Urdu.',
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
    details: [
      'Created an online platform with an integrated billingual AI chatbot to display information about 45 hospitals in Lahore.',
      'Analyzed over 5000 reviews to create themes of complaints, and calculated city-wide averages for complaint frequency.',
      'Users can compare up to hospitals, get live drive times, and filter hospitals by desired requirements.',
      'Compiled a novel dataset with 45+ datapoints on hospital characteristics in Pakistan through primary and secondary research.',
         'Endorsed by the PSIM.'
    ],
    tags: ['NLP', 'Policy'],
    bg: '#FF6B3D', fg: '#1A1A16', shape: 'squircle', shapeFill: '#FFFDF6',
  },
  {
    title: 'Zuban Daraz',
    date: 'Summer 2026',
    word: 'زبان دراز',
    details: [
      'Created an online, open-source dictionary to explore the phenomenology of gendered language in South Asia.',
      'Collected over 500 words and proverbs categorized into themes of sexism, along with 45+ accompanying stories and words in 15 languages.',
      'Conducted a corpus analysis of 100K newspapers to analyze for linguistic sexism.',
      'Launched at Kitaab Ghar. Featured in the Daily Times',
    ],
    tags: ['Linguistics', 'NLP'],
    bg: '#F7E01B', fg: '#1A1A16', shape: 'wavy', shapeFill: '#2B3FA8', wordColor: '#FFFDF6',
  },
  {
    title: 'MILAP',
    date: 'Summer 2024',
    word: 'تعلیم',
    details: [
      'Interned at the Lahore Autism center for 2 months, teaching 20+ children 1-on-1 in speech, sensory and physical therapy. Organized weekend art session.',
      'Inspired by that work, mapped out 68 public and private special education facilities in Lahore with 20 datapoints with customized best-fit rankings based on specifications.',
      'Conducted analysis of disability service coverage based on census data, QQIS mapping and disability service distribution.',
      'Illstrated an 18 pg billingual book teaching children how to sign 12 basics words in Pakistan Sign Language, published with TWS Publications. Stocked in 10 libraries.',
    ],
    tags: ['Community', 'Procreate'],
    bg: '#7A8A22', fg: '#FFFDF6', shape: 'sun', shapeFill: '#FF6B3D',
  },
  {
    title: 'Accent=Worth?',
    date: 'Summer 2026',
    word: 'لہجہ',
    details: [
      'Collected 50 primary interviews from different areas of Lahore to gather accent sample recordings.',
      'Co-wrote Python scripts using Parselmouth to extract accent features from the recordings, grounded in linguistics research.',
      'Surveyed 50 people for primary data on the perceived employability of the sample recordings, and analyzed how accent correlates with the findings.',
    ],
    tags: ['Linguistics', 'NLP'],
    bg: '#D8283C', fg: '#FFFDF6', shape: 'flower', shapeFill: '#F7E01B',
  },
    {
    title: 'The Master\'s Tools',
    date: 'Summer 2023',
    word: 'کھیل',
    details: [
      'Developed game on working woman in Pakistan to show systemic gender bias in workplace and at home.',
      'Designed to be deliberately difficult to highlight the impossibility of managing every task in a day. Designed sprites, maps, wrote dialogue, wrote code, playtested and deployed myself.',
      '200+ players in total. Adopted into Master\'s cirriculum for course MBA6060: Manging Workplace Diversity',
    ],
    tags: ['Linguistics', 'Community'],
    bg: '#2B3FA8', fg: '#FFFDF6', shape: 'flower', shapeFill: '#F6B3C8', wordColor: '#1A1A16',
  }
];

const pad = (n) => String(n + 1).padStart(2, '0');
const el = (id) => document.getElementById(id);

/* a link pill: real link if it has a url, greyed-out "soon" pill if not */
const pill = (l) => l.url
  ? `<a class="pill" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`
  : `<span class="pill pill--soon">${l.label} · soon</span>`;

/* ---------- live Lahore clock ---------- */
function tick() {
  const now = new Date();
  const tz = { timeZone: 'Asia/Karachi' };
  el('clock-date').textContent = new Intl.DateTimeFormat('en-GB', { ...tz, day: '2-digit', month: 'short' }).format(now).toUpperCase();
  el('clock-time').textContent = new Intl.DateTimeFormat('en-GB', { ...tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(now);
}
tick();
setInterval(tick, 1000);

/* ---------- work cards (details + links right on the card) ---------- */
const track = el('track');
projects.forEach((p, i) => {
  const links = PROJECT_LINKS[p.title] || [];
  const card = document.createElement('article');
  card.className = 'card';
  card.id = `p${i}`;
  card.style.setProperty('--bg', p.bg);
  card.style.setProperty('--fg', p.fg);
  card.style.setProperty('--wc', p.wordColor || '#1A1A16');
  card.innerHTML = `
    <div class="card__art">
      <span class="bubble">${p.date}</span>
      <div class="shape">${shapeSVG(p.shape, p.shapeFill)}<span class="shape__word ur">${p.word}</span></div>
    </div>
    <div class="card__body">
      <span class="card__meta">${pad(i)}</span>
      <h3>${p.title}</h3>
      <ul class="card__list">${p.details.map((d) => `<li>${d}</li>`).join('')}</ul>
      <div class="card__foot">
        <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join('')}</div>
        ${links.length ? `<div class="pills">${links.map(pill).join('')}</div>` : ''}
      </div>
    </div>`;
  track.appendChild(card);
});

/* ---------- carousel arrows ---------- */
const step = () => Math.min(track.clientWidth * 0.8, 360);
el('prev').addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
el('next').addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

/* ---------- index list in the intro: jump to that card ---------- */
el('index').innerHTML = projects
  .map((p, i) => `<li><button type="button" data-i="${i}"><span>${p.title}</span><span>${p.date}</span></button></li>`)
  .join('');
el('index').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-i]');
  if (!b) return;
  el('work').scrollIntoView({ behavior: 'smooth' });
  const card = el(`p${b.dataset.i}`);
  track.scrollTo({ left: card.offsetLeft - track.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft), behavior: 'smooth' });
});

/* ---------- contact ---------- */
const mail = el('contact-email');
mail.href = `mailto:${CONTACT.email}`;
mail.textContent = CONTACT.email;
el('contact-linkedin').href = CONTACT.linkedin;

el('year').textContent = new Date().getFullYear();
