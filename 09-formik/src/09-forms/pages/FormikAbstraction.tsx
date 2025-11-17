import { Formik, Form, } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

// import { MyTextInput } from '../components/MyTextInput'
// import { MySelect } from '../components/MySelect'
// import { MyCheckbox } from '../components/MyCheckbox'
import { MyTextInput, MySelect, MyCheckbox } from '../components'

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(10, 'Debe de tener 10 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('El correo no tiene un formato válido')
                        .required('Requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                        .notOneOf(['it-junior'], 'Esta opción no es permitida')
                        .required('Requerido'),
                })}
            >
                {
                    () => (
                        <Form>
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                placeholder='Fernando'
                            />
                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                placeholder='Herrera'
                            />
                            <MyTextInput
                                label="Email Address"
                                name="email"
                                placeholder='john@google.com'
                                type="email"
                            />

                            <MySelect label="Job Type" name="jobType">
                                <option value="">Select a job type</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT senior</option>
                                <option value="it-junior">IT junior</option>
                            </MySelect>

                            <MyCheckbox
                                label="Terms & Conditions"
                                name="terms"
                            />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
