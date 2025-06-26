import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to 4AT.AI Accounts Payable Suite
      </h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        Revolutionizing AP with Artificial Intelligence. Intelligent Automation powered by Agentic AI.
      </p>

      <h2 style={{ marginTop: '2rem' }}>Our Modules:</h2>
      <ul style={{ fontSize: '1.1rem', marginLeft: '1rem' }}>
        <li><strong>4AT.AI Capture</strong> – Extract and classify invoice data using LLMs.</li>
        <li><strong>4AT.AI Orbit</strong> – End-to-end AP automation with GenAI & ML.</li>
        <li><strong>4AT.AI Insight</strong> – Detect anomalies and compliance risks in real time.</li>
        <li><strong>4AT.AI Nexus</strong> – Chat-based AP agent using conversational AI + ERP context.</li>
      </ul>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        Website under development. Contact us at info@4at.ai
      </p>
    </div>
  );
}

export default App;

