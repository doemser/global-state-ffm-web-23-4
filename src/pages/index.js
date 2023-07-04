export default function Home({ dinosaurs, onDinoLike }) {
  return (
    <>
      <h2>Dinosaurs</h2>
      <ul>
        {dinosaurs.map((dino) => {
          return (
            <li key={dino.id} style={{ color: dino.liked ? "green" : "red" }}>
              {dino.name}{" "}
              <input
                type="checkbox"
                checked={dino.liked}
                onChange={() => {
                  onDinoLike(dino.id);
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
