import React from 'react'
import { PhotoCart } from '../components/listOfPotoCard/photoCard/index'

import { gql, useQuery } from '@apollo/client'

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(query, { variables: { id } })
  if (error) return <h2>{error}</h2>
  if (loading) return <h2>loadin ...</h2>
  return (
    <PhotoCart {...data.photo} />
  )
}
