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

document.querySelectorAll('.spark').forEach((p) => p.setAttribute('d', burst(8, 46, 12, 50, 50)));

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
    bg: '#2B3FA8', fg: '#FFFDF6', shape: 'flower', shapeFill: '#F6B3C8',
  },
  {
    title: 'Humor Translation Research Paper',
    date: 'Spring 2026',
    word: 'مزاح',
    blurb: 'How do six LLMs translate humour between English and Urdu?',
    details: [
      'A four-month research project under a mentor from Cornell, examining how six large language models translate humour between English and Urdu.',
      'Applied quantitative and qualitative evaluation methods, including interviews, to compare the models’ performance in translating short-form humour across languages.',
      'Under review at NHSJS.',
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
    ],
    tags: ['NLP', 'Policy'],
    link: 'https://hospitalnama.pk',
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
      'Launched at Kitaab Ghar.',
    ],
    tags: ['Linguistics', 'NLP'],
    bg: '#F7E01B', fg: '#1A1A16', shape: 'wavy', shapeFill: '#2B3FA8', wordColor: '#FFFDF6',
  },
  {
    title: 'Sehat Haq',
    date: 'Summer 2024',
    word: 'صحت',
    blurb: 'Special education mapping, 1-on-1 teaching, and a Pakistan Sign Language book.',
    details: [
      'Interned at the Lahore Autism center for 2 months, teaching 20+ children 1-on-1.',
      'Inspired by that work, mapped out all public and private special education facilities in Lahore.',
      'Illustrating a book teaching children how to fingerspell in Pakistan Sign Language, to be launched with Alif Laila Book Bus Society.',
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

const track = document.getElementById('track');
const pad = (n) => String(n + 1).padStart(2, '0');

projects.forEach((p, i) => {
  const card = document.createElement('button');
  card.className = 'card';
  card.type = 'button';
  card.style.setProperty('--bg', p.bg);
  card.style.setProperty('--fg', p.fg);
  card.style.setProperty('--wc', p.wordColor || '#1A1A16');
  card.setAttribute('aria-label', `${p.title} — open details`);
  card.innerHTML = `
    <div class="card__top"><span class="pill">${p.date}</span><span class="num">${pad(i)}</span></div>
    <div class="shape">${shapeSVG(p.shape, p.shapeFill)}<span class="shape__word ur">${p.word}</span></div>
    <h3>${p.title}</h3>
    <p>${p.blurb}</p>
    <div class="card__foot">
      <span class="tags">${p.tags.map((t) => `<span>${t}</span>`).join('')}</span>
      <span class="more">details +</span>
    </div>`;
  card.addEventListener('click', () => openModal(i));
  track.appendChild(card);
});

const step = () => Math.min(track.clientWidth * 0.8, 380);
document.getElementById('prev').addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
document.getElementById('next').addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

const modal = document.getElementById('modal');
let current = 0;

function fillModal(i) {
  const p = projects[i];
  current = i;
  modal.style.setProperty('--bg', p.bg);
  modal.style.setProperty('--fg', p.fg);
  modal.style.setProperty('--wc', p.wordColor || '#1A1A16');
  document.getElementById('m-art').innerHTML =
    `<div class="shape">${shapeSVG(p.shape, p.shapeFill)}<span class="shape__word ur">${p.word}</span></div>`;
  document.getElementById('m-date').textContent = `${pad(i)} — ${p.date}`;
  document.getElementById('m-title').textContent = p.title;
  document.getElementById('m-list').innerHTML = p.details.map((d) => `<li>${d}</li>`).join('');
  document.getElementById('m-tags').innerHTML = p.tags.map((t) => `<span>${t}</span>`).join('');
  const link = document.getElementById('m-link');
  if (p.link) { link.href = p.link; link.hidden = false; } else { link.hidden = true; }
  document.getElementById('m-count').textContent = `${i + 1} / ${projects.length}`;
}

function openModal(i) {
  fillModal(i);
  if (!modal.open) modal.showModal();
  document.body.classList.add('no-scroll');
}
const go = (d) => fillModal((current + d + projects.length) % projects.length);

document.getElementById('m-close').addEventListener('click', () => modal.close());
document.getElementById('m-prev').addEventListener('click', () => go(-1));
document.getElementById('m-next').addEventListener('click', () => go(1));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); }); // click backdrop
modal.addEventListener('close', () => document.body.classList.remove('no-scroll'));
modal.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') go(-1);
  if (e.key === 'ArrowRight') go(1);
});

document.getElementById('year').textContent = new Date().getFullYear();
