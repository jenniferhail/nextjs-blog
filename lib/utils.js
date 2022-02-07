/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState()
  const [windowHeight, setWindowHeight] = useState()

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
      })
    }
  }, [])

  return { width: windowWidth, height: windowHeight }
}
