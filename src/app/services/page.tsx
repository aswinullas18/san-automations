export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example service cards – reuse from earlier or expand */}
          <div className="p-8 bg-white rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">Industrial Automation</h3>
            <p>PLC, SCADA, DCS, robotics, welding fixtures, VMC clamping, SPM machines</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">Conveyors</h3>
            <p>PVC Belt, Flexible Roller, Chain, Magnetic Conveyors</p>
          </div>
          {/* Add more services here */}
        </div>
      </div>
    </div>
  );
}