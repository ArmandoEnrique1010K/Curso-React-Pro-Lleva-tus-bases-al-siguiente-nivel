import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password'
    placeholder?: string;
    // eslint-disable-next-line
    [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {

    const [field] = useField(props)
    // console.log(field)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" type="text" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />

            {/* {
                // Errores de validación
                meta.touched && meta.error && <span className="error">{meta.error}</span>
            } */}
        </>
    )
}
