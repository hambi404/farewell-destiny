/* ============================================================================
 *  THE CHRONICLE - Content
 * ----------------------------------------------------------------------------
 *  The curated history of Destiny 2, era by era. Item "exotics" are listed
 *  by name only; their icons, lore and screenshots are resolved live from the
 *  Bungie Armory at runtime (see api.js), so this file never goes stale.
 * ========================================================================== */

window.CHRONICLE = {
  // Bookends shown in the hero and the final memorial.
  meta: {
    spanStart: 2017,
    spanEnd: 2026,
    title: "THE CHRONICLE",
    subtitle: "A Monument to Destiny 2",
  },

  eras: [
    {
      id: "red-war",
      year: "2017",
      date: "September 6, 2017",
      kicker: "Year One · The Beginning",
      title: "Destiny 2",
      subtitle: "The Red War",
      accent: "#e0492f",
      summary:
        "Dominus Ghaul and the Cabal Red Legion storm the Last City and sever the Guardians from the Light. Powerless for the first time, you wander a broken world, rally the scattered Vanguard, and fight your way back to the Traveler to reclaim what was taken.",
      highlights: [
        "The fall of the Last City and the loss of the Light",
        "Reuniting Zavala, Cayde-6 and Ikora across four new worlds",
        "The Leviathan raid aboard Calus's world-eating ship",
      ],
      quote: {
        text: "Brave words. Let's see if you can back them up.",
        by: "Dominus Ghaul",
      },
      items: [
        { name: "Sweet Business", hash: 1345867570, icon: "https://www.bungie.net/common/destiny2_content/icons/c674b162b08bb96e7f549ceb45060b6d.jpg" },
        { name: "MIDA Multi-Tool", hash: 1331482397, icon: "https://www.bungie.net/common/destiny2_content/icons/eb279fe06dcd9199fccda5120e244a63.jpg" },
        { name: "Sunshot", hash: 2907129557, icon: "https://www.bungie.net/common/destiny2_content/icons/f45a7d8e52bf0d88bbd43d4354878313.jpg" },
        { name: "Rat King", hash: 2362471601, icon: "https://www.bungie.net/common/destiny2_content/icons/b86c24934b3ec9954218ecfa0992aeb2.jpg" },
      ],
    },
    {
      id: "curse-of-osiris",
      year: "2017",
      date: "December 5, 2017",
      kicker: "Year One · Expansion I",
      title: "Curse of Osiris",
      subtitle: "The Infinite Forest",
      accent: "#e6a93c",
      summary:
        "On sun-scorched Mercury, the exiled Warlock Osiris and his Ghost Sagira open the Infinite Forest. A Vex simulation of every possible past and future. To stop the gate-lord Panoptes from erasing the present, you step outside of time itself.",
      highlights: [
        "Mercury and the endlessly branching Infinite Forest",
        "Osiris, the most famous exile of the Last City",
        "The simulated armies of the Vex collapse around you",
      ],
      items: [
        { name: "Prometheus Lens", hash: 19024058, icon: "https://www.bungie.net/common/destiny2_content/icons/76817c6b9ad482a19a180819fbe85def.jpg" },
        { name: "The Colony", hash: 3899270607, icon: "https://www.bungie.net/common/destiny2_content/icons/3ae064e4a93ea26a394ff35171193eed.jpg" },
        { name: "Telesto", hash: 2208405142, icon: "https://www.bungie.net/common/destiny2_content/icons/44cffedea1b6bc9800da018f2bd431dd.jpg" },
      ],
    },
    {
      id: "warmind",
      year: "2018",
      date: "May 8, 2018",
      kicker: "Year One · Expansion II",
      title: "Warmind",
      subtitle: "The Frozen Mars",
      accent: "#79c7e8",
      summary:
        "The polar ice of Mars melts to wake Rasputin, humanity's last Warmind, and an ancient Hive army frozen beneath Hellas Basin. With Ana Bray, you defend the machine-god against the Worm God Xol and confront what it means to trust a weapon that thinks.",
      highlights: [
        "Rasputin awakens beneath the Martian ice",
        "Ana Bray and the buried history of the Golden Age",
        "The Worm God Xol, Will of the Thousands",
      ],
      items: [
        { name: "Sleeper Simulant", hash: 4036115577, icon: "https://www.bungie.net/common/destiny2_content/icons/af232d6f94c12a4cf1080e659264294f.jpg" },
        { name: "Polaris Lance", hash: 3413074534, icon: "https://www.bungie.net/common/destiny2_content/icons/a22adf5ee0096e1cb9a6e212ee591b70.jpg" },
        { name: "Worldline Zero", hash: 1864563948, icon: "https://www.bungie.net/common/destiny2_content/icons/b1f0b22d4c7ffa680f84381b5a4a2e02.jpg" },
      ],
    },
    {
      id: "forsaken",
      year: "2018",
      date: "September 4, 2018",
      kicker: "Year Two · A New Dawn",
      title: "Forsaken",
      subtitle: "Vengeance for Cayde-6",
      accent: "#37b98c",
      summary:
        "A prison break in the Reef ends with a bullet and the death of Cayde-6. Grief carries you across the lawless Tangled Shore to hunt the Scorn Barons and Prince Uldren Sov and into the cursed, looping beauty of the Dreaming City. Destiny's darkest, sharpest chapter.",
      highlights: [
        "The death of Cayde-6 and the hunt for his killers",
        "The Tangled Shore, the Scorn, and the rise of Gambit",
        "The Dreaming City and the Last Wish raid",
      ],
      quote: {
        text: "Don't worry. I've got a plan. Well, the beginnings of one.",
        by: "Cayde-6",
      },
      items: [
        { name: "Ace of Spades", hash: 347366834, icon: "https://www.bungie.net/common/destiny2_content/icons/cdfbfd3f098329a367294f191070f8c4.jpg" },
        { name: "The Last Word", hash: 1364093401, icon: "https://www.bungie.net/common/destiny2_content/icons/a10719f1f2180e473ea9a0957e3b9fe4.jpg" },
        { name: "One Thousand Voices", hash: 2069224589, icon: "https://www.bungie.net/common/destiny2_content/icons/51c53df606cca474dce3cadbf7d5ce28.jpg" },
        { name: "Malfeasance", hash: 204878059, icon: "https://www.bungie.net/common/destiny2_content/icons/5564a17ddf52e36f56e7256ad9946a17.jpg" },
      ],
    },
    {
      id: "shadowkeep",
      year: "2019",
      date: "October 1, 2019",
      kicker: "Year Three · New Light",
      title: "Shadowkeep",
      subtitle: "Fears Made Manifest",
      accent: "#9a7fd6",
      summary:
        "Eris Morn calls you back to the Moon, where Nightmares of the fallen. Crota, Ghaul, Skolas claw their way out of memory. Beneath the grey dust, a Black Pyramid waits. The Darkness has arrived, and it knows your name. Destiny 2 also went free-to-play as New Light.",
      highlights: [
        "The return to the Moon and the Scarlet Keep",
        "Nightmares of the Guardians' fallen foes",
        "The first Pyramid, and the Garden of Salvation raid",
      ],
      items: [
        { name: "Divinity", hash: 4103414242, icon: "https://www.bungie.net/common/destiny2_content/icons/c6aa03536fd68b5fca5ad6b83ea0cf1e.jpg" },
        { name: "Xenophage", hash: 1395261499, icon: "https://www.bungie.net/common/destiny2_content/icons/de34570a93281dc201690cfd146e6d24.jpg" },
        { name: "Deathbringer", hash: 2232171099, icon: "https://www.bungie.net/common/destiny2_content/icons/5cb4c8ec3cabaaa6a29ac7513ee30ca0.jpg" },
        { name: "Eriana's Vow", hash: 3524313097, icon: "https://www.bungie.net/common/destiny2_content/icons/588133859fa98c801d8a9d66ea6aae2f.jpg" },
      ],
    },
    {
      id: "beyond-light",
      year: "2020",
      date: "November 10, 2020",
      kicker: "Year Four · Embrace the Dark",
      title: "Beyond Light",
      subtitle: "The Cold Power of Stasis",
      accent: "#5fb0e6",
      summary:
        "On the frozen moon Europa, the Fallen Kell Eramis offers her people the Darkness and so do you. Guardians wield Stasis for the first time, freezing the battlefield with a power that was never meant to be theirs. The Exo Stranger watches, and the Deep Stone Crypt opens.",
      highlights: [
        "Europa, Clovis Bray, and the Exo Stranger's return",
        "Stasis - the first Darkness subclass",
        "The Deep Stone Crypt raid",
      ],
      items: [
        { name: "No Time to Explain", hash: 1594120904, icon: "https://www.bungie.net/common/destiny2_content/icons/8a79a43912129240ee9f70e8e6bcfd6d.jpg" },
        { name: "Cloudstrike", hash: 2603483885, icon: "https://www.bungie.net/common/destiny2_content/icons/ce45921edb8e35a249f2c6f5b3abaab5.jpg" },
        { name: "The Lament", hash: 3487253372, icon: "https://www.bungie.net/common/destiny2_content/icons/f6844ca3eb572c546e97a340c24531d5.jpg" },
        { name: "Salvation's Grip", hash: 370712896, icon: "https://www.bungie.net/common/destiny2_content/icons/f7a37e909fe6f923501f2175dc3784b6.jpg" },
      ],
    },
    {
      id: "witch-queen",
      year: "2022",
      date: "February 22, 2022",
      kicker: "Year Five · The Light Stolen",
      title: "The Witch Queen",
      subtitle: "Savathûn's Throne World",
      accent: "#41b377",
      summary:
        "Savathûn, the Witch Queen and master of lies, has stolen the Light her Lucent Hive now raise their own Ghosts and refuse to stay dead. You hunt the truth through her impossible Throne World and learn how a god of deceit finally told one terrible truth.",
      highlights: [
        "Savathûn and the Light-wielding Lucent Hive",
        "Weapon crafting and the Glaive arrive",
        "Vow of the Disciple raid and the Disciple Rhulk",
      ],
      quote: {
        text: "Savathûn took the worm. Savathûn paid the price. And in return, she has done... the impossible.",
        by: "Ikora Rey",
      },
      items: [
        { name: "Osteo Striga", hash: 46524085, icon: "https://www.bungie.net/common/destiny2_content/icons/2752ee2761149f004df20e78749c1bab.jpg" },
        { name: "Dead Messenger", hash: 2812324401, icon: "https://www.bungie.net/common/destiny2_content/icons/0824b34bb37e0bb7c32b91adf6dcb79e.jpg" },
        { name: "Parasite", hash: 2812324400, icon: "https://www.bungie.net/common/destiny2_content/icons/0a71a14d8614d619a40649f09b28b466.jpg" },
        { name: "Grand Overture", hash: 1763584999, icon: "https://www.bungie.net/common/destiny2_content/icons/bc76e54c9cd266c09d8e08036ebcfd42.jpg" },
      ],
    },
    {
      id: "lightfall",
      year: "2023",
      date: "February 28, 2023",
      kicker: "Year Six · The Penultimate",
      title: "Lightfall",
      subtitle: "Neon Neptune & the Veil",
      accent: "#ec4fb0",
      summary:
        "On the hidden neon world of Neomuna, the Cloud Striders make their last stand as Calus. Now a Disciple of the Witness hunts the mysterious Veil. Guardians grasp Strand and weave the very threads of reality, while above, the Witness reaches the Traveler at last.",
      highlights: [
        "Neptune's secret city, Neomuna, and the Cloud Striders",
        "Strand - pulling on the threads of existence",
        "The Witness breaches the Traveler; Root of Nightmares raid",
      ],
      items: [
        { name: "Quicksilver Storm", hash: 4293613902, icon: "https://www.bungie.net/common/destiny2_content/icons/06ec3d22c69944f6755bf75f07cd83bd.jpg" },
        { name: "Final Warning", hash: 3121540812, icon: "https://www.bungie.net/common/destiny2_content/icons/e8030d75835eaf1c9014f2d63338d518.jpg" },
        { name: "Winterbite", hash: 3118061004, icon: "https://www.bungie.net/common/destiny2_content/icons/fdc14f2b28c77f9627f0629fdb540b76.jpg" },
        { name: "Deterministic Chaos", hash: 449318888, icon: "https://www.bungie.net/common/destiny2_content/icons/d657cc9dae47ecaec19038f18f335c18.jpg" },
      ],
    },
    {
      id: "final-shape",
      year: "2024",
      date: "June 4, 2024",
      kicker: "Year Seven · The Conclusion",
      title: "The Final Shape",
      subtitle: "Into the Pale Heart",
      accent: "#f0c95e",
      summary:
        "You enter the Traveler itself. The Pale Heart, a land woven from memory and hope to face the Witness where the Light and Darkness Saga began. Cayde-6 walks again, Guardians wield Prismatic, and ten years of story reach their summit. \"We are all... Legend.\"",
      highlights: [
        "The Pale Heart of the Traveler and the return of Cayde-6",
        "Prismatic - Light and Darkness, together at last",
        "Salvation's Edge raid and the end of the Witness",
      ],
      quote: {
        text: "Together. All at once. We are all... Legend.",
        by: "The Vanguard",
      },
      items: [
        { name: "Still Hunt", hash: 2905188646, icon: "https://www.bungie.net/common/destiny2_content/icons/b995885ef6216361e63a093896f75735.jpg" },
        { name: "Khvostov 7G-0X", hash: 4129629253, icon: "https://www.bungie.net/common/destiny2_content/icons/23aac6d8454ee1bcd2234e303bd2d6bf.jpg" },
        { name: "Microcosm", hash: 4207066264, icon: "https://www.bungie.net/common/destiny2_content/icons/8fc373a11adc417aab9a3ef4bab3bbe3.jpg" },
        { name: "Red Death Reformed", hash: 427899681, icon: "https://www.bungie.net/common/destiny2_content/icons/262f0ef4547ca75c86d8eb5599b3eb60.jpg" },
      ],
    },
    {
      id: "episodes",
      year: "2024 – 2025",
      date: "After the Saga",
      kicker: "Beyond the Saga · Episodes",
      title: "Echoes · Revenant · Heresy",
      subtitle: "The Story Continued",
      accent: "#b98cff",
      summary:
        "With the great Saga closed, the seasonal model gave way to Episodes. Self-contained acts exploring the aftermath. The wounded Witness's echo, Fikrul and the Scorn's return as the Dread, and a final reckoning with the Nine carried Guardians through the long epilogue.",
      highlights: [
        "Echoes - the Vex and the Witness's lingering echo",
        "Revenant - Fikrul, the Scorn, and Eramis",
        "Heresy - the Hive, the Nine, and the deep dark",
      ],
      items: [
        { name: "Choir of One", hash: 3698448090, icon: "https://www.bungie.net/common/destiny2_content/icons/80cc90861aa83c63de2273457a6c9345.jpg" },
        { name: "Slayer's Fang", hash: 1047932517, icon: "https://www.bungie.net/common/destiny2_content/icons/45ba5d9ee8e425e1f9d50cb561fe4982.jpg" },
        { name: "Barrow-Dyad", hash: 1481594633, icon: "https://www.bungie.net/common/destiny2_content/icons/938bc6eb5c5c772e2f3d066380179d36.jpg" },
        { name: "Lodestar", hash: 3725585710, icon: "https://www.bungie.net/common/destiny2_content/icons/63d7990202fd58a56f8ecf3a128db03a.jpg" },
      ],
    },
  ],

  memorial: {
    kicker: "2026 · The Final Update",
    title: "End of an Era",
    lines: [
      "For nearly a decade, millions of Guardians lit the dark together -",
      "across nine worlds, ten expansions, and one long, impossible war.",
      "Now the Traveler dims, and the last update is written.",
    ],
    stats: [
      { value: "10", label: "Expansions" },
      { value: "9", label: "Years" },
      { value: "1", label: "Light" },
    ],
    farewell: "Thank you, Destiny.",
    signoff: "Eyes up Guardians.",
  },
};
