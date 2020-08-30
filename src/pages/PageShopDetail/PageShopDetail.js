import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'
import '../Page.scss'

export default function PageShopDetail({ match }) {
  const { id } = useParams()

  useEffect(() => {
    getData()
  }, [])

  const [item, setItem] = useState({
    avatar: {},
    first_name: '',
    last_name: '',
  })

  const getData = async () => {
    const data = await fetch(`https://reqres.in/api/users/${id}`)
    const parsedData = await data.json()
    setItem(parsedData.data)
  }

  const history = useHistory()

  return (
    <div className='page'>
      <PageHeader heading={`${item.first_name} ${item.last_name}`} />
      <img alt='' width='50' height='50' src={item.avatar}></img>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iste
        optio ex sequi quia dignissimos beatae adipisci ut illo dolorum libero
        quam aspernatur laudantium, eius, architecto repellat deserunt? Quam,
        quis.
      </p>
      <button
        onClick={() => {
          history.push('/about')
        }}
      >
        Fire an event that changes path
      </button>
    </div>
  )
}
