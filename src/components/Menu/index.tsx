import { HistoryIcon, HomeIcon, SettingsIcon, Sun } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
    return (<nav className={styles.menu}>
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a className={styles.menuLink} href="#">
            <HomeIcon />
        </a>
        <a className={styles.menuLink} href="#">
            <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="#">
            <SettingsIcon />
        </a>
        <a className={styles.menuLink} href="#">
            <Sun />
        </a>
    </nav>
    )
}