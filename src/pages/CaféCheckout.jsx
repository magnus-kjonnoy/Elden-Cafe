import { useEffect } from 'react'

export default function Café() {
  useEffect(() => {
    document.title = `Elden Café`
  }, [])

  return (
    <div className='main'>
    </div>
  )
}