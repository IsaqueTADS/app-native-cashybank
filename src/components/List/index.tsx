import { clsx } from 'clsx'
import { FlatList, FlatListProps, Text, View } from 'react-native'

type Props<T> = FlatListProps<T> & {
  title?: string
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
      {title && (
        <Text className="mb-4 mt-6  pb-4 font-body text-base text-foreground">
          {title}
        </Text>
      )}
      <View className='border-b border-border'/>
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
