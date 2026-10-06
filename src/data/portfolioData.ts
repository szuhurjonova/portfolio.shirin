export interface PersonalDetails {
  fullName: string;
  shortName: string;
  birthDate: string;
  birthDateFormatted: string;
  age: number;
  primaryLanguage: string;
  learningLanguages: string[];
  primaryFocus: string[];
  hobbies: string[];
  contacts: {
    email: string;
    phone: string;
    phoneRaw: string;
    telegram: string;
    telegramUrl: string;
    instagram: string;
    instagramUrl: string;
  };
}

export const PERSONAL_DATA: PersonalDetails = {
  fullName: "Zuhurjonova Shirin Shohruh qizi",
  shortName: "Shirin",
  birthDate: "13.07.2013",
  birthDateFormatted: "13-iyul, 2013-yil",
  age: 13,
  primaryLanguage: "O'zbek tili (Ona tili)",
  learningLanguages: [
    "Nemis tili (Deutsch)",
    "Ingliz tili (English)",
    "Rus tili (Русский)",
  ],
  primaryFocus: [
    "Axborot Texnologiyalari (IT) & Dasturlash",
    "Nemis tili (Deutsch)",
    "Ingliz tili (English)",
  ],
  hobbies: [
    "Rasm chizish (Drawing)",
    "Kitob o'qish (Reading)",
  ],
  contacts: {
    email: "szuhurjonova@gmail.com",
    phone: "+998 50 179 9115",
    phoneRaw: "+998501799115",
    telegram: "@szuhurjonova",
    telegramUrl: "https://t.me/szuhurjonova",
    instagram: "@s_zuhurjonova_07",
    instagramUrl: "https://instagram.com/s_zuhurjonova_07",
  },
};

export interface SkillItem {
  id: string;
  name: string;
  category: 'it' | 'language';
  levelText: string;
  percent: number;
  description: string;
  tags: string[];
  iconName: string;
}

export const SKILLS_DATA: SkillItem[] = [
  // IT Skills
  {
    id: "web-fundamentals",
    name: "Web Dasturlash (HTML & CSS)",
    category: "it",
    levelText: "Asosiy & Amaliy",
    percent: 85,
    description: "Veb-sahifalar tuzilishi, zamonaviy semantik HTML teglari va CSS yordamida chiroyli dizaynlar yaratish.",
    tags: ["HTML5", "CSS3", "Moslashuvchan dizayn", "Web asoslari"],
    iconName: "Code2",
  },
  {
    id: "programming-logic",
    name: "Algoritmik Mantiq & Dasturlash",
    category: "it",
    levelText: "O'rganilmoqda",
    percent: 78,
    description: "Mantiqiy fikrlash, shart operatorlari, sikllar va bosqichma-bosqich algoritmlar tuzish qobiliyati.",
    tags: ["Mantiq", "Algoritmlar", "Muammo yechish", "Funksiyalar"],
    iconName: "BrainCircuit",
  },
  {
    id: "python-basics",
    name: "Python Asoslari",
    category: "it",
    levelText: "Boshlang'ich-O'rta",
    percent: 70,
    description: "Python sintaksisi, o'zgaruvchilar, ro'yxatlar, matnlar bilan ishlash va kichik qiziqarli dasturlar yaratish.",
    tags: ["Python 3", "Oddiy skriptlar", "Mantiq", "IT ta'limi"],
    iconName: "Laptop",
  },
  {
    id: "visual-coding",
    name: "Vizual Dasturlash & Scratch",
    category: "it",
    levelText: "Yuqori daraja",
    percent: 90,
    description: "Blokli dasturlash orqali interaktiv o'yinlar, multfilmlar va animatsion loyihalarni mustaqil qurish.",
    tags: ["Scratch", "O'yin mexanikasi", "Animatsiya", "Ijodkorlik"],
    iconName: "Sparkles",
  },
  {
    id: "computer-literacy",
    name: "Kompyuter Savodxonligi & Office",
    category: "it",
    levelText: "Mukammal",
    percent: 95,
    description: "Operatsion tizimlardan erkin foydalanish, tez yozish, taqdimotlar va hujjatlar bilan professional ishlash.",
    tags: ["Windows/Mac", "Google Docs", "Taqdimotlar", "Xavfsiz internet"],
    iconName: "Award",
  },
  {
    id: "ui-ux-design",
    name: "UI/UX & Dizayn Sezgisi",
    category: "it",
    levelText: "Rivojlanmoqda",
    percent: 75,
    description: "Ranglar uyg'unligi, zamonaviy shriftlar tanlovi va foydalanuvchiga qulay interfeyslarni his qilish.",
    tags: ["Ranglar", "Tipografika", "Kompozitsiya", "Foydalanuvchi tajribasi"],
    iconName: "Palette",
  },

  // Languages
  {
    id: "uzbek-lang",
    name: "O'zbek Tili",
    category: "language",
    levelText: "Ona tili (Mukammal)",
    percent: 100,
    description: "Ona tilim — nutq, adabiyot, grammatika va fikrni ravon, ifodali bayon etishda to'liq mahorat.",
    tags: ["Ona tili", "Adabiyot", "Ravon nutq", "Yozma savodxonlik"],
    iconName: "Languages",
  },
  {
    id: "english-lang",
    name: "Ingliz Tili (English)",
    category: "language",
    levelText: "Faol o'rganilmoqda (A2-B1)",
    percent: 75,
    description: "IT terminologiyasi, darsliklar mutolaasi, audio eshitish va kundalik erkin muloqot ko'nikmalari.",
    tags: ["IT English", "Grammar", "Speaking", "Vocabulary"],
    iconName: "Globe",
  },
  {
    id: "german-lang",
    name: "Nemis Tili (Deutsch)",
    category: "language",
    levelText: "Quvonch bilan o'rganilmoqda (A1-A2)",
    percent: 65,
    description: "Nemis tili fonetikasi, grammatik strukturalar, suhbat dialoglari va yangi so'zlarni muntazam yodlash.",
    tags: ["Deutsch A1/A2", "Wortschatz", "Aussprache", "Muloqot"],
    iconName: "Globe",
  },
  {
    id: "russian-lang",
    name: "Rus Tili (Русский язык)",
    category: "language",
    levelText: "Erkin tushunish & Suhbat",
    percent: 80,
    description: "Adabiyotlarni tushunish, erkin so'zlashuv va kundalik mavzularda do'stona suhbat qurish tajribasi.",
    tags: ["Разговорный", "Чтение", "Понимание", "Практика"],
    iconName: "Globe",
  },
];

export interface BookItem {
  id: string;
  title: string;
  author: string;
  language: string;
  category: string;
  status: 'O\'qilgan' | 'Hozir o\'qilmoqda' | 'Rejada';
  notes: string;
}

export const BOOKS_DATA: BookItem[] = [
  {
    id: "1",
    title: "Bolalar uchun Python Dasturlash",
    author: "Jeyson Briggs",
    language: "O'zbek / Rus",
    category: "IT & Dasturlash",
    status: "O'qilgan",
    notes: "O'yinlar va animatsiyalar orqali Python kodlashni o'rgatuvchi ajoyib amaliy qo'llanma.",
  },
  {
    id: "2",
    title: "Kichik Shahzoda (Der kleine Prinz)",
    author: "Antuan de Sent-Ekzyuperi",
    language: "Nemis & O'zbek",
    category: "Jahon Adabiyoti",
    status: "O'qilgan",
    notes: "Do'stlik, mehr va dunyoni yurak bilan his qilish haqidagi sehrli asar. Nemis tilida o'qish juda maroqli bo'ldi.",
  },
  {
    id: "3",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    language: "Ingliz tili",
    category: "Fantastika / Til o'rganish",
    status: "Hozir o'qilmoqda",
    notes: "Ingliz tilidagi lug'at boyligini oshirish va sehrli dunyo sarguzashtlariga sho'ng'ish uchun ajoyib kitob.",
  },
  {
    id: "4",
    title: "Sariq devni minib",
    author: "Xudoyberdi To'xtaboyev",
    language: "O'zbek tili",
    category: "O'zbek Adabiyoti",
    status: "O'qilgan",
    notes: "Hoshimjonning sarguzashtlari orqali mehnatsevarlik va ilmning qadrini o'rgatuvchi qiziqarli kitob.",
  },
  {
    id: "5",
    title: "Stiv Jobs: Bolalar uchun ilhom darslari",
    author: "Texnologiya seriyasi",
    language: "O'zbek tili",
    category: "Biografiya & IT",
    status: "O'qilgan",
    notes: "Qanday qilib orzu va qat'iyat bilan butun dunyo texnologiyasini o'zgartirish mumkinligi haqida ilhom baxsh etdi.",
  },
  {
    id: "6",
    title: "Essential English Grammar in Use",
    author: "Raymond Murphy",
    language: "Ingliz tili",
    category: "Til ta'limi",
    status: "Hozir o'qilmoqda",
    notes: "Ingliz tili grammatikasini mustahkamlash uchun har kuni bir nechta mashq bajaramiz.",
  },
];

export interface ArtworkItem {
  id: string;
  title: string;
  category: string;
  tool: string;
  description: string;
  themeColor: string;
}

export const ARTWORKS_DATA: ArtworkItem[] = [
  {
    id: "art-1",
    title: "Kiber Olam va Yulduzlar",
    category: "Raqamli Eskiz",
    tool: "Grafik planshet & Qalam",
    description: "Kelajak texnologiyalari va yorqin koinot yulduzlari tasvirlangan ilhomlantiruvchi kompozitsiya.",
    themeColor: "from-cyan-500/20 to-blue-600/30",
  },
  {
    id: "art-2",
    title: "Tog'lar va Bahor nafasi",
    category: "Rangli Akvarel",
    tool: "Akvarel bo'yoqlari",
    description: "Tabiatning go'zalligi va bahorning musaffo havosini ifodalovchi yorqin ranglardagi manzara.",
    themeColor: "from-emerald-500/20 to-teal-600/30",
  },
  {
    id: "art-3",
    title: "Sehrli Kutubxona burchagi",
    category: "Qalamda chizilgan eskiz",
    tool: "Grafit qalamlar (B2-B6)",
    description: "Kitoblar bilan to'la shinam xona va iliq stol chirog'i tasviri — mening sevimli o'qish muhitim.",
    themeColor: "from-purple-500/20 to-indigo-600/30",
  },
  {
    id: "art-4",
    title: "Kelajak Shahri & IT Laboratoriyasi",
    category: "Konseptual san'at",
    tool: "Raqamli illyustratsiya",
    description: "Yashil texnologiyalar va aqlli robotlar uyg'unlashgan zamonaviy kelajak shaharchasi.",
    themeColor: "from-pink-500/20 to-purple-600/30",
  },
];

export interface PhraseItem {
  uzbek: string;
  german: string;
  english: string;
  russian: string;
  topic: string;
}

export const MULTILINGUAL_PHRASES: PhraseItem[] = [
  {
    topic: "Salomlashish",
    uzbek: "Assalomu alaykum! Mening ismim Shirin.",
    german: "Hallo! Mein Name ist Shirin.",
    english: "Hello! My name is Shirin.",
    russian: "Здравствуйте! Меня зовут Ширин.",
  },
  {
    topic: "Qiziqish (IT)",
    uzbek: "Men axborot texnologiyalarini juda yaxshi ko'raman.",
    german: "Ich liebe Informationstechnologie sehr.",
    english: "I really love information technology.",
    russian: "Я очень люблю информационные технологии.",
  },
  {
    topic: "Xobbi",
    uzbek: "Bo'sh vaqtimda rasm chizaman va kitob o'qiyman.",
    german: "In meiner Freizeit zeichne ich und lese Bücher.",
    english: "In my free time, I draw and read books.",
    russian: "В свободное время я рисую и читаю книги.",
  },
  {
    topic: "Kelajak maqsadi",
    uzbek: "Kelajakda katta loyihalar yaratadigan dasturchi bo'lmoqchiman.",
    german: "In Zukunft möchte ich Entwicklerin werden.",
    english: "In the future, I want to become a software engineer.",
    russian: "В будущем я хочу стать разработчиком программного обеспечения.",
  },
];
