const champion = [2001, 2002, 2003, 2009, 2010];

function SimpleList() {
  const list = champion.map((el) => <p>{el}</p>);
  return (
    <div className="liste">
      <h2>Champion</h2>

      {list}
    </div>
  );
}

export default SimpleList;
