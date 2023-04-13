const Truck = ({ item }) => {
    return (
        <>
            <div>{item.hersteller}</div>
            <div className="w-full h-[3px]" style={{ backgroundColor: item.color }}></div>
        </>
    )
}

export default Truck