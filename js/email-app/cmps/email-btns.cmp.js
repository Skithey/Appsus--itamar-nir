import { emailsService } from '../services/email-service.js'
// import deleteEmail from '../cmps/delete-email.cmp.js'

export default {
    // props: ['email'],
    template: `
    <section class="email-btns flex space-between">
    <button  @click="onRead"  class="email-btn btn">
    read
    </button>
    <button  @click="deleteEmail" class="delete-btn email-btn btn">
    X
    </button>
    </section>
    `,
    methods: {
        deleteEmail() {
            this.$emit('deleteEmail')
        },
        onRead() {
            this.$emit('isReadEmail')
        }
    },



}