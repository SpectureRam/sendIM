import React from 'react';
import img from "./../../../assets/4.jpg"

const H3 = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 lg:pr-24 md:pr-16 mt-10 lg:mt-0">
          <span className="mb-8 block text-xs font-bold tracking-widest text-blue-600 uppercase lg:ml-10">
            sendIM 
          </span>
          <p className="mb-12 text-base leading-relaxed text-gray-500 lg:ml-10">
            "Alright, alright, folks, welcome to our corner of the web! This isn't just a chat room, it's where connections happen, where friendships are built in real-time. Now, let's keep it smooth, keep it secure, and make sure your conversations flow just right. Ready to dive in? Let's make this place yours!"
          </p>
          <div className="flex items-center mb-4">
            <img 
              alt="blog" 
              src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci82NGUxNDc5MDYxZDdjMGZiM2E5NTcxMjhlMDA0OWFmZj9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.eOeMwGQQOWU5h16KYArESMkmfFVxlqYifR_qHTyGCBQ"
              className="w-10 h-10 rounded-full object-cover object-center flex-shrink-0 lg:ml-10" 
            />
            <div className="pl-3">
              <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                SAIRAM N
                <span className="font-semibold text-gray-500 lg:mb-0">&nbsp; sendIM's ADMIN </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/6 lg:max-w-lg">
          <img 
            className="object-cover object-center mx-auto rounded-lg w-full h-auto lg:ml-24" 
            alt="hero"
            src={img} 
          />
        </div>
      </div>
    </section>
  )
}

export default H3;