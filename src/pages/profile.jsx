import React from "react";
import K from "../constant";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 bg-[#DFD7EE] px-6 py-10">
      <p className="text-[#a479ca] text-sm md:text-base">Featured Mentors</p>
      <h1
        style={{ fontFamily: "Playfair" }}
        className="text-3xl md:text-5xl font-semibold text-center"
      >
        Our Mentors
      </h1>
      <p className="text-[#868488] text-center max-w-2xl text-sm md:text-base">
        Our pool of mentors are seasoned professionals, industry leaders, and
        subject matter <br className="hidden md:block" /> experts who are
        passionate about empowering the next generation
      </p>

      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl ml-2">
        {K.PROFILE.map((profile, index) => {
          return (
            <div
              key={index}
              className="space-y-3 bg-white w-full max-w-xs md:max-w-sm shadow-lg rounded-xl p-4"
            >
              <img
                className="w-full h-[300px] object-cover rounded-xl"
                src={profile.img}
                alt="mentor"
              />
              <h3 className="text-lg text-[#933dc2] font-semibold">
                {profile.name}
              </h3>
              <p className="text-[#868488] text-sm">{profile.about}</p>
              <a
                href={profile.link}
                className="text-blue-500 underline text-sm break-words"
              >
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
