const box = document.querySelector('.box')


function showLoading() {
    const loading = document.createElement('div');
    loading.classList.add('loading');
    loading.innerText = 'Загрузка...';
    box.appendChild(loading);
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

function showError(message) {
    const error = document.createElement('div');
    error.classList.add('error');
    error.innerText = message;
    box.appendChild(error);
}







async function getUsers() {
    showLoading();

    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()

        box.innerHTML = '';

        data.forEach(info => {
            console.log(info);
            const card = document.createElement('div')
            card.classList.add('card')
            let img = document.createElement('img')
            let price = document.createElement('p')
            price.classList.add('price')
            let h2 = document.createElement('h2')
            let p = document.createElement('p')
            p.classList.add('category')


            img.src = info.image
            price.innerHTML = `price: ${info.price}`
            h2.innerHTML = `title: ${info.title}`
            p.innerHTML = `category: ${info.category}`

            card.appendChild(img)
            card.appendChild(price)
            card.appendChild(h2)
            card.appendChild(p)
            box.appendChild(card)

        });

    } catch (error) {
        console.error('Ошибка:', error);
        showError('Произошла ошибка при загрузке данных');
    } finally {
        hideLoading();
    }
}
getUsers() 