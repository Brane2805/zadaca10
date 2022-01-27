import React from 'react';
import { User } from './user';

const useri = 
[
  { id: 1, name: 'Ivan', years: 30 },
  { id: 2, name: 'Marko', years: 35 },
  { id: 3, name: 'Ana', years: 25 },
];
export default class App extends React.Component {
  /*state = {
    users: [
      { id: 1, name: 'Ivan', years: 30 },
      { id: 2, name: 'Marko', years: 35 },
      { id: 3, name: 'Ana', years: 25 },
    ],
  };*/


  constructor() {
    super();
    this.state = {
      users: useri
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleButtonPress = () => {
    const { users } = this.state;

    const newUsers = users.map(user => {
      return { ...user, years: user.years + 1 };
    });

    this.setState({ users: newUsers });
  };

  handleNameChange = (event, index) => {
    const { users } = this.state;
    const newUsers = [...users];

    newUsers[index].name = event.target.value;
    this.setState({ users: newUsers });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { users } = this.state,
    name = event.target.name.value,
    years = Number(event.target.years.value);
    this.setState({ users: [...users,{
      name,
      years
    }] 
  }, () => {
    document.querySelector('#name').value='';
    document.querySelector('#years').value='';
  });
  }
  render() {
    const { users } = this.state;
    
    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p> 
        
        <button onClick={this.handleButtonPress}>Promjena godina</button>

        {users.map((user, index) => (
          <User
            key={user.id}
            name={user.name}
            years={user.years}
            onNameChange={event => this.handleNameChange(event, index)}
          />
        ))}
  
      <form onSubmit={this.handleSubmit}>
      <p><label>Unesi ime:
      <input 
        type="text" 
        name="name"
        id="name"
      />
      </label></p>
      <p><label>Unesi godine:
        <input 
          type="text" 
          name="years"
          id="years"
        />
        </label></p>
        <input type="submit" />
    </form>
      </div>
      
    );
  }
}
