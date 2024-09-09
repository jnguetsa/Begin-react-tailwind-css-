/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React from "react";

// function ShoeCard(props) {
//   console.log(props);
//   return (
//     <div className="card bg-base-100 w-96 shadow-xl">
//       <figure>
//         <img src={props.image} alt="Shoes" />
//       </figure>
//       <div className="card-body">
//         <div className="flex items-center gap-2">
//           <h2 className="card-title">{props.tile}</h2>
//           {/* <div className="badge badge-primary"> new </div> */}
//           {/* <div className="card-actions justify-end"></div> */}
//           {props.isNew ? (
//             <div className="badge badge-primary"> new </div>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// }
// const PAPPER = [
//   { image: "/img/1.jpg", isNew: true, tile: "Dev FullStack" },
//   { image: "/img/2.jpg", isVisible: true, tile: "Dev FullStack junior" },
//   { image: "/img/3.jpg", tile: "Gojo Wallpeper" },
//   { image: "/img/4.jpg", isNew: true, tile: "Gojo" },
// ];

// // export default function App() {
// //   return (
// //     <div className="flex flex-col items-center gap-5">
// //       {PAPPER.map((papper) => (
// //    return <ShoeCard {...papper}/>
// //       ))}
// //     </div>
// //   );
// // }

// export default function App() {
//   return (
//     <div className="flex flex-col items-center gap-5">
//       {PAPPER.map((papper, index) => (
//         <ShoeCard key={index} {...papper} />
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   const response = () => {
//     console.log("hello");
//   };

//   return (
//     <div className="px-8">
//       <button className="btn btn-secondary" onClick={response}>
//         Clique moi
//       </button>
//       <Todo
//         onDelete={() => {
//           console.log("Delete app");
//         }}
//       />
//     </div>
//   );
// }

// const Todo = (props) => {
//   console.log(props);
//   return (
//     <div className="flex items-center gap-4">
//       <p>Faire du code en React</p>
//       <button
//         className="btn btn-error btn-sm"
//         onClick={() => {
//           console.log("Delete");
//           props.onDelete();
//         }}
//       >
//         DELETE
//       </button>
//     </div>
//   );
// };
// import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//     console.log(count);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//     console.log(count);
//   };

//   return (
//     <div>
//       <button className="btn btn-success btn-sm" onClick={increment}>
//         Increment
//       </button>
//       <button className="btn btn-secondary btn-sm" onClick={decrement}>
//         Decrement
//       </button>
//       <button className="btn btn-primary btn-lg flex px-3">{count}</button>
//     </div>
//   );
// }
// import React, { useState } from "react";

// export default function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Name:", name);
//     console.log("Email:", email);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [compteur, setCompteur] = useState(1);
//   const handClick = () => {
//     setCompteur(compteur + 1);
//   };
//   const handClickDecrement = () => {
//     setCompteur(compteur - 1);
//   };

//   return (
//     <div>
//       <h1 className="text-center text-lg">{compteur}</h1>
//       <button className="btn btn-primary btn-lg " onClick={handClick}>
//         Incrementer
//       </button>
//       <button
//         className="btn btn-secondary btn-lg "
//         onClick={handClickDecrement}
//       >
//         Decremente
//       </button>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [fruit, setFruit] = useState([
//     // { id: 1, nom: "Aricot", completed: false },
//     // { id: 2, nom: "Avocat", completed: false },
//     // { id: 3, nom: "Ananas", completed: false },
//     // { id: 4, nom: "Banane", completed: false },
//   ]);

//   const handleCheck = (id) => {

//     console.log(fruit.id);

//   };
//   const handleDelete = (id) => {
//     const updateList = fruit.filter((fruit) => fruit.id !== id);
//     setFruit(updateList);
//   };

//   const addTodo = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const newFruit = {
//       id: fruit.length + 1,
//       nom: formData.get("todo"),
//     };
//     setFruit([...fruit, newFruit]);
//     console.log(fruit);
//     form.reset();
//   };

//   return (
//     <div>
//       <h1>Listes des fruits</h1>
//       <ul>
//         {fruit.map((fruit) => (
//           <li key={fruit.id}>
//             <input
//               type="checkbox"
//               checked={fruit.completed}
//               className="checkbox"
//               onClick={() => handleCheck(fruit.id)}
//             />

//             {fruit.nom}
//             <button
//               className="btn btn-secondary btn-sm"
//               onClick={() => handleDelete(fruit.id)}
//             >
//               X
//             </button>
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={addTodo}>
//         <input
//           name="todo"
//           type="text"
//           placeholder="Add Todo"
//           className="rounded"
//           required
//         />
//         <button className="btn btn-success btn-sm" type="submit">
//           Add todo
//         </button>
//       </form>
//     </div>
//   );
// }
// import { useState } from "react";

// export default function App() {
//   const [fruit, setFruit] = useState([]);

//   const handleCheck = (id) => {
//     setFruit(
//       fruit.map((fruit) =>
//         fruit.id === id ? { ...fruit, completed: !fruit.completed } : fruit
//       )
//     );
//   };

//   const handleDelete = (id) => {
//     const updateList = fruit.filter((fruit) => fruit.id !== id);
//     setFruit(updateList);
//   };

//   const addTodo = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const newFruit = {
//       id: fruit.length + 1,
//       nom: formData.get("todo"),
//       completed: false,
//     };
//     setFruit([...fruit, newFruit]);
//     form.reset();
//   };

//   return (
//     <div>
//       <h1>Listes des fruits</h1>
//       <ul>
//         {fruit.map((fruit) => (
//           <li key={fruit.id}>
//             <input
//               type="checkbox"
//               checked={fruit.completed}
//               className="checkbox"
//               onChange={() => handleCheck(fruit.id)}
//             />
//             {fruit.nom}
//             <button
//               className="btn btn-secondary btn-sm"
//               onClick={() => handleDelete(fruit.id)}
//             >
//               X
//             </button>
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={addTodo}>
//         <input
//           name="todo"
//           type="text"
//           placeholder="Add Todo"
//           className="rounded"
//           required
//         />
//         <button className="btn btn-success btn-sm" type="submit">
//           Add todo
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

export default function App() {
  const [compteur, setCompteur] = useState(0);

  useEffect(() => {
    console.log("Mounting");
  }, []);

  useEffect(() => {
    if (compteur > 0) {
      console.log("Unmountion");
    }
  }),
    [compteur];
  const add = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div>
      <h1>{compteur}</h1>
      <button className="btn btn-primary btn-sm " onClick={add}>
        Increment
      </button>
    </div>
  );
}
