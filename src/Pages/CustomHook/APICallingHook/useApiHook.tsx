import { useEffect, useState } from "react";

const useApiHook = (url: string) => {
    const [data, setData] = useState({
        data: [],
    });
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log("data: " + data);
                setData(data);
            }
            catch (err: any) {
                console.log("error fetching data: " + err.message);
            }
        }
        fetchData();
    }, []);
    
    return {
        data,

    }

}

export default useApiHook;