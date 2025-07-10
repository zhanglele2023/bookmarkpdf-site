import Link from 'next/link'

export default function AIInnovationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              The Future of AI Innovation: Transforming Tomorrow
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Exploring how artificial intelligence is reshaping industries, creating new possibilities, and defining the next era of human-machine collaboration.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">The AI Revolution Is Here</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We stand at the precipice of a technological revolution that promises to fundamentally alter how we work, create, and solve complex problems. Artificial Intelligence has evolved from a concept in science fiction to a practical tool that's already transforming every aspect of our daily lives.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                From healthcare diagnostics that can detect diseases earlier than ever before, to autonomous vehicles that promise safer roads, AI is not just changing individual industries—it's creating entirely new paradigms for human potential.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Breakthrough Applications</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Healthcare Innovation</h3>
                  <p className="text-slate-700">
                    AI-powered diagnostic tools are revolutionizing medical care, enabling early detection of cancers, predicting patient outcomes, and personalizing treatment plans with unprecedented precision.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Climate Solutions</h3>
                  <p className="text-slate-700">
                    Machine learning algorithms are optimizing energy grids, predicting weather patterns, and developing new materials for sustainable technology, playing a crucial role in addressing climate change.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">The Creative Renaissance</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Perhaps most surprisingly, AI is becoming a powerful ally in creative endeavors. From generating art and music to assisting writers and filmmakers, AI tools are democratizing creative expression and pushing the boundaries of what's possible in human creativity.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                This isn't about replacing human creativity—it's about amplifying it. AI serves as a collaborative partner, helping artists explore new possibilities, overcome creative blocks, and bring their visions to life in ways previously unimaginable.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Ethical Considerations and Responsible Development</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                With great power comes great responsibility. As AI becomes more integrated into society, we must address critical questions about privacy, bias, job displacement, and the concentration of AI capabilities among a few organizations.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The future of AI innovation isn't just about technological advancement—it's about ensuring that these powerful tools benefit all of humanity while minimizing potential harm. This requires collaboration between technologists, policymakers, ethicists, and society at large.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Looking Ahead</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The next decade will likely see AI become as ubiquitous as the internet is today. We're moving toward a future where AI assistants will help us make better decisions, where personalized education will adapt to each student's learning style, and where scientific discoveries will be accelerated by AI-human collaboration.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The question isn't whether AI will transform our world—it's how we'll shape that transformation to create a future that enhances human flourishing, creativity, and connection.
              </p>
            </section>
          </div>

          <footer className="mt-12 pt-8 border-t border-slate-200">
            <div className="text-center">
              <Link 
                href="/"
                className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Return to Home
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  )
}