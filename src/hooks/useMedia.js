import { useEffect, useState } from 'react'

export const useMedia = (media) => {
  const [match, setMatch] = useState(null)

  useEffect(() => {
    const changeMedia = () => {
      const { matches } = window.matchMedia(media)
      setMatch(matches)
    }

    changeMedia()

    window.addEventListener('resize', changeMedia)
    return () => window.removeEventListener('resize', changeMedia)
  })

  return match
}
