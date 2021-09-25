import React from "react";

const DisplayName = (props) => {
  // console.log(props.name);
  const names = props.name;
  // let { strMeal } = props.name;
  // console.log(strMeal);
  return (
    <div>
      <div className="my-5">
        <h4 className="text-center ">Shop Summary</h4>
        {/* <p className="mx-2 my-2">{strMeal}</p> */}
        <ul>
          {names?.map((name, i) => (
            <li key={i}>{name.strMeal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayName;
