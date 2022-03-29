import { createContext, useState } from 'react'
import route from 'next/router'
import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextProps {
  usuario: User
  loginGoogle: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

async function getUser(usuarioFirebase: firebase.User): Promise<User> {
  const token = await usuarioFirebase.getIdToken()
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0].providerId,
    imageUrl: usuarioFirebase.photoURL
  }
}

export function AuthProvider(props) {
  const [usuario, setUsuario] = useState<User>()
  // const router = useRouter()

  async function loginGoogle() {
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )

    if (resp.user?.email) {
      const usuario = await getUser(resp.user)
      setUsuario(usuario)
      console.log(usuario)
      route.push('/')
    }
  }

  return (
    <AuthContext.Provider value={{ usuario, loginGoogle }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext