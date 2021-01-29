import styled from "styled-components"
import backgroundImage from '../imgs/movie-collection.jpg';


export const Body = styled.body `
    margin: 0;
    font-family: 'Quicksand',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

`



export const Logo = styled.div `
  font-family: 'Quicksand', sans-serif;
  color: #000000;
  fontWeight: 600;
  text-align: center;
  padding: 10px;
  margin: 5px;
  font-weight: 700;
  font-size: 0.8em;
  background: -webkit-linear-gradient(#b2497b, #92559e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;\
  @media only screen and (min-width: 600px) {
    font-size: 1.3em;
  }

`

export const Background = styled.div `
    background-color: #E4E4E4;
    height: 100vh;
`

export const ListNav = styled.div `
    background-image: linear-gradient(rgba(146, 85, 158,0.7), rgba(178, 73, 123,0.7)), url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 250px;
    h2{
      font-size: 2em;
      padding: 20px;
      padding-top: 100px;
    }
`



