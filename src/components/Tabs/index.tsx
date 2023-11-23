import React from 'react'
import Tabs from './tabs'
import { MenuProps } from '@/router/index.interface'

const Index = (props: MenuProps[]) =>
  props.map((item: MenuProps) => ({
    ...item,
    element: () => <Tabs items={props} />,
  }))

export default Index
