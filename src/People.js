import { useState, useEffect } from "react";

export default function People() {
  const [people, setPeople] = useState([]);

  //   const getPeople = () => {
  //     /*--- First method ---*/
  //     // const request = window.fetch("https://jsonplaceholder.typicode.com/users");
  //     // request.then((response) => {
  //     //   const parse = response.json();
  //     //   parse.then((result) => {
  //     //     console.log(result);
  //     //   });
  //     // });

  //     /*--- Second method ---*/
  //     // fetch("https://jsonplaceholder.typicode.com/users")
  //     //   .then((response) => {
  //     //     return response.json();
  //     //   })
  //     //   .then((result) => {
  //     //     console.log(result);
  //     //   });

  //     /*--- Third method ---*/
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((result) => setPeople(result));
  //   };

  const getPeople = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();

    setPeople(result);
  };

  // Call the function only on the first render if empty array []
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map((person, index) => (
          <li key={person.id}>{"Name: " + person.name}</li>
        ))}
      </ul>
    </div>
  );
}
