import { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

export default function Conteudo(props: Props) {
  return (
    <div className={`
      flex flex-col mt-7
    `}>
      { props.children }
    </div>
  )
}