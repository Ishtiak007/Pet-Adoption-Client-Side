import SectionTitle from "../SectionTitle/SectionTitle";

import faqImage from '../AboutUs/img/faqQuestion-removebg-preview.png'

const FaqSsection = () => {
    return (
        <div className="bg-[#D5E6EB] p-3">
            <SectionTitle heading={'Frequently Asked Questions about us'} subHeading={'Your all frequently asked questions is here'}></SectionTitle>
            <div className="lg:flex">

                <div className="flex-1 flex items-center">

                    <div className=" w-full">
                        <div className="collapse collapse-arrow bg-white">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-bold">
                                Want to donate? Short process is here
                            </div>
                            <div className="collapse-content">
                                <p>Welcome to our pet adoption haven, where love finds a home. Explore our website, a heartwarming platform connecting compassionate souls with furry friends seeking forever homes. Join our impactful donation campaigns, transforming lives of injured pets, providing hope and healing. Your generosity becomes the bridge to a brighter, healthier future. Together, lets create a world where every pet finds love and care.</p>
                                <br />
                                <p>Donation campaign process is so easy. First of all you have to go to Donation Campaings Page, which is situated in the top of the navbar. Then You choose any pet to donation. Donation rate is totally up to you.You can donate any kind of amount to help.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-bold">
                                Want to adoption pet?
                            </div>
                            <div className="collapse-content">
                                <p>Embark on a journey of compassion with our pet adoption platform. Discover the joy of giving a forever home to a furry friend in need. Our website is a gateway to heartwarming stories, connecting you with lovable companions awaiting love. Embrace the transformative power of adoption, making a difference one paw at a time. Join us in creating homes filled with love and happiness.</p>
                                <br />
                                <p>You can adopt a pet by your choise. First of all you have to go Pet Listing page. Then there you can see about all of the pet to adopt. You can choose your pet from there. Adopt Now button provide the next process to adoption.Now go for adoption.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-bold">
                                Have you found an animal without a guardian?
                            </div>
                            <div className="collapse-content">
                                <p>Discover an animal in need, without a guardian? Connect with us to be their voice. Our compassionate team is dedicated to providing care, shelter, and finding loving homes. Your action today ensures a brighter tomorrow for these vulnerable creatures. Contact us in provided information, the bridge between animals and the care they deserve.</p>
                                <br />
                                <p>Contact process is very simple. First of all you have to go to bottom of our website. There will be our contact details. You can call , message and email us - any time and any where.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex-1">
                    <img className="mx-auto" src={faqImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FaqSsection;