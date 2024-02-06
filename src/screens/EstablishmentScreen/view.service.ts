import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Establishment } from '../../models';
import establishmentService from '../../services/establishment.service';

type EstablishmentViewServiceProps = {
    EstablishmentService?: typeof establishmentService;
}

function EstablishmentViewService(props?: EstablishmentViewServiceProps) {
    const EstablishmentService = props?.EstablishmentService || establishmentService;

    const [establishments, setEstablishments] = useState<Establishment[]>([])

    useEffect(() => {
        EstablishmentService
            .list()
            .then(setEstablishments)
    }, [])

    function showPrompt() {
        Alert.prompt(
            'Novo estabelecimento',
            'Digite o nome do estabelecimento',
            handleCreateEstablishment
        )
    }

    function showDeleteAlert(id: number) {
        Alert.alert(
            'Excluir estabelecimento',
            'Tem certeza que deseja excluir este estabelecimento?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: () => handleDeleteEstablishment(id)
                }
            ]
        )
    }

    function handleDeleteEstablishment(id: number) {
        EstablishmentService
            .delete(id)
            .then(() => {
                setEstablishments(establishments.filter(establishment => establishment.id !== id))
            })
    }

    function handleCreateEstablishment(name: string) {
        EstablishmentService
            .create(name)
            .then((newEstablishment) => {
                setEstablishments([...establishments, newEstablishment]);
            })
    }

    return {
        establishments,
        showPrompt,
        showDeleteAlert
    }
}

export default EstablishmentViewService;