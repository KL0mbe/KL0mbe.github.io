import PacoClock from "./PacoClock";

export default function MyFooter({ quote }: { quote: string }) {
  return (
    <footer className="border-t border-secondary text-textSecondary text-sm flex justify-center ">
      <div className="flex justify-between h-12 items-center w-160 mx-8">
        <p className="text-left">{quote}</p>
        <div className="flex gap-2 items-center">
          {new Date().getFullYear()}
          <PacoClock />
        </div>
      </div>
    </footer>
  );
}
