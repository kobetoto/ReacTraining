const kobe = [
  {
    _id: "248af824",
    height: "6 ft 6",
    weight: "212 lb",
    wingSpan: "6 ft 11",
    number: 24,
  },
];

function PlayerCard() {
  const card = kobe.map(function (el) {
    return (
      <div key={el._id}>
        <p>Height: {el.height}</p>
        <p>Weight: {el.weight}</p>
        <p>WingSpan: {el.wingSpan}</p>
        <p>Number: {el.number}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Player Card</h2>
      {card}
    </div>
  );
}

export default PlayerCard;
