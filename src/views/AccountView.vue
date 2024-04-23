<template>
  <div class="">
    <h1>account page!</h1>
    <button v-on:click="this.$store.commit('user/setUsername', 'woop!')">click me</button>
    username is: {{ username }}
  </div>
</template>

<script>
    import { mapGetters, mapState, mapMutations } from 'vuex'

    export default {
        computed: {
            ...mapGetters('user', {
                username: 'username',
                token: 'token'
            }),
            ...mapState({
                user: state => state.user
            }),
        },
        methods: {
            ...mapMutations([
                'setUsername'
            ])
        }
    }
</script>

