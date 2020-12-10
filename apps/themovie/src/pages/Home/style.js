import styled from 'styled-components'
import { InputBase, ButtonBase, Typography, Box } from '@material-ui/core'

export const CustomTitle = styled(Typography)`

  color: #fff;

  .title {
    font-size: 3em;
    font-weight: 700;
    line-height: 1;
  }

  .subtitle {
    font-size: 2em;
    font-weight: 600;
    margin: 0;
  }
  
`

export const SearchInput = styled(InputBase)`
  width: 100%;
  height: 46px;
  line-height: 46px;
  font-size: 1.1em;
  color: rgba(0,0,0,0.5);
  border: none;
  border-radius: 30px;
  padding-left: 20px;
  background-color: white;
`

export const SearchButton = styled(ButtonBase)`
  height: 46px;
  padding: 10px 26px;
  border: none;
  background: linear-gradient(to right, rgb(28,210,174) 0%, rgb(3,182,225) 100%);
  border-radius: 30px;
  color: rgba(255,255,255, 1);
  font-weight: 700;
`

export const SectionBanner = styled.section`
  min-height: 300px;
  height: calc(100vh / 2.5);
  max-height: 360px;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-right: 25px;
  padding-left: 25px;
  background-image: linear-gradient(to right, rgba(2,65,96,0.7) 30%, rgba(1,172,218,0.5) 100%), url('http://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/mn9k8zapebAbCqsiKf24juhXjjx.jpg');
  display: flex;
  justify-content: center;
  align-items: center; 
`

export const BoxTitle = styled(Box)`
  margin-bottom: 40px;
`

export const BoxSearch = styled(Box)`
`

export const BannerContent = styled(Box)`
  width: 100%;
`