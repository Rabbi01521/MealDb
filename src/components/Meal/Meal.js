import React from "react";

const Meal = (props) => {
  //   console.log(props.meal);
  //   console.log(props.handleBtn);
  const { strMeal, strMealThumb, strCategory, strArea, strInstructions } =
    props.meal;
  return (
    <div className="card mb-3 my-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={strMealThumb}
            className="img-fluid rounded-3 h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{strMeal}</h5>
            <p className="card-text">{strInstructions.slice(0, 400)}</p>
            <p>
              <small className="me-3 fw-bold">
                Category: <small>{strCategory}</small>{" "}
              </small>
              <small className="fw-bold">
                Area: <small>{strArea}</small>
              </small>
            </p>
            <p className="card-text">
              <button
                onClick={() => {
                  props.handleBtn(props.meal);
                }}
                className="btn btn-dark"
              >
                Details <i className="fas fa-info-circle"></i>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
