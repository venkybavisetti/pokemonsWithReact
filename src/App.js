import React from 'react';
import './pokemon.css';
import Pokemon from './pokemon';
import { getArrayOfNums } from './utilities';

const pokemons = getArrayOfNums(1, 100).map((id, index) => (
  <Pokemon key={index} id={id} />
));

const App = () => <div id="pokemons">{pokemons}</div>;
export default App;
