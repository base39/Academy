import React from 'react';

import {
	PopoverContent,
	RankItem,
	NotMember,
	PopoverDisplay,
	PopoverContainer,
	PopoverButton,
	Arrow,
	PopoverMenu,
	PopoverLink,
	PopoverStyled,
	PStyled
} from './style';

export default function SimplePopover() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<div>
			<PopoverButton
				aria-describedby={id}
				variant="contained"
				color="primary"
				onClick={handleClick}
			></PopoverButton>
			<PopoverStyled
				classes={{ paper: 'popoverStyled' }}
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
			>
				<PopoverContainer>
					<PopoverDisplay>
						<PopoverContent>
							<RankItem>
								<PopoverMenu>
									Deseja classificar ou adicionar este item a uma lista?
								</PopoverMenu>
								<PStyled>
									<PopoverLink to="/login">
										Entrar
										<Arrow></Arrow>
									</PopoverLink>
								</PStyled>
							</RankItem>
							<NotMember>
								<PopoverMenu>Não é um membro?</PopoverMenu>
								<PStyled>
									<PopoverLink to="/register">
										Inscreva-se e faça parte da comunidade
										<Arrow></Arrow>
									</PopoverLink>
								</PStyled>
							</NotMember>
						</PopoverContent>
					</PopoverDisplay>
				</PopoverContainer>
			</PopoverStyled>
		</div>
	);
}
