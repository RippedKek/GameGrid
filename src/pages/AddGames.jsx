import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; 

const gamesData = [
    {
      name: "Cyberpunk 2077",
      price: 59.99,
      category: "PC",
      platforms: ["PC", "PS5", "XBOX"],
      description: "An open-world, action-adventure story set in Night City.",
      releaseDate: "2020-12-10T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Fcyberpunk2077.jpg?alt=media&token=abc123",
      rating: 4.5,
      developer: "CD Projekt Red",
      genres: ["Action", "RPG"],
      stock: 100,
      featured: true,
      trailerUrl: "https://www.youtube.com/watch?v=FknHjl7eQ6o",
      downloadLink: "https://example.com/download/cyberpunk2077"
    },
    {
      name: "The Last of Us Part II",
      price: 39.99,
      category: "PS5",
      platforms: ["PS5", "PS4"],
      description: "A gripping story-driven action-adventure.",
      releaseDate: "2020-06-19T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Flastofus2.jpg?alt=media&token=abc124",
      rating: 4.8,
      developer: "Naughty Dog",
      genres: ["Action", "Adventure"],
      stock: 50,
      featured: false,
      trailerUrl: "https://www.youtube.com/watch?v=vhII1qlcZ4E",
      downloadLink: "https://example.com/download/lastofus2"
    },
    {
      name: "Red Dead Redemption 2",
      price: 49.99,
      category: "PC",
      platforms: ["PC", "PS5", "XBOX"],
      description: "An epic tale of life in America at the dawn of the modern age.",
      releaseDate: "2018-10-26T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Freddeadredemption2.jpg?alt=media&token=abc125",
      rating: 4.7,
      developer: "Rockstar Games",
      genres: ["Action", "Adventure", "Open World"],
      stock: 200,
      featured: true,
      trailerUrl: "https://www.youtube.com/watch?v=gmA6N4bZi_8",
      downloadLink: "https://example.com/download/reddeadredemption2"
    },
    {
      name: "Call of Duty: Modern Warfare",
      price: 59.99,
      category: "PC",
      platforms: ["PC", "PS5", "XBOX"],
      description: "A fast-paced first-person shooter with an intense campaign.",
      releaseDate: "2019-10-25T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Fcallofduty.jpg?alt=media&token=abc126",
      rating: 4.6,
      developer: "Infinity Ward",
      genres: ["Shooter"],
      stock: 120,
      featured: false,
      trailerUrl: "https://www.youtube.com/watch?v=OGgF_oWRu9M",
      downloadLink: "https://example.com/download/codmodernwarfare"
    },
    {
      name: "FIFA 21",
      price: 49.99,
      category: "PS5",
      platforms: ["PS5", "PS4", "XBOX"],
      description: "The latest installment in the popular soccer video game series.",
      releaseDate: "2020-10-09T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Ffifa21.jpg?alt=media&token=abc127",
      rating: 4.2,
      developer: "EA Sports",
      genres: ["Sports"],
      stock: 150,
      featured: true,
      trailerUrl: "https://www.youtube.com/watch?v=yNdtYYqVjUQ",
      downloadLink: "https://example.com/download/fifa21"
    },
    {
      name: "Minecraft",
      price: 29.99,
      category: "PC",
      platforms: ["PC", "PS5", "XBOX"],
      description: "A sandbox game that lets players build and explore worlds.",
      releaseDate: "2011-11-18T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Fminecraft.jpg?alt=media&token=abc128",
      rating: 4.9,
      developer: "Mojang",
      genres: ["Sandbox", "Survival"],
      stock: 300,
      featured: true,
      trailerUrl: "https://www.youtube.com/watch?v=AhcX-6HvN80",
      downloadLink: "https://example.com/download/minecraft"
    },
    {
      name: "Among Us",
      price: 5.00,
      category: "PC",
      platforms: ["PC", "Mobile"],
      description: "A multiplayer social deduction game where players must work together to find the imposter.",
      releaseDate: "2018-06-15T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Famongus.jpg?alt=media&token=abc129",
      rating: 4.5,
      developer: "InnerSloth",
      genres: ["Party", "Multiplayer"],
      stock: 400,
      featured: false,
      trailerUrl: "https://www.youtube.com/watch?v=4BfVt2sF-tM",
      downloadLink: "https://example.com/download/amongus"
    },
    {
      name: "The Witcher 3: Wild Hunt",
      price: 39.99,
      category: "PC",
      platforms: ["PC", "PS5", "XBOX"],
      description: "A critically acclaimed open-world RPG set in a fantasy universe.",
      releaseDate: "2015-05-19T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Fthewitcher3.jpg?alt=media&token=abc130",
      rating: 4.9,
      developer: "CD Projekt Red",
      genres: ["RPG", "Open World"],
      stock: 80,
      featured: false,
      trailerUrl: "https://www.youtube.com/watch?v=LvDBgANMG1s",
      downloadLink: "https://example.com/download/thewitcher3"
    },
    {
      name: "Grand Theft Auto V",
      price: 59.99,
      category: "PC",
      platforms: ["PC", "PS5", "XBOX"],
      description: "An open-world action-adventure game set in a fictional version of Southern California.",
      releaseDate: "2013-09-17T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Fgtav.jpg?alt=media&token=abc131",
      rating: 4.7,
      developer: "Rockstar North",
      genres: ["Action", "Adventure"],
      stock: 150,
      featured: true,
      trailerUrl: "https://www.youtube.com/watch?v=hY-fFbz4Zzg",
      downloadLink: "https://example.com/download/gtav"
    },
    {
      name: "Assassin's Creed Valhalla",
      price: 59.99,
      category: "PS5",
      platforms: ["PS5", "PS4", "XBOX"],
      description: "An action-RPG set in Viking-era England and Norway.",
      releaseDate: "2020-11-10T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Fvalhalla.jpg?alt=media&token=abc132",
      rating: 4.4,
      developer: "Ubisoft",
      genres: ["Action", "RPG"],
      stock: 120,
      featured: false,
      trailerUrl: "https://www.youtube.com/watch?v=WrZjknxhGFk",
      downloadLink: "https://example.com/download/valhalla"
    },
    {
      name: "Hades",
      price: 24.99,
      category: "PC",
      platforms: ["PC", "Switch"],
      description: "A rogue-like dungeon crawler where you fight your way out of the underworld.",
      releaseDate: "2020-09-17T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Fhades.jpg?alt=media&token=abc133",
      rating: 4.8,
      developer: "Supergiant Games",
      genres: ["Rogue-like", "Action"],
      stock: 90,
      featured: true,
      trailerUrl: "https://www.youtube.com/watch?v=Zz0XbdYm7QU",
      downloadLink: "https://example.com/download/hades"
    },
    {
      name: "Fall Guys: Ultimate Knockout",
      price: 19.99,
      category: "PC",
      platforms: ["PC", "PS5", "Switch"],
      description: "A battle royale-style party game with up to 60 players online.",
      releaseDate: "2020-08-04T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Ffallguys.jpg?alt=media&token=abc134",
      rating: 4.3,
      developer: "Mediatonic",
      genres: ["Party", "Battle Royale"],
      stock: 130,
      featured: false,
      trailerUrl: "https://www.youtube.com/watch?v=CB1DEIvB8fg",
      downloadLink: "https://example.com/download/fallguys"
    },
    {
      name: "Spiderman: Miles Morales",
      price: 49.99,
      category: "PS5",
      platforms: ["PS5"],
      description: "A superhero action game where you play as Miles Morales.",
      releaseDate: "2020-11-12T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Fspiderman.jpg?alt=media&token=abc135",
      rating: 4.6,
      developer: "Insomniac Games",
      genres: ["Action", "Adventure"],
      stock: 80,
      featured: true,
      trailerUrl: "https://www.youtube.com/watch?v=p7kxv3bgnRI",
      downloadLink: "https://example.com/download/spiderman"
    },
    {
      name: "Rocket League",
      price: 19.99,
      category: "PC",
      platforms: ["PC", "PS5", "XBOX"],
      description: "A unique blend of soccer and cars in a fast-paced multiplayer game.",
      releaseDate: "2015-07-07T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Frocketleague.jpg?alt=media&token=abc136",
      rating: 4.7,
      developer: "Psyonix",
      genres: ["Sports", "Action"],
      stock: 200,
      featured: true,
      trailerUrl: "https://www.youtube.com/watch?v=EdZ0Tg2PHfo",
      downloadLink: "https://example.com/download/rocketleague"
    },
    {
      name: "Borderlands 3",
      price: 39.99,
      category: "PC",
      platforms: ["PC", "PS5", "XBOX"],
      description: "A loot-shooter game with a distinctive comedic style.",
      releaseDate: "2019-09-13T00:00:00Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamegrid.appspot.com/o/images%2Fborderlands3.jpg?alt=media&token=abc137",
      rating: 4.4,
      developer: "Gearbox Software",
      genres: ["Shooter", "RPG"],
      stock: 170,
      featured: false,
      trailerUrl: "https://www.youtube.com/watch?v=ldWe9WjrjD4",
      downloadLink: "https://example.com/download/borderlands3"
    }
  ];
  

const AddGames = () => {
  
  const addGamesToFirestore = async () => {
    try {
      const productsCollection = collection(db, "Products");
      
      for (const game of gamesData) {
        await addDoc(productsCollection, game);
      }

      console.log("Games added to Firestore successfully!");
    } catch (error) {
      console.error("Error adding games to Firestore: ", error);
    }
  };

  return (
    <div className="p-4">
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={addGamesToFirestore}
      >
        Add Games to Firestore
      </button>
    </div>
  );
};

export default AddGames;
