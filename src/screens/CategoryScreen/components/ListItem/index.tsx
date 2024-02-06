import React from 'react'
import { Container, Title } from './styles'
import { Tag } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native';

type ListItemProps = {
    name: string;
} & TouchableOpacityProps

export default function ListItem({name, onLongPress}: ListItemProps) {
  return (
    <Container onLongPress={onLongPress} style={{
        width: '100%',
        flex: 1,
        backgroundColor: "#fff",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 16,

        flexDirection: 'row',
        alignItems: 'center',
    }}>
        <Tag size={24} />
        <Title>{name}</Title>
    </Container>
  )
}