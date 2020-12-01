import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Section from './pages/Login/index';
import ResetPassword from './pages/Password/index';
import Register from './pages/Register/index';

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Section />} />
			<Route path="/reset-password" element={<ResetPassword />} />
			<Route path="/register" element={<Register />} />
			<Route path="*" element={<h1>Not Found!</h1>} />
		</Routes>
	);
};

export default MainRoutes;
