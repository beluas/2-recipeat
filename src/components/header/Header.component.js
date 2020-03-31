import React from "react";
import "./header.styles.scss";
import SearchBar from "../search-bar/SearchBar.component";
import FavCuisinesTab from "../fav-cuisines-tab/FavCuisinesTab.component";

const Header = () => {
	return (
		<div className="header">
			<SearchBar />
			<h1>What is your favorite cuisine?</h1>
			<FavCuisinesTab />
		</div>
	);
};

export default Header;
