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
	const [anchorSeries, setAnchorSeries] = React.useState(null);
	const [anchorPessoas, setAnchorPessoas] = React.useState(null);
	const [anchorMais, setAnchorMais] = React.useState(null);

	const handleClose = () => {
		setAnchorFilmes(null);
		setAnchorSeries(null);
		setAnchorPessoas(null);
		setAnchorMais(null);
	};

	return (
		<>
			<CssBaseline />
			<HideOnScroll {...props}>
				<CustomAppBar>
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
							<Button
								color="inherit"
								aria-controls="series"
								aria-haspopup="true"
								onMouseOver={e => setAnchorSeries(e.currentTarget)}
							>
								Séries
							</Button>
							<Menu
								id="series"
								anchorEl={anchorSeries}
								keepMounted
								open={Boolean(anchorSeries)}
								onClose={handleClose}
								MenuListProps={{ onMouseLeave: handleClose }}
								anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
								transformOrigin={{ vertical: 'top', horizontal: 'center' }}
								getContentAnchorEl={null}
							>
								<MenuItem>Populares</MenuItem>
								<MenuItem>Em exibição hoje</MenuItem>
								<MenuItem>Na TV</MenuItem>
								<MenuItem>Mais bem avaliadas</MenuItem>
							</Menu>
							<Button
								color="inherit"
								aria-controls="pessoas"
								aria-haspopup="true"
								onMouseOver={e => setAnchorPessoas(e.currentTarget)}
							>
								Pessoas
							</Button>
							<Menu
								id="pessoas"
								anchorEl={anchorPessoas}
								keepMounted
								open={Boolean(anchorPessoas)}
								onClose={handleClose}
								MenuListProps={{ onMouseLeave: handleClose }}
								anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
								transformOrigin={{ vertical: 'top', horizontal: 'center' }}
								getContentAnchorEl={null}
							>
								<MenuItem>Pessoas Populares</MenuItem>
							</Menu>
							<Button
								color="inherit"
								aria-controls="mais"
								aria-haspopup="true"
								onMouseOver={e => setAnchorMais(e.currentTarget)}
							>
								Mais
							</Button>
							<Menu
								id="mais"
								anchorEl={anchorMais}
								keepMounted
								open={Boolean(anchorMais)}
								onClose={handleClose}
								MenuListProps={{ onMouseLeave: handleClose }}
								anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
								transformOrigin={{ vertical: 'top', horizontal: 'center' }}
								getContentAnchorEl={null}
							>
								<MenuItem>Discussões</MenuItem>
								<MenuItem>Placar de colaboradores</MenuItem>
								<MenuItem>Suporte</MenuItem>
								<MenuItem>API</MenuItem>
							</Menu>
						</Box>
						<NoStyleLink to="/login">
							<Button color="inherit">Entrar</Button>
						</NoStyleLink>
					</Toolbar>
				</CustomAppBar>
			</HideOnScroll>
			<Toolbar />
			<Container>
				<Box my={2}>{props.children}</Box>
			</Container>
		</>
	);
}
