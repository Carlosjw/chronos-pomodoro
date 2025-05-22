import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
    return <div className={styles.logo}>
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a className={styles.logoLink} href="#">
            <TimerIcon />
            <span>Chronos</span>
        </a>
    </div>
}