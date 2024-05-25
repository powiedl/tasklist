export default function StepList({ steps }) {
  return (
    <ul>
      {steps.map((s) => (
        <li>{s}</li>
      ))}
    </ul>
  );
}
