import { useEffect } from 'react'

export default function CaféMenu() {
  useEffect(() => {
    document.title = `Menu | Elden Café`
  }, [])

  return (
    <div className='main'>
    </div>
  )
}