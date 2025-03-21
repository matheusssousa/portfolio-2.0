import { useEffect, useRef, useState, memo } from 'react';
import { DotsThreeCircle, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeCurrent from '../../hooks/themeCurrent';

// Componente memoizado para o botão do menu
const MenuButton = memo(({ isMenuOpen, toggleMenu, color }: { isMenuOpen: boolean; toggleMenu: () => void; color: string }) => (
  <motion.button
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
    onClick={toggleMenu}
    type='button'
    style={{ color: isMenuOpen ? 'black' : color }}
    aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
  >
    {isMenuOpen ? <X size={35} /> : <DotsThreeCircle size={35} />}
  </motion.button>
));

const Header = ({ currentSection }: { currentSection: string }) => {
  const ColorCurrent = ThemeCurrent(currentSection);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
        style={{ color: ColorCurrent }}
        className="text-xl font-bold"
      >
        matheus sousa
      </motion.h1>
      <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} color={ColorCurrent} />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, width: 0 }}
            animate={{ height: 150, width: '15%' }}
            exit={{ height: 0, width: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='absolute bg-white top-2 right-2 z-10 shadow-lg rounded-lg'
          >
            {/* Conteúdo do menu */}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default memo(Header);
