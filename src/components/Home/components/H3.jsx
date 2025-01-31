import React from 'react';
import img from "./../../../assets/4.jpg"
const H3 = () => {
  return (
    <section>
  <div class="container py-24">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl">
      <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
        <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> sendIM </span>
        <p class="mb-12 text-base leading-relaxed text-gray-500">"Alright, alright, folks, welcome to our corner of the web! This isn't just a chat room, it's where connections happen, where friendships are built in real-time. Now, let's keep it smooth, keep it secure, and make sure your conversations flow just right. Ready to dive in? Let's make this place yours!"</p>
        <a class="inline-flex items-center w-full mb-4">
          <img alt="blog" src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci82NGUxNDc5MDYxZDdjMGZiM2E5NTcxMjhlMDA0OWFmZj9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.eOeMwGQQOWU5h16KYArESMkmfFVxlqYifR_qHTyGCBQ"
            class="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full" />
          <span class="flex flex-col flex-grow pl-3">
            <h2 class="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              SAIRAM N
              <span href="#" class="font-semibold text-gray-500 lg:mb-0">&nbsp; sendIM's ADMIN </span>
            </h2>
          </span>
        </a>
      </div>
      <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 rounded-xl">
        <div>
          <img class="object-cover object-center mx-auto rounded-lg" alt="hero"
            src={img} />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default H3;