import { useState, useEffect } from 'react'

/**
 * api 为一个函数
 * @param api
 */
// eslint-disable-next-line no-unused-vars
type API = (param?: any, config?: any) => Promise<any>

const useDataFetching = (api: API, param?: any, config?: any) => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  const [reload, setReload] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const response = await api(param, config)
        setData(response)
      } catch (error: any) {
        setError(error)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [api, config, param, reload])

  return { data, isLoading, error, setReload: () => setReload(!reload) }
}

export default useDataFetching
