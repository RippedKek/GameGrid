import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./CategoryGames.css";

const CategoryGames = ({ category }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGamesByCategory = async () => {
      setLoading(true);
      try {
        const gamesRef = collection(db, "Products");
        const q = query(gamesRef, where("category", "==", category));
        const querySnapshot = await getDocs(q);
        const fetchedGames = [];
        querySnapshot.forEach((doc) => {
          fetchedGames.push(doc.data());
        });
        setGames(fetchedGames);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchGamesByCategory();
    }
  }, [category]); 

  if (loading) {
    return <div>Loading games...</div>;
  }

  return (
    <div className="games-list">
      {games.length === 0 ? (
        <p>No games available for {category}.</p>
      ) : (
        games.map((game, index) => (
          <div key={index} className="game-item">
            <img src={game.imageUrl} alt={game.name} className="game-image" />
            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <p>Price: ${game.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryGames;
