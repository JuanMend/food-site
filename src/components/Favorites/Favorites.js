// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import { getUser } from '../../Redux/reducer';
// import { connect } from 'react-redux';

// class Favorites extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 	}
// 	componentDidMount() {
// 		this.props.getUser();
// 	}

// 	render() {
// 		console.log(this.props.favorites);
// 		// const { favorites } = this.props;
// 		const post = this.props.favor.map((val) => {
// 			return (
// 				<div>
// 					<h1>{val.title}</h1>
// 					<img src={val.image_url} />
// 				</div>
// 			);
// 		});
// 		return (
// 			<div>
// 				{/* <Navbar /> */}
// 				{/* <div className="root"> */}
// 				{/* {favorites.map((val) => {
// 					return (
// 						<div>
// 							<h1>{val.title}</h1>
// 							<img src={val.image_url} />
// 						</div>
// 					);
// 				})} */}
// 				{post}
// 			</div>
// 			// </div>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		username: state.reducer.username
// 	};
// };
// export default connect(mapStateToProps, { getUser })(Favorites);
