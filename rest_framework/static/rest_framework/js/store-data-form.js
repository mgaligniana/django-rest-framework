/**
 * Preserve form input data after took an action
 * @param {String} formContainer Form container CSS selector
 * @param {String} targetField Input CSS selector to store its data
 * @param {String} sessionKey The session key name to be stored
 */
function storeDataForm(formContainer, targetField, sessionKey) {
  var $targetField = $(`${formContainer} ${targetField}`);

  $(`${formContainer} form`).submit(function (event) {
    sessionStorage.setItem(sessionKey, $targetField.val())
  });

  if (sessionStorage.getItem(sessionKey)) {
    $targetField.val(sessionStorage.getItem(sessionKey))
  };
}