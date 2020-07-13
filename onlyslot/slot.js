var MyButton = {
  template: `
    <button>
      <slot>ok</slot>
    </button>
  `
}

new Vue({
  el: '#app',
  components: {
    MyButton: MyButton
  }
})
