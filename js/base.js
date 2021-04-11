let users = window.localStorage.getItem('data')
if (!users) users = [{ id: 1, userName: 'Abduvohid', userNumber: '998331251800' }]
else users = JSON.parse(users)

let orders = window.localStorage.getItem('date')
if (!orders) orders = [{ id: 1, owner: 'Abduvohid', count: '2', foodName: "Lavash", orderImg: "https://s3-eu-west-1.amazonaws.com/straus/media/products2/ab8fd2cf49c64cd9ba293b49323f5523.jpg" }]
else orders = JSON.parse(orders)

let foods = [
    { id: 1, food_name: 'Lavash', food_img: "https://s3-eu-west-1.amazonaws.com/straus/media/products2/ab8fd2cf49c64cd9ba293b49323f5523.jpg" },
    { id: 2, food_name: 'Burger', food_img: "https://img.freepik.com/free-photo/delicious-grilled-burgers_62847-16.jpg?size=626&ext=jpg&ga=GA1.2.1416119577.1612310400" },
    { id: 3, food_name: 'Hot-dog', food_img: "https://thumbs.dreamstime.com/b/hot-dog-wooden-background-34182794.jpg" },
    { id: 4, food_name: 'Sandwich', food_img: "https://static.toiimg.com/thumb/60057435.cms?width=1200&height=900" },
    { id: 5, food_name: 'Coka-Cola', food_img: "https://uzreport.news/fotobank/image/992c2359e80d211b39201dff125c5308.jpeg" },
    { id: 6, food_name: 'Pepsi', food_img: "https://zira.uz/wp-content/uploads/2018/11/pepsi-1-1024x683.jpg" },
    { id: 7, food_name: 'Fanta', food_img: "https://berezka-market.ru/wa-data/public/shop/products/41/08/841/images/811/811.970.jpeg" },
]