import React, {useEffect , useState} from "react";
import { api } from "../Data/Api"; 
function Loader(){
    const [load,setload] = useState([])
    useEffect(() => {
        setTimeout(() => {
            console.log(api)
            setload(api)
        }, 2000);
    }, [])
    
    return(
    <>
        <div className={load.length===0?"main-loader" : "un main-loader"}>
            <div>
                <img src="./asstes/loader.png"></img>
            </div>
        </div>
    </>
    )
}

export default Loader