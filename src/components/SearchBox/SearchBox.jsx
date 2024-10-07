import s from "./SearchBox.module.css";

const SearchBox = ({ search, handleSearch }) => {
  return (
    <label className={s.label}>
      <span>Find contacts by name</span>
      <input
        className={s.field}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        value={search}
        type="text"
      />
    </label>
  );
};

export default SearchBox;