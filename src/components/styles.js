import styled from "styled-components"
import backgroundImage from '../imgs/movie-collection.jpg';
import homeImage from '../imgs/slider3.jpg';
import homeImage1 from '../imgs/slider2.jpg';
import homeImage2 from '../imgs/slider1.jpg';


//Random alternating the home image
const listHomeImg = [homeImage, homeImage1, homeImage2]

function randomHomeImgs () {
  let randomHomeImg =
    listHomeImg[Math.floor(Math.random() * listHomeImg.length)];
  return  randomHomeImg
}


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



export const HomePage = styled.div `
    background-image: url(${randomHomeImgs()});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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



