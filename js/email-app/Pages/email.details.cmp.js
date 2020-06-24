import { emailsService } from '../services/email-service.js'

export default {
    template: `
<section class="email-container" v-if="email">
<div @click="isRead = !isRead" v-bind:class="{read:isRead}">
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
            isRead: false
        }
    },
    created() {
        const { emailId } = this.$route.params;
        emailsService.getById(emailId)
            .then(email => {
                this.email = email;
            })
    },
}