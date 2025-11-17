import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    // eslint-disable-next-line
    [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {

    const [field] = useField({ ...props, type: 'checkbox' })

    return (
        <>
            <label htmlFor={props.id || props.name}>
                <input id={props.id || props.name} type="checkbox" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
