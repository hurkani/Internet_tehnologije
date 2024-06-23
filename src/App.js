import styled, { ThemeProvider } from "styled-components"
import Menu from "./Components/Menu.jsx"
import Navbar from "./Components/Navbar.jsx"
import { darkTheme, lightTheme } from "./utils/Theme.js"
import { useState } from "react"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Video from "./pages/Video.jsx"
import SignIn from "./pages/Signin.jsx"



const Container = styled.div`
  display: flex;
`;

  
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 20px 52px;
`;


function App() {
  const [darkMode, setDarkMode] = useState(true)


  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode = {darkMode} setDarkMode = {setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element = {<Home />} />
                  <Route path = "signin" element = {<SignIn />} />
                  <Route path = "video">
                    <Route path = ":id" element = {<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main> 
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App
