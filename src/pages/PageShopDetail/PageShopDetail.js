import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import '../Page.scss'
export default function PageShopDetail({ match }) {
  useEffect(() => {
    getData()
  }, [])

  const [item, setItem] = useState([])

  const getData = async () => {
    const data = await fetch(`https://reqres.in/api/users/${match.params.id}`)
    const parsedData = await data.json()
    setItem(parsedData.data)
  }
  console.log(item)
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
    </div>
  )
}
