import { Field } from "formik";
import React from "react";

const Select = (props) => {
    const { name, options, ...rest } = props;
    return (
        <>
        <Field as="select" id={name} name={name} {...rest}>
            {options.map((option) => {
            return (
                <option key={option.value} value={option.value}>
                {option.key}
                </option>
            );
            })}
        </Field>
        </>
    );
};

export default Select;
