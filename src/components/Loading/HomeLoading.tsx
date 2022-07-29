import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

type Props = {}

const HomeLoading = (props: Props) => {
  return (
    <InfinitySpin width='200' color='#444' />
  )
}

export default HomeLoading