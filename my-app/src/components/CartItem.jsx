export default function CartItem({ item, onAdd, onRemove }) {
  return (
    <div style={{display: "flex", alignItems: "center", margin: "12px 0"}}>
      <img src={item.image} alt={item.name} style={{width: 60, marginRight: 16, borderRadius: 6}} />
      <div style={{flex: 1}}>
        <div>{item.name}</div>
        <div style={{color: "#aaa"}}>${item.price}</div>
      </div>
      <button onClick={() => onRemove(item.id)}>-</button>
      <span style={{margin: "0 8px"}}>{item.quantity}</span>
      <button onClick={() => onAdd(item.id)}>+</button>
    </div>
  );
}
