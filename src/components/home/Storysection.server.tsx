export default function HomeStory () {

    const src =
  "https://cdn.pixabay.com/vimeo/157183598/planche-a-roulette-2295.mp4?rendition=source&expiry=1679470819&hash=88caaa133a3235585fe61c05810513f74214914e";
 

  return (
    <section className="py-15 z-20 min-h-full flex items-center lg:mt-52">
  
  <div className="flex-1 px-2  lg:p-8">
    <div className="grid grid-cols-6 gap-8">

      <div className="col-span-6 md:col-span-6 lg:col-span-2">
      <div className=" lg:py-52">
        <h3 className="lg:h-24 text-4xl tracking-[.2rem] sm:text-3xl uppercase leading-10 lg:leading-2  lg:tracking-[.1rem] lg:text-[12rem] madfont mx-5">our concept</h3>
        </div>
        <div className="hidden mx-5 group flex justify-center items-center relative w-[300px] h-20 bg-peach cursor-pointer text-xl uppercase font-bold">
          <span>Hover over me</span> 
           {/* shine box */}
          <div className="absolute top-0 -inset-full h-full w-32 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        </div>

       </div>

      <div className="col-span-6 md:col-span-6 lg:col-span-4">
      <div className="lg:py-52">
        <p className=" h-full text-lg lg:text-3xl lg:leading-[3.8rem] lg:px-10">

        All the clocks in the world are at the service of a single master, the god <span className="underline underline-offset-8">Chronos</span>. They indicate the passage of time in a linear fashion. They mark continuity in a completely neutral 
        way without adding or subtracting anything from reality. They do not force their owner in any way except to notice the inexorable passage of time. The madwatch watch adds a
         new dimension to reading time.
        </p>
       </div>
     </div>
    </div>
  </div>

  </section>
  
  );
}