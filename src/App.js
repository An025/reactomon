import React, {useState} from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/UI/NavBar';
import { lightTheme, darkTheme } from './components/UI/Theme';
import Image from './components/UI/Image'
import { GlobalStyles } from './components/UI/GlobalStyle';
import moon from './images/moon.png';

import sun from './images/sun.png';



function App(props) {
  const [theme, setTheme] = useState('light');
  const [imgUrl, setImgUrl] = useState(moon);
  const onClickHandler = () => {
    if(theme === 'light'){
      setTheme('dark');
      setImgUrl(sun);

    }else{
      setTheme('light');
      setImgUrl(moon);
    }
  }
    
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    {props.children}
    <GlobalStyles/>
    <button onClick={onClickHandler} id="switcher">
       <Image path={imgUrl} title={theme}/>
    </button>
    <NavBar/>
    </ThemeProvider>

  );
}

export default App;
