import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const H5 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section className="sm:py-8 md:py-8 lg:py-26 pt-12" ref={ref}>
      <div className="container">
        <h1 className="text-center text-4xl font-semibold lg:text-6xl">
          Lightning-fast messaging with real-time chat updates.
        </h1>
        <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
          <div className="text-center">
            <p className="text-sm font-medium text-zinc-600">Messages delivered in</p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10">
              {inView && <CountUp start={0} end={0.5} duration={2} />} sec
            </p>
            <p className="text-2xl font-semibold text-zinc-600">for instant communication</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-zinc-600">Real-time connections for</p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10">
              {inView && <CountUp start={0} end={1000} duration={2} suffix="+" />}
            </p>
            <p className="text-2xl font-semibold text-zinc-600">active users every day</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-zinc-600">Your messages reach recipients</p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10">
              {inView && <CountUp start={0} end={99} duration={2} suffix="%" />}
            </p>
            <p className="text-2xl font-semibold text-zinc-600">without delay</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default H5;