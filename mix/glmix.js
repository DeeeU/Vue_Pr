Vue.mixin({
  data: function () {
    return {
      loggedInUser: null
    }
  },
  created: function () {
    var auth = this.$options.auth
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
    if (auth && !this.loggedInUser) {
      window.alert('This page requires login')
    }
  }
})

var LoginRequiredPage = {
  auth: true,
  template: `
    <div>
      <p v-if="!loggedInUser">
      This page requires login
      </p>
      <p v-else>
        {{ loggedInUser.name }} is logged in
      </p>
    </div>
  `
}

new Vue({
  el: '#app',
  components: {
    LoginRequiredPage
  }
})
