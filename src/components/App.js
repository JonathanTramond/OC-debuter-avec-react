import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

function handleSubmit(e) {
  e.preventDefault()
  console.log(e)
  alert(e.target['my_input'].value)
}

function App() {
    return (
      <div>
        <Banner />
        <Cart />
        <ShoppingList />
        <Footer />
      </div>
      )
}

export default App
