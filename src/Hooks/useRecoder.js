import React, { useState } from 'react';
import AudioRecorderPlayer,{
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType} from 'react-native-audio-recorder-player';

function useRecoder() {
    const [recordSecs, setRecordSecs] = useState(0);
    const [recordTime, setRecordTime] = useState('00:00:00');
    const [currentPositionSec, setCurrentPositionSec] = useState('00:00:00');
    const [currentDurationSec, setCurrentDurationSec] = useState('00:00:00');
    const [uri, setUri] = useState('');
    const [duration, setDuration] = useState('00:00:00');
    const audioRecorderPlayer = new AudioRecorderPlayer();

   

    const onStartRecord = async () => {
        const audioSet = {
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
            AudioSourceAndroid: AudioSourceAndroidType.MIC,
            AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
            AVNumberOfChannelsKeyIOS: 2,
            AVFormatIDKeyIOS: AVEncodingOption.aac,
        };

       const uri = await audioRecorderPlayer.startRecorder(null,audioSet);
       setUri(uri)
        audioRecorderPlayer.addRecordBackListener((e) => {
            setRecordSecs(e.currentPosition);
            setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
            
        });
          console.log(`uri: ${uri}`);
    };

    const onStopRecord = async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
        setRecordSecs(0);
        console.log(result);
    };

    const onStartPlay = async (e) => {
        console.log('onStartPlay');
       
        const path = 'hello.m4a';
        const msg = await audioRecorderPlayer.startPlayer(path);
        audioRecorderPlayer.setVolume(1.0);
        console.log(msg);
        audioRecorderPlayer.addPlayBackListener((e) => {
          if (e.currentPosition === e.duration) {
            console.log('finished');
            audioRecorderPlayer.stopPlayer();
          }
          setCurrentPositionSec(e.current_position);
          setCurrentDurationSec(e.duration);
          setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
          
        });
    };

    return [onStartRecord,onStopRecord,recordTime,onStartPlay]
}

export default useRecoder;