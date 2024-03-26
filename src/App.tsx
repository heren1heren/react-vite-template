import { useState } from 'react';

export function Person() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [person, setPerson] = useState({
    name: firstName + ' ' + lastName,
    age: 100,
  });
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    // setPerson({ ...person, name: `${firstName} ${lastName}` });
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    // setPerson({ ...person, name: `${firstName} ${lastName}` });
  };
  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <>
      <h1>{firstName + ' ' + lastName}</h1>
      <h2>{person.age}</h2>
      <div>
        <p>FirstName:</p>
        <input onChange={handleFirstName} value={firstName} />
      </div>
      <div>
        <p>LastName:</p>
        <input onChange={handleLastName} value={lastName} />
      </div>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
