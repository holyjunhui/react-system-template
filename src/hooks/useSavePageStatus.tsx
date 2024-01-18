import { useCallback, useRef, useState } from 'react'
import { INIT_PAGINATION } from '@/utils/commonConst'

/**
 * 此hooks针对于解决最后一页的最后一条删除后页面停留在空白页的情况
 * 可以自定义初始的页码信息
 */
const useSavePageStatus = (page = INIT_PAGINATION?.page, pageSize = INIT_PAGINATION?.pageSize) => {
  // 设置请求循环变量
  const [alwaysReload, setAlwaysReload] = useState(false)
  // 保存数据总数
  const total = useRef(0)
  // 设置数据总数
  // eslint-disable-next-line no-return-assign
  const setTotal = useCallback((num: number) => (total.current = num), [])
  // 保存页码信息
  const ref = useRef({ page, pageSize })
  // 修改页码信息
  const setPagination = useCallback(
    (pagination: { page: number; pageSize: number }, ids = []) => {
      // 此判断针对于删除操作，判断总数、删除数量、当前页码信息等调整到正确的页码
      if (total.current - ids.length <= (pagination.page - 1) * pagination.pageSize) {
        ref.current = {
          page: pagination.page - 1 || 1,
          pageSize: pagination.pageSize,
        }
      } else {
        // 这里针对页面的页码选择器等主动调整页码信息的
        ref.current = pagination
      }
      // 设置循环变量，保证每次都能进行请求
      setAlwaysReload(!alwaysReload)
    },
    [alwaysReload]
  )
  // 这里为了导出变量名更易读
  const pagination: any = ref.current

  return [pagination, setPagination, alwaysReload, setTotal]
}

export default useSavePageStatus
