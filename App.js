import React, { useState, useEffect } from 'react';
import { Modal, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Box = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
`;

const BoxBody = styled.View`
  width: 90%;
  height: 300px;
  background-color: #FFF;
  border-radius: 5px;
  align-self: center;
  top: 50%;
  margin-top: -150px;
`;

const Botao = styled.Button``;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <Page>
      <Botao title="Mostrar modal" onPress={() => setVisible(true)}/>

      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setVisible(false)}
      >
        <Box activeOpacity={1} onPressOut={() => setVisible(false)} />
        <BoxBody>
          <Botao title="Fechar" onPress={() => setVisible(false)}/>
        </BoxBody>
      </Modal>
    </Page>
  );
}
