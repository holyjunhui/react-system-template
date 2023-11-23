import React from 'react'
import { css } from '@emotion/react'
import Not404 from '@/assets/svg/404.svg' // 引入路径

const NotFound = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80%;
      `}
    >
      <div
        css={css`
          flex: 0 0 62.5%;
          width: 62.5%;
          padding-right: 88px;
          zoom: 1;
        `}
      >
        <div
          css={css`
            float: right;
            width: 100%;
            max-width: 430px;
            height: 360px;
            background: url(${Not404}) no-repeat 50% 50%;
            background-size: contain;
          `}
        />
      </div>
      <div>
        <h1
          css={css`
            margin-bottom: 24px;
            color: #434e59;
            font-weight: 600;
            font-size: 72px;
            line-height: 72px;
          `}
        >
          404
        </h1>
        <div
          css={css`
            margin-bottom: 16px;
            color: rgb(0 0 0 / 45%);
            font-size: 20px;
            line-height: 28px;
          `}
        >
          抱歉，你访问的页面不存在
        </div>
      </div>
    </div>
  )
}

export default NotFound
