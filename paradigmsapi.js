/**
 * paradigmsapi.js
 * Dati dei paradigmi cosmologici nella struttura globale `archiveData`
 * attesa da index.html.
 */

const archiveData = {
  figures: [
    {
      id: "fig-ptolemy",
      name: "Claudius Ptolemy",
      born: "c. 100 CE",
      died: "c. 170 CE",
      nationality: "Greco-Egyptian",
      field: "Astronomer, Mathematician, Geographer",
      portraitUrl: "assets/paradigms_images/claudius_ptolemy.png",
      sourceUrl: "https://en.wikipedia.org/wiki/Ptolemy",
      apaCitation: "Anonymous. (n.d.). <i>Portrait of Claudius Ptolemy</i> [Engraving]. Wikipedia. Retrieved from https://en.wikipedia.org/wiki/Ptolemy"
    },
    {
      id: "fig-copernicus",
      name: "Nicolaus Copernicus",
      born: "19 Feb 1473",
      died: "24 May 1543",
      nationality: "Polish",
      field: "Astronomer, Mathematician, Canon",
      portraitUrl: "assets/paradigms_images/nicolaus_copernicus.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Nicolaus_Copernicus",
      apaCitation: "Anonymous. (16th Century). <i>Portrait of Nicolaus Copernicus</i> [Painting]. Wikipedia. Retrieved from https://en.wikipedia.org/wiki/Nicolaus_Copernicus"
    },
    {
      id: "fig-modern-astronomy",
      name: "Edwin Hubble",
      born: "20 Nov 1889",
      died: "28 Sep 1953",
      nationality: "American",
      field: "Astronomer",
      portraitUrl: "assets/paradigms_images/edwin_powell.jpeg",
      sourceUrl: "https://en.wikipedia.org/wiki/Edwin_Hubble",
      apaCitation: "Anonymous. (c. 1920). <i>Edwin Hubble at the 100-inch telescope</i> [Photograph]. Wikipedia. Retrieved from https://en.wikipedia.org/wiki/Edwin_Hubble"
    },
    {
      id: "fig-quantum-physics",
      name: "Alan Guth",
      born: "27 Feb 1947",
      died: "",
      nationality: "American",
      field: "Theoretical Physicist, Cosmologist",
      portraitUrl: "assets/paradigms_images/alan_guth.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Alan_Guth",
      apaCitation: "Anonymous. (n.d.). <i>Alan Guth</i> [Photograph]. Wikipedia. Retrieved from https://en.wikipedia.org/wiki/Alan_Guth"
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
        thumbnailUrl: "assets/paradigms_images/P1_cover.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:1660_illustration_of_Claudius_Ptolemy%27s_geocentric_model_of_the_Universe.jpg",
        apaCitation: "Cellarius, A. (1660). <i>1660 illustration of Claudius Ptolemy's geocentric model of the Universe</i> [Illustration]. Wikimedia Commons. Retrieved from https://commons.wikimedia.org/wiki/File:1660_illustration_of_Claudius_Ptolemy%27s_geocentric_model_of_the_Universe.jpg",
        previewTags: ["ANTIQUITY", "GEOCENTRIC", "GRECO-ROMAN", "MYTH & PHILOSOPHY"]
      },
      modal: {
        coverUrl: "assets/paradigms_images/P1_cover.jpg",
        introText: [
          "For over fourteen centuries, humanity placed the Earth at the center of a divine, unchanging cosmos. Claudius Ptolemy's Almagest codified this intuition into a rigorous geometric system — crystalline spheres carrying the Sun, Moon, and five visible planets in perfect circular motion around a motionless Earth.",
          "The model endured because it was technically adequate, even as it was philosophically comforting: humanity remained the still point around which heaven turned."
        ],
        creatorId: "fig-ptolemy",
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
            imageUrl: "assets/paradigms_images/P1_01.png",
            imageCaption: "The Ptolemaic universe from Andrew Borde's The First Book of the Introduction of Knowledge, 1542.",
            sourceUrl: "https://www.luminarium.org/encyclopedia/medievalcosmology.htm",
            apaCitation: "Borde, A. (1542). <i>The Ptolemaic universe</i> [Illustration]. Luminarium. Retrieved from https://www.luminarium.org/encyclopedia/medievalcosmology.htm"
          },
          {
            date: "c. 280–240 BC",
            title: "Eratosthenes measures the body of the center",
            description: "Eratosthenes uses only a gnomon, two wells, and geometry to calculate the Earth's circumference almost correctly. The Earth-center of the cosmos is no longer just a metaphysical idea, but an object with measurable dimensions.",
            tags: ["ERATOSTHENES", "GNOMON", "GEOMETRY"],
            imageUrl: "assets/paradigms_images/P1_02.png",
            imageCaption: "Measure of Earth's circumference according to Cleomedes's simplified version, based on the approximation that Syene is on the Tropic of Cancer.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Eratosthenes_measure_of_Earth_circumference.svg",
            apaCitation: "Anonymous. (n.d.). <i>Eratosthenes measure of Earth circumference</i> [Diagram]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/e/e0/Eratosthenes_measure_of_Earth_circumference.svg"
          },
          {
            date: "c. 200–150 BC",
            title: "Epicycles and eccentrics before Ptolemy",
            description: "Apollonius and Hipparchus introduce epicycles and eccentrics to model planetary retrogradations and apparent speed variations without abandoning the Earth at the center. The geometric grammar that Ptolemy will use is born.",
            tags: ["APOLLONIUS", "HIPPARCHUS", "STAR CATALOGUES"],
            imageUrl: "assets/paradigms_images/P1_03.png",
            imageCaption: "The complexity to be described by the geocentric model, engraved for the Encyclopaedia Britannica, 1771.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Cassini_apparent.jpg",
            apaCitation: "Encyclopaedia Britannica. (1771). <i>Cassini apparent</i> [Engraving]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/3/3d/Cassini_apparent.jpg"
          },
          {
            date: "c. 150 AD",
            title: "The Almagest crystallizes the machine",
            description: "Ptolemy compiles the Mathematike Syntaxis, later known as the Almagest. With deferents, epicycles, and the equant, he builds a powerful predictive model. The astrolabe and armillary spheres become physical interfaces of this mathematical universe.",
            tags: ["CLAUDIUS PTOLEMY", "ASTROLABE", "ARMILLARY SPHERE"],
            imageUrl: "assets/paradigms_images/P1_04.png",
            imageCaption: "The Ptolemaic system: an ancient astronomical model that posits the Earth as the center of the universe.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Ptolemaic_system.svg",
            apaCitation: "Anonymous. (n.d.). <i>Ptolemaic system</i> [Diagram]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/1/19/Ptolemaic_system.svg"
          },
          {
            date: "c. 800–1200 AD",
            title: "Islamic observatories refine the heavens",
            description: "In large observatories like those in Baghdad and Damascus, Islamic astronomers turn Ptolemaic theory into continuous observational practice. Monumental architectural structures allow them to measure stellar heights and planetary motions with great precision, updating astronomical tables.",
            tags: ["AL-BATTANI", "ISLAMIC OBSERVATORY", "ASTRONOMICAL TABLES"],
            imageUrl: "assets/paradigms_images/P1_05.png",
            imageCaption: "Sectional view of the Ulugh Beg Observatory in Samarkand, showing the interior stairway wrapped around a long fixed instrument.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Samarcande_-_observatoire_Oulough_Beg_-_02.jpg",
            apaCitation: "Anonymous. (n.d.). <i>Ulugh Beg Observatory</i> [Photograph]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/6/6d/Samarcande_-_observatoire_Oulough_Beg_-_02.jpg"
          },
          {
            date: "c. 1200–1400 AD",
            title: "Geocentrism becomes theological architecture",
            description: "In Latin Europe, the Aristotelian-Ptolemaic system is absorbed into universities and monasteries. Commentators like Thomas Aquinas integrate the geocentric cosmos with Christian doctrine, turning scientific models into religious dogma.",
            tags: ["THOMAS AQUINAS", "SCHOLASTICISM", "CATHEDRAL SUNDIALS"],
            imageUrl: "assets/paradigms_images/P1_06.png",
            imageCaption: "Livre des Proprietes des Choses by Barthelemy l'Anglais, c. 1480. Bibliothèque Nationale, Paris.",
            sourceUrl: "https://www.wga.hu/art/m/miniatur/15c/3/031_15.jpg",
            apaCitation: "L'Anglais, B. (c. 1480). <i>Livre des Proprietes des Choses</i> [Miniature]. Web Gallery of Art. Retrieved from https://www.wga.hu/art/m/miniatur/15c/3/031_15.jpg"
          },
          {
            date: "c. 1250–1450 AD",
            title: "Internal critiques and the Maragha school",
            description: "Astronomers like al-Tusi criticize Ptolemy's equant, proposing new combinations of circles that remain geocentric but are more mathematically elegant. In Europe, Nicole Oresme even discusses a rotating Earth purely as a theoretical exercise.",
            tags: ["AL-TUSI", "NICOLE ORESME", "MARAGHA SCHOOL"],
            imageUrl: "assets/paradigms_images/P1_07.png",
            imageCaption: "Illustration of Tusi Couple from Nasir al-Din al-Tusi’s al-Tadhkira fi ‘ilm al-hay’a. Staatsbibliothek zu Berlin.",
            sourceUrl: "https://blog.sbb.berlin/wp-content/uploads/Tusi-Paar-930x1024.png",
            apaCitation: "Al-Tusi, N. (n.d.). <i>Tusi Couple</i> [Manuscript illustration]. Staatsbibliothek zu Berlin. Retrieved from https://blog.sbb.berlin/wp-content/uploads/Tusi-Paar-930x1024.png"
          },
          {
            date: "1543 AD",
            title: "Copernicus shifts the dynamic center",
            description: "Nicolaus Copernicus publishes De revolutionibus orbium coelestium. The Sun becomes the center of the planetary system, and the Earth moves. The model is not yet more numerically precise, but it makes geocentrism merely one option among two.",
            tags: ["NICOLAUS COPERNICUS", "DE REVOLUTIONIBUS", "ASTRONOMICAL QUADRANT"],
            imageUrl: "assets/paradigms_images/P1_08.png",
            imageCaption: "Nicolò Copernico, De revolutionibus orbium coelestium, 1566 edition. Biblioteca dell’INAF-Osservatorio Astronomico di Brera.",
            sourceUrl: "https://museoastronomico.brera.inaf.it/wp-content/uploads/2019/06/009.jpg",
            apaCitation: "Copernicus, N. (1566). <i>De revolutionibus orbium coelestium</i> [Book cover]. Museo Astronomico di Brera. Retrieved from https://museoastronomico.brera.inaf.it/wp-content/uploads/2019/06/009.jpg"
          },
          {
            date: "1609–1610 AD",
            title: "Galileo pierces celestial perfection",
            description: "Galileo builds and points a refracting telescope at the Moon, Jupiter, and Venus. He sees craters, satellites orbiting Jupiter, and the full phases of Venus. Ptolemaic geocentrism can no longer survive without absurd artificial fixes.",
            tags: ["GALILEO GALILEI", "REFRACTING TELESCOPE", "SIDEREUS NUNCIUS"],
            imageUrl: "assets/paradigms_images/P1_09.png",
            imageCaption: "Galileo Galilei, Sei fasi lunari, 1609. Dal ms. Gal. 48, c. 28r. Firenze, Biblioteca nazionale centrale.",
            sourceUrl: "https://img.ilgcdn.com/sites/default/files/styles/xl/public/foto/2017/11/18/1510992938-galilei-appunti.jpg?_=1510992938&format=webp",
            apaCitation: "Galilei, G. (1609). <i>Sei fasi lunari</i> [Manuscript sketch]. Biblioteca Nazionale Centrale, Firenze. Retrieved from https://img.ilgcdn.com/sites/default/files/styles/xl/public/foto/2017/11/18/1510992938-galilei-appunti.jpg?_=1510992938&format=webp"
          },
          {
            date: "1609–1619 AD",
            title: "Kepler replaces spheres with ellipses",
            description: "Johannes Kepler uses Tycho Brahe's ultra-precise data to derive three laws of planetary motion. Orbits become ellipses with the Sun at one focus, not perfect circles. Geocentrism loses both its numerical precision and geometric elegance.",
            tags: ["JOHANNES KEPLER", "TYCHO BRAHE", "MURAL QUADRANT"],
            imageUrl: "assets/paradigms_images/P1_10.png",
            imageCaption: "From the Astronomical Library of the late Owen Gingerich: Astronomia nova Johannes Kepler, 1609.",
            sourceUrl: "https://www.christies.com/img/LotImages/2025/NYR/2025_NYR_22661_0100_003(astronomia_nova_johannes_kepler_1609105057).jpg?mode=max",
            apaCitation: "Kepler, J. (1609). <i>Astronomia nova</i> [Book]. Christie's. Retrieved from https://www.christies.com/img/LotImages/2025/NYR/2025_NYR_22661_0100_003(astronomia_nova_johannes_kepler_1609105057).jpg?mode=max"
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
        thumbnailUrl: "assets/paradigms_images/P2_cover.png",
        sourceUrl: "https://www.qeios.com/read/NGRS8Y",
        apaCitation: "Anonymous. (n.d.). <i>Copernican heliocentrism diagram</i> [Illustration]. Qeios. Retrieved from https://www.qeios.com/read/NGRS8Y",
        previewTags: ["RENAISSANCE", "HELIOCENTRIC", "EUROPEAN EARLY MODERN", "MATHEMATICS"]
      },
      modal: {
        coverUrl: "assets/paradigms_images/P2_cover.png",
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
            imageUrl: "assets/paradigms_images/P2_01.png",
            imageCaption: "Autograph manuscript by Nicolaus Copernicus, illustrating his early heliocentric diagrams sketched by hand.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Copernicus_manuscript_-_De_revolutionibus_orbium_coelestium.jpg",
            apaCitation: "Copernicus, N. (c. 1514). <i>Copernicus manuscript - De revolutionibus orbium coelestium</i> [Manuscript]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/e/ee/Copernicus_manuscript_-_De_revolutionibus_orbium_coelestium.jpg"
          },
          {
            date: "1539 AD",
            title: "The catalyst arrives in Frombork",
            description: "Georg Joachim Rheticus, a young mathematician from Wittenberg, travels to meet Copernicus. Fascinated by the new theory, Rheticus becomes Copernicus's sole pupil and finally convinces the aging astronomer to publish his proofs.",
            tags: ["RHETICUS", "WITTENBERG", "MATHEMATICS"],
            imageUrl: "assets/paradigms_images/P2_02.png",
            imageCaption: "Portrait of Georg Joachim Rheticus, mathematician, astronomer, theologian, and the sole disciple of Copernicus.",
            sourceUrl: "https://www.cieletespace.fr/wp-content/uploads/2018/10/Rheticus_1000.jpg",
            apaCitation: "Anonymous. (n.d.). <i>Georg Joachim Rheticus</i> [Portrait]. Ciel et Espace. Retrieved from https://www.cieletespace.fr/wp-content/uploads/2018/10/Rheticus_1000.jpg"
          },
          {
            date: "1540 AD",
            title: "A teaser to the world",
            description: "Before risking the publication of the full masterpiece, Rheticus publishes the Narratio Prima, an accessible summary of the Copernican heliocentric theory. The positive reception paves the way for the paradigm shift.",
            tags: ["NARRATIO PRIMA", "PUBLICATION", "HELIOCENTRISM"],
            imageUrl: "assets/paradigms_images/P2_03.png",
            imageCaption: "Title page from the 1566 Basel edition by Heinrich Petri, containing both De revolutionibus and the Narratio prima.",
            sourceUrl: "https://www.christies.com/img/LotImages/2014/NYR/2014_NYR_03400_0201_000(copernicus_nicolaus_de_revolutionibus_orbium_coelestium_-_georg_johann050245).jpg",
            apaCitation: "Petri, H. (1566). <i>Narratio prima title page</i> [Document]. Christie's. Retrieved from https://www.christies.com/img/LotImages/2014/NYR/2014_NYR_03400_0201_000(copernicus_nicolaus_de_revolutionibus_orbium_coelestium_-_georg_johann050245).jpg"
          },
          {
            date: "1543 AD",
            title: "The paradigm shifts on a deathbed",
            description: "De Revolutionibus Orbium Coelestium is printed. Legend states that Copernicus received the first copy on the day he died. The book proves that placing the Sun at the center elegantly explains planetary retrogradation.",
            tags: ["DE REVOLUTIONIBUS", "PARADIGM SHIFT", "PRINTING PRESS"],
            imageUrl: "assets/paradigms_images/P2_04.png",
            imageCaption: "Visual summary of the different models of the universe in 1661 from Bartsch's Planisphærium stellatum.",
            sourceUrl: "https://assets-us-01.kc-usercontent.com/9dd25524-761a-000d-d79f-86a5086d4774/d697b876-f90f-4bce-b1de-1d9aad950016/Planisphaerium Stellatum.jpg",
            apaCitation: "Bartsch, J. (1661). <i>Planisphærium stellatum</i> [Illustration]. Retrieved from https://assets-us-01.kc-usercontent.com/9dd25524-761a-000d-d79f-86a5086d4774/d697b876-f90f-4bce-b1de-1d9aad950016/Planisphaerium Stellatum.jpg"
          },
          {
            date: "1543 AD",
            title: "The apologetic preface",
            description: "Without Copernicus's consent, the theologian Andreas Osiander inserts an anonymous preface into the book. He claims the heliocentric model is merely a mathematical fiction useful for calculations, shielding the book from religious backlash.",
            tags: ["ANDREAS OSIANDER", "THEOLOGY", "CENSORSHIP"],
            imageUrl: "assets/paradigms_images/P2_05.png",
            imageCaption: "The anonymous preface Ad lectorem, crossed out in red in the copy presented to Georg Donner. Uppsala universitetsbibliotek.",
            sourceUrl: "https://www.researchgate.net/profile/Jaroslaw-Wlodarczyk-2/publication/321906220/figure/fig4/AS:573223081578497@1513678440313/The-anonymous-preface-Ad-lectorem-added-by-Andreas-Osiander-in-De-revolutionibus.png",
            apaCitation: "Osiander, A. (1543). <i>Ad lectorem preface</i> [Document]. ResearchGate. Retrieved from https://www.researchgate.net/profile/Jaroslaw-Wlodarczyk-2/publication/321906220/figure/fig4/AS:573223081578497@1513678440313/The-anonymous-preface-Ad-lectorem-added-by-Andreas-Osiander-in-De-revolutionibus.png"
          },
          {
            date: "1551 AD",
            title: "The Prutenic Tables calculate the new sky",
            description: "Erasmus Reinhold publishes the Prutenic Tables using Copernican mathematics. While Reinhold does not believe the Earth moves, the tables become essential across Europe, spreading the math without the physics.",
            tags: ["ERASMUS REINHOLD", "PRUTENIC TABLES", "EPHEMERIDES"],
            imageUrl: "assets/paradigms_images/P2_06.png",
            imageCaption: "A page from the Tabulae Prutenicae (1551) by Erasmus Reinhold, utilizing Copernican mathematical models.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tabulae_prutenicae_1551.jpg/800px-Tabulae_prutenicae_1551.jpg",
            apaCitation: "Reinhold, E. (1551). <i>Tabulae Prutenicae</i> [Document]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tabulae_prutenicae_1551.jpg/800px-Tabulae_prutenicae_1551.jpg"
          },
          {
            date: "1576 AD",
            title: "Shattering the outer sphere",
            description: "The English astronomer Thomas Digges translates Copernicus's work and adds a radical illustration. Unlike Copernicus, who kept the outer sphere fixed, Digges draws stars scattering infinitely into space. The closed universe breaks open.",
            tags: ["THOMAS DIGGES", "INFINITE SPACE", "COSMOLOGY"],
            imageUrl: "assets/paradigms_images/P2_07.png",
            imageCaption: "Thomas Digges's illustration from A Perfit Description of the Caelestiall Orbes, showing stars extending infinitely.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/5/55/Thomas_Digges_-_A_Perfit_Description_of_the_Caelestiall_Orbes.jpg",
            apaCitation: "Digges, T. (1576). <i>A Perfit Description of the Caelestiall Orbes</i> [Illustration]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/5/55/Thomas_Digges_-_A_Perfit_Description_of_the_Caelestiall_Orbes.jpg"
          },
          {
            date: "1600 AD",
            title: "The philosophical martyr",
            description: "Giordano Bruno, a Dominican friar, embraces the Copernican model and proposes an infinite universe with countless inhabited worlds. Condemned for his theological heresies, he is burned at the stake in Rome.",
            tags: ["GIORDANO BRUNO", "INQUISITION", "INFINITE WORLDS"],
            imageUrl: "assets/paradigms_images/P2_08.png",
            imageCaption: "Modern portrait of Giordano Bruno, based on a woodcut from Livre du recteur, 1578.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/1/15/Giordano_Bruno.jpg",
            apaCitation: "Anonymous. (1578). <i>Portrait of Giordano Bruno</i> [Woodcut]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/1/15/Giordano_Bruno.jpg"
          },
          {
            date: "1609 AD",
            title: "The myth of the circle breaks",
            description: "Copernicus displaced the Earth, but still used perfect circles. Johannes Kepler analyses the orbit of Mars and proves orbits are actually elliptical, debunking the last Greco-Roman myth of celestial perfection.",
            tags: ["JOHANNES KEPLER", "ELLIPSES", "ASTRONOMIA NOVA"],
            imageUrl: "assets/paradigms_images/P2_09.png",
            imageCaption: "Kepler's geometric diagram from Astronomia Nova (1609), demonstrating that the orbit of Mars is an ellipse.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Astronomia_nova.jpg/800px-Astronomia_nova.jpg",
            apaCitation: "Kepler, J. (1609). <i>Astronomia Nova diagram</i> [Illustration]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Astronomia_nova.jpg/800px-Astronomia_nova.jpg"
          },
          {
            date: "1616 AD",
            title: "The condemnation",
            description: "As the physical reality of the moving Earth gains traction thanks to Galileo, the Catholic Church reacts. The Copernican theory is declared formally heretical, and De Revolutionibus is placed on the Index of Forbidden Books.",
            tags: ["INDEX LIBRORUM PROHIBITORUM", "CENSORSHIP", "GALILEO AFFAIR"],
            imageUrl: "assets/paradigms_images/P2_10.png",
            imageCaption: "Title page of the Index Librorum Prohibitorum, the official list of banned books where Copernicus's work was placed.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Index_Librorum_Prohibitorum_1711.jpg",
            apaCitation: "Anonymous. (1711). <i>Index Librorum Prohibitorum</i> [Document]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/2/23/Index_Librorum_Prohibitorum_1711.jpg"
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
        thumbnailUrl: "assets/paradigms_images/P3_cover.jpg",
        sourceUrl: "https://science.nasa.gov/resource/hubbles-high-definition-panoramic-view-of-the-andromeda-galaxy/",
        apaCitation: "NASA, ESA, J. Dalcanton, B.F. Williams, and L.C. Johnson, the PHAT team, and R. Gendler. (n.d.). <i>Hubble's High-Definition Panoramic View of the Andromeda Galaxy</i> [Photograph]. NASA. Retrieved from https://science.nasa.gov/resource/hubbles-high-definition-panoramic-view-of-the-andromeda-galaxy/",
        previewTags: ["MODERN ERA", "GALACTIC", "EXPANSION", "OBSERVATIONAL"]
      },
      modal: {
        coverUrl: "assets/paradigms_images/P3_cover.jpg",
        introText: [
          "At the beginning of the 20th century, the universe was thought to be small and static, contained entirely within the Milky Way.",
          "This era marks the radical transformation of our cosmic perspective: from a single island to a vast, expanding ocean of galaxies."
        ],
        creatorId: "fig-modern-astronomy",
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
            imageUrl: "assets/paradigms_images/P3_01.png",
            imageCaption: "The visualization of the spacetime fabric curvature.",
            sourceUrl: "https://i.sstatic.net/2fthm.png",
            apaCitation: "Anonymous. (n.d.). <i>Spacetime fabric curvature</i> [Diagram]. StackExchange. Retrieved from https://i.sstatic.net/2fthm.png"
          },
          {
            date: "1920 AD",
            title: "The Great Debate",
            description: "The famous debate about whether spiral nebulae are part of the Milky Way or independent 'island universes'.",
            tags: ["ANDROMEDA", "GREAT DEBATE", "NEBULAE"],
            imageUrl: "assets/paradigms_images/P3_02.png",
            imageCaption: "The Great Nebula in Andromeda (Photogravure by Keeler, 1900).",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Andromeda_Nebula_(M31)_-_1899.jpg/1024px-Andromeda_Nebula_(M31)_-_1899.jpg",
            apaCitation: "Keeler, J. E. (1900). <i>The Great Nebula in Andromeda</i> [Photogravure]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Andromeda_Nebula_(M31)_-_1899.jpg/1024px-Andromeda_Nebula_(M31)_-_1899.jpg"
          },
          {
            date: "1924 AD",
            title: "Measuring the island universes",
            description: "Edwin Hubble uses Cepheid variables to prove that Andromeda is far beyond the Milky Way, expanding the scale of the universe.",
            tags: ["HUBBLE", "ANDROMEDA", "CEPHIDS"],
            imageUrl: "assets/paradigms_images/P3_03.png",
            imageCaption: "Modern composite view of the Andromeda Galaxy.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg",
            apaCitation: "NASA/JPL-Caltech. (n.d.). <i>Andromeda Galaxy</i> [Photograph]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg"
          },
          {
            date: "1927 AD",
            title: "The Primeval Atom",
            description: "Georges Lemaître proposes that the universe started from a single 'primeval atom', the foundation of the Big Bang theory.",
            tags: ["LEMAITRE", "BIG BANG", "ORIGINS"],
            imageUrl: "assets/paradigms_images/P3_04.png",
            imageCaption: "Lemaître with Millikan and Einstein.",
            sourceUrl: "https://bigthink.com/13-8/lemaitre-priest-proved-einstein-wrong/",
            apaCitation: "Anonymous. (n.d.). <i>Lemaître with Millikan and Einstein</i> [Photograph]. Big Think. Retrieved from https://bigthink.com/13-8/lemaitre-priest-proved-einstein-wrong/"
          },
          {
            date: "1929 AD",
            title: "The redshift reveals expansion",
            description: "Hubble observes that distant galaxies are moving away from us, providing the first evidence of an expanding universe.",
            tags: ["REDSHIFT", "HUBBLE LAW", "EXPANSION"],
            imageUrl: "assets/paradigms_images/P3_05.png",
            imageCaption: "Original Hubble diagram showing galactic recession.",
            sourceUrl: "https://jila.colorado.edu/~ajsh/astr3740_14/hubble.html",
            apaCitation: "Hubble, E. (1929). <i>Hubble diagram showing galactic recession</i> [Graph]. JILA. Retrieved from https://jila.colorado.edu/~ajsh/astr3740_14/hubble.html"
          },
          {
            date: "1948 AD",
            title: "The Steady State pushback",
            description: "Fred Hoyle proposes the Steady State theory to challenge the Big Bang, sparking a fierce debate that would last decades.",
            tags: ["STEADY STATE", "FRED HOYLE", "COSMOLOGY"],
            imageUrl: "assets/paradigms_images/P3_06.png",
            imageCaption: "Fred Hoyle speaking at the BBC radio station.",
            sourceUrl: "https://bigthink.com/starts-with-a-bang/big-bang-turns-75/",
            apaCitation: "Anonymous. (n.d.). <i>Fred Hoyle speaking at the BBC radio station</i> [Photograph]. Big Think. Retrieved from https://bigthink.com/starts-with-a-bang/big-bang-turns-75/"
          },
          {
            date: "1964 AD",
            title: "Catching the echo of creation",
            description: "Penzias and Wilson accidentally discover the Cosmic Microwave Background radiation, the definitive proof of the Big Bang.",
            tags: ["CMB", "BIG BANG", "HOLMDEL HORN"],
            imageUrl: "assets/paradigms_images/P3_07.png",
            imageCaption: "The Holmdel Horn Antenna.",
            sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Horn_Antenna-in_Holmdel%2C_New_Jersey_-_restoration1.jpg",
            apaCitation: "NASA. (1965). <i>The Holmdel Horn Antenna</i> [Photograph]. Wikimedia Commons. Retrieved from https://upload.wikimedia.org/wikipedia/commons/3/37/Horn_Antenna-in_Holmdel%2C_New_Jersey_-_restoration1.jpg"
          },
          {
            date: "1977 AD",
            title: "A speck in the void",
            description: "The Voyager probe captures the 'Pale Blue Dot' photo, putting our entire existence into perspective as a tiny speck in the void.",
            tags: ["VOYAGER", "PALE BLUE DOT", "PERSPECTIVE"],
            imageUrl: "assets/paradigms_images/P3_08.png",
            imageCaption: "The Pale Blue Dot image.",
            sourceUrl: "https://science.nasa.gov/resource/voyager-pale-blue-dot-download/",
            apaCitation: "NASA/JPL-Caltech. (1990). <i>Pale Blue Dot</i> [Photograph]. NASA. Retrieved from https://science.nasa.gov/resource/voyager-pale-blue-dot-download/"
          },
          {
            date: "1990 AD",
            title: "Staring into the dark",
            description: "The Hubble Deep Field image stares into a seemingly empty patch of sky, revealing thousands of hidden galaxies.",
            tags: ["HUBBLE DEEP FIELD", "DEEP SPACE", "GALAXIES"],
            imageUrl: "assets/paradigms_images/P3_09.png",
            imageCaption: "The Hubble Deep Field image.",
            sourceUrl: "https://science.nasa.gov/asset/hubble/hubble-deep-field-image-at-full-resolution/",
            apaCitation: "NASA/ESA. (1995). <i>Hubble Deep Field</i> [Photograph]. NASA. Retrieved from https://science.nasa.gov/asset/hubble/hubble-deep-field-image-at-full-resolution/"
          },
          {
            date: "1998 AD",
            title: "The acceleration anomaly",
            description: "Observation of distant supernovae reveals that the expansion of the universe is actually accelerating, leading to the discovery of Dark Energy.",
            tags: ["SUPERNOVA", "DARK ENERGY", "ACCELERATION"],
            imageUrl: "assets/paradigms_images/P3_10.png",
            imageCaption: "The High-Z Supernova Search Team.",
            sourceUrl: "https://lweb.cfa.harvard.edu/supernova/newdata/aspen.jpg",
            apaCitation: "High-Z Supernova Search Team. (1998). <i>The High-Z Supernova Search Team</i> [Photograph]. Harvard CfA. Retrieved from https://lweb.cfa.harvard.edu/supernova/newdata/aspen.jpg"
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
        thumbnailUrl: "assets/paradigms_images/P4_cover.jpg",
        sourceUrl: "https://science.nasa.gov/photojournal/planck-and-the-cosmic-microwave-background-artist-concept/",
        apaCitation: "ESA and the Planck Collaboration - D. Ducros. (n.d.). <i>Planck and the Cosmic Microwave Background</i> [Artist concept]. NASA. Retrieved from https://science.nasa.gov/photojournal/planck-and-the-cosmic-microwave-background-artist-concept/",
        previewTags: ["CONTEMPORARY ERA", "INVISIBLE", "DATA-DRIVEN", "QUANTUM"]
      },
      modal: {
        coverUrl: "assets/paradigms_images/P4_cover.jpg",
        introText: [
          "By the dawn of the 21st century, astronomers faced a humbling realization: everything humanity had ever observed—every star, planet, and galaxy—makes up less than 5% of the universe. The rest is Dark Matter and Dark Energy.",
          "Welcome to the Unseen Universe. In this era, visual light is no longer enough. We now 'see' by capturing infrared heat, detecting gravitational wobbles, and feeling the literal stretching of spacetime caused by colliding black holes."
        ],
        creatorId: "fig-modern-astronomy",
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
            imageUrl: "assets/paradigms_images/P4_01.png",
            imageCaption: "Illustration of the radial velocity method, detecting the signal of an unseen planet.",
            sourceUrl: "https://astrobites.org/wp-content/uploads/2019/10/radial-velocity-exoplanet-obertas.gif",
            apaCitation: "Obertas, A. (2019). <i>Radial velocity method</i> [Animation]. Astrobites. Retrieved from https://astrobites.org/wp-content/uploads/2019/10/radial-velocity-exoplanet-obertas.gif"
          },
          {
            date: "2000 AD",
            title: "Lensing the invisible",
            description: "Hubble images of Abell 2218 demonstrate gravitational lensing, where unseen dark matter bends the light of distant galaxies.",
            tags: ["GRAVITATIONAL LENSING", "DARK MATTER", "ASTROPHYSICS"],
            imageUrl: "assets/paradigms_images/P4_02.png",
            imageCaption: "Galaxy cluster Abell 2218 acting as a powerful gravitational lens.",
            sourceUrl: "https://science.nasa.gov/asset/hubble/gravity-of-galaxy-cluster-abell-2218-creates-giant-lens/",
            apaCitation: "NASA/ESA. (2000). <i>Gravity of galaxy cluster Abell 2218 creates giant lens</i> [Photograph]. NASA. Retrieved from https://science.nasa.gov/asset/hubble/gravity-of-galaxy-cluster-abell-2218-creates-giant-lens/"
          },
          {
            date: "2003 AD",
            title: "The invisible majority",
            description: "The WMAP satellite releases a thermal map of the cosmic microwave background, proving that visible matter makes up less than 5% of the universe.",
            tags: ["WMAP", "DARK MATTER", "COSMIC BACKGROUND"],
            imageUrl: "assets/paradigms_images/P4_03.png",
            imageCaption: "WMAP full-sky image, revealing the composition of the universe.",
            sourceUrl: "https://science.nasa.gov/mission/wmap/wmap-overview/",
            apaCitation: "NASA/WMAP Science Team. (2003). <i>WMAP overview</i> [Digital image]. NASA. Retrieved from https://science.nasa.gov/mission/wmap/wmap-overview/"
          },
          {
            date: "2005 AD",
            title: "The cosmic web",
            description: "Supercomputer simulations like the Millennium Run reveal the universe's 'Cosmic Web,' showing that galaxies are nodes on a dark matter scaffold.",
            tags: ["COSMIC WEB", "SUPERCOMPUTERS", "DARK MATTER"],
            imageUrl: "assets/paradigms_images/P4_04.png",
            imageCaption: "A simulation of the dark matter distribution in the cosmic web.",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Cosmic_web.jpg",
            apaCitation: "Springel, V., et al. (2005). <i>Cosmic web</i> [Simulation image]. Wikimedia Commons. Retrieved from https://commons.wikimedia.org/wiki/File:Cosmic_web.jpg"
          },
          {
            date: "2013 AD",
            title: "Ghost particles",
            description: "IceCube detects high-energy neutrinos from space, opening a non-visual, particle-based window into the violent cosmos.",
            tags: ["NEUTRINO ASTRONOMY", "ICECUBE", "PARTICLE PHYSICS"],
            imageUrl: "assets/paradigms_images/P4_05.png",
            imageCaption: "The IceCube Laboratory at the South Pole, catching ghost particles from deep space.",
            sourceUrl: "https://news.wisc.edu/icecube-neutrino-observatory-gets-a-major-upgrade-beneath-the-ice/",
            apaCitation: "University of Wisconsin-Madison. (n.d.). <i>IceCube Neutrino Observatory</i> [Photograph]. UW News. Retrieved from https://news.wisc.edu/icecube-neutrino-observatory-gets-a-major-upgrade-beneath-the-ice/"
          },
          {
            date: "2015 AD",
            title: "Ripples in spacetime",
            description: "LIGO detects the first gravitational waves from colliding black holes. Physics begins 'listening' to the vibrations of the void.",
            tags: ["GRAVITATIONAL WAVES", "LIGO", "GW150914"],
            imageUrl: "assets/paradigms_images/P4_06.png",
            imageCaption: "The official strain data of GW150914, proving the first direct measurement of spacetime ripples.",
            sourceUrl: "https://cplberry.com/wp-content/uploads/2016/02/h1l1-gw150914.png",
            apaCitation: "LIGO Scientific Collaboration. (2016). <i>GW150914 strain data</i> [Graph]. Christopher Berry's Blog. Retrieved from https://cplberry.com/wp-content/uploads/2016/02/h1l1-gw150914.png"
          },
          {
            date: "2019 AD",
            title: "Photographing the unseeable",
            description: "The Event Horizon Telescope captures the first-ever image of a black hole's shadow in galaxy M87 using a global network of radio telescopes.",
            tags: ["EVENT HORIZON TELESCOPE", "BLACK HOLE", "M87*"],
            imageUrl: "assets/paradigms_images/P4_07.png",
            imageCaption: "The first image of a black hole's shadow in the M87 galaxy.",
            sourceUrl: "https://science.nasa.gov/resource/first-image-of-a-black-hole/",
            apaCitation: "Event Horizon Telescope Collaboration. (2019). <i>First image of a black hole</i> [Photograph]. NASA. Retrieved from https://science.nasa.gov/resource/first-image-of-a-black-hole/"
          },
          {
            date: "2022 AD",
            title: "Piercing the dust",
            description: "JWST begins operations, using infrared light to see through thick dust clouds and reveal the birth of the first stars.",
            tags: ["JWST", "INFRARED ASTRONOMY", "COSMIC DUST"],
            imageUrl: "assets/paradigms_images/P4_08.png",
            imageCaption: "The 'Cosmic Cliffs' in the Carina Nebula, captured by JWST.",
            sourceUrl: "https://science.nasa.gov/asset/webb/cosmic-cliffs-in-the-carina-nebula-nircam-image/",
            apaCitation: "NASA/ESA/CSA/STScI. (2022). <i>Cosmic Cliffs in the Carina Nebula</i> [Photograph]. NASA. Retrieved from https://science.nasa.gov/asset/webb/cosmic-cliffs-in-the-carina-nebula-nircam-image/"
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
        subtitle: "The universe didn't just expand; it emerged from a quantum fluctuation.",
        thumbnailUrl: "assets/paradigms_images/P5_cover.jpg",
        sourceUrl: "https://www.nationalgeographic.com.es/ciencia/poniendo-bang-big-bang_14885",
        apaCitation: "Daniloff, C., ESA, Hubble, & NASA. (n.d.). <i>Poniendo el Bang en el Big Bang</i> [Digital illustration]. National Geographic. Retrieved from https://www.nationalgeographic.com.es/ciencia/poniendo-bang-big-bang_14885",
        previewTags: ["QUANTUM ERA", "SINGULARITY", "PARTICLE PHYSICS"]
      },
      modal: {
        coverUrl: "assets/paradigms_images/P5_cover.jpg",
        introText: [
          "Prima delle stelle, prima delle galassie, prima ancora della luce, c'era uno stato di energia pura governato dal caso quantistico.",
          "In questo paradigma, smettiamo di guardare verso l'esterno e guardiamo 'dentro' il vuoto. Scopriamo che quello che chiamiamo 'nulla' è in realtà un ribollire costante di particelle virtuali che appaiono e scompaiono. È qui che l'universo ha scritto il suo codice sorgente."
        ],
        creatorId: "fig-quantum-physics",
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
            imageUrl: "assets/paradigms_images/P5_01.png",
            imageCaption: "Diffraction pattern of electrons, showing individual unpredictable hits forming a wave-like distribution.",
            sourceUrl: "https://texasgateway.org/resource/126-probability-heisenberg-uncertainty-principle",
            apaCitation: "Texas Gateway. (n.d.). <i>Probability and Heisenberg Uncertainty Principle</i> [Diagram]. Texas Gateway. Retrieved from https://texasgateway.org/resource/126-probability-heisenberg-uncertainty-principle"
          },
          {
            date: "1980 AD",
            title: "Inflationary Expansion",
            description: "Alan Guth proposes a phase of exponential growth in the first fraction of a second, explaining the universe's uniformity.",
            tags: ["INFLATION", "ALAN GUTH", "EARLY UNIVERSE"],
            imageUrl: "assets/paradigms_images/P5_02.png",
            imageCaption: "Timeline of the universe's expansion showing the initial inflationary surge.",
            sourceUrl: "https://science.nasa.gov/universe/overview/",
            apaCitation: "NASA. (n.d.). <i>Universe overview</i> [Illustration]. NASA. Retrieved from https://science.nasa.gov/universe/overview/"
          },
          {
            date: "1983 AD",
            title: "The Multiverse Hypothesis",
            description: "Andrei Linde proposes 'Eternal Inflation', suggesting our universe is one bubble in an ever-growing multiverse of infinite bubbles.",
            tags: ["MULTIVERSE", "ETERNAL INFLATION", "BUBBLE UNIVERSES"],
            imageUrl: "assets/paradigms_images/P5_03.png",
            imageCaption: "A timeline history of the universe as understood by the WMAP Science Team.",
            sourceUrl: "https://www.thoughtco.com/what-is-inflation-theory-2698852",
            apaCitation: "NASA/WMAP Science Team. (n.d.). <i>Timeline of the universe</i> [Diagram]. ThoughtCo. Retrieved from https://www.thoughtco.com/what-is-inflation-theory-2698852"
          },
          {
            date: "2003 AD",
            title: "The Landscape of Possibilities",
            description: "String theory suggests a 'Landscape' of $10^{500}$ potential vacuum states, explaining why our universe is fine-tuned for life.",
            tags: ["STRING THEORY", "FINE-TUNING", "ANTHROPIC PRINCIPLE"],
            imageUrl: "assets/paradigms_images/P5_04.png",
            imageCaption: "Visualizing the complex topography of potential vacuum states in string theory.",
            sourceUrl: "https://cerncourier.com/a/lost-in-the-landscape/",
            apaCitation: "CERN Courier. (n.d.). <i>Lost in the landscape</i> [Illustration]. CERN Courier. Retrieved from https://cerncourier.com/a/lost-in-the-landscape/"
          },
          {
            date: "2012 AD",
            title: "The Birth of the Higgs Field",
            description: "LHC confirms the Higgs Boson, proving the existence of an invisible field that gives mass to fundamental particles.",
            tags: ["HIGGS BOSON", "LHC", "PARTICLE PHYSICS"],
            imageUrl: "assets/paradigms_images/P5_05.png",
            imageCaption: "The statistical 'bump' in the data that confirmed the Higgs boson discovery.",
            sourceUrl: "https://cds.cern.ch/record/2012465/plots",
            apaCitation: "CERN. (2012). <i>Higgs boson data plots</i> [Graph]. CERN Document Server. Retrieved from https://cds.cern.ch/record/2012465/plots"
          },
          {
            date: "1928 AD",
            title: "Quantum Tunneling",
            description: "Particles defy classical barriers, a 'miracle' that allows hydrogen fusion in the Sun and powers all stars.",
            tags: ["QUANTUM TUNNELING", "NUCLEAR FUSION", "STELLAR PHYSICS"],
            imageUrl: "assets/paradigms_images/P5_06.png",
            imageCaption: "Probability diagram of a particle tunneling through an energy barrier.",
            sourceUrl: "https://byjus.com/physics/quantum-tunnelling/",
            apaCitation: "BYJU'S. (n.d.). <i>Quantum Tunnelling</i> [Diagram]. BYJU'S. Retrieved from https://byjus.com/physics/quantum-tunnelling/"
          },
          {
            date: "1935 AD",
            title: "Quantum Entanglement",
            description: "Particles remain connected across any distance, challenging our understanding of space and locality as an interconnected whole.",
            tags: ["ENTANGLEMENT", "EPR PARADOX", "NON-LOCALITY"],
            imageUrl: "assets/paradigms_images/P5_07.png",
            imageCaption: "Spontaneous parametric down-conversion splitting photons into entangled pairs.",
            sourceUrl: "https://en.wikipedia.org/wiki/Quantum_entanglement",
            apaCitation: "Anonymous. (n.d.). <i>Spontaneous parametric down-conversion</i> [Diagram]. Wikimedia Commons. Retrieved from https://en.wikipedia.org/wiki/Quantum_entanglement"
          },
          {
            date: "1993 AD",
            title: "The Holographic Principle",
            description: "Susskind and 't Hooft suggest our 3D universe might be a projection of information encoded on a 2D surface.",
            tags: ["HOLOGRAPHIC PRINCIPLE", "BLACK HOLE THERMODYNAMICS", "INFORMATION THEORY"],
            imageUrl: "assets/paradigms_images/P5_08.png",
            imageCaption: "A timeline of the holographic universe showing the transition from a blurry holographic phase to geometric reality.",
            sourceUrl: "https://phys.org/news/2017-01-reveals-substantial-evidence-holographic-universe.html",
            apaCitation: "Niayesh Afshordi, et al. (2017). <i>Holographic universe timeline</i> [Diagram]. Phys.org. Retrieved from https://phys.org/news/2017-01-reveals-substantial-evidence-holographic-universe.html"
          },
          {
            date: "1948 AD",
            title: "The Quantum Vacuum",
            description: "Casimir predicts Zero-Point Energy. Even in a void, space is a bubbling foam of microscopic particle activity.",
            tags: ["VACUUM ENERGY", "CASIMIR EFFECT", "QUANTUM FOAM"],
            imageUrl: "assets/paradigms_images/P5_09.png",
            imageCaption: "NASA observations setting limits on the 'foaminess' of spacetime at extreme scales.",
            sourceUrl: "https://www.nasa.gov/image-article/nasa-telescopes-set-limits-spacetime-quantum-foam/",
            apaCitation: "NASA/CXC/M.Weiss. (n.d.). <i>Quantum foam limits</i> [Illustration]. NASA. Retrieved from https://www.nasa.gov/image-article/nasa-telescopes-set-limits-spacetime-quantum-foam/"
          }
        ]
      }
    }
  ]
};