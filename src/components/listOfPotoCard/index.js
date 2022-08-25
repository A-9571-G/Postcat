import React from 'react'
import { PhotoCart } from './photoCard'
import { withPhotos } from '../../hoc/withPhoto'

export const ListOfPhotoCardsComponent = ({ categoryId }) => {
  const { loading, error, data } = withPhotos(categoryId)

  if (error) return (<h1>internal Server Error</h1>)
  if (loading) return (<h1>Loading ..</h1>)
  return (
    <ul>
      {data.photos.map(photo => <PhotoCart key={photo.id} {...photo} />)}
    </ul>
  )
}
