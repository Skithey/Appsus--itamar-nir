// import emailPreview from './email-preview.cmp.js';
import { emailsService } from '../services/email-service.js';



export default {
    template: `
    <div class="add-email-container flex">
    <form class="flex column" @submit="saveEmail">
    <input v-model="emailToSend" type="text" placeholder="sendTo@email.com">
    <input v-model="emailSubject" type="text" placeholder="subject">
    <textarea v-model="emailDesc" ></textarea>
    <button>Send</button>
    </form>
    </div>`,
    data() {
        return {
            emailToSend: '',
            emailSubject: '',
            emailDesc: ''
        }


    },
    methods: {
        saveEmail() {
            this.$emit('sendEmail', this.emailToSend, this.emailSubject, this.emailDesc)
            emailsService.addEmail(this.emailToSend, this.emailSubject, this.emailDesc)

        }
    }
}