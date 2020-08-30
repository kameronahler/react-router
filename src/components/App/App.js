import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss'
import AppHeader from '../AppHeader/AppHeader'
import PageHome from '../../pages/PageHome/PageHome'
import PageAbout from '../../pages/PageAbout/PageAbout'
import PageShop from '../../pages/PageShop/PageShop'
import PageShopDetail from '../../pages/PageShopDetail/PageShopDetail'
import Page404 from '../../pages/Page404/Page404'

export default function App() {
  return (
    <>
      <Router>
        <AppHeader />
        <main>
          <Switch>
            <Route path='/' exact component={PageHome} />
            <Route path='/about' exact component={PageAbout} />
            <Switch>
              <Route path='/shop' exact component={PageShop} />
              <Route path='/shop/:id' exact component={PageShopDetail} />
            </Switch>
            <Route path='' component={Page404} />
          </Switch>
        </main>
      </Router>
    </>
  )
}

//to do:
// history
// catch on error
// redirect
// add search query
