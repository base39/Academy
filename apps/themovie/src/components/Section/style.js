import styled from 'styled-components'

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
`

export const SectionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
`

export const ContentWrapper = styled.div`
    max-width: 1300px;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
`

export const Column = styled.div`
    width: 100%;
    display:block;
`

export const ColumnHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
`

export const H2Styled = styled.h2`
    margin-right: 20px;
    margin-left: 30px;
    white-space: nowrap;
`

export const ScrollerWrap = styled.div`
    width: auto;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
`

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
    transition: height .5s linear;
    margin-top: -30px;
`