import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: { 
        "sections" : "Seções",
        "projects" : "Projetos",
        "contact" : "Contato",
        "language" : "Idioma",
        "fullstack" : "Desenvolvedor Full Stack",
        "interest" : "Meu interesse em tecnologia está na interseção entre design e codificação. Minha fascinação por transformar ideias em realidade visual e funcional impulsiona meu trabalho diário. Tenho uma apreciação especial por áreas como design gráfico e desenvolvimento de sistemas, onde posso integrar criatividade e lógica.",
        "design and code" : "Design e Código",
        "the way here" : "O Caminho até aqui",
        "completing" : "Ao concluir um curso superior em Sistemas de Informação e ter experiência em estágios, adquiri uma base sólida na área de tecnologia. Esse caminho não apenas aprimorou minhas habilidades, mas também me proporcionou uma abordagem equilibrada para meus projetos. Estou animado para aplicar esse conhecimento e experiência em futuros desafios.",
    } },
    en: { translation: { 
        "sections" : "Sections",
        "projects" : "Projects",
        "contact" : "Contact",
        "language" : "Language",
        "fullstack" : "Full Stack Developer",
        "interest" : "My interest in technology lies in the intersection between design and coding. My fascination with transforming ideas into visual and functional reality drives my daily work. I have a special appreciation for areas such as graphic design and systems development, where I can integrate creativity and logic.",
        "design and code" : "Design and Code",
        "the way here" : "The Way Here",
        "completing" : "Completing a higher education course in Information Systems and having experience in internships, I acquired a solid foundation in the area of ​​technology. This path not only honed my skills, but also provided me with a balanced approach to my projects. I am excited to apply this knowledge and experience to future challenges.",
     } },
  },
  lng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;