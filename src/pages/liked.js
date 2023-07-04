export default function LikedDinos({ dinosaurs }) {
  const likedDinos = dinosaurs.filter((dino) => dino.liked);
  return (
    <>
      <h2>Liked Dinos</h2>
      <ul>
        {likedDinos.map((dino) => {
          return <li key={dino.id}>{dino.name}</li>;
        })}
      </ul>
    </>
  );
}
