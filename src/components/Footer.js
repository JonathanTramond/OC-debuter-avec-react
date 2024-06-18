import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')
    
    function handleChange(e) {
        const value = e.target.value;
        setInputValue(value);
    }

    function handleBlur() {
        if (!emailIsValid(inputValue)) {
            alert('Votre adresse email n\'est pas valide');
        }
    }

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }


    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre email :</div>

            <input 
                onChange={handleChange}
                value={inputValue}
                name='my_input' 
                placeholder='Entrez votre email' 
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer