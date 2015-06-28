import React from 'react';

class Menu extends React.Component {
  constructor() {
    super();
    this.lists = [
      'fa fa-list',
      'fa fa-check-circle',
      'fa fa-close'
    ];
  }

  render() {
    let lists = this.lists.map(function(list, index) {
      let classes = list;
        classes += ' active';
      return (
        <li className={classes}>
        </li>
        );
    });
    return (
      <nav>
        {this.props.curr}
        <ul>
        {lists}
        </ul>
      </nav>
    );
  }
}

export default Menu;