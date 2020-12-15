import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainRoutes from '../../routes';

const App = () => {
	return (
		<Router>
			<div>
				<MainRoutes />
			</div>
		</Router>
	);
};

export default App;
