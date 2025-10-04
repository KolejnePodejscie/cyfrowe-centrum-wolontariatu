import {Configuration,DefaultApi} from '../../generated'

const config = new Configuration();
const api = new DefaultApi(config);

const apiCalls = async ()=>{
    console.log(await api.getUserUserid({userid: "0"}));
}

 
function dashboard() {
    apiCalls()
  return (
    <>
        <p>DASHBOARD</p>
    
    </>
  )
}

export default dashboard