import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/home.css'

const Vision = () => {
  return (
    <div>
      <Navbar />
      <h1 className='main-mission-heading'>Mission and Vision</h1>

      <section className='mission'>
        <h2 className='2nd-mission-heading'>Mission statement</h2>
        <p className='about-mission'>Our mission is to provide quality education that develops knowledge, creativity, critical thinking, and practical skills. We aim to create an inclusive and inspiring learning environment where students can discover their potential, become responsible citizens, and prepare confidently for successful careers and meaningful contributions to society.</p>
        <h3>Mission Anchor Points</h3>
      <p>
          There are 6 Missional Anchor Points, which keep us grounded in our identity and calling.

Booth University College is committed to:

Being a Christ-centred, educational community devoted to holistic student, staff, and faculty support, the identity and Mission of The Salvation Army, the city of Winnipeg, and beyond.
Producing graduates who embody faith, think deeply and creatively, are global citizens, and work toward justice, reconciliation, restoration, and equity in our world.
Attracting, developing, and investing in faculty and staff who are people-focused, Mission-centred, agents of hope and change, and committed to justice, equity, diversity, and inclusion.
Designing, cultivating, and integrating academic courses and programs that align with our identity and Mission, have clear articulation pathways, and are constantly striving toward relevancy, innovation, and excellence.
Building strong relationships with like-Missioned organizations that help each other better fulfil their missions.
Improving and maintaining organizational effectiveness across all areas (governance, academics, finances, operations, and asset management), while still putting people, identity, and Mission first.
        </p>
      </section>

      <section className='stratgy'>
        <h2 className='stratgy-heading'>Strategic Plan</h2>
        <h3>Toward a Flourishing Future</h3>
        <p>Booth University College is in a season of transformation. As a community, we have recounted our story, reinforced our mission, reclaimed our calling, reshaped our strategy, and re-envisioned our goals. This document provides an overview of this work and plots a course toward a flourishing future. Additionally, it extends an invitation to participate with us in bringing this vision to fruition.</p>
      </section>
    </div>
  )
}

export default Vision

