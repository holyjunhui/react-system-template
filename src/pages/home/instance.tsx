import React from 'react'
import { Col, Row } from 'antd'
import SearchParams from './searchParams'
import NetworkTable from './networkTable'
import ConnectLine from './connectLine'
import OperatorBar from './operatorBar'
import Direction from './direction'

const Instance = () => {
  return (
    <div>
      <SearchParams />
      <div>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <div>
              <Direction />
            </div>
          </Col>
          <Col span={12}>
            <div>
              <NetworkTable />
            </div>
          </Col>
          <Col span={12}>
            <div>
              <ConnectLine />
            </div>
          </Col>
          <Col span={12}>
            <div>
              <OperatorBar />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Instance
