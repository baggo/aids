function aids (s, o) {
  return s.split('').map(x=>/[\S]/.test(x)&&(o=!o)?x.toUpperCase():x.toLowerCase()).join('')
}

var output = 'Text for the modern web'
var overview = document.getElementById('overview')
overview.innerText = aids(overview.innerText)

new Vue({
  el: '#wrap',
  data: {
    output: aids(output)
  },
  methods: {
    foo: function(event) {
      this.output = aids(event.target.value || output)
    }
  }
})
