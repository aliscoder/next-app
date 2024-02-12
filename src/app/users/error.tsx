'use client'
import React from 'react'

type Props = {
    error:Error
    reset: () => void
}

const UserPageError = ({error, reset}: Props) => {
  return (
    <div>
        {error.message}
        <button className="btn" onClick={() => reset()}>Retry</button>
        </div>
  )
}

export default UserPageError