import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function DataDisplay() {
    const data = useSelector((state)=>state.data);
    const loading = useSelector((state)=>state.loading)
    const error = useSelector((state)=>state.error)

    const dispatch = useDispatch();

    const fetchData = () =>{
        dispatch({type : 'FETCH_DATA_REQUEST'});
    }

  return (
    <div>
        <button onClick={fetchData} disabled={loading}>Fetch Data</button>
        {
            loading && <p>Loading...</p>
        }
        {error && <p>Error : {error.message}</p>}
        {data && data.map((datas)=>(
          <p key={datas.id}>{datas.title}</p>
        ))}
    </div>
  )
}

export default DataDisplay