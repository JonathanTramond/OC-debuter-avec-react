import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleChange(e) {
        setInputValue(e.target.value);
        console.log(inputValue);
    }

    function handleBlur(e) {
        if (!inputValue.includes('@')) {
            alert('Votre adresse mail doit contenir un @')
        }
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