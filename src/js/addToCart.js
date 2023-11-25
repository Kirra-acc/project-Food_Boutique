// import {arrProducts} from "./homePage.js"
import { getProducttById } from "./api.js";
import iconsPath from "../images/icons.svg"
import {arrProducts} from './homePage.js';

// export function firstLoad(key) {
//     try {
//         const serializedState = localStorage.getItem(key);
//         if (serializedState) {
//             arrProducts = JSON.parse(serializedState);
//           }
//           return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//         console.error("Get state error: ", error.message);
//     }
// };

export async function saveToLocalStorage(event) {
   const id = event.currentTarget.getAttribute('data-id');
   const passSvg = event.currentTarget.querySelector('use');
   passSvg.setAttribute('href', `${iconsPath}#icon-checkmark`)
   const productData = {};

   try {
    const product = await getProducttById(id);
   console.log(product);
    const { category,  size, _id, name, price, img  } = product;
    productData.category = category;
    productData.size = size;
    productData._id = _id;
    productData.name = name;
    productData.price = price;
    productData.img = img;
   } catch (error) {
    console.log(error);
   }
    const localStorage = window.localStorage;

    arrProducts.push(productData);
   

    localStorage.setItem("product", JSON.stringify(arrProducts));
  }

 