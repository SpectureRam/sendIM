import React from 'react'

const H4 = () => {
  return (
    <section>
  <div class="container p-20">
    <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
      <div class="p-6">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-message-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M9 9h6M9 12h6M9 15h6"></path>
          </svg>
        </div>
        <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-600 lg:text-3xl">Real-Time Messaging</h1>
        <p class="mx-auto text-base leading-relaxed text-gray-500">Enjoy seamless, real-time messaging with Socket.IO. Your messages appear instantly, enabling dynamic conversations.</p>
        <div class="mt-4">
          <a href="#features" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-gray-600" title="learn more"> Learn More » </a>
        </div>
      </div>
      <div class="p-6">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <circle cx="17" cy="7" r="4"></circle>
            <path d="M5 20c0-4 3-6 7-6s7 2 7 6"></path>
          </svg>
        </div>
        <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-600 lg:text-3xl">Group Chats</h1>
        <p class="mx-auto text-base leading-relaxed text-gray-500">Create or join group chats with friends or colleagues. Share ideas, make decisions, and collaborate with ease.</p>
        <div class="mt-4">
          <a href="#features" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-gray-600" title="learn more"> Learn More » </a>
        </div>
      </div>
        <div class="p-6">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 3h18v12H3z"></path>
        <path d="M3 9h18"></path>
        <path d="M9 15l3 3l3 -3"></path>
        </svg>
    </div>
    <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-600 lg:text-3xl">Private Direct Messaging</h1>
    <p class="mx-auto text-base leading-relaxed text-gray-500">Connect privately with any user in your chat room. Send and receive one-on-one messages, share files, and have private conversations in real time.</p>
    <div class="mt-4">
        <a href="#private-chat" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-gray-600" title="learn more"> Learn More » </a>
    </div>
</div>

    </div>
  </div>
</section>
  )
}

export default H4;