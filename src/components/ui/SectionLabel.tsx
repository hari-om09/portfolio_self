interface Props {
  index: string;
  text: string;
}

export function SectionLabel({ index, text }: Props) {
  return (
    <p className="section-label">
      <span style={{ opacity: 0.5 }}>{`// ${index}.`}</span>{' '}
      {text}
    </p>
  );
}
