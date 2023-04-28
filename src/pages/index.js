import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Pokemon = ({ pokemon }) =>{
  const id = pokemon.url.split('/').filter(x => x).pop()
  return(
    <>
      <li><Link href={`pokemones/${id}`}>{ pokemon.name}</Link></li>
      
    </>
  )
}

export default function Pokemones({pokemones}) {
  console.log(pokemones)
 
  return (
    <>
      <h3> pokemones </h3>
      <ul>
        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name}/>)}
      </ul>
    </>
  )
}

export const getStaticProps = async () =>{
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return {
    props: { pokemones: data.results }
  }
}
