import { Button } from 'antd'
import React from 'react'
import { css } from '@emotion/react'
import { siderSelectedBg, neutralColor } from '@/assets/styles/global'

type ActionButtonProps = {
  actions: ActionProps[]
}
type ActionProps = {
  key: string
  label: string
  method?: () => void
  disabled?: boolean
}
const ActionButton = ({ actions }: ActionButtonProps) => {
  console.log(actions, 'actions')
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {actions?.map((item: any) => {
        return (
          <Button
            css={css`
              margin: 0;
              padding: 0;
              &::after {
                content: '|';
                color: ${neutralColor};
                margin: 0 8px;
              }
              &:last-child::after {
                content: '';
                margin: 0;
              }
              color: ${siderSelectedBg};
            `}
            type="link"
            disabled={item.disabled}
            key={item.key}
            onClick={() => {
              item.method()
            }}
          >
            {item.label}
          </Button>
        )
      })}
    </div>
  )
}

export default ActionButton
