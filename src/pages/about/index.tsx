// about页面
import React from 'react'
import { css } from '@emotion/react'
import hasAuth from '@/utils/permission'
import Temp from '@/assets/svg/temp.svg?react' // ?react 表示使用react组件

const About: React.FC = () => {
  console.log(hasAuth(), 'about')

  return (
    <div>
      <Temp
        css={css`
          width: 100px;
          height: 100px;
        `}
      />
      <h1 className="customer">Hellos world!</h1>
    </div>
  )
}

export default About
