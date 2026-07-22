import { Text, View, FlatList, FlatListProps } from 'react-native'
import { clsx } from 'clsx'

type Props<T> = FlatListProps<T> & {
  title: string
  emptyMessage?: string
}

export function List<T>({
  title,
  emptyMessage = 'Nenhum item encontrado',
  data,
  renderItem,
  className,
  ...rest
}: Props<T>) {
  return (
    <View className={clsx('flex-1', className)}>
      <Text className="mb-4 mt-6 border-b border-border pb-4 font-body text-base text-foreground">
        {title}
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View className="h-px bg-border" />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text className="font-body text-sm text-muted-foreground">
            {emptyMessage}
          </Text>
        )}
        contentContainerStyle={{ paddingBottom: 72 }}
        {...rest}
      />
    </View>
  )
}
