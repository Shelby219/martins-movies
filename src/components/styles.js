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

//Body of the App
export const Body = styled.div `
    margin: 0;
    font-family: 'Quicksand',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;

`
//Base flex container for pages
export const BaseContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;

`
//Container for all the movie posters
export const MovieContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 45px;
`

//Individual movie card style
export const MovieCardStyle = styled.div `

    width: 275px;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 20px;
    padding-bottom: 30px;
    @media only screen and (min-width: 600px) {
    width: 320px;
    }
    h2 {
    padding: 0px 20px 0px 25px;
    height: 45px;
    color: #3e4555;
    font-size: 1.5em;

        @media only screen and (min-width: 600px) {
      font-size: 1.8em;
        }
    }
    div{
     padding: 0px 25px 0px 25px;
     color: #a098a4;
     font-size: 1em;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
    }

    .overview{
       height: 90px !important;
       overflow: scroll;
     }
    p:nth-child(1){
    min-width: 80px;
    height: 45px;
    }
    p:nth-child(2){
    height: 45px;
    text-align: right;
    padding: 0px 0px 0px 0px;
    }

    img {
      border-radius: 5px 5px 0px  0px;
    }
    .buttonGroup{
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      margin: 20px 0px 0px 0px;
    }

`
//Button for Read more- linking to IMDB
export const ReadMoreButton = styled.button `
     all: unset;
     background-color: #9352b3;
     color: white;
     border-radius: 5px;
     text-transform: uppercase;
     padding: 8px;
     font-weight: 600;
     font-size: 0.9em;
     width: 80px;
     cursor: pointer;
     text-align: center;
`

//Button for marked as watched
export const Watched = styled.div `
     padding: 15px;
     align-self: center;
     color: black !important;
     font-weight: 400;
     margin-left: 3px;
     @media only screen and (min-width: 600px) {
       margin-left: 25px;
    }
     input{
        margin-right: 10px;
        cursor: pointer;
     }
     span{

     text-align: right;
     padding-top: 2px;
     }
`

//Martins Movies Logo
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
//Under navigation
export const Background = styled.div `
    background-color: #E4E4E4;
    height: 100vh;
`


//Home page basis
export const HomePage = styled.div `
    background-image: url(${randomHomeImgs()});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1{
      text-align: center;
      color: white;
      font-weight: 800;
      font-size: 3em;
      padding: 0px 30px 0px 30px;
      text-shadow: 1px 1px 2px rgba(0,0,0, 0.25);
    }
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
    .searchInputClass{
      all: unset;
      border-radius: 5px 0px 0px  5px;
      background-color: white;
      color: #a098a4;
      align-self: center;
      height: 25px;
      padding: 15px;
      margin: 10px;
      width: 255px;
          @media only screen and (min-width: 600px) {
          width: 500px;
        }
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
     .searchButton{
        all: unset;
        height: 25px;
        background-color: #9352b3;
        color: white;
        border-radius: 0px 5px 5px 0px;
        text-transform: uppercase;
        padding: 15px;
        font-weight: 600;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        cursor: pointer;
      }
    }
`

//Under Navigation Background image
export const ListNav = styled.div `
    background-image: linear-gradient(rgba(146, 85, 158,0.7), rgba(178, 73, 123,0.7)), url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 250px;
    h1{
      color: white;
      font-size: 1.5em;
      padding: 20px;
      font-weight: 500;
      padding-top: 100px;
      margin: 30px;
      @media only screen and (min-width: 600px) {
        margin: 40px;
        font-size: 2.4em;
        }
    }
`



