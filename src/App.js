import styled, { ThemeProvider } from "styled-components"
import Menu from "./Components/Menu.jsx"
import Navbar from "./Components/Navbar.jsx"
import { darkTheme, lightTheme } from "./utils/Theme.js";

const Container = styled.div`
  display: flex;
`;

  
const Main = styled.div`
  flex: 7;
  background-color: #181818;
`;

const Wrapper = styled.div`
`;


function App() {
  


  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
      <Menu />
      <Main>
          <Navbar />
          <Wrapper>
          <h1>test</h1> 
          </Wrapper>
       </Main> 
      </Container>
    </ThemeProvider>
  );
}

export default App
