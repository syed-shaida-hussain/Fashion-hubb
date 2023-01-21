import { createContext, useContext, useReducer } from "react";

const ToastContext = createContext();

const toastReducer = (state , action) => {
    switch(action.type) {
        case "SHOW_TOAST" :
            return {...state , toast : action.payload , isToastActive : true }
        case "HIDE_TOAST" :
            return {...state , toast : action.payload , isToastActive : false}
    }
}

const ToastProvider = ({children}) => {
    const [toastState , dispatchToast] = useReducer(toastReducer , {toast : "Item added to cart successfully" , isToastActive : false})
    return <ToastContext.Provider value = {{toastState , dispatchToast}}>
        {children}
    </ToastContext.Provider>
}

const useToast = () => useContext(ToastContext)

export {ToastProvider , useToast}