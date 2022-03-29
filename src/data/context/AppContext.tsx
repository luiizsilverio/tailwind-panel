import { createContext, useEffect, useState } from "react";

interface AppContextProps {
  tema?: string
  mudarTema?(): void
}

const AppContext = createContext<AppContextProps>({
  tema: 'dark',
})

export function AppProvider(props) {
  const [tema, setTema] = useState('dark')

  function mudarTema() {
    const temaSalvo = tema === 'dark' ? 'light' : 'dark'
    setTema(temaSalvo)
    localStorage.setItem('cod3r-panel:tema', temaSalvo)
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem('cod3r-panel:tema')
    setTema(temaSalvo === 'dark' ? 'dark' : 'light')
  }, [])

  return (
    <AppContext.Provider value={{
      tema,
      mudarTema
    }}>
      {
        props.children
      }
    </AppContext.Provider>
  )
}

export default AppContext
