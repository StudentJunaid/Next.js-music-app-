"use client"
import { features } from 'process'
import courseData from '../data/music_course.json'
import Link from "next/link"
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor:string,
    isFeatured: boolean,
}


function FeaturedCourses() {

    const FeaturedCourses = courseData.courses.filter((course:Course) => course.isFeatured)

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the best</p>
                </div>
            </div>
            <div className='mt-10 mx-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                   {FeaturedCourses.map((course:Course) =>(
                   <div key={course.id}
                   className='flex justify-center'
                   >
                      <BackgroundGradient
                      className='flex flex-col items-center pb-7 rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'
                      >
                        <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                            <p className='text-lg sm:text-xl text-white  mt-4 mb-5 dark:text-neutral-200"'>{course.title}</p>
                            <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                        </div>
                        <div className='text-center py-3 border-2 border-solid border-white rounded-md w-[150px]'>
                        <Link
                        href={`/course/${course.slug}`}>
                            Learn More
                        </Link>
                        </div>
                      </BackgroundGradient>
                   </div>
                   ))}
                </div>
            </div>
            <div className="text-center mt-4">
                <Link href={'/courses'}
                    className="bg-white text-black p-3 rounded-md mt-5 inline-block"
                >
                    Viwe all courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses