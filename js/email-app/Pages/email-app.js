import { emailsService } from '../services/email-service.js';
// import { utilsService } from '../../utils/utils-service.js';
import emailsList from '../cmps/emails-list.cmp.js';
import emailDetails from '../Pages/email.details.cmp.js';
import emailStatus from '../cmps/email-status.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';

export default {
    template: `
    <div class="email-container">
    <h2> email-app</h2>
    <email-filter @filter="setFilter"></email-filter>
    <email-details @close="setCurrEmail" v-if="currEmail" :email="currEmail" ></email-details>
    <emails-list  @emailSelected="setCurrEmail" v-else v-bind:emails="emailsToShow" ></emails-list>
    <email-status></email-status>
    </div>`,
    data() {
        return {
            emails: [],
            currEmail: null,
            filterBy: null
        }
    },
    methods: {
        setCurrEmail(email) {
            this.currEmail = email
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
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
            const filterBy = this.filterBy;
            if (!filterBy) return this.emails
            var filteredEmails = this.emails.filter((email) => {
                const isRead = email.isRead
                if (email.desc.toLowerCase().includes(filterBy.byTxt.toLowerCase()) &&
                    isRead)
                    return email

            })
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
        emailFilter
    }

}