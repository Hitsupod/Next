const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/gamelist"
);

const gameSeed = [
  {
    title: "Spider-Man",
    system: "Playstation",
    type: "Solo",
    synopsis:
      "Marvel's Spider-Man is a 2018 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. Based on the Marvel Comics superhero Spider-Man, it is inspired by the long-running comic book mythology and adaptations in other media.",
  },
  {
    title: "Ghost of Tsushima",
    system: "Playstation",
    type: "Solo",
    synopsis:
      "Ghost of Tsushima is an action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment for PlayStation 4. Featuring an open world, it follows a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan. The game was released on July 17, 2020.",
  },
  {
    title: "Marvel's Avengers",
    system: "Playstation",
    type: "Squad",
    synopsis:
      "Marvel's Avengers is an action role-playing brawler video game co-developed by Crystal Dynamics and published by Square Enix. Based on the Marvel Comics superhero team the Avengers, the game is mainly inspired by the Marvel Cinematic Universe's iteration of the group, as well as the long-running comic book mythology.",
  },
  {
    title: "Overwatch",
    system: "Playstation",
    type: "Squad",
    synopsis:
      "Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment.",
  },
  {
    title: "Monster Hunter: World",
    system: "Playstation",
    type: "Both",
    synopsis:
      "Monster Hunter: World is an action role-playing game developed and published by Capcom, A part of the Monster Hunter series.",
  },
  {
    title: "Ori and the Will of the Wisps",
    system: "Xbox",
    type: "Solo",
    synopsis:
      "Ori and the Will of the Wisps is a platform-adventure Metroidvania video game developed by Moon Studios and published by Xbox Game Studios.",
  },
  {
    title: "DOOM Eternal",
    system: "Xbox",
    type: "Solo",
    synopsis:
      "Doom Eternal is a first-person shooter video game developed by id Software and published by Bethesda Softworks.",
  },
  {
    title: "Call of Duty: Warzone",
    system: "Xbox",
    type: "Squad",
    synopsis:
      "Call of Duty: Warzone is a free-to-play battle royale video game.",
  },
  {
    title: "Watch Dogs: Legion",
    system: "Xbox",
    type: "Squad",
    synopsis:
      "Watch Dogs: Legion is an upcoming action-adventure game, developed by Ubisoft Toronto and published by Ubisoft.",
  },
  {
    title: "GTA5",
    system: "Xbox",
    type: "Both",
    synopsis:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.",
  },
  {
    title: "Hollow Knight",
    system: "PC",
    type: "Solo",
    synopsis:
      "The game follows a nameless knight, as they traverse an ancient plague-infested kingdom inhabited by various insects, known as Hallownest. The Knight must travel through Hallownest, fighting bosses and unlocking new abilities to progress, as they uncover the mysteries of the kingdom.",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    system: "PC",
    type: "Solo",
    synopsis:
      "The game takes place in a fictional fantasy world based on Slavonic mythology. Players control protagonist Geralt of Rivia, a monster slayer for hire known as a Witcher who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her.",
  },
  {
    title: "Fortnite",
    system: "PC",
    type: "Squad",
    synopsis:
      "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with fortifications they can build.",
  },
  {
    title: "Valorant",
    system: "PC",
    type: "Squad",
    synopsis:
      "Valorant is a team-based tactical shooter and first-person shooter set in the near-future. Players play as one of a set of agents, characters designed based on several countries and cultures around the world.",
  },
  {
    title: "Destiny",
    system: "PC",
    type: "Both",
    synopsis:
      "Destiny 2 is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie.",
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    system: "Nintendo",
    type: "Solo",
    synopsis:
      "The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo.",
  },
  {
    title: "Fire Emblem: Three Houses",
    system: "Nintendo",
    type: "Solo",
    synopsis:
      "Fire Emblem: Three Houses is a tactical role-playing game developed by Intelligent Systems and Koei Tecmo for the Nintendo Switch.",
  },
  {
    title: "Super Smash Bros. Ultimate",
    system: "Nintendo",
    type: "Squad",
    synopsis:
      "Super Smash Bros. Ultimate[b] is a 2018 crossover fighting game developed by Bandai Namco Studios and Sora Ltd. and published by Nintendo for the Nintendo Switch.",
  },
  {
    title: "Splatoon 2",
    system: "Nintendo",
    type: "Squad",
    synopsis:
      "Splatoon 2 is a 2017 third-person shooter game developed and published by Nintendo.",
  },
  {
    title: "Animal Crossing: New Horizons",
    system: "Nintendo",
    type: "Both",
    synopsis:
      "Animal Crossing: New Horizons is a 2020 life simulation video game developed and published by Nintendo.",
  },
];

db.Game.remove({})
  .then(() => db.Game.collection.insertMany(gameSeed))
  .then((data) => {
    console.log(data.result.n + " Game Inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
