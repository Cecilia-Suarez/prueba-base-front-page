import React, { useState }from 'react'

const FormProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    imgUrl: [],
    description: ''
  })

  const [show, setShow] = useState(false)

  const [error, setError] = useState(false)

  const handleSumbit = (event) => {
    event.preventDefault()

    /*if (user.fullName.length > 5 && user.email && user.question) {
      setShow(true)
      console.log(user.fullName + ' con el email: ' + user.email + ' ha completado el formulario con éxito.');
      setError(false)
    } else {
      setError(true)*/
  }

  return (
    <form onSubmit={handleSumbit}>

      <input type="text" placeholder='Product name' value={product.name} onChange={(event) => setProduct({...product, name:event.target.value})} />
      <input type="text" placeholder='Description' value={product.description} onChange={(event) => setProduct({...product, description:event.target.value})} />
      <button type='sumbit'>Add Product</button>
    </form>
  )
}

export default FormProduct