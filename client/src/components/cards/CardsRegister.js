class CardsRegister extends Components {
    constructor(blocked, options) {
        super(blocked)
        this.blockedCreditForm = options.blockedCreditForm
        this.blockedDebitForm = options.blockedDebitForm
        this.borderCredit = options.borderCredit
        this.borderDebit = options.borderDebit
        this.blockedCreditFinal = options.blockedCreditFinal
        this.blockedDebitFinal = options.blockedDebitFinal
    }

    code() {
        return (`<div class="Cards__register" style="display: ${this.blocked}">
            <div class="Cards__register-block">
                <div class="Cards__register-block-left">
                    <div class="Cards__register-block-left-title">
                        <span id="ln-cards-regster-block-left-title">
                            Register your card
                        </span>
                    </div>
                    <div class="Cards__register-block-left-menu">
                        <div class="Cards__register-block-left-block">
                            <div class="Cards__register-block-left-menu-left ${this.borderCredit}">
                                <span id="ln-cards-regster-block-left-menu-left">Register credit card</span>
                            </div>
                            <div class="Cards__register-block-left-menu-right ${this.borderDebit}">
                                <span id="ln-cards-regster-block-left-menu-right">Register debit card</span>
                            </div>
                        </div>
                    </div>
                    <div class="Cards__register-block-left-form">
                        <div class="Cards__register-block-left-form-credit" style="display: ${this.blockedCreditForm}">
                            <div class="Cards__register-block-left-form-credit-name">
                                <div class="Cards__register-block-left-form-credit-name-placeholder">
                                    <span id="ln-cards-register-block-left-form-credit-name-placeholder">Enter your name</span>
                                </div>
                                <div class="Cards__register-block-left-form-credit-name-input">
                                    <input 
                                        placeholder="Name / Credit" 
                                        type="text" 
                                        name="name" 
                                        onkeyup="this.value = this.value.replace(/[0-9]\./, '');"
                                    />
                                </div>
                                <div class="Cards__register-block-left-form-credit-name-text">
                                    <span id="ln-cards-register-block-left-form-credit-name-text">Your real name</span>
                                </div>
                            </div> 
                            <div class="Cards__register-block-left-form-credit-pin">
                                <div class="Cards__register-block-left-form-credit-pin-placeholder">
                                    <span id="ln-Cards-register-block-left-form-pin-placeholder">Enter the PIN code</span>
                                </div>
                                <div class="Cards__register-block-left-form-credit-pin-input">
                                    <input 
                                        placeholder="Pin code" 
                                        type="text" 
                                        name="pin" 
                                        onkeyup="this.value = this.value.replace(/[A-Za-zА-Яа-яЁё]/, '');" 
                                        pattern="[0-9]\." 
                                        maxlength="4"
                                    />
                                </div>
                                <div class="Cards__register-block-left-form-credit-pin-text">
                                    <span id="ln-Cards-register-block-left-form-credit-pin-text">PIN code of 4 digits</span>
                                </div>
                            </div>
                        </div>
                        <div class="Cards__register-block-left-form-debit"  style="display: ${this.blockedDebitForm}">
                            <div class="Cards__register-block-left-form-debit-name">
                                <div class="Cards__register-block-left-form-debit-name-placeholder">
                                    <span id="ln-cards-register-block-left-form-debit-name-placeholder">Enter your name</span>
                                </div>
                                <div class="Cards__register-block-left-form-debit-name-input">
                                    <input 
                                        placeholder="Name / Debit" 
                                        type="text" 
                                        name="name" 
                                        onkeyup="this.value = this.value.replace(/[0-9]\./, '');"
                                    />
                                </div>
                                <div class="Cards__register-block-left-form-debit-name-text">
                                    <span id="ln-cards-register-block-left-form-debit-name-text">Your real name</span>
                                </div>
                            </div> 
                            <div class="Cards__register-block-left-form-pin">
                                <div class="Cards__register-block-left-form-debit-pin-placeholder">
                                    <span id="ln-Cards-register-block-left-form-debit-pin-placeholder">Enter the PIN code</span>
                                </div>
                                <div class="Cards__register-block-left-form-debit-pin-input">
                                    <input 
                                        placeholder="Pin code" 
                                        type="text" 
                                        name="pin" 
                                        onkeyup="this.value = this.value.replace(/[A-Za-zА-Яа-яЁё]/, '');" 
                                        pattern="[0-9]\." 
                                        maxlength="4"
                                    />
                                </div>
                                <div class="Cards__register-block-left-form-debit-pin-text">
                                    <span id="ln-Cards-register-block-left-form-debit-pin-text">PIN code of 4 digits</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Cards__register-block-right">
                    <div class="Cards__register-block-right-credit" style="display: ${this.blockedCreditFinal}">
                        <div class="Cards__register-block-right-credit-block">
                            <div class="Cards__register-block-right-credit-block-title">
                                <span id="ln-cards-register-block-right-credit-block-title">Your credit card</span>
                            </div>
                            <div  class="Cards__register-block-right-credit-block-name">
                                <span>Sasha Kolosov</span>
                            </div>
                            <div class="Cards__register-block-right-credit-block-info">
                                <div class="Cards__register-block-right-credit-block-info-card">
                                    <span>xxxx xxxx xxxx xxxx</span>
                                </div>
                                <div class="Cards__register-block-right-credit-block-info-secret">
                                    <div class="Cards__register-block-right-credit-block-info-cvc">
                                        <span>xxx</span>
                                    </div>
                                    <div class="Cards__register-block-right-credit-block-info-date">
                                        <span>xx/xx</span>
                                    </div>
                                </div>
                            </div>
                            <div class="Cards__register-block-right-credit-block-button">
                                <div class="Cards__register-block-right-credit-block-button-block">
                                    <span id="ln-cards-register-block-right-credit-block-button-block">Register</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Cards__register-block-right-debit" style="display: ${this.blockedDebitFinal}">
                        <div class="Cards__register-block-right-debit-block">
                            <div class="Cards__register-block-right-debit-block-title">
                                <span id="ln-cards-register-block-right-debit-block-title">Your debit card</span>
                            </div>
                            <div  class="Cards__register-block-right-debit-block-name">
                                <span>Sasha Kolosov</span>
                            </div>
                            <div class="Cards__register-block-right-debit-block-info">
                                <div class="Cards__register-block-right-debit-block-info-card">
                                    <span>xxxx xxxx xxxx xxxx</span>
                                </div>
                                <div class="Cards__register-block-right-debit-block-info-secret">
                                    <div class="Cards__register-block-right-debit-block-info-cvc">
                                        <span>xxx</span>
                                    </div>
                                    <div class="Cards__register-block-right-debit-block-info-date">
                                        <span>xx/xx</span>
                                    </div>
                                </div>
                            </div>
                            <div class="Cards__register-block-right-debit-block-button">
                                <div class="Cards__register-block-right-debit-block-button-block">
                                    <span id="ln-cards-register-block-right-debit-block-button-block">Register</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}