var Shareable = {
  data: function () {
    return {
      _isProcessing: false
    }
  },
  methods: {
    share: function () {
      if (this._isProcessing) {
        return
      }
      if (!window.confirm('Do you want to share?')) {
        return
      }
      this._isProcessing = true
      setTimeout(() => {
        window.alert('compleate shared !!')
        this._isProcessing = false
      }, 300)
    }
  }
}

var IconShareButton = {
  mixins: [Shareable],
  template: `
  <button @click="share"><i class="fas fa-share-square"></i></button>
  `
}

var TextShareButton = {
  mixins: [Shareable],
  template: `
    <button @click="share">share</button>
  `,
  methods: {
    share() {
      window.alert('Shared from component')
    }
  }
}

new Vue({
  el: '#app',
  components: {
    IconShareButton,
    TextShareButton
  }
})
