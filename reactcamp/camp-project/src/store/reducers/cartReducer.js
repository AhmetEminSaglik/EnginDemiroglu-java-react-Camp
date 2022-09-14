import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}
export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if (product) { //if product is exist
                product.quantity++; // frontend'de guncellemek icin referans degilstirmek/gondermek gerekiyor
                return {
                    ...state //... icindeki degerleri ayirarak yep yeni obje olusturuyor // yani array newlemek gibi 
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                    /**
                     * carItems bir array
                     * ...carItems  obje oluyor
                     * [...carItems] yeni referansli array oluyor 
                     */
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filder(c => c.product.id !== payload.id)
            }
            break;

        default:
            break;
    }

}