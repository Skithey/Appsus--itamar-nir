export default {

    template: `
    
    <div class="note-img">
    <img v-bind:src="info.url" >
    </div>`,
    props: ['info'],

}