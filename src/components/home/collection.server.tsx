import { ScrollTextRotate } from "./ScrollTextR";

export default function HomeCollection () {

    const src =
  "https://cdn.pixabay.com/vimeo/157183598/planche-a-roulette-2295.mp4?rendition=source&expiry=1679470819&hash=88caaa133a3235585fe61c05810513f74214914e";
 

  return (
    <section className="z-20 py-32 items-center">
      <ScrollTextRotate />
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              alt="House"
              src="/images/home/skate.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
  
        <div className="relative flex items-center bg-gray-100">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div className="p-8 sm:p-16 lg:p-24">
            <ul className="text-2xl  sm:text-3xl uppercase leading-10 lg:leading-[15rem] lg:tracking-[.1rem] lg:text-[15rem] madfont">
          
            <li>
              {/* effect 1 */}
            <button className="text-yellow-200 hover:text-black btn shadow-[0_1px_0_rgb(0,0,0)] hover:shadow-[0_9px_0px_rgb(255,255,0)]  bg-white ease-out hover:translate-y-1 transition-all hover:rounded uppercase">
            Pop <span className="text-5xl text-black item-center"><sup>x 9</sup></span>
            </button>
           
            </li> 
            <li>
               {/* effect 1 */}
            <button className="text-gray hover:text-black btn shadow-[0_1px_0_rgb(0,0,0)] hover:shadow-[0_9px_0px_rgb(150,150,150)]  bg-white ease-out hover:translate-y-1 transition-all hover:rounded uppercase">
            Pure <span className="text-5xl text-black item-center"><sup>x 7</sup></span>
            </button>
            </li> 
            <li>
               {/* effect 1 */}
            <button className="text-peach hover:text-black btn shadow-[0_1px_0_rgb(0,0,0)] hover:shadow-[0_9px_0px_rgb(255,192,203)]  bg-white ease-out hover:translate-y-1 transition-all hover:rounded uppercase">
            Hype <span className="text-5xl text-black item-center"><sup>x 4</sup></span>
            </button>
            </li> 
            <li>
               {/* effect 1 */}
            <button className="text-darkGray hover:text-black  btn shadow-[0_1px_0_rgb(0,0,0)] hover:shadow-[0_9px_0px_rgb(0,0,0)]  bg-white ease-out hover:translate-y-1 transition-all hover:rounded uppercase">
            Ink<span className="text-5xl text-black item-center py-20 mx-20"><sup>x 5</sup></span>
            </button>
            </li> 
            </ul>
  
  
          
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}