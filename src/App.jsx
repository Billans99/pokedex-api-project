import Header from './Header.jsx'
import Search from './Search.jsx'
import Cards from './Cards.jsx'
import Footer from './Footer.jsx'
import axios from 'axios'


import { useEffect, useState } from 'react'

const App = () => {

  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState("")
  const [prevUrl, setPrevUrl] = useState("")

  const pokeFun=async () => {
    if (loading) return

    setLoading(true)
    console.log("url", url)
    const res=await axios.get(url)
    console.log(res)
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    await getPokemon(res.data.results)
    setLoading(false)
    // console.log(pokeData)
  }

  const getPokemon=async(res) => {
    const responses = await Promise.all(
      res.map((pokemon) => {
        return axios.get(pokemon.url)
      })
    )

    const newPokeData = responses.map((pokemon) => pokemon.data)
    setPokeData(newPokeData)
  }

  useEffect(() => {
    pokeFun()
  }, [url])

  const loadPreviousPokemon = () => {
    setUrl(prevUrl)
  }

  const loadNextPokemon = () => {
    setUrl(nextUrl)
  }

  const getTypeColor = (typeName) => {
    switch (typeName) {
        case "normal":
            return "#A8A77A";
        case "fire":
            return "#EE8130";
        case "water":
            return "#6390F0";
        case "electric":
            return "#F7D02C";
        case "grass":
            return "#7AC74C";
        case "ice":
            return "#96D9D6";
        case "fighting":
            return "#C22E28";
        case "poison":
            return "#A33EA1";
        case "ground":
            return "#E2BF65";
        case "flying":
            return "#A98FF3";
        case "psychic":
            return "#F95587";
        case "bug":
            return "#A6B91A";
        case "rock":
            return "#B6A136";
        case "ghost":
            return "#735797";
        case "dragon":
            return "#6F35FC";
        case "dark":
            return "#705746";
        case "steel":
            return "#B7B7CE";
        case "fairy":
            return "#D685AD";
        default:
            return "#000000";
    }} 


  return (
    <>
      <Header/>
      {/* <Search/> */}
      <Cards 
      pokemon={pokeData} 
      loading={loading} 
      getTypeColor={getTypeColor} />
      <Footer 
        loadPreviousPokemon={loadPreviousPokemon} 
        loadNextPokemon={loadNextPokemon}/>
    </>
  )
}

export default App