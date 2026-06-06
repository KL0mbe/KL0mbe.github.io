type Props = {
  title: string;
  children?: React.ReactNode;
};

function ResumeSection({ title, children }: Props) {
  return (
    <div>
      <h2 className="font-bold text-base mb-1">{title}</h2>
      {children}
    </div>
  );
}

export default ResumeSection;
