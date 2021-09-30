const VillainButton = (props) => {
  return (
    <div>
      <button className="app-btn" onClick={props.toggleVillain}>
        Villains
      </button>
    </div>
  );
};
