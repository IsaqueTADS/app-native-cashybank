import React from 'react'

interface ISnackbarContext {
  message: string
  visible: boolean
  show(message: string): void
}

const snackbarContext = React.createContext<ISnackbarContext | null>(null)

export function SnackbarProvider({ children }: React.PropsWithChildren) {
  const [message, setMessage] = React.useState('')
  const [visible, setVisible] = React.useState(false)

  function show(message: string) {
    if (message.trim().length > 1) {
      setMessage(message)
      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 3000)
    }
  }

  return (
    <snackbarContext.Provider value={{ message, visible, show }}>
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
