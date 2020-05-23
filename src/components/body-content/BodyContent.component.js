import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "../recipe-item/RecipeItem.component";
import "./bodyContent.styles.scss";

export class BodyContent extends Component {
	render() {
		return (
			<div className="body-content">
				<h2>Just For You</h2>
				<div className="recipes-container">
					{this.props.recipes ? (
						this.props.recipes.map((recipe) => (
							<RecipeItem key={recipe.id} {...recipe} />
						))
					) : (
						<h1>Loading...</h1>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	recipes: state.recipes.results,
});

const dispatchToProps = {};

export default connect(mapStateToProps, dispatchToProps)(BodyContent);
