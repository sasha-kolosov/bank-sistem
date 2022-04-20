class CardsRegister extends Components {
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
                            <div class="Cards__register-block-left-menu-left Cards__register-block-left-menu-active">
                                <span id="ln-cards-regster-block-left-menu-left">Register credit card</span>
                            </div>
                            <div class="Cards__register-block-left-menu-right">
                                <span id="ln-cards-regster-block-left-menu-right">Register debit card</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Cards__register-block-right">
                    |<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>
                    |<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>
                    |<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>    
                    |<br>|<br>|<br>  
                </div>
            </div>
        </div>`)
    }
}