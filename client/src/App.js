import './App.css';
import PageContent from './PageContent'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Source Sans Pro', sans-serif;
    /* font-weight: bold; */
    background-color: black;
    color: white;
  }

  #navbar {
    background-color: #1A1B54;
    overflow: hidden;
    padding: 15px;
    height: 70px
  }

  #navbar .links {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: black;
    color: white;
    border: 2px solid #0B13F9;
    padding: 15px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: left;
    display: block;
    border-radius: 15px;

    &:hover {
      background-color: white;
      color: black;
    }
  }
  /* .right {
    color: black;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    float: right;
    display: flex;
  } */
  #navbar .login {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: black;
    color: white;
    border: 2px solid #0B13F9;
    padding: 15px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: right;
    display: block;
    border-radius: 15px;

    &:hover {
      background-color: white;
      color: black;
    }
  }
  .name {
    color: white;
    text-align: right;
    text-decoration: none;
    font-size: 28px;
    transition-duration: 0.4s;
    vertical-align: middle;
    font-family: 'Satisfy', cursive;
  }

  #title {
    font-family: 'Satisfy', cursive;
    font-size: 95px;
    text-align: center;
    padding-left: 32px;
    color: white;
    text-shadow: 4px 4px #0B13F9;
  }

  #subtitle {
    text-align: center;
    font-size: 35px;
  }

  #hotspot {
    font-family: 'Satisfy', cursive;
  }

  #hotleft h2 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 35px;
    font-weight: bold;
  }

  .homeContainer {
    display: flex;
    justify-content: space-around;
  }

  .homeLeft {
    width: 35%;
    text-align: center;
    margin: 20px;
  }

  .homeRight {
    width: 50%;
    text-align: center;
  }

  .spotContainer {
    display: grid;
    grid-template-columns: auto auto;
    margin: 2rem;
  }

  .spotContainer h1 {
    font-family: 'Satisfy', cursive;
  }

  .fav h2 {
    font-family: 'Satisfy', cursive;
    font-size: 60px;
    text-align: center;
    text-shadow: 4px 4px #0B13F9;
  }
  .login input {
    border-radius: 5px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .login form {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }

  .login h2 {
    text-align: center
  }

  #submit {
    background: gray
  }

  .search input {
    border-radius: 5px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .search {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }

  .search select {
    border-radius: 5px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .hangs input {
    border-radius: 5px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }


  `;

function App() {
  return (
    <div>
      <GlobalStyle />
      <PageContent />
    </div>
  );
}

export default App;
