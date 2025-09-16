export default function HomeCard({ src, alt }) {
  return (
    <div className="bg-white h-50 w-full flex items-center justify-center rounded-[14px] shadow-sm">
      <img src={src} alt={alt} className="max-h-16 max-w-[120px] object-contain" />
    </div>
  );
}
