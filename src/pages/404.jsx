import { useEffect } from 'react'

export default function Status404() {
  useEffect(() => {
    document.title = `404 - page not found`
  }, [])

  return (
    <div className='error'>
      Error 404 - page not found.
    </div>
  )
}