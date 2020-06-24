import { emailsService } from '../services/email-service.js';


export default {
    template: `
    <div>
    <h2> email-app</h2>
    <p>working</p>
     </div>`,
    created() {
        if (!localStorage.emails || !localStorage.emails.length)
            emailsService.getEmails()
    }

}