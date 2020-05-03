import formatter from '~/helpers/formatter'

export default {
  data: () => ({
    loading: false,
    valid: true,
    labels: {},
    form: {},
    rules: {},
    errors: {}
  }),

  created() {
    for (let key in this.form) {
      if (this.form[key] !== null && typeof this.form[key] === 'object') {
        for (let i in this.form[key]) {
          let key2 = key + '.' + i
          this.errors[key2] = []
          if (!this.labels[key2]) {
            this.labels[key2] = formatter.titlecase(i)
          }
        }
      }
      else {
        this.errors[key] = []
        if (!this.labels[key]) {
          this.labels[key] = formatter.titlecase(key)
        }
      }
    }

    this.rules.required = (field) => ((v) => !!v || 'The ' + (this.labels && this.labels[field] && this.labels[field].toLowerCase() + ' ') + 'field is required')
    //this.rules.email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || 'Invalid e-mail.';
  },

  methods: {
    showErrors(errors) {
      if (errors instanceof Object) {
        Object.keys(errors).forEach((key) => {
          if (Array.isArray(errors[key]) && errors[key].length > 0) {
            this.errors[key] = errors[key].join(" ");
          }
          this.errors[key] = errors[key]
        });
      }
    },

    handleErrors(errors) {
      if (errors) {
        this.setErrors(errors)
      }
      else {
        this.clearErrors()
      }
    },

    setErrors(errors) {
      for (let key in this.errors) {
        this.errors[key] = errors[key] || []
      }
    },

    clearErrors(key = false) {
      if (key) {
        if (this.errors[key].length) {
          this.errors[key] = []
        }
      }
      else {
        for (let key in this.errors) {
          this.errors[key] = []
        }
      }
    }
  }
}
