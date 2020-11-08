import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "src/components/common/Button"

// Netlify stuff
const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const StyledError = styled.span`
  color: red;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.colors.primaryText};
  padding: 50px;
  border-radius: 2px;
  max-width: 600px;

  @media (max-width: 576px) {
    padding: 25px 15px;
  }

  span {
    margin-bottom: 15px;
  }

  input {
    margin-bottom: 15px;
    border: 1px solid ${(props) => props.theme.colors.primaryText};
    padding: 10px 12px;
    border-radius: 2px;
    outline: none;
    font-size: 20px;

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.secondaryText};
    }
  }

  textarea {
    outline: none;
    font-size: 20px;
    padding: 10px 12px;
    margin-bottom: 15px;
    border: 1px solid ${(props) => props.theme.colors.primaryText};

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.secondaryText};
    }
  }

  button {
    border: 1px solid ${(props) => props.theme.colors.primaryText};

    &:hover {
      border: 1px solid ${(props) => props.theme.colors.primaryText};
    }
  }
`

const Form = () => {
  const { register, handleSubmit, errors, getValues, reset } = useForm()

  const onSubmit = (data: any) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        reset()
      })
      .catch((error) => alert(error))
  }

  return (
    <StyledForm
      id="contact"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <input
        name="name"
        type="text"
        placeholder="Name"
        ref={register({ required: true, maxLength: 50 })}
      />
      {errors.name && <StyledError>This field is required</StyledError>}
      <input
        name="email"
        type="email"
        placeholder="Email"
        ref={register({ required: true, maxLength: 50 })}
      />
      {errors.email && <StyledError>This field is required</StyledError>}

      <textarea
        name="message"
        ref={register({ required: true })}
        rows={10}
        placeholder="Message"
      ></textarea>
      {errors.message && <StyledError>This field is required</StyledError>}
      <Button type="submit" title="Send" />
    </StyledForm>
  )
}

export default Form
