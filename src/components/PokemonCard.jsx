
function PokemonCard({ pokemon }) {
    return (
        <figure>
          {
            (pokemon.imgSrc == undefined) ?
              <p>???</p>
              : 
              (<img src={pokemon.imgSrc}
              alt={pokemon.name} />)
          }
          <p>{pokemon.name}</p>
        </figure>
    )
}
  

export default PokemonCard;