// about页面
import React from 'react'
import hasAuth from '@/utils/permission'

const About: React.FC = () => {
  console.log(hasAuth(), 'about')

  return (
    <div>
      <h1 className="text-gray-600 font-bold underline">Hello world!</h1>
    </div>
  )
}

export default About
