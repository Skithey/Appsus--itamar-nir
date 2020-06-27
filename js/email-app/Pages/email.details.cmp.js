import { emailsService } from '../services/email-service.js'

export default {
    template: `
<section class="email-container container" v-if="email">
<div class="email-details-container" >
<h2 class="email-details-container-h2">Email Details</h2>
<ul class="email-details flex column space-between no-list">
<li class="details-header flex space-between">
<h2 class="details-header-h2"> {{email.subject}} </h2>
<i class="fas fa-arrow-right"></i>
<router-link  to="/email">  
<button class="inbox-return-btn">Inbox</button>
</router-link> 

</li>
<li class="email-subject flex space-between align-center">
 <h3> from {{email.from}}</h3>    {{email.sentAt}}
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
        // console.log(emailId);
        emailsService.getById(emailId)
            .then(email => {
                // console.log(email, emailId);
                // email.isRead = false
                this.email = email;
                // console.log(this.email);
                setTimeout(() => {
                    this.$emit('sendReadType', this.email)
                }, 500)
            })
    },
}