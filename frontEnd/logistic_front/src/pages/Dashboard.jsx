import { useState } from "react"
import Navigation from "../components/Navigation"
import Trucks from "../components/dashboard/Trucks"
import { DashTrucksID } from "../components/dashboard/DashTrucksID"

const Dashboard = (props) => {
    const [page, setPage] = useState(0)

    const content = () => {
        let element
        switch (page) {
            case 0: return <> 
            <h1>Dashboard</h1> 

            <p>hallo Trucks  da den fetch rein</p>

            <DashTrucksID></DashTrucksID>

            </> 
            
            case 1: return <Trucks />
        }
    }


    return (
        <main>
            <Navigation setPage={setPage} page={page} />
            {content()}

        </main>
    )
}
export default Dashboard