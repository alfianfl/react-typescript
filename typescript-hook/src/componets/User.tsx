import { useState } from 'react';

type AuthUser = {
    name:string
    email:string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
        email:'alvian@gmail.com',
        name:'alfian fadhil'
    })
  };
  const handleLogout = () => {
    setUser(null)
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>Email is {user?.email}</div>
      <div>name is {user?.name}</div>
    </div>
  );
};
