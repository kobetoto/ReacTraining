import SimpleList from "./components/SimpleListe";
import PlayerCard from "./components/PlayerCard";
import NbaTeams from "./components/NbaTeam";

function App() {
  return (
    <div>
      <header className="Header">
        <h1>Hello Kobe!</h1>
        <img
          src="https://cdn.nba.com/manage/2020/02/Kobe-memorial-v3.jpg"
          alt="logo"
        />
      </header>
      <SimpleList />
      <PlayerCard />
      <NbaTeams />
    </div>
  );
}

export default App;
