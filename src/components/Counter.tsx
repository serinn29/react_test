// import { off } from 'process';
import * as React from 'react';

import './Counter.css'

interface IProps {

}

// State도 사용하므로 React.component<IProps, IState> 와 같이 추가하자.
interface IState {
  counter: number;
}

class Counter extends React.Component<IProps, IState> {
  state: IState = {
    counter: 0
  };

  onIncrement = (): void => {
    if(this.state.counter >= 10){
      alert('카운터는 10이 최대입니다. 더이상 올릴수 없습니다')
      document.getElementById('a1')!.style.color = 'red';
    }else{
      document.getElementById('a1')!.style.color = 'black';
    this.setState(
      ({ counter }) => ({ counter: counter + 1 })
    );
    }
  }

  onDecrement = (): void => {
    if(this.state.counter <= 0){
      alert('0이하로는 내려갈수 없습니다. 내릴 수 없습니다.')
      document.getElementById('a1')!.style.color = 'blue';
    }else{
      document.getElementById('a1')!.style.color = 'black';
    this.setState(
      ({ counter }) => ({ counter: counter - 1 })
    );
    }
  }

  render() {
    const { onIncrement, onDecrement } = this;
    
    return (
      <div className='comain'>
        <h1>카운터</h1>
        <h3>카운터는 0~10까지만 가능합니다.</h3>
        <br></br>
        <h3 id='a1'>{this.state.counter}</h3>
        <button onClick={onIncrement} className='bu1'>+</button>
        <button onClick={onDecrement} className='bu2'>-</button>
      </div>
    );
  }
}

export default Counter;