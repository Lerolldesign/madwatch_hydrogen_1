
import type {SanityColorTheme, SanityHeroPage} from '../../types';
import { ScrollTextAbout } from './ScrollTextH';
import {Image} from '@shopify/hydrogen';




type Props = {
  colorTheme?: SanityColorTheme;
  fallbackTitle: string;
  hero?: SanityHeroPage;
};

export default function One () {

    const src =
  "https://cdn.sanity.io/files/06gfxth5/production/617ee5b140b6dd4039ee98cb3623a1fd85afb141.mp4";
 

  return (
    <section className=" text-white">
        <ScrollTextAbout />
    <div className="w-full h-screen" >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen ">
       <div className=' border-b-[14px] border-white lg:border-r-[14px] lg:border-white'>
       <Image
      src="/images/home/skate.png" loading="lazy" 
      width={1080}
      height={1920}
      alt="Logo Invog"
      className="bg-cover md:h-[65vh] lg:h-[113.9vh]"
    />
       </div>

       <div className=' lg:border-r-[14px] lg:border-white hidden  md:block lg:block'>
       <video src={src}
            autoplay="{true}" loop muted
            className="z-10 w-auto 
            min-w-full h-[80vh] lg:h-[113.9vh] md:h-[65vh] max-w-none">
        </video>
       </div>

       <div className='z-10 lg:border-l-[14px] lg:border-white hidden lg:block'>
       <Image
      src="/images/home/skate.png" loading="lazy" 
      width={1080}
      height={1920}
      alt="Logo Invog"
      className="bg-cover lg:h-[113.9vh]"
    />
       </div>
  
      </div>
    </div>
  </section>
  
  );
}