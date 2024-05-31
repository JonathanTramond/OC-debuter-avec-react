import '../styles/PlantItem.css'
import CareScale from './CareScale'

function PlantItem ({name, cover, id, light, water, isBestSale}) {
    
    return (
    <li key={id} className='lmj-plant-item'>
    {name}
    {isBestSale && <div className='lmj-sales'>Meilleure vente !</div>}
    <CareScale careType='water' scaleValue={water} />
    <CareScale careType='light' scaleValue={light} />
    </li> )
}

export default PlantItem