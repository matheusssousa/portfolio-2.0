import { DotsThreeCircle, X } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsMenuOpen(false);
            }
        }
        if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <header>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
            >
                matheus sousa
            </motion.h1>
            <motion.button
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type='button'
                className={isMenuOpen ? 'text-preto' : 'text-white'}
            >
                {!isMenuOpen ? <DotsThreeCircle size={35}/> : <X size={35} />}
            </motion.button>
            <motion.div
                ref={menuRef}
                initial={{ height: 0, width: 0 }}
                animate={{ height: isMenuOpen ? 150 : 0, width: isMenuOpen ? '15%' : 0 }}
                exit={{ height: 0, width: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='absolute bg-white top-2 right-2 z-10'
            >

            </motion.div>
        </header>
    )
}