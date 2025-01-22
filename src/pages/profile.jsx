import React from 'react';
import K from '../constant';

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 bg-[#DFD7EE] p-8">
      <p className="text-[#a479ca]">Featured Mentors</p>
      <h1 style={{ fontFamily: 'Playfair' }} className="text-6xl font-semibold">
        Our Mentors
      </h1>
      <p className="text-[#868488] text-center max-w-2xl">
        Our pool of mentors are seasoned professionals, industry leaders, and subject matter <br /> 
        experts who are passionate about empowering the next generation
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {K.PROFILE.map((profile, index) => {
          return (
            <div
              key={index}
              className="space-y-3 bg-white w-full max-w-[17vw] shadow-2xl shadow-gray-600 rounded-xl p-5 "
            >
              <img className="w-[200px] h-[40vh] rounded-xl" src={profile.img} alt="img" />
              <h3 className="text-lg text-[#933dc2] font-semibold">{profile.name}</h3>
              <p className="text-[#868488]">{profile.about}</p>
              <a href={profile.link} className="text-blue-500 underline">
                {profile.link}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
