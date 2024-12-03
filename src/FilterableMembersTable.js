import SearchBar from "./searchBar/SearchBar";
import CardList from "./cardList/CardList";
import "./members";

export default function FilterableMembersTable( { members } ) {
    return (
        <div className="filterable-members-table">
            <SearchBar />
            <CardList members={members}/>
        </div>
    )
}
