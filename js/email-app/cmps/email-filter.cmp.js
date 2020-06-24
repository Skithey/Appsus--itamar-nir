import { emailsService } from '../services/email-service.js'

export default {
    template: `
    <section class="email-filter" >
    <input type="text" placeholder="Filter by text" v-model="filterBy.byTxt" @input="filter"/>
    <input type="checkbox"  v-model="filterBy.byIsRead" @input="filter"/>
    <button @click="clearFilters"> Clear </button>
    </section>
    `,
    data() {
        return {
            filterBy: {
                byTxt: '',
                byIsRead: ''
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy);
        },
        clearFilters() {
            this.filterBy = {
                byTxt: '',
                byIsRead: ''
            };
            this.$emit('filter', this.filterBy);
        }

    },
}
// <div>Inbox</div>
// <div>Starred</div>
// <div>Sent Mail</div>
// <div>Drafts</div>