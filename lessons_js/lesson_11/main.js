// // #HmvAfRQM
// // - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
// const cartsDiv = document.getElementById('carts')
// fetch('https://dummyjson.com/carts')
//     .then(value => value.json())
//     .then(cartsObject => {
//         const {carts} = cartsObject;
//         console.log(carts);
//
//         for (const cart of carts) {
//             const div = document.createElement('div');
//             div.classList.add('cart-container');
//             const divInfo = document.createElement('div');
//             divInfo.innerText =
//                 `
//                 "total": ${cart.total},
//                 "discountedTotal": ${cart.discountedTotal},
//                 "userID": ${cart.userID},
//                 "totalProducts" : ${cart.totalProducts}.
//                 "totalQuantity" : ${cart.totalQuantity}
//                 `
//
//             const ol = document.createElement('ol');
//             for (const product of cart.products) {
//                 const li = document.createElement('li');
//                 li.innerText = `
//                 "id" : "${product.id}",
//                 "title" : "${product.title}",
//                 "price" : "${product.price}",
//                 "quantity": ${product.quantity}.
//                 "total": ${product.total},
//                 "discountPercentage" ${product.discountPercentage},
//                 "discountedTotal" ${product.discountedTotal}
//                 `
//                 const img = document.createElement('img');
//                 img.src = product.thumbnail;
//                 li.appendChild(img);
//
//
//                 ol.appendChild(li);
//
//             }
//
//             div.append(divInfo, ol);
//             cartsDiv.appendChild(div);
//
//         }
//     })
//
//
//
//
//
//
// //     #whXxOBlYS0H
// //     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.