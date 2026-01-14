import "./Pizza.css";

function Pizza({ pizzaObj }) {
  const { photoName, name, ingredients, price } = pizzaObj;
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <span className="ingredients">Ingredients :</span>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

export default Pizza;
