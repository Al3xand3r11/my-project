import picnic from '../public/assets/picnic.png'
import love from '../public/assets/love.png'
import laptop from '../public/assets/laptop.png'
import restaurant from '../public/assets/restaurant.png'

const Perks = () => {
    return (
        <div className='bg-black w-full h-auto bg-cover bg-center '>
        <div className='grid grid-cols-1'>
        <div className='flex flex-col text-center mx-auto max-w-screen-xl'>
            <h1 className='text-4xl place-self-center lg:text-6xl text-center pt-48 text-pink font-Modak'>
                Perks as a Girlfriend
            </h1>
            </div>
             <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-pink">Picnics and Outdoors Activities</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-pink">Someone to go on your morning walks with, new hikes and outdoor activities whenever the sun is out.</p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className='' src={picnic} alt="mockup"/>
                </div>                
            </div>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={laptop} alt="mockup"/>
                </div>
                <div className="ml-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-pink">Coding Buddy</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-pink"> Someone to help you study, get smarter and excel with.</p> 
                </div>
                                
            </div>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-pink">Fancy Dates</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-pink">Someone to try all of your tiktok recommendations with and spoil you with whatever you want</p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className='' src={restaurant} alt="mockup"/>
                </div>                
            </div>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={love} alt="mockup"/>
                </div>
                <div className="ml-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-pink">Best Friend</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-pink"> Someone to love and spend time and be yourself with at all times</p> 
                </div>
                                
            </div>
            </div>
            </div>
    )
}

export default Perks;