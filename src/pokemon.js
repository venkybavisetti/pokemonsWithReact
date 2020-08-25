import React from 'react';

const PokemonDetails = (props) => {
  return (
    <div className="pokemonCardSize">
      <h3 className="frontHeader">{props.name}</h3>
      <img src={props.imageUrl} alt="loading" height="250px" />
    </div>
  );
};

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, pokemon: undefined };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
      .then((body) => body.json())
      .then(({ name, types }) => {
        this.setState((state) => ({
          pokemon: {
            name,
            imageUrl: `http://assets22.pokemon.com/assets/cms2/img/pokedex/full/${(
              '000' + this.props.id
            ).slice(-3)}.png `,
          },
          loaded: true,
        }));
      });
  }

  render() {
    if (!this.state.loaded) {
      return <p>Loading...</p>;
    }
    const { name, imageUrl } = this.state.pokemon;
    return <PokemonDetails name={name} imageUrl={imageUrl} />;
  }
}

export default Pokemon;
