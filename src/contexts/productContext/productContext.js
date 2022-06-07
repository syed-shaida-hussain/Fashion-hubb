import { createContext , useContext , useReducer } from "react"
import { serviceReducer } from "../../reducers/service-reducer/service-reducer"

const ServiceContext = createContext()



const ServiceProvider = ({children}) => {

    const [serviceState  , dispatchService] = useReducer(serviceReducer ,  { products : [] , cartItems : [] , wishItems : [] , totalPrice : 0 })

    return <ServiceContext.Provider value = {{ serviceState , dispatchService }}>
        {children}
    </ServiceContext.Provider>
}

const useServices = () => useContext(ServiceContext)

export { useServices , ServiceProvider }