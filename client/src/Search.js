function Search() {
    return (
      <div>
        <h2>It's a search</h2>
        
          <form>
            <input type="text" placeholder="Search"></input>
            <select name="location">
              <option value="Manhattan, NY">Manhattan</option>
              <option value="Brooklyn, NY">Brooklyn</option>
              <option value="Jersey City, NJ">Jersey City</option>
              <option value="Queens, NY">Queens</option>
              <option value="Long Island, NY">Long Island</option>
              <option value="Bronx, NY">Bronx</option>
            </select>
            <input type="submit"></input>
          </form>
        
      </div>
    );
  }
  
  export default Search;