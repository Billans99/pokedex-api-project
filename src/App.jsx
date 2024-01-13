import Header from './Header.jsx'
import Search from './Search.jsx'
import Cards from './Cards.jsx'
import Footer from './Footer.jsx'
import axios from 'axios'

import { useEffect, useState } from 'react'

function App() {

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

  return (
    <>
      <Header/>
      <Search/>
      <Cards pokemon={pokeData} loading={loading}/>
      <Footer 
        loadPreviousPokemon={loadPreviousPokemon} 
        loadNextPokemon={loadNextPokemon}/>
    </>
  )
}

export default App