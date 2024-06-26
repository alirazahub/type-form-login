import React from 'react';
import './App.css';
import { RiArrowDropDownLine } from "react-icons/ri";

const SignUp = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="bg-[#191919] flex flex-row min-h-screen">
      {/* Left side */}
      <div className="hidden md:flex flex-col justify-center items-center text-white w-[45%] py-10">
        <div className="text-[36px] mb-[35px] w-[366px] text-center leading-[44px] font-[400px]">Sign up <br /> and come on in</div>
        <img src="leftImage.webp" alt="Sign up " className="mt-8 max-w-[366px]" />
        <div className="mt-8 text-[14px]">&copy; Typeform</div>
      </div>

      {/* Right side */}
      <div className="flex flex-col bg-white text-[#63686D] md:w-[55%] w-[100%] p-6 pt-4 rounded-l-xl">
        {/* Language selection dropdown */}
        <div className="flex justify-between w-full mb-4">
          <div className="flex items-center">
            <svg height="17" viewBox="0 0 20 20" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z" fill="#5E5E5E" fill-rule="evenodd"></path></svg>
            <select className=" text-[14px] cursor-pointer outline-none">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
          <div className='text-[14px]'>
            Already have an account? <p className="border-[1px] cursor-pointer inline-block text-black border-black px-[10px] py-[3px] rounded-md font-[400px] text-[12px]">Log in</p>
          </div>
        </div>

        {/* middle part */}
        <div className='flex justify-center items-center flex-grow'>
          <div>
            <div class="text-black flex justify-center my-6"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clip-rule="evenodd"></path></svg><span class="sc-da9128ae-0 bmXElW"><svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none" class="sc-da9128ae-1 bOQHzD"><path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"></path></svg></span>
            </div>
            <p className="my-4 text-center text-[24px]">Get better data with conversational forms, surveys, <br /> quizzes & more.</p>
            {/* Sign up buttons */}
            <div className="flex flex-col items-center">
              <input className=" bg-transparent outline-none border-[1px] border-gray-300 px-4 w-[290px] font-[400px] py-2 rounded-sm mb-2" placeholder='Email' type='email' />
              <input className=" bg-transparent outline-none border-[1px] border-gray-300 px-4 w-[290px] font-[400px] py-2 rounded-sm mb-2" placeholder='Password' type='password' />
              <div className='w-[290px] text- flex justify-start'>
                <input className='w-[60px] mt-[-30px]' type="checkbox" id="terms" name="terms" value="terms" />
                <div htmlFor="terms" className='text-[14px] p-4 text-black'>I agree to Typeform’s , <span className=' underline'>Terms of Service</span>  and <span className='underline'>Privacy Policy</span> and <span className='underline'>Data Processing Agreement.</span></div>
              </div>

              <div className='flex justify-between w-[250px] text-sm items-center cursor-pointer text-black' onClick={() => setIsOpen(!isOpen)}>
                <div>See Options</div>
                <div><RiArrowDropDownLine size={30} /></div>
              </div>
              {isOpen && <div className='text-sm w-[250px]'>
                <div className='text-black my-4'>
                  <div>Get useful tips, inspiration, and offers via e-communication.</div>
                  <div className='flex items-center my-2 text-[14px]'>
                    <div className='flex items-center mr-2'>
                      <input className='w-[40px]' type="radio" id="yes" name="communication" value="yes" />
                      <label htmlFor="yes">Yes</label>
                    </div>
                    <div className='flex items-center'>
                      <input className='w-[40px]' type="radio" id="no" name="communication" value="no" />
                      <label htmlFor="no">No</label>
                    </div>
                  </div>
                </div>
                <div className='text-black my-4'>
                  <div>Tailor Typeform to my needs based on my activity. <p className='hover:underline inline-block cursor-pointer'> See Privacy Policy</p></div>
                  <div className='flex items-center my-2 text-[14px]'>
                    <div className='flex items-center mr-2'>
                      <input className='w-[40px]' type="radio" id="yes" name="communication" value="yes" />
                      <label htmlFor="yes">Yes</label>
                    </div>
                    <div className='flex items-center'>
                      <input className='w-[40px]' type="radio" id="no" name="communication" value="no" />
                      <label htmlFor="no">No</label>
                    </div>
                  </div>
                </div>
                <div className='text-black my-4'>
                  <div>Enrich my data with select third parties for more relevant content. <p className='hover:underline  inline-block cursor-pointer'> See Privacy Policy</p></div>
                  <div className='flex items-center my-2 text-[14px]'>
                    <div className='flex items-center mr-2'>
                      <input className='w-[40px]' type="radio" id="yes" name="communication" value="yes" />
                      <label htmlFor="yes">Yes</label>
                    </div>
                    <div className='flex items-center'>
                      <input className='w-[40px]' type="radio" id="no" name="communication" value="no" />
                      <label htmlFor="no">No</label>
                    </div>
                  </div>
                </div>
              </div>}
              <button className=" text-white  border-[1px] bg-black hover:bg-gray-900 px-4 w-[290px] font-[400px] py-2 rounded-sm"> Create my free account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
