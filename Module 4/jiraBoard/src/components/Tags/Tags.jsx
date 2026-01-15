import "./TagsModule.css";

function Tags({ profile,onSelectedTag}) {
  return (
    <button type="button" className="tags" onClick={()=>{onSelectedTag(profile)}}>
      {profile}
    </button>
  );
}

export default Tags;
