import BackgroundPattern from './components/Layout/BackgroundPattern';
import TerminalContainer from './components/Layout/TerminalContainer';
import Logo from './components/Logo';
import ScrollArrow from './components/ScrollArrow';
import CTA from './components/CTA';

function App() {
  return (
    <>
      <BackgroundPattern />
      <TerminalContainer>
        <div className="space-y-8">
          {/* Logo */}
          <Logo />

          {/* Terminal Header */}
          <div className="text-terminal-green terminal-glow">
            <pre className="text-sm sm:text-base">
{`╔══════════════════════════════════════════════════════════╗
║           ANTHROPIC - CLAUDE CODE PITCH v1.0            ║
╚══════════════════════════════════════════════════════════╝`}
            </pre>
          </div>

          {/* Introduction Section */}
          <section className="space-y-6 text-terminal-green">
            <p className="text-lg sm:text-xl terminal-glow">
              $ ./introduce.sh
            </p>
            <div className="ml-4 space-y-4">
              <p className="text-base sm:text-lg">
                Hello, Anthropic.
              </p>
              <p className="text-base sm:text-lg">
                My name is Andrew Schauer, and I'm applying for the role of
                Product Manager, Claude Code Growth.
              </p>
              <p className="text-sm sm:text-base opacity-90">
                I've spent the past few years at the intersection of product,
                growth, and developer tools. Claude Code represents something
                special—a chance to shape how millions of developers will
                work with AI.
              </p>
            </div>
          </section>

          <ScrollArrow />

          {/* Why This Role Section */}
          <section className="space-y-6 text-terminal-green">
            <p className="text-lg sm:text-xl terminal-glow">
              $ cat why_this_role.txt
            </p>
            <div className="ml-4 space-y-4 text-sm sm:text-base opacity-90">
              <p>
                [PLACEHOLDER: Add your compelling copy about why you're
                interested in this specific role and what you bring to the table]
              </p>
              <p>
                This could cover:
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>Your product philosophy</li>
                <li>Relevant experience with developer tools</li>
                <li>Understanding of AI's impact on development workflows</li>
                <li>Vision for Claude Code's growth</li>
              </ul>
            </div>
          </section>

          <ScrollArrow />

          {/* Vision Section */}
          <section className="space-y-6 text-terminal-green">
            <p className="text-lg sm:text-xl terminal-glow">
              $ ./show_vision.sh
            </p>
            <div className="ml-4 space-y-4 text-sm sm:text-base opacity-90">
              <p>
                I've put together some thoughts on how Claude Code could evolve.
                Check out the interactive prototype below to see concepts for:
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>Onboarding improvements</li>
                <li>Feature discovery enhancements</li>
                <li>Collaboration workflows</li>
                <li>Growth opportunities</li>
              </ul>
              <p className="text-xs opacity-70 mt-4">
                [Prototype viewer will be added here in Milestone 3]
              </p>
            </div>
          </section>

          <ScrollArrow />

          {/* CTAs Section */}
          <section className="space-y-6 text-terminal-green pt-8 border-t border-terminal-green/30">
            <p className="text-lg sm:text-xl terminal-glow">
              $ ls -la ./connect
            </p>
            <div className="ml-4 space-y-4">
              <div className="flex flex-wrap gap-4">
                <CTA href="https://linkedin.com/in/yourprofile">
                  LinkedIn
                </CTA>
                <CTA href="https://github.com/yourusername">
                  GitHub
                </CTA>
                <CTA href="/assets/resume.pdf" download="Andrew_Schauer_Resume.pdf">
                  Download Resume
                </CTA>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-6 border-t border-terminal-green/30">
            <p className="text-xs opacity-70">
              Status: READY | Time: {new Date().toLocaleString()} |
              Location: ./anthropic_pitch | Built with Claude Code
            </p>
          </footer>
        </div>
      </TerminalContainer>
    </>
  );
}

export default App;
