import {useEffect, useState} from "react";

const baseUrl = process.env["REACT_APP_URL_API_DEVELOPMENT"];

function useFetch(path){
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function initialize(){
            try{
                const response = await fetch(baseUrl + path);
                if(response.ok){
                    const jsonData = await response.json();
                    setData(jsonData);
                }
            }
            catch (e){
                setError(e);
            }
            finally {
                setLoading(false);
            }
        }

        initialize();
    },[path])


    return {data, error, loading};
}


export default useFetch;
