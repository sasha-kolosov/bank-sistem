class Finance {
    render() {
        return `<div class="Finance" page="finance">
            <div class="Finance__container">
                <div class="Finance__block">
                    <h1>Finance page</h1>
                    <div class="Finance__block-offers">
                        <div class="Finance__block-offers-offer">
                            <div 
                                class="Finance__block-offers-offer-cards"
                                style="background-image: url('https://img.freepik.com/free-photo/3d-render-hand-holding-wallet-with-bank-card_107791-15917.jpg?w=826&t=st=1670254046~exp=1670254646~hmac=eb92314298f45c02f7bfb0b311086dc0753eb7c03ff6e5826b5591abcb785194')" 
                            >
                                <button path="finance/cards">Cards</button>
                            </div>
                        </div>
                        <div class="Finance__block-offers-offer">
                            <div 
                                class="Finance__block-offers-offer-bookkeeping"
                                style="background-image: url('https://img.freepik.com/free-photo/financial-concept-with-icons-wooden-cubes-calculator-blue-table-flat-lay_176474-9440.jpg?w=1380&t=st=1670255790~exp=1670256390~hmac=fb2d8b56f5a47c5ea9edb6687b710d814b84710a70b1b207a64805f6a59a545e')"
                            >
                                <button path="finance/bookkeeping">Bookkeeping</button>
                            </div>
                        </div>
                        <div class="Finance__block-offers-offer">
                            <div 
                                class="Finance__block-offers-offer-analytics"
                                style="background-image: url('https://img.freepik.com/free-psd/3d-presentation-with-pie-chart-statistics_23-2148938919.jpg?w=826&t=st=1670256276~exp=1670256876~hmac=1e29c5dd36071d24cb3158cbdca0f80e74edc298f62b3c0e4a0040afc998c56c')"
                            >
                                <button path="finance/analytics">Analytics</button>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>`
    }
}
