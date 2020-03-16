import React from 'react';
import InputField from '../input_field';
import TextareaField from '../textarea_field';
import Button from '../button';
import { Formik } from 'formik';
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 20px;
  width: 100%;
`;

const RequestForm = () => (
  <Formik
    initialValues={{ requestTitle: '', requestDescription: '' }}
    validate={values => {
      const errors = {};
      if (!values.requestTitle) {
        errors.requestTitle = 'Required';
      }
      if (!values.requestDescription) {
        errors.requestDescription = 'Required';
      }

      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
      <Form onSubmit={handleSubmit}>
        <InputField
          name="requestTitle"
          placeholder="Request title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.requestTitle}
          touched={touched}
          errors={errors}
        />
        <TextareaField
          name="requestDescription"
          placeholder="What's your request about? Describe it here."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.requestDescription}
          touched={touched}
          errors={errors}
        />
        <Button type="submit" disabled={isSubmitting}>Submit</Button>
      </Form>
    )}
  </Formik>
);

export default RequestForm;
