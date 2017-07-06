import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card.js'

export const TodoList = (props) => (
  // create map for each to do item
  var items = props.items
  console.log(items)
  return (
    <div>
      {items}
    </div>
  )
)

TodoList.propTypes = {
  items: PropTypes.array
  // specify later
}

export default TodoList
