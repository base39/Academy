import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Details from './pages/Movie/Details';
import ResetPassword from './pages/Password/index';
import Register from './pages/Register/index';
import Section from './pages/Login/index';
import Search from './pages/Search/index';
import Template from './components/Template/index'

const MainRoutes = () => {
	return (
		<Template>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Section />} />
				<Route path="/search" element={<Search />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/register" element={<Register />} />
				<Route path="/movie" element={<Movie />} />
				<Route path="/movie/:id" element={<Details />} />
				<Route path="*" element={<h1>Not Found!</h1>} />
			</Routes>
		</Template>
	);
};

export default MainRoutes;
