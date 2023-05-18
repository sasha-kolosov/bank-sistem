import './finance.css'

export default class Finance {
    render() {
        return `<div class="Finance" page="finance">
            <div class="Finance__container">
                <div class="Finance__block">
                    <h1>Finance page</h1>
                    <div class="Finance__block-offers">
                        <div class="Finance__block-offers-offer">
                            <div 
                                class="Finance__block-offers-offer-cards"
                                style="background-image: url('https://img.freepik.com/premium-vector/3d-credit-card-money-financial-security-for-online-shopping-online-payment-credit-card-with-payment-protection-concept-3d-business-finance-vector-icon-render-illustrator-for-shopping-on-ecommerce_412828-1474.jpg?w=1380')" 
                            >
                                <div class="Finance__block-offers-offer-cards-animate">
                                    <div class="Finance__block-offers-offer-cards-title">Cards</div>
                                    <div class="Finance__block-offers-offer-cards-text">
                                        Increased cashback on depit cards and middle cards, good shopping!
                                    </div>
                                    <div class="Finance__block-offers-offer-cards-button">
                                        <button path="finance/cards">Cards</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="Finance__block-offers-offer">
                            <div 
                                class="Finance__block-offers-offer-bookkeeping"
                                style="background-image: url('https://img.freepik.com/premium-photo/checklist-paper-on-clipboard-with-correct-checked-mark-with-minimal-style-calculator-and-magnifier-on-pink-background-business-financial-or-payment-management-accountant-work-concept-3d-rendering_660344-531.jpg?w=1380')"
                            >
                                <div class="Finance__block-offers-offer-bookkeeping-animate">
                                    <div class="Finance__block-offers-offer-bookkeeping-title">Bookkeeping</div>
                                    <div class="Finance__block-offers-offer-bookkeeping-text">
                                        Accounting will allow you to correctly calculate your income and expenses.
                                    </div>
                                    <div class="Finance__block-offers-offer-bookkeeping-button">
                                        <button path="finance/bookkeeping">Bookkeeping</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="Finance__block-offers-offer">
                            <div 
                                class="Finance__block-offers-offer-analytics"
                                style="background-image: url('https://img.freepik.com/premium-vector/3d-credit-card-money-financial-security-for-online-shopping-on-mobile-phone-online-payment-secure-with-credit-card-and-money-coin-payment-concept-3d-smartphone-vector-icon-render-illustration_412828-1303.jpg?w=1380')"
                            >
                                <div class="Finance__block-offers-offer-analytics-animate">
                                    <div class="Finance__block-offers-offer-analytics-title">Analytics</div>
                                    <div class="Finance__block-offers-offer-analytics-text">
                                        Analytics will allow you to see and analyze your costs.
                                    </div>
                                    <div class="Finance__block-offers-offer-analytics-button">
                                        <button path="finance/analytics">Analytics</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>`
    }
}
