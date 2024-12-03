import React from "react";
import NavBar from "./navBar/NavBar";
import FilterableMembersTable from "./FilterableMembersTable";

export default function MembersPage() {
    return (
        <div className="members-page">
            <NavBar />
            <FilterableMembersTable />
        </div>
    )
}