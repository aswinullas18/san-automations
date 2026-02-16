export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} San Automations. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">
          Industrial Automation | PLC • SCADA • DCS • Instrumentation
        </p>
      </div>
    </footer>
  );
}