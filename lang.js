function toggleSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = (section.id === id && section.style.display !== 'block') ? 'block' : 'none';
    });
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const ru = {
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
    };
    const kz = {
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
    };

    const langData = currentLang === 'ru' ? kz : ru;
    document.documentElement.lang = currentLang === 'ru' ? 'kz' : 'ru';

    document.getElementById('title-text').textContent = langData.title;
    document.getElementById('welcome').textContent = langData.welcome;
    document.getElementById('about-title').textContent = langData.aboutTitle;
    document.getElementById('about-text').textContent = langData.aboutText;
    document.getElementById('info-title').textContent = langData.infoTitle;
    document.getElementById('info-text').textContent = langData.infoText;
    document.getElementById('program-title').textContent = langData.programTitle;
    document.getElementById('program-text').textContent = langData.programText;
    document.getElementById('schedule-title').textContent = langData.scheduleTitle;
    document.getElementById('schedule-text').textContent = langData.scheduleText;
    document.getElementById('contact-title').textContent = langData.contactTitle;
    document.getElementById('contact-text').innerHTML = langData.contactText;
    document.getElementById('extra-title').textContent = langData.extraTitle;
    document.getElementById('extra-text').textContent = langData.extraText;
}
