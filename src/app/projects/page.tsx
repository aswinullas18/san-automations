export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Projects
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reuse or expand from earlier projects */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3">Automotive Welding Automation</h3>
            <p>Robotic welding fixture system – 35% cycle time reduction</p>
          </div>
          {/* Add more project cards */}
        </div>
      </div>
    </div>
  );
}