import { useEffect, useState } from "react";
import style from "./style.module.css";
import Loader from "../Loader/Loader";

export default function FoodDetails({
  foodId,
  isLoadingDetailReceipt,
  setIsLoadingDetailReceipt,
}) {
  const [food, setFood] = useState("");
  const [isSelected, setIsSelected] = useState(true);

  const URL = "https://api.edamam.com/api/recipes/v2/";
  const API_KEY = "a73616f6bbaabccc7e9e6f098b6d6541";
  const APP_ID = "95583215";
  let isVeganOrVegetarian;

  function fetchReceipt() {
    fetch(`${URL}${foodId}?type=public&app_id=${APP_ID}&app_key=${API_KEY}`)
      .then((results) => results.json())
      .then((data) => {
        isVeganOrVegetarian = ["Vegan", "Vegetarian"].some((label) =>
          data.recipe.healthLabels.includes(label)
        );

        data.recipe.isVegetarian = isVeganOrVegetarian;

        setFood(data);
        setIsSelected(false);
        setIsLoadingDetailReceipt(false);
      });
  }

  useEffect(() => {
    if (foodId) {
      fetchReceipt();
    }
  }, [foodId]);

  return (
    <>
      {isSelected === true && food === "" ? (
        <p>Click to view receipt</p>
      ) : (
        <div
          className={`${
            isLoadingDetailReceipt
              ? style.food_details_box__loading
              : style.food_details_box
          } flex gap-12 custom_scroll`}
        >
          {isLoadingDetailReceipt ? (
            <Loader />
          ) : (
            <>
              <div>
                <div>
                  <div className="text-4xl font-semibold text-gray-700 mb-8">
                    {food.recipe.label}
                  </div>
                  <div className={`${style.recipe_img}`}>
                    <img
                      src={food.recipe.image}
                      alt=""
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <a
                  href={food.recipe.url}
                  className="bg-green-500 mt-8 flex justify-center text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                  target="_blank"
                >
                  See more
                </a>
              </div>

              <div>
                {food.recipe.totalTime != 0 && (
                  <span>
                    <strong> 🕐 {food.recipe.totalTime} Minutes</strong>
                  </span>
                )}
                <div>
                  <strong>
                    🏋️‍♂️ Calories: {Math.round(food.recipe.calories)}
                  </strong>
                </div>
                <div>
                  <strong>
                    {food.recipe.isVegetarian
                      ? "🥕 Vegetarian"
                      : "🥩 Non-Vegetarian"}
                  </strong>
                </div>
                <div>
                  <strong className="mb-2 mt-4 inline-flex">
                    Ingredients:
                  </strong>
                  <ul className={`${style.ingredients_list}`}>
                    {food.recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        <div>
                          <img src={ingredient.image} alt="" />
                        </div>
                        {ingredient.food}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <strong>Ingredients lines:</strong>
                  <ol className="list-disc">
                    {food.recipe.ingredientLines.map(
                      (ingredientLine, index) => (
                        <li className="ml-8" key={index}>
                          {ingredientLine}
                        </li>
                      )
                    )}
                  </ol>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
