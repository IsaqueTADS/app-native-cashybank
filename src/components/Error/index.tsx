import { Text } from 'react-native'

export const Error = ({ children }: React.PropsWithChildren) => {
  return <Text className="text-destructive">{children}</Text>
}
