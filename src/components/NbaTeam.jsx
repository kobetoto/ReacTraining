import React from "react";

import teamData from "../NbaTeams.json";

function NbaTeams() {
  const [teams, setTeams] = React.useState(teamData);

  const allTeams = teams.map(function (team) {
    return (
      <div key={team.teamId}>
        <h4>
          {team.teamName} {team.abbreviation}
        </h4>
        <p>Location:{team.location}</p>
        <button
          onClick={function () {
            //1
            const teamsCopy = teams.slice(); //copy du tableau (pour le modifier)

            //2
            const teamIndex = teams.findIndex(function (el) {
              //trouver l'index de l'équipe à supprimer grace à l'ID et findIndex()
              console.log("el._id", el.teamId);
              console.log("teams._id", team.teamId);

              return el.teamId === team.teamId;
            });

            //3
            teamsCopy.splice(teamIndex, 1); //modification du tableau

            //4
            setTeams(teamsCopy); //MAJ du state
          }}
        >
          X{""}
        </button>
      </div>
    );
  });

  return (
    <div>
      <h2>All NBA Teams</h2>
      {allTeams}
    </div>
  );
}

export default NbaTeams;
