import { useState } from "react";

export default function Movie() {
    const [movie,  setMovie] = useState([]);


    fetch('https://reqbin.com/echo/get/json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))

return <div className="Movie">Movie</div>



}   