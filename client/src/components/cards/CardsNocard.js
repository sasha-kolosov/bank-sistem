class CardsNocard extends Components {
    code() {
        return (`<div class="Cards__nocard" style="display: ${this.blocked}" >
            <div class="Cards__nocard-title">
                <span id="ln-cards-nocard-title">Register now — buy today</span>
            </div>
            <div class="Cards__nocard-offers">
                <div class="Cards__nocard-offers-left-block">
                    <div class="Cards__nocard-offers-left">
                        <div class="Cards__nocard-offers-left-title">
                            <span id="ln-cards-nocard-offers-left-title">
                                Credit card
                            </span>
                        </div>
                        <div class="Cards__nocard-offers-left-text">
                            <span id="ln-cards-nocard-offers-left-text">
                                Register a card in 3 minutes.<br> 
                                And use it for 3 months for free, with good service and increased cashback.
                                The card is used by the Visa payment system.
                                You will be able to withdraw money from the card up to 100,000rubles 
                                without commissions and penalties.
                            </span>
                        </div>
                        <div class="Cards__nocard-offers-left-button">
                            <div class="Cards__nocard-offers-left-button-text">
                                <span id="ln-cards-nocard-offers-left-button">
                                    Credit card
                                </span>
                            </div>
                            <div class="Cards__nocard-offers-left-button-svg">
                                <i class="bi bi-check2-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Cards__nocard-offers-right-block">
                    <div class="Cards__nocard-offers-right">
                        <div class="Cards__nocard-offers-right-title">
                            <span id="ln-cards-nocard-offers-right-title">
                                Debit card
                            </span>
                        </div>
                        <div class="Cards__nocard-offers-right-text">
                            <span id="ln-cards-nocard-offers-right-text">
                                Register a card in 3 minutes.<br> 
                                A 10-year garranty, a card with the best security system of all cards in Russia.
                                Increased cashback until the end of the year + BankMusic for free.
                                When registering before the next month, Bank Premium is free for 2 months.
                            </span>
                        </div>
                        <div class="Cards__nocard-offers-right-button">
                            <div class="Cards__nocard-offers-right-button-text">
                                <span id="ln-cards-nocard-offers-right-button">
                                    Debit card
                                </span>
                            </div>
                            <div class="Cards__nocard-offers-right-button-svg">
                                <i class="bi bi-check2-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}