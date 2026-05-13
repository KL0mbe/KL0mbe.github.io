export default function BulletPoint({ text }: { text: string }) {
  return (
    <div className="flex gap-2 mt-1">
      <span>•</span>
      <p>{text}</p>
    </div>
  );
}
