import dayjs from 'dayjs'
// import ipaddr from 'ipaddr.js'
import * as ipaddr from 'ipaddr.js'

const utils = {
  /**
   * JS去除字符串中的特殊符号，改为英文逗号分割，并且去除空字符串；
   * 琼台博客
   */
  getFilterString(str: string) {
    return Array.from(
      new Set(
        str &&
          str
            .replace(/[\f\n\r]/g, ',')
            .replace(/，/g, ',')
            .split(',')
      )
    ).filter(Boolean)
  },
  /**
   * JS去除字符串中的特殊符号，改为英文逗号分割，并且去除空字符串；允许重复
   * 琼台博客
   */
  getRepeatableString(str: string) {
    return (
      str &&
      str
        .replace(/[\f\n\r]/g, ',')
        .replace(/，/g, ',')
        .split(',')
        .filter(Boolean)
    )
  },
  // 校验ipv4ipv6
  check_ipv4v6(str: string, type?: string) {
    const v4 = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/
    const v6 =
      /^([\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^::([\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){2}:([\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){3}:([\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^:((:[\da-fA-F]{1,4}){1,6}|:)$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)$|^([\da-fA-F]{1,4}:){2}((:[\da-fA-F]{1,4}){1,4}|:)$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?$|^([\da-fA-F]{1,4}:){6}:$/
    if (type) {
      if (type === 'ipv4' && v4.test(str)) {
        return true
      }
      return type === 'ipv6' && v6.test(str)
    }
    return v4.test(str) || v6.test(str)
  },
  // 校验字符串是否是否纯数字
  isNumeric(str: string) {
    return /^\d+$/.test(str)
  },
  check_ipv4v6WithPort(str: string) {
    // 思路：
    // 1. 首先根据 `:` 对字符串进行分割
    // 2. 分割出来的数组长度如果是 1 则必然是IPv4，如果是 2 则必然是IPv4带端口
    // 3. 如果大于等于 3，则至少说明是IPv6的地址类型
    // 4. 如果字符串存在成对的 `[]` 说明是IPv6带端口
    const splitArr = str?.split(':')
    const strArrLen = splitArr?.length
    if (strArrLen >= 3) {
      // IPV6
      // 1.判断是否带端口
      const splitPort = str?.replace('[', '').split(']:')
      if (splitPort?.length > 1) {
        // IPV6带端口
        const [ip, port] = splitPort
        const isIpv6 = utils.check_ipv4v6(ip, 'ipv6')
        const isRightPort = !port || utils.isNumeric(port)
        return isIpv6 && isRightPort
      }
      // IPv6无端口
      return utils.check_ipv4v6(str, 'ipv6')
    }
    // IPv4有端口
    if (strArrLen === 2) {
      const [ip, port] = splitArr
      const isIpv4 = utils.check_ipv4v6(ip, 'ipv4')
      const isRightPort = !port || utils.isNumeric(port)
      return isIpv4 && isRightPort
    }
    // IPv4无端口
    return utils.check_ipv4v6(str, 'ipv4')
  },
  // 管理员DN 规则：多个label，label用逗号隔开，label: 大小写字母数字特殊字符中文，每个label有且仅有1个等号=；长度1-512
  checkAdminDn(str: string) {
    // 长度1-512
    if (str.length < 1 || str.length > 512) {
      return false
    }
    let error = false
    if (str.includes(',')) {
      const labels = str.split(',')
      labels.forEach((item) => {
        // 每个label有且仅有1个等号=
        if (!item.includes('=')) {
          error = true
        } else if (item.split('=').length > 2) {
          error = true
        }
      })
    } else if (!str.includes('=')) {
      error = true
    } else if (str.split('=').length > 2) {
      error = true
    }
    return !error
  },
  timeFormat(
    text: string | number,
    type?: string,
    supportMilliseconds = false,
    format = 'YYYY-MM-DD HH:mm:ss'
  ) {
    let newFormat = format
    // 是否支持毫秒级别
    if (supportMilliseconds) {
      newFormat = `${newFormat}.SSS`
    }
    if (!text) return '-'
    if (type === 'unix') {
      return dayjs.unix(Number(text)).format(newFormat)
    }
    return dayjs(text).format(newFormat)
  },
  cidr2prt(ip: string) {
    try {
      const [parsed, prefixLength] = ipaddr.parseCIDR(ip)

      if (parsed instanceof ipaddr.IPv4) {
        // prefixLength是8的倍数
        if (Number(prefixLength) % 8 === 0) {
          const domain = '.in-addr.arpa'
          return (
            parsed
              .toNormalizedString()
              .split('.')
              .slice(0, prefixLength / 8)
              .reverse()
              .join('.') + domain
          )
        }
        throw new Error(`Invalid IP address: ${ip}`)
      }
      // prefixLength是4的倍数
      if (Number(prefixLength) % 4 === 0) {
        const domain = '.ip6.arpa'
        return (
          parsed
            .toNormalizedString()
            .split(':')
            .map((n) => {
              return n.length >= 4 ? n : new Array(4 - n.length + 1).join('0') + n
            })
            .join('')
            .split('')
            .slice(0, prefixLength / 4)
            .reverse()
            .join('.') + domain
        )
      }
      throw new Error(`Invalid IP address: ${ip}`)
    } catch (e) {
      throw new Error(`Invalid IP address: ${ip}`)
    }
  },
  // 获取二维数组中的最大值的数组
  getMaxArray(arr: [][], key: number) {
    const thisArr = arr && arr.map((item) => Number(item[key]))

    const max = Math.max(...(thisArr || []))
    return arr && arr.find((item) => Number(item[key]) === max)
  },
  // 获取二维数组中的最小值的数组
  getMinArray(arr: [][], key: number) {
    const thisArr = arr && arr.map((item) => Number(item[key]))
    const min = Math.min(...(thisArr || []))
    return arr && arr?.find((item) => Number(item[key]) === min)
  },
  // 校验带中文域名的正则
  checkDomain(str: string) {
    const reg = /^(([\w-]+\.)+[\w-]+|([a-zA-Z]{1}|[\u4E00-\u9FA5]{1}))$/
    return reg.test(str)
  },
  // 校验名称 特殊符号只包含，- _ . 英文字母数字
  checkName(str: string) {
    const reg = /^[a-zA-Z0-9_.][a-zA-Z0-9-_.]*$/
    return reg.test(str)
  },
  checKNamePattern() {
    return /^[a-zA-Z0-9_.][a-zA-Z0-9-_.]*$/
  },
  // http://confluence.yamu.com/pages/viewpage.action
  // 校验名称不支持中文 特殊符号只包含，- _ . 英文字母数字
  checkNameNoChinese() {
    return {
      pattern: /^[a-zA-Z0-9_.][a-zA-Z0-9-_.]*$/,
      message: '由数字、字母、下划线、中线和点组成，不能以中线开头',
    }
  },
  // 除了中文以外的校验
  check_str(str: string) {
    const regex = /[\u4e00-\u9fa5]/
    return !regex.test(str)
  },
  // 中文校验
  checkChineseFormReg() {
    return {
      pattern: /[\u4e00-\u9fa5]/,
      message: '请输入中文',
    }
  },
  // 校验用户名：大小写字母数字特殊符号只包含中线、下划线、点；长度1-num；只能字母或下划线开头
  checkUserName(str: string, num: number) {
    if (!str) return false
    const regx = new RegExp(`^[0-9a-zA-Z]{0,${num}}$`)
    return regx.test(str)
  },
  // 密码：不能全是空格，长度1-255
  checkPsw(str: string) {
    return !(str.length < 1 || str.length > 255 || (str && str.trim() === ''))
  },
  // 校验名称支持中文 特殊符号只包含，- _ . 英文字母数字 不能数字开头
  checkNameChinese() {
    return {
      pattern: /^[a-zA-Z0-9_.\u4e00-\u9fa5][a-zA-Z0-9-_.\u4e00-\u9fa5]*$/,
      message: '由数字、字母、中文、下划线、中线和点组成，不能以中线开头',
    }
  },
  // 校验域名 常规域名
  checkDomainRegex() {
    return /^([a-zA-Z0-9]{1}[a-zA-Z0-9-_]{0,62})(\.[a-zA-Z0-9]{1}[a-zA-Z0-9-_]{0,62})*?(\.[a-zA-Z]{1}[a-zA-Z0-9_]{0,62})\.?$/
  },
  // 校验域名 支持泛域名，如*.baidu.com
  checkHostnameWithAsteriskRegex() {
    return /^([a-zA-Z0-9\\*]{1}[a-zA-Z0-9-_]{0,62})(\.[a-zA-Z0-9]{1}[a-zA-Z0-9-_]{0,62})*?(\.[a-zA-Z]{1}[a-zA-Z0-9_]{0,62})?\.?$/
  },
  // 校验域名 表单校验，如www.baidu.com
  validatorHostnameNoAsterisk(values: string) {
    const filterStr = utils.getFilterString(values)
    const allRightDomain = filterStr.every((item) => utils.checkDomainRegex().test(item?.trim()))
    return allRightDomain ? Promise.resolve() : Promise.reject('域名不合法，请输入合法的域名')
  },
  validatorHostnameNoAsteriskInput() {
    return {
      pattern: utils.checkDomainRegex(),
      message: '域名不合法，请输入合法的域名',
    }
  },
  // 校验域名 表单校验 支持泛域名，如*.baidu.com
  validatorHostnameWithAsterisk(values: string) {
    const filterStr = utils.getFilterString(values)
    const allRightDomain = filterStr.every((item) =>
      utils.checkHostnameWithAsteriskRegex().test(item?.trim())
    )
    return allRightDomain ? Promise.resolve() : Promise.reject('域名不合法，请输入合法的域名')
  },
  validatorHostnameWithAsteriskInput() {
    return {
      pattern: utils.checkHostnameWithAsteriskRegex(),
      message: '域名不合法，请输入合法的域名',
    }
  },
  checkIPv4Regex() {
    return /^(?!\.)((^|\.)([1-9]?\d|1\d\d|2(5[0-5]|[0-4]\d))){4}$/
  },

  checkIPv6Regex() {
    return /^([\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^::([\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){2}:([\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){3}:([\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^:((:[\da-fA-F]{1,4}){1,6}|:)$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)$|^([\da-fA-F]{1,4}:){2}((:[\da-fA-F]{1,4}){1,4}|:)$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?$|^([\da-fA-F]{1,4}:){6}:$/
  },

  // 检验IPv4
  checkIPv4(str: string, isMask?: boolean, isOnly?: boolean) {
    const strArr = str.split('/')
    const [ip, mask = ''] = strArr
    const rex = /^(?!\.)((^|\.)([1-9]?\d|1\d\d|2(5[0-5]|[0-4]\d))){4}$/gm.test(`${ip}`)
    if (rex) {
      if (isOnly) {
        return strArr.length !== 2
      }
      if (mask) {
        return /(^[1-9]\d*$)/.test(mask) && Number(mask) >= 1 && Number(mask) <= 32
      }
      return !isMask
    }
    return false
  },
  // 检验IPv6
  checkIPv6(str: string, isMask?: boolean, isOnly?: boolean) {
    const strArr = str.split('/')
    const [ip, mask = ''] = strArr
    const rex = `${ip}`.match(/:/g)
    if (!rex) return false

    const reslute =
      /^([\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^::([\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){2}:([\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){3}:([\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^:((:[\da-fA-F]{1,4}){1,6}|:)$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)$|^([\da-fA-F]{1,4}:){2}((:[\da-fA-F]{1,4}){1,4}|:)$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?$|^([\da-fA-F]{1,4}:){6}:$/.test(
        ip
      )

    if (reslute) {
      if (isOnly) {
        return strArr.length !== 2
      }
      if (mask) {
        return /(^[1-9]\d*$)/.test(mask) && Number(mask) >= 64 && Number(mask) <= 128
      }
      return !isMask
    }
    return false
  },
  // 校验ipv4ipv6
  checkIpv4Ipv6(str: string, type?: string) {
    const v4 = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/
    const v6 =
      /^([\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^::([\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){2}:([\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){3}:([\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^:((:[\da-fA-F]{1,4}){1,6}|:)$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)$|^([\da-fA-F]{1,4}:){2}((:[\da-fA-F]{1,4}){1,4}|:)$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?$|^([\da-fA-F]{1,4}:){6}:$/
    if (type) {
      if (type === 'ipv4' && v4.test(str)) {
        return true
      }
      return type === 'ipv6' && v6.test(str)
    }
    return v4.test(str) || v6.test(str)
  },
  // 校验ipv4ipv6带掩码
  validatorIpForm(values: string, isMask = false) {
    const filterStr = utils.getFilterString(values)
    const allRightIp = filterStr.every((item) => {
      return utils.checkIPv4(item?.trim(), isMask) || utils.checkIPv6(item?.trim(), isMask)
    })
    // 根据掩码判断是否是合法的IP段
    const isMaskIp = isMask ? '段' : ''
    return allRightIp
      ? Promise.resolve()
      : Promise.reject(`IP${isMaskIp}不合法，请输入合法的IP${isMaskIp}`)
  },

  validatorIpFormWithInput(values: string, isMask = false) {
    //  根据掩码判断是否是合法的IP段
    const isMaskIp = isMask ? '段' : ''
    if (!values) return Promise.reject(`IP${isMaskIp}不合法，请输入合法的IP${isMaskIp}`)
    const allRightIp =
      utils.checkIPv4(values?.trim(), isMask) || utils.checkIPv6(values?.trim(), isMask)
    return allRightIp
      ? Promise.resolve()
      : Promise.reject(`IP${isMaskIp}不合法，请输入合法的IP${isMaskIp}`)
  },
  checkIpAuthUsedIpAddr(ip: string) {
    try {
      // const [parsed, prefixLength] = ipaddr.parseCIDR(ip)
      const strArr = ip.split('/')
      const [ipString, mask] = strArr

      const prefixLength = Number(mask)
      // ipv4 0-32 8的倍数
      if (utils.checkIPv4Regex()?.test(ipString)) {
        if (prefixLength >= 1 && prefixLength <= 32 && prefixLength % 8 === 0) {
          return true
        }
        return false
      }
      // ipv6 32-128 4的倍数
      if (utils.checkIPv6Regex()?.test(ipString)) {
        if (prefixLength >= 32 && prefixLength <= 128 && prefixLength % 4 === 0) {
          return true
        }
        return false
      }
      return false
    } catch (e) {
      return false
    }
  },
  checkIpWithRegex(ips: string, isMultiple = false) {
    const checkMask = (ip: string) => {
      try {
        const strArr = ip.split('/')
        const [ipString, mask] = strArr

        const prefixLength = Number(mask)
        // ipv4 1-30
        if (utils.checkIPv4Regex()?.test(ipString)) {
          if (prefixLength >= 1 && prefixLength <= 30) {
            return true
          }
          return false
        }
        // ipv6 30-127
        if (utils.checkIPv6Regex()?.test(ipString)) {
          if (prefixLength >= 30 && prefixLength <= 127) {
            return true
          }
          return false
        }
        return false
      } catch (e) {
        return false
      }
    }
    try {
      if (isMultiple) {
        const filterStr = utils.getFilterString(ips)
        const allRightIp = filterStr.every((item) => {
          return checkMask(item?.trim())
        })

        return allRightIp
      }
      return checkMask(ips?.trim())
    } catch (e) {
      return false
    }
  },
  /**
   * 使用ipaddr校验IP地址,ipv4和ipv6，支持掩码，支持多个IP地址或单个IP地址
   */
  checkIPUsedIpAddr(ip: string, isMultiple = false, isMask = false) {
    const checkMask = (ip: string, isMask: boolean) => {
      // 拆分IP地址和掩码
      const [parsed, prefixLength] = ipaddr.parseCIDR(ip)

      if (isMask) {
        if (parsed instanceof ipaddr.IPv4) {
          if (prefixLength >= 1 && prefixLength <= 30) {
            return true
          }
          return false
        }

        if (parsed instanceof ipaddr.IPv6) {
          if (prefixLength >= 30 && prefixLength <= 127) {
            return true
          }
          return false
        }
        return false
      }
      return parsed.kind() === 'ipv4' || parsed.kind() === 'ipv6'
    }

    try {
      if (isMultiple) {
        const filterStr = utils.getFilterString(ip)
        const allRightIp = filterStr.every((item) => {
          return checkMask(item, isMask)
        })

        return allRightIp
      }
      return checkMask(ip, isMask)
    } catch (e) {
      throw new Error(`Invalid IP address: ${ip}`)
    }
  },

  // 校验IP地址
  validatorIp(value: string) {
    return utils.checkIpv4Ipv6(value?.trim())
      ? Promise.resolve()
      : Promise.reject('IP地址不合法，请输入合法的IP地址')
  },

  // 校验主机名
  check_ipname(str: string) {
    const reg = /^([a-zA-Z0-9\\-_]{1,63}|\\*)(\\.[a-zA-Z0-9\\-_]{1,63}){0,62}$/
    return reg.test(str)
  },

  // 校验MAC地址 支持中线，冒号和无分隔的格式输入
  checkMac(str: string) {
    const reg = /^((([\da-f]{2}:){5}|([\da-f]{2}-){5}|([\da-f]{2}){5})[\da-f]{2})$/i
    return reg.test(str)
  },
  // 校验MAC地址 支持中线，冒号和无分隔的格式输入或通配符的形式
  checkMacWithWildcard(str: string) {
    const reg = /^((([\da-f]{2}:){1,5}|([\da-f]{2}-){1,5}|([\da-f]{2}){1,5})(\*))$/i
    return utils.checkMac(str) || reg.test(str)
  },

  checkUrl(str: string) {
    const reg =
      '^((https|http|ftp|rtsp|mms)?://)' +
      "?(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?" + // ftp的user@
      '(([0-9]{1,3}.){3}[0-9]{1,3}' + // IP形式的URL- 199.194.52.184
      '|' + // 允许IP和DOMAIN（域名）
      "([0-9a-zA-Z_!~*'()-]+.)*" + // 域名- www.
      '([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].' + // 二级域名
      '[a-zA-Z]{2,6})' + // first level domain- .com or .museum
      '(:[0-9]{1,4})?' + // 端口- :80
      '((/?)|' +
      "(/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?)$"
    return new RegExp(reg).test(str)
  },
  // 大于等于min小于max的整数
  check_minmax(str: string, min: number, max: number) {
    const strr = parseFloat(str)
    const ptr = /^[0-9]\d*$/
    if ((strr > min || strr === min) && strr < max && ptr.test(str)) {
      return true
    }
    return false
  },
  // 校验邮箱
  checkEmail(str: string) {
    const ptr = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return ptr.test(str)
  },
  checkEmailFormReg() {
    return {
      pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      message: '请输入正确的邮箱地址',
    }
  },
  // 校验手机号
  checkPhone(str: string) {
    const ptr = /^1[3-9]\d{9}$/
    return ptr.test(str)
  },
  checkPhoneFormReg() {
    return {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确的手机号',
    }
  },

  getSubnetsList(ip: string) {
    try {
      // const [parsed, prefixLength] = ipaddr.parseCIDR(ip)
      // console.log(parsed, prefixLength)
      // 根据cidr的掩码获取网络掩码列表
      // const ipaddr = require('ipaddr.js')
      // const subnets = ipaddr.subnet(parsed, prefixLength)
    } catch (e) {
      throw new Error(`Invalid IP address: ${ip}`)
    }
  },
  calculatePercentage(num: number, total: number) {
    if (total === 0) return 0
    return Math.round(Number((num / total).toFixed(2)) * 100)
  },
  uniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
  },
  // 转换qps，大于等于1的是整数，小于1的保留两位小数 但是可能是字符串。也可能为空，可能为0
  transformQps(qps: string | number | undefined) {
    if (!qps) return qps
    const qpsNum = Number(qps)
    if (qpsNum >= 1) {
      return Math.round(qpsNum)
    }
    return Number(qpsNum.toFixed(2))
  },
  // 校验数字范围
  checkNumRank(num: number, arr: number[]) {
    const [min, max] = arr
    if (num < min || num > max) return false
    return true
  },
  checkSequence(str: string) {
    const reg = /^\d+(,\d+)*$/
    return reg.test(str)
  },
  /**
   * @description: 校验是否数组中是否有重复的值
   * @param arr 数组, key 数组中对象的key
   * @returns boolean
   * @example [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 1, name: 'a'}] => true
   * @example [{id: 1, name: 'a'}, {id: 1, name: 'b'}, {id: 3, name: 'c'}] => true
   */
  checkRepeatArrayObj(arr: { [key: string]: string }[], key?: string) {
    // 有key的情况下，根据key判断是否有重复的值
    if (key) {
      const newArr = arr?.map((item) => item[key || ''])
      const set = new Set(newArr)
      return set.size !== newArr?.length
    }
    // 没有key的情况下，根据整个对象判断是否有重复的值, 属性值顺序不同也会判断为重复， [{id:1, name:'a'}, {name:'a', id:1}] => true
    const seenObjects = new Set()

    for (const obj of arr) {
      const sortedString = JSON.stringify(obj, Object.keys(obj).sort())

      if (seenObjects.has(sortedString)) {
        return true // 有重复值
      }

      seenObjects.add(sortedString)
    }

    return false // 没有重复值
  },
}

export default utils
