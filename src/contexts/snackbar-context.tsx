import React from 'react'

interface ISnackbarContext {
  message: string
  visible: boolean
  type: SnackMessageType
  notify(message: string, messageType?: SnackMessageType): void
}

type SnackMessageType = "SUCCESS" | "ERROR"

const snackbarContext = React.createContext<ISnackbarContext | null>(null)

export function SnackbarProvider({ children }: React.PropsWithChildren) {
  const [message, setMessage] = React.useState('')
  const [visible, setVisible] = React.useState(false)
  const [type, setType] = React.useState<SnackMessageType>("ERROR")

  function notify(message: string, messageType?: SnackMessageType) {
    if (message.trim().length > 1) {
      setMessage(message)
      setVisible(true)
      setType(messageType || "ERROR")

      setTimeout(() => {
        setVisible(false)
        setMessage("")
        setType("ERROR")
      }, 3000)
    }
  }

  return (
    <snackbarContext.Provider value={{ message, visible, type, notify }}>
      {children}
    </snackbarContext.Provider>
  )
}

export function useSnackbarContext() {
  const context = React.useContext(snackbarContext)

  if (!context) {
    throw new Error(
      'useSnackbarContext must be used within a <SnackbarProvider>',
    )
  }

  return context
}
