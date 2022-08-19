import "./SearchBar.scss";

const SearchBar = (props) => {
    const {label, searchTerm, handleInput} = props;

    return (
        <form>
            <input 
            type="text"
            placeholder="Search!"
            name={label}
            value={searchTerm}
            onInput={handleInput}>
            </input>
        </form>
    )
}

export default SearchBar;