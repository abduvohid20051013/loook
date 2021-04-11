let items = document.querySelectorAll('.userItem');
let rightPart = $('.rightPart');
let rightScreen = $('.right')
let selectFood = $('#select')
let usersList = $('.usersList')
let addUserForm = $('.formAddUser')
let addUserNameImput = $('.inputAddUserName')
let addUserNumberImput = $('.inputAddUserNumber')
let ownerSelect = $('#selectUser')

function $(el) {
    return document.querySelector(el)
}


function foodSelect(array) {
    for (let element of array) {
        let option = document.createElement('option')
        option.innerText = element.food_name
        option.value = element.id

        selectFood.appendChild(option)
    }
}

function selectOwner(array) {
    for (let element of array) {
        let options = document.createElement('option')
        options.innerText = element.userName
        options.value = element.id++

            ownerSelect.appendChild(options)
    }
}




addUserForm.onsubmit = function(event) {
    event.preventDefault()
    let obj = {
        id: +1,
        userName: addUserNameImput.value,
        userNumber: addUserNumberImput.value,
    }

    users.push(obj)
    window.localStorage.setItem('data', JSON.stringify(users))
    addUserNameImput.value = null
    addUserNumberImput.value = null
    location.reload();
}


function filmsRenderer(array) {
    usersList.innerHTML = null
    for (let element of array) {
        let user = document.createElement('li')
        let h3 = document.createElement('h3')
        let number = document.createElement('p')

        user.classList.add('userItem')
        h3.classList.add('userName')
        number.classList.add('userNumber')
        user.id = element.id + 1
        h3.textContent = element.userName
        number.textContent = "+" + element.userNumber

        user.appendChild(h3)
        user.appendChild(number)
        usersList.appendChild(user)
    }
}
filmsRenderer(users)
foodSelect(foods)
selectOwner(users)

clear.onclick = () => {
    localStorage.clear()
    location.reload();
}

let orderForm = $('.addOrderForm')
let orderInput = $('.countOrder')
let oredrList = $('.ordersList')
let btnUser = $('.addUserButton')


orderForm.onsubmit = function(event) {
    event.preventDefault()
    if (selectFood.value == 1) {
        let object = {
            id: 1,
            owner: ownerSelect.options[ownerSelect.selectedIndex].text,
            count: orderInput.value,
            foodName: "Lavash",
            orderImg: "https://s3-eu-west-1.amazonaws.com/straus/media/products2/ab8fd2cf49c64cd9ba293b49323f5523.jpg"

        }
        orders.push(object)
        window.localStorage.setItem('date', JSON.stringify(orders))
        orderInput.value = ""

    } else if (selectFood.value == 2) {
        let object = {
            id: 2,
            owner: ownerSelect.options[ownerSelect.selectedIndex].text,
            count: orderInput.value,
            foodName: "Burger",
            orderImg: "https://img.freepik.com/free-photo/delicious-grilled-burgers_62847-16.jpg?size=626&ext=jpg&ga=GA1.2.1416119577.1612310400"

        }
        orders.push(object)
        window.localStorage.setItem('date', JSON.stringify(orders))
        orderInput.value = ""

    } else if (selectFood.value == 3) {
        let object = {
            id: 3,
            owner: ownerSelect.options[ownerSelect.selectedIndex].text,
            count: orderInput.value,
            foodName: "Hot-dog",
            orderImg: "https://thumbs.dreamstime.com/b/hot-dog-wooden-background-34182794.jpg"

        }
        orders.push(object)
        window.localStorage.setItem('date', JSON.stringify(orders))
        orderInput.value = ""
    } else if (selectFood.value == 4) {
        let object = {
            id: 4,
            owner: ownerSelect.options[ownerSelect.selectedIndex].text,
            count: orderInput.value,
            foodName: "Sandwich",
            orderImg: "https://static.toiimg.com/thumb/60057435.cms?width=1200&height=900"

        }
        orders.push(object)
        window.localStorage.setItem('date', JSON.stringify(orders))
        orderInput.value = ""
    } else if (selectFood.value == 5) {
        let object = {
            id: 5,
            owner: ownerSelect.options[ownerSelect.selectedIndex].text,
            count: orderInput.value,
            foodName: "Coca Cola",
            orderImg: "https://uzreport.news/fotobank/image/992c2359e80d211b39201dff125c5308.jpeg"

        }
        orders.push(object)
        window.localStorage.setItem('date', JSON.stringify(orders))
        orderInput.value = ""
    } else if (selectFood.value == 6) {
        let object = {
            id: 6,
            owner: ownerSelect.options[ownerSelect.selectedIndex].text,
            count: orderInput.value,
            foodName: "Pepsi",
            orderImg: "https://zira.uz/wp-content/uploads/2018/11/pepsi-1-1024x683.jpg"

        }
        orders.push(object)
        window.localStorage.setItem('date', JSON.stringify(orders))
        orderInput.value = ""
    } else if (selectFood.value == 7) {
        let object = {
            id: 7,
            owner: ownerSelect.options[ownerSelect.selectedIndex].text,
            count: orderInput.value,
            foodName: "Fanta",
            orderImg: "https://berezka-market.ru/wa-data/public/shop/products/41/08/841/images/811/811.970.jpeg"

        }
        orders.push(object)
        window.localStorage.setItem('date', JSON.stringify(orders))
        orderInput.value = ""
    }

    location.reload();
}



function orderRenderer(massiv) {
    oredrList.innerHTML = null
    for (let ell of massiv) {
        let itemElement = document.createElement('li')
        let title = document.createElement('h2')
        let imgElement = document.createElement('img')
        let textElement = document.createElement('p')
        let span = document.createElement('span')
        let strong = document.createElement('strong')

        itemElement.classList.add('orderItem')
        title.classList.add('orderOwner')
        imgElement.classList.add('orderImg')
        textElement.classList.add('orderName')
        span.classList.add('orderCount')

        title.textContent = "owner of the order:"
        imgElement.src = ell.orderImg
        textElement.textContent = ell.foodName
        span.textContent = ell.count
        strong.textContent = ell.owner

        title.appendChild(strong)
        itemElement.appendChild(title)
        itemElement.appendChild(imgElement)
        itemElement.appendChild(textElement)
        itemElement.appendChild(span)

        oredrList.appendChild(itemElement)
    }

}
orderRenderer(orders)