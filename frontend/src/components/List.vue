<template>
    <div>
        <button @click="getList">getList</button>
        <ul>
            <li v-for="(user, index) in data" v-bind:key="index">{{user}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: []
        }
    },
    methods: {
        getList() {
            this.$http.get('/api').then((response) => {
                this.data = response.data
            })
        }
    }
}
</script>

