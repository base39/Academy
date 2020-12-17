import React from 'react';
import { CustomAppBar, ButtonBar, ImgLogo } from './style';
import {
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
					<Container disableGutters={true}>
						<Toolbar>
							<Box display="flex" flexGrow={1}>
								<NoStyleLink to="/">
									<ButtonBar>
										<ImgLogo src="https://i.ibb.co/m47mMrc/themovie.png" alt="logo"></ImgLogo>
									</ButtonBar>
								</NoStyleLink>
								<ButtonBar
									color="inherit"
									aria-controls="filmes"
									aria-haspopup="true"
									onMouseOver={e => setAnchorFilmes(e.currentTarget)}
								>
									Filmes
								</ButtonBar>
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
									<NoStyleLink to="/movie">
										<MenuItem>Populares</MenuItem>
									</NoStyleLink>
									<NoStyleLink to="/movie">
										<MenuItem>Em cartaz</MenuItem>
									</NoStyleLink>
									<NoStyleLink to="/movie">
										<MenuItem>Próximas Estreias</MenuItem>
									</NoStyleLink>
									<NoStyleLink to="/movie">
										<MenuItem>Mais bem avaliados</MenuItem>
									</NoStyleLink>
								</Menu>
							</Box>
							<NoStyleLink to="/login">
								<ButtonBar color="inherit">Entrar</ButtonBar>
							</NoStyleLink>
							<NoStyleLink to="/register">
								<ButtonBar color="inherit">Junte-se ao TMDB</ButtonBar>
							</NoStyleLink>
						</Toolbar>
					</Container>
				</CustomAppBar>
			</HideOnScroll>
			<Toolbar />
			{props.children}
		</>
	);
}
