import { tagMap, tagStyle } from "../constant/common";
import "./TagsModule.css";

function Tags({ profile, onSelectedTag, isSelected }) {
  const key = tagMap[profile];

  return (
    <button
      type="button"
      className="tags"
      style={isSelected ? tagStyle[key] : {}}
      onClick={() => {
        onSelectedTag(profile);
      }}
    >
      {profile}
    </button>
  );
}

export default Tags;
