import React from 'react';
import {SHOP_DATA} from './constants';
import PreviewCollection from '../../components/PreviewCollection/';

class ShopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: SHOP_DATA,
      counter: 0
    }
  }
  render() {
    const {collections} = this.state;
    return (
      <div className="shopPage">
        {
          collections.map(({id, ...props}) => (
            <PreviewCollection key={id} {...props}/>
          ))
        }
        <button onClick={()=>{
          this.setState(prevState =>{
            return{
                 ...prevState,
                 counter : prevState.counter +1
            }
          })
        }}>{this.state.counter}</button>
      </div>
    )
  }
}

export default ShopPage;