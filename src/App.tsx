import BackgroundPattern from './components/Layout/BackgroundPattern';
import TerminalContainer from './components/Layout/TerminalContainer';

function App() {
  return (
    <>
      <BackgroundPattern />
      <TerminalContainer>
        <div className="space-y-8">
          {/* Terminal Header */}
          <div className="text-terminal-green terminal-glow">
            <pre className="text-sm sm:text-base">
{`╔══════════════════════════════════════════════════════════╗
║           ANTHROPIC - CLAUDE CODE PITCH v1.0            ║
╚══════════════════════════════════════════════════════════╝`}
            </pre>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-terminal-green">
            <p className="text-lg sm:text-xl terminal-glow">
              $ ./introduce.sh
            </p>
            <div className="ml-4 space-y-4">
              <p>Hello, Anthropic.</p>
              <p>
                My name is Andrew Schauer, and I'm applying for the role of
                Product Manager, Claude Code Growth.
              </p>
              <p>
                [PLACEHOLDER: Terminal-style copy describing interest in role
                and product vision]
              </p>
            </div>

            <div className="pt-6 border-t border-terminal-green/30">
              <p className="text-sm opacity-70">
                Status: READY | Time: {new Date().toLocaleString()} |
                Location: ./anthropic_pitch
              </p>
            </div>
          </div>
        </div>
      </TerminalContainer>
    </>
  );
}

export default App;
