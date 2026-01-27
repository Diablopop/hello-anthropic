import BackgroundPattern from './components/Layout/BackgroundPattern';
import TerminalContainer from './components/Layout/TerminalContainer';
import Logo from './components/Logo';
import ScrollArrow from './components/ScrollArrow';
import CTA from './components/CTA';
import TrackerCard from './components/TrackerCard/TrackerCard';
import TrackerDrawer from './components/TrackerCard/TrackerDrawer';
import PrototypeViewer from './components/PrototypeViewer/PrototypeViewer';
import { SOCIAL_LINKS, RESUME_FILENAME } from './utils/constants';

function App() {
  return (
    <>
      <BackgroundPattern />
      <TrackerCard />
      <TrackerDrawer />
      <TerminalContainer>
        <div className="space-y-8">
          {/* Logo */}
          <Logo />

          {/* Terminal Header */}
          <div className="text-terminal-green terminal-glow">
            <pre className="text-base sm:text-lg">
{`╔══════════════════════════════════╗
║        HELLO, ANTHROPIC          ║
╚══════════════════════════════════╝`}
            </pre>
          </div>

          {/* Introduction Section */}
          <section className="space-y-6 text-terminal-green">
            <p className="text-xl sm:text-2xl terminal-glow">
              INTRODUCTION
            </p>
            <div className="ml-4 space-y-4">
              <p className="text-lg sm:text-xl">
               My name is Andrew, and I'm applying for the role of
                "Product Manager, Claude Code Growth."
              </p>
              <p className="text-base sm:text-lg opacity-90">
                I've spent the past few years at the intersection of product,
                growth, and developer tools. Claude Code represents something
                special—a chance to shape how millions of developers will
                work with AI.
              </p>
              <p className="text-base sm:text-lg">
                I'm also a HUGE Claude Code enthusiast.
              </p>
              <p className="text-base sm:text-lg">
                Claude Code is already changing how engineering teams work, but I believe it will also change how EVERYONE ELSE works.
                In fact, I just wrote an article about it.
              </p>
            </div>
          </section>

          <ScrollArrow />

          {/* Why This Role Section */}
          <section className="space-y-6 text-terminal-green">
            <p className="text-xl sm:text-2xl terminal-glow">
              WHY ME
            </p>
            <div className="ml-4 space-y-4 text-base sm:text-lg opacity-90">
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
            <p className="text-xl sm:text-2xl terminal-glow">
              VISION
            </p>
            <div className="ml-4 space-y-6 text-base sm:text-lg opacity-90">

              <p>
                I've been so inspired, I started designing a Claude Code enterprise B2B product that could help non-engineers use the incredible power of persistent context and MCPs.
                Please explore the screens.
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>Onboarding improvements</li>
                <li>Feature discovery enhancements</li>
                <li>Collaboration workflows</li>
                <li>Growth opportunities</li>
              </ul>
            </div>

            {/* Prototype Viewer */}
            <div className="mt-8">
              <PrototypeViewer />
            </div>
          </section>

          <ScrollArrow />

          {/* CTAs Section */}
          <section className="space-y-6 text-terminal-green pt-8 border-t border-terminal-green/30">
            <p className="text-xl sm:text-2xl terminal-glow">
              GET IN TOUCH
            </p>
            <div className="ml-4 space-y-4">
              <div className="flex flex-wrap gap-4">
                <CTA href={SOCIAL_LINKS.linkedin}>
                  LinkedIn
                </CTA>
                <CTA href={SOCIAL_LINKS.professional}>
                  Personal Site
                </CTA>
                <CTA href={SOCIAL_LINKS.github}>
                  GitHub
                </CTA>
                <CTA href="/assets/resume.pdf" download={RESUME_FILENAME}>
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
