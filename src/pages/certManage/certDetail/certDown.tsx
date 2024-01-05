import React from 'react'
import { css } from '@emotion/react'
import { Button } from 'antd'
import ListDetail from '@/components/ListDetail/listDetail'

const CertDown = () => {
  return (
    <div>
      <div className="whiteBg">
        <ListDetail />
        <div
          css={css(`
        width: 50%;
        margin-top: 24px;
        `)}
        >
          <Button type="primary">证书下载</Button>
        </div>
      </div>
    </div>
  )
}

export default CertDown
