import React from 'react'

export default function PageHeader({ heading }) {
  return (
    <header className='page-header'>
      <h1 className='page-header__heading'>{heading}</h1>
    </header>
  )
}
