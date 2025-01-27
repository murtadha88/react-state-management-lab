import { useState } from "react";
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
  );

  let totalStrength = 0;
  let totalAgility = 0;

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setMoney(money - fighter.price);
      const prevTeam = [...team, fighter];
      setTeam(prevTeam);
      setZombieFighters((prevFighters) => prevFighters.filter(filter => filter.id !== fighter.id));
    }
  };

  const handleRemoveFighter = (fighter) => {
    setMoney(money + fighter.price);
    setTeam((prevTeam) => prevTeam.filter(f => f.id !== fighter.id));
    setZombieFighters((prevFighters) => [...prevFighters, fighter]);
  };

  
  team.forEach((fighter) => {
    totalStrength += fighter.strength;
    totalAgility += fighter.agility;
  })

  return (
    <>
      <h1>Welcome to Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <ul>
        {zombieFighters.map((fighter) => (
          <>
            <div>
              <li>
                <h2>{fighter.name}</h2>
                <img src={fighter.img} alt="fighter image" />
                <p><strong>Price: </strong>{fighter.price}</p>
                <p><strong>Strength: </strong>{fighter.strength}</p>
                <p><strong>Agility: </strong>{fighter.agility}</p>
              </li>
              <li>
                <button onClick={() => handleAddFighter({
                  id: fighter.id,
                  name: fighter.name,
                  price: fighter.price,
                  strength: fighter.strength,
                  agility: fighter.agility,
                  img: fighter.img,
                })}>Add Fighter</button>

              </li>
            </div>
          </>
        ))}
      </ul>
      <h1>Your Team:</h1>
      <h2>Total Strength: {totalStrength}</h2>
      <h2>Total Agility: {totalAgility}</h2>
      <ul>
        {team.length == 0 ?
          <h2>Pick some team members!</h2> :
          team.map((fighter) => (
            <>
              <div>
                <li>
                  <h2>{fighter.name}</h2>
                  <img src={fighter.img} alt="fighter image" />
                  <p><strong>Price: </strong>{fighter.price}</p>
                  <p><strong>Strength: </strong>{fighter.strength}</p>
                  <p><strong>Agility: </strong>{fighter.agility}</p>
                </li>
                <li>
                  <button onClick={() => handleRemoveFighter({
                    id: fighter.id,
                    name: fighter.name,
                    price: fighter.price,
                    strength: fighter.strength,
                    agility: fighter.agility,
                    img: fighter.img,
                  })}>Remove Fighter</button>

                </li>
              </div>
            </>
          ))}
      </ul>
    </>
  );
}

export default App