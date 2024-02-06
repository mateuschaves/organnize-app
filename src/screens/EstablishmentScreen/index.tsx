import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { EstablishmentTitle, Container, Content, Row } from './styles'
import EstablishmentViewService from './view.service'
import EmptyList from './components/EmptyList'
import { PlusCircle } from 'phosphor-react-native'
import ListItem from './components/ListItem'

export default function EstablishmentScreen() {
  const { establishments, showPrompt, showDeleteAlert } = EstablishmentViewService()

  return (
    <Container>
      <Content>
        <Row>
          <EstablishmentTitle>{`Seus\nEstabelecimentos`}</EstablishmentTitle>
           <TouchableOpacity onPress={showPrompt}>
            <PlusCircle size={36} />
         </TouchableOpacity> 
        </Row>
        <FlatList
          style={{ width: '100%' }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          data={establishments}
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