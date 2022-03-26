import Head from 'next/head'
import Layout from '../components/template/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Painel com Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout titulo="Página Inicial" subtitulo='Lorem Ipsum'>
        <h3>Conteúdo</h3>
      </Layout>
    </>
  )
}
