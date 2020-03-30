import React from 'react';
import unsplash from '../api/unsplashApi.js';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import ImageCard from './ImageCard';
import './ImageList.css';

class App extends React.Component {
	state = {
		photos: [],
		page: 1,
		searchWord: null,
		isDataLoaded: false,
		isSearched: false
	};
	apiSearch = async keyword => {
		this.setState({ isSearched: true });
		const res = await unsplash.get('/search/photos', {
			params: { query: keyword, per_page: 20, page: this.state.page }
		});
		this.setState({
			photos: res.data.results,
			searchWord: keyword,
			isDataLoaded: true,
			isSearched: false
		});
	};

	renderImages = image => {
		return <ImageCard key={image.id} photo={image} />;
	};

	pagination = action => {
		if (action === 'left' && this.state.page > 1) {
			this.setState(preValue => {
				return {
					page: preValue.page - 1
				};
			});
			this.apiSearch(this.state.searchWord);
		}
		if (action === 'right' && this.state.page >= 1) {
			this.setState(preValue => {
				return {
					page: preValue.page + 1
				};
			});
			this.apiSearch(this.state.searchWord);
		}
	};

	render() {
		return (
			<div
				className='ui container'
				style={{ marginTop: '10px', textAlign: 'center' }}>
				<SearchBar find={this.apiSearch} />
				{this.state.isDataLoaded ? (
					<div className=''>
						<div className='image-list'>
							{this.state.photos.map(this.renderImages)}
						</div>
						<div className='ui container'>
							<div className='blue ui buttons'>
								<button
									onClick={() => this.pagination('left')}
									className='ui button'>
									{'<<<'}
								</button>
								<button className='ui button'>{this.state.page}</button>
								<button
									onClick={() => this.pagination('right')}
									className='ui button'>
									{'>>>'}
								</button>
							</div>
						</div>
					</div>
				) : null}
				{this.state.isSearched ? (
					<div class='loadingio-spinner-pulse-o7q8aot62d'>
						<div class='ldio-tg0ool0yca9'>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				) : null}
			</div>
		);
	}
}

export default App;
