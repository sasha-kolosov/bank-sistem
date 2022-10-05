class Register {
    render() {
        return (`<div page="register">
            <div class="Register">
                <div class="Register__form" id="register">
                    <div class="Register__form-title">
                        Register
                    </div>
                    <div class="Register__form-phone">
                        <input 
                            type="tel" 
                            name="tel"
                            class="Register__form-phone-input" 
                            id="register-form-phone-input"
                        />
                        <label for="register-form-phone-input">Phone</label>
                    </div>
                    <div class="Register__form-email">
                        <input 
                            type="email" 
                            name="email"
                            class="Register__form-email-input" 
                            id="register-form-email-input"
                        />
                        <label for="register-form-email-input">Email</label>
                    </div>
                    <div class="Register__form-password">
                        <input 
                            type="password" 
                            name="password"
                            class="Register__form-password-input" 
                            id="register-form-password-input"
                        />
                        <label for="register-form-password-input">Password</label>
                    </div>
                    <div class="Register__form-button">
                        <button 
                            type="button" 
                            class="Register__form-button-submit"
                            id="register-form-button-submit"
                        >REGISTER</button>
                    </div>
                    <div class="Register__form-register">
                        Have account? 
                        <span class="Register__form-register-link" path="login">Login here</span>
                    </div>
                </div>
            </div>
        </div>`)
    }
}