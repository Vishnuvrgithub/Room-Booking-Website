const apiCall = async(url,method,data)=>{

    const response=await fetch(`http://localhost:5200${url}`,{
        method,
        headers:{
            "content-type":"application/json"
        },
        body:data?JSON.stringify(data):undefined


    })
  return response.json ();
}

export default apiCall;