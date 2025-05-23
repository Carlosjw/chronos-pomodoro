type DefaultInputProps = {
  id: string;
  labelText?: string;
} &
  React.ComponentProps<'input'>
  ;

export function DefaultInput({
  id,
  labelText,
  type,
  ...rest // todas as demais proprieddades do input
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText && labelText}</label>
      <input type={type} id={id}{...rest} />
    </>
  )
}