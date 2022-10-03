class Validate {
    constructor(form) {
        this.form = form
        this.EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
        this.TEL_REGEXP = /^(\+7|8)(\(\d{3}\)|\d{3})\d{7}$/
        this.response = []
        this.status = 0
    }

    init() {
        for(let i = 0; i < document.querySelectorAll(`#${this.form} input`).length; i++) { 
            const input = document.querySelectorAll(`#${this.form} input`)[i]
            if(input.getAttribute('type') == 'email') {
                this.EMAIL_REGEXP.test(input.value) ? this.response.push('success') : this.response.push('incorrct')
            } else if(input.getAttribute('type') == 'password') {
                input.value.replace(/^ +| +$/g, '').length > 5 ? this.response.push('success') : this.response.push('incorrct')
            } else if(input.getAttribute('type') == 'tel') {
                this.TEL_REGEXP.test(input.value) ? this.response.push('success') : this.response.push('incorrct')
            }
        }
    }

    check() {
        try {
            for(let i = 0; i < this.response.length; i++) {
                if(this.response[i] == 'incorrct') {
                    throw new Error('incorrct')
                }
            }

            return this.status = 200
        } catch(e) {
            return this.status = 500
        }
    }
}