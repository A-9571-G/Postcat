import React, { Fragment, useState } from 'react'
import { ImgWrapper, Img } from './styles'
import { FavButton } from './FavButton/index'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCartContent = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch (e) {
      return false
    }
  })

  const handleFavclick = () => setLiked(!liked)
  return (
    // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      <a href={`/?detail=${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <FavButton idPhoto={id} liked={liked} likes={likes} setLiked={setLiked} onClick={handleFavclick} />
    </Fragment>
  )
}
