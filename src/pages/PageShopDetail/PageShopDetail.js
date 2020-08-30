import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'
import '../Page.scss'

export default function PageShopDetail() {
  const { id } = useParams()

  const getData = async () => {
    const data = await fetch(`https://reqres.in/api/users/${id}`)
    const parsedData = await data.json()
    setItem(parsedData.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const [item, setItem] = useState({
    avatar: {},
    first_name: '',
    last_name: '',
  })

  const history = useHistory()

  return (
    <div className='page'>
      <PageHeader heading={`${item.first_name} ${item.last_name}`} />
      <img
        alt=''
        width='50'
        height='50'
        src={item.avatar}
        onClick={() => {
          // console.log(history)
          history.replace(`${history.location.pathname}?test`)
        }}
      ></img>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iste
        optio ex sequi quia dignissimos beatae adipisci ut illo dolorum libero
        quam aspernatur laudantium, eius, architecto repellat deserunt? Quam,
        quis.
      </p>
      <button
        onClick={() => {
          history.push('/about?test')
        }}
      >
        Fire an event that changes path but will include a query string so that
        it will look different than /about
      </button>
    </div>
  )
}
