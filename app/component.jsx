import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  defaultProps() {
    return {
      initialCount: 0
    }
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick.bind(this)} className="one two">
        Clicks: {this.state.count}
      </div>
    );
  }
}

Hello.propTypes = { initialCount: React.PropTypes.number };
Hello.defaultProps = { initialCount: 0 };

export default Hello;