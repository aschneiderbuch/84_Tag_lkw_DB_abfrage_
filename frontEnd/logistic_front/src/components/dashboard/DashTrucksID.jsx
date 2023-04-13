


//rafc
import React, { useEffect, useState } from 'react'

export const DashTrucksID = () => {

    const [trucksIDAnzahl, setTrucksIDAnzahl] = useState(0)    // [] oder 0 oder null

    // fetch
    // hier im fetch kommt die Anzahl der TrucksID zurück als Objeckt {message: 3}
    useEffect(() => {

        const fetchTruckID = async () => {

            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND}${import.meta.env.VITE_API_VERSION}/trucksID` , {
                    headers: { 'authorization': localStorage.getItem('client')} 
                })

                const tucksIDAnzahl = await response.json()
                console.log(tucksIDAnzahl)
                console.log(tucksIDAnzahl.message)
               
                setTrucksIDAnzahl(tucksIDAnzahl.message) 

            } catch (err) {
                console.log(err)
            }
        }
        fetchTruckID()       // !!! wichtig, jetzt wird der fetch aufgerufen und ausgeführt

    }, [trucksIDAnzahl])


    return (
        <section className='dashTrucksID'>

            <h1>DashTrucksID</h1>

            <h4>{trucksIDAnzahl}</h4>

        </section>
    )
}
