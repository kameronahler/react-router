import React, { useState, useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import '../Page.scss'
import { Link } from 'react-router-dom'

export default function PageShop() {
  useEffect(() => {
    getData()
  }, [])

  const [currentItems, setCurrentItems] = useState([])

  const getData = async () => {
    const data = await fetch('https://reqres.in/api/users?page=2')
    const parsedData = await data.json()
    setCurrentItems(parsedData.data)
  }

  return (
    <div className='page'>
      <PageHeader heading={'Shop'} />
      {currentItems.map((el) => (
        <li key={el.id}>
          <img alt='' width='50' height='50' src={el.avatar}></img>
          <Link to={`shop/${el.id}`}>{`${el.first_name} ${el.last_name}`}</Link>
        </li>
      ))}
    </div>
  )
}
