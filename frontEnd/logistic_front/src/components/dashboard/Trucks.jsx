import List from "../utils/List"
import AddTruck from "./trucks/AddTruck"
import ListTrucks from "./trucks/ListTrucks"
import { useEffect, useState } from "react"
import Truck from "./trucks/Truck"

const Trucks = (props) => {
    const [trucks, setTrucks] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION + '/trucks', {
                headers: {
                    'authorization': localStorage.getItem('client')
                }
            })
            console.log(res);
            const data = await res.json()
            console.log('fff', data);
            setTrucks(data)
        }
        getData()
    }, [refresh])
    return (
        <div className="flex flex-row">
            <AddTruck refresh={setRefresh} />
            {/* <ListTrucks trucks={trucks} /> */}
            <List array={trucks} Element={Truck} />
        </div>
    )
}

export default Trucks