import { useState } from 'react'

export default function CompoOne({title="Promo Offer"}) {
  const [counter, setCounter] = useState(0)
  return (
    <>
    <div>{title}</div>
    <div data-testid="count"><h1>Counter</h1>{counter}</div>
    <button onClick={()=> setCounter(counter + 1)}>Inc</button>
    <button onClick={()=> setCounter(counter - 1)}>Dec</button>
    <input type="text" id="eventName" />
    </>
  )
}
