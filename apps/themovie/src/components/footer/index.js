import React from 'react';

import {
	FooterStyled,
	NavStyled,
	BannerContent,
	ImgStyled,
	LinkBanner,
	DivStyled,
	H3Styled,
	LiStyled,
	UlStyled,
	PListStyled
} from './style';

function Footer() {
	return (
		<>
			<FooterStyled>
				<NavStyled>
					<BannerContent>
						<ImgStyled
							src={
								'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
							}
							alt={'Logo TMDb'}
						/>
						<LinkBanner to={'/register'}>JUNTE-SE A COMUNIDADE</LinkBanner>
					</BannerContent>
					<DivStyled>
						<H3Styled>O BÁSICO</H3Styled>
						<UlStyled>
							<LiStyled>
								<PListStyled>Sobre o TMDb</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>Contate-nos</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>Suporte</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>API</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>Status do Sistema</PListStyled>
							</LiStyled>
						</UlStyled>
					</DivStyled>
					<DivStyled>
						<H3Styled>ENVOLVA-SE</H3Styled>
						<UlStyled>
							<LiStyled>
								<PListStyled>Bíblia do Colaborador</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>Aplicativos de terceiros</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>Adicionar um novo Filme</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>Adicionar uma nova Série</PListStyled>
							</LiStyled>
						</UlStyled>
					</DivStyled>
					<DivStyled>
						<H3Styled>COMUNIDADE</H3Styled>
						<UlStyled>
							<LiStyled>
								<PListStyled>Diretrizes</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>Discussões</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>Placar de colaboradores</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>Twitter</PListStyled>
							</LiStyled>
						</UlStyled>
					</DivStyled>
					<DivStyled>
						<H3Styled>LEGALIDADE</H3Styled>
						<UlStyled>
							<LiStyled>
								<PListStyled>Termos de uso</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>Termos de Uso da API</PListStyled>
							</LiStyled>
							<LiStyled>
								<PListStyled>Política de privacidade</PListStyled>
							</LiStyled>
						</UlStyled>
					</DivStyled>
				</NavStyled>
			</FooterStyled>
		</>
	);
}

export default Footer;
