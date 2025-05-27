import ContactForm from "./components/ContactForm.jsx";
import { createGlobalStyle } from "styled-components";

export default function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ContactForm />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-size: 1.6rem;
    margin: 0;
    position: relative;
  }

  html {
    font-size: 62.5%;
  }
`;
