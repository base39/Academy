import styled from 'styled-components';

export const SectionStyled = styled.section`
	max-width: 1300px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	width: 100%;
	box-sizing: border-box;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 1em;
`;

export const SectionWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
`;

export const ContentWrapper = styled.div`
	max-width: 1300px;
	width: 100vw;
	display: flex;
	align-items: flex-start;
	align-content: flex-start;
	padding: 0px;
`;

export const Column = styled.div`
	width: 100%;
	display: block;
`;

export const ColumnHeader = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
`;

export const H2Styled = styled.h2`
	margin-right: 20px;
	margin-left: 30px;
	white-space: nowrap;
`;

export const ScrollerWrap = styled.div`
	width: auto;
	position: relative;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: flex-start;
	align-content: flex-start;
`;

export const ScrollContent = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	width: 100%;
	max-width: 1300px;
	padding-bottom: 20px;
	overflow-x: scroll;
	overflow-y: hidden;
	transition: height 0.5s linear;
	margin-top: -30px;
`;

export const CardStyle = styled.div`
	width: 150px;
	height: 330px;
	max-width: 208px;
	min-width: 150px;
	margin-right: 30px;
	margin-top: 30px;
	position: relative;
	left: 0;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	border: 1px solid #e3e3e3;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	color: #000;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 1em;
	overflow: hidden;
`;

export const ImageContent = styled.div`
	width: 150px;
	height: 225px;
	max-width: 208px;
	min-width: 150px;
	max-height: 312px;
	min-height: 225px;
`;

export const ContentCard = styled.div`
	width: 100%;
	padding: 26px 10px 12px 10px;
	position: relative;
	white-space: normal;
`;
