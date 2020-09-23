import React from "react";
import PropTypes from 'prop-types';
import "../styles/input-box.scss";

const InputBox = (props) => (
  <input
    className={"input-box-style " + props.className}
    type={props.type}
    onChange={props.handleChange}
    value={props.value}
    disabled={props.disabled}
    name={props.name}
    id={props.id}
    maxLength={props.maxLength}
    placeholder={props.placeholder}
    onBlur={props.onBlur}
    autoFocus={props.autoFocus}
    width={props.width}
  />
);
InputBox.defaultProps = {
  handleChange: function () {},
  type: "text",
  value: "",
  disabled: false,
  name: "",
  id: "",
  placeholder: "",
  className: "",
  autoFocus: false,
  width: "",
};
InputBox.propTypes = {
  handleChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  width: PropTypes.string,
};
export default InputBox;
