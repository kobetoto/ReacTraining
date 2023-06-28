import { useState } from "react";

function AddTeam(props) {
  /*CONTROLE COMPONENT */

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [virtualTeam, setVirtualTeam] = useState(false);

  const handleNameInput = (event) => setName(event.target.value);
  const handleLocationInput = (event) => setLocation(event.target.value);

  return (
    <>
      <h1>CREATE A NEW TEAM</h1>

      <form
        onSubmit={(event) => {
          //1// empeche l'action par default de l'event Submit (rafraichissement de la page)
          event.preventDefault();

          //2// constitution de l'objet a faire passer en parametre à la fonction AddNewteam
          const obj = {
            name: name,
            location: location,
            virtualTeam: virtualTeam,
          };
          props.AddNewTeam(obj);

          //3// reset les champs (pour enlever les inputs de l'user)
          setName("");
          setLocation("");
          setVirtualTeam(true);
        }}
      >
        <label>
          Name
          <input
            type="text"
            name="teamName"
            value={name}
            onChange={handleNameInput}
          />
        </label>

        <label>
          Location
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleLocationInput}
          />
        </label>

        <select name="color">
          <option value="purple">Purple</option>
          <option value="yellow">Yellow</option>
          <option value="black">Black</option>
        </select>

        <label>
          Virtual Team
          <input
            type="checkbox"
            name="virtualTeam"
            checked={virtualTeam}
            onChange={(event) => setVirtualTeam(event.target.checked)}
          />
        </label>

        <button>Add Team</button>
      </form>
    </>
  );
}

export default AddTeam;
