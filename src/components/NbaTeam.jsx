function NbaTeams(props) {
  console.log("props ID: ", props.id);

  return (
    <div key={props.id}>
      <h4>
        {props.teamName} {props.abbreviation}
      </h4>

      <p>Location:{props.location}</p>
      <button
        onClick={function () {
          props.deleteTeam(props.id);
        }}
      >
        X{" "}
      </button>
    </div>
  );
}

export default NbaTeams;
