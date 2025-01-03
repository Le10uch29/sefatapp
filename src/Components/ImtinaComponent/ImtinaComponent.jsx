import "./ImtinaComponent.css";

export const ImtinaComponent = () => {
  return (
    <div className="sebeb-card">
      <h2 className="sebeb-title">Səbəb</h2>
      <textarea className="sebeb-area" placeholder="Səbəbini qeyd edin...." />
      <button className="btn">Göndərin</button>
    </div>
  );
};
