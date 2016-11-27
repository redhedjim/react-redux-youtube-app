import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}
	render() {
		return (
			<div className="search-bar col-xs-12">
				<input
					value={this.state.term}
					onChange={e => this.onInputChange(e.target.value)}
				/>
			</div>
		)
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}
export default SearchBar;