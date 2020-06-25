import { emailsService } from '../services/email-service.js'

export default {
    template: `
    <section class="email-filter" >
    <input type="text" placeholder="Filter by text" v-model="filterBy.byTxt" @input="filter"/>
    <select value="all" v-model="filterBy.byIsRead" @change="filter">
    <option value="all">All</option>
    <option value="read">Read</option>
    <option value="unread">Unread</option>
    </select>
    <button @click="clearFilters"> Clear </button>
    </section>
    `,
    // <input type="checkbox"  v-model="filterBy.byIsRead" @input="filter"/>
    data() {
        return {
            filterBy: {
                byTxt: null,
                byIsRead: 'all'
            }
        }
    },
    methods: {
        filter() {
            // console.log(this.filterBy.byTxt);
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