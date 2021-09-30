const HeroButton = () => {
  return (
    <div>
      <button className="app-btn" onClick={props.toggleHero}>
        Heroes
      </button>
    </div>
  );
};

export default HeroButton;
