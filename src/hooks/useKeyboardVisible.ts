import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'

export function useKeyboardVisible() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyBoardShowListener = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardVisible(true),
    )
    const keyBoardHideListener = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardVisible(false),
    )
    return () => {
      keyBoardShowListener.remove()
      keyBoardHideListener.remove()
    }
  }, [])

  return isKeyboardVisible
}
