import { emailsService } from '../services/email-service.js'

export default {
    template: `
<section class="email-container" v-if="email">
<div >
<ul class="email-details flex column space-between no-list">
<li class="email-subject">
{{email.subject}}     {{email.sentAt}}
</li>
<li class="email-body">
{{email.body}}
</li>
<li class="email-desc">
{{email.desc}}
</li>
</ul>
</div>
</section>

`,
    // {{email}}
    data() {
        return {
            email: null,
        }
    },
    created() {
        const { emailId } = this.$route.params;
        emailsService.getById(emailId)
            .then(email => {
                email.isRead = false
                this.email = email;
                console.log(this.email);
                setTimeout(() => {
                    this.$emit('sendReadType', this.email)
                }, 500)
            })
            // console.log(this.email);
    },
}