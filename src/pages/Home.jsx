import heroImage from "../assets/images/wayang.svg";
import aboutImage from "../assets/images/Dalang.png";

import proyek1 from "../assets/images/wayang-1.jpeg";
import proyek2 from "../assets/images/wayang-2.jpeg";
import proyek3 from "../assets/images/wayang-3.jpeg";
import proyek4 from "../assets/images/wayang-4.jpeg";

const Home = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4 ">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-24">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Mengenal Budaya Wayang Kulit Bersama{" "}
              <span className=" text-amber-800 underline">Pesona Wayang</span>
            </h1>
            <p className="text-base/8 mb-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
              quasi sit exercitationem voluptatem culpa quisquam.
            </p>
            <a
              href="#"
              className=" bg-amber-800 hover:bg-orange-700 text-white shadow rounded-full py-2 px-4 transition-all"
            >
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box ">
            <img
              src={heroImage}
              alt="hero Image"
              className="md:w-full w-[400px] md:m-0 mx-auto"
            />
          </div>
        </div>

        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-16 gap-8 md:pt-20 pt-28" id="about">
          <div className="box md:order-1 order-2">
            <img
              src={aboutImage}
              alt="about Image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Mengenal Budaya Wayang Kulit Bersama <span className=" text-amber-800 underline">Pesona Wayang</span>
            </h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
              quasi sit exercitationem voluptatem culpa quisquam.
            </p>
          </div>
        </div>

        <div className="services pt-24" id="services">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-3">
            Layanan
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            accusantium!
          </p>
          <div className="servie-box grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-8 gap-6">
            <div className="box bg-amber-800 shadow rounded-lg p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h1 className="text-xl font-bold text-white mt-5 mb-2">
                Service 1
              </h1>
              <p className="text-white text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                natus, est quas doloribus neque maxime?
              </p>
            </div>
            <div className="box bg-amber-800 shadow rounded-lg p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h1 className="text-xl font-bold text-white mt-5 mb-2">
                Service 2
              </h1>
              <p className="text-white text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                natus, est quas doloribus neque maxime?
              </p>
            </div>
            <div className="box bg-amber-800 shadow rounded-lg p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h1 className="text-xl font-bold text-white mt-5 mb-2">
                Service 3
              </h1>
              <p className="text-white text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                natus, est quas doloribus neque maxime?
              </p>
            </div>
          </div>
        </div>

        <div className="proyek pt-24" id="proyek">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-3">
            Proyek
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            accusantium!
          </p>
          <div className="proyek-box grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-8 gap-6">
            <div className="box bg-white shadow p-2">
              <img src={proyek1} alt="" className="w-full h-[320px]"/>
              <h1 className="text-xl font-bold mt-6 mb-2">proyek 1</h1>
              <p className="text-base/loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, dolores.</p>
            </div>
            <div className="box bg-white shadow p-2">
              <img src={proyek2} alt="" className="w-full h-[320px]"/>
              <h1 className="text-xl font-bold mt-6 mb-2">proyek 1</h1>
              <p className="text-base/loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, dolores.</p>
            </div>
            <div className="box bg-white shadow p-2">
              <img src={proyek3} alt="" className="w-full h-[320px]"/>
              <h1 className="text-xl font-bold mt-6 mb-2">proyek 1</h1>
              <p className="text-base/loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, dolores.</p>
            </div>
            <div className="box bg-white shadow p-2">
              <img src={proyek4} alt="" className="w-full h-[320px]"/>
              <h1 className="text-xl font-bold mt-6 mb-2">proyek 1</h1>
              <p className="text-base/loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, dolores.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
