import React, { Fragment } from 'react'
import { ListOfCategories } from './components/listOfCaategories/'
import { ListOfPhotoCards } from './Container/ListOfPhotoCards'
import { PhotoCardWithQuery } from './Container/photocardWithQuery'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/logo'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <Logo />
      <GlobalStyles />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          // eslint-disable-next-line react/jsx-fragments
          : <Fragment> <ListOfCategories /> <ListOfPhotoCards /></Fragment>
      }
    </div>
  )
}
