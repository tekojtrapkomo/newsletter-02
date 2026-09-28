/**
 * Issue No. 02, built from content/no-02-inventory (the master inventory) and
 * no-02-source-texts-mn-en.md. Section order follows the inventory:
 * COP17 -> Governance -> Grants -> Programmes -> Institutional & International
 * -> Communications, with the inventory's suggested spreads slotted in.
 *
 * Only items marked confirmed in the inventory are published. Items marked as
 * gaps are left out, not filled. Headline figure: USD 197.8 million.
 * Quotes are verbatim excerpts from the posts; "$198 million" stays verbatim
 * inside the Prime Minister's quote only, per the inventory.
 */

export const numbers = {
  title: { mn: 'Тоогоор', en: 'By the numbers' },
  groups: [
    {
      head: { mn: '“Өнө мөнхийн Монгол” БХБС', en: 'Өнө мөнхийн Монгол' },
      rows: [
        ['USD 197.8M', { mn: 'байгаль хамгааллын байнгын санхүүжилт', en: 'in permanent conservation finance' }],
        ['15', { mn: 'жилийн хөтөлбөр', en: 'years' }],
        ['34M ha', { mn: 'хамрах газар нутаг', en: 'of land covered' }],
        ['~24,000', { mn: 'малчин өрх', en: 'herder families' }]
      ]
    },
    {
      head: { mn: 'COP17', en: 'COP17' },
      rows: [
        ['19', { mn: 'түншүүдтэй хамтран зохион байгуулсан арга хэмжээ (Ногоон бүсэд 11, Цэнхэр бүсэд 8)', en: 'events co-organized with partners (11 Green Zone, 8 Blue Zone)' }],
        ['19', { mn: 'сангийн илтгэгч, панелист оролцсон арга хэмжээ', en: 'events with MNLF speakers or panelists' }],
        ['5', { mn: 'харилцан ойлголцлын санамж бичиг', en: 'memoranda of understanding signed' }],
        ['12', { mn: '“Байгаль” павильоны өдөр', en: 'days at the Nature Pavilion' }],
        ['USD 150M', { mn: '“Нутаг” санхүүжилтийн механизмын зорилт', en: 'Nutag Facility target' }]
      ]
    },
    {
      head: { mn: 'ТХГН-ийн хурдасгуур', en: 'PA Accelerator' },
      rows: [
        ['MNT 16.5bn', { mn: 'нийт грантын санхүүжилт хүртэл', en: 'total grant funding, up to' }],
        ['36 / 40', { mn: 'боломжтой захиргаанаас өргөдөл гаргасан', en: 'eligible administrations applied' }],
        ['15', { mn: 'шалгарсан хамгаалалтын захиргаа', en: 'administrations selected' }],
        ['>40%', { mn: 'улсын ТХГН-ийн нутаг дэвсгэрээс', en: 'of national protected area territory' }],
        ['15', { mn: 'менежментийн үр ашигтай байдлын өөрийн үнэлгээ', en: 'management effectiveness self-assessments completed' }]
      ]
    },
    {
      head: { mn: 'Үндэсний Ногоон Лаб', en: 'National Green Lab' },
      rows: [
        ['135', { mn: 'ирүүлсэн төсөл', en: 'proposals received' }],
        ['71', { mn: 'шаардлага хангасан', en: 'eligible' }],
        ['30', { mn: 'танилцуулгын шатанд', en: 'reached the pitch stage' }],
        ['15', { mn: 'шалгарсан төсөл', en: 'projects selected' }]
      ]
    }
  ]
};

export const cop17 = {
  id: 'cop17',
  title: { mn: 'Дэлхийн газрын конвенц Улаанбаатарт', en: 'The land convention in Ulaanbaatar' },
  meta: { mn: '8 сарын 17-28', en: '17-28 August' },
  image: '/features/cop-pavilion.jpg',
  alt: { mn: 'COP17-ын Ногоон бүс дэх “Байгаль” павильоны тайз', en: 'The Nature Pavilion stage in the COP17 Green Zone' },
  caption: { mn: '“Байгаль” павильон, C4, Ногоон бүс.', en: 'The Nature Pavilion, Booth C4, Green Zone.' },
  body: [
    { t: 'p', lead: true,
      mn: 'Наймдугаар сард арван хоёр хоногийн турш дэлхийн газрын асуудлаарх конвенц Улаанбаатарт хуралдлаа. Монгол Улс үүнд санхүүжилт хүссэн хүсэлтээр бус, аль хэдийн ажиллаж буй санхүүжилтийн механизмтайгаар оролцов.',
      en: 'For twelve days in August the world’s land convention met in Ulaanbaatar. Mongolia came to it with a financing mechanism already running, not a request for one.' },
    { t: 'p',
      mn: 'НҮБ-ын Цөлжилттэй тэмцэх конвенцын Талуудын 17 дугаар бага хурал 8 дугаар сарын 17-28-ны өдрүүдэд болов. Түүний гол асуудал бол газар: доройтлыг хэрхэн зогсоох, хуурай бүс нутгийг хэрхэн нөхөн сэргээх, зардлыг хэн хариуцах вэ гэдэг.',
      en: 'The seventeenth Conference of the Parties to the UN Convention to Combat Desertification ran from 17 to 28 August. Its business is land: how degradation is halted, how drylands are restored, and who pays for it.' },
    { t: 'p',
      mn: 'Монголын Байгалийн Өв Сан Цэнхэр болон Ногоон бүсэд аль алинд нь ажиллалаа. Түншүүдтэйгээ хамтран 19 арга хэмжээ зохион байгуулснаас 11 нь Ногоон бүсэд, 8 нь Цэнхэр бүсэд болсон бөгөөд 19 арга хэмжээнд сангийн илтгэгч, панелистууд оролцов. Харилцан ойлголцлын таван санамж бичиг байгуулагдлаа.',
      en: 'Mongolian Nature’s Legacy Foundation worked in both zones. It co-organized 19 events with partners, 11 in the Green Zone and 8 in the Blue Zone, and its speakers or panelists appeared at 19. Five memoranda of understanding were signed.' },
    { t: 'inset', src: '/features/cop-hall.jpg',
      alt: { mn: '“Байгаль” павильон дахь хэлэлцүүлгийн оролцогчид', en: 'Participants at a Nature Pavilion session' },
      cap: { mn: 'Нутгийн иргэдэд түшиглэсэн байгалийн нөөцийн менежментийн хэлэлцүүлэг, 8 сарын 24.', en: 'Community-based natural resource management session, 24 August.' } },
    { t: 'p',
      mn: 'Ногоон бүсийн C4 дахь “Байгаль” павильоныг Байгаль орчин, уур амьсгалын өөрчлөлтийн яам, Монголын Байгалийн Өв Сан, Дэ Нэйче Консерванси, Зэрлэг амьтан хамгаалах нийгэмлэг (WCS) хамтран ажиллуулав. Арван хоёр өдрийн хөтөлбөр Монгол Улс газар нутаг, биологийн олон янз байдлаа урт хугацаанд хэрхэн санхүүжүүлж, хамгаалах вэ гэсэн нэг асуултын эргэн тойронд өрнөсөн. Бизнесийн хөрөнгө оруулалт, байгальд ээлтэй дадал, тусгай хамгаалалттай газар нутаг, санхүүжилт, нутгийн иргэдэд түшиглэсэн менежментийн өдрүүдийг сан удирдан буюу хамтран зохион байгуулсан.',
      en: 'In the Green Zone, the Nature Pavilion at Booth C4 was shared by four organisations: the Ministry of Environment and Climate Change, MNLF, The Nature Conservancy and the Wildlife Conservation Society. Its twelve days turned on one question: how Mongolia finances and carries out the long-term conservation of its land and biodiversity. MNLF led or co-led the days on business investment, nature-positive practice, protected areas, conservation finance and community-based natural resource management.' },
    { t: 'p',
      mn: '8 дугаар сарын 22-ны Тусгай хамгаалалттай газар нутгийн өдрийг сайд Ц.Сандаг-Очир нээж, яам ТХГН-ийн үндэсний замын зураг болон шинэчилсэн хуулийн төслийг танилцуулав. Үдээс хойш байгаль хамгаалагчид ажлынхаа тухай өөрсдөө ярилаа.',
      en: 'Protected Areas Day on 22 August was opened by Minister Ts. Sandag-Ochir. The Ministry presented the national Protected Areas Roadmap and the revised law, and in the afternoon frontline rangers spoke about the work itself.' },
    { t: 'inset', src: '/features/cop-panel.jpg',
      alt: { mn: 'Тусгай хамгаалалттай газар нутгийн өдрийн хэлэлцүүлэг', en: 'A discussion on Protected Areas Day' },
      cap: { mn: 'Тусгай хамгаалалттай газар нутгийн өдөр, 8 сарын 22.', en: 'Protected Areas Day, 22 August.' } },
    { t: 'p',
      mn: 'Цэнхэр бүсэд 8 дугаар сарын 19-20-нд болсон Өндөр түвшний тогтвортой санхүүгийн форумыг Ерөнхийлөгчийн Тамгын газар, БОУАӨЯ, Монголын Тогтвортой Санхүүгийн Холбоо, Голомт банк, Монголын Байгалийн Өв Сан, UNCCD, Дэлхийн банкны групп хамтран зохион байгуулав. Хоёр дахь өдрийг сан удирдан явуулж, байгаль хамгааллыг урт хугацаанд санхүүжүүлэх загвар, улсын төсвийг байгаль орчны үр дүнд чиглүүлэх арга, зах зээлийн механизмаар хувийн хөрөнгийг татах гэсэн гурван асуултыг дараалан хэлэлцэв.',
      en: 'In the Blue Zone, the High-Level Sustainable Finance Forum on 19 and 20 August was convened by the Office of the President, the Ministry, the Mongolian Sustainable Finance Association, Golomt Bank, MNLF, the UNCCD and the World Bank Group. MNLF led the second day, which took three questions in turn: which long-term models finance conservation, how public budgets can be reoriented toward environmental outcomes, and how private capital is brought in through market mechanisms.' },
    { t: 'quote',
      mn: 'Энэхүү хөтөлбөрийн амжилтыг донорын санхүүжилт хэр удаан үргэлжилснээр бус, харин түүнийг дотоодын тогтвортой эх үүсвэрээр хэр амжилттай орлуулж чадсанаар хэмжих болно.',
      en: 'The success of this initiative will be measured not by how long donor funding lasts, but by how successfully it is replaced by sustainable domestic financing.',
      by: { mn: 'Ш.Батбаяр, БОУАӨЯ-ны Төрийн нарийн бичгийн дарга', en: 'Sh. Batbayar, State Secretary, Ministry of Environment and Climate Change' } },
    { t: 'full', src: '/features/cop-audience.jpg',
      alt: { mn: 'Өндөр түвшний тогтвортой санхүүгийн форумын оролцогчид', en: 'Delegates at the High-Level Sustainable Finance Forum' },
      cap: { mn: 'Өндөр түвшний тогтвортой санхүүгийн форум, MET-21, 8 сарын 19.', en: 'High-Level Sustainable Finance Forum, MET-21, 19 August.' } },
    { t: 'p',
      mn: 'Тэнд дэвшүүлсэн байр суурь тодорхой байлаа. “Бэлчээрийн тэргүүлэх санаачилга”-ын хүрээнд БОУАӨЯ, Хүнс, хөдөө аж ахуй, хөнгөн үйлдвэрийн яам, Монголын Байгалийн Өв Сан нь ХААН банк, Голомт банк, Төрийн банк, Хустайн байгалийн цогцолборт газар, URECA-тай хамтран Тогтвортой малчин ба үнэ цэнийн сүлжээний санхүүжилтийн схемийг зарлав. Үүнийг өргөжүүлэх зорилгоор 150 сая ам.доллар татах “Нутаг” механизмыг олон улсын хөрөнгө оруулагчдад танилцуулсан. Хомын тал болон Хустайн биологийн олон янз байдлын кредитийн анхны төслүүд хөрөнгө оруулагчдад танилцуулагдав.',
      en: 'The positions advanced there were concrete. Under the Rangelands Flagship Initiative, the Ministry, the Ministry of Food, Agriculture and Light Industry and MNLF announced a Sustainable Herder and Value Chain Finance scheme with Khan Bank, Golomt Bank, State Bank, Khustai National Park and URECA. The Nutag Facility, which aims to raise USD 150 million to scale it, was presented to international investors, as were the first biodiversity credit projects, for Khomyn Tal and Khustai.' },
    { t: 'pair', items: [
      { src: '/features/cop-hlsff.jpg',
        alt: { mn: 'Форумын хоёр дахь өдрийн илтгэгч', en: 'A speaker on the second day of the Forum' },
        cap: { mn: 'Форумын хоёр дахь өдөр, 8 сарын 20.', en: 'Forum, day two, 20 August.' } },
      { src: '/features/cop-map.jpg',
        alt: { mn: 'Монголын газрын зураг бүхий илтгэл', en: 'A presentation with a map of Mongolia' },
        cap: { mn: 'Форумын эхний өдөр, 8 сарын 19.', en: 'Forum, day one, 19 August.' } } ] },
    { t: 'p',
      mn: 'Бодлогын хувьд, яамны удирдлага дор боловсруулсан Тусгай хамгаалалттай газар нутгийн тухай хуулийн шинэчилсэн төслийг УИХ-д өргөн барьсан. Байгаль орчны салбарт үр дүнд суурилсан санхүүжилтийг яам хоорондын түвшинд хэлэлцэж, нутгийн иргэдэд түшиглэсэн хамтын менежментийн 2040 он хүртэлх урт хугацааны стратегийн төслийг олон нийтэд танилцуулав. Үндэсний Ногоон Лабаас шалгарсан 15 төслийг танилцуулж, анхны төслүүдэд EBRD болон Голомт банк санхүүжилт, техникийн туслалцаа үзүүлэхээр болов.',
      en: 'On policy, the revised Protected Areas law, prepared under the Ministry’s lead, has been submitted to the State Great Khural. Results-based financing for the environment sector was discussed at cross-ministerial level, and a draft national strategy for community-based co-management through 2040 was set out in public. The top 15 National Green Lab projects were presented, and EBRD and Golomt Bank will provide financing and technical assistance to the first of them.' },
    { t: 'p',
      mn: 'Энэ хоёр долоо хоног байнгын хамгаалал нь амлалтын бус, санхүүгийн зохион байгуулалтын асуудал болсныг харуулав. Хэрэгслүүд одоо гарын үсэг зурсан гэрээнд бий. Тэдгээр нь газар нутагт хүрч байгаа эсэхийг дараагийн дугааруудад тайлагнана.',
      en: 'What the fortnight showed is that permanence has become a question of financial design rather than of pledges. The instruments now exist in signed agreements. The next issues will report whether they reach the land.' }
  ]
};

export const signed = {
  title: { mn: 'Гарын үсэг зурсан түншлэлүүд', en: 'Partnerships signed' },
  items: [
    { date: '07.20', title: { mn: 'Conservation Finance Alliance', en: 'Conservation Finance Alliance' },
      body: { mn: 'Байгууллагын гишүүнээр элсэв.', en: 'Institutional membership.' } },
    { date: '08.19', title: { mn: 'Голомт банк', en: 'Golomt Bank' },
      body: { mn: 'Тогтвортой бэлчээр, нийлүүлэлтийн сүлжээнд чиглэсэн ногоон зээл, нүүрстөрөгч ба биологийн олон янз байдлын кредитийн төслүүдэд хөрөнгө оруулалт, зээлийн эрсдэлд TNFD нэвтрүүлэх.', en: 'Green loans for sustainable rangelands and supply chains, investment in carbon and biodiversity credit projects, and TNFD in credit risk.' } },
    { date: '08.19', title: { mn: 'ХААН банк', en: 'Khan Bank' },
      body: { mn: 'Малчид, хоршоонд зориулсан ногоон санхүүжилтийн загвар, ESG-д биологийн олон янз байдлын эрсдэлийг тусгах.', en: 'Green finance models for herders and cooperatives, and biodiversity risk in ESG frameworks.' } },
    { date: '08.19', title: { mn: 'Биологийн олон янз байдлын нөхөн олговор', en: 'Biodiversity offsetting' },
      body: { mn: 'БОУАӨЯ, “Чингис хаан баялгийн сан нэгдэл” ХХК, МБӨС. Шинжлэх ухаанд суурилсан үндэсний тогтолцоо, ТХГН ба хамгаалалтын бүсэд уул уурхайн нөлөөллийн туршилтын нөхөн олговор.', en: 'MECC, Chinggis Khaan Sovereign Wealth Fund Holding and MNLF. A science-based national framework, with pilot offsets for mining impacts in protected areas and buffer zones.' } },
    { date: '08.22', title: { mn: 'Голомт банкны “Nature” карт', en: 'Golomt Bank “Nature” card' },
      body: { mn: 'Картын хураамжийн 80 хувийг тусгай хамгаалалттай газар нутагт зарцуулна.', en: '80% of the card fee goes to Specially Protected Areas.' } },
    { date: '08.27', title: { mn: 'Хустайн БЦГ ба URECA', en: 'Khustai National Park and URECA' },
      body: { mn: 'Хустайн хамгаалалтын бүсэд Ногоон малчны зээлийн туршилтыг эхлүүлэв.', en: 'Launched the Green Herder Loan pilot in the Khustai buffer zone.' } },
    { date: '08', title: { mn: 'EBRD ба Голомт банк', en: 'EBRD and Golomt Bank' },
      body: { mn: 'Үндэсний Ногоон Лабын анхны төслүүдэд санхүүжилт, техникийн туслалцаа.', en: 'Financing and technical assistance for the first National Green Lab projects.' } }
  ]
};

export const voices = {
  title: { mn: 'Дуу хоолой', en: 'Voices' },
  items: [
    { mn: 'Монгол улс байгаль хамгаалалтын тогтвортой санхүүжилтийн чиглэлээр тодорхой хэмжээнд туршлага хуримтлуулаад байгаагийн тод жишээ нь, 2024 оноос үйл ажиллагаагаа эхэлсэн “Өнө Мөнхийн Монгол” хөтөлбөр юм.',
      en: 'A clear example of Mongolia’s growing experience in sustainable conservation financing is the ‘Eternal Mongolia’ program, launched in 2024, which encompasses $198 million in funding.',
      by: { mn: 'Ням-Осорын Учрал, Монгол Улсын Ерөнхий сайд', en: 'H.E. Uchral Nyam-Osor, Prime Minister of Mongolia' } },
    { mn: 'Байгаль орчныг хамгаалах ямар ч сайн уриалга, санаачилга байсан санхүүжилтгүйгээр бодит үр дүнд хүрэхгүй.',
      en: 'No matter how strong our environmental initiatives may be, they cannot achieve tangible results without adequate financing.',
      by: { mn: 'Ясмин Фуад, UNCCD-ийн Гүйцэтгэх нарийн бичгийн дарга', en: 'H.E. Yasmine Fouad, Executive Secretary, UNCCD' } },
    { mn: 'Бидэнд хэчнээн санхүүжилт хэрэгтэй вэ гэдгээс илүүтэй, ямар санхүүгийн тогтолцоо, хөрөнгө оруулалтын механизм хэрэгтэй вэ гэдэг нь чухал байна.',
      en: 'The critical question is no longer just how much funding we need, but what kind of investment mechanisms will drive real results.',
      by: { mn: 'Ц.Сандаг-Очир, Байгаль орчин, уур амьсгалын өөрчлөлтийн сайд', en: 'H.E. Ts. Sandag-Ochir, Minister of Environment and Climate Change' } },
    { mn: 'Өнөөдөр бид байгаль хамгааллын салбарт ‘Юу хийх вэ?’ бус ‘Яаж хийх вэ?’ гэх бодит шийдлийн шатанд ирлээ.',
      en: 'Today, in the realm of conservation, we are moving past asking ‘What to do?’ to focusing on ‘How to do it.’',
      by: { mn: 'М.Болдоо, МБӨС-ийн Удирдах зөвлөлийн дарга', en: 'M. Boldoo, Chair of the Board, MNLF' } },
    { mn: 'Урт хугацааны хөгжлийн бодлого, хууль эрх зүйн зорилтуудаа төсөв санхүүтэй нягт уялдуулж байж сая бодлого хөрсөн дээр бодитоор хэрэгжих болно.',
      en: 'Our long-term development and legal policies will only be realized on the ground when they are strictly integrated with these financial frameworks.',
      by: { mn: 'Д.Баярсайхан, Ерөнхийлөгчийн Эдийн засгийн бодлогын зөвлөх', en: 'D. Bayarsaikhan, Economic Policy Advisor to the President' } },
    { mn: 'Бид эдийн засгийн өсөлтийг зөвхөн уламжлалт ДНБ-ээр хэмжихээ зогсоож, ‘Тогтвортой ДНБ’-ийн аргачлал руу шилжих шаардлагатай.',
      en: 'We can no longer measure progress solely through traditional GDP.',
      by: { mn: 'С.Даваасүрэн, Эдийн засаг, хөгжлийн дэд сайд', en: 'S. Davaasuren, Deputy Minister of Economy and Development' } }
  ]
};

export const governance = {
  title: { mn: 'Засаглал', en: 'Governance' },
  items: [
    { date: '04.16', label: { mn: 'УДИРДАХ ЗӨВЛӨЛ', en: 'BOARD' },
      title: { mn: 'Сайд Удирдах зөвлөлийн төлөөллийг хүлээн авав', en: 'The Minister receives the Board' },
      body: { mn: 'Сайд Ц.Сандаг-Очир М.Болдоо, Д.Галбадрах, Ө.Азжаргал нарыг хүлээн авч, ТХГН-ийн менежмент, санхүүжилтийн механизм, эрх зүйн орчны чиглэлээр хамтын ажиллагааг гүнзгийрүүлэхээр тохиров.', en: 'Minister Ts. Sandag-Ochir received M. Boldoo, D. Galbadrakh and U. Azjargal. They agreed to deepen cooperation on protected area management, financing mechanisms and the legal framework.' } },
    { date: '07.01', label: { mn: 'ТЕХНИКИЙН ХОРОО', en: 'TCC' },
      title: { mn: 'Техникийн зохицуулах хорооны VI хурал', en: 'Sixth Technical Coordination Committee' },
      body: { mn: '2026 оны хоёр дахь хурал. Эхний хагас жилийн үр дүн, мэдээллийн системийн уялдаа, холбогдох хөтөлбөртэй хамтын ажиллагаа, судалгааны чиглэл, ТХГН-ийн хурдасгуурын явцыг хэлэлцэв.', en: 'The second of 2026. It reviewed first-half results, how the programme’s information systems work together, links with related programmes, research guidance and the PA Accelerator.' } },
    { date: '08.04', label: { mn: 'УДИРДАХ ЗӨВЛӨЛ', en: 'BOARD' },
      title: { mn: 'Удирдах зөвлөлийн 19 дүгээр ээлжит хурал', en: '19th regular Board meeting' },
      body: { mn: '“Өнө мөнхийн Монгол”-ын 2026 оны үйл ажиллагааны төлөвлөгөөний эхний хагас жилийн явцыг хянаж, санал тусгасан. COP17-ын бэлтгэлийн мэдээллийг сонсов.', en: 'Reviewed first-half progress on the Өнө мөнхийн Монгол 2026 Action Plan, with its feedback incorporated, and received the COP17 preparation update.' } }
  ],
  meetings: {
    title: { mn: 'Ажлын хэсэг, зөвлөлдөх уулзалт', en: 'Working groups and consultations' },
    note: { mn: 'ТХГН-ийн бодлого, хуулийн шинэчлэлийг БОУАӨЯ удирдан чиглүүлж, МБӨС дэмжиж байна.', en: 'The Ministry of Environment and Climate Change leads protected area policy and law reform. MNLF supports it.' },
    rows: [
      ['04.01-10', { mn: 'ТХГН-ийн замын зургийн дугуй ширээний цуврал', en: 'PA Roadmap roundtable series' }, { mn: 'БОУАӨЯ; GIZ, БХБС дэмжлэг', en: 'MECC, with GIZ and PFP support' }],
      ['04.30', { mn: 'Үр дүнд суурилсан санхүүжилтийн ажлын хэсгийн 3-р хурал', en: 'Performance-based financing working group, 3rd meeting' }, { mn: 'СЯ, БОУАӨЯ, МБӨС', en: 'MoF, MECC, MNLF' }],
      ['05.14', { mn: 'ТХГН-ийн хуулийн хэлэлцүүлэг, Хархорин', en: 'PA law provincial discussion, Kharkhorin' }, { mn: 'Хуулийн ажлын хэсэг', en: 'PA law working group' }],
      ['05.15', { mn: 'ТХГН-ийн хуулийн хэлэлцүүлэг, Баянхонгор', en: 'PA law provincial discussion, Bayankhongor' }, { mn: 'Хуулийн ажлын хэсэг', en: 'PA law working group' }],
      ['06', { mn: 'Хангайн бүсийн COP17 зөвлөлдөх уулзалт, 3 аймаг', en: 'Khangai regional COP17 consultations, 3 provinces' }, { mn: 'МБӨС хамтран зохион байгуулав', en: 'MNLF co-organized' }],
      ['06.30-07.01', { mn: '62 төрийн албан хаагчийн төсвийн сургалт', en: 'Budget training for 62 civil servants' }, { mn: 'СЯ; EU, UNICEF, БХБС', en: 'MoF, with EU, UNICEF, PFP' }],
      ['07', { mn: 'ТХГН-ийн менежментийн төлөвлөлтийн аргачлалын ажлын хэсэг', en: 'PA management planning methodology working group' }, { mn: 'БОУАӨЯ', en: 'MECC' }],
      ['07.07', { mn: 'Хамтын менежментийн нээлттэй хэлэлцүүлэг', en: 'Co-management open discussion' }, { mn: 'БОУАӨЯ; TNC, МБӨС судалгаа', en: 'MECC; TNC and MNLF study' }]
    ]
  },
  honours: {
    title: { mn: 'Шагнал, алдар', en: 'Recognition' },
    rows: [
      ['05.20', { mn: 'М.Болдоо, Удирдах зөвлөлийн дарга: Монгол Улсын Гавьяат эдийн засагч', en: 'M. Boldoo, Board Chair: Merited Economist of Mongolia' }],
      ['07.09', { mn: 'Д.Галбадрах, Удирдах зөвлөлийн дэд дарга: Хөдөлмөрийн гавьяаны улаан тугийн одон', en: 'D. Galbadrakh, Board Vice Chair: Order of the Red Banner of Labor' }]
    ]
  },
  calls: {
    title: { mn: 'Зарласан ажлын байр, зөвлөх үйлчилгээ', en: 'Calls issued' },
    rows: [
      { mn: 'Хяналт-шинжилгээ, үнэлгээ, грантын ажилтан', en: 'MEL and Grants Officer' },
      { mn: 'ТЗН-ийн төслийн зохицуулагч', en: 'PCU Project Coordinator' },
      { mn: 'ТЗН-ийн ТХГН-ийн тогтвортой аялал жуулчлалын мэргэжилтэн', en: 'PCU Sustainable Tourism Specialist' },
      { mn: 'ТХГН-ийн менежментийн үр ашигтай байдлын техникийн зөвлөх', en: 'Technical Consultant, PA Management Effectiveness' },
      { mn: 'Биологийн олон янз байдлыг ерөнхий боловсролын хөтөлбөрт тусгах', en: 'Biodiversity and PA values in the school curriculum' },
      { mn: 'Дорнод Монголын хээрийн Дэлхийн өвийн бүртгэл', en: 'Eastern Mongolian Steppe World Heritage process' },
      { mn: 'ТХГН-ийн менежментийн цахим систем', en: 'PA management e-system' },
      { mn: 'ТХГН-ийн менежментийн төлөвлөлтийн тогтолцоо', en: 'PA Management Planning Framework' },
      { mn: 'ТХГН-ийн менежментийн эрхийг гэрээгээр шилжүүлэх', en: 'Contract-based transfer of PA management rights' }
    ]
  }
};

export const programmes = {
  title: { mn: 'Хөтөлбөрүүд', en: 'Programmes' },
  goals: [
    { img: '/news/p_khustai-3.jpg', alt: { mn: 'Хустайн малчид', en: 'Herders in the Khustai buffer zone' },
      head: { mn: 'Нутгийн иргэдэд түшиглэсэн байгалийн нөөцийн менежмент', en: 'Community-based natural resource management' },
      items: [
        { mn: 'БОУАӨЯ-ны захиалгаар TNC, МБӨС хийсэн суурь судалгаа, 2026-2040 оны урт хугацааны стратеги, үйл ажиллагааны төлөвлөгөөний төсөл 7 сарын 7-нд танилцуулагдаж, COP17-д олон нийтэд хүрэв.', en: 'A baseline study and draft Long-Term Strategy and Action Plan for 2026-2040, commissioned by the Ministry and carried out by TNC and MNLF, was presented on 7 July and introduced publicly at COP17.' },
        { mn: 'Ногоон малчны зээл: Хустайн хамгаалалтын бүсийн малчдад 5 сарын 28-нд танилцуулж, 8 сарын 27-нд туршилтыг эхлүүлэв. Бэлчээрийн ашиглалтыг даац, сүргийн эргэлттэй уялдуулна.', en: 'Green Herder Loan: presented to herders in the Khustai buffer zone on 28 May, with the pilot launched on 27 August. It aligns pasture use with carrying capacity and herd turnover.' },
        { mn: 'Хомын тал: тээвэрлэж авчирсан 26 тахь 150 болсон. Малчин эмэгтэйчүүдэд эсгий, саван хийх сургалт.', en: 'Khomyn Tal: 26 translocated takhi now number 150. Felt-craft and soap training for herder women.' }
      ] },
    { img: '/news/p_khangai-3.jpg', alt: { mn: 'Хангайн бүсийн зөвлөлдөх уулзалт', en: 'Khangai regional consultation' },
      head: { mn: 'ТХГН-ийн менежментийн үр ашигтай байдал', en: 'Protected area management effectiveness' },
      items: [
        { mn: 'ТХГН-ийн хурдасгуур, дээр дэлгэрэнгүй.', en: 'The PA Accelerator, above.' },
        { mn: 'Менежментийн төлөвлөлтийн аргачлалын ажлын хэсэгт Найжел Дадли, Ханна Тимминс, Сью Столтон нар ахиц дэвшлээ танилцуулав.', en: 'Nigel Dudley, Hannah Timmins and Sue Stolton presented progress to the management planning methodology working group.' },
        { mn: 'Исланд, Шинэ Зеландын туршлага солилцох уулзалтыг ТХГН-ийн захирлуудад зориулан 8 сарын 21-нд зохион байгуулав.', en: 'An international knowledge exchange for PA directors, with Iceland and New Zealand, on 21 August.' }
      ] },
    { img: '/news/g_bayan-3.jpg', alt: { mn: 'Баянхонгор дахь хуулийн хэлэлцүүлэг', en: 'The law discussion in Bayankhongor' },
      head: { mn: 'Бодлого ба ТХГН-ийн өргөтгөл', en: 'Policy and protected area expansion' },
      items: [
        { mn: 'БОУАӨЯ удирдан чиглүүлж буй ТХГН-ийн хуулийн шинэчилсэн төслийг Өвөрхангай, Баянхонгорт хэлэлцэж, Бутаны Байгаль хамгааллын итгэлцлийн сангийн урилгаар туршлага судлаад УИХ-д өргөн барьсан.', en: 'The revised PA law, led by the Ministry, was discussed in Uvurkhangai and Bayankhongor, informed by a study visit hosted by the Bhutan Trust Fund for Environmental Conservation, and submitted to the State Great Khural.' },
        { mn: 'Монгол Улс ТХГН-ийн хамрах хүрээг одоогийн 21 хувиас 30 хувьд хүргэх зорилттой.', en: 'Mongolia aims to raise protected area coverage from 21% to 30%.' }
      ] },
    { img: '/news/g_mof-3.jpg', alt: { mn: 'Төсвийн сургалт', en: 'Budget training' },
      head: { mn: 'Тогтвортой санхүүжилт', en: 'Sustainable finance' },
      items: [
        { mn: 'Үр дүнд суурилсан санхүүжилтийн шинэчлэл (СЯ, БОУАӨЯ, МБӨС): 2027 оны төсвийн жилээс хамгаалалтын захиргаадад туршина.', en: 'Performance-based financing reform (MoF, MECC, MNLF): to be piloted with PA administrations from fiscal year 2027.' },
        { mn: '“Өнө мөнхийн Монгол”-ын амлалтын хүрээнд 62 төрийн албан хаагч төсвийн сургалтад хамрагдав.', en: '62 civil servants trained on the budget cycle under Өнө мөнхийн Монгол commitments.' }
      ] }
  ],
  lab: {
    head: { mn: 'Үндэсний Ногоон Лаб', en: 'National Green Lab' },
    note: { mn: 'Ерөнхийлөгчийн Тамгын газрын санаачилгаар МБӨС, Монголын Бизнесийн Зөвлөл хамтран хэрэгжүүлж байна.', en: 'Initiated by the Office of the President; jointly implemented by MNLF and the Business Council of Mongolia.' },
    items: [
      { mn: '135 төсөл ирснээс 71 нь шаардлага хангаж, 30 нь танилцуулгын шатанд шалгарч, эцэст нь 15 төсөл сонгогдов.', en: 'Of 135 proposals, 71 were eligible, 30 reached the pitch stage and 15 were selected.' },
      { mn: 'Сонгогдсон төслүүдэд 6 сарын 16-нд чиглүүлэх сургалт, дараа нь мастер класс цуврал.', en: 'Orientation on 16 June, followed by a masterclass series.' },
      { mn: 'Airee Felt, Монполимет группийн “Build Green Land”, URECA зэрэг төслүүд.', en: 'Projects include Airee Felt, Monpolymet’s “Build Green Land” and URECA.' },
      { mn: 'EBRD болон Голомт банк анхны төслүүдэд санхүүжилт, техникийн туслалцаа үзүүлнэ.', en: 'EBRD and Golomt Bank will provide financing and technical assistance to the first projects.' }
    ]
  }
};

export const international = {
  title: { mn: 'Олон улсын хамтын ажиллагаа', en: 'Institutional and international' },
  rows: [
    ['04', { mn: 'Forum for the Future of Agriculture', en: 'Forum for the Future of Agriculture' }, { mn: 'Гүйцэтгэх захирлын илтгэл', en: 'CEO keynote' }],
    ['04.16', { mn: '“From Ambition to Action”', en: '“From Ambition to Action”' }, { mn: 'TNC, WCS, Belgian Biodiversity Platform, RBINS', en: 'TNC, WCS, Belgian Biodiversity Platform, RBINS' }],
    ['04.24', { mn: 'Бутаны төлөөлөгчид', en: 'Bhutan delegation' }, { mn: 'БХБС хоорондын туршлага солилцоо', en: 'PFP-to-PFP exchange' }],
    ['05', { mn: 'Бутанд туршлага судлах айлчлал', en: 'Study visit to Bhutan' }, { mn: 'УИХ-ын гишүүн, БОУАӨЯ, хуулийн ажлын хэсэг', en: 'With an MP, MECC and the PA law working group' }],
    ['06.05', { mn: 'GEF-ийн 8 дугаар чуулган, Самарканд', en: '8th GEF Assembly, Samarkand' }, { mn: 'IUCN, FUNBIO, Enduring Earth, SGP-тэй дугуй ширээ', en: 'Roundtable with IUCN, FUNBIO, Enduring Earth, SGP' }],
    ['06', { mn: 'Global Landscapes Forum, Найроби', en: 'Global Landscapes Forum, Nairobi' }, { mn: 'Ө.Азжаргал, Удирдах зөвлөлийн нярав', en: 'U. Azjargal, Board Treasurer' }],
    ['06.16', { mn: 'TNC-ийн Жеффри Пэрриш', en: 'Jeffrey Parrish, TNC' }, { mn: 'Сайд хүлээн авав', en: 'Received by the Minister' }],
    ['06.18', { mn: 'Legacy Landscapes Fund', en: 'Legacy Landscapes Fund' }, { mn: 'Онон-Балжийн төслийг “Өнө мөнхийн Монгол”-той уялдуулах', en: 'Aligning Onon-Balj with Өнө мөнхийн Монгол' }],
    ['06.22-26', { mn: 'Тогтвортой бэлчээрийн форум, Габороне', en: 'Sustainable Rangelands Forum, Gaborone' }, { mn: 'Санхүүжилтийн панел', en: 'Financing panel' }],
    ['07.20', { mn: 'Conservation Finance Alliance', en: 'Conservation Finance Alliance' }, { mn: 'Байгууллагын гишүүн', en: 'Institutional member' }],
    ['08.05', { mn: 'ACBK (Казахстан), TNC-ийн Эдди Гэйм', en: 'ACBK (Kazakhstan) and TNC’s Eddie Game' }, { mn: 'БХБС туршлага солилцоо', en: 'PFP knowledge exchange' }]
  ]
};

export const memoriam = {
  title: { mn: 'Дурсамж', en: 'In memoriam' },
  name: { mn: 'Замбын Батжаргал', en: 'Zambyn Batjargal' },
  years: '1945-2026',
  body: {
    mn: 'Монгол Улсын Байгаль орчны сайд асан, Байгаль орчны гавьяат ажилтан, Төрийн соёрхолт, доктор З.Батжаргал 2026 оны 8 дугаар сарын 6-нд таалал төгслөө. Тэрээр 30 гаруй жилийн өмнө газар нутгийн гуравны нэгийг хамгаалах алсын харааг төрийн бодлогод тусгаж, тусгай хамгаалалттай газар нутгийн сүлжээг өргөжүүлсэн юм.',
    en: 'Dr Zambyn Batjargal, former Minister of Environment of Mongolia, Honoured Environmental Worker and State Prize laureate, died on 6 August 2026. More than thirty years ago he wrote into state policy the vision now known as 30x30, and widened the country’s protected area network.'
  }
};

export const communications = {
  title: { mn: 'Мэдээлэл, харилцаа', en: 'Communications' },
  grantee: {
    head: { mn: 'Олон нийтийн мэдлэгийн грантын контент', en: 'Public awareness grantees' },
    note: { mn: '1-5 сарын байдлаар.', en: 'Views, January to May.' },
    items: [
      { n: '3M', t: { mn: 'MONTSAME: ТХГН-ийн хуулийн видео', en: 'MONTSAME: protected areas law video' } },
      { n: '1.7M', t: { mn: 'GoGo / iKon кампанит ажил', en: 'GoGo / iKon campaign' } },
      { n: '220K+', t: { mn: 'Peak News: байгаль хамгаалагчийн видео', en: 'Peak News: ranger video' } }
    ]
  },
  tv: {
    head: { mn: 'Central TV: Zero Waste', en: 'Central TV: Zero Waste' },
    body: { mn: 'ТХГН-ийн сэдэвтэй Zero Waste нэвтрүүлэг Central TV-ээр цацагдлаа.', en: 'The protected areas episode of Zero Waste has aired on Central TV.' }
  },
  posts: {
    head: { mn: 'Facebook нийтлэл, 4 сарын 1-8 сарын 25', en: 'Facebook posts, 1 April to 25 August' },
    total: '219',
    months: [['4', 30], ['5', 48], ['6', 18], ['7', 31], ['8', 92]]
  },
  series: {
    head: { mn: 'Цувралууд', en: 'Series' },
    items: [
      { h: { mn: 'ТХГН-ийн танилцуулга', en: 'Protected area profiles' },
        b: { mn: 'Богд хан уул, Говь Гурвансайхан, Отгонтэнгэр, Тост Тосон Бумба, Их Нарт, Онон-Балж, Хан Хэнтий, Хөвсгөл, Говийн их, Увс нуурын ай сав.', en: 'Bogd Khan, Gobi Gurvansaikhan, Otgontenger, Tost Toson Bumba, Ikh Nart, Onon-Balj, Khan Khentii, Khuvsgul, Great Gobi and the Uvs Nuur Basin.' } },
      { h: { mn: 'Байгаль хамгаалагч, иргэдийн түүх', en: 'Ranger and community stories' },
        b: { mn: 'Дарьгангын байгаль хамгаалагч Б.Дашрэнчин, Г.Мөнхболд, иргэн А.Адъяасүрэн.', en: 'Dariganga rangers B. Dashrenchin and G. Munkhbold, and resident A. Adyasuren.' } },
      { h: { mn: 'Мэргэжилтний дуу хоолой', en: 'Expert voices' },
        b: { mn: 'Т.Батсүх (СЯ), Н.Болормаа (СЯЖЯЯ), Мартино Пелли (АХБ), Стив Морел, Карма Тшеринг, Роберт Макинтош.', en: 'T. Batsukh (MoF), N. Bolormaa (Ministry of Culture, Sports, Tourism and Youth), Martino Pelli (ADB), Steve Morel, Karma Tshering and Robert McIntosh.' } },
      { h: { mn: 'Тайлбар нийтлэл', en: 'Explainers' },
        b: { mn: '“Өнө мөнхийн Монгол” (4 сарын 6), сангийн танилцуулга (6 сарын 16), хүүхдэд зориулсан ТХГН-ийн тайлбар (5 сарын 11), зэрлэг амьтны цуврал.', en: 'Өнө мөнхийн Монгол (6 April), the foundation (16 June), a protected areas explainer for children (11 May), and a species series.' } }
    ]
  },
  campaigns: [
    { mn: '“Тусгай хамгаалалттай газруудаа танин мэдье” сошиал контентын уралдаан 7 сарын 13-аас 9 сарын 13 хүртэл. Үр дүнг 03 дугаарт.', en: '“Get to Know Our Protected Areas” social content contest, 13 July to 13 September. Results in No. 03.' },
    { mn: 'COP17-ын олон нийтийн асуулт хариулт, mnlf.org/cop17 хуудас.', en: 'A COP17 public quiz and the mnlf.org/cop17 event page.' },
    { mn: '“Сангаар сонин юу байна?” эхний улирлын дугаар 4 сарын 2-нд.', en: 'The Q1 issue of this newsletter, 2 April.' }
  ]
};

export const annualReport = {
  title: { mn: '2025 оны жилийн тайлан', en: 'Annual Report 2025' },
  lead: { mn: 'Сангийн бүтэн жил ажилласан анхны жил тайлагнагдлаа.', en: 'The foundation’s first full year of operations is now on record.' },
  body: {
    mn: 'Тайлан 2025 оныг хамарч, засаглал ба тогтолцоо, “Өнө мөнхийн Монгол” БХБС, грантын хөтөлбөр, бодлогын өөрчлөлт, байгалийн онцгой газрыг хамгаалах, менежментийн үр ашигтай байдал гэсэн зургаан бүлэгтэй. Удирдах зөвлөлийн даргын үг, санхүүгийн тойм багтсан.',
    en: 'It covers 2025 in six chapters: building the foundations, the Өнө мөнхийн Монгол PFP, the grants programme, enabling policy change, protecting Mongolia’s wild places, and improving management effectiveness. A foreword from the Board Chair and a financial overview are included.'
  },
  stats: [
    ['18/21', { mn: 'шинэ ТХГН-ийн орон нутгаар дэмжигдсэн материалыг яаманд хүргүүлсэн', en: 'locally endorsed designation materials submitted to the Ministry' }],
    ['2.48M', { mn: 'га газарт орон нутгийн шийдвэр гарсан', en: 'hectares with local government approval' }],
    ['430', { mn: 'орон нутгийн ТХГН үнэлэгдсэн', en: 'local protected areas assessed' }],
    ['450+', { mn: 'ажилтан, албан хаагч сургалтад хамрагдсан', en: 'officials and staff trained' }]
  ],
  read: { mn: 'Тайланг унших', en: 'Read the report' },
  pdf: { mn: 'PDF татах (англи хэл)', en: 'Download PDF' },
  mnNote: { mn: 'Монгол хувилбар удахгүй.', en: 'Mongolian edition coming soon.' },
  url: 'https://2025.mnlf.org',
  pdfUrl: 'https://2025.mnlf.org/MNLF_Annual_Report_2025.pdf'
};

export const ahead = {
  kicker: { mn: 'Дараагийн дугаарт', en: 'Looking ahead' },
  lines: {
    mn: [
      'ТХГН-ийн хуулийн шинэчилсэн төсөл УИХ-д өргөн баригдсан бөгөөд 2027 оны хаврын чуулганаар хэлэлцэгдэхээр төлөвлөгдөж байна.',
      '“ТХГН-ийн хурдасгуур” менежмент сайжруулах үе шатад шилжинэ.',
      'Үр дүнд суурилсан санхүүжилтийг 2027 оны төсвийн жилээс туршина.',
      'Удирдах зөвлөл, Техникийн зохицуулах хорооны дараагийн хурлууд.'
    ],
    en: [
      'The revised PA law is before the State Great Khural, with the spring 2027 session in view.',
      'The PA Accelerator moves into its management improvement phase.',
      'Performance-based financing is piloted from fiscal year 2027.',
      'The next Board and Technical Coordination Committee meetings.'
    ]
  }
};

export const contents = [
  { id: 'numbers', kind: { mn: 'Тоогоор', en: 'Numbers' }, title: numbers.title, meta: { mn: '4-8 сар', en: 'April-August' } },
  { id: 'cop17', kind: { mn: 'Онцлох сэдэв', en: 'Lead' }, title: { mn: 'COP17', en: 'COP17' }, meta: { mn: '8 сарын 17-28', en: '17-28 August' } },
  { id: 'greenlab', kind: { mn: 'Онцлох', en: 'Feature' }, title: { mn: 'Үндэсний Ногоон Лаб', en: 'National Green Lab' }, meta: { mn: '4-8 сар', en: 'April-August' } },
  { id: 'governance', kind: { mn: 'Засаглал', en: 'Governance' }, title: governance.title, meta: { mn: '4-8 сар', en: 'April-August' } },
  { id: 'accelerator', kind: { mn: 'Грант', en: 'Grants' }, title: { mn: 'ТХГН-ийн хурдасгуур', en: 'The PA Accelerator' }, meta: { mn: '5 сарын 22', en: '22 May' } },
  { id: 'programmes', kind: { mn: 'Хөтөлбөр', en: 'Programmes' }, title: programmes.title, meta: { mn: '4-8 сар', en: 'April-August' } },
  { id: 'international', kind: { mn: 'Олон улс', en: 'International' }, title: international.title, meta: { mn: '4-8 сар', en: 'April-August' } },
  { id: 'annual-report', kind: { mn: 'Тайлан', en: 'Report' }, title: { mn: '2025 оны жилийн тайлан', en: 'Annual Report 2025' }, meta: { mn: 'Гарлаа', en: 'Out now' } },
  { id: 'communications', kind: { mn: 'Харилцаа', en: 'Comms' }, title: communications.title, meta: { mn: '4-8 сар', en: 'April-August' } }
];

/* ── National Green Lab: its own feature ─────────────────────────────────── */
export const greenlab = {
  id: 'greenlab',
  title: { mn: 'Үндэсний Ногоон Лаб', en: 'The National Green Lab' },
  meta: { mn: '4-8 сар', en: 'April-August' },
  image: '/news/l_orient.jpg',
  alt: { mn: 'Шалгарсан 15 төслийн багууд чиглүүлэх сургалтад', en: 'The 15 selected project teams at orientation' },
  caption: { mn: 'Шалгарсан 15 төслийн баг, Лхам галерей, 6 сарын 16.', en: 'The 15 selected teams at orientation, Lkham Gallery, 16 June.' },
  body: [
    { t: 'p', lead: true,
      mn: 'Ерөнхийлөгчийн Тамгын газрын санаачилгаар, Монголын Байгалийн Өв Сан, Монголын Бизнесийн Зөвлөл хамтран хэрэгжүүлж буй Үндэсний Ногоон Лаб нь ногоон санааг банкны санхүүжилт авах боломжтой бизнес болгох зорилготой.',
      en: 'The National Green Lab exists to turn green ideas into businesses a bank can finance. It was initiated by the Office of the President and is jointly implemented by MNLF and the Business Council of Mongolia.' },
    { t: 'funnel', steps: [
      ['135', { mn: 'ирүүлсэн төсөл', en: 'proposals' }],
      ['71', { mn: 'шаардлага хангасан', en: 'eligible' }],
      ['30', { mn: 'танилцуулгын шат', en: 'pitch stage' }],
      ['15', { mn: 'шалгарсан', en: 'selected' }] ] },
    { t: 'p',
      mn: 'Өргөдөл 4 сарын 22-нд хаагдаж, 5 сарын 1-нээс хараат бус Техникийн үнэлгээний хороо ажиллав. Ирсэн 135 төслөөс 71 нь шаардлага хангаж, 30 нь танилцуулгын шатанд шалгарч, эцэст нь 15 төсөл сонгогдов.',
      en: 'Applications closed on 22 April and an independent Technical Evaluation Committee began work on 1 May. Of 135 proposals, 71 were eligible, 30 reached the pitch stage and 15 were selected.' },
    { t: 'inset', src: '/news/l_master.jpg',
      alt: { mn: 'Мастер класс сургалт', en: 'A masterclass session' },
      cap: { mn: 'Нөлөөллийн хөрөнгө оруулалтын мастер класс, 6 сарын 30.', en: 'Impact investing masterclass, 30 June.' } },
    { t: 'p',
      mn: 'Сонгогдсон багууд 6 сарын 16-нд чиглүүлэх сургалтад хамрагдаж, дараа нь мастер класс цуврал үргэлжилсэн. 6 сарын 30-ны сургалтыг Capital Markets Mongolia-гийн Гүйцэтгэх захирал Золбаяр, тогтвортой санхүүжилт хариуцсан захирал Нандин-Эрдэнэ нар нөлөөллийн хөрөнгө оруулалт, хөрөнгө оруулагчтай харилцах сэдвээр удирдав.',
      en: 'The teams began with orientation on 16 June, followed by a masterclass series. On 30 June, Zolbayar, CEO of Capital Markets Mongolia, and Nandin-Erdene, its Director of Sustainable Finance, led the session on impact investing and investor relations.' },
    { t: 'quote',
      mn: 'Монголын “цагаан алт” болох хонины ноосыг орчин үеийн технологитой хослуулж, уламжлалт синтетик шүүлтүүрийг бүрэн задардаг, өндөр чанартай хувилбараар орлуулахыг зорьж байна.',
      en: 'By combining Mongolia’s ‘white gold’, sheep’s wool, with modern technology, we aim to replace conventional synthetic filters with a fully biodegradable, high-performance alternative.',
      by: { mn: 'А.Билгүүтэй, Airee Felt', en: 'A. Bilguutei, Chief Marketing Officer, Airee Felt' } },
    { t: 'p',
      mn: 'Төслүүд газар дээрх асуудлыг шийднэ. Монполимет группийн “Build Green Land” нь уул уурхайн эвдэрсэн, орхигдсон талбайг нөхөн сэргээж, бэлчээрийг сэргээнэ. URECA хиймэл оюун ухаанаар бэлчээрийн мониторингийг автоматжуулж, мэдээлэл цуглуулах хугацаа, зардлыг бууруулна.',
      en: 'The projects work on the ground. Monpolymet Group’s Build Green Land restores degraded and abandoned mining sites back to working pasture. URECA uses artificial intelligence to automate rangeland monitoring, cutting the time and cost of collecting data.' },
    { t: 'pair', items: [
      { src: '/news/l_orient-1.jpg', alt: { mn: 'Төслийн багууд', en: 'Project teams' }, cap: { mn: 'Чиглүүлэх сургалт.', en: 'Orientation.' } },
      { src: '/news/l_master-3.jpg', alt: { mn: 'Мастер классын оролцогчид', en: 'Masterclass participants' }, cap: { mn: 'Мастер класс цуврал.', en: 'Masterclass series.' } } ] },
    { t: 'p',
      mn: 'COP17-ын үеэр төслүүд хөрөнгө оруулагчдын өмнө гарав. 8 сарын 20-нд “Байгаль” павильонд Бизнесийн өдөр, 8 сарын 24-нд Цэнхэр бүсэд хоёр арга хэмжээ болж, Монголын бэлчээрт зориулсан банкны санхүүжилт авах боломжтой 7 шийдэл, Бэлчээрийн хөрөнгө оруулалтын форумын хүрээнд 8 төсөл танилцуулагдлаа.',
      en: 'At COP17 the projects went in front of investors: Business Day at the Nature Pavilion on 20 August, then two Blue Zone events on 24 August, with seven bankable rangeland solutions pitched in one and eight projects at the Rangeland Investment Forum showcase in the other.' },
    { t: 'p',
      mn: 'Үр дүн нь: EBRD болон Голомт банк анхны төслүүдэд санхүүжилт, техникийн туслалцаа үзүүлэхээр болов. Лабораториос банк хүртэлх зам ажиллаж эхэллээ.',
      en: 'The result: EBRD and Golomt Bank will provide financing and technical assistance to the first projects. The route from lab to bank is now open.' }
  ]
};

/* ── Governance and international as news briefs, read in place ─────── */
export const govNews = [
  {
    "img": "/news/g_board19.jpg",
    "date": "08.04",
    "tag": {
      "mn": "Удирдах зөвлөл",
      "en": "Board"
    },
    "title": {
      "mn": "Удирдах зөвлөл эхний хагас жилийн хэрэгжилтийг хянав",
      "en": "Board reviews the first half of 2026"
    },
    "dek": {
      "mn": "Удирдах зөвлөлийн 19 дүгээр ээлжит хурал 2026 оны 8 дугаар сарын 4-нд болов. Хурлаар Байгаль орчин, уур амьсгалын өөрчлөлтийн яам, Дэ Нэйче Консерванситай хамтран хэрэгжүүлж буй “Өнө мөнхийн Монгол” БХБС-ийн 2026 оны үйл ажиллагааны төлөвлөгөөний эхний хагас жилийн хэрэгжилтийг хянав. Удирдах зөвлөлийн санал, зөвлөмжийг төлөвлөгөөнд тусгасан. Мөн хоёр долоо хоногийн дараа Улаанбаатарт нээгдсэн UNCCD COP17-ын бэлтгэл ажлын талаарх мэдээллийг сонсов.",
      "en": "The Board of Directors held its 19th regular meeting on 4 August 2026. It reviewed first-half progress on the 2026 Action Plan for Өнө мөнхийн Монгол, the Project Finance for Permanence initiative jointly implemented with the Ministry of Environment and Climate Change and The Nature Conservancy. The Board’s feedback and recommendations were incorporated into the plan. Members also received an update on preparations for UNCCD COP17, which opened in Ulaanbaatar two weeks later."
    }
  },
  {
    "img": "/news/g_minister.jpg",
    "date": "04.16",
    "tag": {
      "mn": "Удирдах зөвлөл",
      "en": "Board"
    },
    "title": {
      "mn": "Сайд, Удирдах зөвлөл хамтын ажиллагааг гүнзгийрүүлнэ",
      "en": "Minister and Board agree to deepen cooperation"
    },
    "dek": {
      "mn": "Байгаль орчин, уур амьсгалын өөрчлөлтийн сайд Ц.Сандаг-Очир 4 дүгээр сарын 16-нд Удирдах зөвлөлийн дарга М.Болдоо, Дэ Нэйче Консервансийн Монгол дахь газрын захирал Д.Галбадрах, Удирдах зөвлөлийн гишүүн Ө.Азжаргал нарыг хүлээн авч уулзав. Уулзалтад ТХГН-ийн бодлогын газрын дарга Ц.Уранчимэг оролцов. Төлөөлөгчид хөтөлбөрийн зорилго, төлөвлөгөө, хэрэгжилтийн явц болон түүнийг санхүүжүүлэх итгэлцлийн санг бэхжүүлэх ажлын талаар танилцуулсан. Талууд ТХГН-ийн менежмент, санхүүжилтийн механизм, эрх зүйн орчны чиглэлээр хамтын ажиллагааг гүнзгийрүүлэхээр тохиров.",
      "en": "Minister of Environment and Climate Change Ts. Sandag-Ochir received representatives of the Board on 16 April: Chair M. Boldoo, D. Galbadrakh, Director of The Nature Conservancy in Mongolia, and Board member U. Azjargal, joined by Ts. Uranchimeg, Head of the Protected Areas Policy Department. They reported on the programme’s objectives, plans and progress, and on building up the trust fund that finances it. Both sides agreed to deepen cooperation on protected area management, financing mechanisms and the legal framework."
    }
  },
  {
    "img": "/news/g_tcc-3.jpg",
    "date": "07.01",
    "tag": {
      "mn": "Техникийн хороо",
      "en": "TCC"
    },
    "title": {
      "mn": "Техникийн зохицуулах хороо зургаа дахь удаагаа хуралдав",
      "en": "Technical committee meets for the sixth time"
    },
    "dek": {
      "mn": "Монгол Улсын Засгийн газар, Дэ Нэйче Консерванси, МБӨС хамтран хэрэгжүүлж буй “Өнө мөнхийн Монгол” хөтөлбөрийн Техникийн зохицуулах хороо 7 дугаар сарын 1-нд зургаа дахь, 2026 онд хоёр дахь удаагаа хуралдав. Гишүүд эхний хагас жилийн хэрэгжилт, үр дүнг хянаж, цаашдын тэргүүлэх чиглэлийг тодорхойлсон. Хөтөлбөрийн хүрээнд хөгжүүлж буй мэдээллийн системүүдийн уялдааг хангаж, нэгдсэн байдлаар зураглах, ижил чиглэлийн бусад хөтөлбөртэй хамтын ажиллагааг бэхжүүлэх зөвлөмж өгөв. Мөн “ТХГН-ийн хурдасгуур” хөтөлбөрийн явцыг танилцуулав.",
      "en": "The Technical Coordination Committee of Өнө мөнхийн Монгол, jointly implemented by the Government of Mongolia, The Nature Conservancy and MNLF, met on 1 July for the sixth time and the second in 2026. Members reviewed first-half progress and results and agreed priorities for the months ahead. They recommended making the programme’s information systems interoperable and mapping them together, and strengthening links with other programmes in the same field. Progress on the PA Accelerator was also presented."
    }
  },
  {
    "img": "/news/g_pbf-3.jpg",
    "date": "04.30",
    "tag": {
      "mn": "Санхүүжилт",
      "en": "Finance"
    },
    "title": {
      "mn": "Үр дүнд суурилсан төсөв 2027 оны туршилт руу",
      "en": "Performance-based budgets head for a 2027 pilot"
    },
    "dek": {
      "mn": "Байгаль орчны салбарт гүйцэтгэлд суурилсан санхүүжилтийн тогтолцоо нэвтрүүлэх ажлын хэсгийн гурав дахь хурал 4 дүгээр сарын 30-нд Сангийн яамны Чагдаржавын танхимд болов. Шинэчлэлийг Сангийн яам, Байгаль орчин, уур амьсгалын өөрчлөлтийн яам, МБӨС хамтран хэрэгжүүлж байна. Зөвлөхийн баг гүйцэтгэлийн үнэлгээний эхний шатны үр дүнг танилцуулав. Дараагийн шатанд ТХГН-ийн хамгаалалтын захиргаадын суурь зардал болон гүйцэтгэлд суурилсан санхүүжилтийг менежментийн төлөвлөгөөнд нь үндэслэн тогтоох аргачлал, журам боловсруулж, зардлын норм тооцно. Тогтолцоог 2027 оны төсвийн жилээс туршина.",
      "en": "The working group reforming environmental-sector funding around performance met for the third time on 30 April at the Ministry of Finance. The reform is jointly implemented by the Ministry of Finance, the Ministry of Environment and Climate Change and MNLF. Consultants presented the results of the first evaluation phase. The next phase will draft the methods and regulations for base-cost and performance-based funding of protected area administrations, tied to their management plans, and set cost norms. Administrations pilot the system from the 2027 fiscal year."
    }
  },
  {
    "img": "/news/g_method.jpg",
    "date": "07",
    "tag": {
      "mn": "Бодлого",
      "en": "Policy"
    },
    "title": {
      "mn": "Менежментийн төлөвлөгөөний шинэ аргачлал",
      "en": "A new method for management plans"
    },
    "dek": {
      "mn": "Байгаль орчин, уур амьсгалын өөрчлөлтийн яамны Төрийн нарийн бичгийн даргын тушаалаар байгуулагдсан ажлын хэсэг ТХГН-ийн менежментийн төлөвлөгөө боловсруулах аргачлалыг шинэчлэх анхны хурлаа хийв. GIZ-ийн шинжээч Торстен Хардер биологийн олон янз байдлын мониторингийг нотолгоонд суурилсан шийдвэрт ашиглах, яамны ахлах шинжээч Ц.Мөнхбат менежментийн төлөвлөгөөний өнөөгийн байдал, Найжел Дадли, Ханна Тимминс, Сью Столтон нар ТХГН-ийн замын зургийн явцын талаар танилцуулав. Ажлын хэсгийн ахлагч Ц.Уранчимэг газрын менежмент, аялал жуулчлал, хамгаалал, үр дүнд суурилсан төлөвлөлтийн дэд багуудыг байгуулав.",
      "en": "A working group established by the State Secretary of the Ministry of Environment and Climate Change held its first meeting to update the methodology for protected area management plans. Torsten Harder of GIZ spoke on using biodiversity monitoring for evidence-based decisions, Ts. Munkhbat of the Ministry on the current state of management plans, and Nigel Dudley, Hannah Timmins and Sue Stolton on the Protected Areas Roadmap. Working group lead Ts. Uranchimeg set up focused sub-teams on land management, tourism, conservation and results-based planning."
    }
  },
  {
    "img": "/news/g_uvur-3.jpg",
    "date": "05.14-15",
    "tag": {
      "mn": "Хууль",
      "en": "Law"
    },
    "title": {
      "mn": "ТХГН-ийн хуулийн төслийг аймгуудад хэлэлцэв",
      "en": "The protected areas law goes to the provinces"
    },
    "dek": {
      "mn": "Яамны удирдлага дор ажиллаж буй ажлын хэсэг Тусгай хамгаалалттай газар нутгийн тухай хуулийн шинэчилсэн төслийг 5 дугаар сард аймгуудад хэлэлцүүлэв. 5 дугаар сарын 14-нд Өвөрхангай аймгийн Хархорин суманд ажлын хэсгийн гишүүн С.Амартүвшин төслийг аймаг, сумын удирдлага, Орхоны хөндийн БЦГ-ын захиргаа, аялал жуулчлалын аж ахуйн нэгж, иргэд, малчдад танилцуулав. Баянхонгорт Их Богдын БЦГ, Бөөн Цагаан-Орог нуурын захиргаа оролцов. Оролцогчид малчдын өвөлжөө, хаваржааг урт хугацаанд тогтвортой ашиглах, орон нутгийн тусгай хамгаалалттай газар, Рамсарын конвенцоор хамгаалагдсан намгархаг газрын зохицуулалтад анхаарч, шинэчлэлийг цаг үеэ олсон гэж үзэв. Төслийг УИХ-д өргөн барьсан.",
      "en": "The Ministry-led working group took the revised Law on Protected Areas to the provinces in May. In Kharkhorin, Uvurkhangai, on 14 May, working group member S. Amartuvshin presented the draft to provincial and soum leaders, the Orkhon Valley National Park administration, tourism operators, residents and herders. In Bayankhongor the discussion brought in the Ikh Bogd National Park and Buun Tsagaan-Orog Lakes administrations. Participants focused on secure long-term use of herders’ winter and spring camps, local protected areas, and wetlands under the Ramsar Convention, and called the revision timely. The draft has since been submitted to the State Great Khural."
    }
  },
  {
    "img": "/news/g_galba.jpg",
    "date": "05.20 / 07.09",
    "tag": {
      "mn": "Шагнал",
      "en": "Recognition"
    },
    "title": {
      "mn": "Удирдах зөвлөлийн хоёр гишүүн шагнагдав",
      "en": "Two Board members honoured"
    },
    "dek": {
      "mn": "Удирдах зөвлөлийн хоёр гишүүн төрийн шагнал хүртэв. Удирдах зөвлөлийн дарга М.Болдоо банк, санхүүгийн салбарт гуч гаруй жил ажиллаж, хариуцлагатай, байгальд ээлтэй банкны жишгийг Монголд нэвтрүүлж, Дэлхийн банк, ОУВС-д Монгол Улсыг төлөөлж ажилласан гавьяагаар Монгол Улсын Гавьяат эдийн засагч цол хүртэв. Удирдах зөвлөлийн дэд дарга, Дэ Нэйче Консервансийн Монгол дахь газрын захирал Д.Галбадрах шинжлэх ухаанд суурилсан байгаль хамгааллын чиглэлээр бараг хорин жил ажиллаж, байгаль орчны 20 гаруй хууль, журам боловсруулахад хувь нэмэр оруулсан гавьяагаар Хөдөлмөрийн гавьяаны улаан тугийн одонгоор шагнагдав.",
      "en": "Two Board members received national honours. Chair M. Boldoo was named Merited Economist of Mongolia for more than three decades in banking and finance, including bringing responsible, environmentally conscious banking practice to Mongolia and representing the country at the World Bank and the IMF. Vice Chair D. Galbadrakh, Country Director of The Nature Conservancy in Mongolia, received the Order of the Red Banner of Labor for nearly twenty years of science-based conservation, including contributions to more than 20 environmental laws and regulations."
    }
  }
];

export const intlNews = [
  {
    "img": "/news/i_bhutan.jpg",
    "date": "05",
    "tag": {
      "mn": "Туршлага",
      "en": "Exchange"
    },
    "title": {
      "mn": "Бутанаас хуулийн туршлага судлав",
      "en": "Learning from Bhutan’s protected area law"
    },
    "dek": {
      "mn": "УИХ-ын гишүүн Бат-Эрдэнийн Бат-Өлзий, Байгаль орчин, уур амьсгалын өөрчлөлтийн яамны төлөөлөл, ТХГН-ийн хуулийн ажлын хэсгийн гишүүд Бутан Улсад тусгай хамгаалалттай газрын хууль тогтоомж, байгаль хамгааллын тогтвортой санхүүжилт, эко аялал жуулчлалын туршлага судлав. Бутаны байгальд түшиглэсэн аялал жуулчлалын бодлого, Тогтвортой хөгжлийн хураамж, Bhutan for Life хөтөлбөр, Бутаны итгэлцлийн сангийн загвартай танилцав. Бутан байгаль, соёл, орон нутгийн амьжиргаа, эдийн засгийн үр ашгийг холбож, байгаль хамгааллыг үндэсний хөгжлийн төвд тавьдаг. Айлчлалыг Бутаны Байгаль хамгааллын итгэлцлийн сан хүлээн авав.",
      "en": "A delegation of MP Bat-Erdene Bat-Ulzii, the Ministry of Environment and Climate Change and members of the Protected Area Law working group travelled to Bhutan to learn from its protected area legislation, conservation finance and ecotourism. They studied Bhutan’s nature-based tourism policy, its Sustainable Development Fee, the Bhutan for Life programme and the Bhutan Trust Fund model. Bhutan places conservation at the centre of national development, linking nature, culture, local livelihoods and economic benefit. The visit was hosted by the Bhutan Trust Fund for Environmental Conservation."
    }
  },
  {
    "img": "/record/gef.jpg",
    "date": "06.05",
    "tag": {
      "mn": "GEF",
      "en": "GEF"
    },
    "title": {
      "mn": "Самарканд дахь GEF-ийн 8 дугаар чуулган",
      "en": "The 8th GEF Assembly, Samarkand"
    },
    "dek": {
      "mn": "Самарканд хотноо 5 дугаар сарын 30-аас 6 дугаар сарын 6-ны хооронд “2030 он хүртэлх сүүлчийн спринт” сэдвээр болсон GEF-ийн 8 дугаар чуулганы 6 дугаар сарын 5-ны дээд түвшний дугуй ширээнд Гүйцэтгэх захирал Э.Номиндарь IUCN, FUNBIO, Enduring Earth, GEF-ийн Жижиг тэтгэлгийн хөтөлбөрийн төлөөлөлтэй хамт оролцов. Тэрээр нутгийн иргэдэд урт хугацааны, шууд, хүртээмжтэй санхүүжилт хүргэх, байгаль хамгааллын итгэлцлийн сангийн гүйцэтгэх үүргийн талаар нутгийн иргэдэд түшиглэсэн менежментийн холимог санхүүжилтийн туршлагад үндэслэн ярив. Мөн Дэлхийн банк, Дэ Нэйче Консерванси, Enduring Earth-ийн оролцсон БХБС-ийн загварын хэлэлцүүлэгт нэгдэв.",
      "en": "At the 8th GEF Assembly in Samarkand (30 May to 6 June), themed “Last Sprint Towards 2030”, CEO Nomindari Enkhtur joined the 5 June high-level roundtable on financing strategies for leaving no one behind, with IUCN, FUNBIO, Enduring Earth and the GEF Small Grants Programme. She argued for long-term, direct and accessible funding for local communities and set out the role conservation trust funds can play, drawing on blended finance for community-based natural resource management. The foundation also joined a session on the Project Finance for Permanence model with the World Bank, The Nature Conservancy and Enduring Earth."
    }
  },
  {
    "img": "/record/llf.jpg",
    "date": "06.18",
    "tag": {
      "mn": "Түншлэл",
      "en": "Partner"
    },
    "title": {
      "mn": "Legacy Landscapes Fund айлчлав",
      "en": "Legacy Landscapes Fund visits"
    },
    "dek": {
      "mn": "6 дугаар сарын 18-нд Германы Эдийн засгийн хамтын ажиллагаа, хөгжлийн яамны дэргэдэх Өвлөгдөн үлдэх газар нутаг сангийн Удирдах зөвлөлийн дарга төлөөлөгчдийн хамт сангийн оффист зочлов. Тус сан Дэ Нэйче Консерванси, WWF-ийн Монгол дахь газрын хэрэгжүүлж буй Онон-Балжийн БЦГ-ын хөтөлбөрийг дэмждэг. Уулзалтаар уг хөтөлбөрийг “Өнө мөнхийн Монгол”-той уялдуулж, стратегийн нийцлийг хангах асуудлыг голчлон хэлэлцэв.",
      "en": "On 18 June the chair of the Legacy Landscapes Fund Management Board, established under Germany’s Federal Ministry for Economic Cooperation and Development, visited the foundation’s office with a delegation. The fund supports the Onon-Balj National Park programme run by The Nature Conservancy and WWF Mongolia. Talks focused on aligning that programme with Өнө мөнхийн Монгол so the two remain strategically consistent."
    }
  },
  {
    "img": "/news/i_parrish.jpg",
    "date": "06.16",
    "tag": {
      "mn": "TNC",
      "en": "TNC"
    },
    "title": {
      "mn": "Сайд TNC-ийн Жеффри Паришийг хүлээн авав",
      "en": "The Minister receives TNC’s Jeffrey Parrish"
    },
    "dek": {
      "mn": "Байгаль орчин, уур амьсгалын өөрчлөлтийн сайд Ц.Сандаг-Очир “Өнө мөнхийн Монгол” хөтөлбөрийн хүрээнд Дэ Нэйче Консервансийн Байгаль хамгааллын захирал Жеффри Паришийг хүлээн авч санал солилцов. Уулзалтад яамны ТХГН-ийн бодлогын газрын дарга Ц.Уранчимэг, Олон улсын хамтын ажиллагааны хэлтсийн дарга Д.Ариунтуяа, сангийн Удирдах зөвлөлийн дарга М.Болдоо, Гүйцэтгэх захирал Э.Номиндарь нар оролцов.",
      "en": "Minister of Environment and Climate Change Ts. Sandag-Ochir received Jeffrey Parrish, Conservation Director of The Nature Conservancy, to exchange views on Өнө мөнхийн Монгол. Ts. Uranchimeg, Head of the Protected Areas Policy Department, and D. Ariuntuya, Head of International Cooperation, joined for the Ministry, together with Board Chair M. Boldoo and CEO E. Nomindari."
    }
  },
  {
    "img": "/news/i_glf-3.jpg",
    "date": "06",
    "tag": {
      "mn": "GLF26",
      "en": "GLF26"
    },
    "title": {
      "mn": "Найроби дахь Global Landscapes Forum",
      "en": "Global Landscapes Forum, Nairobi"
    },
    "dek": {
      "mn": "Удирдах зөвлөлийн нярав Ө.Азжаргал Кени Улсын Найроби хотноо болсон Global Landscapes Forum-д сангийг төлөөлж, “Өнө мөнхийн Монгол”-ын ажлыг танилцуулав. Түүний гол санаа: бэлчээр, тал хээр бол “хоосон газар” бус, олон сая хүнийг тэтгэдэг эдийн засаг, экологи, уур амьсгалын хөрөнгө юм. Тэрээр нүүдлийн мал аж ахуй уур амьсгалын өөрчлөлтөд тэсвэртэй байдлын үндэс болохыг, малчдын мэдлэг бэлчээрийн бодлогыг тодорхойлох ёстойг, байгаль хамгааллын санхүүжилт бэлчээрийг биологийн олон янз байдалд оруулах урт хугацааны хувь нэмрээр нь үнэлэх шаардлагатайг онцлов.",
      "en": "Board Treasurer U. Azjargal represented the foundation at the Global Landscapes Forum in Nairobi, presenting the work of Өнө мөнхийн Монгол. Her message: rangelands and grasslands are not empty land but economic, ecological and climate assets that support millions of people. She argued that mobile pastoral systems are essential to climate resilience, that herders’ knowledge must shape rangeland policy, and that conservation finance should value rangelands for their long-term contribution to biodiversity."
    }
  },
  {
    "img": "/news/i_gabor-3.jpg",
    "date": "06.22-26",
    "tag": {
      "mn": "Бэлчээр",
      "en": "Rangelands"
    },
    "title": {
      "mn": "Габороне дахь тогтвортой бэлчээрийн форум",
      "en": "Sustainable Rangelands Forum, Gaborone"
    },
    "dek": {
      "mn": "Ботсвана Улсын Засгийн газар, IUCN, FAO-гийн хамтран COP17-ыг угтаж Габороне хотноо 6 дугаар сарын 22-26-нд зохион байгуулсан Тогтвортой бэлчээрийн хувийн хэвшлийн дэлхийн форумын “Бэлчээрийг санхүүжүүлэх нь” панелд Төгсбуян М. Дэлхийн банк, Ambition Loop-ийн төлөөлөлтэй хамт илтгэл тавив. Тэрээр “Өнө мөнхийн Монгол” механизм болон түүн дээр тулгуурласан Ногоон малчны зээл, Үндэсний Ногоон Лаб, Байгальд ээлтэй бизнесийн эвсэл гэсэн гурван санаачилгыг танилцуулав.",
      "en": "At the Global Private Sector Forum on Sustainable Rangelands in Gaborone, Botswana (22 to 26 June), co-organized by the Government of Botswana, IUCN and FAO as a pre-event to COP17, Tugsbuyan M. spoke on the Financing Rangelands panel alongside the World Bank and Ambition Loop. She presented the Өнө мөнхийн Монгол mechanism and three initiatives built on it: the Green Herder Loan, the National Green Lab and the Nature Positive Business Coalition."
    }
  },
  {
    "img": "/news/i_bhutdel.jpg",
    "date": "04.24",
    "tag": {
      "mn": "БХБС",
      "en": "PFP"
    },
    "title": {
      "mn": "Бутаны төлөөлөгчид Улаанбаатарт",
      "en": "Bhutan’s delegation in Ulaanbaatar"
    },
    "dek": {
      "mn": "Уур амьсгалын өөрчлөлтөд дасан зохицох инноваци, нутгийн иргэдэд түшиглэсэн байгалийн нөөцийн менежментийн бага хурлын үеэр Бутаны Усны газрын захирал Дэчэн Янгдэн тэргүүтэй усны болон байгалийн нөөцийн мэргэжилтнүүд санд зочлов. Гүйцэтгэх захирал Э.Номиндарь сангийн эрхэм зорилго, урт хугацааны байгаль хамгааллыг дэмжих стратегийг танилцуулав. Монгол, Бутан хоёр Азид БХБС-ийг амжилттай хэрэгжүүлж буй цорын ганц хоёр орон бөгөөд талууд байгаль хамгаалал, хамтын менежментийн туршлагаа харилцан солилцов.",
      "en": "During a conference on climate adaptation innovation and community-based natural resource management in Mongolia, Bhutanese hydrology and natural resource experts led by Dechen Yangden, Director of the Department of Water, visited the foundation. CEO Nomindari Enkhtur presented its mission and its strategy for long-term conservation. Mongolia and Bhutan are currently the only two countries in Asia implementing a Project Finance for Permanence, and the two sides compared their approaches to conservation and community-based resource management."
    }
  },
  {
    "img": "/news/i_acbk-3.jpg",
    "date": "08.05",
    "tag": {
      "mn": "БХБС",
      "en": "PFP"
    },
    "title": {
      "mn": "Казахстаны ACBK, TNC-ийн Эдди Гэйм",
      "en": "Kazakhstan’s ACBK and TNC’s Eddie Game"
    },
    "dek": {
      "mn": "8 дугаар сарын 5-нд Казахстаны Биологийн олон янз байдлыг хамгаалах холбооны (ACBK) Гүйцэтгэх захирал Вера Воронова, Байгаль хамгааллын захирал Алёна Кривошеева, Дэ Нэйче Консервансийн Ази, Номхон далайн бүсийн ахлах эрдэмтэн, байгаль хамгааллын захирал Эдди Гэйм нар санд зочлов. Уулзалтаар БХБС-ийн загвар, “Өнө мөнхийн Монгол”-ын хэрэгжилтийн ерөнхий аргачлал, өнөөгийн шат, сангийн чиг үүрэг, үйл ажиллагааны талаар дэлгэрэнгүй ярилцав.",
      "en": "On 5 August the foundation hosted Vera Voronova, Executive Director, and Alyona Krivosheyeva, Conservation Director, of the Association for the Conservation of Biodiversity of Kazakhstan, together with Eddie Game, Lead Scientist and Director of Conservation for Asia Pacific at The Nature Conservancy. Discussion centred on the Project Finance for Permanence model: how Өнө мөнхийн Монгол is being implemented, where it stands, and how the foundation’s mandate works in practice."
    }
  },
  {
    "img": null,
    "date": "07.20",
    "tag": {
      "mn": "Гишүүнчлэл",
      "en": "Membership"
    },
    "title": {
      "mn": "Conservation Finance Alliance-д элсэв",
      "en": "Joined the Conservation Finance Alliance"
    },
    "dek": {
      "mn": "Сан 7 дугаар сарын 20-нд Conservation Finance Alliance-д байгууллагын гишүүнээр элсэв. Тус холбоо бол байгаль хамгааллын санхүүжилт, биологийн олон янз байдлыг хамгаалах эдийн засгийн шинэ механизм хөгжүүлэх чиглэлийн дэлхийн тэргүүлэх мэргэжлийн сүлжээ юм. Гишүүнчлэл олон улсын санхүүгийн мэдлэг туршлагыг Монголд газар дээр хийгдэж буй байгаль хамгааллын ажилтай холбож өгнө.",
      "en": "The foundation joined the Conservation Finance Alliance as an institutional member on 20 July. The alliance is the leading global professional network for conservation finance and for developing new economic mechanisms to protect biodiversity. Membership connects international finance expertise with conservation work on the ground in Mongolia."
    }
  }
];
