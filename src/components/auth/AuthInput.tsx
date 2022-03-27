import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type Props = InputProps & {
  label: string
  valor: string
}

export default function AuthInput({ label, valor, ...rest }: Props) {
  console.log(valor)
  return (
    <div className="flex flex-col mt-4">
      <label>{ label }</label>
      <input
        value={ valor }
        { ...rest }
        className={`
          px-4 py-3 rounded-lg bg-gray-200 mt-2
          border focus:border-blue-500
          focus:bg-gray-50 focus:outline-none
        `}
      />
    </div>
  )
}