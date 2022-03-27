import useApp from "../../data/hook/useApp"
import TemaButton from "../TemaButton"
import Titulo from "./Titulo"

interface Props {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: Props) {
  const { tema, mudarTema } = useApp()

  return (
    <div className={`flex`}>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className={`flex flex-grow justify-end`}>
        <TemaButton tema={tema} alternar={mudarTema} />
      </div>
    </div>
  )
}