import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>Study Cards</h1>
      <section id='pick-a-category'>
        <label htmlFor='category-select'>Category</label>
        <input id='category-select' type='text' />
      </section>
      <section>
        <label htmlFor='category-select'>Category</label>
        <input id='category-select' type='text' />
      </section>
    </>
  )
}

export default App
