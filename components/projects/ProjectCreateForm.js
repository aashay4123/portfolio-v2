import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";
import PortInput from "../form/PortInput";
import PortDate from "../form/PortDate";

import moment from "moment";

const validateInputs = (values) => {
  let errors = {};
  Object.entries(values).forEach(([key, value]) => {
    if (!value && (key !== "url" || value !== null)) {
      errors[key] = `Field ${key} is required!`;
    }
  });
  return errors;
};

const PortfolioCreateForm = ({ initialValues, onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateInputs}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              label="Title"
              type="text"
              name="title"
              component={PortInput}
            />
            <Field
              label="language"
              type="text"
              name="language"
              component={PortInput}
            />
            <Field
              label="typeof"
              type="text"
              name="typeof"
              component={PortInput}
            />
            <Field label="link" type="text" name="url" component={PortInput} />
            <Field
              label="Description"
              type="textarea"
              name="description"
              component={PortInput}
            />
            <Field label="Date" name="Date" component={PortDate} />
            <Button
              color="success"
              size="lg"
              type="submit"
              disabled={isSubmitting}
            >
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PortfolioCreateForm;
