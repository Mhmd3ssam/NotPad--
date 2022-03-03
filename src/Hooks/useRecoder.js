import React, { useState } from 'react';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

function useRecoder() {
    const [recordSecs, setRecordSecs] = useState(0);
    const [recordTime, setRecordTime] = useState('00:00:00');
    const [currentPositionSec, setCurrentPositionSec] = useState('00:00:00');
    const [currentDurationSec, setCurrentDurationSec] = useState('00:00:00');
    const [playTime, setPlayTime] = useState('00:00:00');
    const [duration, setDuration] = useState('00:00:00');
    const audioRecorderPlayer = new AudioRecorderPlayer();

    const onStartRecord = async () => {
       const uri = await audioRecorderPlayer.startRecorder();
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
        const msg = await audioRecorderPlayer.startPlayer();
        audioRecorderPlayer.setVolume(1.0);
        console.log(msg);
        // audioRecorderPlayer.addPlayBackListener((e) => {
        //   if (e.currentPosition === e.duration) {
        //     console.log('finished');
        //     audioRecorderPlayer.stopPlayer();
        //   }
        //   setState({
        //     currentPositionSec: e.current_position,
        //     currentDurationSec: e.duration,
        //     playTime: this.audioRecorderPlayer.mmssss(
        //       Math.floor(e.current_position),
        //     ),
        //     duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        //   });
        // });
    };

    return [onStartRecord,onStopRecord,recordTime,onStartPlay]
}

export default useRecoder;