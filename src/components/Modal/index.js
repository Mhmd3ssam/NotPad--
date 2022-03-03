import React from "react";
import { Modal, Button, ScrollView, Text, Center, VStack, NativeBaseProvider } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { Pressable } from 'react-native';
import Mic from 'react-native-vector-icons/Feather';
import { Styles } from './styles';

import useRecoder from '../..//Hooks/useRecoder';

function ModalBtn() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState("md");
  
  const navigation = useNavigation();
  const [onStartRecord,onStopRecord,recordTime,onStartPlay ] = useRecoder();

 

  return <>
    <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
      <Modal.Content maxH="212">
        <Modal.Header>Record</Modal.Header>
        <Modal.Body>
          <ScrollView>
            <Text>
              {recordTime}
            </Text>
          </ScrollView>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button onPress={() => {
              onStopRecord();
              setModalVisible(false);
              navigation.navigate("Notes");
              onStartPlay();
            }}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
    <Center>
      <VStack space={4}>
        <Pressable style={Styles.micContainer} >
          <Mic name="mic" size={50} style={Styles.mick} onPress={() => {
            setModalVisible(!modalVisible);
            onStartRecord();
            }} />
        </Pressable>
      </VStack>
    </Center>
  </>;
}



export default () => {
  return (
    <NativeBaseProvider>
        <ModalBtn />
    </NativeBaseProvider>
  );
};
