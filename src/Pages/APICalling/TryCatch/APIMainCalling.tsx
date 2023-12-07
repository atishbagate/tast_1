import React,{useState,useEffect} from "react"

const APIMainCalling = () => {
const [data, setData] = useState();
    async function fetchData(){
      try {
        const res = await fetch("http://localhost:3000/posts")
        const data = await res.json();
        console.log("data",data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
    fetchData();
      return () => {
        setData({});
      }
    }, [])
    return (
        <>
        <h2>API Calling Inside The Component Using Try Catch Block.</h2>
        {Array.isArray(data) ? 
        data.map((item)=> 
        (
            <div key={item.id}>
                <h5>{item.title} - {item.author}</h5>
            </div>
        ))
         : <h5>No Data</h5> }
        </>
    )
}

export default APIMainCalling