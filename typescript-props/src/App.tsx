import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Alfian',
    last: 'Fadhil'
  };

  const nameList = [
    {
      first: 'Alfian',
      last: 'Fadhil'
    },
    {
      first: 'Alfian2',
      last: 'Fadhil2'
    },
    {
      first: 'Alfian3',
      last: 'Fadhil3'
    }
  ];

  const handleClickButton = (e:React.MouseEvent<HTMLButtonElement>, id:string) => {
    console.log(e, id);
  }
  return (
    <div className="App">
      <Greet isLoggedIn={true} name="Alfian" messageCount={20} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='success' />
      <Heading title="test">
        <h2>Children Heading</h2>
      </Heading>
      <Button handleClick={(event, id) => handleClickButton(event, id) } />
      <Input value='' handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
