import axios from "axios";
// kendi ismiyle kullanacagimiz icin default ekledik
export default class ProductService {

    getProducts() {
        return axios.get("http://localhost:8080/api/products/getall");
    }

    // getProductByNameEski(name) {
    //     return axios.get("http://localhost:8080/api/products/getByProductName?productName" + name);

    // } 
    getProductByName(name) {
        return axios.get(`http://localhost:8080/api/products/getByProductName`, { 
            params: { productName: name }
         });// soru isaretinden sonra gelenler bu sekilde parametre olarak gonderilir
    }
}