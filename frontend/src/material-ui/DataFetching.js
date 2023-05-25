import React, { useEffect, useState } from 'react';

function DataFetching() {

const [advice, setAdvice] = useState([]);

  useEffect(()=>{

    const url = "/api/stations/";

    let method = "GET";
     
    const fetchData = async (url, method) => {
        try {
            const response = await fetch(url, {
                method: method,
                mode: 'no-cors'
            })

            const json = await response.json();
            console.log(json);
            setAdvice(json);
        } catch (error) {
            console.log("error", error);
        }
    }

    fetchData(url, method);
}, []);

return (
    <div className = "App">

        [fid, id, name, adress, x, y, total1, total2]
      

    { advice.map(el => {
            let str 
                for (const key in el) {
                    str = str + key + ":" + el[key]
                }
            return str
            })}
        </div>
    );
}

export default DataFetching;
    