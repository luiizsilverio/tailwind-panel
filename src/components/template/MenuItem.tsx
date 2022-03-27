import Link from "next/link"

interface Props {
  url?: string
  texto: string
  icon: any
  className?: string
  onClick?(evento: any): void
}

export default function MenuItem(props: Props) {

  function renderLink() {
    return (
      <a className={`
        flex flex-col justify-center items-center w-20 h-20
        text-slate-600 dark:text-gray-200
        ${props.className}
      `}>
        { props.icon }
        <span className={`
          text-xs font-light
        `}>{ props.texto }</span>
      </a>
    )
  }

  return (
    <li
      onClick={props.onClick}
      className={`
        hover:bg-gray-100 dark:hover:bg-gray-700
        cursor-pointer
    `}>
      {
        props.url ? (
          <Link href={props.url}>
            {renderLink()}
          </Link>
        ) : (
          renderLink()
        )
      }
    </li>
  )
}