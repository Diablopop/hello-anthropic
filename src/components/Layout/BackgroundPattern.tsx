export default function BackgroundPattern() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: `url(/assets/bg-image-seamless.webp)`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundColor: '#000',
      }}
    />
  );
}
