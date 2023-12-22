import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const SignUpForm = dynamic(() => import("@/components/forms/SignUp.form"), {
  ssr: false,
})

const page = () => {
  return (
    <div className='shadow-2xl rounded-lg px-10 py-8 w-4/6 bg-white sm:w-[450px] flex flex-col items-center'>
      <Image
        src='/assets/images/logo.svg'
        width={200}
        height={50}
        alt='Evently logo'
      />
      <SignUpForm />
      <div className='w-full mt-4'>
        Already have an account? {"   "}
        <Link href='/login' className='text-blue-500 hover:text-blue-600'>
          Login
        </Link>
      </div>
    </div>
  )
}

export default page
