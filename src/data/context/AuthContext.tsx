import { createContext, useEffect, useState } from 'react'
import route from 'next/router'
import Cookies from 'js-cookie'

import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextProps {
  usuario: User
  loginGoogle: () => Promise<void>
  logoutGoogle: () => Promise<void>
  loading: boolean
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


function gravaCookie(logado: boolean) {
  if (logado) {
    Cookies.set('cod3r-panel@logado', 'true', {
      expires: 1  // em dias
    })
  } else {
    Cookies.remove('cod3r-panel@logado')
  }
}


export function AuthProvider(props) {
  const [usuario, setUsuario] = useState<User>()
  const [loading, setLoading] = useState(true)


  async function configuraSessao(usuarioFirebase): Promise<boolean> {
    if (usuarioFirebase?.email) {
      const user = await getUser(usuarioFirebase)
      setUsuario(user)
      gravaCookie(true)
      setLoading(false)
      return true
    } else {
      setUsuario(null)
      gravaCookie(false)
      setLoading(false)
      return false
    }
  }


  async function loginGoogle() {
    try {
      setLoading(true)
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      configuraSessao(resp.user).then(() => route.push('/'))

    } finally {
      setLoading(false)
    }
  }

  async function logoutGoogle() {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await configuraSessao(null)

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('cod3r-panel@logado') === 'true') {
      const unsubscribe = firebase.auth()
        .onIdTokenChanged(user => configuraSessao(user))
      return () => unsubscribe()
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ usuario, loginGoogle, logoutGoogle, loading }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext