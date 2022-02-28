import React from 'react';
import { Button, Divider, Actionsheet, useDisclose, Center, NativeBaseProvider } from "native-base";


const ActionSheet = ({ camera, gallery })=> {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclose();
    return <>
      <Button onPress={onOpen}>{'Make Note'}</Button>
  
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Divider borderColor="gray.300" />
          <Actionsheet.Item _text={{
            color: "blue.500"
          }}
            onPress={camera}
          >
            {'Take Photo'}
          </Actionsheet.Item>
          <Divider borderColor="gray.300" />
          <Actionsheet.Item _text={{
            color: "blue.500"
          }}
            onPress={gallery}
          >
            {'Gallery'}
          </Actionsheet.Item>
          <Actionsheet.Item _text={{
            color: "blue.500"
          }}
            onPress={onClose}
          >
            {'Cancle'}
          </Actionsheet.Item>
        </Actionsheet.Content>
  
      </Actionsheet>
    </>;
}

export default ActionSheet ;