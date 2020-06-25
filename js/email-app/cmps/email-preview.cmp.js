import { emailsService } from '../services/email-service.js'
import emailBtns from './email-btns.cmp.js'

export default {
    props: ['email'],
    template: `
    
    <div class="email-row flex space-between align-center">
    <router-link :to='"/email/" + email.id'> 
    
    <li v-bind:class="{ read: email.isRead }">
    <section class="email-subject flex space-between" > 
   
        <span class="msg-from" style="font-size:18px"> {{email.from}}  </span>
   
        <span class="msg-info ">
        <span style="font-size:18px">  {{email.subject}} </span>-
        <span style="color:gray"> {{email.desc}}</span>
        </span>
        <span class="time-sent">{{email.sentAt}}</span> 
    
    </section>
    </li>    
    </router-link>
    <email-btns @isReadEmail="isEmailRead" @deleteEmail="removeEmail(email.id)"></email-btns>
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