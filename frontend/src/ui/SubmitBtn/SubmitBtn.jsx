import React from 'react'

import classes from './SubmitBtn.module.css'

const SubmitBtn = ({ text }) => {
  return (
    <>
    <button className={classes.btn}>{text}</button>
    </>
  )
}

export default SubmitBtn