import React, { useRef, useImperativeHandle } from "react";

import classes from "../Input/Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
    console.log("inputRef", inputRef.current);
  };
  console.log("ref", ref);

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id || "text"}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type || "text"}
        id={props.id || "text"}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
export default Input;
