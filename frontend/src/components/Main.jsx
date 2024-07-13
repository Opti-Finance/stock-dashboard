const Main = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center w-full'>
            <p className="text-7xl my-5 dark:text-white">GOATED Financial Advisor</p>
            <a 
                key="see-models-link" 
                href="#models" 
                className="text-4xl dark:text-white transition-colors duration-500 hover:text-cyan-700 dark:hover:text-purple"
            >
                See Models
            </a>        
        </div>
    )
}

export default Main