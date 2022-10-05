class Validate {
    constructor(form) {
        this.form = form
        this.EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
        this.TEL_REGEXP = /^(\+7)(\(\d{3}\)|\d{3})\d{7}$/
        this.response = {
            progress: [],
            status: 500
        }
    }

    init() {
        for(let i = 0; i < document.querySelectorAll(`#${this.form} input`).length; i++) { 
            const input = document.querySelectorAll(`#${this.form} input`)[i]
            if(input.getAttribute('type') == 'email') {
                this.EMAIL_REGEXP.test(input.value) ? this.response.progress.push('success') : this.response.progress.push('incorrct')
            } else if(input.getAttribute('type') == 'password') {
                input.value.replace(/^ +| +$/g, '').length > 5 ? this.response.progress.push('success') : this.response.progress.push('incorrct')
            } else if(input.getAttribute('type') == 'tel') {
                this.TEL_REGEXP.test(input.value) ? this.response.progress.push('success') : this.response.progress.push('incorrct')
            }
        }

        try {
            for(let i = 0; i < this.response.progress.length; i++) {
                if(this.response.progress[i] == 'incorrct') {
                    throw new Error('incorrct')
                }
            }
            
            this.response.status = 200
            return this.response
        } catch(e) {
            return this.response
        }
    }
}