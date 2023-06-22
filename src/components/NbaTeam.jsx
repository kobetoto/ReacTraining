import teamData from "../NbaTeams.json";

function NbaTeams() {
  const allTeams = teamData.map(function (team) {
    return (
      <div key={team.teamId}>
        <h4>
          {team.teamName} {team.abbreviation}
        </h4>
        <p>Location:{team.location}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>All NBA Tea</h2>
      {allTeams}
    </div>
  );
}

export default NbaTeams;
