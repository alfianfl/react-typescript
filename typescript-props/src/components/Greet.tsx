import {useState} from 'react'

type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn:boolean
}
interface Data{
  [index:number]:any
}
export const Greet = (props: GreetProps) => {
  const [state, setState] = useState<Data>([] as Data)
  return (
    <div>
      <h2>
        {
            props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` : "Welcome Guest"
        }
      </h2>
    </div>
  );
};
