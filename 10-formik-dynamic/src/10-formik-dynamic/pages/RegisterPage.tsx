import { type FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

    const { formData, name, email, password1, password2,
        isValidEmail, onChange, resetForm } = useForm({
            name: '',
            email: '',
            password1: '',
            password2: '',
        })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={(ev) => onSubmit(ev)}>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(ev) => onChange(ev)}
                    className={`${name.trim().length <= 0 ? 'has-error' : ''}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(ev) => onChange(ev)}
                    className={`${!isValidEmail(email) ? 'has-error' : ''}`}
                />
                {!isValidEmail(email) && <span>El email no es válido</span>}

                <label>Password1</label>
                <input
                    type="password"
                    placeholder="Password1"
                    name="password1"
                    value={password1}
                    onChange={(ev) => onChange(ev)}
                    className={`${password1.trim().length < 6 && password1.trim().length > 0 ? 'has-error' : ''}`}
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span>}

                <label>Password2</label>
                <input
                    type="password"
                    placeholder="Password2"
                    name="password2"
                    value={password2}
                    onChange={(ev) => onChange(ev)} />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben de ser iguales</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={() => resetForm()}>Reset</button>
            </form>
        </div>
    )
}
