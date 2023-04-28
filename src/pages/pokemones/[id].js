import Link from "next/link"
import Image from "next/image"

const Pokemon = ({ data }) => {
    console.log(data)
    return(
        <>
            <div>
                <h1>{data.name}</h1>
                <h3> N° #{data.id}</h3>
                <Image src={data.sprites.front_default} width={200} height={200}/>
                <Link href='/'>Volver al Inicio</Link>
            </div>
        </>
    )
}

export default Pokemon

export const getServerSideProps = async({ params }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()

    return { props: {data} }
}