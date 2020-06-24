import emailPreview from './email-preview.cmp.js';


export default {
    props: ['emails'],
    template: `
    <ul  class="emails-list">
    <email-preview  v-for="email in emails" :email="email"  :key="email.id"></email-preview>
    </ul>`,
    // @click.native="selectBook(book)"
    // :currencyCode="book.listPrice.currencyCode"
    // methods: {
    //     selectBook(book) {
    //         this.$emit('emailSelected', email);
    //     }
    // },
    components: {
        emailPreview
    }
}