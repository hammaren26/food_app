import { useState, useEffect, useLayoutEffect, useRef } from "react";
import style from "./style.module.css";

const URL = "https://api.edamam.com/api/recipes/v2?type=public";
const API_KEY = "a73616f6bbaabccc7e9e6f098b6d6541";
const APP_ID = "95583215";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("soup");
  const [queryString, setQueryString] = useState("soup");
  const searchRef = useRef(null); // Создаем ссылку на контейнер поиска

  function fetchFood() {
    fetch(`${URL}&q=${query}&app_key=${API_KEY}&app_id=${APP_ID}`)
      .then((results) => results.json())
      .then((data) => {
        setFoodData(data);
      });
  }

  useEffect(() => {
    fetchFood();
  }, [query]);

  // Используем useLayoutEffect для вычисления высоты
  useLayoutEffect(() => {
    if (searchRef.current) {
      const height = searchRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--search-height",
        `${height}px`
      );
    }
  }, []);

  return (
    <div
      ref={searchRef}
      className={`${style.search_container} flex items-center`}
    >
      <input
        onChange={(e) => setQueryString(e.target.value)}
        className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={queryString}
      />

      <button
        onClick={() => {
          if (queryString !== "") {
            setQuery(queryString);
          }
        }}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Search
      </button>
    </div>
  );
}
