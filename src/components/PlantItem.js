import '../styles/PlantItem.css'
import CareScale from './CareScale'
import monstera from '../assets/monstera.jpg'

function handleClick(e) {
    console.log(`✨ Ceci est un clic ✨`, e)
}

function PlantItem ({name, category, cover, id, light, water, isBestSale}) {
    
    return (
    <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)} > 
    <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
    {name}
    <div>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
    </div>
    </li> )
}

export default PlantItem