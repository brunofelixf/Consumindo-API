function consumirAPI(){
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
      .then(json => {
        const ul = document.getElementById('lista')

        json.map((item) => {
          const li = document.createElement('li');
          li.setAttribute('id', item.id)
          li.innerHTML = item.title
          ul.appendChild(li)
        })
      })
}