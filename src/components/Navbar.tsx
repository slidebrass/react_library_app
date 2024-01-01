import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (
        <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>
                    Library App
                </Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 
                    text-teal-200 border rounded border-teal-400 hover:text-white 
                    hover:border-white'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <button className='p-3 m-5 bg-teal-400 justify-center'>
                        <div>
                            <Link to='/' onClick={clicked} className='flex place-itmes-center mt-4 
                                lg:inline-block lg:mt-0 text-teal-200 hover:text-white 
                                mr-4'>
                                    Home
                            </Link>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-teal-400 justify-center'>
                        <div>
                            <Link to='/' onClick={clicked} className='flex place-itmes-center mt-4 
                                lg:inline-block lg:mt-0 text-teal-200 hover:text-white 
                                mr-4'>
                                    About
                            </Link>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-teal-400 justify-center'>
                        <div>
                            <Link to='/dashboard' onClick={clicked} className='flex place-itmes-center mt-4 
                                lg:inline-block lg:mt-0 text-teal-200 hover:text-white 
                                mr-4'>
                                    Dashboard
                            </Link>
                        </div>
                    </button>
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar