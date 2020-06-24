import { emailsService } from '../services/email-service.js'

export default {
    // props: ['email'],
    template: `
    <div >{{emailsToRead}}</div>
    `,
    data() {
        return {
            emailsToRead: 0
        }
    },
    created() {
        emailsService.getEmails()
            .then(emails => emails.map(email => {
                if (email.isRead) this.emailsToRead++
            }))
    },
}