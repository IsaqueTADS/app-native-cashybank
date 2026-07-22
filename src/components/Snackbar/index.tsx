import { useSnackbarContext } from '@/contexts/snackbar-context'
import { useEffect } from 'react'
import { Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export function Snackbar() {
  const { visible, message, type } = useSnackbarContext()

  const translateY = useSharedValue(100)
  const opacity = useSharedValue(0)

  useEffect(() => {
    if (visible) {
      opacity.value = withTiming(1, { duration: 300 })
      translateY.value = withTiming(0, { duration: 400 })
    } else {
      opacity.value = withTiming(0, { duration: 200 })
      translateY.value = withTiming(100, { duration: 300 })
    }
  }, [visible, opacity, translateY])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }))

  if (!visible) return <></>

  const bgColor = `${type === "SUCCESS"  ? "bg-primary"   : "bg-destructive"}`

  return (
    <Animated.View
      style={animatedStyle}
      className={`absolute bottom-10 z-10 flex h-[50px] w-[90%] items-center justify-center self-center rounded-xl p-2 ${bgColor}`}
    >
      <Text className="text-bold text-base text-white">{message}</Text>
    </Animated.View>
  )
}
