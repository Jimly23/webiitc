import ErrorPage from '@/components/pagetemplate/ErrorPage'
import React from 'react'

const notFound = () => {
  return (
    <ErrorPage statusCode={400} message={"Page Not Found"}/>
  )
}

export default notFound