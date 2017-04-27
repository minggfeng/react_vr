class student extends React.Component {
  constructor () {
    super()
  }
  render() {
    return (
      <Box
        dimWidth={0.6}
        dimDepth={0.4}
        dimHeight={0.4}
        style={{
        color: '#FFF',
        layoutOrigin: [0, 0],
        transform: [{translate: {this.props.student.position}}],
        }}
        texture={{this.props.student.image}}
      />
    );
  }
};