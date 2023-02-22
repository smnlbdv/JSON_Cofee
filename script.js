

const blockInfo = document.querySelector('.block_info')
const getBlock = document.querySelector('.block_get')

function getUsers() {
    
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(i => {
            let newBlockInfo = blockInfo.cloneNode(true)
            getBlock.append(newBlockInfo)

            let titles = newBlockInfo.querySelector('.title')
            titles.innerText = i.title

            let description = newBlockInfo.querySelector('.description')
            description.innerText = i.description

            let imgBlock = document.createElement("img");
            let imgMain = newBlockInfo.querySelector('.block_get__img')
            imgMain.append(imgBlock)
            imgBlock.setAttribute('src', i.image)

            let ingredients_block = newBlockInfo.querySelector('.ingredients_block')
            console.log(ingredients_block)

            i.ingredients.forEach(item => {
                let li = document.createElement("li");
                li.innerText = item
                ingredients_block.append(li)
            });
        });
    })
    
}
  
getUsers();

