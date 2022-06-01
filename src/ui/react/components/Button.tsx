type Props = {
  children: React.ReactNode
  className: string
}

export default function ButtonView(props: Props) {
  return <button className={`btn ${props.className}`}>{props.children}</button>
}
