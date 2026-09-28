/**
 * Товчоон — The Record. Issue No. 02.
 *
 * Every entry is 45–60 words, two to three sentences, one small image at the
 * same size in the same position. No entry gets more room for feeling more
 * important — the rhythm is the design, and a record where one item swells is
 * a record that has started editorialising.
 *
 * Chronological. Three entries have no source in the Facebook export and carry
 * a visible TODO(content) rather than invented detail.
 *
 * House rule applied throughout: no entry's final sentence names the
 * foundation. Read strictly the rule would bar self-reference from these
 * one-paragraph items entirely; I have taken it to mean an item must not close
 * on itself. Say if you meant the stricter reading.
 */
export const record = [
  {
    id: 'gef-samarkand',
    label: { mn: 'ОЛОН УЛСЫН ТАВЦАН', en: 'INTERNATIONAL' },
    date: '2026.06.11',
    image: '/record/gef.jpg',
    alt: {
      mn: 'GEF-ийн 8 дугаар чуулганы дээд түвшний хэлэлцүүлэгт оролцогчид',
      en: 'Panellists at the 8th GEF Assembly'
    },
    title: { mn: 'GEF-ийн 8 дугаар чуулган', en: '8th GEF Assembly' },
    body: {
      mn: 'Даян дэлхийн байгаль орчны сангийн 8 дугаар чуулганы дээд түвшний хэлэлцүүлэгт Гүйцэтгэх захирал Э.Номиндарь IUCN, FUNBIO, Enduring Earth, SGP зэрэг байгууллагын төлөөлөлтэй хамт оролцлоо. “Өнө мөнхийн Монгол” БХБС-ийн байнгын санхүүжилтийн загвар, түүнчлэн холимог санхүүжилт нь тусгай хамгаалалттай газрын хамгаалалтын захиргаадын төсвийг нэг удаагийн грантын хугацаанаас цааш хэрхэн авч явахыг тайлбарлав.',
      en: 'At the 8th Global Environment Facility Assembly, chief executive E. Nomindari joined a high-level session with IUCN, FUNBIO, Enduring Earth and the Small Grants Programme. She set out the Өнө мөнхийн Монгол permanence model, and how blended finance carries protected area budgets past the life of any single grant.'
    }
  },
  {
    id: 'llf-visit',
    label: { mn: 'ТҮНШЛЭЛ', en: 'PARTNERSHIP' },
    date: '2026.06.18',
    image: '/record/llf.jpg',
    alt: {
      mn: 'Legacy Landscapes Fund-ийн төлөөлөгчид Улаанбаатар дахь оффист',
      en: 'The Legacy Landscapes Fund delegation in Ulaanbaatar'
    },
    title: { mn: 'Legacy Landscapes Fund-ийн айлчлал', en: 'Legacy Landscapes Fund visit' },
    body: {
      mn: 'Тусгай хамгаалалттай газар нутгийг 15 ба түүнээс дээш жилийн хугацаанд санхүүжүүлдэг, Германы дэмжлэгтэй Өвлөгдөн үлдэх газар нутаг сангийн Удирдах зөвлөлийн дарга болон төлөөлөгчид зургадугаар сарын 18-нд Улаанбаатарт айлчиллаа. Дэ Нэйче Консерванси, WWF-ийн Монгол дахь газартай хамтран хэрэгжүүлж буй Онон-Балжийн хөтөлбөрийг “Өнө мөнхийн Монгол”-той уялдуулах нь хэлэлцүүлгийн гол сэдэв байлаа.',
      en: 'The chair of the Legacy Landscapes Fund board, a German-backed instrument that finances protected areas on fifteen-year horizons, visited Ulaanbaatar on 18 June with a delegation. Discussion centred on aligning the Onon-Balj programme, run with The Nature Conservancy and WWF Mongolia, with Өнө мөнхийн Монгол, and on where the two instruments overlap.'
    }
  },
  {
    id: 'pfp-tcc',
    label: { mn: 'ЗАСАГЛАЛ', en: 'GOVERNANCE' },
    date: '2026.07.01',
    image: '/record/pfp-tcc.jpg',
    alt: {
      mn: 'Техникийн зохицуулах хорооны зургадугаар хурал',
      en: 'The Technical Coordination Committee in session'
    },
    title: { mn: 'Техникийн зохицуулах хорооны VI хурал', en: 'Sixth Technical Coordination Committee' },
    body: {
      mn: '“Өнө мөнхийн Монгол” БХБС-ийн Техникийн зохицуулах хороо зургаа дахь удаагаа хуралдаж, 2026 оны эхний хагас жилийн хэрэгжилтийг Монгол Улсын Засгийн газар, Дэ Нэйче Консерванси байгууллагын төлөөлөлтэй хамт хянан хэлэлцлээ. Хөтөлбөрийн хүрээнд хөгжүүлж буй мэдээллийн системүүдийн уялдаа, мөн зэрэгцээ хэрэгжиж буй бусад санаачилгуудтай хамтран ажиллах сул тал хоёрыг тусгайлан авч үзэв.',
      en: 'The Technical Coordination Committee of Өнө мөнхийн Монгол met for the sixth time, reviewing implementation for the first half of 2026 with the Government of Mongolia and The Nature Conservancy. Members examined how the programme’s information systems fit together, and where coordination with parallel initiatives remains thinnest.'
    }
  },
  {
    id: 'cfa',
    label: { mn: 'ГИШҮҮНЧЛЭЛ', en: 'MEMBERSHIP' },
    date: '2026.07.20',
    image: null,
    // Photography missing. Set typographically — do not substitute a stock image.
    needsPhoto: true,
    title: { mn: 'Conservation Finance Alliance-ийн гишүүнчлэл', en: 'Conservation Finance Alliance membership' },
    body: {
      mn: 'Conservation Finance Alliance-ийн байгууллагын гишүүнчлэл нь байгаль хамгааллын санхүүжилтийн салбарын олон улсын мэргэжлийн холбооны стандарт, туршлага, хамтын сүлжээнд нэвтрэх боломжийг нээж байна. Хандивын сан, өрийн хөрвүүлэлт, байнгын санхүүжилтийн бүтэц зэрэг өөр улс оронд бүтээгдэж туршигдсан механизмууд эдүгээ Монголд хийгдэж буй ажилтай нэг ширээнд хэлэлцэгдэх нөхцөл бүрдэж байна.',
      en: 'Institutional membership of the Conservation Finance Alliance opens access to the standards, practice and peer network of the field’s global professional body. Mechanisms designed elsewhere (endowments, debt conversions, permanence structures) are now discussed in the same room as the Mongolian work that borrows from them.'
    }
  },
  {
    id: 'multilateral',
    label: { mn: 'ТҮНШЛЭЛ', en: 'PARTNERSHIP' },
    date: null,
    needsSource: true,
    title: { mn: 'НҮБХХ, ХХААБ, GEF, GCF-тэй хамтын ажиллагаа', en: 'UNDP, FAO, GEF and GCF engagement' },
    todo: {
      mn: 'TODO(content): огноо, хамтран ажилласан байгууллага бүрийн тодорхой үр дүн.',
      en: 'TODO(content): dates, and what each engagement produced.'
    }
  },
  {
    id: 'mnlf-org',
    label: { mn: 'МЭДЭЭЛЭЛ', en: 'COMMUNICATIONS' },
    date: null,
    needsSource: true,
    title: { mn: 'mnlf.org цахим хуудас нээгдлээ', en: 'mnlf.org launched' },
    todo: {
      mn: 'TODO(content): нээлтийн огноо, хуудас юуг нээлттэй болгосон.',
      en: 'TODO(content): launch date, and what the site makes available.'
    }
  },
  {
    id: 'publications',
    label: { mn: 'ХЭВЛЭН НИЙТЛЭЛ', en: 'PUBLICATIONS' },
    date: null,
    needsSource: true,
    title: { mn: 'Хэвлэн нийтэлсэн бүтээлүүд', en: 'Publications released' },
    todo: {
      mn: 'TODO(content): бүтээлийн нэр, огноо, татах холбоос.',
      en: 'TODO(content): titles, dates and download links.'
    }
  }
];

export const recordHeading = {
  mn: {
    kicker: 'Товчоон',
    lede: 'Дөрөвдүгээр сараас наймдугаар сарын хооронд болсон бусад бүхний товчоон.'
  },
  en: {
    kicker: 'The Record',
    lede: 'The record of everything else between April and August.'
  }
};
