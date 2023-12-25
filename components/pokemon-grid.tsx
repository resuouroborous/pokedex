"use client"
import { PokemonCard } from './pokemon-card';
import { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';

// <PokemonGrid pokemonList={data}/>

interface PokemonGridProps {
  pokemonList: any
}
export function PokemonGrid({ pokemonList } : PokemonGridProps) {
  const [ searchText, setSearcText ] = useState("");

  console.log(pokemonList);

  // filter the text {name: 'pikachu', url:''}
  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter(
      (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  // show the filtered array of objects
  const filteredPokemonList = searchFilter(pokemonList);


  return (
    <>
    <div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='pokemonName'>Pokemon Name</Label>
        <Input 
          type='text'
          value={searchText}
          autoComplete='off'
          id='pokemonName'
          placeholder='Charizard, Pikachu, etc.'
          onChange={(e) => setSearcText(e.target.value)}
          />
      </div>
      <h3 className='text-3xl pt-12 pb-6 text-center'>Pokemon Universe</h3>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {filteredPokemonList.map((pokemon : any) => {
          return (
            <PokemonCard name={pokemon.name} key={pokemon.name + "Card"}/>
          )
        })}
        </div>
      </>
  )

}