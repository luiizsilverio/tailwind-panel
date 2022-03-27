import { MoonSvg, SunSvg } from "./icons"

interface Props {
  tema: string
  alternar(): void
}

export default function TemaButton(props: Props) {

  return props.tema === 'dark'
    ? (
      <div onClick={props.alternar} className={`
        bg-gradient-to-r from-yellow-300 to-yellow-600
        hidden sm:flex items-center cursor-pointer
        w-14 lg:w-24 h-8 p-1 rounded-full
      `}>
        <div className={`
          flex items-center justify-center
          bg-white text-yellow-600 w-6 h-6 rounded-full
        `}>
          {SunSvg(4)}
        </div>
        <div className={`
          hidden lg:flex items-center ml-4 text-white text-sm
        `}>
          <span>Claro</span>
        </div>
      </div>
    )
    : (
      <div onClick={props.alternar} className={`
        bg-gradient-to-r from-gray-500 to-gray-900
        hidden sm:flex items-center justify-end cursor-pointer
        w-14 lg:w-24 h-8 p-1 rounded-full
      `}>
        <div className={`
          hidden lg:flex items-center mr-2 text-gray-300 text-sm
        `}>
          <span>Escuro</span>
        </div>
        <div className={`
          flex items-center justify-center
          bg-black text-yellow-300 w-6 h-6 rounded-full
        `}>
          {MoonSvg(5)}
        </div>
      </div>
    )
}