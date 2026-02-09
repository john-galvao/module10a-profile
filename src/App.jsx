import Profile from "./Profile";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f2f2f2", padding: "20px" }}>
      <Profile
        name="Avery Brooks"
        occupation="Independent Country Musician"
        funFact="Avery writes and records most songs at home and in a small studio."
        detail="Spotlight: Avery focuses on simple production and country-style lyrics. Most performances happen at small local venues like coffee shops and campus events."
      />
    </div>
  );
}

export default App;