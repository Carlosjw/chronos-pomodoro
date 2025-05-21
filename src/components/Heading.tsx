import styles from './Heading.module.css';

// TIPANDO VARIÁVEIS COM TS
type HeadingProps = {
    children: React.ReactNode; // tudo o que o React aceito como tipo, é ReactNode
}

export function Heading({ children }: HeadingProps) {
    return <h1 className={styles.heading}>{children}</h1>
}