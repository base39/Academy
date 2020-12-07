import styled from 'styled-components';

export const InnerContent = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	width: 100%;
	box-sizing: border-box;
`

export const ContentContainer = styled.div`
	max-width: 1300px;
	width: 100vw;
	padding-left: 40px;
	padding-right: 40px;
	padding-top: 30px;
	padding-bottom: 30px;
`

export const TitleMovieDiv = styled.div`
	width: 100%;
`

export const Titleh2 = styled.h2`
	font-family: 'Source Sans Pro', Arial, sans-serif;
	width: 100%;
	margin: 0;
	padding: 0;
	font-size: 1.6rem;
	font-weight: 600;
`

export const Content = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	align-content: flex-start;
`

export const SearchPanel = styled.div`
	min-width: 260px;
	width: 260px;
	border: 1px solid #e3e3e3;
	border-radius: 8px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	overflow: hidden;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	background-color: #fff;
    margin-top: 30px;
`

export const SubTitleName = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	align-items: center;
	padding: 14px 16px;
`

export const Name = styled.div`
	font-size: 1em;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-weight: 600;
`

export const ColumnDiv = styled.div`
	max-width: 960px;
	width: calc(100vw - 80px - 260px);
	display: flex;
	flex-wrap: wrap;
	flex: 0 1 auto;
	padding-left: 30px;
	padding-right: 0px;
	padding-top: 0px;
	padding-bottom: 0px;
	background: transparent;
`

export const Panel = styled.section`
	width: 100%;
	display: block;
	padding: 30px 0;
`
export const Results = styled.div`
    margin-top: -30px;
    margin-left: -30px;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
`

export const PageContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	box-sizing: border-box;
`

export const LoadMoreStyled = styled.button`
    margin-top: 30px;
    margin-left: 30px;
    background-color: #01b4e4;
    border: none;
    width: 97%;
    height: 50px;
    color: #fff;
    box-shadow: none;
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    cursor: pointer;
    &:hover {
        color: #0a1526;
    }
`