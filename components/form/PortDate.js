import React, { Fragment } from "react";
import DatePicker from "react-datepicker";

import { FormGroup, Label, Button } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: new Date(),
      isHidden: false,
    };
  }
  setDateandtouched = (date, touched) => {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);
  };
  handleChange = (date) => {
    this.setState({
      dateValue: date,
    });
    this.setDateandtouched(date, true);
  };
  toggleDate(date) {
    this.setState({
      isHidden: !this.state.isHidden,
    });
    this.setDateandtouched(date, true);
  }
  render() {
    const {
      label,
      field,
      form: { touched, errors },
    } = this.props;
    const { isHidden, dateValue } = this.state;
    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          {!isHidden && (
            <DatePicker
              selected={moment(dateValue)}
              onChange={this.handleChange}
              peekNextMounth
              showMonthDropdown
              showYearDropdown
              maxDate={moment()}
              dropdownMode="select"
            />
          )}
          {touched[field.name] && errors[field.name] && (
            <div className="error">{errors[field.name]}</div>
          )}
        </div>
        {!isHidden && field.name === "endDate" && (
          <div>
            <Button color="primary" onClick={() => this.toggleDate(null)}>
              Working here
            </Button>
          </div>
        )}
        {isHidden && field.name === "endDate" && (
          <Fragment>
            <span>Working here</span>
            <div>
              <Button
                color="primary"
                onClick={() => this.toggleDate(dateValue)}
              >
                set End Date
              </Button>
            </div>
          </Fragment>
        )}
      </FormGroup>
    );
  }
}
