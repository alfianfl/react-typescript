import './App.css';
import { LoggedIn } from './componets/LoggedIn';
import { User } from './componets/User';
import { Counter } from './componets/Counter';
import { Box } from './context/Box';
import { ThemeContextProvider } from './context/ThemeContext';
import { UserContextProvider } from './context/UserContext';
import { UserC } from './context/UserC';
import { DomRef } from './ref/DomRef';
import { MutableRef } from './ref/MutableRef';
import { CounterClass } from './class/CounterClass';
import { Private } from './auth/Private';
import { Profile } from './auth/Profile';
import { List } from './generics/List';
import { RandomNumber } from './restriction.tsx/RandomNumber';
import { Toast } from './TemplateLiterals/Toast';
import { CustomButton } from './WrappingHTML/Button';
import { CustomComponent } from './WrappingHTML/CustomComponent';

function App() {
  return (
    <div className="App">
      {/* section1 */}
      {/* <Counter />
      <User />
      <LoggedIn />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <UserC />
      </UserContextProvider>
      <DomRef />
      <MutableRef /> */}

      {/* section2 */}
      <CounterClass message="pop" />
      <Private isLoggedIn={true} component={Profile} />

      {/* <List
        items={['Alfian', 'Fadhil', 'Labib']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[4, 3, 2]}
        onClick={(item) => console.log(item)}
      /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Alfian',
            last: 'Fadhil'
          },
          {
            id: 2,
            first: 'wadada',
            last: 'labib'
          },
          {
            id: 3,
            first: 'riko',
            last: 'danar'
          }
        ]}
        onClick={(item) => console.log(item.first)}
      />

      {/* Restriction */}
      <RandomNumber value={10} isPositive />

      {/* literal */}
      <Toast position="left-top" />

      {/* wrapping HTML */}
      <CustomButton variant="primary" onClick={() => console.log('clicked')}>
          Primary Button
      </CustomButton>
      <CustomComponent name="pops" />
    </div>
  );
}

export default App;
