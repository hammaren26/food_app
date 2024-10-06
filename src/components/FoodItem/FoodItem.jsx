import style from "./style.module.css";

function extractRecipeId(uri) {
  const recipeIdMatch = uri.match(/#recipe_(.+)/);

  if (recipeIdMatch && recipeIdMatch[1]) {
    return recipeIdMatch[1];
  }

  return null;
}

export default function FoodItem({
  food,
  setFoodId,
  setIsLoadingDetailReceipt,
}) {
  let receipeId = extractRecipeId(food.recipe.uri);

  return (
    <div className={style.food_cart}>
      <div className={style.food_cart__img}>
        <img src={food.recipe.images.SMALL.url} alt="" />
      </div>
      <div className={style.food_cart__info}>
        <span>{food.recipe.label}</span>
        <button
          className="bg-blue-500 text-white font-bold py-4 px-4  hover:bg-blue-600 transition duration-300"
          onClick={() => {
            setFoodId(receipeId);
            setIsLoadingDetailReceipt(true);
          }}
        >
          View Receipt
        </button>
      </div>
    </div>
  );
}
