import React from 'react';
import Nabvar from './components/Navbar/Navbar';
import { HashRouter } from 'react-router-dom';
import routes from './routes';

function App() {
	return (
		<HashRouter>
			<div>
				<Nabvar />
				{routes}
			</div>
		</HashRouter>
	);
}

export default App;
