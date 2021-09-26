
import { toast } from 'react-toastify';

const successId = "success-id";
const errorId = "error-id";

const NetStatusNotification = (isOnline, message ) => {
    if(isOnline){
        toast.dismiss(errorId);
        toast.success(message, {
            position: "bottom-right", autoClose: 4000, hideProgressBar: false, toastId: successId,
            closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined
        });
    }
    else{
        toast.dismiss(successId);
        toast.error(message, {
            position: "bottom-right", autoClose: 4000, hideProgressBar: false, toastId: errorId,
            closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined
        });
    }
}


const NetworkStatus = () => {
    window.addEventListener("load", () => {
      // 1st, we set the correct status when the page loads
      navigator.onLine
        ? NetStatusNotification(true, "You are online")
        : NetStatusNotification(false, "You are offline");
  
      // now we listen for network status changes
      window.addEventListener("online", () => {
        NetStatusNotification(true, "You are  back online !!");
      });
  
      window.addEventListener("offline", () => {
        NetStatusNotification(false, "Lost Network Connection !!");
      });
    });
  
    return <div></div>;
  };

  export default NetworkStatus;