import React, { useState } from 'react';
import { FiCamera } from "react-icons/fi";
import backgroundImage from './blue.jpg';
import { useNavigate } from 'react-router-dom';


const RecruiterRegistration = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyWeb, setCompanyWeb] = useState('');
    const [designation, setDesignation] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [text, setText] = useState('');

    const navigate = useNavigate();


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        
        let r = await fetch("http://localhost:3001/", {method: "POST",  headers: {
            "Content-Type": "application/json", 
          }, body: JSON.stringify({
            name,
            email,
            password,
            phone,
            companyName,
            companyWeb,
            designation,
            linkedin,
            desc:text,
        })})

          let res = await r.text()
          console.log(event, res)
          setTimeout(() => {
              navigate("/");
          }, 2000);

    };

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-center bg-cover"
             style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='h-5/6 w-1/3 bg-white p-1 rounded-2xl shadow-2xl shadow-sky-300'>
                <form className='h-full w-full overflow-y-auto px-7' onSubmit={onSubmit}> 
                    <h1 className='text-3xl text-center p-5 font-semibold text-blue-500'>Recruiter Registration</h1>
                    <div className='flex flex-col justify-center items-center'>

                        {/* Hidden file input */}
                        <input
                            type="file"
                            id="profilePhoto"
                            name="profilePhoto"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                        
                        {/* Circular icon or image button */}
                        <label 
                            htmlFor="profilePhoto" 
                            className="flex items-center justify-center w-40 h-40 border-2 border-blue-500 rounded-full mb-4 cursor-pointer hover:bg-sky-100 transition duration-200"
                        >
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                <span className="text-blue-500 text-4xl font-bold"><FiCamera /></span>
                            )}
                        </label>
                    </div>

                    {/* Input Fields */}
                    <div className='flex flex-col my-4 relative bg-white border-solid border-2 border-blue-500 rounded-md'>
                        <label htmlFor="name" className='absolute -top-4 ml-4 bg-inherit px-2'>Name*</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className='m-2 border-collapse focus:outline-none text-sm ' />
                    </div>
                    <div className='flex flex-col my-4 relative bg-white border-solid border-2 border-blue-500 rounded-md'>
                        <label htmlFor="email" className='absolute -top-4 ml-4 bg-inherit px-2'>Company email*</label>
                        <input type="email" id='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className='m-2 border-collapse focus:outline-none text-sm'/>
                    </div>
                    <div className='flex flex-col my-4 relative bg-white border-solid border-2 border-blue-500 rounded-md'>
                        <label htmlFor="email" className='absolute -top-4 ml-4 bg-inherit px-2'>Password*</label>
                        <input type="password" id='password' name="passwrod" value={password} onChange={(e) => setPassword(e.target.value)} required className='m-2 border-collapse focus:outline-none text-sm'/>
                    </div>
                    <div className='flex flex-col my-4 relative bg-white border-solid border-2 border-blue-500 rounded-md'>
                        <label htmlFor="phone" className='absolute -top-4 ml-4 bg-inherit px-2'>Phone no.*</label>
                        <input type="tel" id='phone' name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className='m-2 border-collapse focus:outline-none text-sm'/>
                    </div>
                    <div className='flex flex-col my-4 relative bg-white border-solid border-2 border-blue-500 rounded-md'>
                        <label htmlFor="company_name" className='absolute -top-4 ml-4 bg-inherit px-2'>Company Name*</label>
                        <input type="text" id='company_name' name="company_name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required className='m-2 border-collapse focus:outline-none text-sm'/>
                    </div>
                    <div className='flex flex-col my-4 relative bg-white border-solid border-2 border-blue-500 rounded-md'>
                        <label htmlFor="company_web" className='absolute -top-4 ml-4 bg-inherit px-2'>Company Website*</label>
                        <input type="url" id='company_web' name="company_web" value={companyWeb} onChange={(e) => setCompanyWeb(e.target.value)} required className='m-2 border-collapse focus:outline-none text-sm'/>
                    </div>
                    <div className='flex flex-col my-4 relative bg-white border-solid border-2 border-blue-500 rounded-md'>
                        <label htmlFor="designation" className='absolute -top-4 ml-4 bg-inherit px-2'>Designation*</label>
                        <input type="text" id='designation' name="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required className='m-2 border-collapse focus:outline-none text-sm'/>
                    </div>
                    <div className='flex flex-col my-4 relative bg-white border-solid border-2 border-blue-500 rounded-md'>
                        <label htmlFor="linkedin" className='absolute -top-4 ml-4 bg-inherit px-2'>Linkedin*</label>
                        <input type="url" id='linkedin' name="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} required className='m-2 border-collapse focus:outline-none text-sm'/>
                    </div>
                    <div className='flex flex-col my-4 relative bg-white border-solid border-2 border-blue-500 rounded-md'>
                        <label htmlFor="text" className='absolute -top-4 ml-4 bg-inherit px-2'>Description</label>
                        <textarea id='text' name="text" rows="5" value={text} onChange={(e) => setText(e.target.value)} className='m-2 border-collapse focus:outline-none text-sm'/>
                    </div>

                    <div className="flex items-center mb-4">
                        <input type="checkbox" name="terms" required />
                        <span className="ml-2">I agree to the Terms and Conditions*</span>
                    </div>
                    <button type="submit" className='bg-blue-500 p-2 rounded-md w-40 m-3 mb-6 text-blue-50'>Submit</button>
                </form>
                <div>
                    {/* Display submitted data */}
                    {name && <div>Name: {name}</div>}
                    {email && <div>Email: {email}</div>}
                    {phone && <div>Phone: {phone}</div>}
                    {companyName && <div>Company: {companyName}</div>}
                    {companyWeb && <div>Website: {companyWeb}</div>}
                    {designation && <div>Designation: {designation}</div>}
                    {linkedin && <div>LinkedIn: {linkedin}</div>}
                    {text && <div>Description: {text}</div>}
                </div>
            </div>
        </div>
    );
};

export default RecruiterRegistration;
