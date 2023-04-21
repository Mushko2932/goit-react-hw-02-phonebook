import React from "react";
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          marginLeft: '20px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </form>
        <button>Add contact</button>
      </div>
    );
  }
};
