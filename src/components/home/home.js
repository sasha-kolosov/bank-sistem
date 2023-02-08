class Home {
    render() {
        return (`<div class="Home" page="home">
            <div class="Home__container">
                <div class="Home__offers">
                    <div class="Home__offers-offer">
                        <div class="Home__offers-offer-finance">
                            <div class="Home__offers-offer-finance-title">
                                <span>
                                    Finance system
                                </span>
                            </div>
                            <div class="Home__offers-offer-finance-text">
                                <span>
                                    The best system for calculating your finances.
                                    We give 1000 bonus rubles
                                </span>
                            </div>
                            <div class="Home__offers-offer-finance-button">
                                <button path="finance">
                                    Open system
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="Home__offers-offer">
                        <div class="Home__offers-offer-credits">
                            <div class="Home__offers-offer-credits-title">
                                <span>
                                    Credits system
                                </span>
                            </div>
                            <div class="Home__offers-offer-credits-text">
                                <span></span>
                            </div>
                            <div class="Home__offers-offer-credits-button">
                                <button path="credits">
                                    Open system
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="Home__offers-offer">
                        <div class="Home__offers-offer-deposits">
                            <div class="Home__offers-offer-deposits-title">
                                <span>
                                    Deposits system
                                </span>
                            </div>
                            <div class="Home__offers-offer-deposits-text">
                                <span>
                                    We issue loans for any amount and needs with a low interest rate.
                                </span> 
                            </div>
                            <div class="Home__offers-offer-deposits-button">
                                <button path="deposits">
                                    Open system
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="Home__offers-offer">
                        <div class="Home__offers-offer-shares">
                            <div class="Home__offers-offer-shares-title">
                                <span>
                                    Shares system
                                </span>
                            </div>
                            <div class="Home__offers-offer-shares-text">
                                <span>
                                    We will help you put together a wonderful portfolio and help you at every stage.
                                </span>
                            </div>
                            <div class="Home__offers-offer-shares-button">
                                <button path="shares">
                                    Open system
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}