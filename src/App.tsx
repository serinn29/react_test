import React from 'react';

import Home  from './components/Home';
import Profile from './components/Profile';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home/>
        <Profile
          name="이민우"
          job="초보자" 
        />
        <Counter />
        <TodoList/>
      </div>
  );
}

export default App;