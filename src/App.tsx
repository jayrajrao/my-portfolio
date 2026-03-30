function App() {
  return (
    <div className="min-h-screen text-white bg-black">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen px-4 text-center">
        
        <img
          src="/profile.png"
          alt="Jayraj"
          className="object-cover object-top w-40 h-40 mb-6 border-2 border-gray-700 rounded-full"
        />

        <h1 className="text-5xl font-bold md:text-6xl">
          Hi, I'm Jayraj
        </h1>

        <p className="mt-4 text-xl text-gray-400 md:text-2xl">
          Node.js Backend Engineer
        </p>

        <p className="max-w-xl mt-6 text-gray-500">
          I build scalable REST APIs, authentication systems, and payment integrations using Node.js, Express, MongoDB, and AWS.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-2 font-semibold text-black bg-white rounded hover:bg-gray-300"
          >
            View Projects
          </a>

         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jayrajrao15@gmail.com"
  target="_blank"
  className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black"
>
  Contact Me
</a>

          <a
            href="/Jayraj-Rao-Resume.pdf"
            download
            className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black"
          >
            Download CV
          </a>
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-16 text-center">
        <h2 className="mb-10 text-3xl font-bold">Skills</h2>

        <div className="grid max-w-4xl grid-cols-2 gap-6 px-4 mx-auto md:grid-cols-3">
          <div className="p-4 bg-gray-900 rounded hover:bg-gray-800">Node.js</div>
          <div className="p-4 bg-gray-900 rounded hover:bg-gray-800">Express.js</div>
          <div className="p-4 bg-gray-900 rounded hover:bg-gray-800">MongoDB</div>
          <div className="p-4 bg-gray-900 rounded hover:bg-gray-800">AWS (EC2, S3)</div>
          <div className="p-4 bg-gray-900 rounded hover:bg-gray-800">Docker</div>
          <div className="p-4 bg-gray-900 rounded hover:bg-gray-800">JWT / Auth</div>
        </div>
      </section>




    {/* Experience Section */}
<section className="py-16 text-center">
  <h2 className="mb-10 text-3xl font-bold">Experience</h2>

  <div className="max-w-3xl mx-auto space-y-6 text-left">

    {/* Main Job */}
    <div className="p-6 bg-gray-900 shadow-lg rounded-xl">
      <h3 className="text-xl font-semibold">
        Software Development Engineer (Backend)
      </h3>

      <p className="mb-1 text-gray-400">
        TimeDiginitor Build Pvt. Ltd. • Pune
      </p>

      <p className="mb-4 text-gray-500">
        Sep 2024 – Apr 2025
      </p>

      <ul className="pl-5 space-y-2 text-gray-400 list-disc">
        <li>Developed 15+ REST APIs for authentication, subscriptions, and business services</li>
        <li>Implemented JWT authentication with refresh tokens and RBAC authorization</li>
        <li>Integrated Razorpay payments with secure webhook handling</li>
        <li>Deployed Dockerized backend services on AWS EC2 with CI/CD pipelines</li>
        <li>Optimized MongoDB queries, improving API performance by ~40%</li>
      </ul>
    </div>

    {/* Internship */}
    <div className="p-6 bg-gray-900 shadow-lg rounded-xl">
      <h3 className="text-xl font-semibold">
        MERN Stack Intern
      </h3>

      <p className="mb-1 text-gray-400">
        PN Infosys • Gwalior
      </p>

      <p className="mb-4 text-gray-500">
        Jan 2023 – Jan 2024
      </p>

      <ul className="pl-5 space-y-2 text-gray-400 list-disc">
        <li>Built backend services using Node.js and MongoDB</li>
        <li>Developed REST APIs for e-commerce and real-time applications</li>
        <li>Integrated Stripe payments with secure checkout workflows</li>
        <li>Implemented real-time chat using Socket.io and JWT authentication</li>
      </ul>
    </div>

  </div>
</section>

  {/* Projects Section */}
<section id="projects" className="py-16 text-center">
  <h2 className="mb-10 text-3xl font-bold">Projects</h2>

  <div className="grid max-w-6xl gap-8 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3">

    {/* Blog Project */}
    <div className="overflow-hidden transition duration-300 bg-gray-900 rounded-xl hover:scale-105 hover:shadow-2xl">
      <img src="/blog.png" className="object-cover w-full h-48" />
      <div className="p-5 text-left">
        <h3 className="mb-2 text-xl font-semibold">Blog Platform</h3>
        <p className="mb-3 text-gray-400">
          Full-stack blog app with authentication and content management.
        </p>
        <div className="flex gap-3">
          <a href="https://blog-p1v6.onrender.com/" target="_blank" className="px-4 py-2 text-black bg-white rounded">
            Live
          </a>
          <a href="https://github.com/jayrajrao" target="_blank" className="px-4 py-2 border border-white rounded">
            Code
          </a>
        </div>
      </div>
    </div>

    {/* Ecommerce Frontend */}
    <div className="overflow-hidden transition duration-300 bg-gray-900 shadow-lg rounded-xl hover:scale-105">
      <img src="/ecommerce.png" className="object-cover w-full h-48" />
      <div className="p-5 text-left">
        <h3 className="mb-2 text-xl font-semibold">E-commerce Frontend</h3>
        <p className="mb-3 text-gray-400">
          MERN-based e-commerce UI with cart and product system.
        </p>
        <div className="flex gap-3">
          <a href="https://ecommerce-frontend-kappa-navy.vercel.app/" target="_blank" className="px-4 py-2 text-black bg-white rounded">
            Live
          </a>
          <a href="https://github.com/jayrajrao" target="_blank" className="px-4 py-2 border border-white rounded">
            Code
          </a>
        </div>
      </div>
    </div>

    {/* Course Platform */}
    <div className="overflow-hidden transition duration-300 bg-gray-900 shadow-lg rounded-xl hover:scale-105">
      <img src="/course.png" className="object-cover w-full h-48" />
      <div className="p-5 text-left">
        <h3 className="mb-2 text-xl font-semibold">Course Platform</h3>
        <p className="mb-3 text-gray-400">
          Backend system for course management and user access.
        </p>
        <div className="flex gap-3">
          <a href="https://portal-nsms.onrender.com" target="_blank" className="px-4 py-2 text-black bg-white rounded">
            Live
          </a>
          <a href="https://github.com/jayrajrao" target="_blank" className="px-4 py-2 border border-white rounded">
            Code
          </a>
        </div>
      </div>
    </div>

    {/* Backend API */}
    <div className="overflow-hidden transition duration-300 bg-gray-900 shadow-lg rounded-xl hover:scale-105">
      <img src="/api.png" className="object-cover w-full h-48" />
      <div className="p-5 text-left">
        <h3 className="mb-2 text-xl font-semibold">E-commerce Backend API</h3>
        <p className="mb-3 text-gray-400">
          Scalable REST API with authentication and Razorpay integration.
        </p>
        <div className="flex gap-3">
          <a href="https://ecom-api-fjf3.onrender.com" target="_blank" className="px-4 py-2 text-black bg-white rounded">
            Live
          </a>
          <a href="https://github.com/jayrajrao" target="_blank" className="px-4 py-2 border border-white rounded">
            Code
          </a>
        </div>
      </div>
    </div>

    {/* Production App
    <div className="overflow-hidden transition duration-300 bg-gray-900 shadow-lg rounded-xl hover:scale-105">
      <img src="/company.png" className="object-cover w-full h-48" />
      <div className="p-5 text-left">
        <h3 className="mb-2 text-xl font-semibold">
          Production App (Backend Contribution)
        </h3>
        <p className="mb-3 text-gray-400">
          Worked on backend APIs, authentication, and core features for a live production application.
        </p>
        <p className="mb-4 text-sm text-gray-500">
          Tech: Node.js, Express, MongoDB
        </p>
        <div className="flex gap-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.timedignitorbuilt.everyoneatservice&hl=en"
            target="_blank"
            className="px-4 py-2 text-black bg-white rounded"
          >
            Live App
          </a>
          <span className="px-4 py-2 border border-white rounded">
            Team Project
          </span>
        </div>
      </div>
    </div> */}
{/* Production App */}
<div className="overflow-hidden transition duration-300 bg-gray-900 shadow-lg rounded-xl hover:scale-105">
  <img src="/company.png" className="object-cover w-full h-48" />
  <div className="p-5 text-left">
    <h3 className="mb-2 text-xl font-semibold">
      Production Application (Backend Contribution)
    </h3>

    <p className="mb-3 text-gray-400">
      Contributed to backend APIs, authentication, and core features for a live production system.
      Worked on performance improvements and real-world deployment.
    </p>

    <p className="mb-4 text-sm text-gray-500">
      Tech: Node.js, Express.js, MongoDB
    </p>

    <div className="flex gap-3">
      <span className="px-4 py-2 border border-white rounded">
        Production Experience
      </span>
      <span className="px-4 py-2 border border-white rounded">
        Team Project
      </span>
    </div>
  </div>
</div>
  </div>
</section>

      {/* Contact Section */}
      <section className="py-16 text-center">
        <h2 className="mb-6 text-3xl font-bold">Contact</h2>

        <p className="mb-6 text-gray-400">
          I'm open to backend developer roles and exciting opportunities.
        </p>

        <p className="mb-2">📧 jayrajrao15@gmail.com</p>
        <p className="mb-6">📞 +91 8269543853</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/jayrajrao" target="_blank" className="px-5 py-2 border border-white rounded hover:bg-white hover:text-black">
            GitHub
          </a>

          <a href="https://linkedin.com/in/jayraj-rao-b452b4273" target="_blank" className="px-5 py-2 border border-white rounded hover:bg-white hover:text-black">
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;