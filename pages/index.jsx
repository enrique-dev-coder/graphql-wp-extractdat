import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getPostsData } from '../services'
import parse from 'html-react-parser'
export default function Home({ posts }) {
  console.log(posts)
  return (
    <main className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <h1 className="pixel_letter text-center text-[50px] font-bold  text-white">
        Hola Este es un blog de prueba
      </h1>
      <div className="mx-auto flex w-[80%] max-w-[1200px] flex-wrap justify-between">
        {posts.map((p) => (
          <div className="my-5  flex h-[300px] w-[40%]  flex-col border-2 border-dashed">
            <h2
              className="pixel_letter  py-5 text-center text-2xl
            font-medium text-rose-200"
            >
              {p.node.title}
            </h2>
            <div className="mx-auto w-[80%] flex-1">
              <p className="flex-1 text-white">{parse(p.node.excerpt)}</p>
            </div>
            <Link href={p.node.link}>
              <p className="pixel_letter animate-bounce cursor-pointer py-4 text-center text-xl">
                Visita nuestro artículo
              </p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const posts = (await getPostsData()) || []
  return {
    props: { posts },
  }
}
