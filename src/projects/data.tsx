import ImageStudeNotes from "../assets/images/screen-studenotes.png";
import ImageLeLearn from "../assets/images/lelearn.png";
import ImageMedicalApp from "../assets/images/medical-screen.png";

const projects = [
    {
        title: "stude notes",
        description: "Description of project 1.",
        image: ImageStudeNotes,
        link: "https://studenotes.vercel.app",
        github: "https://github.com/matheusssousa/studenotes-frontend",
        technologies: ["React", "Vite", "Laravel", "MySQL"],
    },
    {
        title: "lelearn",
        description: "Description of project 2.",
        image: ImageLeLearn,
        link: "https://llrn-frontend.vercel.app/login",
        github: "https://github.com/mateusdayrell/lelearn",
        technologies: ["React", "Node.js", "MySQL"],
    },
    {
        title: "medical app",
        description: "Description of project 3.",
        image: ImageMedicalApp,
        github: "https://github.com/matheusssousa/gestao-medica",
        technologies: ["Laravel", "MySQL", "Docker"],
    }
];

export default projects;

export type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
    technologies: string[];
};