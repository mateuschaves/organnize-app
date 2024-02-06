import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Category } from '../../models';
import categoryService from '../../services/category.service';

type CategoryViewServiceProps = {
    CategoryService?: typeof categoryService;
}

function CategoryViewService(props?: CategoryViewServiceProps) {
    const CategoryService = props?.CategoryService || categoryService;

    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        CategoryService
            .list()
            .then(setCategories)
    }, [])

    function showPrompt() {
        Alert.prompt(
            'Nova categoria',
            'Digite o nome da categoria',
            handleCreateCategory
        )
    }

    function showDeleteAlert(id: number) {
        Alert.alert(
            'Excluir categoria',
            'Tem certeza que deseja excluir esta categoria?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: () => handleDeleteCategory(id)
                }
            ]
        )
    }

    function handleDeleteCategory(id: number) {
        CategoryService
            .delete(id)
            .then(() => {
                setCategories(categories.filter(category => category.id !== id))
            })
    }

    function handleCreateCategory(name: string) {
        CategoryService
            .create(name)
            .then((newCategory) => {
                setCategories([...categories, newCategory]);
            })
    }

    return {
        categories,
        setCategories,
        showPrompt,
        showDeleteAlert
    }
}

export default CategoryViewService;