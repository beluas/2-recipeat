import React from "react";
import "./recipeItem.styles.scss";

const RecipeItem = ({ id, title, readyInMinutes, sourceUrl }) => {
	const styles = {
		backgroundImage: `url(https://spoonacular.com/recipeImages/${id}-480x360
			)`,
	};
	return (
		<div className="card">
			<a href={sourceUrl}>
				<div style={styles} className="recipe-item">
					<span className="minutes">{`Ready in ${readyInMinutes} min.`}</span>
				</div>
				<p className="recipe-title">{title}</p>
			</a>
		</div>
	);
};

export default RecipeItem;
