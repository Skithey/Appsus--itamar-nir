import { emailsService } from '../services/email-service.js';
import emailsList from '../cmps/emails-list.cmp.js';
import emailDetails from '../Pages/email.details.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import addEmail from '../cmps/email-addEmail.cmp.js';
// import { utilsService } from '../../utils/utils-service.js';

export default {
    template: `
    <div class="email-container">
    <h2 class="email-main-header"> email-app</h2>
    <button @click="isVisible = !isVisible">+ Compose</button>
    <div  class="compose" :class="{visible:isVisible}">
    <add-email @sendEmail="addEmail"></add-email>
    </div>
    {{emailsToRead}}
    <email-filter @filter="setFilter"></email-filter>
    <email-details @sendReadType="changeIsReadType"  @close="setCurrEmail" v-if="currEmail" :email="currEmail" ></email-details>
    <emails-list @emailToRead="emailIsRead" @emailToRemove="removeEmail" @emailSelected="setCurrEmail"  v-bind:emails="emailsToShow" ></emails-list>
    </div>`,
    // <email-status></email-status>
    data() {
        return {
            emails: [],
            currEmail: null,
            filterBy: null,
            isVisible: true,
            emailsToRead: 0
        }
    },
    methods: {
        changeIsReadType(email) {
            console.log(email);
            console.log('hey');

        },
        removeEmail(emailId) {
            console.log(emailId);
            emailsService.removeEmail(emailId)
                .then(emails => {
                    console.log(this.emails);
                    this.emails = emails
                })
        },
        emailIsRead(emailId) {
            this.emailsToRead = 0
            let emailIdx = emailsService.changeIsRead(emailId)
            this.emails[emailIdx].isRead = !this.emails[emailIdx].isRead
            this.emails.map(email => {
                if (email.isRead) this.emailsToRead++
            })
        },
        setCurrEmail(email) {
            this.currEmail = email
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        addEmail(to, subject, desc) {
            emailsService.addEmail(to, subject, desc)
                .then(email => {
                    this.emails.push(email)
                })
        }
    },
    created() {
        emailsService.getEmails()
            .then(emails => {
                this.emails = emails
            })
        emailsService.getEmails()
            .then(emails => emails.map(email => {
                if (email.isRead) this.emailsToRead++
            }))
    },
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
        emailFilter,
        addEmail
    }
}