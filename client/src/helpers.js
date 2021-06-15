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

export function generateUniqueID () {
    return `v1-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
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

