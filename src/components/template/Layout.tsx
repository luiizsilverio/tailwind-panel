import { ReactNode } from "react"
import useApp from "../../data/hook/useApp"
import ProtegeRotas from "../auth/ProtegeRotas"
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"

interface Props {
    titulo: string
    subtitulo: string
    children?: ReactNode
}

export default function Layout(props: Props) {
  const { tema } = useApp()

  return (
    <ProtegeRotas>
      <div className={`
        flex h-screen w-screen
        ${ tema }
      `}>
          <MenuLateral />
          <div className={`
            flex flex-col w-full p-7
            bg-gray-300 dark:bg-gray-800
          `}>
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
            <Conteudo>
              {props.children}
            </Conteudo>
          </div>
      </div>
    </ProtegeRotas>
  )
}