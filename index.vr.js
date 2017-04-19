import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Box,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('white_background.png')}/>
        <Box
            dimWidth={0.6}
            dimDepth={0.4}
            dimHeight={0.4}
            style={{
            color: '#FFF',
            layoutOrigin: [0, 0],
            transform: [{translate: [0, 0, -4]}],
            }}
            texture={'../static_assets/hack_reactor.png'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [1, 0, -4]}],
          }}
          texture={'../static_assets/student_photos/bariz_sudhanshu.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [-1, 0, -4]}],
          }}
          texture={'../static_assets/student_photos/agnes_chu.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [-1, 1, -4]}],
          }}
          texture={'../static_assets/student_photos/airyque_ervin.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [0, 1, -4]}],
          }}
          texture={'../static_assets/student_photos/alex_everhart.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [1, 1, -4]}],
          }}
          texture={'../static_assets/student_photos/alex_liang.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [1, -1, -4]}],
          }}
          texture={'../static_assets/student_photos/ali_elgiadi.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [0, -1, -4]}],
          }}
          texture={'../static_assets/student_photos/anthony_wong.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [-1, -1, -4]}],
          }}
          texture={'../static_assets/student_photos/bill_beedle.jpg'}
        />


        <Box
            dimWidth={0.6}
            dimDepth={0.4}
            dimHeight={0.4}
            style={{
            color: '#FFF',
            layoutOrigin: [0, 0],
            transform: [{translate: [0, 0, -2]}],
            }}
            texture={'../static_assets/hack_reactor.png'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [1, 0, -2]}],
          }}
          texture={'../static_assets/student_photos/charles_kim.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [-1, 0, -2]}],
          }}
          texture={'../static_assets/student_photos/chris_keating.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [-1, 1, -2]}],
          }}
          texture={'../static_assets/student_photos/david_gould.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [0, 1, -2]}],
          }}
          texture={'../static_assets/student_photos/doug_cox.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [1, 1, -2]}],
          }}
          texture={'../static_assets/student_photos/drew_bedford_hart.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [1, -1, -2]}],
          }}
          texture={'../static_assets/student_photos/gunpreet_singh.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [0, -1, -2]}],
          }}
          texture={'../static_assets/student_photos/he_liu.jpg'}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.4}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: [-1, -1, -2]}],
          }}
          texture={'../static_assets/student_photos/jack_ren.jpg'}
        />


      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
