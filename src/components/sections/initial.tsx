import React, { memo, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import ArtHome from '../../assets/svg/artHome.svg';

// Carregamento assíncrono dos ícones
const FaReact = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaReact })));
const IoLogoJavascript = lazy(() => import('react-icons/io').then(module => ({ default: module.IoLogoJavascript })));
const SiTypescript = lazy(() => import('react-icons/si').then(module => ({ default: module.SiTypescript })));
const MdPhp = lazy(() => import('react-icons/md').then(module => ({ default: module.MdPhp })));
const FaLaravel = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaLaravel })));

// Componente memoizado para os ícones
const TechnologyIcon = memo(({ icon: Icon, name }: { icon: React.ElementType; name: string }) => (
  <Icon title={name} className='hover:scale-110 transition-transform duration-200 ease-in-out' />
));

type SectionInitialProps = {
  ref: React.RefObject<HTMLDivElement>;
};

const SectionInitial = ({ ref }: SectionInitialProps) => {
  const technologies = [
    { name: 'React', icon: FaReact },
    { name: 'JavaScript', icon: IoLogoJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'PHP', icon: MdPhp },
    { name: 'Laravel', icon: FaLaravel },
  ];

  return (
    <section className="initial flex flex-col md:flex-row" ref={ref}>
      <Suspense fallback={<div>Loading...</div>}>
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
          src={ArtHome}
          alt="Arte - Section Home"
          className='w-full h-2/3 md:h-full md:w-1/2'
        />
      </Suspense>
      <div className='w-full h-1/3 md:h-full md:w-1/2 flex flex-col items-center justify-center'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
          className='text-white text-center text-3xl md:text-6xl w-full'
        >
          Full Stack Developer
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
          className='flex items-center justify-center text-2xl md:text-5xl text-white gap-4 w-full mt-4'
        >
          {technologies.map((technology, index) => (
            <Suspense key={index} fallback={<div>Loading...</div>}>
              <TechnologyIcon icon={technology.icon} name={technology.name} />
            </Suspense>
          ))}
        </motion.span>
      </div>
    </section>
  );
};

export default memo(SectionInitial);
