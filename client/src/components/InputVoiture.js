import React, { Fragment, useState } from "react";

const InputVoiture = () => {
  const [formData, setFormData] = useState({
    modele: "",
    annee: "",
    kilometrage: "",
    prix: "",
    img: "",
  });

  const { modele, annee, kilometrage, prix, img } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { modele, annee, kilometrage, prix, img };
      const response = await fetch("http://localhost:5000/voiture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Ajouter un nouveau véhicule</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          name="modele"
          value={modele}
          onChange={onChange}
          placeholder="Modele de voiture"
        />
        <input
          type="text"
          className="form-control"
          name="annee"
          value={annee}
          onChange={onChange}
          placeholder="Année du véhicule"
        />
        <input
          type="text"
          className="form-control"
          name="kilometrage"
          value={kilometrage}
          onChange={onChange}
          placeholder="kilometrage"
        />
        <input
          type="text"
          className="form-control"
          name="prix"
          value={prix}
          onChange={onChange}
          placeholder="prix"
        />
        <input
          type="text"
          className="form-control"
          name="img"
          value={img}
          onChange={onChange}
          placeholder="photo du véhicule"
        />
        <button className="btn btn-success">Valider</button>
      </form>
    </Fragment>
  );
};

export default InputVoiture;

// import React, { Fragment, useState } from "react";

// function InputVoiture() {
//   const InputVoiture = () => {
//     const [
//       modele,
//       annee,
//       kilometrage,
//       prix,
//       img,
//       setModele,
//       setAnnee,
//       setKilometrage,
//       setPrix,
//       setImg,
//     ] = useState("");

//     const onSubmitForm = async (e) => {
//       e.preventDefault();
//       try {
//         const body = { modele, annee, kilometrage, prix, img };
//         const response = await fetch("http://localhost:5000/voiture", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         });

//         window.location = "/";
//       } catch (err) {
//         console.error(err.message);
//       }
//     };
//   };

//   return (
//     <div>
//       <Fragment>
//         <h1 className="text-center mt-5">Ajoute une voiture !</h1>
//         <form className="d-flex mt-5" onSubmit={onSubmitForm}>
//           <input
//             type="text"
//             className="form-control"
//             value={modele}
//             onChange={(e) => setModele(e.target.value)}
//           />
//           <input
//             type="text"
//             className="form-control"
//             value={annee}
//             onChange={(e) => setAnnee(e.target.value)}
//           />
//           <input
//             type="text"
//             className="form-control"
//             value={kilometrage}
//             onChange={(e) => setKilometrage(e.target.value)}
//           />
//           <input
//             type="text"
//             className="form-control"
//             value={prix}
//             onChange={(e) => setPrix(e.target.value)}
//           />
//           <input
//             type="text"
//             className="form-control"
//             value={img}
//             onChange={(e) => setImg(e.target.value)}
//           />
//           <button className="btn btn-success">Add</button>
//         </form>
//       </Fragment>
//     </div>
//   );
// }

// export default InputVoiture;
