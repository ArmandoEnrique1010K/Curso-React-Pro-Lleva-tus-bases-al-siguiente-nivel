import '../styles/styles.css'

export const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <form>
                <label>Name</label>
                <input type="text" placeholder="Name" />

                <label>Email</label>
                <input type="email" placeholder="Email" />

                <label>Password1</label>
                <input type="password" placeholder="Password1" />

                <label>Password2</label>
                <input type="password" placeholder="Password2" />

                <button type="submit">Create</button>
            </form>
        </div>
    )
}
