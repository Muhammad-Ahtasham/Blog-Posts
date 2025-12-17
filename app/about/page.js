import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/3.jpg"
                  alt="Profile"
                  // layout="fill"
                  // objectFit="cover"
                  className="rounded-full"
                  width={800} height={600}
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hi! I&apos;m Muhammad Ahtasham — an AI and Full Stack Engineer passionate about building intelligent systems and modern, scalable web applications. I work across Machine Learning, NLP, Generative AI, and full-stack development using tools like LangChain, Hugging Face, PyTorch, Node.js, and Next.js.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                I&apos;ve developed LLM-powered agents, RAG pipelines, chatbots, and high-performance web apps during my roles at Ocloud Solutions, ITSOLERA, and Musketeers Tech. I enjoy exploring new tech, solving real-world problems, and turning ideas into practical, production-ready solutions.
              </p>

              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                If you&apos;re interested in AI, full-stack engineering, or innovative digital experiences, you&apos;ll find my work aligned with those passions. Let&apos;s build something impactful together!
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether you&apos;re just starting out or looking to sharpen your skills, you&apos;ll find a variety of resources and insights here. Let&apos;s explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">ATIII{'\''}s Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              My journey as a coder has been shaped through hands-on experience, continuous learning, and real-world challenges across multiple companies. Each step in my career strengthened my skills and showed me new ways technology can solve meaningful problems.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image src="/1.jpg" alt="ATIII as a beginner" className="w-full rounded-lg shadow-lg" width={800} height={600} />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Musketeers Tech – Where It All Began</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Artificial Intelligence Intern | Lahore | June 2023 – August 2023
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  My coding journey took a major leap at Musketeers Tech, where I first stepped into the world of real AI development. I worked on Machine Learning, Deep Learning, NLP, and Computer Vision projects.
                  Here, I
                  <ul className="list-disc ml-6">
                    <li>built models for image classification, object detection, and segmentation</li>
                    <li>worked with NLP tasks like sentiment analysis, NER, and text classification</li>
                    <li>fine-tuned Hugging Face models on custom datasets</li>
                  </ul>
                  This role taught me the foundations of model training, experimentation, debugging, and how AI is used to solve real-world industry problems. It was the first time I saw code turn into something impactful.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image src="/2.jpg" alt="ATIII as AI Intern at ITSOLERA Pvt Ltd" width={800} height={600} className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">ITSOLERA Pvt Ltd – Learning to Build Real AI Solutions</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Artificial Intelligence Intern | Remote | July 2024 – October 2024
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  My next step was ITSOLERA, where I moved from basic experiments to designing complete AI-powered applications.
                  I developed:
                  <ul className="list-disc ml-6">
                    <li>an AI Story Generator using LLMs</li>
                    <li>a Fake Text Detection model using transformers and NLP pipelines</li>
                  </ul>
                  Here, I learned to build end-to-end ML workflows: data preprocessing, training, evaluation, and optimization. This role strengthened my problem-solving approach and helped me understand how AI can be blended into real business use cases.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image src="/3.jpg" width={800} height={600} alt="ATIII as Python Developer at Medtronix Systems" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Medtronix Systems – Becoming a Strong Python Backend Developer</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Python Developer | Sahiwal | June 2024 – November 2024
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  At Medtronix Systems, my journey expanded beyond AI into strong backend engineering. I worked onsite as a Python Developer, contributing to the development of scalable backend systems and REST APIs.
                  My key contributions included:
                  <ul className="list-disc ml-6">
                    <li>building and maintaining REST APIs for efficient data flow and integration</li>
                    <li>optimizing database queries and designing modular backend components</li>
                    <li>applying clean architecture and asynchronous processing for scalability</li>
                    <li>collaborating with AI and frontend teams for seamless system integration</li>
                    <li>ensuring stability, security, and maintainability across internal and client-facing applications</li>
                  </ul>
                  This experience strengthened my backend fundamentals and taught me how robust, production-grade systems are built from the ground up.
                </p>
              </div>
            </div>


            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image src="/4.jpg" alt="ATIII as Software Engineer at Ocloud Solutions" className="w-full rounded-lg shadow-lg" width={800} height={600} />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Ocloud Solutions – Becoming an AI & Full Stack Engineer</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Software Engineer – AI & Full Stack | Lahore | December 2024 – Present
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Ocloud Solutions became the place where my coding journey matured into full-stack engineering combined with advanced AI systems.
                  Here, I work with:
                  <ul className="list-disc ml-6">
                    <li>Node.js, Express.js, PostgreSQL, MongoDB for backend systems</li>
                    <li>React & Next.js (SSR/ISR) for high-performance frontends</li>
                    <li>LangChain, LangGraph, RAG, embeddings, vector databases for LLM-powered applications</li>
                  </ul>
                  I build microservices, intelligent automation pipelines, RAG chatbots, and end-to-end AI solutions for production. I learned how to design architecture, integrate AI into scalable systems, and collaborate across teams to deliver real products.

                  This role helped me combine everything I love — full-stack engineering, AI workflows, large language models, and building technology that solves actual user problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}