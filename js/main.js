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

const form = document.getElementById("input-form");
form.addEventListener('submit', handleFormSubmit);