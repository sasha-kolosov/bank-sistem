import './login.css'

export default class Login {
    render() {
        return (`<div page="login">
            <div class="Login">
                <div class="Login__form" id="login">
                    <div class="Login__form-title">
                        Login
                    </div>
                    <div class="Login__form-email">
                        <input 
                            type="email" 
                            name="email"
                            class="Login__form-email-input" 
                            id="login-form-email-input"
                        />
                        <label for="login-form-email-input">Email</label>
                    </div>
                    <div class="Login__form-password">
                        <input 
                            type="password" 
                            name="password"
                            class="Login__form-password-input" 
                            id="login-form-password-input"
                        />
                        <label for="login-form-password-input">Password</label>
                    </div>
                    <div class="Login__form-button">
                        <button 
                            type="button" 
                            class="Login__form-button-submit"
                            id="login-form-button-submit"
                        >LOGIN</button>
                    </div>
                    <div class="Login__form-register">
                        Don't have an account? 
                        <span class="Login__form-register-link" path="register">Register here</span>
                    </div>
                </div>
            </div>
        </div>`)
    }
}