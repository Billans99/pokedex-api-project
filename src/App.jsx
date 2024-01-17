import Header from './Header.jsx'
import Search from './Search.jsx'
import Cards from './Cards.jsx'
import Footer from './Footer.jsx'
import axios from 'axios'
import React from 'react'

import { useEffect, useState } from 'react'

const App = () => {
  // states for App component
  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  //  states for Footer component
  const [nextUrl, setNextUrl] = useState("")
  const [prevUrl, setPrevUrl] = useState("")
  // states for Search component
  const [searchTerm, setSearchTerm] = useState("")



  // function for Search component (using props)
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchPokemon = async () => {
    if (searchTerm === '') {
      return
    }
  
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
    setPokeData(result.data)
  }

  const pokeFun=async () => {
    if (loading) return

    setLoading(true)
    console.log("url", url)
    const res=await axios.get(url)
    console.log("res", res)
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    await getPokemon(res.data.results)
    setLoading(false)
    console.log("data.results", res.data.results)
    console.log("pokeData", pokeData)
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

  // function for loading previous pokemon (using props) in Footer component
  const loadPreviousPokemon = () => {
    if (prevUrl === null) return
    setUrl(prevUrl)
  }

  // function for loading next pokemon (using props) in Footer component
  const loadNextPokemon = () => {
    if (nextUrl === null) return
    setUrl(nextUrl)
  }




  return (
    <>
      <Header/>
      <Search searchPokemon={searchPokemon}/>
      <Cards 
      pokemon={pokeData} 
      loading={loading} 
      />
      <Footer 
        loadPreviousPokemon={loadPreviousPokemon} 
        loadNextPokemon={loadNextPokemon}/>
    </>
  )
}

export default App