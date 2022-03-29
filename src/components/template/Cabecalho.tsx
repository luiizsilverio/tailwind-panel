import useApp from "../../data/hook/useApp"
import TemaButton from "../TemaButton"
import AvatarUser from "./AvatarUser"
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
      <div className={`flex flex-grow justify-end items-center`}>
        <TemaButton tema={tema} alternar={mudarTema} />
        <AvatarUser className="ml-3" />
      </div>
    </div>
  )
}