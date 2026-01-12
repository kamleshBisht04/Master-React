import "./TagModule.css";

function Tag({ profile }) {
  return <button className="tags">{profile}</button>;
}

export default Tag;
