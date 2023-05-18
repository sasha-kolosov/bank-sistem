import './header-media.css'

export default class HeaderMedia {
    render() {
        return (`<div class="HeaderMedia" page="header-media">
            <div class="HeaderMedia__container">
                <div class="HeaderMedia__container-item" path="home">
                    <div class="HeaderMedia__container-item-text">
                        Home
                        <span class="HeaderMedia__container-item-text-icon">
                            <i class="bi bi-house-door"></i>
                        </span>
                    </div>
                </div>
                <div class="HeaderMedia__container-item" path="finance">
                    <div class="HeaderMedia__container-item-text">
                        Finance
                        <span class="HeaderMedia__container-item-text-icon">
                            <i class="bi bi-bar-chart"></i>
                        </span>
                    </div>
                </div>
                <div class="HeaderMedia__container-item" path="credits">
                    <div class="HeaderMedia__container-item-text">
                        Credits
                        <span class="HeaderMedia__container-item-text-icon">
                            <i class="bi bi-credit-card"></i>
                        </span>
                    </div>
                </div>
                <div class="HeaderMedia__container-item" path="deposits">
                    <div class="HeaderMedia__container-item-text">
                        Deposits
                        <span class="HeaderMedia__container-item-text-icon">
                            <i class="bi bi-safe"></i>
                        </span>
                    </div>
                </div>
                <div class="HeaderMedia__container-item" path="shares">
                    <div class="HeaderMedia__container-item-text">
                        Shares
                        <span class="HeaderMedia__container-item-text-icon">
                            <i class="bi bi-clipboard-pulse"></i>
                        </span>
                    </div>
                </div>
                <div class="HeaderMedia__container-item" path="settings">
                    <div class="HeaderMedia__container-item-text">
                        Settings
                        <span class="HeaderMedia__container-item-text-icon">
                            <i class="bi bi-gear"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>`)
    }
}