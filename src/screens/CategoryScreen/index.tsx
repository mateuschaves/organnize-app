import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { CategoryTitle, Container, Content, Row } from './styles'
import CategoryViewService from './view.service'
import EmptyList from './components/EmptyList'
import { PlusCircle } from 'phosphor-react-native'
import ListItem from './components/ListItem'

export default function CategoryScreen() {
  const { categories, showPrompt, showDeleteAlert } = CategoryViewService()

  return (
    <Container>
      <Content>
        <Row>
          <CategoryTitle>{`Suas\ncategorias`}</CategoryTitle>
           <TouchableOpacity onPress={showPrompt}>
            <PlusCircle size={36} />
         </TouchableOpacity> 
        </Row>
        <FlatList
          style={{ width: '100%' }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          data={categories}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
           <ListItem name={item.name} onLongPress={() => showDeleteAlert(item.id)} />
          )}
          ListEmptyComponent={EmptyList}
        />
      </Content>
    </Container>
  )
}