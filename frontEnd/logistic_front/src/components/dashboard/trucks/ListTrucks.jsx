import Truck from "./Truck"


const ListTrucks = ({ trucks }) => {


    return (
        <div>
            {trucks.map((item, key) => <Truck key={key} truck={item} />)}
        </div>
    )
}

export default ListTrucks