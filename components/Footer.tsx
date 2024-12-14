import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import Button from './ui/Button'
import { socialMedia } from '@/data'

const Footer = () => {
    return (

        <footer className='w-full pt-20 pb-10' id='contact'>
            <div className='w-full absolute left-0 -bottom-72 min-h-96'>
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className='w-full h-full opacity-60'
                />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Let&apos;s Work <span className='text-purple'>Together</span>
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>I&apos;m excited to bring my skills to your next project. If you&apos;re looking for a dedicated developer, feel free to reach out.</p>
                <a href="mailto:rushikesh0945@gmail.com">
                    <Button
                        title="Contact Me"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Rushikesh</p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <a
                            key={profile.id}
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img
                                src={profile.img}
                                alt={profile.id}
                                width={20}
                                height={20}
                            />
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    )
}

export default Footer
