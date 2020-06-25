import editorNav from './editor-nav.cmp.js'



export default {

    template: `
    
    <div class="note-img" v-bind:style="note.style">
    <h2 v-if="info.title"> 
    {{info.title}}
    </h2>
    <img v-bind:src="info.url" >
    <editor-nav @getColor="changeBgcColor" :note="note"></editor-nav>
    </div>`,
    props: ['info', 'note'],
    data() {
        return {
            bgc: ''
        }
    },
    components: {
        editorNav
    },
    methods: {

        changeBgcColor(newColor) {
            this.note.style.backgroundColor = newColor
            this.$emit('newColor', newColor, this.note.id)
                // console.log(this.note.style.backgroundColor);

        }
    }


}