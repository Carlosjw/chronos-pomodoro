import styles from './styles.module.css'

type SendButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red'
} & React.ComponentProps<'button'>;

export function SendButton({
  icon,
  color = 'green',
  ...props
}: SendButtonProps) {
  return (
    <>
      <button className={`${styles.sendButton} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  )
}