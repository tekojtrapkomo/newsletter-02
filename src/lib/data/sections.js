/**
 * Single source of truth for the issue's structure. The nav, the "In this
 * issue" contents and every section opener render from this list, so the three
 * can never disagree. `n` is null for back matter (unnumbered, still listed).
 */
export const sections = [
  { id: 'cop17', n: '01', label: { en: 'COP17', mn: 'COP17' }, title: { en: 'COP17', mn: 'COP17' } },
  { id: 'governance', n: '02', label: { en: 'Governance', mn: 'Засаглал' }, title: { en: 'Governance', mn: 'Засаглал' } },
  { id: 'grants', n: '03', label: { en: 'Grants', mn: 'Грант' }, title: { en: 'Grants', mn: 'Грант' } },
  { id: 'programmes', n: '04', label: { en: 'Programmes', mn: 'Хөтөлбөрүүд' }, title: { en: 'Programmes', mn: 'Хөтөлбөрүүд' } },
  { id: 'international', n: '05', label: { en: 'Institutional & International', mn: 'Байгууллага ба олон улс' }, title: { en: 'Institutional & International', mn: 'Байгууллага ба олон улс' } },
  { id: 'communications', n: '06', label: { en: 'Communications', mn: 'Мэдээлэл, сурталчилгаа' }, title: { en: 'Communications', mn: 'Мэдээлэл, сурталчилгаа' } },
  { id: 'signed', n: null, label: { en: 'Partnerships Signed', mn: 'Байгуулсан санамж бичиг' }, title: { en: 'Partnerships Signed', mn: 'Байгуулсан санамж бичиг' } },
  { id: 'voices', n: null, label: { en: 'Voices', mn: 'Дуу хоолой' }, title: { en: 'Voices', mn: 'Дуу хоолой' } },
  { id: 'numbers', n: null, label: { en: 'By the Numbers', mn: 'Тоон үзүүлэлт' }, title: { en: 'By the Numbers', mn: 'Тоон үзүүлэлт' } },
  { id: 'annual-report', n: null, label: { en: 'Annual Report 2025', mn: '2025 оны жилийн тайлан' }, title: { en: 'Annual Report 2025', mn: '2025 оны жилийн тайлан' } },
  { id: 'opportunities', n: null, label: { en: 'Opportunities', mn: 'Зарлал' }, title: { en: 'Opportunities', mn: 'Зарлал' } },
  { id: 'memoriam', n: null, label: { en: 'In Memoriam', mn: 'Дурсамж' }, title: { en: 'In Memoriam', mn: 'Дурсамж' } }
];

export const byId = Object.fromEntries(sections.map((s) => [s.id, s]));

/** "01 · COP17", or the bare label for back matter. */
export const eyebrow = (id, lang) => {
  const s = byId[id];
  return s.n ? `${s.n} · ${s.label[lang]}` : s.label[lang];
};

/** Category tag for an item inside a section: "GOVERNANCE · BOARD". */
export const tagOf = (id, lang, sub) => (sub ? `${byId[id].label[lang]} · ${sub}` : byId[id].label[lang]);
