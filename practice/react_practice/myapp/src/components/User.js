import React from 'react'


export default function User({ firstname, lastname, age, active }) {
    const status = (active) ? 'active' : 'not active';
  return (
    <div>
      <p>Name: { firstname } { lastname }</p>
      <p>Age: { age }</p>
      <p>Status: {status}</p>

    </div>
  )
}