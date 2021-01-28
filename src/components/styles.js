import styled from "styled-components"
import backgroundImage from '../imgs/movie-collection.jpg';


export const Logo = styled.div `
  font-family: 'Quicksand', sans-serif;
  color: #000000;
  fontWeight: 600;
  text-align: center;
  padding: 10px;
  margin: 5px;
  font-weight: 700;
  font-size: 1.3em;
  background: -webkit-linear-gradient(#b2497b, #92559e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Background = styled.div `
    background-color: #E4E4E4;
    height: 100vh;
`

export const HomeNav = styled.div `
    background-image: linear-gradient(rgba(178, 73, 123,0.4), rgba(178, 73, 123,0.4)), url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 300px;
`



