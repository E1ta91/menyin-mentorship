import React from 'react'
import bg3 from '../assets/images/bg3.jpg'

const Mentor = () => {
    const [result, setResult] = React.useState("");


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "44810d29-bc2f-43be-8af0-f611e475d343");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult(" Registered Successfully");
            event.target.reset();

            setTimeout(() => {
                setResult("");
            }, 5000);

        } else {
            console.log("Error", data);
            setResult(data.message);

            setTimeout(() => {
                setResult("");
            }, 5000);
        }
    };




    return (

        <div>

            <div style={{
                backgroundImage: `url(${bg3})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                height: '100vh',
            }} >

            </div>

            <div className="absolute inset-0 bg-black z-0 opacity-10 "></div>

           


            <form onSubmit={onSubmit} className='space-y-5 absolute bottom-[7rem] left-[400px]  pb-8 pl-4 bg-custom-gradient w-[37vw] rounded-xl shadow-2xl shadow-black ml-10 '>

                 {/* Success Message */}
            {result && (
                <p style={{ fontFamily: 'Playfair' }} className=" border w-60 h-11 rounded-lg bg-white shadow-white shadow-md text-black pt-1 font-medium text-center">
                    {result}
                </p>
            )}


                <h2 style={{ fontFamily: 'Playfair' }} className='text-2xl text-[#F9F6E6] '>Share Your Expertise</h2>

                <div className='flex space-x-10'>

                    <div className="">
                        <label htmlFor='name' className="mb-3 block text-base font-medium text-[#BAD8B6]">
                            Full Name
                        </label>
                        <input type="name" name="fullname" id="fullname" placeholder="Full name" autoComplete='name' className="w-52 rounded-md border  border-[#585757] bg-white py-3 px-6   text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md" />
                    </div>

                    <div className="">
                        <label htmlFor='email' className="mb-3 block text-base font-medium text-[#BAD8B6]">
                            Email Address
                        </label>
                        <input type="text" name="email" id="email" placeholder="Email Address" autoComplete='email' className="w-56 rounded-md border  border-[#585757] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md" />
                    </div>

                </div>

                <div >
                    <div className="">
                        <label htmlFor='Field of Expertise' className=" block text-base font-medium text-[#BAD8B6]">
                            Field of Expertise
                        </label>
                        <input type="text" name="Expertise" id="Expertise" placeholder="e.g., Technology, Marketing....." autoComplete='name' className="w-72 rounded-md border  border-[#585757] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md" />
                    </div>

                    <div className="">
                        <label for="skills" className=" block text-base font-medium text-[#BAD8B6]">Mentorship Skills</label>
                        <input
                            id="skills"
                            name="skills"
                            rows="4"
                            placeholder="Skills you mentor in......"
                            className="w-72 rounded-md border  border-[#585757] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                        ></input>
                    </div>

                      {/* <!-- Hidden input for the predefined subject --> */}
                      <input type="hidden" name="subject" value="Mentor Registration" />
                </div>

                <button type='submit' style={{ fontFamily: 'Playfair' }} className='border border-[#BAD8B6] text-white w-32 h-8 font-semibold hover:bg-[#DA498D] rounded-lg'>Submit</button>



            </form>


        </div>

    )
}

export default Mentor