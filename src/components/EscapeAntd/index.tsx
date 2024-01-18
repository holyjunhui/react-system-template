/* eslint-disable import/no-mutable-exports */
import {
  message as antdMessage,
  notification as antdNotification,
  Modal as antdModal,
  App,
} from 'antd'

import type { MessageInstance } from 'antd/es/message/interface'
import type { NotificationInstance } from 'antd/es/notification/interface'
import type { ModalStaticFunctions } from 'antd/es/modal/confirm'

let message: MessageInstance = antdMessage
let notification: NotificationInstance = antdNotification

// because warn is deprecated, so we need to remove it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { warn, ...resetFns } = antdModal
let modal: Omit<ModalStaticFunctions, 'warn'> = resetFns

/**
 * This component is used to escape the antd's static functions.
 */
function EscapeAntd() {
  const staticFunctions = App.useApp()

  message = staticFunctions.message
  notification = staticFunctions.notification
  modal = staticFunctions.modal

  return null
}

// eslint-disable-next-line react-refresh/only-export-components
export { message, notification, modal }

export default EscapeAntd
