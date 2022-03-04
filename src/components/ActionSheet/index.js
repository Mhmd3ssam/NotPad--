import React from 'react';
import {  Divider, Actionsheet, useDisclose} from "native-base";
import Camera from 'react-native-vector-icons/MaterialCommunityIcons';


const ActionSheet = ({ camera, gallery, iconStyle ="" , edite, isEditeing})=> {
  console.log('edite',isEditeing)
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclose();
    const handelCameraEdite = ()=>{
      isEditeing();
      camera();

    }
    const handelGalleryEdite = ()=>{
      gallery();
      isEditeing();

    }
    return <>
      <Camera onPress={onOpen} name="camera" size={35} style={iconStyle}/>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Divider borderColor="gray.300" />
          <Actionsheet.Item _text={{
            color: "blue.500"
          }}
            onPress={edite?handelCameraEdite:camera}
          >
            {'Take Photo'}
          </Actionsheet.Item>
          <Divider borderColor="gray.300" />
          <Actionsheet.Item _text={{
            color: "blue.500"
          }}
            onPress={edite?handelGalleryEdite:gallery}
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