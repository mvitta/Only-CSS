const myForm = document.getElementById('myForm')
myForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const password = document.getElementById('password')
  const new_password = document.getElementById('new_password')
  const input_numbers = document.getElementById('numbers')
  console.log(password.value, new_password.value, input_numbers.value)
})
