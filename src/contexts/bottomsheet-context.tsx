import React, { useCallback } from 'react'

import { useTheme } from '@/hooks/use-theme'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import { View } from 'react-native'

interface BottomSheetContext {
  openBottomsheet: (content: React.ReactNode, index: number) => void
  closeBottomSheet: () => void
}

export const bottomSheetContext = React.createContext({} as BottomSheetContext)

export function BottomSheetProvider({ children }: React.PropsWithChildren) {
  const [content, setContent] = React.useState<React.ReactNode | null>(null)
  const [index, setIndex] = React.useState(-1)
  const bottomsheetRef = React.useRef<BottomSheet>(null)
  const snapPoints = ['70%', '90%']
  const theme = useTheme()

  const openBottomsheet = React.useCallback(
    (newContent: React.ReactNode, index: number) => {
      setIndex(index)
      setContent(newContent)
      requestAnimationFrame(() => {
        bottomsheetRef.current?.snapToIndex(index)
      })
    },
    [],
  )

  const closeBottomSheet = React.useCallback(() => {
    setContent(null)
    setIndex(-1)
    bottomsheetRef.current?.close()
  }, [])

  const handleSheetChanges = useCallback(
    (newIndex: number) => {
      if (newIndex === -1) {
        setContent(null)
        setIndex(-1)
      }
    },
    [],
  )

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="close"
        opacity={0.7}
        style={[props.style, { backgroundColor: 'rgba(0,0,0,0.7)' }]}
      />
    ),
    [],
  )

  return (
    <bottomSheetContext.Provider value={{ openBottomsheet, closeBottomSheet }}>
      <View className="flex-1">{children}</View>
      <BottomSheet
        ref={bottomsheetRef}
        snapPoints={snapPoints}
        index={index}
        onChange={handleSheetChanges}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: theme.colors.background,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          elevation: 9,
        }}
      >
        <BottomSheetScrollView>{content}</BottomSheetScrollView>
      </BottomSheet>
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
