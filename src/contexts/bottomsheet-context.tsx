import React, { useCallback } from 'react'

import { useTheme } from '@/hooks/use-theme'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { TouchableWithoutFeedback, View } from 'react-native'

interface BottomSheetContext {
  openBottomsheet: (content: React.ReactNode, index: number) => void
  closeBottomSheet: () => void
}

export const bottomSheetContext = React.createContext({} as BottomSheetContext)

export function BottomSheetProvider({ children }: React.PropsWithChildren) {
  const [content, setContent] = React.useState<React.ReactNode | null>(null)
  const [index, setIndex] = React.useState(-1)
  const [isopen, setIsOpen] = React.useState(false)
  const bottomsheetRef = React.useRef<BottomSheet>(null)
  const snapPoints = ['70%', '90%']
  const theme = useTheme()

  const openBottomsheet = React.useCallback(
    (newContent: React.ReactNode, index: number) => {
      setIndex(index)
      setContent(newContent)
      setIsOpen(true)
      requestAnimationFrame(() => {
        bottomsheetRef.current?.snapToIndex(index)
      })
    },
    [],
  )
  const closeBottomSheet = React.useCallback(() => {
    setIsOpen(false)
    setContent(null)
    setIndex(-1)
    bottomsheetRef.current?.close()
  }, [])

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setIsOpen(false)
    }
  }, [])

  return (
    <bottomSheetContext.Provider value={{ openBottomsheet, closeBottomSheet }}>
      <View className="relative flex-1 ">
        {children}
        {isopen && (
          <TouchableWithoutFeedback onPress={closeBottomSheet}>
            <View className="absolute inset-0 z-10 bg-red-600" />
          </TouchableWithoutFeedback>
        )}
        <BottomSheet
          ref={bottomsheetRef}
          snapPoints={snapPoints}
          index={index}
          onChange={handleSheetChanges}
          enablePanDownToClose
          backgroundStyle={{
            backgroundColor: theme.colors.muted,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            elevation: 9,
          }}
        >
          <BottomSheetScrollView>{content}</BottomSheetScrollView>
        </BottomSheet>
      </View>
    </bottomSheetContext.Provider>
  )
}

export function useBottomSheetContext() {
  const context = React.useContext(bottomSheetContext)

  if (!context) {
    throw new Error(
      'useBottomSheetContext must be used within a <BottomSheetProvider>',
    )
  }

  return context
}
