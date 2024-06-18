import '../styles/PlantItem.css'
import CareScale from './CareScale'

function handleClick(e) {
    console.log(e)
}

function PlantItem ({name, category, cover, id, light, water}) {
    
    return (
    <li key={id} className='lmj-plant-item' onClick={() => handleClick(name, category)} > 
    <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
    {name}
    <div>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
    </div>
    </li> )
}

export default PlantItem