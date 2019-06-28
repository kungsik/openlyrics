<<<<<<< HEAD
const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  data[element.name] = element.value;
  return data;

}, {});



const handleFormSubmit = event => {
    event.preventDefault();
    const data = form.elements;
    xmlDoc = new OLXml();
    xmlDoc.xmlCreate(data);    
    // console.log(form.elements.title.value);
}
=======
let xmlobj = new OlXml();
>>>>>>> 313bca7a41d18f20b832699469a0f003e9f07070

const form = document.getElementById("input-form");
form.addEventListener('submit', xmlobj.handleFormSubmit);