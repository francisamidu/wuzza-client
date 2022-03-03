import React from "react";
import Button from "./Button";
import HomeLayout from "./HomeLayout";

import Image from "next/image";

const MoreInfo = () => {
  return (
    <HomeLayout>
      <div className="w-4/6 relative">
        <Image
          src="/3556960.jpg"
          alt="Work from anywhere"
          width="1000"
          height="800"
          layout="responsive"
        />
      </div>
      <div className="sm:w-2/6 w-11/12 flex-col color-dark-blue">
        <h1 className="text-4xl text-center sm:text-left font-bold mb-8 leading-11">
          Say goodbye to boring productivity{" "}
          <span className="text-blue-700 italic">solutions</span> and say
          <span className="text-blue-700 italic">hello</span>
          <span className="font-bold"> to Wuzza</span>
        </h1>
        <p className="leading-7 mb-8">
          With <span className="font-bold">Wuzza</span> we've made it very easy
          for you to get your tasks/job done.Explore features that best suit
          your needs and get more done
        </p>
        <div className="flex sm:justify-start justify-center">
          <Button
            text="Try it now"
            icon={null}
            className="btn-blue mr-4 rounded-xl"
          />
        </div>
      </div>
    </HomeLayout>
  );
};

export default MoreInfo;
