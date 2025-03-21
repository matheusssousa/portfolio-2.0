import ImageStudeNotes from "../assets/images/screen-studenotes.png";

const projects = [
    {
        title: "stude notes",
        description: "Description of project 1.",
        image: ImageStudeNotes,
        link: "https://studenotes.vercel.app",
        github: "https://github.com/matheusssousa/studenotes-frontend",
        technologies: ["React", "Vite", "Laravel", "MySQL"],
    },
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