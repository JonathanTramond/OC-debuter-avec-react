import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'

function handleSubmit(e) {
  e.preventDefault()
  console.log(e)
  alert(e.target['my_input'].value)
}

function App() {
    return (
      <div>
        <Banner /><Cart /><ShoppingList />
            <form onSubmit={handleSubmit} >
            <input type='text' name='my_input' placeholder='Tapez votre texte' />
            <button type='submit'>Entrer</button>
            </form>
      </div>
      )
}

export default App
