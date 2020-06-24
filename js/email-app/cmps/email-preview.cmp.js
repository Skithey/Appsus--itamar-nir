export default {
    props: ['email'],
    template: `
    <router-link :to='"/email/" + email.id'> 
    <li class="">
    <span class="email-subject" > {{email.subject}} </span>
    </li>    
    </router-link>
    `,
    // {{emailSubject}}
    // data() {
    //     return {
    //         isRead: false
    //     }
    // },
    computed: {
        // emailSubject() {
        //     if (this.isRead) {
        //         this.isRead = !this.isRead

        //     }
        // }
    }


}