import Timeline from "./Timeline"

const Results = () => {
    return (
        <div
        className='w-screen h-screen flex flex-col justify-center items-center text-white'
        >
            <h2
            className="text-4xl"
            >Union Free Interval</h2>

            <p
            className="text-2xl"
            >14:00 - 15:00 <br /> 18:00 - 23:00</p>
            
            <Timeline />
        </div>
    )
}

export default Results