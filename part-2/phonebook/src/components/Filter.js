const Filter = ({ search, filterPeople }) => {

    return (<form>
        filter shown with: <input value={search} onChange={filterPeople}>
        </input>
    </form>)
}


export default Filter