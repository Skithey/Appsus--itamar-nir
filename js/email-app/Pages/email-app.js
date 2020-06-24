import { emailsService } from '../services/email-service.js';
// import { utilsService } from '../../utils/utils-service.js';
import emailsList from '../cmps/emails-list.cmp.js';
import emailDetails from '../Pages/email.details.cmp.js';
import emailStatus from '../cmps/email-status.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import addEmail from '../cmps/email-addEmail.cmp.js';

export default {
    template: `
    <div class="email-container">
    <h2> email-app</h2>
    <button @click="isVisible = !isVisible">+ Compose</button>
    <div  class="compose" :class="{visible:isVisible}">
    <add-email @sendEmail="addEmail"></add-email>
    </div>
    <email-filter @filter="setFilter"></email-filter>
    <email-details @close="setCurrEmail" v-if="currEmail" :email="currEmail" ></email-details>
    <emails-list  @emailSelected="setCurrEmail" v-else v-bind:emails="emailsToShow" ></emails-list>
    <email-status></email-status>
    </div>`,
    data() {
        return {
            emails: [],
            currEmail: null,
            filterBy: null,
            isVisible: false
        }
    },
    methods: {
        setCurrEmail(email) {
            this.currEmail = email
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        addEmail(to, subject, desc) {
            console.log(to, subject, desc);


        }
    },
    created() {
        emailsService.getEmails()
            .then(emails => {
                this.emails = emails
            })
    },
    // email.desc.toLowerCase().includes(filterBy.byTxt.toLowerCase()
    computed: {
        emailsToShow() {
            const filterBy = this.filterBy;
            if (!filterBy) return this.emails
            var filteredEmails = this.emails.filter((email) => {
                const isRead = email.isRead
                if (isRead) return email

            })
            console.log(filteredEmails);

            return filteredEmails
        },
        emailId() {
            return this.$route.params.emailId
        },
    },
    components: {
        emailsList,
        emailDetails,
        emailStatus,
        emailFilter,
        addEmail
    }

}