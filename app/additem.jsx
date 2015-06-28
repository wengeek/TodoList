import React from 'react';
import ClassNames from 'classnames';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needShow: props.needShow
    };
  }

  handleClick() {
    console.log('click');
    this.props.needShow = false;
    this.setState({needShow: false});
  }

  render() {
    var classes = ClassNames({
        'addpop': true,
        'show': this.props.needShow
      });

    return (
      <div className={classes}>
        <div className="add-input">
          <h3>Add Task</h3>
          <div className="form-group">
            <label>Name</label>
            <input type="text"/>
          </div>

        </div>
      </div>
    );
  }
}

export default AddItem;