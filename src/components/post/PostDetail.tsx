import React from 'react'
import { BackButton } from '../buttons/BackButton'
import Post from './Post'

export default function PostDetail(): JSX.Element {
  console.log("rendering Post Detail component");
  return (
    <div className='container mt-5'>
        <BackButton/>
        <Post/>
    </div>
  )
}
