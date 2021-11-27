import { useEffect, useState } from "react";

const useFakeDb = () => {
    
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        
        fetch("/doctors.JSON")
            .then(res => res.json())
          .then(data=>setDoctors(data.doctors))

    },[])

    return [doctors];
}
export default useFakeDb;