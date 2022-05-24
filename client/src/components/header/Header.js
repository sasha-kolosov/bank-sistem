class Header extends Components {
    render() {
        return (`<div class="Header" id="header" style="display: ${this.blocked}">
            <div class="Header__line"></div>
            <div class="Header__menu">
                <div class="Header__menu-logo">
                    <div class="Header__menu-logo-text">Bank</div>
                </div>
                <div class="Header__menu-links">
                    <div class="Header__menu-links-block">
                        <div class="Header__menu-links-home">
                            <div class="Header__menu-links-home-text">
                                <span class="router" id="ln-header-home">Home</span>
                            </div>
                        </div>
                        <div class="Header__menu-links-cards">
                            <div class="Header__menu-links-cards-text">
                                <span class="router" id="ln-header-cards">Cards</span>
                            </div>
                        </div>
                        <div class="Header__menu-links-payments">
                            <div class="Header__menu-links-payments-text">
                                <span class="router" id="ln-header-payments">Payments</span>
                            </div>
                        </div>
                        <div class="Header__menu-links-deposits">
                            <div class="Header__menu-links-deposits-text">
                                <span class="router" id="ln-header-deposits">Deposits</span>
                            </div>
                        </div>
                        <div class="Header__menu-links-settings">
                            <div class="Header__menu-links-settings-text">
                                <span class="router" id="ln-header-settings">Settings</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}