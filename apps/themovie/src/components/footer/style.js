import styled from 'styled-components'
import { Link } from '../Link'

export const FooterStyled = styled.footer`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-between;
    max-width: 100%;
    min-height: 100%;
    width: 100vw;
    justify-content: center;
    background-color: #032541;
    position: relative;
    left: 0;
	bottom: 0;
    flex-shrink: 0;
`

export const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 80px;
    color: #fff;
    font-size: .9em;

`

export const BannerContent = styled.div`
    text-align: right;
    position: relative;
    margin-right: 40px;
    top: -36px;
    right: 0;
`

export const ImgStyled = styled.img`
    width: 130px;
    height: 94px;
    display: block;
    position: absolute;
`

export const LinkBanner = styled(Link)`
    display: inline-block;
    position: relative;
    top: 140px;
    border-color: #fff;
    background-color: #fff;
    color: rgba(1, 180, 228);
    font-size: 1.3em;
    font-weight: bold;
    white-space: normal;
    text-transform: none;
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 8px 16px;
    text-decoration: none;
    cursor: pointer;
`

export const DivStyled = styled.div`
    margin-right: 40px;
    font-size: .9em;
    color: #fff;
`

export const H3Styled = styled.h3`
    margin: 0;
    font-weight: bold;
    font-size: 1.4em;
    line-height: 1.4em;
    color: #FFF;
`

export const UlStyled = styled.ul`
    margin: 0;
    padding: 0;
`

export const LiStyled = styled.li`
    display: list-item;
    list-style-type: none;
    line-height: 1.6em;
    color: #fff;
`

export const PListStyled = styled.p`
    font-size: 1.4em;
    line-height: 1.6em;
    margin: 0;
`