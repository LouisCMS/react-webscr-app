import React from "react";
import "./App.css";

function Name({ name, index, completeTodo, removeTodo }) {
  return (
    <div className="name" >
      {name.text}  
    </div> 
  );
}

function Email({ email, index, completeTodo, removeTodo }) {
  return (
    <div className="email" >
      {email.text}  
    </div> 
  );
}

function Actualize({ name, index, email, saveLine }) {
  return (
    <div className="line">
      <div className="name">
        {name.text}
      </div>
      <div className="email">
        {email.text}
      </div>
      <div>
        <button onClick={() => saveLine(index)}>Save</button>
      </div>
    </div>
  );
}


function NameForm({ addName }) {
  const [value, setValue] = React.useState("nameee");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addName(value);
    setValue("name2");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="nameInput"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function EmailForm({ addEmail }) {
  const [value, setValue] = React.useState("Email");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addEmail(value);
    setValue("email2");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="emailInput"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}


function App() {
  const [names, setNames] = React.useState([
    {
      text: "Donaldyy"
    }
  ]);
  const [emails, setEmails] = React.useState([
    {
      text: "Donaldmail"
    }
  ]);

  const addName = text => {
    const newNames = [...names, { text }];
    setNames(newNames);
  };

  const addEmail = text => {
    const newEmails = [...emails, { text }];
    setEmails(newEmails);
  };

  // const completeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = true;
  //   setEmail(newTodos);
  // };

  // const removeName = index => {
  //   const newNames = [...names];
  //   newNames.splice(index, 1);
  //   setNames(newNames);
  // };

  const saveName = index => {
    const newNames = [...names];
    // newNames[index].isValidated = true;
    setNames(newNames);
  };

  const saveEmail = index => {
    const newEmails = [...emails];
    // newEmails[index].isValidated = true;
    setEmails(newEmails);
};

  return (
    <div className="app">
    <h1>App</h1> 
      <div className="table">
      <h1>table</h1> 
        <div className="fixed-left">
          <h2>names</h2> 
          {
          names.map((name, index) => (
            <Name
              key={index}
              index={index}
              name={name}
            />
          ))
        }
        </div>
        <div className="fixed-right">
          <h2>emails</h2> 
          {
          emails.map((email, index) => (
            <Email
              key={index}
              index={index}
              email={email}
            />
          ))
        }
        </div>  
      </div>
      <div className="ajout">
        <h2>ajout</h2> 

        <NameForm addName={addName} /> 
        <EmailForm addEmail={addEmail} />
      </div> 

    </div>
  );
}

export default App;