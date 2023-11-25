
import img7 from './img/img7.jpg'

const OverlayBottom = () => {
    return (
        <div>
            <div className='lg:flex md:flex gap-4'>
                <div className='flex-1 flex justify-end'>
                    <img src={img7} className='rounded-md border-slate-300 border-8' alt="" />
                </div>
                <div className='flex-1 flex justify-center items-center'>
                    <div>
                        <p className='text-[#FF4860] font-bold'>----ACHIEVEMENTS</p>
                        <h1 className='text-3xl my-3'>A lots of animals need our protection</h1>
                        <p>Discover the extraordinary joy of adopting pets with unique challenges. These resilient companions may require a bit more patience and understanding, but their love is immeasurable. Embrace the opportunity to transform obstacles into lasting connections, forging a bond that goes beyond the ordinary. Your commitment becomes a testament to the incredible transformations that happen when love triumphs over challenges in the journey of adoption.</p>
                        <div className='lg:flex md:flex justify-around mt-4'>
                            <div>
                                <h1 className='text-5xl font-bold text-[#FF4860]'>560</h1>
                                <p>Poaching cases</p>
                            </div>
                            <div>
                                <h1 className='text-5xl font-bold text-[#FF4860]'>230</h1>
                                <p>Rescued animals</p>
                            </div>
                            <div>
                                <h1 className='text-5xl font-bold text-[#FF4860]'>90</h1>
                                <p>Volunteers</p>
                            </div>
                        </div>
                        <div className='text-center my-7'>
                            <div className="flex flex-col w-full lg:flex-row">
                                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"> <button className='btn bg-[#FF4860] hover:bg-[#FF4835] text-white'>Take Youe Pet</button></div>
                                <div className="divider lg:divider-horizontal">or</div>
                                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><button className='btn bg-[#48c5ff] hover:bg-[#359aff]'>Make Donation</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlayBottom;