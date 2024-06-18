import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function handleClick(careType, scaleValue) {
    const scaleType = careType === 'light' ? 'de lumière' : "d'arrosage";
    let value = ''

    console.log(scaleValue)

    switch (scaleValue) {
        case 1: 
            value = 'peu';
            break ;
        case 2: 
            value = 'modérement';
            break ;
        case 3: 
            value = 'beaucoup'; 
            break ;
        default :
            value = 'modérement' ;
            break;
    }
    
    alert(`Cette plante requiert ${value} ${scaleType}`)
}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? <img src={sun} alt='icône soleil'/> : <img src={water} alt="icône goutte d'eau" />

    return (
        <div onClick={() => handleClick(careType, scaleValue)}>
            {range.map((a) => scaleValue >= a ? <span key={a.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale