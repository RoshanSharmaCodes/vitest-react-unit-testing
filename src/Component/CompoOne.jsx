import React from 'react'

export default function CompoOne({title="Promo Offer"}) {
  return (
    <>
    <div>{title}</div>
    <input type="text" id="eventName" />
    </>
  )
}
