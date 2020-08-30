import React from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'
import '../Page.scss'

export default function PageAbout() {
  const { search } = useLocation()

  const postSearchThankYou = (
    <div>
      <h1>Thank you for your purchase!</h1>
    </div>
  )

  return (
    <div className='page'>
      {search === '?test' ? postSearchThankYou : null}
      <PageHeader heading={'About'} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias mollitia
        inventore, dolor assumenda perferendis enim temporibus libero unde
        fugiat sed delectus autem est ipsa praesentium sapiente, vel fuga
        deleniti ipsum?
      </p>
    </div>
  )
}
