import * as React from 'react';

import './TodoItem.css'
//import {Darggable} from '../dragdrop/dragdrop';

interface IProps {
  text: string;
  done: boolean;
  onToggle(): void;
  onRemove(): void;
}

const TodoItem: React.FC<IProps> = ({ text, done, onToggle, onRemove }) => (
  <li>
    <b 
      onClick={onToggle} 
      style={{
      textDecoration: done ? 'line-through' : 'none',
      }}
    >
      {text}
    </b>
    <span style={{marginLeft: '0.5rem'}} onClick={onRemove}>[지우기]</span>
  </li>
);

export default TodoItem;