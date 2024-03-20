import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_SERVERURL}/commentaire/todos/${id}`, {
        method: "DELETE",
      });

      // Créer une nouvelle liste de commentaires sans le commentaire supprimé
      setTodos(todos.filter((commentaire) => commentaire.commentaire_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/commentaire/todos`);
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Commentaire</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((commentaire) => (
            <tr key={commentaire.commentaire_id}>
              <td>{commentaire.description}</td>
              <td>
                <EditTodo commentaire={commentaire} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(commentaire.commentaire_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;



// import React, { Fragment, useEffect, useState } from "react";

// import EditTodo from "./EditTodo";

// const ListTodos = () => {
//   // État local pour stocker les données du formulaire
//   const [todos, setTodos] = useState([]);

//   // pour supprimer un commentaire
//   const deleteTodo = async (id) => {
//     try {
//       const deleteTodo = await fetch(
//         `${process.env.REACT_APP_SERVERURL}/commentaire/todos/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       setTodos(
//         todos.filter((commentaire) => commentaire.commentaire_id !== id)
//       ); // désaffiche le commentaire qui a été supprimé en interne
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   // pour lister tout les commentaires
//   const getTodos = async () => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_SERVERURL}/commentaire/todos`
//       );
//       const jsonData = await response.json(); //await pour dire d'attendre

//       setTodos(jsonData);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     getTodos();
//   }, []);

//   return (
//     <Fragment>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Commentaire</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/*<tr>
//         <td>John</td>
//         <td>Doe</td>
//         <td>john@example.com</td>
//       </tr>  */}
//           {todos.map((commentaire) => (
//             <tr key={commentaire.commentaire_id}>
//               <td>{commentaire.description}</td>
//               <td>
//                 <EditTodo commentaire={commentaire} />
//               </td>
//               <td>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => deleteTodo(commentaire.commentaire_id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Fragment>
//   );
// };

// export default ListTodos;
