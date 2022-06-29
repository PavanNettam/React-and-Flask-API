import { useState } from "react";
const Home = () => {
    const [firstGet, setFirstGet] = useState(null);
    const handelClick = () =>{
        fetch('http://127.0.0.1:5000/helloworld').then(res =>{
            return res.json();
        }).then(data => {
            console.log(data);
            setFirstGet(data.info);
        });
    }
    return ( 
        <div>
            <h1>Fetching Data from Flask API</h1>
            {firstGet && <h3>Successfully fetched, {firstGet} !!!!</h3>}
            <button onClick={handelClick}>GET DATA</button>
        </div>
     );
}
 
export default Home;