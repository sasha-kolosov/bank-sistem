class Header extends Components {
    code() {
        return (`<div class="Header" id="header" page="${this.id}">
            <div class="Header__line"></div>
            <div class="Header__menu">
                <div class="Header__menu-logo">
                    <div class="Header__menu-logo-text">Bank</div>
                </div>
                <div class="Header__menu-links">
                    <div class="Header__menu-links-block">
                        <div class="Header__menu-links-home">
                            <div class="Header__menu-links-home-text">Home</div>
                        </div>
                        <div class="Header__menu-links-cards">
                            <div class="Header__menu-links-cards-text">Cards</div>
                        </div>
                        <div class="Header__menu-links-currencies">
                            <div class="Header__menu-links-currencies-text">Currencies</div>
                        </div>
                        <div class="Header__menu-links-settings">
                            <div class="Header__menu-links-settings-text">Settings</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}