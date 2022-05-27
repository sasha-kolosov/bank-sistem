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
                                <router>
                                    <span id="ln-header-home">Home</span>
                                </router>
                            </div>
                        </div>
                        <div class="Header__menu-links-cards">
                            <div class="Header__menu-links-cards-text">
                                <router>
                                    <span id="ln-header-cards">Cards</span>
                                </router>
                            </div>
                        </div>
                        <div class="Header__menu-links-payments">
                            <div class="Header__menu-links-payments-text">
                                <router>
                                    <span id="ln-header-payments">Payments</span>
                                </router>
                            </div>
                        </div>
                        <div class="Header__menu-links-deposits">
                            <div class="Header__menu-links-deposits-text">
                                <router>
                                    <span id="ln-header-deposits">Deposits</span>
                                </router>
                            </div>
                        </div>
                        <div class="Header__menu-links-settings">
                            <div class="Header__menu-links-settings-text">
                                <router>
                                    <span id="ln-header-settings">Settings</span>
                                </router>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}