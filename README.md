/* ============================================================================
   Q UNCOVERED SHORTS — QUESTION DATA  (the only file you edit day to day)
   ----------------------------------------------------------------------------
   HOW THE DAILY ROTATION WORKS
   The engine plays the game whose `date` equals today (YYYY-MM-DD). If none
   matches today, it plays the most recent past game, so the site never breaks.
   => You can queue up many days at once: give each game the date you want it
      to go live, commit, and walk away.

   QUESTION TYPES
   U (Uniqueness, Q1 & Q2): score = round(100 * (1 - popularity)).
     popularity 0..1 :  1.0 = everyone names it -> ~0   |   0.0 = deep cut -> 100
     answers: [ [displayName, popularity, [aliases...]], ... ]   // valid picks
     traps:   [ [displayName, [aliases...], whyText], ... ]       // selectable but score 0
   R (Rank, Q3 & Q4): ranked #1 first -> 100, 90, 80 ... ; partial = consolation pts.
     ranked:  [ [displayName, [aliases...]], ... ]
     partial: [ [displayName, score, [aliases...], whyText], ... ]
   Anything typed that is not in answers/ranked/traps/partial scores 0.
   ============================================================================ */

/* ============================================================================
   Q UNCOVERED SHORTS — QUESTION DATA  (Edition #002)
   Uniqueness scale = round(100 * (1 - popularity)) -> full 0-100 range.
   Q1 & Q2 are Uniqueness with TRAP answers (selectable, but worth 0).
   ============================================================================ */
const GAMES = [
  {
    id: 2,
    label: "#002",
    date: "2026-06-03",
    questions: [
      {
        type: 'U', tag: 'U',
        q: 'Name a country that has hosted the Summer Olympic Games.',
        placeholder: 'Search a host country\u2026',
        source: 'Summer Olympic host nations, 1896\u20132024',
        answers: [
          ['United States', .80, ['united states','usa','us','america']],
          ['United Kingdom', .65, ['united kingdom','uk','great britain','britain','england']],
          ['France', .65, ['france']],
          ['Japan', .60, ['japan']],
          ['China', .58, ['china']],
          ['Australia', .55, ['australia']],
          ['Greece', .55, ['greece']],
          ['Brazil', .50, ['brazil']],
          ['Germany', .50, ['germany','west germany']],
          ['Italy', .45, ['italy']],
          ['Spain', .45, ['spain']],
          ['Canada', .45, ['canada']],
          ['South Korea', .45, ['south korea','korea']],
          ['Russia / Soviet Union', .45, ['russia','soviet union','ussr']],
          ['Mexico', .40, ['mexico']],
          ['Netherlands', .25, ['netherlands','holland']],
          ['Sweden', .25, ['sweden']],
          ['Finland', .22, ['finland']],
          ['Belgium', .18, ['belgium']],
        ],
        traps: [
          ['Switzerland', ['switzerland'], 'hosted the Winter Olympics (St. Moritz), but never the Summer Games.'],
          ['Norway', ['norway'], 'a Winter Olympics host (Oslo, Lillehammer) that never staged the Summer Games.'],
          ['Austria', ['austria'], 'Innsbruck hosted the Winter Olympics; the Summer Games never came here.'],
          ['India', ['india'], 'has hosted the Commonwealth and Asian Games, but never the Olympics.'],
          ['South Africa', ['south africa'], 'hosted the 2010 football World Cup, yet never an Olympic Games.'],
          ['Argentina', ['argentina'], 'Buenos Aires held the 2018 Youth Olympics, not the full Summer Games.'],
          ['Qatar', ['qatar'], 'host of the 2022 World Cup, but never the Summer Olympics.'],
        ]
      },
      {
        type: 'U', tag: 'U',
        q: 'Name a chemical element that is named after a real person.',
        placeholder: 'Search an element\u2026',
        source: 'Elements with eponyms honouring a real individual',
        answers: [
          ['Einsteinium', .55, ['einsteinium']],
          ['Curium', .45, ['curium']],
          ['Mendelevium', .35, ['mendelevium']],
          ['Nobelium', .35, ['nobelium']],
          ['Fermium', .30, ['fermium']],
          ['Copernicium', .25, ['copernicium']],
          ['Bohrium', .25, ['bohrium']],
          ['Rutherfordium', .22, ['rutherfordium']],
          ['Lawrencium', .15, ['lawrencium']],
          ['Seaborgium', .15, ['seaborgium']],
          ['Oganesson', .12, ['oganesson']],
          ['Roentgenium', .12, ['roentgenium','rontgenium']],
          ['Meitnerium', .12, ['meitnerium']],
          ['Gadolinium', .10, ['gadolinium']],
          ['Flerovium', .08, ['flerovium']],
        ],
        traps: [
          ['Thorium', ['thorium'], 'named after Thor, the Norse god of thunder, not a real person.'],
          ['Titanium', ['titanium'], 'named after the Titans of Greek mythology, not a person.'],
          ['Promethium', ['promethium'], 'named after Prometheus, a figure from Greek myth.'],
          ['Tantalum', ['tantalum'], 'named after Tantalus of Greek mythology.'],
          ['Niobium', ['niobium'], 'named after Niobe, a figure from Greek myth.'],
          ['Vanadium', ['vanadium'], 'named after Vanadis, a name for the Norse goddess Freyja.'],
          ['Mercury', ['mercury'], 'named after the planet and Roman god Mercury.'],
          ['Plutonium', ['plutonium'], 'named after the dwarf planet Pluto.'],
          ['Cerium', ['cerium'], 'named after the dwarf planet Ceres.'],
          ['Polonium', ['polonium'], 'named after Poland, a country, not a person.'],
        ]
      },
      {
        type: 'R', tag: 'R',
        q: 'Name one of the 10 largest deserts in the world by area.',
        placeholder: 'Search a desert\u2026',
        source: 'Largest deserts by area \u2014 polar (cold) deserts included',
        ranked: [
          ['Antarctic Desert', ['antarctic','antarctic desert','antarctica']],
          ['Arctic Desert', ['arctic','arctic desert']],
          ['Sahara', ['sahara','sahara desert']],
          ['Arabian Desert', ['arabian','arabian desert']],
          ['Gobi Desert', ['gobi','gobi desert']],
          ['Kalahari Desert', ['kalahari','kalahari desert']],
          ['Patagonian Desert', ['patagonian','patagonia','patagonian desert']],
          ['Great Victoria Desert', ['great victoria','great victoria desert']],
          ['Syrian Desert', ['syrian','syrian desert']],
          ['Great Basin Desert', ['great basin','great basin desert']],
        ],
        partial: [
          ['Thar Desert', 20, ['thar','thar desert'], 'a major hot desert in India/Pakistan, but outside the top 10 by area'],
          ['Sonoran Desert', 15, ['sonoran','sonoran desert'], 'a large North American desert, just short of the board'],
          ['Atacama Desert', 10, ['atacama','atacama desert'], 'the world\u2019s driest desert, but far too small to rank by area'],
          ['Namib Desert', 10, ['namib','namib desert'], 'ancient and famous, yet outside the top 10'],
          ['Mojave Desert', 5, ['mojave','mojave desert'], 'iconic, but small next to the giants'],
        ]
      },
      {
        type: 'R', tag: 'R',
        q: 'Name one of the 10 largest islands in the world by area (continents excluded).',
        placeholder: 'Search an island\u2026',
        source: 'Largest islands by land area (Australia counted as a continent, not an island)',
        ranked: [
          ['Greenland', ['greenland']],
          ['New Guinea', ['new guinea','papua','papua new guinea']],
          ['Borneo', ['borneo','kalimantan']],
          ['Madagascar', ['madagascar']],
          ['Baffin Island', ['baffin','baffin island']],
          ['Sumatra', ['sumatra']],
          ['Honshu', ['honshu','honshu japan']],
          ['Victoria Island', ['victoria island','victoria']],
          ['Great Britain', ['great britain','britain','britain island']],
          ['Ellesmere Island', ['ellesmere','ellesmere island']],
        ],
        partial: [
          ['Australia', 25, ['australia'], 'far bigger than Greenland \u2014 but it\u2019s classed as a continent, so it\u2019s off the list'],
          ['Java', 15, ['java'], 'the world\u2019s most populous island, yet only ~13th by area'],
          ['Cuba', 10, ['cuba'], 'the largest Caribbean island, but well short of the top 10'],
          ['Iceland', 5, ['iceland'], 'famous, but roughly 18th by area'],
          ['Ireland', 5, ['ireland'], 'around 20th \u2014 nowhere near the board'],
        ]
      }
    ]
  }

  /* ====== COPY THE BLOCK BELOW TO ADD A NEW DAILY GAME ========================
     1) Remove the surrounding comment markers.
     2) Bump `id`, set a new `label` ("#003") and `date` ("YYYY-MM-DD").
     3) Replace the four questions. Keep the comma that joins it to the game above.

  ,{
    id: 3,
    label: "#003",
    date: "2026-06-04",
    questions: [
      {
        type: 'U', tag: 'U',
        q: 'Your first uniqueness question?',
        placeholder: 'Search\u2026',
        source: 'Where the answer set comes from',
        answers: [
          ['An obvious pick', .90, ['alias']],
          ['A deep cut', .10, ['alias']],
        ],
        traps: [
          ['A tempting wrong answer', ['alias'], 'one sentence on why it scores 0.'],
        ]
      },
      {
        type: 'U', tag: 'U',
        q: 'Your second uniqueness question?',
        placeholder: 'Search\u2026',
        source: '...',
        answers: [ ['Pick A', .80, ['a']], ['Pick B', .20, ['b']] ],
        traps:   [ ['Trap', ['t'], 'why it scores 0.'] ]
      },
      {
        type: 'R', tag: 'R',
        q: 'Your first rank question?',
        placeholder: 'Search\u2026',
        source: '...',
        ranked: [ ['#1', ['one']], ['#2', ['two']], ['#3', ['three']] ],
        partial: [ ['Famous near-miss', 20, ['alias'], 'why it gets partial credit'] ]
      },
      {
        type: 'R', tag: 'R',
        q: 'Your second rank question?',
        placeholder: 'Search\u2026',
        source: '...',
        ranked: [ ['#1', ['one']], ['#2', ['two']] ],
        partial: [ ['Near-miss', 10, ['alias'], 'why partial'] ]
      }
    ]
  }
  ========================================================================== */

];
