type Props = {
  title: string;
  subtitle?: string;
  url?: string;
};

export default function ResumeTitle({ title, subtitle, url }: Props) {
  return (
    <>
      <p className="mt-2">
        <strong>
          {!url ? (
            <>
              {title} {subtitle && <> — {subtitle}</>}
            </>
          ) : (
            <>
              <a href={url} className="underline" target="_blank">
                {title}
              </a>{" "}
              — {subtitle}
            </>
          )}
        </strong>
      </p>
    </>
  );
}
