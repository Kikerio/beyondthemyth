/**
 * paradigmsapi.js
 * Dati dei paradigmi cosmologici nella struttura globale `archiveData`
 * attesa da index.html.
 */

const archiveData = {
  figures: [
    {
      id: "fig-aristotle",
      name: "Aristotele",
      born: "384 BC",
      died: "322 BC",
      nationality: "Greek",
      field: "Philosopher, Polymath",
      portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Aristotle_Altemps_Inv8575.jpg",
      apaCitation: "Ludovisi Collection. (1st century AD). <i>Bust of Aristotle</i> [Marble sculpture]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Aristotle_Altemps_Inv8575.jpg"
    },
    {
      id: "fig-copernicus",
      name: "Niccolò Copernico",
      born: "19 Feb 1473",
      died: "24 May 1543",
      nationality: "Polish",
      field: "Astronomer, Mathematician",
      portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Nikolaus_Kopernikus.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nikolaus_Kopernikus.jpg",
      apaCitation: "Anonymous. (1580). <i>Portrait of Nicolaus Copernicus</i> [Painting]. Toruń Old Town City Hall. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Nikolaus_Kopernikus.jpg"
    },
    {
      id: "fig-einstein",
      name: "Albert Einstein",
      born: "14 Mar 1879",
      died: "18 Apr 1955",
      nationality: "German-born Swiss-American",
      field: "Theoretical Physicist",
      portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      apaCitation: "Schmutzer, F. (1921). <i>Albert Einstein</i> [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
    },
    {
      id: "fig-mayor",
      name: "Michel Mayor",
      born: "12 Jan 1942",
      died: "Living",
      nationality: "Swiss",
      field: "Astrophysicist",
      portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Michel_Mayor%2C_2012_%28cropped%29.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Michel_Mayor#/media/File:Michel_Mayor,_2012_(cropped).jpg",
      apaCitation: "Stefanelli, F. (2019). <i>Michel Mayor</i> [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Michel_Mayor_2019.jpg"
    },
    {
      id: "fig-heisenberg",
      name: "Werner Heisenberg",
      born: "5 Dec 1901",
      died: "1 Feb 1976",
      nationality: "German",
      field: "Theoretical Physicist",
      portraitUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Werner_Heisenberg_Portrait_%283x4_cropped%29.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Werner_Heisenberg#/media/File:Werner_Heisenberg_Portrait_(3x4_cropped).jpg",
      apaCitation: "Thieme, W. (1933). <i>Werner Heisenberg</i> [Photograph]. Bundesarchiv. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-R57262,_Werner_Heisenberg.jpg"
    }
  ],

  paradigms: [
    {
      id: "paradigm-01",
      metadata: {
        era: "ANTIQUITY",
        tradition: "GRECO_ROMAN",
        scale: "EARTH_MOON",
        structure: "GEOCENTRIC",
        dynamics: "STATIC",
        method: "MYTH_PHILOSOPHY",
        searchTerms: "ptolemy ptolemaic geocentrism aristotle earth heavens crystalline spheres cosmos epicycles almagest greco-roman antiquity"
      },
      overview: {
        dateRange: "c. 350 BC — 1543 AD",
        title: "Ptolemaic Geocentrism",
        subtitle: "The Earth stands still at the centre of a turning cosmos.",
        thumbnailUrl: "assets/imgs/P1_cover.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:1660_illustration_of_Claudius_Ptolemy%27s_geocentric_model_of_the_Universe.jpg",
        apaCitation: "Cellarius, A. (1660). <i>1660 illustration of Claudius Ptolemy's geocentric model of the Universe</i> [Digital image]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:1660_illustration_of_Claudius_Ptolemy%27s_geocentric_model_of_the_Universe.jpg",
        previewTags: ["ANTIQUITY", "GEOCENTRIC", "GRECO-ROMAN", "MYTH & PHILOSOPHY"]
      },
      modal: {
        coverUrl: "assets/imgs/P1_cover.jpg",
        introText: [
          "For over fourteen centuries, humanity placed the Earth at the center of a divine, unchanging cosmos. Claudius Ptolemy's Almagest codified this intuition into a rigorous geometric system — crystalline spheres carrying the Sun, Moon, and five visible planets in perfect circular motion around a motionless Earth.",
          "The model endured because it was technically adequate, even as it was philosophically comforting: humanity remained the still point around which heaven turned."
        ],
        creatorId: "fig-aristotle",
        startQuote: {
          label: "VOICE FROM THE BEGINNING — C. 350 BC",
          text: "The Earth lies in the middle of the heavens, immovable. The stars, the Sun, and the planets are carried around it by their own eternal spheres.",
          author: "— paraphrase of Aristotle, De Caelo, c. 350 BC"
        },
        endQuote: {
          label: "THE DEBUNKING — 1543 AD",
          text: "We must admit, I think, that there is something divine in the ancient hypothesis — but the truth compels us to depart from it.",
          author: "— paraphrase of Copernicus, De Revolutionibus, 1543"
        },
        timeline: [
          {
            date: "c. 350 BC",
            title: "Aristotle writes the sky around the Earth",
            description: "Aristotle builds the first coherent physical framework of the geocentric cosmos. The Earth is stationary at the center, heavy and corruptible, surrounded by aetherial spheres in perfect circular motion. It is still \"naked eye\", but observation is now bound to precise physics and metaphysics.",
            tags: ["ARISTOTLE", "NAKED EYE OBSERVATION", "PHILOSOPHICAL TREATISE"],
            imageUrl: "assets/imgs/P1_01.png",
            imageCaption: "The Ptolemaic universe from Andrew Borde's The First Book of the Introduction of Knowledge, 1542.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "c. 280–240 BC",
            title: "Eratosthenes measures the body of the center",
            description: "Eratosthenes uses only a gnomon, two wells, and geometry to calculate the Earth's circumference almost correctly. The Earth-center of the cosmos is no longer just a metaphysical idea, but an object with measurable dimensions.",
            tags: ["ERATOSTHENES", "GNOMON", "GEOMETRY"],
            imageUrl: "assets/imgs/P1_02.png",
            imageCaption: "Measure of Earth's circumference according to Cleomedes's simplified version, based on the approximation that Syene is on the Tropic of Cancer.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "c. 200–150 BC",
            title: "Epicycles and eccentrics before Ptolemy",
            description: "Apollonius and Hipparchus introduce epicycles and eccentrics to model planetary retrogradations and apparent speed variations without abandoning the Earth at the center. The geometric grammar that Ptolemy will use is born.",
            tags: ["APOLLONIUS", "HIPPARCHUS", "STAR CATALOGUES"],
            imageUrl: "assets/imgs/P1_03.png",
            imageCaption: "The complexity to be described by the geocentric model, engraved for the Encyclopaedia Britannica, 1771.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "c. 150 AD",
            title: "The Almagest crystallizes the machine",
            description: "Ptolemy compiles the Mathematike Syntaxis, later known as the Almagest. With deferents, epicycles, and the equant, he builds a powerful predictive model. The astrolabe and armillary spheres become physical interfaces of this mathematical universe.",
            tags: ["CLAUDIUS PTOLEMY", "ASTROLABE", "ARMILLARY SPHERE"],
            imageUrl: "assets/imgs/P1_04.png",
            imageCaption: "The Ptolemaic system: an ancient astronomical model that posits the Earth as the center of the universe.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "c. 800–1200 AD",
            title: "Islamic observatories refine the heavens",
            description: "In large observatories like those in Baghdad and Damascus, Islamic astronomers turn Ptolemaic theory into continuous observational practice. Monumental architectural structures allow them to measure stellar heights and planetary motions with great precision, updating astronomical tables.",
            tags: ["AL-BATTANI", "ISLAMIC OBSERVATORY", "ASTRONOMICAL TABLES"],
            imageUrl: "assets/imgs/P1_05.png",
            imageCaption: "Sectional view of the Ulugh Beg Observatory in Samarkand, showing the interior stairway wrapped around a long fixed instrument.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "c. 1200–1400 AD",
            title: "Geocentrism becomes theological architecture",
            description: "In Latin Europe, the Aristotelian-Ptolemaic system is absorbed into universities and monasteries. Commentators like Thomas Aquinas integrate the geocentric cosmos with Christian doctrine, turning scientific models into religious dogma.",
            tags: ["THOMAS AQUINAS", "SCHOLASTICISM", "CATHEDRAL SUNDIALS"],
            imageUrl: "assets/imgs/P1_06.png",
            imageCaption: "Livre des Proprietes des Choses by Barthelemy l'Anglais, c. 1480. Bibliothèque Nationale, Paris.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "c. 1250–1450 AD",
            title: "Internal critiques and the Maragha school",
            description: "Astronomers like al-Tusi criticize Ptolemy's equant, proposing new combinations of circles that remain geocentric but are more mathematically elegant. In Europe, Nicole Oresme even discusses a rotating Earth purely as a theoretical exercise.",
            tags: ["AL-TUSI", "NICOLE ORESME", "MARAGHA SCHOOL"],
            imageUrl: "assets/imgs/P1_07.png",
            imageCaption: "Illustration of Tusi Couple from Nasir al-Din al-Tusi’s al-Tadhkira fi ‘ilm al-hay’a. Staatsbibliothek zu Berlin.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1543 AD",
            title: "Copernicus shifts the dynamic center",
            description: "Nicolaus Copernicus publishes De revolutionibus orbium coelestium. The Sun becomes the center of the planetary system, and the Earth moves. The model is not yet more numerically precise, but it makes geocentrism merely one option among two.",
            tags: ["NICOLAUS COPERNICUS", "DE REVOLUTIONIBUS", "ASTRONOMICAL QUADRANT"],
            imageUrl: "assets/imgs/P1_08.png",
            imageCaption: "Nicolò Copernico, De revolutionibus orbium coelestium, 1566 edition. Biblioteca dell’INAF-Osservatorio Astronomico di Brera.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1609–1610 AD",
            title: "Galileo pierces celestial perfection",
            description: "Galileo builds and points a refracting telescope at the Moon, Jupiter, and Venus. He sees craters, satellites orbiting Jupiter, and the full phases of Venus. Ptolemaic geocentrism can no longer survive without absurd artificial fixes.",
            tags: ["GALILEO GALILEI", "REFRACTING TELESCOPE", "SIDEREUS NUNCIUS"],
            imageUrl: "assets/imgs/P1_09.png",
            imageCaption: "Galileo Galilei, Sei fasi lunari, 1609. Dal ms. Gal. 48, c. 28r. Firenze, Biblioteca nazionale centrale.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1609–1619 AD",
            title: "Kepler replaces spheres with ellipses",
            description: "Johannes Kepler uses Tycho Brahe's ultra-precise data to derive three laws of planetary motion. Orbits become ellipses with the Sun at one focus, not perfect circles. Geocentrism loses both its numerical precision and geometric elegance.",
            tags: ["JOHANNES KEPLER", "TYCHO BRAHE", "MURAL QUADRANT"],
            imageUrl: "assets/imgs/P1_10.png",
            imageCaption: "From the Astronomical Library of the late Owen Gingerich: Astronomia nova Johannes Kepler, 1609.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1687 AD",
            title: "Newton unifies apple, Moon, and stars",
            description: "With the Principia, Isaac Newton formulates the laws of motion and universal gravitation. Using calculus and Keplerian orbits, he shows that the \"center\" is just a reference point. The physics of the cosmos is unified.",
            tags: ["ISAAC NEWTON", "PRINCIPIA MATHEMATICA", "LOGARITHMIC TABLES"],
            imageUrl: "assets/imgs/P1_11.png",
            imageCaption: "Diagram from Newton's Principia demonstrating orbital trajectories and gravitational force.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1700–1900 AD",
            title: "Geocentrism remains only in books",
            description: "Measurements like stellar parallax (Bessel) and, later, stellar spectroscopy definitively confirm the Earth's motion and the non-centrality of the Sun itself in the Galaxy. Geocentrism survives only as a historical and symbolic paradigm.",
            tags: ["FRIEDRICH BESSEL", "HELIOMETER", "SPECTROSCOPE"],
            imageUrl: "assets/imgs/P1_12.png",
            imageCaption: "Joseph von Fraunhofer demonstrating the spectroscope, 1897 photogravure by Richard Wimmer.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          }
        ]
      }
    },

    {
      id: "paradigm-02",
      metadata: {
        era: "RENAISSANCE",
        tradition: "EUROPEAN_EARLY_MODERN",
        scale: "SOLAR_SYSTEM",
        structure: "HELIOCENTRIC",
        dynamics: "CLOCKWORK",
        method: "MATHEMATICS",
        searchTerms: "copernicus heliocentric sun rheticus de revolutionibus kepler ellipses digges bruno inquisition"
      },
      overview: {
        dateRange: "1514 AD — 1616 AD",
        title: "The Copernican Shift",
        subtitle: "The Sun displaces the Earth — mathematics rewrites the cosmic centre.",
        thumbnailUrl: "assets/imgs/P2_cover.png",
        sourceUrl: "https://www.qeios.com/read/NGRS8Y",
        apaCitation: "Anonymous. (n.d.). <i>Copernican heliocentrism diagram</i> [Digital image]. Qeios. https://www.qeios.com/read/NGRS8Y",
        previewTags: ["RENAISSANCE", "HELIOCENTRIC", "EUROPEAN EARLY MODERN", "MATHEMATICS"]
      },
      modal: {
        coverUrl: "assets/imgs/P2_cover.png",
        introText: [
          "Nicolaus Copernicus proposed a radical displacement: the Sun, not the Earth, occupies the center of the cosmos. His model offered a mathematically coherent system that preserved philosophical elegance while removing the messy, irregular equants of Ptolemy.",
          "However, Copernicus still clung to the ancient myth of perfect circles and celestial spheres. His heliocentrism was a massive conceptual leap, but it was physically flawed. It would take decades of religious friction and a new generation of astronomers to debug the myth of circular perfection."
        ],
        creatorId: "fig-copernicus",
        startQuote: {
          label: "THE INITIAL HYPOTHESIS — C. 1514 AD",
          text: "The mobility of the Earth will seem absurd and impossible to many. Yet if we judge it correctly, we shall find that the task I have undertaken is not without grounds.",
          author: "— Nicolaus Copernicus, Commentariolus"
        },
        endQuote: {
          label: "THE CONDEMNATION — 1616 AD",
          text: "The Copernican theory, which states that the Earth moves and the Sun stands still, is false and entirely contrary to Holy Scripture.",
          author: "— Decree of the Index of Forbidden Books"
        },
        timeline: [
          {
            date: "c. 1514 AD",
            title: "The secret manuscript",
            description: "Copernicus privately circulates a short, handwritten manuscript known as the Commentariolus. It sketches the revolutionary heliocentric hypothesis: the center of the Earth is not the center of the universe, and all spheres revolve around the Sun.",
            tags: ["COMMENTARIOLUS", "HYPOTHESIS", "MANUSCRIPT"],
            imageUrl: "assets/imgs/P2_01.png",
            imageCaption: "Autograph manuscript by Nicolaus Copernicus, illustrating his early heliocentric diagrams sketched by hand.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1539 AD",
            title: "The catalyst arrives in Frombork",
            description: "Georg Joachim Rheticus, a young mathematician from Wittenberg, travels to meet Copernicus. Fascinated by the new theory, Rheticus becomes Copernicus's sole pupil and finally convinces the aging astronomer to publish his proofs.",
            tags: ["RHETICUS", "WITTENBERG", "MATHEMATICS"],
            imageUrl: "assets/imgs/P2_02.png",
            imageCaption: "Portrait of Georg Joachim Rheticus, mathematician, astronomer, theologian, and the sole disciple of Copernicus.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1540 AD",
            title: "A teaser to the world",
            description: "Before risking the publication of the full masterpiece, Rheticus publishes the Narratio Prima, an accessible summary of the Copernican heliocentric theory. The positive reception paves the way for the paradigm shift.",
            tags: ["NARRATIO PRIMA", "PUBLICATION", "HELIOCENTRISM"],
            imageUrl: "assets/imgs/P2_03.png",
            imageCaption: "Title page from the 1566 Basel edition by Heinrich Petri, containing both De revolutionibus and the Narratio prima.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1543 AD",
            title: "The paradigm shifts on a deathbed",
            description: "De Revolutionibus Orbium Coelestium is printed. Legend states that Copernicus received the first copy on the day he died. The book proves that placing the Sun at the center elegantly explains planetary retrogradation.",
            tags: ["DE REVOLUTIONIBUS", "PARADIGM SHIFT", "PRINTING PRESS"],
            imageUrl: "assets/imgs/P2_04.png",
            imageCaption: "Visual summary of the different models of the universe in 1661 from Bartsch's Planisphærium stellatum.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1543 AD",
            title: "The apologetic preface",
            description: "Without Copernicus's consent, the theologian Andreas Osiander inserts an anonymous preface into the book. He claims the heliocentric model is merely a mathematical fiction useful for calculations, shielding the book from religious backlash.",
            tags: ["ANDREAS OSIANDER", "THEOLOGY", "CENSORSHIP"],
            imageUrl: "assets/imgs/P2_05.png",
            imageCaption: "The anonymous preface Ad lectorem, crossed out in red in the copy presented to Georg Donner. Uppsala universitetsbibliotek.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1551 AD",
            title: "The Prutenic Tables calculate the new sky",
            description: "Erasmus Reinhold publishes the Prutenic Tables using Copernican mathematics. While Reinhold does not believe the Earth moves, the tables become essential across Europe, spreading the math without the physics.",
            tags: ["ERASMUS REINHOLD", "PRUTENIC TABLES", "EPHEMERIDES"],
            imageUrl: "assets/imgs/P2_06.png",
            imageCaption: "A page from the Tabulae Prutenicae (1551) by Erasmus Reinhold, utilizing Copernican mathematical models.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1576 AD",
            title: "Shattering the outer sphere",
            description: "The English astronomer Thomas Digges translates Copernicus's work and adds a radical illustration. Unlike Copernicus, who kept the outer sphere fixed, Digges draws stars scattering infinitely into space. The closed universe breaks open.",
            tags: ["THOMAS DIGGES", "INFINITE SPACE", "COSMOLOGY"],
            imageUrl: "assets/imgs/P2_07.png",
            imageCaption: "Thomas Digges's illustration from A Perfit Description of the Caelestiall Orbes, showing stars extending infinitely.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1600 AD",
            title: "The philosophical martyr",
            description: "Giordano Bruno, a Dominican friar, embraces the Copernican model and proposes an infinite universe with countless inhabited worlds. Condemned for his theological heresies, he is burned at the stake in Rome.",
            tags: ["GIORDANO BRUNO", "INQUISITION", "INFINITE WORLDS"],
            imageUrl: "assets/imgs/P2_08.png",
            imageCaption: "Modern portrait of Giordano Bruno, based on a woodcut from Livre du recteur, 1578.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1609 AD",
            title: "The myth of the circle breaks",
            description: "Copernicus displaced the Earth, but still used perfect circles. Johannes Kepler analyses the orbit of Mars and proves orbits are actually elliptical, debunking the last Greco-Roman myth of celestial perfection.",
            tags: ["JOHANNES KEPLER", "ELLIPSES", "ASTRONOMIA NOVA"],
            imageUrl: "assets/imgs/P2_09.png",
            imageCaption: "Kepler's geometric diagram from Astronomia Nova (1609), demonstrating that the orbit of Mars is an ellipse.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1616 AD",
            title: "The condemnation",
            description: "As the physical reality of the moving Earth gains traction thanks to Galileo, the Catholic Church reacts. The Copernican theory is declared formally heretical, and De Revolutionibus is placed on the Index of Forbidden Books.",
            tags: ["INDEX LIBRORUM PROHIBITORUM", "CENSORSHIP", "GALILEO AFFAIR"],
            imageUrl: "assets/imgs/P2_10.png",
            imageCaption: "Title page of the Index Librorum Prohibitorum, the official list of banned books where Copernicus's work was placed.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          }
        ]
      }
    },

    {
      id: "paradigm-03",
      metadata: {
        era: "MODERN ASTRONOMY",
        tradition: "OBSERVATIONAL",
        scale: "GALACTIC",
        structure: "SPIRAL",
        dynamics: "EXPANSION",
        method: "TELESCOPIC SURVEY",
        searchTerms: "andromeda, hubble, lemaitre, einstein, big bang, steady state"
      },
      overview: {
        dateRange: "1910 AD — 1965 AD",
        title: "The Island Universes",
        subtitle: "Cosmic expansion is proven: our Milky Way is just one galaxy.",
        thumbnailUrl: "assets/imgs/P3_cover.jpg",
        sourceUrl: "https://science.nasa.gov/resource/hubbles-high-definition-panoramic-view-of-the-andromeda-galaxy/",
        apaCitation: "NASA, ESA, J. Dalcanton, B.F. Williams, and L.C. Johnson, the PHAT team, and R. Gendler. (n.d.). <i>Hubble's High-Definition Panoramic View of the Andromeda Galaxy</i> [Photograph]. NASA. https://science.nasa.gov/resource/hubbles-high-definition-panoramic-view-of-the-andromeda-galaxy/",
        previewTags: ["MODERN ERA", "GALACTIC", "EXPANSION", "OBSERVATIONAL"]
      },
      modal: {
        coverUrl: "assets/imgs/P3_cover.jpg",
        introText: [
          "At the start of the twentieth century, astronomers still debated whether spiral nebulae belonged inside the Milky Way or were separate stellar systems. The answer required a new distance ladder, built from Henrietta Leavitt's Cepheid variable stars.",
          "Hubble's observations of Andromeda showed that the spiral nebulae were external galaxies. Combined with redshift measurements and relativistic cosmology, this led to the expanding universe: space itself changes with time."
        ],
        creatorId: "fig-einstein",
        startQuote: {
          label: "THE DISCOVERY",
          text: "The universe is not static. It is expanding in all directions.",
          author: "— Edwin Hubble"
        },
        endQuote: {
          label: "THE LEGACY",
          text: "We are at the center of nothing, observing everything.",
          author: "— Georges Lemaître"
        },
        timeline: [
          {
            date: "1915 AD",
            title: "Spacetime becomes a fabric",
            description: "Einstein publishes General Relativity, redefining gravity not as a force, but as the curvature of the spacetime fabric.",
            tags: ["GENERAL RELATIVITY", "SPACETIME", "EINSTEIN"],
            imageUrl: "assets/imgs/P3_01.png",
            imageCaption: "The visualization of the spacetime fabric curvature.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1920 AD",
            title: "The Great Debate",
            description: "The famous debate about whether spiral nebulae are part of the Milky Way or independent 'island universes'.",
            tags: ["ANDROMEDA", "GREAT DEBATE", "NEBULAE"],
            imageUrl: "assets/imgs/P3_02.png",
            imageCaption: "The Great Nebula in Andromeda (Photogravure by Keeler, 1900).",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1924 AD",
            title: "Measuring the island universes",
            description: "Edwin Hubble uses Cepheid variables to prove that Andromeda is far beyond the Milky Way, expanding the scale of the universe.",
            tags: ["HUBBLE", "ANDROMEDA", "CEPHIDS"],
            imageUrl: "assets/imgs/P3_03.png",
            imageCaption: "Modern composite view of the Andromeda Galaxy.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1927 AD",
            title: "The Primeval Atom",
            description: "Georges Lemaître proposes that the universe started from a single 'primeval atom', the foundation of the Big Bang theory.",
            tags: ["LEMAITRE", "BIG BANG", "ORIGINS"],
            imageUrl: "assets/imgs/P3_04.png",
            imageCaption: "Lemaître with Millikan and Einstein.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1929 AD",
            title: "The redshift reveals expansion",
            description: "Hubble observes that distant galaxies are moving away from us, providing the first evidence of an expanding universe.",
            tags: ["REDSHIFT", "HUBBLE LAW", "EXPANSION"],
            imageUrl: "assets/imgs/P3_05.png",
            imageCaption: "Original Hubble diagram showing galactic recession.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1948 AD",
            title: "The Steady State pushback",
            description: "Fred Hoyle proposes the Steady State theory to challenge the Big Bang, sparking a fierce debate that would last decades.",
            tags: ["STEADY STATE", "FRED HOYLE", "COSMOLOGY"],
            imageUrl: "assets/imgs/P3_06.png",
            imageCaption: "Fred Hoyle speaking at the BBC radio station.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1964 AD",
            title: "Catching the echo of creation",
            description: "Penzias and Wilson accidentally discover the Cosmic Microwave Background radiation, the definitive proof of the Big Bang.",
            tags: ["CMB", "BIG BANG", "HOLMDEL HORN"],
            imageUrl: "assets/imgs/P3_07.png",
            imageCaption: "The Holmdel Horn Antenna.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1977 AD",
            title: "A speck in the void",
            description: "The Voyager probe captures the 'Pale Blue Dot' photo, putting our entire existence into perspective as a tiny speck in the void.",
            tags: ["VOYAGER", "PALE BLUE DOT", "PERSPECTIVE"],
            imageUrl: "assets/imgs/P3_08.png",
            imageCaption: "The Pale Blue Dot image.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1990 AD",
            title: "Staring into the dark",
            description: "The Hubble Deep Field image stares into a seemingly empty patch of sky, revealing thousands of hidden galaxies.",
            tags: ["HUBBLE DEEP FIELD", "DEEP SPACE", "GALAXIES"],
            imageUrl: "assets/imgs/P3_09.png",
            imageCaption: "The Hubble Deep Field image.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1998 AD",
            title: "The acceleration anomaly",
            description: "Observation of distant supernovae reveals that the expansion of the universe is actually accelerating, leading to the discovery of Dark Energy.",
            tags: ["SUPERNOVA", "DARK ENERGY", "ACCELERATION"],
            imageUrl: "assets/imgs/P3_10.png",
            imageCaption: "The High-Z Supernova Search Team.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          }
        ]
      }
    },

    {
      id: "paradigm-04",
      metadata: {
        era: "CONTEMPORARY ERA",
        tradition: "DATA-DRIVEN",
        scale: "VOID AND FILAMENT",
        structure: "INVISIBLE",
        dynamics: "QUANTUM",
        method: "BIG DATA ASTRONOMY",
        searchTerms: "dark matter, dark energy, exoplanet, gravitational wave, cosmic web, euclid, jwst, rubin"
      },
      overview: {
        dateRange: "1995 AD — PRESENT",
        title: "The Unseen Universe",
        subtitle: "Cosmology maps invisible forces, black holes, and ripples in spacetime.",
        thumbnailUrl: "assets/imgs/P4_cover.jpg",
        sourceUrl: "https://science.nasa.gov/photojournal/planck-and-the-cosmic-microwave-background-artist-concept/",
        apaCitation: "ESA and the Planck Collaboration - D. Ducros. (n.d.). <i>Planck and the Cosmic Microwave Background (Artist Concept)</i> [Digital illustration]. NASA. https://science.nasa.gov/photojournal/planck-and-the-cosmic-microwave-background-artist-concept/",
        previewTags: ["CONTEMPORARY ERA", "INVISIBLE", "DATA-DRIVEN", "QUANTUM"]
      },
      modal: {
        coverUrl: "assets/imgs/P4_cover.jpg",
        introText: [
          "By the dawn of the 21st century, astronomers faced a humbling realization: everything humanity had ever observed—every star, planet, and galaxy—makes up less than 5% of the universe. The rest is Dark Matter and Dark Energy.",
          "Welcome to the Unseen Universe. In this era, visual light is no longer enough. We now 'see' by capturing infrared heat, detecting gravitational wobbles, and feeling the literal stretching of spacetime caused by colliding black holes."
        ],
        creatorId: "fig-mayor",
        startQuote: {
          label: "THE GREAT UNKNOWN",
          text: "The universe is made mostly of dark matter and dark energy, and we don't know what either of them is.",
          author: "— Saul Perlmutter"
        },
        endQuote: {
          label: "THE ONGOING QUEST",
          text: "Somewhere, something incredible is waiting to be known.",
          author: "— Carl Sagan"
        },
        timeline: [
          {
            date: "1995 AD",
            title: "Other worlds",
            description: "Discovery of 51 Pegasi b, the first exoplanet orbiting a Sun-like star. Astronomers detect the microscopic 'wobble' caused by its gravity.",
            tags: ["EXOPLANETS", "RADIAL VELOCITY", "51 PEGASI B"],
            imageUrl: "assets/imgs/P4_01.png",
            imageCaption: "Illustration of the radial velocity method, detecting the signal of an unseen planet.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "2000 AD",
            title: "Lensing the invisible",
            description: "Hubble images of Abell 2218 demonstrate gravitational lensing, where unseen dark matter bends the light of distant galaxies.",
            tags: ["GRAVITATIONAL LENSING", "DARK MATTER", "ASTROPHYSICS"],
            imageUrl: "assets/imgs/P4_02.png",
            imageCaption: "Galaxy cluster Abell 2218 acting as a powerful gravitational lens.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "2003 AD",
            title: "The invisible majority",
            description: "The WMAP satellite releases a thermal map of the cosmic microwave background, proving that visible matter makes up less than 5% of the universe.",
            tags: ["WMAP", "DARK MATTER", "COSMIC BACKGROUND"],
            imageUrl: "assets/imgs/P4_03.png",
            imageCaption: "WMAP full-sky image, revealing the composition of the universe.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "2005 AD",
            title: "The cosmic web",
            description: "Supercomputer simulations like the Millennium Run reveal the universe's 'Cosmic Web,' showing that galaxies are nodes on a dark matter scaffold.",
            tags: ["COSMIC WEB", "SUPERCOMPUTERS", "DARK MATTER"],
            imageUrl: "assets/imgs/P4_04.png",
            imageCaption: "A simulation of the dark matter distribution in the cosmic web.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "2013 AD",
            title: "Ghost particles",
            description: "IceCube detects high-energy neutrinos from space, opening a non-visual, particle-based window into the violent cosmos.",
            tags: ["NEUTRINO ASTRONOMY", "ICECUBE", "PARTICLE PHYSICS"],
            imageUrl: "assets/imgs/P4_05.png",
            imageCaption: "The IceCube Laboratory at the South Pole, catching ghost particles from deep space.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "2015 AD",
            title: "Ripples in spacetime",
            description: "LIGO detects the first gravitational waves from colliding black holes. Physics begins 'listening' to the vibrations of the void.",
            tags: ["GRAVITATIONAL WAVES", "LIGO", "GW150914"],
            imageUrl: "assets/imgs/P4_06.png",
            imageCaption: "The official strain data of GW150914, proving the first direct measurement of spacetime ripples.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "2019 AD",
            title: "Photographing the unseeable",
            description: "The Event Horizon Telescope captures the first-ever image of a black hole's shadow in galaxy M87 using a global network of radio telescopes.",
            tags: ["EVENT HORIZON TELESCOPE", "BLACK HOLE", "M87*"],
            imageUrl: "assets/imgs/P4_07.png",
            imageCaption: "The first image of a black hole's shadow in the M87 galaxy.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "2022 AD",
            title: "Piercing the dust",
            description: "JWST begins operations, using infrared light to see through thick dust clouds and reveal the birth of the first stars.",
            tags: ["JWST", "INFRARED ASTRONOMY", "COSMIC DUST"],
            imageUrl: "assets/imgs/P4_08.png",
            imageCaption: "The 'Cosmic Cliffs' in the Carina Nebula, captured by JWST.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "2023 AD",
            title: "Mapping the dark",
            description: "The Euclid telescope begins its survey to map billions of galaxies and reveal the nature of Dark Energy and Dark Matter.",
            tags: ["EUCLID TELESCOPE", "DARK ENERGY", "BIG DATA"],
            imageUrl: "assets/imgs/P4_09.png",
            imageCaption: "Euclid's view of the Perseus cluster, mapping the invisible scaffolding of the universe.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "2025 AD",
            title: "The universe in motion",
            description: "The Vera C. Rubin Observatory begins a decade-long survey, capturing a high-definition time-lapse of the entire visible sky, moving beyond static snapshots.",
            tags: ["VERA RUBIN OBSERVATORY", "LSST", "TIME-DOMAIN ASTRONOMY"],
            imageUrl: "assets/imgs/P4_10.png",
            imageCaption: "The Rubin Observatory primary mirror seen through the slit of the dome at sunset, ready to map the dynamic cosmos.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          }
        ]
      }
    },

    {
      id: "paradigm-05",
      metadata: {
        era: "QUANTUM ERA",
        tradition: "THEORETICAL & PARTICLE PHYSICS",
        scale: "SUBATOMIC TO COSMIC",
        structure: "SINGULARITY",
        dynamics: "PROBABILISTIC",
        method: "PARTICLE COLLIDERS AND MATHEMATICAL MODELING",
        searchTerms: "quantum, higgs, inflation, string theory, multiverse, entanglement"
      },
      overview: {
        dateRange: "1927 AD — PRESENT",
        title: "The Quantum Origin",
        subtitle: "Inflation, fluctuations and the search for quantum gravity.",
        thumbnailUrl: "assets/imgs/P5_cover.jpg",
        sourceUrl: "https://www.nationalgeographic.com.es/ciencia/poniendo-bang-big-bang_14885",
        apaCitation: "Daniloff, C., MIT, ESA, Hubble, & NASA. (n.d.). <i>Poniendo el Bang en el Big Bang</i> [Digital image]. National Geographic. https://www.nationalgeographic.com.es/ciencia/poniendo-bang-big-bang_14885",
        previewTags: ["QUANTUM ERA", "SINGULARITY", "PARTICLE PHYSICS"]
      },
      modal: {
        coverUrl: "assets/imgs/P5_cover.jpg",
        introText: [
          "Prima delle stelle, prima delle galassie, prima ancora della luce, c'era uno stato di energia pura governato dal caso quantistico.",
          "In questo paradigma, smettiamo di guardare verso l'esterno e guardiamo 'dentro' il vuoto. Scopriamo che quello che chiamiamo 'nulla' è in realtà un ribollire costante di particelle virtuali che appaiono e scompaiono. È qui che l'universo ha scritto il suo codice sorgente."
        ],
        creatorId: "fig-heisenberg",
        startQuote: {
          label: "THE GREAT UNCERTAINTY",
          text: "God does not play dice with the universe.",
          author: "— Albert Einstein"
        },
        endQuote: {
          label: "THE ONGOING QUEST",
          text: "The vacuum is not empty; it is the stage for everything.",
          author: "— Frank Wilczek"
        },
        timeline: [
          {
            date: "1927 AD",
            title: "The Uncertainty Principle",
            description: "Heisenberg states that we cannot know both position and momentum of a particle perfectly. Determinism dies; quantum mechanics is born.",
            tags: ["HEISENBERG", "QUANTUM MECHANICS", "PROBABILITY"],
            imageUrl: "assets/imgs/P5_01.png",
            imageCaption: "Diffraction pattern of electrons, showing individual unpredictable hits forming a wave-like distribution.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1980 AD",
            title: "Inflationary Expansion",
            description: "Alan Guth proposes a phase of exponential growth in the first fraction of a second, explaining the universe's uniformity.",
            tags: ["INFLATION", "ALAN GUTH", "EARLY UNIVERSE"],
            imageUrl: "assets/imgs/P5_02.png",
            imageCaption: "Timeline of the universe's expansion showing the initial inflationary surge.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1983 AD",
            title: "The Multiverse Hypothesis",
            description: "Andrei Linde proposes 'Eternal Inflation', suggesting our universe is one bubble in an ever-growing multiverse of infinite bubbles.",
            tags: ["MULTIVERSE", "ETERNAL INFLATION", "BUBBLE UNIVERSES"],
            imageUrl: "assets/imgs/P5_03.png",
            imageCaption: "A timeline history of the universe as understood by the WMAP Science Team.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "2003 AD",
            title: "The Landscape of Possibilities",
            description: "String theory suggests a 'Landscape' of $10^{500}$ potential vacuum states, explaining why our universe is fine-tuned for life.",
            tags: ["STRING THEORY", "FINE-TUNING", "ANTHROPIC PRINCIPLE"],
            imageUrl: "assets/imgs/P5_04.png",
            imageCaption: "Visualizing the complex topography of potential vacuum states in string theory.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "2012 AD",
            title: "The Birth of the Higgs Field",
            description: "LHC confirms the Higgs Boson, proving the existence of an invisible field that gives mass to fundamental particles.",
            tags: ["HIGGS BOSON", "LHC", "PARTICLE PHYSICS"],
            imageUrl: "assets/imgs/P5_05.png",
            imageCaption: "The statistical 'bump' in the data that confirmed the Higgs boson discovery.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1928 AD",
            title: "Quantum Tunneling",
            description: "Particles defy classical barriers, a 'miracle' that allows hydrogen fusion in the Sun and powers all stars.",
            tags: ["QUANTUM TUNNELING", "NUCLEAR FUSION", "STELLAR PHYSICS"],
            imageUrl: "assets/imgs/P5_06.png",
            imageCaption: "Probability diagram of a particle tunneling through an energy barrier.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1935 AD",
            title: "Quantum Entanglement",
            description: "Particles remain connected across any distance, challenging our understanding of space and locality as an interconnected whole.",
            tags: ["ENTANGLEMENT", "EPR PARADOX", "NON-LOCALITY"],
            imageUrl: "assets/imgs/P5_07.png",
            imageCaption: "Spontaneous parametric down-conversion splitting photons into entangled pairs.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1993 AD",
            title: "The Holographic Principle",
            description: "Susskind and 't Hooft suggest our 3D universe might be a projection of information encoded on a 2D surface.",
            tags: ["HOLOGRAPHIC PRINCIPLE", "BLACK HOLE THERMODYNAMICS", "INFORMATION THEORY"],
            imageUrl: "assets/imgs/P5_08.png",
            imageCaption: "A timeline of the holographic universe showing the transition from a blurry holographic phase to geometric reality.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "1948 AD",
            title: "The Quantum Vacuum",
            description: "Casimir predicts Zero-Point Energy. Even in a void, space is a bubbling foam of microscopic particle activity.",
            tags: ["VACUUM ENERGY", "CASIMIR EFFECT", "QUANTUM FOAM"],
            imageUrl: "assets/imgs/P5_09.png",
            imageCaption: "NASA observations setting limits on the 'foaminess' of spacetime at extreme scales.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          },
          {
            date: "PRESENT",
            title: "The Search for Unity",
            description: "The quest to bridge General Relativity and Quantum Mechanics. A final theory that would mathematically describe the entire cosmos.",
            tags: ["THEORY OF EVERYTHING", "UNIFICATION", "GRAND UNIFIED THEORY"],
            imageUrl: "assets/imgs/P5_10.png",
            imageCaption: "Simulated CMS particle collision producing a Higgs boson—the search for the fundamental laws continues.",
            sourceUrl: "Manca il link",
            apaCitation: "Manca il link"
          }
        ]
      }
    }
  ]
};