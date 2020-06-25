import { emailsService } from '../services/email-service.js'
import emailBtns from './email-btns.cmp.js'

export default {
    props: ['email'],
    template: `
    
    <div class="flex space-around">
    <router-link :to='"/email/" + email.id'> 
    <li v-bind:class="{ read: email.isRead }">
    <span class="email-subject" > 
    {{email.subject}} 
    {{email.body}} 
    {{email.desc}} 
    {{email.sentAt}} 
    </span>
    </li>    
    </router-link>
    <email-btns @isReadEmail="isEmailRead" @deleteEmail="removeEmail(email.id)"class="btn">X</email-btns>
    </div>
    `,
    // data() {
    //     return {
    //         isRead: false
    //     }
    // },


    methods: {
        removeEmail(emailId) {
            this.$emit('removeCurrEmail', emailId)
        },
        isEmailRead() {
            this.$emit('changeIsRead', this.email.id)
                // console.log(this.email.isRead);
        }
    },
    computed: {
        emailsToShow() {
            return this.emails
        }
    },
    components: {
        emailBtns
    }


}