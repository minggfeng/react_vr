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
    name: 'ali_elgaiadi',
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



