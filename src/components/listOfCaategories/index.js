import React, { Fragment, useEffect, useState } from 'react'
import { Category } from './Category'

import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setloadin] = useState(false)

  useEffect(() => {
    setloadin(true)
    fetch('https://postcat-eqvpn1xzg-a-9571-g.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setloadin(false)
      })
  }, [])
  return {
    categories,
    loading
  }
}
function useShowFixed () {
  const [showfixed, setshowfixed] = useState(false)

  useEffect(() => {
    const onScrol = e => {
      const newShowfixed = window.scrollY > 200
      showfixed !== newShowfixed && setshowfixed(newShowfixed)
    }
    document.addEventListener('scroll', onScrol)

    return () => document.removeEventListener('scroll', onScrol)
  }, [showfixed])

  return {
    showfixed
  }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const { showfixed } = useShowFixed()

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {
          loading
            ? <Item key='loading'><Category /></Item>
            : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
        }
      </List>
    )
  }
  return (
    // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      {renderList()}
      {showfixed && renderList(true)}
    </Fragment>
  )
}
