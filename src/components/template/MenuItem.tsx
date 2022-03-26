import Link from "next/link"

interface Props {
  url: string
  texto: string
  icon: any
}

export default function MenuItem(props: Props) {
  return (
    <li className={`hover:bg-gray-100`}>
      <Link href={props.url}>
        <a className={`
          flex flex-col justify-center items-center
          w-20 h-20 text-slate-600
        `}>
          { props.icon }
          <span className={`
            text-xs font-light text-gray-500
          `}>{ props.texto }</span>
        </a>
      </Link>
    </li>
  )
}