import React from 'react';
import ClassNames from 'classnames';

/**
 * '+' UIs
 */
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.closePop = this.closePop.bind(this);
    this.preventCls = this.preventCls.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  closePop() {
    this.props.hidePop();
  }

  preventCls(event) {
    event.stopPropagation();
  }

  addItem(e) {
    e.preventDefault();
    let name = this.refs.name.value.trim(),
        desc = this.refs.desc.value.trim();

    if (!name) {
      alert('task name cannot be empty');
      this.refs.name.focus();
      return;
    }

    if (!desc) {
      alert('task description cannot be empty');
      this.refs.desc.focus();
      return;
    }

    this.refs.name.value = '';
    this.refs.desc.value = '';

    this.props.addTask(name, desc);
    this.props.hidePop();
  }

  render() {
    let classes = ClassNames({
      'addpop': true,
      'show': this.props.needShow
    });

    return (
      <div className={classes} onClick={this.closePop}>
        <div className="add-input" onClick={this.preventCls}>
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
            <button onClick={this.addItem}>Submit</button>
          </div>
          <span className="fa fa-close pop-cls" onClick={this.closePop}></span>
        </div>
      </div>
    );
  }
}

export default AddItem;
