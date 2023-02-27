const blockInfo = document.querySelector('.block_info')
const getBlock = document.querySelector('.block_get')
const blockContent = document.querySelector('.block-get__content');

function getUsers() {
    
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        data.forEach(item => {
            blockContent.innerHTML += (`
                <div class="block_info" id="${item.id}">
                <div class="block_get__title">
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description}</p>
                <div class="ingridients">
                    <p></p>
                    <ul class="ingredients_block">

                    </ul>
                </div>
            </div>
            <div class="block_get__img">
                <img src="${item.image}">
            </div>
        </div>
            `)
            if (typeof item.ingredients !== 'undefined') {
                let list = document.querySelector(`.block_info[id="${item.id}"]`).querySelector('.ingredients_block');
                item.ingredients.forEach(itemList => list.innerHTML +=(`<li>${itemList}</li>`));
            }
        });
    })
    
}
  
getUsers();

