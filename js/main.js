let xmlobj = new OlXml();

const form = document.getElementById("input-form");
form.addEventListener('submit', xmlobj.handleFormSubmit);