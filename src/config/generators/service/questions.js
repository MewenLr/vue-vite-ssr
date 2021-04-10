module.exports = [
  {
    type: 'input',
    name: 'model',
    message: 'What is the model name',
    validate: (value) => {
      if (value) return true
      return 'Please enter a model name'
    },
  },
]
