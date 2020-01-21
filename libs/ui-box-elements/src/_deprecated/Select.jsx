import React from 'react'
import { fn } from '@z1/lib-ui-box'

// elements
import { Box } from '../Box'

// main
const renderSelect = fn(t => props => {
  const as = t.pathOr('select', ['as'], props)
  const multiple = t.pathOr(null, ['multiple'], props)
  const className = t.pathOr(null, ['className'], props)
  return React.createElement(
    Box,
    t.merge(t.omit(['as', 'className', 'box'], props), {
      as,
      className: `${t.isNil(multiple) ? 'form-select' : 'form-multiselect'}${
        t.isNil(className) ? '' : ` ${className}`
      }`,
      box: t.merge(
        {
          display: 'block',
          width: 'full',
        },
        t.pathOr({}, ['box'], props)
      ),
    })
  )
})

export class Select extends React.Component {
  render() {
    return renderSelect(this.props)
  }
}