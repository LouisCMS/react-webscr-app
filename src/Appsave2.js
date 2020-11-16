// import React from "react";
// import "./App.css";

// function Name({name}) {
//   return (
//     <div className="name" >
//       {name.text}  
//     </div> 
//   );
// }

// function Email({email}) {
//   return (
//     <div className="email" >
//       {email.text}  
//     </div> 
//   );
// }


// function saveLineForm({addName,addEmail,index}) {
//   return (
//     <div>
//       <button onClick={() => saveLine(newNames, newEmails) }>Save</button>
//     </div>
//   );
// }


// function NameForm({ addName }) { //un nameform est une zone ou on peut ajouter un nom. reste a virer le handle submit...
//   const [value, setValue] = React.useState("nameee");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addName(value);
//     setValue("name2");
//   };
//   return ( // gérer le handlesubmit ci dessous
//     <form onSubmit={handleSubmit}> 
//       <input
//         type="text"
//         className="nameInput"
//         value={value}
//         onChange={e => setValue(e.target.value)}
//       />
//     </form>
//   );
// }

// function EmailForm({ addEmail }) {
//   const [value, setValue] = React.useState("Email");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addEmail(value);
//     setValue("email2");
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="emailInput"
//         value={value}
//         onChange={e => setValue(e.target.value)}
//       />
//     </form>
//   );
// }


// function App() {

//   const [names, setNames] = React.useState([
//     {
//       text: "Donaldyy"
//     }
//   ]);
//   const [emails, setEmails] = React.useState([
//     {
//       text: "Donaldmail"
//     }
//   ]);

//   const addName = text => {
//     const newNames = [...names, { text }];
//     // setNames(newNames);  //ici le setNames représente la fonction d'appel
//   };

//   const addEmail = text => {
//     const newEmails = [...emails, { text }];
//     // setEmails(newEmails);
//   };

// //   const ActuNames = newNames => {
// //     setNames(newNames);
// //   };

// //   const ActuEmails = newEmails => {
// //     setEmails(newEmails);
// // };

//   const saveLine = (newNames, newEmails)=>{
//     setNames(newNames);
//     setEmails(newEmails);
//   }

//   return (
//     <div className="app">
//     <h1>App</h1> 
//       <div className="table">
//       <h1>table</h1> 
//         <div className="Line"> 
//           <div className="name">
//             {names.map((name, index) => ( //il y a un map: c'est un affichage multiple du vecteur Namex selon la liste des "name"
//               <Name
//               key={index}
//               index={index}
//               name={name}
//               />
//             ))}
//           </div>      
//           <div className="email">
//             {emails.map((email, index) => ( //il y a un map: c'est un affichage multiple
//               <Email
//               key={index}
//               index={index}
//               email={email}
//               />
//             ))}
//           </div>     
//         </div>
//       </div>
//       <div className="ajout">
//         <h2>ajout</h2> 
//         <NameForm addName={addName} /> 
//         <EmailForm addEmail={addEmail} />
//         {/* SaveLine est le format d'entrée. A coté on identifie la variable addName = fonction addName (le formulaire) */}
//         <SaveLineForm 
//           addName={addName} 
//           addEmail={addEmail}
//           saveLine={saveLine}
//           />
//         ],
//       </div> 

//     </div>
//   );
// }

// export default App;