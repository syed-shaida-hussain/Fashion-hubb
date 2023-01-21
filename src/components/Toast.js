import { useToast } from "../contexts/toast-context/toast-context"

const Toast = () => {
    const {toastState : {toast} , dispatchToast} = useToast()
    return  <div className="snackbar">
    <div className="snackbar-text">
      {toast}
    </div>
    <div className="snackbar-cross-icon" onClick={() => dispatchToast({type : "HIDE_TOAST" , payload : ""})}>
      ✖
    </div>
</div>
}

export {Toast}