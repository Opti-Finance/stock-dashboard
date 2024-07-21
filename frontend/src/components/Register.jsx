import React, { useState } from 'react';
import ColorSwitch from './ColorSwitch';

const Register = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = () => {
        if(password != confirm){
            setError(true);
            setErrorMessage("Passwords must match");
            return
        } else {
            console.log(`Username: ${user}\nPassword: ${password}`);
            setError(false);
            setErrorMessage("");
        }
    }
    return (
        <>
        <ColorSwitch />
        <div className="m-0 flex justify-center items-center h-[84vh] w-full flex-col">
            <div className="w-[300px] bg-white dark:bg-gray-800 rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(0,0,0,0.4)] p-[20px] pr-[40px] mt-[20px] text-gray-500 dark:text-gray-300 font-sans">
                <div className="card-body">
                    <h1 className="card-title">Register</h1>
                    <input 
                        type="text"
                        placeholder="Username"
                        value={user}
                        onChange={(e)=>{setUser(e.target.value)}}
                        className="w-[110%] h-[3.5vh] rounded-[30px] border-solid border-2 border-gray-900 dark:border-white p-4 mt-[1.5vh] dark:text-black"
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        className="w-[110%] h-[3.5vh] rounded-[30px] border-solid border-2 border-gray-900 dark:border-white p-4 mt-[1.5vh] dark:text-black "
                    />
                    <input 
                        type="password"
                        placeholder="Confirm Password"
                        value={confirm}
                        onChange={(e)=>{setConfirm(e.target.value)}}
                        className="w-[110%] h-[3.5vh] rounded-[30px] border-solid border-2 border-gray-900 dark:border-white p-4 mt-[1.5vh] dark:text-black"
                    />
                    <div className="w-full flex justify-center">
                        <button 
                        className="flex items-center justify-center h-[3.7vh] w-[40%] text-[16px] bg-[#007bff] py-[10px] px-[20px] text-white border-none cursor-pointer mr-[5px] mt-[3vh] rounded-[30px] no-underline dark:bg-purple-600 dark:hover:bg-purple-800 hover:bg-[#0056b3]"
                        onClick={handleSubmit}
                        >Submit</button>
                    </div>
                    {error ? <div className="bg-red-200 text-red-700 font-bold rounded p-2 mt-2">{errorMessage}</div>:null}
                </div>
            </div>
        </div>
        </>
    );
}

export default Register;