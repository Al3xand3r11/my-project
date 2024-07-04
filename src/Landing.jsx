import { Link } from 'react-router-dom'

function Landing () {
    return (
        <div className='font-Modak bg-black bg-cover bg-center h-screen w-full'>
            <div className='text-center'>
            <Link to="/Overall">
                <h1 className='text-pink pt-96 text-3xl'>Start</h1>
            </Link>
            </div>
        </div>
        
    )
}

export default Landing;