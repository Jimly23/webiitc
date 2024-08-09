import ErrorPage from '@/components/pagetemplate/ErrorPage'
import React from 'react'

const serverError = () => {
  return (
    <ErrorPage statusCode={500} message={"Server-side error occurred"}/>
  )
}

export default serverError