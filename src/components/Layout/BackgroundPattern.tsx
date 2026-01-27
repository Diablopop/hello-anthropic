interface BackgroundPatternProps {
  patternUrl?: string;
}

export default function BackgroundPattern({ patternUrl }: BackgroundPatternProps) {
  if (!patternUrl) {
    return (
      <div className="fixed inset-0 -z-10 bg-black" />
    );
  }

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: `url(${patternUrl})`,
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'auto',
      }}
    />
  );
}
