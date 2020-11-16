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
    <textarea>
      {value}
    </textarea>
  );
}

function EmailForm({  }) { //un nameform est une zone ou on peut ajouter un nom. reste a virer le handle submit...
  const [value, setValue] = React.useState("email");
  return ( // gérer le handlesubmit ci dessous
    <textarea>
      {value}
    </textarea>
  );
}

function SaveLineForm({addLine,index}){
  
  const [NewNames, setnameValue] = React.useState("");
  const [NewEmails, setemailValue] = React.useState("");

  const handleSubmit = () => {
    if ((!NewNames) & (!NewEmails)) return;
    addLine(NewNames,NewEmails,index);
    setnameValue("");
    setemailValue("");
  }

  const nothing = ()=>{
    NewNames=NewNames;
  }

  return(
  <div className ="Formline">
    <div className="nameForm">
      <form onSubmit={nothing}>
        <input
          type="text"
          className="input"
          NewNames={NewNames}
          onChange={e => setnameValue(e.target.value)} // c'est ici qu'on affecte la valeur a setValue !
        />
      </form>
    </div>
    <div className="emailForm">
      <form onSubmit={nothing}>
        <input
          type="text"
          className="input"
          NewEmails={NewEmails}
          onChange={d => setemailValue(d.target.value)} // c'est ici qu'on affecte la valeur a setValue !
        />
      </form>
    </div>
    <div>
      <button onClick={handleSubmit}>SaveLine</button>
    </div>
  </div>
  );
}


function App() {

  const [names, setNames] = React.useState([{text: "Donaldyy",text:"name"}]);
  const [emails, setEmails] = React.useState([{text: "Donaldmail",text:"email"}]);

  const addName = text => {
    const newNames = [...names, { text }];
    setNames(newNames);  //ici le setNames représente la fonction d'appel
  };

  const addEmail = text => {
    const newEmails = [...emails, { text }];
    setEmails(newEmails);
  };

  const addLine = (newNames, newEmails) => {
    addName(newNames);
    addEmail(newEmails);
  }

  return (
    <div className="app">
    <h1>App</h1> 
      <div className="table">
      <h1>table</h1> 
        <div className="line-list"> 
          <div className="name-container">
            <div className="name">
              {names.map((name, index) => ( //il y a un map: c'est un affichage multiple du vecteur Namex selon la liste des "name"
              <Name
                key={index}
                index={index}
                name={name}
                />
              ))}
            </div>   
          </div>   
          <div className="email-container">
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
      </div>
      <div className="ajout">
        <h2>ajout</h2> 
        {/* <NameForm addName={addName} /> 
        <EmailForm addEmail={addEmail} /> */}
        {/* SaveLine est le format d'entrée. A coté on identifie la variable addName = fonction addName (le formulaire) */}
        <SaveLineForm 
          // addName={addName} 
          // addEmail={addEmail}
          addLine={addLine}
          // index={index}
          />
        ],
      </div> 

    </div>
  );
}

export default App;