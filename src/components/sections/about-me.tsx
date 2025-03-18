import ArtDesign from '../../assets/svg/artDesign.svg';
import ArtRoad from '../../assets/svg/artRoad.svg';
import { motion } from 'framer-motion';

type SectionAboutMeProps = {
    ref: React.RefObject<HTMLDivElement>;
    currentSection: string;
};

export default function SectionAboutMe({ ref, currentSection }: SectionAboutMeProps) {
    const shouldAnimate = currentSection === 'about-me';

    return (
        <section className="about-me" ref={ref}>
            <motion.div
                initial={shouldAnimate ? { opacity: 0 } : {}}
                animate={shouldAnimate ? { opacity: 1 } : {}}
                exit={shouldAnimate ? { opacity: 0 } : {}}
                transition={shouldAnimate ? { delay: 0.2, duration: 0.5, ease: 'easeInOut' } : {}}
                className="w-[90%] h-[80%] flex items-center justify-center border-2 border-white"
            >
                <motion.div
                    initial={shouldAnimate ? { opacity: 0 } : {}}
                    animate={shouldAnimate ? { opacity: 1 } : {}}
                    exit={shouldAnimate ? { opacity: 0 } : {}}
                    transition={shouldAnimate ? { delay: 0.4, duration: 0.5, ease: 'easeInOut' } : {}}
                    className="w-[97%] h-[95%] grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-white"
                >
                    <div className='h-full p-5 flex items-center justify-evenly flex-col'>
                        <motion.span
                            initial={shouldAnimate ? { opacity: 0, x: -50 } : {}}
                            animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                            exit={shouldAnimate ? { opacity: 0, x: -50 } : {}}
                            transition={shouldAnimate ? { delay: 0.5, duration: 0.5, ease: 'easeInOut' } : {}}
                            className='w-2/3 flex flex-col gap-4'
                        >
                            <h3 className='text-2xl text-azul'>design and code</h3>
                            <p className='text-sm font-thin text-cinza-escuro text-justify'>
                            My interest in technology lies in the intersection between design and coding. My fascination with transforming ideas into visual and functional reality drives my daily work. I have a special appreciation for areas such as graphic design and systems development, where I can integrate creativity and logic.
                            </p>
                        </motion.span>
                        <motion.img
                            initial={shouldAnimate ? { opacity: 0, x: 50 } : {}}
                            animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                            exit={shouldAnimate ? { opacity: 0, x: 50 } : {}}
                            transition={shouldAnimate ? { delay: 0.5, duration: 0.5, ease: 'easeInOut' } : {}}
                            src={ArtDesign}
                            alt="Art"
                            className='h-1/2 w-2/3'
                        />
                    </div>
                    <div className='h-full p-5 flex items-center justify-evenly flex-col'>
                        <motion.img
                            initial={shouldAnimate ? { opacity: 0, x: -50 } : {}}
                            animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                            exit={shouldAnimate ? { opacity: 0, x: -50 } : {}}
                            transition={shouldAnimate ? { delay: 0.5, duration: 0.5, ease: 'easeInOut' } : {}}
                            src={ArtRoad}
                            alt="Art"
                            className='h-1/2 w-2/3'
                        />
                        <motion.span
                            initial={shouldAnimate ? { opacity: 0, x: 50 } : {}}
                            animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                            exit={shouldAnimate ? { opacity: 0, x: 50 } : {}}
                            transition={shouldAnimate ? { delay: 0.5, duration: 0.5, ease: 'easeInOut' } : {}}
                            className='w-2/3 flex flex-col gap-4'
                        >
                            <h3 className='text-2xl text-azul'>the way here</h3>
                            <p className='text-sm font-thin text-cinza-escuro text-justify'>
                            Completing a higher education course in Information Systems and having experience in internships, I acquired a solid foundation in the area of ​​technology. This path not only honed my skills, but also provided me with a balanced approach to my projects. I am excited to apply this knowledge and experience to future challenges.
                            </p>
                        </motion.span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}