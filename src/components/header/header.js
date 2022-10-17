class Header {
    render() {
        return (`<div class="Header">
            <div class="Header__container">
                <div class="Header__container-item" path="home">
                    <div class="Header__container-item-text">
                        Home
                    </div>
                </div>
                <div class="Header__container-item" path="finance">
                    <div class="Header__container-item-text">
                        Finance
                    </div>
                </div>
                <div class="Header__container-item" path="credits">
                    <div class="Header__container-item-text">
                        Credits
                    </div>
                </div>
                <div class="Header__container-item" path="deposits">
                    <div class="Header__container-item-text">
                        Deposits
                    </div>
                </div>
                <div class="Header__container-item" path="shares">
                    <div class="Header__container-item-text">
                        Shares
                    </div>
                </div>
                <div class="Header__container-item" path="settings">
                    <div class="Header__container-item-text">
                        Settings
                    </div>
                </div>
            </div>
            <div class="Header__menu">
                <div class="Header__menu-button" path="header-media">
                    <i class="bi bi-list"></i>
                </div>
            </div>
        </div>`)
    }
}