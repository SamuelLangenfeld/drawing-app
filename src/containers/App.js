import React from "react";
import { PropTypes } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TodoActions from "../actions";
import Canvas from "../components/Canvas";
import Sidebar from "../components/Sidebar";

const App = ({tools, actions}) => (
	<div>
		<Canvas 
			tools={tools}
			actions={actions}
		/>
		<Sidebar
			tools={tools}
			actions={actions}
		/>
	</div>
)

App.propTypes = {
	actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	tools: state.tools
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
