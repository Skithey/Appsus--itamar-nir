import { emailsService } from '../services/email-service.js';
import emailsList from '../cmps/emails-list.cmp.js';
import emailDetails from '../Pages/email.details.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import addEmail from '../cmps/email-addEmail.cmp.js';
// import { utilsService } from '../../utils/utils-service.js';

export default {
    template: `
    <div class="email-container ">

        <h2 class="email-main-header"> email-app</h2>

        <div class="flex container">

            <section class="filter-container flex column">
                <button class="compose-btn" @click="isVisible = !isVisible">+ Compose</button>
                <button @click="AllEmails" class="inbox-btn flex space-between btn">
                <span>Inbox</span> 
                <span>{{emailsToRead}}</span> 
                </button>
                <div  class="new-mail fixed" :class="{visible:isVisible}">
                    <add-email  @sendEmail="addEmail"></add-email>
                </div>
                <email-filter @filter="setFilter"></email-filter>
            </section>

            <section class="emails-container "> 
                <email-details @sendReadType="changeIsReadType"  @close="setCurrEmail" v-if="currEmail" :email="currEmail" ></email-details>
                <emails-list @emailToRead="emailIsRead" @emailToRemove="removeEmail" @emailSelected="setCurrEmail"  v-bind:emails="emailsToShow" ></emails-list>

            </section>
        </div>
    </div>`,
    // <email-status></email-status>
    data() {
        return {
            emails: [],
            currEmail: null,
            filterBy: '',
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
        addEmail(to, subject, desc, from) {
            this.isVisible = !this.isVisible
            emailsService.addEmail(to, subject, desc, from)
                .then(email => {
                    this.emails.push(email)
                })
        },
        AllEmails() {
            this.filterBy = {
                byTxt: null,
                byIsRead: 'all'
            }
            let selectVal = document.querySelector('.select-filter').value
            selectVal = this.filterBy.byIsRead
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
            if (!this.filterBy) return this.emails
            if (this.filterBy.byTxt) {

                let filteredEmails = this.emails.filter(email => {
                    return email.desc.toLowerCase().includes(this.filterBy.byTxt.toLowerCase())
                })
                return filteredEmails
            }
            if (this.filterBy.byIsRead === 'all') return this.emails
            if (this.filterBy.byIsRead === 'read') return this.emails.filter(email => {
                if (email.isRead) return email
            })
            if (this.filterBy.byIsRead === 'unread') return this.emails.filter(email => {
                if (!email.isRead) return email
            })
        },
        emailId() {
            return this.$route.params.emailId
        }
    },
    components: {
        emailsList,
        emailDetails,
        emailFilter,
        addEmail
    }
}