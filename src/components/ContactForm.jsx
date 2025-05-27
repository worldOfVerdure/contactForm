import { namePatternRegex } from "./helpers/regexPatterns.js";
import { styled } from "styled-components";

export default function ContactForm() {
  return (
    <Form>
      <fieldset>
        <legend>Contact Me</legend>
        <label for="givenName" >Given Name:</label>
        <input
          id="givenName"
          pattern={namePatternRegex}
          value=""
        />
        <label for="surname" >Surname:</label>
        <input
          id="surname"
          pattern={namePatternRegex}
          value=""
        />
      </fieldset>
    </Form>
  );
}

const Form = styled.form`
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
`;
