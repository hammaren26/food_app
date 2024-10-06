import { useState } from "react";
import Search from "./components/Search/Search";
import FoodList from "./components/FoodList/FoodList";
import Nav from "./components/Nav/Nav";
import GridContainer from "./components/GridContainer/GridContainer";
import FoodDetails from "./components/FoodDetails/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  const [isLoadingDetailReceipt, setIsLoadingDetailReceipt] = useState(false);

  return (
    <>
      <Nav></Nav>
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <GridContainer>
        <FoodList
          setFoodId={setFoodId}
          foodData={foodData}
          setIsLoadingDetailReceipt={setIsLoadingDetailReceipt}
        ></FoodList>
        <FoodDetails
          isLoadingDetailReceipt={isLoadingDetailReceipt}
          setIsLoadingDetailReceipt={setIsLoadingDetailReceipt}
          foodId={foodId}
        ></FoodDetails>
      </GridContainer>
    </>
  );
}

export default App;
