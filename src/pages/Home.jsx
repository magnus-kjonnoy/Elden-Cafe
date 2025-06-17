import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = `Elden Merchants`
  }, [])

  return (
    <div className='main'>
    </div>
  )
}