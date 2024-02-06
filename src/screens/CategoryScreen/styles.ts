import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
`;

export const Content = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;

    padding: 20px;
`;

export const CategoryTitle = styled.Text`
    font-size: 26px;
    font-weight: 700;

    color: #000;
    margin-bottom: 20px;

    text-align: left;
    align-self: flex-start;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    margin-bottom: 20px;
`;