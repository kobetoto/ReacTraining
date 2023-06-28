import React from "react";

import SimpleList from "./components/SimpleListe";
import PlayerCard from "./components/PlayerCard";
import NbaTeams from "./components/NbaTeam";
import AddTeam from "./components/AddTeam";
import teamData from "./NbaTeams.json";

function App() {
  const [teams, setTeams] = React.useState(teamData);
  const [hide, setHide] = React.useState(false);

  // function addTeam //
  function AddNewTeam(object) {
    const copyTeamList = teams.slice();

    copyTeamList.push({
      teamId: Math.random() * 100000,
      teamName: object.name,
      location: object.location,
      virtualTeam: object.virtualTeam,
    });

    setTeams(copyTeamList);
  }

  // function deleteTeam //
  function deleteTeam(id) {
    //1
    const teamsCopy = teams.slice(); //copy du tableau (pour le modifier)

    //2
    const teamIndex = teams.findIndex(function (el) {
      //trouver l'index de l'équipe à supprimer grace à l'ID et findIndex()
      console.log("el.teamid", el.teamId);
      console.log("team.id", id.teamId);

      return el.teamId === id;
    });

    //3
    teamsCopy.splice(teamIndex, 1); //modification du tableau

    //4
    setTeams(teamsCopy); //MAJ du state + rerender de la liste
  }

  return (
    <div>
      <header className="Header">
        <h1>Hello Kobe!</h1>
        <img
          src="https://cdn.nba.com/manage/2020/02/Kobe-memorial-v3.jpg"
          alt="logo"
        />
        <p></p>
        <button
          onClick={function () {
            setHide(!hide);
            // if (hide) {
            //   setHide(false);
            // } else {
            //   setHide(true);
            // }
          }}
        >
          MAMBA MODE 🐍
        </button>
        {hide ? "" : "✅"}
      </header>
      <SimpleList />
      <PlayerCard />

      <AddTeam AddNewTeam={AddNewTeam} />

      {teams.map(function (team) {
        return (
          <NbaTeams
            key={team.teamId}
            id={team.teamId}
            abbreviation={team.abbreviation}
            teamName={team.teamName}
            simpleName={team.simpleName}
            location={team.location}
            deleteTeam={deleteTeam} //props drilling
          />
        );
      })}
    </div>
  );
}

export default App;
