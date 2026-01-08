import menuData from "./menu.json";

const HappyHourBadge = () => {
  const { happyHour } = menuData;
  return (
    (!happyHour.isDisabled) && (<div className="happy-hour-badge" title="Happy Hour">
      <p>🍻 Happy Hour en cervezas</p>
      <p className="important">2x1</p>
      <p className="description">{happyHour.description}</p>
    </div>)
  );
}
export default HappyHourBadge;