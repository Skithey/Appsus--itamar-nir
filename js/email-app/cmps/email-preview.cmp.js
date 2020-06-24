export default {
    props: ['email'],
    template: ` 
    <li class="">
    <span class="email-subject" @click="isRead = !isRead" v-bind:class="{read:isRead}">   {{email.subject}} </span>
    </li>    
    `,
    // {{emailSubject}}
    data() {
        return {
            isRead: false
        }
    },
    computed: {
        // emailSubject() {
        //     if (this.isRead) {
        //         this.isRead = !this.isRead

        //     }
        // }
    }


}