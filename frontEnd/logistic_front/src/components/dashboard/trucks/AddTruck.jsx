import { useRef } from "react"

const AddTruck = (props) => {
    const herstellerRef = useRef()
    const modelRef = useRef()
    const colorRef = useRef()
    const kilometerRef = useRef()

    const save = async () => {
        const res = await fetch(import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION + '/trucks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ hersteller: herstellerRef.current.value, model: modelRef.current.value, color: colorRef.current.value, kilometer: kilometerRef.current.value, user: localStorage.getItem('client') })
        })

        props.refresh(prev => !prev)
    }
    return (
        <div className="w-1/2 p-5">
            <div className="w-1/2 flex flex-col">
                <p>Hesteller</p>
                <input ref={herstellerRef} type="text" />
                <p>Model</p>
                <input ref={modelRef} type="text" />
                <p>Farbe</p>
                <input ref={colorRef} type="color" name="" id="" />
                <p>Kilometer</p>
                <input ref={kilometerRef} type="text" />
                <button className="rounded bg-purple-400 text-white hover:bg-purple-700" onClick={save}>save</button>
            </div>

        </div>
    )
}

export default AddTruck