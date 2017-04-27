var studentData = [
  {
    name: 'agnes_chu',
    image: '../static_assets/student_photos/agnes_chu.jpg',
    position: []
  },
  {
    name: 'airyque_ervin',
    image: '../static_assets/student_photos/airyque_ervin.jpg',
    position: []
  },
  {
    name: 'alan_zheng',
    image: '../static_assets/student_photos/alan_zheng.jpg',
    position: []
  },
  {
    name: 'alex_everhart',
    image: '../static_assets/student_photos/alex_everhart.jpg',
    position: []
  },
  {
    name: 'ali_elgiadi',
    image: '../static_assets/student_photos/ali_elgiadi.jpg',
    position: []
  },
  {
    name: 'anthony_wong',
    image: '../static_assets/student_photos/anthony_wong.jpg',
    position: []
  },
  {
    name: 'bariz_sudhanshu',
    image: '../static_assets/student_photos/bariz_sudhanshu.jpg',
    position: []
  },
  {
    name: 'bill_beedle',
    image: '../static_assets/student_photos/bill_beedle.jpg',
    position: []
  },
  {
    name: 'charles_kim',
    image: '../static_assets/student_photos/charles_kim.jpg',
    position: []
  },
  {
    name: 'chris_keating',
    image: '../static_assets/student_photos/chris_keating.jpg',
    position: []
  },
  {
    name: 'david_gould',
    image: '../static_assets/student_photos/david_gould.jpg',
    position: []
  },
  {
    name: 'doug_cox',
    image: '../static_assets/student_photos/doug_cox.jpg',
    position: []
  },
  {
    name: 'drew_bedford_hart',
    image: '../static_assets/student_photos/drew_bedford_hart.jpg',
    position: []
  },
  {
    name: 'gunpreet_singh',
    image: '../static_assets/student_photos/gunpreet_singh.jpg',
    position: []
  },
  {
    name: 'he_liu',
    image: '../static_assets/student_photos/he_liu.jpg',
    position: []
  },
  {
    name: 'jack_ren',
    image: '../static_assets/student_photos/jack_ren.jpg',
    position: []
  },
  {
    name: 'jeff_chen',
    image: '../static_assets/student_photos/jeff_chen.jpg',
    position: []
  },
  {
    name: 'jim_lee',
    image: '../static_assets/student_photos/jim_lee.jpg',
    position: []
  },
  {
    name: 'joe_zizzo',
    image: '../static_assets/student_photos/joe_zizzo.jpg',
    position: []
  },
  {
    name: 'jon_eric_escobedo',
    image: '../static_assets/student_photos/jon_eric_escobedo.jpg',
    position: []
  },
  {
    name: 'kara_marnell',
    image: '../static_assets/student_photos/kara_marnell.jpg',
    position: []
  },
  {
    name: 'kriz_cortes',
    image: '../static_assets/student_photos/kriz_cortes.jpg',
    position: []
  },
  {
    name: 'lavanya_ammi_chandras',
    image: '../static_assets/student_photos/lavanya_ammi_chandras.jpg',
    position: []
  },
  {
    name: 'michael_sermersheim',
    image: '../static_assets/student_photos/michael_sermersheim.jpg',
    position: []
  },
  {
    name: 'ming_feng',
    image: '../static_assets/student_photos/ming_feng.jpg',
    position: []
  },
  {
    name: 'nick_anderson',
    image: '../static_assets/student_photos/nick_anderson.jpg',
    position: []
  },
  {
    name: 'oliver_ullman',
    image: '../static_assets/student_photos/oliver_ullman.jpg',
    position: []
  },
  {
    name: 'preda_wen',
    image: '../static_assets/student_photos/preda_wen.jpg',
    position: []
  },
  {
    name: 'raj_kale',
    image: '../static_assets/student_photos/raj_kale.jpg',
    position: []
  },
  {
    name: 'rich_werden',
    image: '../static_assets/student_photos/rich_werden.jpg',
    position: []
  },
  {
    name: 'salih_abuelyaman',
    image: '../static_assets/student_photos/salih_abuelyaman.jpg',
    position: []
  },
  {
    name: 'sheyda_rezaee',
    image: '../static_assets/student_photos/sheyda_rezaee.jpg',
    position: []
  },
  {
    name: 'steve_kim',
    image: '../static_assets/student_photos/steve_kim.jpg',
    position: []
  },
  {
    name: 'tom_dickson',
    image: '../static_assets/student_photos/tom_dickson.jpg',
    position: []
  },
  {
    name: 'tyler_pate',
    image: '../static_assets/student_photos/tyler_pate.jpg',
    position: []
  },
  {
    name: 'vincent_van_buskirk',
    image: '../static_assets/student_photos/vincent_van_buskirk.jpg',
    position: []
  },
];

console.log(studentData);


var circlePositions = function(radius, steps, centerX, centerZ, studentData, y) {
    var xValues = [centerX];
    var zValues = [centerZ];
    for (var i = 1; i < steps; i++) {
        xValues[i] = (centerX + radius * Math.cos(Math.PI * i / steps-Math.PI/2));
        studentData[i-1]['position'].push(xValues[i]);
        zValues[i] = (centerZ + radius * Math.sin(Math.PI * i / steps-Math.PI/2));
        studentData[i-1]['position'].push(y);
        studentData[i-1]['position'].push(zValues[i]);
  }
}

circlePositions(4, 10, 0, 0, studentData.slice(0,9), 2);
circlePositions(4, 10, 0, 0, studentData.slice(9,18), 1);
circlePositions(4, 10, 0, 0, studentData.slice(18,27), 0);
circlePositions(4, 10, 0, 0, studentData.slice(27,36), -1);


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

export default class hrsfm75 extends React.Component {
  render() {
    return (
      <View >
        <Pano source={asset('white_background.png')}/>
        <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[0]['position']}],
          }}
          texture={studentData[0]['image']}
        />
        <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[1]['position']}],
          }}
          texture={studentData[1]['image']}
        />
      <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[2]['position']}],
          }}
          texture={studentData[2]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[3]['position']}],
          }}
          texture={studentData[3]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[4]['position']}],
          }}
          texture={studentData[4]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[5]['position']}],
          }}
          texture={studentData[5]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, ],
          transform: [{translate: studentData[6]['position']}],
          }}
          texture={studentData[6]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[7]['position']}],
          }}
          texture={studentData[7]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[8]['position']}],
          }}
          texture={studentData[8]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[9]['position']}],
          }}
          texture={studentData[9]['image']}
        />
      <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[10]['position']}],
          }}
          texture={studentData[10]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[11]['position']}],
          }}
          texture={studentData[11]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[12]['position']}],
          }}
          texture={studentData[12]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[13]['position']}],
          }}
          texture={studentData[13]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, ],
          transform: [{translate: studentData[14]['position']}],
          }}
          texture={studentData[14]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[15]['position']}],
          }}
          texture={studentData[15]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[16]['position']}],
          }}
          texture={studentData[16]['image']}
        />
            <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[17]['position']}],
          }}
          texture={studentData[17]['image']}
        />
        <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[18]['position']}],
          }}
          texture={studentData[18]['image']}
        />
      <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[19]['position']}],
          }}
          texture={studentData[19]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[20]['position']}],
          }}
          texture={studentData[20]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[21]['position']}],
          }}
          texture={studentData[21]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[22]['position']}],
          }}
          texture={studentData[22]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, ],
          transform: [{translate: studentData[23]['position']}],
          }}
          texture={studentData[23]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[24]['position']}],
          }}
          texture={studentData[24]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[25]['position']}],
          }}
          texture={studentData[25]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[26]['position']}],
          }}
          texture={studentData[26]['image']}
        />
      <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[27]['position']}],
          }}
          texture={studentData[27]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[28]['position']}],
          }}
          texture={studentData[28]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[29]['position']}],
          }}
          texture={studentData[29]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[30]['position']}],
          }}
          texture={studentData[30]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, ],
          transform: [{translate: studentData[31]['position']}],
          }}
          texture={studentData[31]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[32]['position']}],
          }}
          texture={studentData[32]['image']}
        />
                <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[33]['position']}],
          }}
          texture={studentData[33]['image']}
        />
        <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[34]['position']}],
          }}
          texture={studentData[34]['image']}
        />

        <Box
          dimWidth={0.6}
          dimDepth={0.01}
          dimHeight={0.4}
          style={{
          layoutOrigin: [0, 0],
          transform: [{translate: studentData[35]['position']}],
          }}
          texture={studentData[35]['image']}
        />

      </View>
    );
  }
};

AppRegistry.registerComponent('hrsfm75', () => hrsfm75);
