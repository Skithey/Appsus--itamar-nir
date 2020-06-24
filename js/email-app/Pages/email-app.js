import { emailsService } from '../services/email-service.js';
import { utilsService } from '../../utils/utils-service.js';
import emailsList from '../cmps/emails-list.cmp.js';
import emailDetails from '../Pages/email.details.cmp.js';


export default {
    template: `
    <div class="email-container">
    <h2> email-app</h2>
    <emails-list v-bind:emails="emailsToShow" ></emails-list>
    <router-link to="/email/details">
    <email-details></email-details>
    </router-link>
     </div>`,
    data() {
        return {
            emails: []
        }
    },
    created() {
        if (!localStorage.emails || !localStorage.emails.length) {
            emailsService.getEmails()
                .then(emails => {
                    this.emails = emails
                    console.log(this.emails);
                })
        } else {
            this.emails = utilsService.loadFromStorage('emails')
            console.log(this.emails);
        }
    },
    computed: {
        emailsToShow() {
            return this.emails
        }
    },
    components: {
        emailsList,
        emailDetails
    }

}