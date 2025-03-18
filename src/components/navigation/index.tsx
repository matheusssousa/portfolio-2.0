import ThemeCurrent from '../../hooks/themeCurrent';
import { motion } from 'framer-motion';
import './style.css';

type NavigationProps = {
    setCurrentSection: (section: string) => void;
    currentSection: string;
    currentMap: string[];
};

const Navigation = ({ setCurrentSection, currentSection, currentMap }: NavigationProps) => {
    let ColorCurrent = ThemeCurrent(currentSection);

    return (
        <motion.nav
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
            className='StyledNavigate'>
            <ul>
                {currentMap.map((section, i) => (
                    <li key={i}>
                        <button type='button' onClick={() => setCurrentSection(section)} className={`${currentSection === section ? 'current' : 'disable'}`} style={{ backgroundColor: `${currentSection === section ? 'transparent' : ColorCurrent}`, borderColor: ColorCurrent }} />
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navigation;