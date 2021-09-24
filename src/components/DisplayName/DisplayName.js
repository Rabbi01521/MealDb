import React from "react";

const DisplayName = (props) => {
  // console.log(props.name);

  const { strMeal } = props.name;
  //   console.log(strMeal);
  return (
    <div>
      <div className="my-5">
        <h4 className="text-center ">Shop Summary</h4>
        <p className="mx-2 my-2">Name: {strMeal}</p>
      </div>
    </div>
  );
};

export default DisplayName;
