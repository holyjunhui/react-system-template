import React from 'react'
import { css } from '@emotion/react'
import { Col, Row } from 'antd'
import Process from './process'
import ListDetail from '@/components/ListDetail/listDetail'

const CertDetail = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={16}>
        <div
          className="whiteBg"
          css={css(`
        padding: 16px 24px;
        height: 100%;
        `)}
        >
          <ListDetail />
        </div>
      </Col>
      <Col span={8}>
        <div
          className="whiteBg"
          css={css(`
        padding: 16px 24px;
        height: 100%;
        `)}
        >
          <h3>快速上手</h3>
          <Process />
        </div>
      </Col>
    </Row>
  )
}

export default CertDetail
