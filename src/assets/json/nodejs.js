/* eslint-disable @typescript-eslint/no-var-requires */
// 从world.json 中获取数据，name字段的值以及对应的iso_a2值

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'world.zh.json')

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err
  const world = JSON.parse(data)

  const nodes = world.features

  const result = nodes.map((node) => {
    const { name, iso_a2 } = node.properties
    return [iso_a2, name]
  })
  const myScript = `
  const worldEn2zh = new Map(${JSON.stringify(result)})
  export default worldEn2zh
  `
  fs.writeFile(
    path.resolve(__dirname, '../../pages/reportModule/countryManage/components', 'worldEn2zh.ts'),
    myScript,
    (err) => {
      if (err) throw err
      // eslint-disable-next-line no-console
      console.log('文件已被保存')
    }
  )
})
