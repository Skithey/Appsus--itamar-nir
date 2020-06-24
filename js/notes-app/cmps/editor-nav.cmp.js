export default {
    template: `
    <section>
    <input type="color">
    <button @click="addImg">Img</button>
    <button @click="removeNote">Delete</button>

    </section>
    `,
    data() {
        return {
            url: ''
        }
    },
    methods: {
        addImg() {
            console.log('sending img');

            this.$emit('getImg')
        },
        removeNote() {
            console.log('sending note');

            this.$emit('getImg')
        }
    }



}