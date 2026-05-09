import React, { useState, useEffect } from 'react';

const flashcards = [
  // Chemistry
  {
    topic: 'Chemistry',
    question: 'What is the atomic number?',
    answer: 'The atomic number tells you how many protons are in the nucleus of an atom. In a neutral atom, the atomic number is also equal to the number of electrons. Each element has its own unique atomic number.',
  },
  {
    topic: 'Chemistry',
    question: 'What is the mass number?',
    answer: 'The mass number is the total number of protons and neutrons in the nucleus of an atom. You can calculate the number of neutrons by subtracting the atomic number from the mass number.',
  },
  {
    topic: 'Chemistry',
    question: 'What are isotopes?',
    answer: 'Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons. This means they have the same atomic number but different mass numbers.',
  },
  {
    topic: 'Chemistry',
    question: 'What is ionic bonding?',
    answer: 'Ionic bonding happens between a metal and a non-metal. Electrons are transferred from the metal atom to the non-metal atom, forming positive and negative ions that are strongly attracted to each other.',
  },
  {
    topic: 'Chemistry',
    question: 'What is covalent bonding?',
    answer: 'Covalent bonding happens between non-metal atoms. The atoms share pairs of electrons so that each atom can gain a full outer electron shell.',
  },
  {
    topic: 'Chemistry',
    question: 'What is metallic bonding?',
    answer: 'Metallic bonding is the strong attraction between positive metal ions and delocalised electrons. The free-moving electrons allow metals to conduct electricity and heat.',
  },
  {
    topic: 'Chemistry',
    question: 'Why do metals conduct electricity?',
    answer: 'Metals conduct electricity because they contain delocalised electrons. These electrons are free to move through the structure and carry electrical charge from one place to another.',
  },
  {
    topic: 'Chemistry',
    question: 'Why are noble gases unreactive?',
    answer: 'Noble gases are very unreactive because they already have full outer electron shells. This makes them stable, so they do not need to gain, lose, or share electrons.',
  },
  {
    topic: 'Chemistry',
    question: 'How does reactivity change down Group 1?',
    answer: 'Reactivity increases down Group 1 because the outer electron is further from the nucleus and is less strongly attracted. This makes it easier for the atom to lose the electron during reactions.',
  },
  {
    topic: 'Chemistry',
    question: 'How does reactivity change down Group 7?',
    answer: 'Reactivity decreases down Group 7 because the outer shell is further from the nucleus. This weakens the attraction for an extra electron, making it harder for the atoms to gain electrons.',
  },
  {
    topic: 'Chemistry',
    question: 'What is electrolysis?',
    answer: 'Electrolysis is the breakdown of an ionic compound using electricity. It only works when the compound is molten or dissolved because the ions must be free to move.',
  },
  {
    topic: 'Chemistry',
    question: 'What ions do acids produce?',
    answer: 'Acids produce hydrogen ions (H+) when dissolved in water. The higher the concentration of hydrogen ions, the lower the pH and the more acidic the solution is.',
  },
  {
    topic: 'Chemistry',
    question: 'What ions do alkalis produce?',
    answer: 'Alkalis produce hydroxide ions (OH-) when dissolved in water. Alkalis are soluble bases and have a pH greater than 7.',
  },
  {
    topic: 'Chemistry',
    question: 'What is neutralisation?',
    answer: 'A reaction between an acid and a base producing salt and water.',
  },
  {
    topic: 'Chemistry',
    question: 'What is an exothermic reaction?',
    answer: 'An exothermic reaction transfers energy to the surroundings, usually as heat. The temperature of the surroundings increases during the reaction. Examples include combustion and neutralisation reactions.',
  },
  {
    topic: 'Chemistry',
    question: 'What is an endothermic reaction?',
    answer: 'An endothermic reaction takes in energy from the surroundings. This causes the surroundings to cool down. Examples include thermal decomposition and photosynthesis.',
  },
  {
    topic: 'Chemistry',
    question: 'What four factors affect the rate of reaction?',
    answer: 'Temperature, concentration, surface area, and catalysts.',
  },
  {
    topic: 'Chemistry',
    question: 'What is Le Chatelier’s Principle?',
    answer: 'Le Chatelier’s Principle states that if a change is made to a reversible reaction at equilibrium, the system will respond in a way that opposes the change and attempts to restore equilibrium. Changes in temperature, pressure, or concentration can all affect the position of equilibrium.',
  },
  {
    topic: 'Chemistry',
    question: 'How does increasing concentration affect equilibrium?',
    answer: 'If the concentration of a reactant is increased, the equilibrium shifts to the right to use up the extra reactant and produce more products. If the concentration of a product is increased, the equilibrium shifts to the left.',
  },
  {
    topic: 'Chemistry',
    question: 'How does increasing pressure affect equilibrium?',
    answer: 'Increasing pressure shifts the equilibrium towards the side with fewer gas molecules because this reduces the pressure. Decreasing pressure shifts the equilibrium towards the side with more gas molecules.',
  },
  {
    topic: 'Chemistry',
    question: 'How does increasing temperature affect equilibrium?',
    answer: 'Increasing temperature favours the endothermic reaction because energy is absorbed. Decreasing temperature favours the exothermic reaction because energy is released.',
  },
  {
    topic: 'Chemistry',
    question: 'What is a reversible reaction?',
    answer: 'A reversible reaction is a reaction where the products can react together to reform the original reactants. These reactions are shown using a double arrow symbol.',
  },
  {
    topic: 'Chemistry',
    question: 'What is dynamic equilibrium?',
    answer: 'Dynamic equilibrium occurs in a closed system when the forward and backward reactions happen at the same rate. The concentrations of reactants and products stay constant even though reactions are still occurring.',
  },
  {
    topic: 'Chemistry',
    question: 'What does a catalyst do?',
    answer: 'A catalyst increases the rate of a reaction without being chemically changed or used up. It works by lowering the activation energy needed for the reaction.',
  },

  // Physics
  {
    topic: 'Physics',
    question: 'What is current?',
    answer: 'Current is the flow of electric charge through a circuit. It is measured in amps (A) using an ammeter.',
  },
  {
    topic: 'Physics',
    question: 'What is voltage?',
    answer: 'Voltage, or potential difference, is the energy transferred per unit charge between two points in a circuit. It is measured in volts (V).',
  },
  {
    topic: 'Physics',
    question: 'What is resistance?',
    answer: 'Resistance is a measure of how difficult it is for electric current to flow through a component. Higher resistance means less current flows for the same voltage.',
  },
  {
    topic: 'Physics',
    question: 'What is power?',
    answer: 'Power is the rate at which energy is transferred or work is done. A more powerful device transfers more energy each second. Power is measured in watts (W).',
  },
  {
    topic: 'Physics',
    question: 'What is the equation for speed?',
    answer: 'Speed tells you how fast an object is moving. It is calculated using the equation speed = distance ÷ time. Speed is measured in metres per second (m/s).',
  },
  {
    topic: 'Physics',
    question: 'What is velocity?',
    answer: 'Speed in a given direction.',
  },
  {
    topic: 'Physics',
    question: 'What is acceleration?',
    answer: 'Acceleration is the rate at which velocity changes over time. An object accelerates if it speeds up, slows down, or changes direction.',
  },
  {
    topic: 'Physics',
    question: 'What is momentum?',
    answer: 'Momentum is a measure of how much motion an object has. It is calculated using the equation momentum = mass × velocity. Objects with a larger mass or higher velocity have greater momentum.',
  },
  {
    topic: 'Physics',
    question: 'What is the equation for momentum?',
    answer: 'Momentum = mass × velocity. Momentum is measured in kilogram metres per second (kg m/s).',
  },
  {
    topic: 'Physics',
    question: 'What is conservation of momentum?',
    answer: 'The total momentum before a collision is equal to the total momentum after the collision, provided no external forces act on the system.',
  },
  {
    topic: 'Physics',
    question: 'What happens to momentum in a collision?',
    answer: 'Momentum is transferred between objects during a collision, but the total momentum of the system remains constant if no external forces act.',
  },
  {
    topic: 'Physics',
    question: 'Why do airbags reduce injury?',
    answer: 'Airbags increase the time taken for a person to stop during a collision. This reduces the force experienced because the change in momentum happens over a longer time.',
  },
  {
    topic: 'Physics',
    question: 'Why are crumple zones important?',
    answer: 'Crumple zones increase the time taken for a car to stop in a crash. This reduces the force on passengers by decreasing the rate of change of momentum.',
  },
  {
    topic: 'Physics',
    question: 'What is terminal velocity?',
    answer: 'The maximum velocity reached when forces become balanced.',
  },
  {
    topic: 'Physics',
    question: 'What is kinetic energy?',
    answer: 'Kinetic energy is the energy stored in a moving object. The faster the object moves and the greater its mass, the more kinetic energy it has.',
  },
  {
    topic: 'Physics',
    question: 'What is gravitational potential energy?',
    answer: 'Gravitational potential energy is the energy stored in an object because of its position above the ground. The higher the object and the greater its mass, the more energy it stores.',
  },
  {
    topic: 'Physics',
    question: 'What is efficiency?',
    answer: 'The percentage of input energy transferred usefully.',
  },
  {
    topic: 'Physics',
    question: 'What is density?',
    answer: 'Density describes how compact a substance is. It is calculated by dividing mass by volume. Dense materials have more mass packed into a smaller space.',
  },
  {
    topic: 'Physics',
    question: 'What is the equation for density?',
    answer: 'Density = mass ÷ volume.',
  },
  {
    topic: 'Physics',
    question: 'What is frequency?',
    answer: 'The number of waves passing a point each second.',
  },
  {
    topic: 'Physics',
    question: 'What is amplitude?',
    answer: 'The maximum displacement from the rest position.',
  },
  {
    topic: 'Physics',
    question: 'What type of wave is light?',
    answer: 'Light is a transverse wave, which means the vibrations are perpendicular to the direction the wave travels. Transverse waves can be reflected, refracted, and diffracted.',
  },
  {
    topic: 'Physics',
    question: 'What type of wave is sound?',
    answer: 'Sound is a longitudinal wave. The vibrations are parallel to the direction of travel, creating compressions and rarefactions in the medium.',
  },
  {
    topic: 'Physics',
    question: 'What are the three main types of nuclear radiation?',
    answer: 'The three main types of nuclear radiation are alpha particles, beta particles, and gamma rays. They each have different levels of ionising power and penetrating ability.',
  },
  {
    topic: 'Physics',
    question: 'What is alpha radiation?',
    answer: 'Alpha radiation consists of two protons and two neutrons, making it identical to a helium nucleus. It is highly ionising but not very penetrating.',
  },
  {
    topic: 'Physics',
    question: 'What stops alpha radiation?',
    answer: 'Alpha radiation can be stopped by a sheet of paper or even the outer layer of human skin because it is not very penetrating.',
  },
  {
    topic: 'Physics',
    question: 'What is beta radiation?',
    answer: 'Beta radiation is a fast-moving electron emitted from the nucleus of an atom. It is moderately ionising and more penetrating than alpha radiation.',
  },
  {
    topic: 'Physics',
    question: 'What stops beta radiation?',
    answer: 'Beta radiation can be stopped by a thin sheet of aluminium. It travels further through air than alpha radiation but is still less penetrating than gamma radiation.',
  },
  {
    topic: 'Physics',
    question: 'What is gamma radiation?',
    answer: 'Gamma radiation is electromagnetic radiation released from the nucleus. It is weakly ionising but very penetrating because it has no mass and no charge.',
  },
  {
    topic: 'Physics',
    question: 'What stops gamma radiation?',
    answer: 'Gamma radiation is reduced by thick lead or concrete. It is the most penetrating type of nuclear radiation and can travel long distances through air.',
  },
  {
    topic: 'Physics',
    question: 'Which radiation is the most ionising?',
    answer: 'Alpha radiation.',
  },
  {
    topic: 'Physics',
    question: 'Which radiation is the most penetrating?',
    answer: 'Gamma radiation.',
  },
  {
    topic: 'Physics',
    question: 'What is half-life?',
    answer: 'Half-life is the time taken for half of the radioactive nuclei in a sample to decay. After each half-life, the amount of radiation decreases by half.',
  },
  {
    topic: 'Physics',
    question: 'What can gamma radiation be used for?',
    answer: 'Gamma radiation can be used for sterilising medical equipment, treating cancer, and checking for leaks in pipes because it can pass through materials easily.',
  },
  {
    topic: 'Physics',
    question: 'What is a series circuit?',
    answer: 'A circuit with components connected in a single loop.',
  },
  {
    topic: 'Physics',
    question: 'What is a parallel circuit?',
    answer: 'A circuit where components are connected on separate branches.',
  },
  {
    topic: 'Physics',
    question: 'In a series circuit, what stays the same?',
    answer: 'Current.',
  },
  {
    topic: 'Physics',
    question: 'In a parallel circuit, what stays the same?',
    answer: 'Potential difference.',
  },
  {
    topic: 'Physics',
    question: 'What does a transformer do?',
    answer: 'Changes the size of a potential difference (voltage).',
  },
  {
    topic: 'Physics',
    question: 'What force keeps planets in orbit?',
    answer: 'Gravity.',
  },
  {
    topic: 'Physics',
    question: 'What is a light year?',
    answer: 'The distance light travels in one year.',
  },

  // Additional Chemistry
  {
    topic: 'Chemistry',
    question: 'What is a precipitate?',
    answer: 'A precipitate is an insoluble solid formed when two solutions react together. Precipitation reactions are often used to identify ions in solutions.',
  },
  {
    topic: 'Chemistry',
    question: 'What is rusting?',
    answer: 'Rusting is the corrosion of iron. Iron reacts with oxygen and water to form hydrated iron oxide. Both oxygen and water are needed for rusting to occur.',
  },
  {
    topic: 'Chemistry',
    question: 'What is electroplating?',
    answer: 'Electroplating uses electrolysis to coat one metal with another metal. This can improve appearance, prevent corrosion, or reduce costs.',
  },
  {
    topic: 'Chemistry',
    question: 'What is crude oil?',
    answer: 'Crude oil is a finite fossil fuel made mainly of hydrocarbons. It was formed from the remains of ancient biomass over millions of years.',
  },
  {
    topic: 'Chemistry',
    question: 'What is fractional distillation?',
    answer: 'Fractional distillation separates crude oil into fractions based on different boiling points. The fractions contain hydrocarbons with similar numbers of carbon atoms.',
  },

  // Additional Physics
  {
    topic: 'Physics',
    question: 'What is static electricity?',
    answer: 'Static electricity is caused by an imbalance of electric charge on the surface of an object. Electrons can transfer between materials when they are rubbed together.',
  },
  {
    topic: 'Physics',
    question: 'What is infrared radiation used for?',
    answer: 'Infrared radiation is used in thermal imaging cameras, remote controls, and heaters because it transfers energy as heat.',
  },
  {
    topic: 'Physics',
    question: 'What is refraction?',
    answer: 'Refraction is the change in direction of a wave when it enters a different medium. This happens because the wave changes speed.',
  },
  {
    topic: 'Physics',
    question: 'What is reflection?',
    answer: 'Reflection happens when a wave bounces off a surface. The angle of incidence is equal to the angle of reflection.',
  },

  // Biology
  {
    topic: 'Biology',
    question: 'What is a eukaryotic cell?',
    answer: 'A eukaryotic cell is a complex cell that contains a nucleus and membrane-bound organelles. Animal, plant, fungal and protist cells are eukaryotic. The nucleus contains genetic material enclosed inside a membrane.',
  },
  {
    topic: 'Biology',
    question: 'What is a prokaryotic cell?',
    answer: 'A prokaryotic cell is a smaller and simpler cell that does not contain a nucleus. Bacteria are prokaryotes. Their DNA is found loose in the cytoplasm and they may also contain plasmids.',
  },
  {
    topic: 'Biology',
    question: 'What is magnification?',
    answer: 'Magnification describes how many times bigger the image is compared to the real object. Magnification = image size ÷ real size.',
  },
  {
    topic: 'Biology',
    question: 'What is resolution?',
    answer: 'Resolution is the ability to distinguish between two points that are close together. A higher resolution produces a clearer and more detailed image.',
  },
  {
    topic: 'Biology',
    question: 'What is mitosis?',
    answer: 'Mitosis is a type of cell division that produces two genetically identical daughter cells. It is used for growth, repair and asexual reproduction.',
  },
  {
    topic: 'Biology',
    question: 'What are stem cells?',
    answer: 'Stem cells are unspecialised cells that can divide and differentiate into different types of specialised cells. They are found in embryos, bone marrow and plant meristems.',
  },
  {
    topic: 'Biology',
    question: 'What is the surface area to volume ratio?',
    answer: 'Surface area to volume ratio compares the amount of surface area to the volume of an organism or cell. Small organisms have a larger ratio, allowing substances to diffuse in and out more efficiently.',
  },
  {
    topic: 'Biology',
    question: 'How can exchange surfaces be adapted?',
    answer: 'Exchange surfaces are adapted by having a large surface area, a thin membrane and a good blood supply. These features increase the rate of diffusion.',
  },
  {
    topic: 'Biology',
    question: 'What factors affect diffusion?',
    answer: 'Diffusion is affected by the concentration gradient, temperature and surface area. A steeper concentration gradient and higher temperature increase the rate of diffusion.',
  },
  {
    topic: 'Biology',
    question: 'What is osmosis in plants?',
    answer: 'Osmosis in plants is the movement of water through partially permeable membranes from a dilute solution to a more concentrated solution. Water enters root hair cells by osmosis.',
  },
  {
    topic: 'Biology',
    question: 'What is active transport in roots?',
    answer: 'Root hair cells use active transport to absorb mineral ions from the soil against the concentration gradient. This process requires energy from respiration.',
  },
  {
    topic: 'Biology',
    question: 'What is the digestive system?',
    answer: 'The digestive system is an organ system that breaks down large insoluble food molecules into small soluble molecules that can be absorbed into the blood.',
  },
  {
    topic: 'Biology',
    question: 'What are enzymes?',
    answer: 'Enzymes are biological catalysts made from proteins. They speed up chemical reactions in living organisms without being used up.',
  },
  {
    topic: 'Biology',
    question: 'What is the lock and key theory?',
    answer: 'The lock and key theory explains how enzymes work. Each enzyme has a specifically shaped active site that only fits one substrate, similar to how a key fits into a lock.',
  },
  {
    topic: 'Biology',
    question: 'How do temperature and pH affect enzymes?',
    answer: 'Enzymes work best at an optimum temperature and pH. Temperatures or pH values outside the optimum can denature the enzyme by changing the shape of the active site.',
  },
  {
    topic: 'Biology',
    question: 'What are the digestive enzymes?',
    answer: 'Amylase breaks down carbohydrates into sugars, protease breaks down proteins into amino acids, and lipase breaks down lipids into fatty acids and glycerol.',
  },
  {
    topic: 'Biology',
    question: 'What is bile?',
    answer: 'Bile is produced by the liver and stored in the gall bladder. It neutralises stomach acid and emulsifies fats to increase the surface area for lipase enzymes.',
  },
  {
    topic: 'Biology',
    question: 'What are the functions of arteries veins and capillaries?',
    answer: 'Arteries carry blood away from the heart under high pressure. Veins carry blood back to the heart and contain valves. Capillaries are tiny vessels where substances diffuse between the blood and tissues.',
  },
  {
    topic: 'Biology',
    question: 'What are the components of blood?',
    answer: 'Blood contains red blood cells, white blood cells, platelets and plasma. Red blood cells transport oxygen, white blood cells defend against pathogens, platelets help blood clot and plasma transports dissolved substances.',
  },
  {
    topic: 'Biology',
    question: 'What is coronary heart disease?',
    answer: 'Coronary heart disease occurs when fatty deposits build up in the coronary arteries, reducing blood flow to the heart muscle and increasing the risk of heart attacks.',
  },
  {
    topic: 'Biology',
    question: 'What is cancer?',
    answer: 'Cancer is caused by uncontrolled cell division. Benign tumours stay in one place, while malignant tumours invade nearby tissues and can spread around the body.',
  },
  {
    topic: 'Biology',
    question: 'What is transpiration?',
    answer: 'Transpiration is the loss of water vapour from plant leaves through the stomata. Water evaporates from the leaf and diffuses out of the plant.',
  },
  {
    topic: 'Biology',
    question: 'What is translocation in plants?',
    answer: 'Translocation is the transport of dissolved sugars around a plant through the phloem tissue. The sugars are moved from sources to sinks.',
  },
  {
    topic: 'Biology',
    question: 'What is a pathogen?',
    answer: 'A pathogen is a microorganism that causes disease. Pathogens include bacteria, viruses, fungi and protists.',
  },
  {
    topic: 'Biology',
    question: 'How are diseases spread?',
    answer: 'Diseases can spread through air droplets, direct contact, contaminated water, contaminated food and vectors such as mosquitoes.',
  },
  {
    topic: 'Biology',
    question: 'What is vaccination?',
    answer: 'Vaccination introduces dead or inactive pathogens into the body to stimulate white blood cells to produce antibodies and memory cells, giving immunity against future infections.',
  },
  {
    topic: 'Biology',
    question: 'How do white blood cells defend the body?',
    answer: 'White blood cells defend the body by engulfing pathogens, producing antibodies and producing antitoxins.',
  },
  {
    topic: 'Biology',
    question: 'What are antibiotics?',
    answer: 'Antibiotics are medicines that kill bacteria or stop them reproducing. They do not work against viruses.',
  },
  {
    topic: 'Biology',
    question: 'What are monoclonal antibodies?',
    answer: 'Monoclonal antibodies are identical antibodies produced from a single clone of cells. They can target specific substances and are used in diagnosis and treatment.',
  },
  {
    topic: 'Biology',
    question: 'What is auxin?',
    answer: 'Auxin is a plant hormone that controls growth responses such as phototropism and gravitropism. It causes cells to elongate.',
  },
  {
    topic: 'Biology',
    question: 'What is phototropism?',
    answer: 'Phototropism is a plant response to light. Shoots are positively phototropic because they grow towards light.',
  },
  {
    topic: 'Biology',
    question: 'What is gravitropism?',
    answer: 'Gravitropism is a plant response to gravity. Roots are positively gravitropic because they grow towards gravity.',
  },
  {
    topic: 'Biology',
    question: 'What is gibberellin?',
    answer: 'Gibberellins are plant hormones involved in seed germination, flowering and stem growth.',
  },
  {
    topic: 'Biology',
    question: 'What is ethene?',
    answer: 'Ethene is a plant hormone that controls cell division and fruit ripening. It is used commercially to control when fruits ripen during transport and storage.',
  },
  {
    topic: 'Biology',
    question: 'How is auxin used in gardening?',
    answer: 'Auxins are used as weed killers and rooting powders. Rooting powders help plant cuttings grow roots more quickly.',
  },
  {
    topic: 'Biology',
    question: 'How are gibberellins used in agriculture?',
    answer: 'Gibberellins are used to stimulate seed germination, increase fruit size and promote flowering in plants.',
  },
  {
    topic: 'Biology',
    question: 'How is ethene used commercially?',
    answer: 'Ethene is used to control the ripening of fruits during transport and storage so they can ripen at the correct time for sale.',
  },
  {
    topic: 'Biology',
    question: 'What is DNA?',
    answer: 'DNA is a molecule that carries genetic information in cells. It is found in chromosomes inside the nucleus and determines inherited characteristics.',
  },
  {
    topic: 'Biology',
    question: 'What is a gene?',
    answer: 'A gene is a small section of DNA that codes for a particular protein or characteristic.',
  },
  {
    topic: 'Biology',
    question: 'What is a chromosome?',
    answer: 'Chromosomes are long strands of DNA found in the nucleus of cells. Humans normally have 23 pairs of chromosomes.',
  },
  {
    topic: 'Biology',
    question: 'What is a genome?',
    answer: 'A genome is the entire genetic material of an organism.',
  },
  {
    topic: 'Biology',
    question: 'What is homozygous?',
    answer: 'Homozygous means having two identical alleles for a gene, such as BB or bb.',
  },
  {
    topic: 'Biology',
    question: 'What is heterozygous?',
    answer: 'Heterozygous means having two different alleles for a gene, such as Bb.',
  },
  {
    topic: 'Biology',
    question: 'What is a dominant allele?',
    answer: 'A dominant allele is expressed even if only one copy is present. Dominant alleles are represented by capital letters.',
  },
  {
    topic: 'Biology',
    question: 'What is a recessive allele?',
    answer: 'A recessive allele is only expressed if two copies are present. Recessive alleles are represented by lowercase letters.',
  },
  {
    topic: 'Biology',
    question: 'What is a genetic disorder?',
    answer: 'A genetic disorder is an inherited condition caused by faulty alleles or chromosomes. Some are caused by dominant alleles while others are recessive.',
  },
  {
    topic: 'Biology',
    question: 'What is cystic fibrosis?',
    answer: 'Cystic fibrosis is a recessive genetic disorder that causes thick sticky mucus to build up in the lungs and digestive system.',
  },
  {
    topic: 'Biology',
    question: 'What is polydactyly?',
    answer: 'Polydactyly is a dominant genetic disorder where a person is born with extra fingers or toes.',
  },
  {
    topic: 'Biology',
    question: 'What is embryo screening?',
    answer: 'Embryo screening involves testing embryos for genetic disorders before implantation during IVF treatment.',
  },
  {
    topic: 'Biology',
    question: 'What is measles?',
    answer: 'Measles is a viral disease that spreads through droplets from coughs and sneezes. It causes fever and a red skin rash and can be serious or fatal.',
  },
  {
    topic: 'Biology',
    question: 'What is salmonella?',
    answer: 'Salmonella is a bacterial food poisoning infection spread by contaminated food. Symptoms include fever, stomach cramps and vomiting.',
  },
  {
    topic: 'Biology',
    question: 'What is malaria?',
    answer: 'Malaria is caused by a protist and spread by mosquitoes. It causes recurring fever and can be life-threatening.',
  },
  {
    topic: 'Biology',
    question: 'What is HIV?',
    answer: 'HIV is a virus that attacks the immune system. If untreated it can lead to AIDS, where the body can no longer fight infections effectively.',
  },
  {
    topic: 'Biology',
    question: 'What is a cell?',
    answer: 'A cell is the basic structural and functional unit of living organisms. All living things are made of cells, and cells carry out processes needed for life.',
  },
  {
    topic: 'Biology',
    question: 'What does the nucleus do?',
    answer: 'The nucleus controls the activities of the cell and contains the genetic material (DNA). The DNA carries instructions used to make proteins.',
  },
  {
    topic: 'Biology',
    question: 'What is diffusion?',
    answer: 'Diffusion is the movement of particles from an area of high concentration to an area of low concentration. It is a passive process and does not require energy.',
  },
  {
    topic: 'Biology',
    question: 'What is osmosis?',
    answer: 'Osmosis is the movement of water molecules from a dilute solution to a more concentrated solution through a partially permeable membrane.',
  },
  {
    topic: 'Biology',
    question: 'What is active transport?',
    answer: 'Active transport moves particles from a low concentration to a high concentration, against the concentration gradient. This process requires energy from respiration.',
  },
  {
    topic: 'Biology',
    question: 'What is photosynthesis?',
    answer: 'Photosynthesis is the process plants use to make glucose using light energy. It happens in chloroplasts and requires carbon dioxide, water, and light energy.',
  },
  {
    topic: 'Biology',
    question: 'What is the word equation for photosynthesis?',
    answer: 'Carbon dioxide + water → glucose + oxygen.',
  },
  {
    topic: 'Biology',
    question: 'What is respiration?',
    answer: 'Respiration is the process of releasing energy from glucose. Aerobic respiration uses oxygen and releases carbon dioxide and water.',
  },
  {
    topic: 'Biology',
    question: 'What is meiosis?',
    answer: 'A type of cell division that produces gametes with half the number of chromosomes.',
  },
  {
    topic: 'Biology',
    question: 'What are gametes?',
    answer: 'Sex cells such as sperm and egg cells.',
  },
  {
    topic: 'Biology',
    question: 'What is DNA?',
    answer: 'DNA stands for deoxyribonucleic acid. It carries the genetic instructions used to control the development and functioning of living organisms.',
  },
  {
    topic: 'Biology',
    question: 'What is natural selection?',
    answer: 'The process where organisms best adapted to their environment survive and reproduce.',
  },
  {
    topic: 'Biology',
    question: 'What is genetic engineering?',
    answer: 'Genetic engineering is the process of modifying the genes of an organism to introduce desired characteristics. Scientists cut a useful gene from one organism and insert it into another using enzymes and vectors such as plasmids.',
  },
  {
    topic: 'Biology',
    question: 'What is homeostasis?',
    answer: 'Homeostasis is the regulation of internal conditions inside the body to maintain stable and optimum conditions for cells and enzymes to function properly. Examples include controlling body temperature, blood glucose concentration, and water levels.',
  },
  {
    topic: 'Biology',
    question: 'Why is homeostasis important?',
    answer: 'Homeostasis is important because cells and enzymes only work efficiently within certain conditions. If conditions such as temperature or pH change too much, enzymes can denature and important chemical reactions may slow down or stop.',
  },
  {
    topic: 'Biology',
    question: 'How does the body control temperature?',
    answer: 'The thermoregulatory centre in the brain monitors body temperature. If the body gets too hot, sweat is produced and blood vessels near the skin surface dilate to increase heat loss. If the body gets too cold, shivering occurs and blood vessels constrict to reduce heat loss.',
  },
  {
    topic: 'Biology',
    question: 'What is vasodilation?',
    answer: 'Vasodilation is when blood vessels near the surface of the skin widen. This increases blood flow near the skin and allows more heat energy to be transferred to the surroundings.',
  },
  {
    topic: 'Biology',
    question: 'What is vasoconstriction?',
    answer: 'Vasoconstriction is when blood vessels near the surface of the skin narrow. This reduces blood flow near the skin and decreases heat loss to the surroundings.',
  },
  {
    topic: 'Biology',
    question: 'How does insulin lower blood glucose levels?',
    answer: 'Insulin is produced by the pancreas when blood glucose levels are too high. It causes glucose to move from the blood into cells and stimulates the liver to convert excess glucose into glycogen for storage.',
  },
  {
    topic: 'Biology',
    question: 'How does glucagon increase blood glucose levels?',
    answer: 'Glucagon is produced by the pancreas when blood glucose levels are too low. It causes glycogen stored in the liver to be converted back into glucose and released into the blood.',
  },
  {
    topic: 'Biology',
    question: 'What is negative feedback?',
    answer: 'Negative feedback is a control mechanism used in homeostasis where a change in internal conditions triggers responses that reverse the change and return conditions back to the optimum level.',
  },
];

const confidenceStyles = {
  none: {
    backgroundColor: '#ffffff',
    borderColor: '#d1d5db',
  },
  low: {
    backgroundColor: '#fee2e2',
    borderColor: '#ef4444',
  },
  medium: {
    backgroundColor: '#fef3c7',
    borderColor: '#f59e0b',
  },
  high: {
    backgroundColor: '#dcfce7',
    borderColor: '#22c55e',
  },
};

function Section({ title, cards, confidenceLevels, updateConfidence, color, onEditCard, onDeleteCard }) {
  const [open, setOpen] = useState(true);
  if (cards.length === 0) return null;

  return (
    <div
      style={{
        marginBottom: '28px',
        backgroundColor: 'white',
        borderRadius: '24px',
        padding: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      }}
    >
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          marginBottom: open ? '20px' : '0px',
        }}
      >
        <h2
          style={{
            fontSize: '28px',
            color: color,
            margin: 0,
          }}
        >
          {title}
        </h2>

        <div
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#374151',
          }}
        >
          {open ? '−' : '+'}
        </div>
      </div>

      {open && (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {cards.map((cardData) => (
          <Flashcard
            key={cardData.index}
            card={cardData}
            confidence={confidenceLevels[cardData.index] || 'none'}
            setConfidence={(level) => updateConfidence(cardData.index, level)}
            onEditCard={onEditCard}
            onDeleteCard={onDeleteCard}
          />
        ))}
      </div>
      )}
    </div>
  );
}

function Confetti({ pieces }) {
  return (
    <>
      {pieces.map((piece) => (
        <div
          key={piece.id}
          style={{
            position: 'fixed',
            top: piece.top,
            left: piece.left,
            width: '10px',
            height: '10px',
            backgroundColor: piece.color,
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: `fall ${piece.duration}s linear forwards`,
            zIndex: 9999,
          }}
        />
      ))}

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
          }

          100% {
            transform: translateY(600px) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

export default function FlashcardsApp() {
  const [confidenceLevels, setConfidenceLevels] = useState({});
  const [username, setUsername] = useState('');
  const [tempUsername, setTempUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('none');
  const [activeSubject, setActiveSubject] = useState('All');
  const [activePhysicsTopic, setActivePhysicsTopic] = useState('All');
  const [activeBiologyTopic, setActiveBiologyTopic] = useState('All');
  const [activeChemistryTopic, setActiveChemistryTopic] = useState('All');
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [customCards, setCustomCards] = useState([]);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [editingCardIndex, setEditingCardIndex] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('flashcard_username');

    if (savedUser) {
      setUsername(savedUser);
      setTempUsername(savedUser);
      setIsLoggedIn(true);

      const savedConfidence = localStorage.getItem(`${savedUser}_confidence`);
      const savedCustomCards = localStorage.getItem(`${savedUser}_customCards`);

      if (savedConfidence) {
        setConfidenceLevels(JSON.parse(savedConfidence));
      }

      if (savedCustomCards) {
        setCustomCards(JSON.parse(savedCustomCards));
      }
    }
  }, []);

  useEffect(() => {
    if (username) {
      localStorage.setItem(`${username}_confidence`, JSON.stringify(confidenceLevels));
      localStorage.setItem(`${username}_customCards`, JSON.stringify(customCards));
    }
  }, [confidenceLevels, customCards, username]);
  

  const launchConfetti = () => {
    const colors = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#a855f7'];

    const pieces = Array.from({ length: 80 }).map((_, i) => ({
      id: Date.now() + i,
      left: `${Math.random() * 100}vw`,
      top: '-20px',
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 2 + Math.random() * 2,
    }));

    setConfettiPieces(pieces);

    setTimeout(() => {
      setConfettiPieces([]);
    }, 4000);
  };

  const updateConfidence = (index, level) => {
    if (level === 'high') {
      launchConfetti();
    }

    setConfidenceLevels((prev) => ({
      ...prev,
      [index]: level,
    }));
  };

  const handleDeleteCustomCard = (cardToDelete) => {
    setCustomCards((prev) =>
      prev.filter(
        (card) =>
          !(
            card.question === cardToDelete.question &&
            card.answer === cardToDelete.answer
          )
      )
    );
  };

  const handleEditCustomCard = (cardToEdit) => {
    setNewQuestion(cardToEdit.question);
    setNewAnswer(cardToEdit.answer);

    setEditingCardIndex(
      customCards.findIndex(
        (card) =>
          card.question === cardToEdit.question &&
          card.answer === cardToEdit.answer
      )
    );

    setShowCustomForm(true);
    setActiveSubject('Custom');
  };

  const groupedCards = {
    low: [],
    medium: [],
    high: [],
    none: [],
  };

  const biologyCategories = {
    CellBiology: [
      'What is a eukaryotic cell?',
      'What is a prokaryotic cell?',
      'What is magnification?',
      'What is resolution?',
      'What is mitosis?',
      'What are stem cells?',
      'What is the surface area to volume ratio?',
      'How can exchange surfaces be adapted?',
      'What factors affect diffusion?',
      'What is osmosis in plants?',
      'What is active transport in roots?'
    ],
    Organisation: [
      'What is the digestive system?',
      'What are enzymes?',
      'What is the lock and key theory?',
      'How do temperature and pH affect enzymes?',
      'What are the digestive enzymes?',
      'What is bile?',
      'What are the functions of arteries veins and capillaries?',
      'What are the components of blood?',
      'What is coronary heart disease?',
      'What is cancer?',
      'What is transpiration?',
      'What is translocation in plants?'
    ],
    Cells: [
      'What is a cell?',
      'What does the nucleus do?',
      'What is diffusion?',
      'What is osmosis?',
      'What is active transport?'
    ],
    Bioenergetics: [
      'What is photosynthesis?',
      'What is the word equation for photosynthesis?',
      'What is respiration?'
    ],
    Inheritance: [
      'What is meiosis?',,
      'What are gametes?',
      'What is DNA?',
      'What is natural selection?',
      'What is genetic engineering?'
    ],
    PlantHormones: [
      'What is auxin?',
      'What is phototropism?',
      'What is gravitropism?',
      'What is gibberellin?',
      'What is ethene?',
      'How is auxin used in gardening?',
      'How are gibberellins used in agriculture?',
      'How is ethene used commercially?'
    ],
    InfectionAndResponse: [
      'What is a pathogen?',
      'How are diseases spread?',
      'What is vaccination?',
      'How do white blood cells defend the body?',
      'What are antibiotics?',
      'What are monoclonal antibodies?',
      'What is measles?',
      'What is salmonella?',
      'What is malaria?',
      'What is HIV?'
    ],
    Genetics: [
      'What is DNA?',
      'What is a gene?',
      'What is a chromosome?',
      'What is a genome?',
      'What is homozygous?',
      'What is heterozygous?',
      'What is a dominant allele?',
      'What is a recessive allele?',
      'What is a genetic disorder?',
      'What is cystic fibrosis?',
      'What is polydactyly?',
      'What is embryo screening?'
    ],
    Homeostasis: [
      'What is homeostasis?',
      'Why is homeostasis important?',
      'How does the body control temperature?',
      'What is vasodilation?',
      'What is vasoconstriction?',
      'How does insulin lower blood glucose levels?',
      'How does glucagon increase blood glucose levels?',
      'What is negative feedback?'
    ]
  };

  const chemistryCategories = {
    AtomicStructure: [
      'What is the atomic number?',
      'What is the mass number?',
      'What are isotopes?'
    ],
    Bonding: [
      'What is ionic bonding?',
      'What is covalent bonding?',
      'What is metallic bonding?',
      'Why do metals conduct electricity?',
      'Why are noble gases unreactive?'
    ],
    PeriodicTable: [
      'How does reactivity change down Group 1?',
      'How does reactivity change down Group 7?'
    ],
    ChemicalChanges: [
      'What is electrolysis?',
      'What ions do acids produce?',
      'What ions do alkalis produce?',
      'What is neutralisation?'
    ],
    EnergyChanges: [
      'What is an exothermic reaction?',
      'What is an endothermic reaction?'
    ],
    OrganicChemistry: [
      'What is crude oil?',
      'What is fractional distillation?'
    ],
    RatesAndEquilibrium: [
      'What four factors affect the rate of reaction?',
      'What is Le Chatelier’s Principle?',
      'How does increasing concentration affect equilibrium?',
      'How does increasing pressure affect equilibrium?',
      'How does increasing temperature affect equilibrium?',
      'What is a reversible reaction?',
      'What is dynamic equilibrium?',
      'What does a catalyst do?'
    ]
  };

  const physicsCategories = {
    Electricity: [
      'What is static electricity?',
      'What is current?',
      'What is voltage?',
      'What is resistance?',
      'What is a series circuit?',
      'What is a parallel circuit?',
      'In a series circuit, what stays the same?',
      'In a parallel circuit, what stays the same?',
      'What does a transformer do?'
    ],
    Energy: [
      'What is power?',
      'What is kinetic energy?',
      'What is gravitational potential energy?',
      'What is efficiency?'
    ],
    Forces: [
      'What is the equation for speed?',
      'What is velocity?',
      'What is acceleration?',
      'What is momentum?',
      'What is the equation for momentum?',
      'What is conservation of momentum?',
      'What happens to momentum in a collision?',
      'Why do airbags reduce injury?',
      'Why are crumple zones important?',
      'What is terminal velocity?'
    ],
    Waves: [
      'What is reflection?',
      'What is refraction?',
      'What is frequency?',
      'What is amplitude?',
      'What type of wave is light?',
      'What type of wave is sound?'
    ],
    Space: [
      'What force keeps planets in orbit?',
      'What is a light year?'
    ],
    Radioactivity: [
      'What are the three main types of nuclear radiation?',
      'What is alpha radiation?',
      'What stops alpha radiation?',
      'What is beta radiation?',
      'What stops beta radiation?',
      'What is gamma radiation?',
      'What stops gamma radiation?',
      'Which radiation is the most ionising?',
      'Which radiation is the most penetrating?',
      'What is half-life?',
      'What can gamma radiation be used for?'
    ],
    Matter: [
      'What is density?',
      'What is the equation for density?'
    ]
  };

  const allCards = [...flashcards, ...customCards];

  allCards.forEach((card, index) => {
    const level = confidenceLevels[index] || 'none';

    let matchesSubject =
      activeSubject === 'All' ||
      card.topic === activeSubject ||
      (activeSubject === 'Custom' && card.topic === 'Custom');

    if (activeSubject === 'Physics' && activePhysicsTopic !== 'All') {
      matchesSubject =
        matchesSubject &&
        physicsCategories[activePhysicsTopic]?.includes(card.question);
    }

    if (activeSubject === 'Biology' && activeBiologyTopic !== 'All') {
      matchesSubject =
        matchesSubject &&
        biologyCategories[activeBiologyTopic]?.includes(card.question);
    }

    if (activeSubject === 'Chemistry' && activeChemistryTopic !== 'All') {
      matchesSubject =
        matchesSubject &&
        chemistryCategories[activeChemistryTopic]?.includes(card.question);
    }

    if (matchesSubject) {
      groupedCards[level].push({ ...card, index });
    }
  });

  if (!isLoggedIn) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f3f4f6',
          fontFamily: 'Arial, sans-serif',
          padding: '20px',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '420px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              marginBottom: '12px',
              color: '#111827',
              fontSize: '32px',
            }}
          >
            GCSE Science Flashcards
          </h1>

          <p
            style={{
              textAlign: 'center',
              color: '#6b7280',
              marginBottom: '24px',
            }}
          >
            Log in to save your revision progress and custom flashcards.
          </p>

          <input
            value={tempUsername}
            onChange={(e) => setTempUsername(e.target.value)}
            placeholder="Enter a username"
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '12px',
              border: '1px solid #d1d5db',
              fontSize: '16px',
              marginBottom: '18px',
              boxSizing: 'border-box',
            }}
          />

          <button
            onClick={() => {
              if (!tempUsername.trim()) return;

              setUsername(tempUsername);
              localStorage.setItem('flashcard_username', tempUsername);
              setIsLoggedIn(true);
            }}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Confetti pieces={confettiPieces} />

      

    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        padding: '24px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        

        <h1
          style={{
            textAlign: 'center',
            fontSize: '40px',
            marginBottom: '10px',
            color: '#1f2937',
          }}
        >
          GCSE Science Flashcards
        </h1>

        <p
          style={{
            textAlign: 'center',
            color: '#4b5563',
            marginBottom: '30px',
          }}
        >
          Click a flashcard to flip it. Select your confidence level to track progress.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}
        >
          {['All', 'Biology', 'Chemistry', 'Physics', 'Custom'].map((subject) => (
            <button
              key={subject}
              onClick={() => setActiveSubject(subject)}
              style={{
                padding: '12px 20px',
                borderRadius: '14px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor:
                  activeSubject === subject ? '#2563eb' : '#dbeafe',
                color: activeSubject === subject ? 'white' : '#1e3a8a',
                fontWeight: 'bold',
                fontSize: '15px',
              }}
            >
              {subject}
            </button>
          ))}
        </div>

        {activeSubject === 'Biology' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '24px',
            }}
          >
            {['All', 'CellBiology', 'Organisation', 'Cells', 'Bioenergetics', 'Inheritance', 'Genetics', 'Homeostasis', 'InfectionAndResponse', 'PlantHormones'].map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveBiologyTopic(topic)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor:
                    activeBiologyTopic === topic ? '#16a34a' : '#dcfce7',
                  color: activeBiologyTopic === topic ? 'white' : '#166534',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        )}

        {activeSubject === 'Chemistry' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '24px',
            }}
          >
            {['All', 'AtomicStructure', 'Bonding', 'PeriodicTable', 'ChemicalChanges', 'EnergyChanges', 'OrganicChemistry', 'RatesAndEquilibrium'].map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveChemistryTopic(topic)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor:
                    activeChemistryTopic === topic ? '#ea580c' : '#ffedd5',
                  color: activeChemistryTopic === topic ? 'white' : '#9a3412',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        )}

        {activeSubject === 'Physics' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '24px',
            }}
          >
            {['All', 'Electricity', 'Energy', 'Forces', 'Waves', 'Space', 'Radioactivity', 'Matter'].map((topic) => (
              <button
                key={topic}
                onClick={() => setActivePhysicsTopic(topic)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor:
                    activePhysicsTopic === topic ? '#7c3aed' : '#ede9fe',
                  color: activePhysicsTopic === topic ? 'white' : '#5b21b6',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          <button
            onClick={() => setShowCustomForm(!showCustomForm)}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              padding: '12px 20px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            ➕ Add Custom Flashcard
          </button>
        </div>

        {showCustomForm && (
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '24px',
              marginBottom: '30px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: '16px', color: '#1f2937' }}>
              Create Custom Flashcard
            </h2>

            <input
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Enter your question"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: '1px solid #d1d5db',
                marginBottom: '16px',
                fontSize: '16px',
                boxSizing: 'border-box',
              }}
            />

            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Enter your answer"
              rows={6}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: '1px solid #d1d5db',
                marginBottom: '16px',
                fontSize: '16px',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />

            <button
              onClick={() => {
                if (!newQuestion.trim() || !newAnswer.trim()) return;

                if (editingCardIndex !== null) {
                  setCustomCards((prev) =>
                    prev.map((card, idx) =>
                      idx === editingCardIndex
                        ? {
                            ...card,
                            question: newQuestion,
                            answer: newAnswer,
                          }
                        : card
                    )
                  );
                } else {
                  setCustomCards((prev) => [
                    ...prev,
                    {
                      topic: 'Custom',
                      question: newQuestion,
                      answer: newAnswer,
                    },
                  ]);
                }

                setNewQuestion('');
                setNewAnswer('');
                setEditingCardIndex(null);
                setShowCustomForm(false);
                setActiveSubject('Custom');
              }}
              style={{
                backgroundColor: '#16a34a',
                color: 'white',
                border: 'none',
                borderRadius: '14px',
                padding: '12px 20px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {editingCardIndex !== null ? 'Save Changes' : 'Save Flashcard'}
            </button>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '30px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ backgroundColor: '#fee2e2', padding: '12px 18px', borderRadius: '16px' }}>
            🔴 Low Confidence: {groupedCards.low.length}
          </div>

          <div style={{ backgroundColor: '#fef3c7', padding: '12px 18px', borderRadius: '16px' }}>
            🟡 Medium Confidence: {groupedCards.medium.length}
          </div>

          <div style={{ backgroundColor: '#dcfce7', padding: '12px 18px', borderRadius: '16px' }}>
            🟢 High Confidence: {groupedCards.high.length}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '30px',
          }}
        >
          <button
            onClick={() => setActiveTab('none')}
            style={{
              padding: '12px 20px',
              borderRadius: '14px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeTab === 'none' ? '#6b7280' : '#e5e7eb',
              color: activeTab === 'none' ? 'white' : '#111827',
              fontWeight: 'bold',
            }}
          >
            ⚪ Unsorted ({groupedCards.none.length})
          </button>

          <button
            onClick={() => setActiveTab('low')}
            style={{
              padding: '12px 20px',
              borderRadius: '14px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeTab === 'low' ? '#dc2626' : '#fee2e2',
              color: activeTab === 'low' ? 'white' : '#111827',
              fontWeight: 'bold',
            }}
          >
            🔴 Low ({groupedCards.low.length})
          </button>

          <button
            onClick={() => setActiveTab('medium')}
            style={{
              padding: '12px 20px',
              borderRadius: '14px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeTab === 'medium' ? '#d97706' : '#fef3c7',
              color: activeTab === 'medium' ? 'white' : '#111827',
              fontWeight: 'bold',
            }}
          >
            🟡 Medium ({groupedCards.medium.length})
          </button>

          <button
            onClick={() => setActiveTab('high')}
            style={{
              padding: '12px 20px',
              borderRadius: '14px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeTab === 'high' ? '#16a34a' : '#dcfce7',
              color: activeTab === 'high' ? 'white' : '#111827',
              fontWeight: 'bold',
            }}
          >
            🟢 High ({groupedCards.high.length})
          </button>
        </div>

        {activeTab === 'none' && (
          <Section title="⚪ Unsorted" color="#6b7280" cards={groupedCards.none} confidenceLevels={confidenceLevels} updateConfidence={updateConfidence} onEditCard={handleEditCustomCard} onDeleteCard={handleDeleteCustomCard} />
        )}

        {activeTab === 'low' && (
          <Section title="🔴 Low Confidence" color="#dc2626" cards={groupedCards.low} confidenceLevels={confidenceLevels} updateConfidence={updateConfidence} onEditCard={handleEditCustomCard} onDeleteCard={handleDeleteCustomCard} />
        )}

        {activeTab === 'medium' && (
          <Section title="🟡 Medium Confidence" color="#d97706" cards={groupedCards.medium} confidenceLevels={confidenceLevels} updateConfidence={updateConfidence} onEditCard={handleEditCustomCard} onDeleteCard={handleDeleteCustomCard} />
        )}

        {activeTab === 'high' && (
          <Section title="🟢 High Confidence" color="#16a34a" cards={groupedCards.high} confidenceLevels={confidenceLevels} updateConfidence={updateConfidence} onEditCard={handleEditCustomCard} onDeleteCard={handleDeleteCustomCard} />
        )}

        {/* Flashcard sections rendered above */}
      </div>
    </div>
    </>
  );
}

function Flashcard({ card, confidence, setConfidence, onEditCard, onDeleteCard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        cursor: 'pointer',
        perspective: '1000px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '420px',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '24px',
            border: '3px solid',
            padding: '20px',
            boxSizing: 'border-box',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            ...confidenceStyles[confidence],
          }}
        >
          <div
            style={{
              color: '#2563eb',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            {card.topic}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: card.question.length < 40 ? '28px' : card.question.length < 80 ? '22px' : '18px',
                lineHeight: '1.5',
                color: '#111827',
              }}
            >
              {card.question}
            </h2>
          </div>

          <div>
            <p
              style={{
                textAlign: 'center',
                color: '#6b7280',
                fontSize: '14px',
                marginBottom: '12px',
              }}
            >
              Click to reveal answer
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setConfidence('low')}
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                }}
              >
                Low
              </button>

              <button
                onClick={() => setConfidence('medium')}
                style={{
                  backgroundColor: '#f59e0b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                }}
              >
                Medium
              </button>

              <button
                onClick={() => setConfidence('high')}
                style={{
                  backgroundColor: '#22c55e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                }}
              >
                High
              </button>

              <button
                onClick={() => setConfidence('none')}
                style={{
                  backgroundColor: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                }}
              >
                Unsort
              </button>

              {card.topic === 'Custom' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    const shouldDelete = window.confirm('Delete this flashcard?');

                    if (shouldDelete) {
                      onDeleteCard(card);
                    }
                  }}
                  style={{
                    backgroundColor: '#111827',
                    color: 'white',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              )}

              {card.topic === 'Custom' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditCard(card);
                  }}
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    zIndex: 20,
                    position: 'relative',
                  }}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '24px',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '20px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            textAlign: 'left',
            flexDirection: 'column',
            overflowY: 'auto',
            paddingTop: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <>
            <h2
              style={{
                fontSize: card.answer.length < 120 ? '24px' : card.answer.length < 250 ? '20px' : '17px',
                marginBottom: '20px',
              }}
            >
              {card.answer}
            </h2>

            {card.topic === 'Custom' && (
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: 'auto',
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditCard(card);
                  }}
                  style={{
                    backgroundColor: 'white',
                    color: '#2563eb',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '10px 16px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    const shouldDelete = window.confirm('Delete this flashcard?');

                    if (shouldDelete) {
                      onDeleteCard(card);
                    }
                  }}
                  style={{
                    backgroundColor: '#111827',
                    color: 'white',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '10px 16px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
}
