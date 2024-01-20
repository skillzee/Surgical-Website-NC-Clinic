import { useState } from "react";
import { Navigate } from "react-router-dom";
import intro from "../about/18.jpg";
import vision from "../about/vision.jpg";
import approach from "../about/approach.jpg";
import quality from "./quality.png";
import customer from "./customer.png";
import innovate from "./innovation.png";
import trust from "./trust.png";
import solution from "./solution.png";
import { Space } from "lucide-react";

export default function About() {
  // if (goToCOntact) {
  //   // return <Navigate to="/contact" />;
  // }

  return (
    <div className="md:px-10 bg-white">
      <div className="container flex mx-auto items-center">
        <div className="left flex flex-1 flex-col my-20 ">
          <h1 className="text-4xl font-bold my-5">
            Welcome to
            <span className="text-orange-600 font-bold"> NC Surgicals</span>
          </h1>
          <p>
            Welcome to NC Surgicals, where precision meets excellence in
            surgical instruments! We are your ultimate destination for top-tier
            tools catering to the needs of medical professionals and healthcare
            institutions. Discover a comprehensive range of high-quality
            instruments meticulously crafted to elevate surgical precision and
            reliability. Join us in advancing healthcare standards with our
            commitment to superior quality and performance at NC Surgicals.
          </p>
        </div>
        <div className="right flex-1 hidden md:flex">
          <img src={intro} alt="" />
        </div>
      </div>
      <div className="container md:my-20 flex mx-auto items-center">
        <div className="left1 flex-1 hidden md:flex">
          <img src={vision} alt="" />
        </div>
        <div className="right1 flex-1">
          <h1 className="text-4xl my-5 font-bold">
            Our <span className="text-orange-600"> Vision</span>
          </h1>
          <p>
            Empowering medical professionals worldwide with cutting-edge
            surgical instruments that redefine precision and reliability.
            Striving to be the foremost provider of top-quality tools, we
            envision revolutionizing surgical practices, enhancing patient care,
            and setting unparalleled standards in the healthcare industry. At NC
            Surgicals, our vision is to continually innovate and inspire
            advancements that elevate the art of surgery.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex items-center my-20">
        <div className="left2 flex-1">
          <h1 className="text-4xl my-5 font-bold">
            Our <span className="text-orange-600"> Approach</span>
          </h1>
          <p>
            At NC Surgicals, we prioritize quality, innovation, and customer
            satisfaction. Our commitment revolves around delivering top-tier
            surgical instruments, providing a user-friendly experience, ensuring
            reliable support, fostering innovation, and building collaborative
            partnerships with healthcare professionals and institutions. This
            approach drives us to excel in meeting diverse surgical needs while
            maintaining a customer-centric focus.
          </p>
        </div>
        <div className="right2 flex-1 hidden md:flex">
          <img src={approach} alt="" />
        </div>
      </div>
      <div className="text-4xl font-bold text-center my-10">
        What Sets Us Apart
      </div>
      <div className="container mx-auto flex items-center">
        <div className="left3 flex-1">
          <h1 className="text-3xl my-2 text-amber-700">
            Uncompromising Quality
          </h1>
          <p>
            At NC Surgicals, our commitment to quality goes beyond meeting
            industry standards. We meticulously handpick each surgical
            instrument, prioritizing precision, durability, and reliability. Our
            stringent quality control ensures that every tool surpasses
            expectations, earning the trust of healthcare professionals for its
            exceptional performance.
          </p>
        </div>
        <div className="right3 flex-1 hidden md:flex">
          <img
            className=" object-scale-down h-48 mx-auto"
            src={quality}
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto flex my-20 items-center">
        <div className="left4 flex-1 hidden md:flex">
          <img
            className=" object-scale-down h-48 mx-auto"
            src={innovate}
            alt=""
          />
        </div>
        <div className="right4 flex-1">
          <h1 className="text-3xl my-2 text-amber-700">Innovation Drive</h1>
          <p>
            Innovation is the cornerstone of NC Surgicals. Our dedicated team
            constantly explores and integrates the latest technological
            advancements into our instrument selection. This ongoing pursuit of
            innovation enables us to introduce cutting-edge tools that redefine
            surgical practices, empowering medical professionals with the most
            advanced solutions available in the market.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex my-20 items-center">
        <div className="left5 flex-1">
          <h1 className="text-3xl my-2 text-amber-700">
            Customer-Centric Approach
          </h1>
          <p>
            Our customers' satisfaction is paramount. We have crafted a seamless
            and user-friendly shopping experience designed to simplify the
            process of finding and acquiring the right surgical instruments.
            Additionally, our responsive customer support team is always
            available to address queries, offer guidance, and ensure that every
            interaction with NC Surgicals is both efficient and rewarding.
          </p>
        </div>
        <div className="right5 flex-1 hidden md:flex">
          <img
            className=" object-scale-down h-48 mx-auto"
            src={customer}
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto flex my-20 items-center">
        <div className="left6 flex-1 hidden md:flex">
          {" "}
          <img
            className=" object-scale-down h-48 mx-auto"
            src={solution}
            alt=""
          />
        </div>
        <div className="right6 flex-1">
          <h1 className="text-3xl my-2 text-amber-700">Tailored Solutions</h1>
          <p>
            Recognizing the diverse and unique needs within the healthcare
            sector, we engage in close collaboration with medical professionals
            and institutions. By understanding the intricacies of various
            healthcare settings, we offer customized instrument solutions that
            precisely match specific requirements. This tailored approach
            ensures that our clients receive instruments perfectly suited to
            their practice.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex my-20 items-center">
        <div className="left5 flex-1">
          <h1 className="text-3xl my-2 text-amber-700">
            Reliability and Trust
          </h1>
          <p>
            NC Surgicals has built a solid reputation as a reliable and
            trustworthy partner in the healthcare industry. Our consistent
            delivery of superior-quality instruments, paired with exceptional
            service, has established us as a dependable choice for healthcare
            professionals seeking reliable tools and unwavering support in their
            medical endeavors.
          </p>
        </div>
        <div className="right5 flex-1 hidden md:flex">
          <img className=" object-scale-down h-48 mx-auto" src={trust} alt="" />
        </div>
      </div>

      {/* <div className="services">
        <div className="container mx-2 md:mx-auto ">
          <h1 className="text-4xl my-10 md:my-16 font-bold">Our Services</h1>
          <div className="container mx-auto my-10 flex gap-8 flex-col md:flex-row ">
            <div className="left">
              <h1 className="text-3xl">Online Consultation</h1>
              <p className="mx-2 my-2">
                Experience the convenience and expertise of online
                consultations. Get personalized advice, guidance, and solutions
                from the comfort of your home. Connect with professionals and
                experts for comprehensive support tailored to your needs.
              </p>
              <button
                onClick={() => navigate(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-10"
              >
                Contact
              </button>
            </div>
            <div className="right ">
              <h1 className="text-3xl">Reliability and Trust</h1>
              <p className="mx-2 my-2">
                Effortlessly order medicine online with a valid prescription.
                Enjoy the convenience of getting your prescribed medications
                delivered to your doorstep, ensuring a seamless and hassle-free
                experience for your health needs.
              </p>
              <button
                onClick={() => navigate(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-10"
              >
                Contact
              </button>
            </div>
            <div className="leftDown">
              <h1 className="text-3xl">Walk in</h1>
              <p className="mx-2 my-2">
                Discover our walk-in clinic service, offering accessible and
                prompt medical care without appointments. Your health is our
                priority, providing convenience and peace of mind for all your
                urgent healthcare needs. Experience quality care today.
              </p>
              <button
                onClick={() => navigate(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-10"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact container mx-auto py-5">
        <h1 className="text-4xl my-2 font-bold">Contact Us</h1>
        <p className="">
          We are excited to be a part of your journey towards better health and
          well-being. If you have any questions or would like to schedule a
          consultation, feel free to reach out to us. Let's take the first step
          together towards a healthier and happier you!
        </p>
      </div> */}
      <div className="text-3xl text-center">
        For any queries. Feel free to contact us!
      </div>
      <div className="flex justify-center my-8">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Contact
      </button>
      </div>
    </div>
  );
}
