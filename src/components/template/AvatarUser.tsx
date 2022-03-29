import Link from "next/link"
import useAuth from "../../data/hook/useAuth"

interface Props {
  className?: string
}

export default function AvatarUser(props: Props) {
  const { usuario } = useAuth()
  return (
    <Link href="/perfil">
      <img
        src={usuario?.imageUrl ?? '/images/avatar.svg'}
        alt="Foto do usuário"
        className={`
          h-10 w-10 rounded-full cursor-pointer
          ${props.className}
        `}
      />
    </Link>
  )
}