import React from "react";
import { useField } from "formik";

const MyTextInput = ({ ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error-message">{meta.error}</div>
            ) : null}
        </>
    );
};

export default MyTextInput;
