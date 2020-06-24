import { emailsService } from '../services/email-service.js'

export default {
    props: ['email'],
    template: `
    <div class="flex space-around">
    <router-link :to='"/email/" + email.id'> 
    <li class="">
    <span class="email-subject" > 
    {{email.subject}} 
    {{email.body}} 
    {{email.desc}} 
    {{email.sentAt}} 
    </span>
    </li>    
    </router-link>
    <span class="btn" @click="deleteEmail">X</span>
    </div>
    `,
    data() {
        return {
            emails: []
        }
    },

    methods: {
        deleteEmail(emailId) {
            emailsService.removeEmail(emailId)
            emailsService.getEmails()
                .then(emails => {
                    this.emails = emails
                    console.log(this.emails);
                })
        }
    },
    computed: {
        emailsToShow() {
            return this.emails
        },
    }


}