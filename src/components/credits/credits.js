import './credits.css'

export default class Credits {
    render() {
        return (`<div page="credits" class="Credits">
            <div class="Credits__container">
                <div class="Credits__block">
                    <h1>Credits page</h1>
                    <div class="Credits__block-options">
                        <div class="Credits__block-options-option">
                            <div path="credits?credits=avto">
                                For avto
                            </div>
                        </div>
                        <div class="Credits__block-options-option">
                            <div path="credits?credits=studying">
                                For studying
                            </div>
                        </div>
                        <div class="Credits__block-options-option">
                            <div path="credits?credits=home">
                                For home
                            </div>
                        </div>
                        <div class="Credits__block-options-option">
                            <div path="credits?credits=other">
                                For other
                            </div>
                        </div>
                    </div>
                    <div class="Credits__block-container">
                        <div class="Credits__block-container-block">
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}