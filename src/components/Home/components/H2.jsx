import React from 'react';
import img from "./../../../assets/3.jpg"
const H2 = () => {
  return (
    <section className="py-20 p-20">
  <div className="container">
    <div className="flex flex-col items-center gap-4">
      <div className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold">
      Features
      </div>
      <h2 className="mb-1 text-center text-2xl font-semibold lg:text-4xl">
      Collaborate in Real-Time, Anytime
      </h2>
      <p className="text-zinc-600 lg:text-base">
      Unlock seamless communication and effortless teamwork with our private chat rooms. Stay connected with friends, share ideas, and collaborate instantly!
      </p>
      <div className="p-7 mt-4 flex flex-col gap-4 lg:flex-row">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between gap-4 lg:w-1/3">
          <div className="flex flex-col space-y-1 p-4 items-start">
            <div className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold">
            Instant Chat Rooms
            </div>
          </div>
          <div className="p-4 pt-0 text-sm lg:text-base">
          Create private rooms, connect with your circle, and enjoy real-time conversations without interruptions.
          </div>
          <div className="flex items-center p-4 pt-0">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-white hover:bg-zinc-100 hover:text-zinc-800 h-8 px-3 py-1">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 h-4 w-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:w-1/3">
          <img src={img} alt="" className="h-full max-h-72 w-full rounded-md object-cover"/>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between gap-4 lg:w-1/3">
          <div className="flex flex-col space-y-1 p-4 items-start">
            <div className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold">
            Secure & Private
            </div>
          </div>
          <div className="p-4 pt-0 text-sm lg:text-base">
          Your privacy matters. All your chats are encrypted and stored safely, ensuring that your discussions stay private and secure.
          </div>
          <div className="flex items-center p-4 pt-0">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-white hover:bg-zinc-100 hover:text-zinc-800 h-8 px-3 py-1">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 h-4 w-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default H2
