import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Button } from './styles'
import { LIKE_PHOTO } from '../../../../../Container/toggleLikedMutation'
import { useMutation } from '@apollo/client'

export const FavButton = ({ liked, likes, setLiked, idPhoto }) => {
  const [likePhoto, { loading, error }] = useMutation(LIKE_PHOTO)
  const handleLike = async () => {
    await likePhoto({ variables: { input: { id: idPhoto } } })
    setLiked(!liked)
  }

  if (error) return <div>error</div>
  if (loading) return <div> loading </div>

  const Icon = liked ? AiFillHeart : AiOutlineHeart

  return (
    <Button onClick={() => handleLike()}>
      <Icon size='25px' /> {likes} likes!
    </Button>
  )
}
