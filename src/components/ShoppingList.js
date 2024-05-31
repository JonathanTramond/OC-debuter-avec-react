import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList() {

    const categories = plantList.reduce(
        (acc, plant) => 
            acc.includes(plant.category) ? acc : acc.concat(plant.category), 
        []
    )

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
						<PlantItem name={plant.name} category={plant.category} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water} isBestSale={plant.isBestSale} />  
				))}
			</ul>
		</div>
	)
}

export default ShoppingList