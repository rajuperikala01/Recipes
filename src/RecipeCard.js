import "./App.css";

function RecipeCard({ calories, type, image, name }) {
  return (
    <div className="recipe">
      <img
        src = {image}
        alt= {name}
      />
      <div className="information">
        <p>{type}</p>
        <h4>{name}</h4>
        <h5>Calories : {calories}</h5>
      </div>
    </div>
  );
}

export default RecipeCard;
