import FoodItem from "../FoodItem/FoodItem.jsx";
import style from "./style.module.css";

export default function FoodList({
  foodData,
  setFoodId,
  setIsLoadingDetailReceipt,
}) {
  return (
    <div className={style.food_list}>
      {foodData && foodData.hits
        ? foodData.hits.map((food, index) => (
            <FoodItem
              key={index}
              food={food}
              setFoodId={setFoodId}
              setIsLoadingDetailReceipt={setIsLoadingDetailReceipt}
            ></FoodItem>
          ))
        : "loading..."}
    </div>
  );
}
