import React, { Component } from 'react';

import ItemList from './item-list.jsx';

export default class App extends Component {
  constructor(){
    super();
  }
  
  render() {
    return(
      <div className='main-content'>
        <ItemList></ItemList>
      </div>
    );
  }
}