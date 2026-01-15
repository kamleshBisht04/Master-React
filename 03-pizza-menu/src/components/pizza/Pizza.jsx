import "./Pizza.css";

function Pizza({ pizzaObj }) {
  const { photoName, name, ingredients, price, soldOut } = pizzaObj;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""} `}>
      <img src={photoName} alt={name} />
      <div>
        <h3 className={`${soldOut ? "sold-out" : ""}`}>{name}</h3>
        <span className="ingredients">Ingredients :</span>
        <p>{ingredients}</p>
        <span className="price">{`${soldOut ? "SOLD OUT " : price}`}</span>
      </div>
    </li>
  );
}

export default Pizza;
