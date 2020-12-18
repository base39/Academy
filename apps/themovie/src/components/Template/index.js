import React from 'react';
import AppBar from '../AppBar/index';
import Footer from '../Footer/index';

import { PageContent, PageFooter, PageContainer } from './style';

function Template(props) {
	return (
		<PageContainer>
			<PageContent>
				<AppBar />
				{props.children}
			</PageContent>
			<PageFooter>
				<Footer />
			</PageFooter>
		</PageContainer>
	);
}

export default Template;
