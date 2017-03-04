<template>
    <div>
        <textarea v-model="message" rows="10" placeholder="Type your message"></textarea>
        <button type="button" v-on:click="sendMessage">Send message</button>
    </div>
</template>
<script type="text/babel">
    export default{
        data(){
            return {
                message: 'hello vue'
            }
        },
        methods: {
            sendMessage: function () {
                if (this.message) {
                    this.$http.post('/message', {"content": this.message}).then(() => {
                        this.message = "";
                    });
                }
            }
        }
    }
</script>