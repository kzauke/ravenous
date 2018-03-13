import React from 'react';
import './SearchBar.css';

const sortByOptions = {
	'best_match' :'Best Match',
	'rating': 'Highest Rated',
	'review_count': 'Most Reviewed'
}



class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		};

		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	getSortByClass(sortByOption) {
		if(this.state.sortBy === sortByOption) {
			return 'active';
		}
		else {
			return '';
		}
	}

	handleSortByChange(sortByOption) {
		this.setState({
			sortBy: sortByOption
		})
	}

	handleTermChange(event) {
		this.setState({
			term: event.target.value
		})
	}

	handleLocationChange(event) {
		this.setState({
			location: event.target.value
		})
	}

	handleSearch(event) {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
		event.preventDefault();
	}

	renderSortByOptions() {
		return (
			Object.keys(sortByOptions).map(sortByOption => {
				let sortByOptionValue = sortByOptions[sortByOption];
				return (
					<li key={sortByOption} 
						className={this.getSortByClass(sortByOptionValue)}
						onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
						>
						{sortByOptionValue}
					</li>
					)
			})
		)
	}

	render() {
		return (
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
			    <ul>
			    	{this.renderSortByOptions()}
			    </ul>
			  </div>
			  <div className="SearchBar-fields">
			    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
			    <input placeholder="Where?" onChange={this.handleLocationChange} />
			  </div>
			  <div className="SearchBar-submit">
			    <a onClick={this.handleSearch}>Let's Go</a>
			  </div>
			</div>
		)
	}
}

export default SearchBar;
