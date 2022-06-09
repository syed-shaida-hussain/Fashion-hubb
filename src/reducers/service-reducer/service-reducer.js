const serviceReducer = (state , action) => {
    switch(action.type) {
        case "SET_PRODUCTS" :
            return {...state , products : (state.products , action.payload) }
        case "ADD_TO_CART" :
            return {...state , cartItems : [...state.cartItems , action.payload] , totalPrice : state.totalPrice + Number(action.payload.discountedPrice)}
        case "INCREMENT_CART" :
            return {...state, cartItems: state.cartItems.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity + 1 } : product) , totalPrice : state.totalPrice + Number(action.payload.discountedPrice)}
        case "DECREMENT_CART" :
            return {...state, cartItems: state.cartItems.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity - 1 } : product) , totalPrice : state.totalPrice - Number(action.payload.discountedPrice)}
        case "DELETE_FROM_CART":
            return {...state , cartItems : state.cartItems.filter(product => product._id !== action.payload._id) , totalPrice : state.totalPrice - Number(action.payload.discountedPrice)}
        case "ADD_TO_WISHLIST" :
            return {...state , wishItems : [...state.wishItems , action.payload]}
        case "DELETE_FROM_WISHLIST":
            return {...state , wishItems : state.wishItems.filter(product => product._id !== action.payload._id)}
        default :
            return {...state}
    }
}

export {serviceReducer}