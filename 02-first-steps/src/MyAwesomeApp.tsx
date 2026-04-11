import type { CSSProperties } from "react";

const firstName = "Carlos";
const lastName = "Muñoz";

const favouriteGames = [
  "Elden Ring",
  "Arc Raiders",
  "Kingdom Come Deliverance",
];
const isActive = false;

const address = {
  zipCode: "41015",
  city: "Sevilla",
  country: "España",
};

const myStyles: CSSProperties = {
  backgroundColor: "#eee",
  borderRadius: 20,
  padding: 10,
  marginTop: 30,
};

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>Juegos favoritos: {favouriteGames.join(", ")}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? "Activo" : "No activo"}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
}
