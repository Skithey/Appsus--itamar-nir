import { emailsService } from '../services/email-service.js';
import { utilsService } from '../../utils/utils-service.js';
import emailsList from '../cmps/emails-list.cmp.js';
import emailDetails from '../Pages/email.details.cmp.js';


export default {
    template: `
    <div class="email-container">
    <h2> email-app</h2>
    <email-details @close="setCurrEmail" v-if="currEmail" :email="currEmail" ></email-details>
    <emails-list  @emailSelected="setCurrEmail" v-else v-bind:emails="emailsToShow" ></emails-list>

    </div>`,
    data() {
        return {
            emails: [],
            currEmail: null
        }
    },
    methods: {
        setCurrEmail(email) {
            this.currEmail = email
        }

    },
    created() {
        emailsService.getEmails()
            .then(emails => {
                this.emails = emails
            })
    },
    computed: {
        emailsToShow() {
            return this.emails
        },
        emailId() {
            return this.$route.params.emailId
        }
    },
    components: {
        emailsList,
        emailDetails
    }

}