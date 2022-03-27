import { createContext, useState } from "react";

type Tema = 'dark' | 'light'

interface AppContextProps {
  tema: Tema
  mudarTema?(): void
}

const AppContext = createContext<AppContextProps>({
  tema: 'dark',
})

export function AppProvider(props) {
  const [tema, setTema] = useState<Tema>('dark')

  function mudarTema() {
    setTema(tema === 'dark' ? 'light' : 'dark')
  }

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
