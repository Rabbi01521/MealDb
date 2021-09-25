import React, { useEffect, useState } from "react";
import DisplayName from "../DisplayName/DisplayName";
import Meal from "../Meal/Meal";

const Shop = () => {
  const [meals, setMeals] = useState([]);
  const [names, setNames] = useState([]);
  const [searchName, setSearchName] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=" + searchName)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchName]);
  //   handle search input
  const handleSearch = (event) => {
    const searchText = event.target.value;
    if (searchText === "") {
      console.log("not found");
    } else {
      setSearchName(searchText);
    }
  };
  //   handle button
  const handleBtn = (product) => {
    // console.log(product);
    // setName(product);
    const newProduct = [...names, product];
    // console.log(newProduct);
    setNames(newProduct);
  };
  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          onChange={handleSearch}
          placeholder="Search Meals"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
      </div>
      <div className="row">
        <div className="col-md-9">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} handleBtn={handleBtn} meal={meal}></Meal>
          ))}
        </div>
        <div className="col-md-3">
          <DisplayName name={names}></DisplayName>
        </div>
      </div>
    </div>
  );
};

export default Shop;
