import { useState } from 'react'
import { Button } from './component/form/Button'
import { Input } from './component/form/Input'
import { ProductRow } from './component/product/ProductRow'

function App() {
  const [valueInput, setValueInput] = useState("")
  const [arrayOfProduct, setArrayOfProduct] = useState([])

  const addProductToArray = (newProduct) => {
    setArrayOfProduct([...arrayOfProduct, newProduct])
    setValueInput("")
  }

  return <div className='container'>
    <FormAdd valueInput={valueInput} onChangeInput={setValueInput} addProductToArray={addProductToArray} placeholderInput="Pain..."/>
    <DisplayProduct arrayOfProduct={arrayOfProduct} />
  </div>
}

function FormAdd({valueInput, onChangeInput, addProductToArray, placeholderInput}) {
  return <div className='container mt-3'>
    <Input
      value={valueInput}
      onChange={onChangeInput}
      placeholder={placeholderInput}
      id="addProduct"
    />
    <div className='text-center mt-3'>
      <Button
        value="Ajouter le produit"
        onClick={() => addProductToArray(document.getElementById('addProduct').value)}
      />
    </div>
  </div>
}

function DisplayProduct({arrayOfProduct}){

  let productToDisplay = []

  for (let product of arrayOfProduct){
    productToDisplay.push(<ProductRow productName={product} key={product}/>)
  }

  return <div className="d-flex flex-row justify-content-center align-items-center">
    {productToDisplay}
  </div>
  
}

export default App
