import { Formik, Form } from "formik"
import formJson from "../data/custom-form.json"
import { MyTextInput } from "../components"

// eslint-disable-next-line
const initialValues: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = "";
}

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}>
                {() => (
                    <Form noValidate>
                        {formJson.map(({ type, name, placeholder, label }) => {
                            return <MyTextInput
                                key={name}
                                // eslint-disable-next-line
                                type={(type as any)}
                                name={name}
                                label={label}
                                placeholder={placeholder} />
                        })}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
