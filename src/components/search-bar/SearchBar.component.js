import React from "react";
import "./searchBar.styles.scss";
import { connect } from "react-redux";
import { fetchRecipe } from "../../redux/actions/recipes";

class SearchBar extends React.Component {
	render() {
		// I
		return (
			<div className="search-bar">
				<i
					onClick={this.props.fetchRecipe}
					className="icon-search fas fa-search"
				></i>

				<input
					onChange={e => {
						localStorage.setItem("term", e.target.value);
						const term = localStorage.getItem("term");
						this.props.fetchRecipe(term);
					}}
					className="search-input"
					placeholder="Search million recipes & more"
					type="text"
				/>
			</div>
		);
	}
}

const dispatchToProps = {
	fetchRecipe
};

export default connect(null, dispatchToProps)(SearchBar);
