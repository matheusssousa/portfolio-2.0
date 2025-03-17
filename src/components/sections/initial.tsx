import ArtHome from '../../assets/svg/artHome.svg';
import { motion } from 'framer-motion';
import { IoLogoJavascript } from 'react-icons/io';
import { FaLaravel, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { MdPhp } from 'react-icons/md';

type SectionInitialProps = {
    ref: React.RefObject<HTMLDivElement>;
};

export default function SectionInitial({ ref }: SectionInitialProps) {
    const tecnologies = [
        { name: 'React', color: 'azul', icon: FaReact },
        { name: 'JavaScript', color: 'amarelo', icon: IoLogoJavascript },
        { name: 'TypeScript', color: 'azul', icon: SiTypescript },
        { name: 'PHP', color: 'roxo', icon: MdPhp },
        { name: 'Laravel', color: 'vermelho', icon: FaLaravel },
    ];
    return (
        <section className="initial" ref={ref}>
            <motion.img
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
                src={ArtHome} alt="Arte - Section Home" className='w-1/2' />
            <div className='w-1/2'>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
                    className='text-white text-center text-5xl w-full'
                >
                    full stack developer
                </motion.h1>
                <motion.span
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
                    className='flex items-center justify-center text-4xl text-white gap-4 w-full mt-4'>
                    {tecnologies.map((tecnology, index) => (
                        <tecnology.icon key={index} className={`text-${tecnology.color}`} />
                    ))}
                </motion.span>
            </div>
        </section>
    )
}