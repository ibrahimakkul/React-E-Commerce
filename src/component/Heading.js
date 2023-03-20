import React from 'react'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'

const Heading = (props) => {
    const [theme]=useThemeHook();
  return (
    <h1 className={`${props?.size} ${theme ? "text-dark-primay":"text-light-primary"} text-center border-bottom py-2`}>
      {props.heading}
    </h1>
  )
}

export default Heading
