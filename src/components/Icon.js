import React from 'react'
import { icons } from '../styles'

const Icon = ({ icon, size = 16, color }) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: color,
    },
  }

  return (
    <svg
      style={styles.svg}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 1024 1024"
    >
      <path style={styles.path} d={icons[icon]} />
    </svg>
  )
}

export default Icon
