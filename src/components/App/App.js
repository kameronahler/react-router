import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/Header'
import PageHome from '../../pages/PageHome/PageHome'
import PageAbout from '../../pages/PageAbout/PageAbout'
import PageShop from '../../pages/PageShop/PageShop'

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Route path='/' exact component={PageHome} />
          <Route path='/about' exact component={PageAbout} />
          <Route path='/shop' exact component={PageShop} />
        </main>
      </Router>
    </>
  )
}
