<template>
    <div>
        <input v-model="id"><button @click="getList">getList</button>
        <ul>
            <li v-for="(user, index) in data" v-bind:key="index">{{user}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: 0,
            data: []
        }
    },
    methods: {
        getList() {
            const id = this.id
            this.$http.get(`/api/${id}`).then((response) => {
                this.data = response.data
            })
        }
    }
}
</script>

