import React, { useState, useEffect } from 'react'
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'
import PageShopDetail from '../PageShopDetail/PageShopDetail'
import '../Page.scss'

export default function PageShop() {
  const { path, url } = useRouteMatch()

  const getData = async () => {
    const data = await fetch('https://reqres.in/api/users?page=2')
    const parsedData = await data.json()
    setCurrentItems(parsedData.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const [currentItems, setCurrentItems] = useState([])

  return (
    <div className='page'>
      <PageHeader heading={'Shop'} />
      <Switch>
        {/* We could either break this into another component, or just render it here. App.js is telling a link in the header to head to this component, when this component is called, it asks the router, what url is it? in another switch function, and makes another delineation. This could all be handled from App.js, but this lets us compartementalize where it goes */}
        <Route path={`${path}`} exact>
          {currentItems.map((el) => (
            <li key={el.id}>
              <img alt='' width='50' height='50' src={el.avatar}></img>
              <Link
                to={`${url}/${el.id}`}
              >{`${el.first_name} ${el.last_name}`}</Link>
            </li>
          ))}
        </Route>

        {/* other routes */}
        <Route path={`${path}/:id`} exact component={PageShopDetail} />
      </Switch>
    </div>
  )
}
