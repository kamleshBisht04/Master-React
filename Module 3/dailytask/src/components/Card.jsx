import ToDoLIst from "./ToDoLIst";
import UserCard from "./UserCard";

function Card() {
  return (
    <div>
      <h1>React components</h1>
      <ToDoLIst />
      <UserCard name={"kamlesh"} qulification={"btech"} />
      <UserCard name={"Deepak"} qulification={"mca"} />
    </div>
  );
}

export default Card;
