import toast, { Toaster } from 'react-hot-toast';

// create a generic toster for the webbsite for success and failed that is would use whole app 
export const useNotification = () => {
    const success = (message: string) => toast.success(message);
    const failed = (message: string) => toast.error(message);
    return { success, failed };
}