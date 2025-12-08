import { PokemonShort } from './components/cont_pokemon_short';
import { ItemShort } from './components/cont_item';

const Home = () => {
    return(
 

                <>
                    <div className="content">
                    
                            <div className="banner">
                            <img src={bannerMain} alt="PokeRU Banner" className="banner" />
                            <p className="zag_ban">Poke_ru</p>
                            </div>
                    
                        
                            <p className="zag">Темы</p>
                            <div className="zaaagii">
                            <img src={pokemonZag} alt="Pokemon" className="image_ssil" />
                            <img src={itemImg} alt="Items" className="image_ssil" />
                            <img src={locationImg} alt="Locations" className="image_ssil" />
                            <p className="zag_ssil">Покемоны</p>
                            <p className="zag_ssil">Предметы</p>
                            <p className="zag_ssil">Локации</p>
                            </div>
                    
                        
                            <p className="zag">10 самых популярных покемонов</p>
                            <div className="pokemon-grid">
                            {[...Array(10)].map((_, index) => (
                                <PokemonShort key={`pokemon-${index}`} />
                            ))}
                            </div>
                    
                            
                            <p className="zag">10 самых популярных предметов</p>
                            <div className="pokemon-grid">
                            {[...Array(10)].map((_, index) => (
                                <ItemShort key={`item-${index}`} />
                            ))}
                            </div>
                        </div>
                    
                        
                        <div className="gran_fut"></div>
                </>
        
    )
}
export default Home;