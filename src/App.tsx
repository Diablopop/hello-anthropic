import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
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
            <pre className="text-xl sm:text-2xl">
{`╔══════════════════════════╗
║     HELLO, ANTHROPIC     ║
╚══════════════════════════╝`}
            </pre>
          </div>

          {/* Introduction Section */}
          <section className="space-y-6 text-terminal-green">
            <div className="space-y-4">
              <p className="text-base sm:text-lg opacity-80">
                You've built something extraordinary in Claude Code. Now comes the work of growing and retaining the customer base.
              </p>
              <p className="text-base sm:text-lg opacity-80">
                For over 10 years, the focus of my career has been on building consumer confidence and telling compelling product stories. Recently, I led growth at Byte, helping the business achieve double-digit year-over-year growth. We optimized the funnel relentlessly by talking to customers, A/B testing, gathering insights, and developing stronger content.
              </p>
              <p className="text-base sm:text-lg opacity-80">
                Our decisions were based on data, and the partnership between design, product, and engineering led to incredible results. Byte's website reached over a million monthly visitors, and revenue nearly doubled during my time there. I've had successes with other brands too, but my experience isn't the only reason I'm suited for this role...
              </p>
              <p className="text-base sm:text-lg font-bold">
                I'm also a huge Claude Code enthusiast.
              </p>
              <p className="text-base sm:text-lg opacity-80">
                Claude Code is already changing how engineering teams work, but I believe it will soon change how everyone else works. In fact, I just wrote an article about it.
              </p>
            </div>

            {/* Article CTA with arrow */}
            <div className="flex items-center gap-4 mt-6">
              <CTA href={SOCIAL_LINKS.article}>
                Read the Article
              </CTA>
              <motion.img
                src="/assets/arrow-down-straight.svg"
                alt="Read article"
                className="h-8 w-8"
                style={{ rotate: '90deg' }}
                animate={{ x: [-5, 5, -5] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </section>

          {/* Inspiration Section */}
          <section className="space-y-6 text-terminal-green pt-8">
            <p className="text-xl sm:text-2xl terminal-glow">
              INSPIRATION
            </p>
            <div className="space-y-6 text-base sm:text-lg opacity-80">
              <p>
                I'm so excited by the opportunity Claude Code brings to the workplace that I started brainstorming an Anthropic B2B product that could help non-engineers use the incredible power of persistent context and connected systems.
              </p>
            </div>

            {/* Prototype Viewer */}
            <div className="mt-8">
              <PrototypeViewer />
            </div>

            <div className="text-base sm:text-lg opacity-80">
              <p>
                This may or may not be a worthwhile idea—only talking to customers can reveal that—but I believe Claude Code is perfectly positioned to accelerate Anthropic's already meteoric growth.
              </p>
            </div>
          </section>

          {/* CTAs Section */}
          <section className="space-y-6 text-terminal-green pt-8">
            <p className="text-xl sm:text-2xl terminal-glow">
              GET IN TOUCH
            </p>

            <div className="space-y-6">
              <div className="space-y-4 text-base sm:text-lg opacity-80">
                <p>
                  I think I'd be a great fit for this role. My experience crafting impactful product stories, optimizing purchase funnels, and fostering retention for brands can help Claude Code grow to the scale it rightfully deserves.
                </p>
                <p>
                  Thank you for your time.
                </p>
              </div>

              <ScrollArrow />

              <div className="sm:text-center -mt-4">
                <p className="text-base sm:text-lg font-bold">ANDREW SCHAUER</p>
                <p className="text-base sm:text-lg opacity-80">(213) 840-7168</p>
              </div>

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
                <CTA href="/assets/Andrew_Schauer_Anthropic_Resume.pdf" download={RESUME_FILENAME}>
                  Download Resume
                </CTA>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-6 border-t border-terminal-green/30">
            <p className="text-xs opacity-70">
              Status: READY | Time: {new Date().toLocaleString()} | Built with Claude Code
            </p>
          </footer>
        </div>
      </TerminalContainer>
      <Analytics />
    </>
  );
}

export default App;
