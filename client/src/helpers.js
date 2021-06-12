import { toast } from "react-toastify";

const customId = "IdForNotification";

export const sexos = [
    {id:1,label:"Femenino", value:"F"},
    {id:2,label:"Masculino", value:"M"}
]

export function handleChangeInput(e, name, state, setState) {
    const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({ ...state, [name]: value });
}

function generate_UUID(){
    let dt = new Date().getTime();
    let uuid = 'xxx-4xx-yxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c==='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

export function notificationError(datos, close) {
    toast.error(datos.message, {
        toastId: customId,
        autoClose: close,
    });
}

export function notificationSuccess(datos, close) {
    toast.success(datos.message, {
        toastId: customId,
        autoClose: close,
        onClose: () => window.location.reload(),
    });
}

export function notificationSuccessRedirect(datos, close, url) {
    toast.success(datos.message, {
        toastId: customId,
        autoClose: close,
        onClose: () => (window.location.href = url),
    });
}

