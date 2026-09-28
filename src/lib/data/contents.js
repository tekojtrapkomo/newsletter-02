/**
 * The issue index. Sits directly after the cover so a reader can see the whole
 * issue before committing to any of it — and so the cover's gradient and the
 * first section opener are not adjacent.
 *
 * Sections follow the issue plan. Only built sections carry an anchor; the rest
 * are listed without one rather than linking nowhere.
 *
 * The right-hand column is one thing only — a date or a date range. Status
 * statements ("led by MECC", "launched 22 May") belong inside the item, not in
 * the index, where a column that mixes kinds stops being scannable.
 */
export const contents = [
  {
    id: 'cop17',
    href: null,
    kind: { mn: 'Онцлох сэдэв', en: 'Lead feature' },
    title: { mn: 'НҮБ-ын Цөлжилттэй тэмцэх конвенцын COP17', en: 'UNCCD COP17' },
    meta: { mn: '8 сарын 17-28', en: '17-28 August' }
  },
  {
    id: 'pa-law',
    href: null,
    kind: { mn: 'Нийтлэл', en: 'Feature' },
    title: { mn: 'ТХГН-ийн тухай хуулийн шинэчлэл', en: 'Protected Area law reform' },
    meta: { mn: '5 сарын 6-27', en: '6-27 May' }
  },
  {
    id: 'accelerator',
    href: null,
    kind: { mn: 'Нийтлэл', en: 'Feature' },
    title: { mn: '“ТХГН-ийн хурдасгуур” хөтөлбөр', en: 'PA Accelerator Program' },
    meta: { mn: '5 сарын 22', en: '22 May' }
  },
  {
    id: 'roadmap',
    href: null,
    kind: { mn: 'Нийтлэл', en: 'Feature' },
    title: { mn: 'ТХГН-ийн замын зургийн хэрэгжилт', en: 'Protected Areas Roadmap' },
    meta: { mn: '4 сарын 1-10', en: '1-10 April' }
  },
  {
    id: 'annual-report',
    href: null,
    kind: { mn: 'Нийтлэл', en: 'Feature' },
    title: { mn: '2025 оны жилийн тайлан', en: 'Annual Report 2025' },
    meta: { mn: '2025', en: '2025' }
  },
  {
    id: 'record',
    href: '#record',
    kind: { mn: 'Товчоон', en: 'The Record' },
    title: { mn: 'Долоон богино мэдээ', en: 'Seven short entries' },
    meta: { mn: '4-8 сар', en: 'April-August' }
  }
];

export const contentsHeading = {
  mn: 'Энэ дугаарт',
  en: 'In this issue'
};
