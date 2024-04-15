import { startBoard } from "./components/StartingBoard/StartingBoard";

function App() {
  
  const squareColor = (i: number) => {
    const row = Math.floor((63 - i) / 8) + 1;
    if (row % 2 === 0) {
      return i % 2 === 0 ? "royalblue" : "gray";
    } else {
      return i % 2 === 0 ? "gray" : "royalblue";
    }
  };

  return (
    <>
      <h1>Chess</h1>
      <div className="board">
        {startBoard.map((x, id) => {
          return (
            <div
              square-id={id}
              key={id}
              className="square"
              style={{ backgroundColor: squareColor(id) }}
            >
              {x ? (
                <img
                  src={x}
                  alt={x}
                  style={{ width: "3rem", height: "3rem" }}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
