import SmallSquare from "./Components/Start/SmallSquare";
import digitSquares from "./Data/digitSquares";

function App() {
  return (
    <div className="App">
      <div className="big-blue">
        <SmallSquare color={'red'} number={5} />
        <SmallSquare color={'orange'} number={7} />
        <SmallSquare color={'lime'} number={8} />
        <SmallSquare color={'brown'} number={19} />
      </div>
      <div className="big-blue">
        {
          digitSquares.map((square, index) => <SmallSquare color={square.color} number={square.number} key={index}></SmallSquare>
          )
        }
      </div>
    </div>
  );
}

export default App;
