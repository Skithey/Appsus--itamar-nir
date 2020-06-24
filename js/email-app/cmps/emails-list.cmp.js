import emailPreview from './email-preview.cmp.js';


export default {
    props: ['emails'],
    template: `
    <ul  class="emails-list">
    <email-preview  @click.native="selectEmail(email)"  v-for="email in emails" :email="email"  :key="email.id"></email-preview>
    </ul>`,

    // :currencyCode="book.listPrice.currencyCode"
    // methods: {
    //     selectBook(book) {
    //         this.$emit('emailSelected', email);
    //     }
    // },
    components: {
        emailPreview
    },
    methods: {
        selectEmail(email) {
            this.$emit('emailSelected', email)
        }
    }
}