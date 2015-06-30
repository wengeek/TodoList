import React from 'react';
import ClassNames from 'classnames';

/**
 * 【添加任务】组件
 */
class AddItem extends React.Component {

  closePop() {
    this.props.hidePop();
  }

  addItem(e) {
    e.preventDefault();
    var name = React.findDOMNode(this.refs.name).value.trim(),
        desc = React.findDOMNode(this.refs.desc).value.trim();
    
    if (!name) {
      alert('task name cannot be empty');
      React.findDOMNode(this.refs.name).focus();
      return;
    }

    if (!desc) {
      alert('task description cannot be empty');
      React.findDOMNode(this.refs.desc).focus();
      return;
    }

    React.findDOMNode(this.refs.name).value = ''; 
    React.findDOMNode(this.refs.desc).value = '';

    this.props.addTask(name, desc);
    this.props.hidePop();
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
            <label>name</label>
            <input type="text" ref="name" />
          </div>
          <div className="form-group">
            <label>desc</label>
            <textarea ref="desc"></textarea>
          </div>
          <div className="form-group">
            <button onClick={this.addItem.bind(this)}>Submit</button>
          </div>          
          <span className="fa fa-close pop-cls" onClick={this.closePop.bind(this)}></span>
        </div>
      </div>
    );
  }
}

export default AddItem;