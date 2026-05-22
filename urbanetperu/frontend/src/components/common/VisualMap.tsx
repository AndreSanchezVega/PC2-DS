type MapPoint = {
  x: number;
  y: number;
};

type VisualMapProps = {
  selectedPoint?: MapPoint | null;
  onSelectPoint?: (point: MapPoint) => void;
  readonly?: boolean;
  height?: string;
};

function VisualMap({
  selectedPoint,
  onSelectPoint,
  readonly = false,
  height = "360px"
}: VisualMapProps) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (readonly || !onSelectPoint) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    const x = Number((((event.clientX - rect.left) / rect.width) * 100).toFixed(2));
    const y = Number((((event.clientY - rect.top) / rect.height) * 100).toFixed(2));

    onSelectPoint({ x, y });
  };

  return (
    <div
      className={`visual-map ${readonly ? "visual-map--readonly" : ""}`}
      style={{ height }}
      onClick={handleClick}
    >
      <svg className="visual-map__drawing" viewBox="0 0 1000 520" preserveAspectRatio="none">
        <path
          d="M50 140 L240 60 L430 100 L650 35 L900 160 L970 390 L760 500 L420 455 L80 430 Z"
          className="visual-map__zone"
        />
        <line x1="0" y1="120" x2="1000" y2="430" className="visual-map__line" />
        <line x1="340" y1="0" x2="390" y2="520" className="visual-map__line" />
        <line x1="690" y1="0" x2="640" y2="520" className="visual-map__line" />
      </svg>

      {selectedPoint && (
        <span
          className="visual-map__pin"
          style={{
            left: `${selectedPoint.x}%`,
            top: `${selectedPoint.y}%`
          }}
        />
      )}

      {!readonly && (
        <span className="visual-map__hint">
          Haz clic sobre el mapa para seleccionar ubicación
        </span>
      )}
    </div>
  );
}

export default VisualMap;