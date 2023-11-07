import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <>
      <section className="max-container padding-container pb-[100px] mt-10">
        <div className="relative">
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />
          <h2 className="bold-40 lg:bold-64">How Hilink Works</h2>
        </div>
        <p className="text-lg">
          Welcome to Hilink, the ultimate travel app for campers. Discover how
          our app makes camping adventures easier and more enjoyable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <div className="text-center">
            <Image
              src="/camp-tours.jpeg"
              alt="Join Camp Tours"
              className="max-h-72 mx-auto rounded-5xl"
              width={600}
              height={150}
            />
            <h2 className="text-xl font-semibold mt-4">
              Step 1: Join Camp Tours
            </h2>
            <p className="flex flex-wrap ">
              Browse through a variety of camp tours offered by our community.
              Join tours that match your interests and schedule.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/navigation.jpeg"
              alt="Navigate with Offline Maps"
              className="max-h-72 mx-auto rounded-5xl"
              width={600}
              height={150}
            />
            <h2 className="text-xl font-semibold mt-4">
              Step 2: Navigate with Offline Maps
            </h2>
            <p>
              Our app provides offline maps, ensuring you won't get lost in the
              wilderness. Download maps before your trip and access them without
              an internet connection.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/adventure-plan.jpeg"
              alt="Plan Your Adventure"
              className="max-h-72 mx-auto rounded-5xl"
              width={600}
              height={150}
            />
            <h2 className="text-xl font-semibold mt-4">
              Step 3: Plan Your Adventure
            </h2>
            <p>
              Use our app to plan your camping adventure. Schedule activities,
              set waypoints, and customize your route. Be in control of your
              camping experience.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/group-camp.jpeg"
              alt="Community Contributions"
              className="max-h-72 mx-auto rounded-5xl"
              width={600}
              height={150}
            />
            <h2 className="text-xl font-semibold mt-4">
              Step 4: Community Contributions
            </h2>
            <p>
              Our community of campers keeps adding new locations and valuable
              information to enhance your camping experience. Contribute and
              share your discoveries too.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
