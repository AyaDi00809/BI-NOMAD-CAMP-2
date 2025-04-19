const langData = {
    ru: {
        title: "BI NOMAD CAMP",
        welcome: "Добро пожаловать в мир приключений, вдохновения и знаний!",
        aboutTitle: "О проекте",
        aboutText: "BI NOMAD CAMP — это уникальное пространство для подростков и молодежи, где каждый день наполнен энергией, открытиями и новыми знакомствами.",
        infoTitle: "О лагере",
        infoText: "BI NOMAD CAMP — это лагерь нового формата, где сочетаются личностный рост, технологии, спорт и арт-проекты.",
        programTitle: "Программа",
        programText: "Каждый день — это мастер-классы, outdoor-челленджи, командные игры и вечерние мероприятия.",
        scheduleTitle: "Расписание",
        scheduleText: "С 1 по 15 июля: зарядка, завтрак, занятия, обед, активность, вечерняя программа, костер.",
        contactTitle: "Контакты",
        contactText: "📧 Email: <br>📞 Телефон:<br>📍 Местоположение: Казахстан",
        extraTitle: "Дополнительная информация",
        extraText: "Здесь можно разместить любой дополнительный текст — вдохновляющий месседж, детали о бонусах, отзывы и т.д."
    },
    kz: {
        title: "BI NOMAD CAMP",
        welcome: "Шабыт пен білімге толы оқиғалар әлеміне қош келдіңіз!",
        aboutTitle: "Жоба туралы",
        aboutText: "BI NOMAD CAMP — бұл жасөспірімдер мен жастарға арналған ерекше кеңістік, әр күні энергия мен жаңа таныстықтарға толы.",
        infoTitle: "Лагерь туралы",
        infoText: "BI NOMAD CAMP — бұл жаңа форматтағы лагерь, жеке даму, технологиялар, спорт және өнер жобалары біріктірілген орын.",
        programTitle: "Бағдарлама",
        programText: "Күн сайын — шеберлік сағаттар, outdoor-челлендждер, командалық ойындар және кешкі іс-шаралар.",
        scheduleTitle: "Кесте",
        scheduleText: "1–15 шілде аралығы: таңғы жаттығу, таңғы ас, сабақтар, түскі ас, белсенділік, кешкі бағдарлама, от жанында отырыс.",
        contactTitle: "Байланыс",
        contactText: "📧 Email: <br>📞 Телефон:<br>📍 Орналасуы: Қазақстан",
        extraTitle: "Қосымша ақпарат",
        extraText: "Мұнда қосымша ақпарат орналастыруға болады — шабыттандыратын хабарламалар, бонустар, пікірлер және т.б."
    }
};

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'ru' ? 'kz' : 'ru';
    document.documentElement.lang = newLang;
    setLanguage(newLang);
}

function setLanguage(lang) {
    const langContent = langData[lang];
    document.getElementById('title-text').textContent = langContent.title;
    document.getElementById('welcome').textContent = langContent.welcome;
    document.getElementById('about-title').textContent = langContent.aboutTitle;
    document.getElementById('about-text').textContent = langContent.aboutText;
    document.getElementById('info-title').textContent = langContent.infoTitle;
    document.getElementById('info-text').textContent = langContent.infoText;
    document.getElementById('program-title').textContent = langContent.programTitle;
    document.getElementById('program-text').textContent = langContent.programText;
    document.getElementById('schedule-title').textContent = langContent.scheduleTitle;
    document.getElementById('schedule-text').textContent = langContent.scheduleText;
    document.getElementById('contact-title').textContent = langContent.contactTitle;
    document.getElementById('contact-text').innerHTML = langContent.contactText;
    document.getElementById('extra-title').textContent = langContent.extraTitle;
    document.getElementById('extra-text').textContent = langContent.extraText;
}

window.onload = () => {
    const initialLang = document.documentElement.lang === 'kz' ? 'kz' : 'ru';
    setLanguage(initialLang);
};
