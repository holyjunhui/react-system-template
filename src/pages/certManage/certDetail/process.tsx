import React from 'react'
import { Button, Steps } from 'antd'
import {
  FilePdfOutlined,
  FileExcelOutlined,
  BranchesOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'

const description = 'This is a description.'

const Process = () => {
  return (
    <div>
      <Steps
        direction="vertical"
        current={1}
        items={[
          {
            title: '证书申请',
            icon: <UserOutlined />,
            status: 'finish',
            description: (
              <div
                css={css(`
              margin-bottom: 40px;
              `)}
              >
                当前证书已于2023/06/07 09:08:09签发成功
              </div>
            ),
          },
          {
            title: '证书使用',
            icon: <SolutionOutlined />,
            status: 'finish',
            description: (
              <div
                css={css(`
              margin-bottom: 40px;`)}
              >
                您可以下载证书进行安装，
                <Link to="/home">
                  查看安装说明
                  <FilePdfOutlined css={css(`margin-right: 5px;`)} />
                </Link>
                或一键部署到其他产品
                <div
                  css={css(`
                margin: 8px 0;`)}
                >
                  <Button type="primary" css={css(`margin-right:5px`)}>
                    下载证书
                  </Button>
                  <Button>一键部署</Button>
                </div>
              </div>
            ),
          },
          {
            title: '证书过期',
            status: 'wait',
            icon: <FileExcelOutlined />,
            description: (
              <div>
                证书到期前，需要及时续费更新，避免影响您的 业务正常运行，查看
                <Link to="home">
                  续费流程 <BranchesOutlined />
                </Link>
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}

export default Process
