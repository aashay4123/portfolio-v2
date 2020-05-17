import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";
import PortInput from "../form/PortInput";
import PortDate from "../form/PortDate";

import moment from "moment";

const validateInputs = (values) => {
  let errors = {};
  Object.entries(values).forEach(([key, value]) => {
    if (!value && (key !== "endDate" || value !== null)) {
      errors[key] = `Field ${key} is required!`;
    }
  });

  const startDate = moment(values.startDate);
  const endDate = moment(values.endDate);

  if (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = "End Date cannot be before start date!!!";
  }

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
              label="Company"
              type="text"
              name="company"
              component={PortInput}
            />
            <Field
              label="Location"
              type="text"
              name="location"
              component={PortInput}
            />
            <Field
              label="Position"
              type="text"
              name="position"
              component={PortInput}
            />
            <Field
              label="Description"
              type="textarea"
              name="description"
              component={PortInput}
            />
            <Field label="Start Date" name="startDate" component={PortDate} />

            <Field label="End Date" name="endDate" component={PortDate} />
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
