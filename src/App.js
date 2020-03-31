import React from "react";
import "./App.scss";

import Header from "./components/header/Header.component";
import BodyContent from "./components/body-content/BodyContent.component";

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<BodyContent />
			</div>
		);
	}
}

export default App;
