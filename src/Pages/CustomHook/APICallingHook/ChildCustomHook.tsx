import useApiHook from "./useApiHook";
interface ItemList {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}
const ChildCustomHook = () => { 
    const url = `https://reqres.in/api/users`;
    const {data} = useApiHook(url);
    console.log("Hook res",data);
    return (
        <>
            <h2>ChildCustomHook</h2>
            <p>this hook used to call API from Component. and show data in component.</p>
            {data?.data &&
                data?.data.map((item:ItemList) => {
                    return (
                        <div key={item?.id}>
                            <h2>Customer Name - {item?.first_name} {item?.last_name} and email is - {item?.email}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ChildCustomHook