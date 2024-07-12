const Main = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-500 dark:bg-gradient-to-r dark:from-black dark:to-purple-500 flex flex-col items-center justify-center min-h-screen text-center w-full'>
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