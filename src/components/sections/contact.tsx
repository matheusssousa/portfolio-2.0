import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

type SectionContactProps = {
    ref: React.RefObject<HTMLDivElement | null>;
};

const SectionContact = ({ ref }: SectionContactProps) => {
    const { t } = useTranslation();

    return (
        <section className="contact" ref={ref} id="contact">
            <h2 className="text-3xl font-light mb-4 uppercase">{t("contact")}</h2>
            <div className="w-[80%] bg-white h-px my-4" />
            <a href="mailto:matheussousaab@gmail.com">matheussousaab@gmail.com</a>
            <span className="flex items-center gap-5">
                <a href="https://www.linkedin.com/in/matheusousab/" target="_blank" className="icon">
                    <LinkedinLogo size={30}/>
                </a>
                <a href="https://github.com/matheusssousa" target="_blank" className="icon">
                    <GithubLogo size={30}/>
                </a>
            </span>
        </section>
    );
}

export default SectionContact;