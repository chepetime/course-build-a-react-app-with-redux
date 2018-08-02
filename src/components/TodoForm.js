import React from 'react'

export default (props) => {

  const {currentTodo, changecurrent} = props

  const handleInputChange = (event) => {
    const val = event.target.value
    changecurrent(val)
  }

  return (
    <form>
      <input
        type="text"
        onChange={handleInputChange}
        value={currentTodo} />
    </form>
  )

}
