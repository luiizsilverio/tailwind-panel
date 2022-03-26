import Titulo from "./Titulo"

interface Props {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: Props) {
  return (
    <div>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
    </div>
  )
}