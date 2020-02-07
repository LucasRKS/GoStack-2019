import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorret={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
        <SubmmitButton>
          <Icon name="add" size={20} color="#FFF" />
        </SubmmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
