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

function NameForm({ addName }) {
  const [value, setValue] = React.useState("name");

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

  const removeName = index => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };

  const saveName = index => {
    const newNames = [...names];
    newNames[index].isValidated = true;
    setNames(newNames);
  };

  const saveEmail = index => {
    const newEmails = [...emails];
    newEmails[index].isValidated = true;
    setEmails(newEmails);
};

  return (
    <div className="app">
      <div className="scrap-list">{
        names.map((name, index) => (
          <Name
            key={index}
            index={index}
            name={name}
            // removeName={removeName}
            // saveName={saveName}
          />
        )),
        emails.map((email, index) => (
          <Email
            key={index}
            index={index}
            email={email}
          />
        ))}
        <NameForm addName={addName} /> 
        <EmailForm addEmail={addEmail} />
      </div>
    </div>
  );
}

export default App;