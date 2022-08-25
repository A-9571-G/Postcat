/* eslint-disable react/jsx-fragments */
import React, { useEffect, useRef, useState } from 'react'
import { Artcle } from './styles'
import { PhotoCartContent } from './photoCardContent/index'

function useShow (element) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    import('intersection-observer')
      .then(() => {
        const observer = new window.IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            // observer.disconnect()
          } else {
            setShow(false)
          }
        })
        return observer.observe(element.current)
      })
  }, [element])
  return {
    show
  }
}

export const PhotoCart = (props) => {
  const element = useRef(null)
  const { show } = useShow(element)
  return (
    <Artcle ref={element}>
      {
        show && <PhotoCartContent {...props} />
      }
    </Artcle>
  )
}
