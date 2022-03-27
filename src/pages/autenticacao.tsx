import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

type Modo = 'signIn' | 'signUp'

export default function Autenticacao() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [modo, setModo] = useState<Modo>('signIn')

  function enviar() {
    if (modo === 'signIn') {

    }
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img src="https://source.unsplash.com/random?javascript"
          alt="Imagem inspiradora"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="md:w-1/2 w-full m-10 lg:w-1/3">
        <h1 className={`
          text-3xl font-bold mb-5
        `}>
          {
            modo === 'signIn'
              ? 'Entre com sua conta'
              : 'Cadastre-se na plataforma'
          }
        </h1>

        <AuthInput
          label="E-Mail"
          valor={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput
          label="Senha"
          valor={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          required
        />

        <button onClick={enviar} className={`
          w-full bg-indigo-500 hover:bg-indigo-400
          text-white rounded-lg px-4 py-3 mt-6
        `}>
          { modo === 'signIn' ? 'Entrar' : 'Cadastrar' }
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button onClick={enviar} className={`
          w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-4 py-3
        `}>
          "Entrar com Google"
        </button>

        {
          modo === 'signIn' ? (
            <p className="mt-8">
              Novo por aqui?
              <a onClick={() => setModo('signUp')} className={`
                text-blue-500 hover:text-blue-700
                font-thin italic text-sm
                cursor-pointer ml-1
              `}>
                Crie uma conta gratuitamente
              </a>
            </p>
          ) : (
            <p className="mt-8">
              Já tem cadastro?
              <a onClick={() => setModo('signIn')} className={`
                text-blue-500 hover:text-blue-700
                font-thin italic text-sm
                cursor-pointer ml-1
              `}>
                Entre com suas credenciais
              </a>
            </p>
          )
        }
      </div>
    </div>
  )
}