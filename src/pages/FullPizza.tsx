import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string
    title: string
    price: number
  }>()
  const { id } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://62a362e25bd3609cee693e4f.mockapi.io/items/' + id
        )
        setPizza(data)
      } catch (error) {
        alert('Ошибка при получение пиццы')
        navigate('/')
      }
    }
    fetchPizza()
  }, [])

  return (
    <div className="container">
      <img src={pizza?.imageUrl} />
      <h2>{pizza?.title}</h2>
      <h4>{pizza?.price}</h4>
    </div>
  )
}

export default FullPizza
