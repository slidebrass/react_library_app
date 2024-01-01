import Background from '../assets/images/curved_library.jpeg';

function Home() {
    return (
      <div
        style={{ backgroundImage: `url(${ Background })`}}
              className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
          >
              <div className="flex place-items-center h-screen">
                  <h3 className="p-5 bg-white bg-opacity-75 text-black rounded text-2xl">Welcome to my Library App</h3>
              </div>
      </div>
    )
  }
  
  export default Home