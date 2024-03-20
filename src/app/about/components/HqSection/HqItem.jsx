export default function HqItem({ title, address, phone, icon }) {
  return (
    <div>
      {icon}
      <h3>{title}</h3>
      {Object.values(address).map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
      <p>{phone}</p>
    </div>
  );
}
