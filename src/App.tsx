import React, { FC, ReactElement, ReactEventHandler, ReactNode } from 'react';
import './App.scss';
import { useState } from 'react';

type ReactElementProps = {
  children: React.ReactNode;
};
function Child(props: ReactElementProps) {
  return <div>{props.children}</div>;
}
export default function Form() {
  const [value, setValue] = useState('Change me');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return (
    <>
      <input value={value} onChange={handleChange} />
      <Child> hello</Child>
      <p>Value: {value}</p>
    </>
  );
}
export function App() {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <a href="profile">Profile page</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
    </div>
  );
};
