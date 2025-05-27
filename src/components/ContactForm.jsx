import { styled } from "styled-components";

export default function ContactForm() {
  return (
    <Form>
      <fieldset>
        <legend>Contact Me</legend>
        <label for="name" />
        <input
          id="name"
          // pattern={}
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
