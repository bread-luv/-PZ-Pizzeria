import { Children, useState } from "react";
import CheeseDetails from "./components/cheeseDetails";
import Button from "./components/Button";
import "./App.css"; //This is our styler, used throughout the whole application
import FetchCheeseData from "./components/CheeseMockAPI";

function App() {
  //firstly declaring variables to be used throughout the application
  const [cheeseVisible, setCheeseVisibility] = useState(false);
  const [cheeseType, setCheeseType] = useState("");

  //this function is created as our cheese selector ^relying on above variables and their states
  function cheeseSelector(newcheese: string) {
    setCheeseVisibility(true);
    setCheeseType(newcheese);
  }

  return (
    //The main implementation of this function, all the design elements and calling of the functions
    <>
      <div>
        <style>{"body {background-color: #1c3144}"}</style>

        <a href="https://www.cheese.com/" target="_blank">
          <img
            src={
              "https://www.cheese.com/static/common/img/logo.3feae68fc57a.svg"
            }
            className="logo"
            alt="Cheese Logo"
          />
        </a>
        <a href="https://www.pz.com.au/" target="_blank">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7zPobrmgBOn3xZBVGg_R5J0Kd7aubKOMbdozgl3ILw&s"
            }
            className="logo"
            alt="Pz Logo"
          />
        </a>
      </div>
      <h1 className="textstyler">PZ Cheeseria</h1>
      <h1 className="textstyler">A Collaboration</h1>
      <h2 className="textstyler ">
        Find out how much and some fun facts about your favourite cheeses!
      </h2>

      <p className="textstyler">Click on a Cheese to learn more!</p>
      <div>
        <Button
          children="Bavaria Blu"
          onClick={() => cheeseSelector("Bavaria Blu")}
        ></Button>
        <Button
          children="Adelost"
          onClick={() => cheeseSelector("Adelost")}
        ></Button>
        <Button
          children="Burrata"
          onClick={() => cheeseSelector("Burrata")}
        ></Button>
        <Button
          children="Danish Feta"
          onClick={() => cheeseSelector("Danish Feta")}
        ></Button>
        <Button
          children="ButterKase"
          onClick={() => cheeseSelector("ButterKase")}
        ></Button>

        {cheeseVisible && <CheeseDetails children={cheeseType}></CheeseDetails>}
        {cheeseVisible && (
          <FetchCheeseData children={cheeseType}></FetchCheeseData>
        )}
      </div>
    </>
  );
}

export default App;
