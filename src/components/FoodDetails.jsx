import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood]=useState({})
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "46934b18cf4846678ab5dbe368c1aba7";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data)
    }
    fetchFood();
  }, [foodId]);
  return <div>Food Details {foodId}
  {food.title}
  <img src={food.image} alt="" />
  </div>;
}
