import React from 'react';
import { CustomAppBar } from './style';
import {
	Button,
	Slide,
	Container,
	Box,
	useScrollTrigger,
	CssBaseline,
	Toolbar,
	Menu,
	MenuItem
} from '@material-ui/core';
import { NoStyleLink } from '../Link';

function HideOnScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

export default function AppBar(props) {
	const [anchorFilmes, setAnchorFilmes] = React.useState(null);

	const handleClose = () => {
		setAnchorFilmes(null);
	};

	return (
		<>
			<CssBaseline />
			<HideOnScroll {...props}>
				<CustomAppBar>
					<Container disableGutters={true} >
					<Toolbar>
						<Box display="flex" flexGrow={1}>
							<Button
								color="inherit"
								aria-controls="filmes"
								aria-haspopup="true"
								onMouseOver={e => setAnchorFilmes(e.currentTarget)}
							>
								Filmes
							</Button>
							<Menu
								id="filmes"
								anchorEl={anchorFilmes}
								keepMounted
								open={Boolean(anchorFilmes)}
								onClose={handleClose}
								onMouseLeave={handleClose}
								MenuListProps={{ onMouseLeave: handleClose }}
								anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
								transformOrigin={{ vertical: 'top', horizontal: 'center' }}
								getContentAnchorEl={null}
							>
								<MenuItem>
									<NoStyleLink to="/movie">Populares</NoStyleLink>
								</MenuItem>
								<MenuItem>
									<NoStyleLink to="/movie">Em cartaz</NoStyleLink>
								</MenuItem>
								<MenuItem>
									<NoStyleLink to="/movie">Próximas Estreias</NoStyleLink>
								</MenuItem>
								<MenuItem>
									<NoStyleLink to="/movie">Mais bem avaliados</NoStyleLink>
								</MenuItem>
							</Menu>
						</Box>
						<NoStyleLink to="/login">
							<Button color="inherit">Entrar</Button>
						</NoStyleLink>
					</Toolbar>
					</Container>
				</CustomAppBar>
			</HideOnScroll>
			<Toolbar />
			<Container disableGutters={true} >
				{props.children}
			</Container>
		</>
	);
}
