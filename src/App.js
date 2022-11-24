import Home from "./views/Home/Home";
import About from "./views/About/About";
import Students from "./components/Students/Students";
import Fruits from "./components/Fruits/Fruits";
import Cricketers from "./components/Cricketers/Cricketers";

function App() {
  const cricketerArr = [
    { name: "Virat Kohli", team: "India", ipl: "RCB" },
    { name: "David Warner", team: "Austrilia", ipl: "DC" },
    { name: "Rashid Khan", team: "Afganisthan", ipl: "GT" },
  ];
  return (
    <>
      <Home />
      <About />
      <Students studName="Kunal" roll="23" />
      <Students studName="Neha" roll="53" />
      <Students studName="Shreyas" roll="15" />
      <Fruits fruit="Apple" price="200" />
      <Fruits fruit="Grapes" price="150" />
      <Fruits fruit="Mango" price="100" />
      <Cricketers
        name={cricketerArr[0].name}
        team={cricketerArr[0].team}
        ipl={cricketerArr[0].ipl}
      />
      <Cricketers
        name={cricketerArr[1].name}
        team={cricketerArr[1].team}
        ipl={cricketerArr[1].ipl}
      />
      <Cricketers
        name={cricketerArr[2].name}
        team={cricketerArr[2].team}
        ipl={cricketerArr[2].ipl}
      />
    </>
  );
}
export default App;
