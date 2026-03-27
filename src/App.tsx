function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        
        <img
          src="/profile.png"
          alt="Jayraj"
          className="w-40 h-40 rounded-full mb-6 object-cover object-top border-2 border-gray-700"
        />

        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm Jayraj
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mt-4">
          Node.js Backend Engineer
        </p>

        <p className="text-gray-500 mt-6 max-w-xl">
          I build scalable REST APIs, authentication systems, and payment integrations using Node.js, Express, MongoDB, and AWS.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300"
          >
            View Projects
          </a>

         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jayrajrao15@gmail.com"
  target="_blank"
  className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black"
>
  Contact Me
</a>

          <a
            href="/Jayraj-Rao-Resume.pdf"
            download
            className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black"
          >
            Download CV
          </a>
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 p-4 rounded hover:bg-gray-800">Node.js</div>
          <div className="bg-gray-900 p-4 rounded hover:bg-gray-800">Express.js</div>
          <div className="bg-gray-900 p-4 rounded hover:bg-gray-800">MongoDB</div>
          <div className="bg-gray-900 p-4 rounded hover:bg-gray-800">AWS (EC2, S3)</div>
          <div className="bg-gray-900 p-4 rounded hover:bg-gray-800">Docker</div>
          <div className="bg-gray-900 p-4 rounded hover:bg-gray-800">JWT / Auth</div>
        </div>
      </section>




    {/* Experience Section */}
<section className="py-16 text-center">
  <h2 className="text-3xl font-bold mb-10">Experience</h2>

  <div className="max-w-3xl mx-auto text-left space-y-6">

    {/* Main Job */}
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold">
        Software Development Engineer (Backend)
      </h3>

      <p className="text-gray-400 mb-1">
        TimeDiginitor Build Pvt. Ltd. • Pune
      </p>

      <p className="text-gray-500 mb-4">
        Sep 2024 – Apr 2025
      </p>

      <ul className="list-disc pl-5 text-gray-400 space-y-2">
        <li>Developed 15+ REST APIs for authentication, subscriptions, and business services</li>
        <li>Implemented JWT authentication with refresh tokens and RBAC authorization</li>
        <li>Integrated Razorpay payments with secure webhook handling</li>
        <li>Deployed Dockerized backend services on AWS EC2 with CI/CD pipelines</li>
        <li>Optimized MongoDB queries, improving API performance by ~40%</li>
      </ul>
    </div>

    {/* Internship */}
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold">
        MERN Stack Intern
      </h3>

      <p className="text-gray-400 mb-1">
        PN Infosys • Gwalior
      </p>

      <p className="text-gray-500 mb-4">
        Jan 2023 – Jan 2024
      </p>

      <ul className="list-disc pl-5 text-gray-400 space-y-2">
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
  <h2 className="text-3xl font-bold mb-10">Projects</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

    {/* Blog Project */}
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300">
      <img src="/blog.png" className="w-full h-48 object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-xl font-semibold mb-2">Blog Platform</h3>
        <p className="text-gray-400 mb-3">
          Full-stack blog app with authentication and content management.
        </p>
        <div className="flex gap-3">
          <a href="https://blog-p1v6.onrender.com/" target="_blank" className="bg-white text-black px-4 py-2 rounded">
            Live
          </a>
          <a href="https://github.com/jayrajrao" target="_blank" className="border border-white px-4 py-2 rounded">
            Code
          </a>
        </div>
      </div>
    </div>

    {/* Ecommerce Frontend */}
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
      <img src="/ecommerce.png" className="w-full h-48 object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-xl font-semibold mb-2">E-commerce Frontend</h3>
        <p className="text-gray-400 mb-3">
          MERN-based e-commerce UI with cart and product system.
        </p>
        <div className="flex gap-3">
          <a href="https://ecommerce-frontend-kappa-navy.vercel.app/" target="_blank" className="bg-white text-black px-4 py-2 rounded">
            Live
          </a>
          <a href="https://github.com/jayrajrao" target="_blank" className="border border-white px-4 py-2 rounded">
            Code
          </a>
        </div>
      </div>
    </div>

    {/* Course Platform */}
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
      <img src="/course.png" className="w-full h-48 object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-xl font-semibold mb-2">Course Platform</h3>
        <p className="text-gray-400 mb-3">
          Backend system for course management and user access.
        </p>
        <div className="flex gap-3">
          <a href="https://portal-nsms.onrender.com" target="_blank" className="bg-white text-black px-4 py-2 rounded">
            Live
          </a>
          <a href="https://github.com/jayrajrao" target="_blank" className="border border-white px-4 py-2 rounded">
            Code
          </a>
        </div>
      </div>
    </div>

    {/* Backend API */}
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
      <img src="/api.png" className="w-full h-48 object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-xl font-semibold mb-2">E-commerce Backend API</h3>
        <p className="text-gray-400 mb-3">
          Scalable REST API with authentication and Razorpay integration.
        </p>
        <div className="flex gap-3">
          <a href="https://ecom-api-fjf3.onrender.com" target="_blank" className="bg-white text-black px-4 py-2 rounded">
            Live
          </a>
          <a href="https://github.com/jayrajrao" target="_blank" className="border border-white px-4 py-2 rounded">
            Code
          </a>
        </div>
      </div>
    </div>

    {/* Production App */}
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
      <img src="/company.png" className="w-full h-48 object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-xl font-semibold mb-2">
          Production App (Backend Contribution)
        </h3>
        <p className="text-gray-400 mb-3">
          Worked on backend APIs, authentication, and core features for a live production application.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Tech: Node.js, Express, MongoDB
        </p>
        <div className="flex gap-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.timedignitorbuilt.everyoneatservice&hl=en"
            target="_blank"
            className="bg-white text-black px-4 py-2 rounded"
          >
            Live App
          </a>
          <span className="border border-white px-4 py-2 rounded">
            Team Project
          </span>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* Contact Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-400 mb-6">
          I'm open to backend developer roles and exciting opportunities.
        </p>

        <p className="mb-2">📧 jayrajrao15@gmail.com</p>
        <p className="mb-6">📞 +91 8269543853</p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://github.com/jayrajrao" target="_blank" className="border border-white px-5 py-2 rounded hover:bg-white hover:text-black">
            GitHub
          </a>

          <a href="https://linkedin.com/in/jayraj-rao-b452b4273" target="_blank" className="border border-white px-5 py-2 rounded hover:bg-white hover:text-black">
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;