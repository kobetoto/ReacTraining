import { useState } from "react";

function AddTeam() {
  /* 
                 _             _                                                    _   
                | |           | |                                                  | |  
  ___ ___  _ __ | |_ _ __ ___ | |   ___ ___  _ __ ___  _ __   ___  _ __   ___ _ __ | |_ 
 / __/ _ \| '_ \| __| '__/ _ \| |  / __/ _ \| '_ ` _ \| '_ \ / _ \| '_ \ / _ \ '_ \| __|
| (_| (_) | | | | |_| | | (_) | | | (_| (_) | | | | | | |_) | (_) | | | |  __/ | | | |_ 
 \___\___/|_| |_|\__|_|  \___/|_|  \___\___/|_| |_| |_| .__/ \___/|_| |_|\___|_| |_|\__|
                                                      | |                               
                                                      |_|                               
*/

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
          event.preventDefault(); //1// empeche l'action par default de l'event Submit (rafraichissement de la page)

          /* A FAIRE DANS LE PARENTS LA OU IL Y A LA LISTE 
                                                                                    //appelez la props issue du parent qui sera la fonction AddNewTeam qui prendra un objet : 

                                                                                                                                        function AddNewTeam(object){

                                                                                                                                            const copyTeamList = teams.slice()

                                                                                                                                            copyTeamList.push({
                                                                                                                                                    "teamId": 123,
                                                                                                                                                    "teamName": object.name,
                                                                                                                                                    "location": object.location
                                                                                                                                                    "virtualTeam": object.virtualTeam
                                                                                                                                            })

                                                                                                                                            
                                                                                                                                        setTeam(copyTeamList)
                                                                                                                                        }
                                                                                        */

          const obj = {
            name: name,
            location: location,
            virtualTeam: virtualTeam,
          };

          //2//
          //props.AddNewTeam(obj);

          //3// reset
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
