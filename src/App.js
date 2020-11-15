import React from "react";
import "./App.css";

function Name({name}) {
  return (
    <div className="name" >
      {name.text}  
    </div> 
  );
}

function Email({email}) {
  return (
    <div className="email" >
      {email.text}  
    </div> 
  );
}



function NameForm({  }) { //un nameform est une zone ou on peut ajouter un nom. reste a virer le handle submit...
  const [value, setValue] = React.useState("nameee");
  return ( // gérer le handlesubmit ci dessous
    <div className="name">
      {value}
    </div>
  );
}

function EmailForm({  }) { //un nameform est une zone ou on peut ajouter un nom. reste a virer le handle submit...
  const [value, setValue] = React.useState("email");
  return ( // gérer le handlesubmit ci dessous
    <div className="email">
      {value}
    </div>
  );
}

function SaveLineForm({addName,addEmail,index,saveLine}){
  
  return(
  <div className ="line">
    <div className="name">
      <NameForm
        key={index}
        index={index}
        />
    </div>
    <div className="email">
      <EmailForm
        key={index}
        index={index}
     />
    </div>
    <div>
      <button onClick={() => saveLine(addName,addEmail,index)}>SaveLine</button>
    </div>
  </div>
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
    // setNames(newNames);  //ici le setNames représente la fonction d'appel
  };

  const addEmail = text => {
    const newEmails = [...emails, { text }];
    // setEmails(newEmails);
  };

//   const ActuNames = newNames => {
//     setNames(newNames);
//   };

//   const ActuEmails = newEmails => {
//     setEmails(newEmails);
// };

  const saveLine = (newNames, newEmails) => {
    setNames(newNames);
    setEmails(newEmails);
  }

  return (
    <div className="app">
    <h1>App</h1> 
      <div className="table">
      <h1>table</h1> 
        <div className="Line"> 
          <div className="name">
            {names.map((name, index) => ( //il y a un map: c'est un affichage multiple du vecteur Namex selon la liste des "name"
              <Name
              key={index}
              index={index}
              name={name}
              />
            ))}
          </div>      
          <div className="email">
            {emails.map((email, index) => ( //il y a un map: c'est un affichage multiple
              <Email
              key={index}
              index={index}
              email={email}
              />
            ))}
          </div>     
        </div>
      </div>
      <div className="ajout">
        <h2>ajout</h2> 
        {/* <NameForm addName={addName} /> 
        <EmailForm addEmail={addEmail} /> */}
        {/* SaveLine est le format d'entrée. A coté on identifie la variable addName = fonction addName (le formulaire) */}
        <SaveLineForm 
          addName={addName} 
          addEmail={addEmail}
          saveLine={saveLine}
          // index={index}
          />
        ],
      </div> 

    </div>
  );
}

export default App;