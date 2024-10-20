import React from 'react'
import figure2 from "../../assets/illustration/figure2.svg"
const About = ()=> {
  return (
    <div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                <img src={figure2} alt="illustration image" />
                </div>
                
            
            <div className='md:w-3/5 mc-auto'>
            <h2 className='text-4xl text-neutralDGrey fort-semibold mb-4 md:w-4/5'>
            thw iunseen of spending three yeats at pixelgrade
            </h2>
            <p className='md-w-3/4 text-sm tect-neutralDGrey mb-8'>
            Donec a eros justo. Fusce egestas tristique ultrices. 
            Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, 
            at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. 
            In hac habitasse platea dictumst. Vivamus vehicula leo dui, 
            at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, 
            non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
            Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. 
            Donec consectetur faucibus ipsum id gravida.
            </p>
                <button className='btn-primary'>learn more</button>
            </div>
            </div>

            <div className='px-4 lg:px max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div>
                    <div>
                    <h2 className='text-4xl text-neutralDGrey fort-semibold mb-4 md:w-3/4'>
                    Helping a local <br /> <span className='brandPrimary'> business reinvet itsel </span>
            </h2>
            <p className='md-w-3/4 text-sm tect-neutralDGrey mb-8'>
         We reached here with ourhard work and dedication
            </p>
                    </div>
                    <div></div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About