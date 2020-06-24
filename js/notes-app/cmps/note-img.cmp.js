export default {

    template: `
    
    <div class="note-img">
    <h2 v-if="info.title"> 
    {{info.title}}
    </h2>
    <img v-bind:src="info.url" >
    
    </div>`,
    props: ['info'],
    data() {
        return {
            bgc: ''
        }
    },



}