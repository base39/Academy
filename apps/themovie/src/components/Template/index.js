import React from 'react';
import { CssBaseline } from '@material-ui/core';

import AppBar from '../AppBar/index';
import Footer from '../Footer/index';

import { PageContent, PageFooter, PageContainer } from './style';

function Template(props) {
	return (
		<>
			<CssBaseline />
			<PageContainer>
				<PageContent>
					<AppBar />
					{props.children}
				</PageContent>
				<PageFooter>
					<Footer />
				</PageFooter>
			</PageContainer>
		</>
	);
}

export default Template;
