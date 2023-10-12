function saveAPIKey() {
  console.log('options-->1',)
  var apiKey = document.getElementById('api-key').value
  if (!apiKey) {
    alert(
      'No api-key specified, please create an API key at https://omnivore.app/settings/api'
    )
    return
  }

  setStorage({
    apiKey: apiKey,
  }).then(() => {
    alert('API key saved!')
  })
}

function loadAPIKey() {
  console.log('options-->2',)
  getStorageItem('apiKey').then((apiKey) => {
    if (apiKey) {
      document.getElementById('api-key').value = apiKey
    } else {
      alert('No API key found in storage.')
    }
  })
}

function clearAPIKey() {
  console.log('options-->3',)
  document.getElementById('api-key').value = ''

  setStorage({
    apiKey: undefined,
  }).then(() => {
    alert('API key cleared!')
  })
}

function autoDismissChanged(event) {
  console.log('options-->4',)
  const value = document.getElementById('disable-auto-dismiss').checked
  console.log(
    ' value: ',
    value,
    document.getElementById('disable-auto-dismiss')
  )

  setStorage({
    disableAutoDismiss: value ? 'true' : null,
  }).then(() => {
    console.log('disableAutoDismiss updated', value)
  })
}

;(() => {
  document
    .getElementById('save-api-key-btn')
    .addEventListener('click', saveAPIKey)
  document
    .getElementById('load-api-key-btn')
    .addEventListener('click', loadAPIKey)
  document
    .getElementById('clear-api-key-btn')
    .addEventListener('click', clearAPIKey)

  getStorageItem('disableAutoDismiss').then((value) => {
    console.log('disableAutoDismiss updated', value)
    document.getElementById('disable-auto-dismiss').checked = value
      ? true
      : false
  })

  document
    .getElementById('disable-auto-dismiss')
    .addEventListener('change', autoDismissChanged)
})()
