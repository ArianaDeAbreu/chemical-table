// Dados dos elementos químicos
const elementsData = {
  1: {
    name: "Hidrogênio",
    symbol: "H",
    formula: "H₂",
    description:
      "O hidrogênio é o elemento mais abundante no universo. É um gás incolor, inodoro e altamente inflamável. É usado em diversos processos industriais e como combustível limpo.",
    images: [
      "assets/img/elements/1/1.jpg",
      "assets/img/elements/1/2.jpg",
      "assets/img/elements/1/3.jpg",
      "assets/img/elements/1/4.jpg",
    ],
  },
  2: {
    name: "Hélio",
    symbol: "He",
    formula: "He",
    description:
      "O hélio é um gás nobre, incolor, inodoro e não inflamável. É usado em balões, mergulho em águas profundas e em equipamentos de resfriamento.",
    images: [
      "assets/img/elements/2/1.jpg",
      "assets/img/elements/2/2.jpg",
      "assets/img/elements/2/3.jpg",
      "assets/img/elements/2/4.jpg",
    ],
  },
  3: {
    name: "Lítio",
    symbol: "Li",
    formula: "Li",
    description:
      "O lítio é um metal alcalino, macio e prateado. É usado em baterias recarregáveis, medicamentos psiquiátricos e na produção de cerâmicas e vidros especiais.",
    images: [
      "assets/img/elements/3/1.jpg",
      "assets/img/elements/3/2.jpg",
      "assets/img/elements/3/3.jpg",
      "assets/img/elements/3/4.jpg",
    ],
  },
  4: {
    name: "Berílio",
    symbol: "Be",
    formula: "Be",
    description:
      "O berílio é um metal alcalino-terroso, duro e cinza. É usado em ligas metálicas, reatores nucleares e equipamentos aeroespaciais.",
    images: [
      "assets/img/elements/4/1.jpg",
      "assets/img/elements/4/2.jpg",
      "assets/img/elements/4/3.jpg",
      "assets/img/elements/4/4.jpg",
    ],
  },
  5: {
    name: "Boro",
    symbol: "B",
    formula: "B",
    description:
      "O boro é um semimetal que ocorre naturalmente na forma de cristais. É usado em detergentes, fertilizantes e materiais de alta resistência.",
    images: [
      "assets/img/elements/5/1.jpg",
      "assets/img/elements/5/2.jpg",
      "assets/img/elements/5/3.jpg",
      "assets/img/elements/5/4.jpg",
    ],
  },
  6: {
    name: "Carbono",
    symbol: "C",
    formula: "C",
    description:
      "O carbono é a base de toda a vida na Terra. Existe em várias formas alotrópicas, incluindo diamante e grafite. É essencial para a química orgânica.",
    images: [
      "assets/img/elements/6/1.jpg",
      "assets/img/elements/6/2.jpg",
      "assets/img/elements/6/3.jpg",
      "assets/img/elements/6/4.jpg",
    ],
  },
  7: {
    name: "Nitrogênio",
    symbol: "N",
    formula: "N₂",
    description:
      "O nitrogênio é um gás incolor e inodoro que compõe cerca de 78% da atmosfera terrestre. É essencial para a vida e usado em fertilizantes.",
    images: [
      "assets/img/elements/7/1.jpg",
      "assets/img/elements/7/2.jpg",
      "assets/img/elements/7/3.jpg",
      "assets/img/elements/7/4.jpg",
    ],
  },
  8: {
    name: "Oxigênio",
    symbol: "O",
    formula: "O₂",
    description:
      "O oxigênio é um gás essencial para a respiração dos seres vivos. Compõe cerca de 21% da atmosfera terrestre e é vital para a combustão.",
    images: [
      "assets/img/elements/8/1.jpg",
      "assets/img/elements/8/2.jpg",
      "assets/img/elements/8/3.jpg",
      "assets/img/elements/8/4.jpg",
    ],
  },
  9: {
    name: "Flúor",
    symbol: "F",
    formula: "F₂",
    description:
      "O flúor é o elemento mais eletronegativo e reativo. É usado em pastas de dente, refrigerantes e na produção de materiais como o teflon.",
    images: [
      "assets/img/elements/9/1.jpg",
      "assets/img/elements/9/2.jpg",
      "assets/img/elements/9/3.jpg",
      "assets/img/elements/9/4.jpg",
    ],
  },
  10: {
    name: "Neônio",
    symbol: "Ne",
    formula: "Ne",
    description:
      "O neônio é um gás nobre usado em sinais luminosos e lasers. É incolor e inerte, emitindo uma luz vermelha-alaranjada quando ionizado.",
    images: [
      "assets/img/elements/10/1.jpg",
      "assets/img/elements/10/2.jpg",
      "assets/img/elements/10/3.jpg",
      "assets/img/elements/10/4.jpg",
    ],
  },
  11: {
    name: "Sódio",
    symbol: "Na",
    formula: "Na",
    description:
      "O sódio é um metal alcalino macio e prateado. É essencial para a vida e usado em diversos processos industriais, incluindo a produção de sabão e vidro.",
    images: [
      "assets/img/elements/11/1.jpg",
      "assets/img/elements/11/2.jpg",
      "assets/img/elements/11/3.jpg",
      "assets/img/elements/11/4.jpg",
    ],
  },
  12: {
    name: "Magnésio",
    symbol: "Mg",
    formula: "Mg",
    description:
      "O magnésio é um metal alcalino-terroso leve e prateado. É essencial para a vida, usado em ligas metálicas e como suplemento nutricional.",
    images: [
      "assets/img/elements/12/1.jpg",
      "assets/img/elements/12/2.jpg",
      "assets/img/elements/12/3.jpg",
      "assets/img/elements/12/4.jpg",
    ],
  },
  13: {
    name: "Alumínio",
    symbol: "Al",
    formula: "Al",
    description:
      "O alumínio é um metal leve, resistente à corrosão e bom condutor de eletricidade. É amplamente usado em embalagens, construção e transporte.",
    images: [
      "assets/img/elements/13/1.jpg",
      "assets/img/elements/13/2.jpg",
      "assets/img/elements/13/3.jpg",
      "assets/img/elements/13/4.jpg",
    ],
  },
  14: {
    name: "Silício",
    symbol: "Si",
    formula: "Si",
    description:
      "O silício é um semimetal essencial para a indústria eletrônica. É o principal componente dos chips de computador e células solares.",
    images: [
      "assets/img/elements/14/1.jpg",
      "assets/img/elements/14/2.jpg",
      "assets/img/elements/14/3.jpg",
      "assets/img/elements/14/4.jpg",
    ],
  },
  15: {
    name: "Fósforo",
    symbol: "P",
    formula: "P",
    description:
      "O fósforo é um não-metal essencial para a vida. É usado em fertilizantes, detergentes e na produção de fósforos.",
    images: [
      "assets/img/elements/15/1.jpg",
      "assets/img/elements/15/2.jpg",
      "assets/img/elements/15/3.jpg",
      "assets/img/elements/15/4.jpg",
    ],
  },
  16: {
    name: "Enxofre",
    symbol: "S",
    formula: "S",
    description:
      "O enxofre é um não-metal amarelo usado na produção de ácido sulfúrico, fertilizantes e borracha vulcanizada.",
    images: [
      "assets/img/elements/16/1.jpg",
      "assets/img/elements/16/2.jpg",
      "assets/img/elements/16/3.jpg",
      "assets/img/elements/16/4.jpg",
    ],
  },
  17: {
    name: "Cloro",
    symbol: "Cl",
    formula: "Cl₂",
    description:
      "O cloro é um halogênio verde-amarelado usado para purificar água, produzir plásticos e como agente branqueador.",
    images: [
      "assets/img/elements/17/1.jpg",
      "assets/img/elements/17/2.jpg",
      "assets/img/elements/17/3.jpg",
      "assets/img/elements/17/4.jpg",
    ],
  },
  18: {
    name: "Argônio",
    symbol: "Ar",
    formula: "Ar",
    description:
      "O argônio é um gás nobre incolor e inerte. É usado em lâmpadas, soldagem e como gás de proteção em processos industriais.",
    images: [
      "assets/img/elements/18/1.jpg",
      "assets/img/elements/18/2.jpg",
      "assets/img/elements/18/3.jpg",
      "assets/img/elements/18/4.jpg",
    ],
  },
  19: {
    name: "Potássio",
    symbol: "K",
    formula: "K",
    description:
      "O potássio é um metal alcalino essencial para a vida. É usado em fertilizantes, medicamentos e na produção de sabão.",
    images: [
      "assets/img/elements/19/1.jpg",
      "assets/img/elements/19/2.jpg",
      "assets/img/elements/19/3.jpg",
      "assets/img/elements/19/4.jpg",
    ],
  },
  20: {
    name: "Cálcio",
    symbol: "Ca",
    formula: "Ca",
    description:
      "O cálcio é um metal alcalino-terroso essencial para ossos e dentes. É usado em suplementos nutricionais e na produção de cimento.",
    images: [
      "assets/img/elements/20/1.jpg",
      "assets/img/elements/20/2.jpg",
      "assets/img/elements/20/3.jpg",
      "assets/img/elements/20/4.jpg",
    ],
  },
  21: {
    name: "Escândio",
    symbol: "Sc",
    formula: "Sc",
    description:
      "O escândio é um metal de transição leve e prateado. É usado em ligas de alumínio para aplicações aeroespaciais e em lâmpadas de alta intensidade.",
    images: [
      "assets/img/elements/21/1.jpg",
      "assets/img/elements/21/2.jpg",
      "assets/img/elements/21/3.jpg",
      "assets/img/elements/21/4.jpg",
    ],
  },
  22: {
    name: "Titânio",
    symbol: "Ti",
    formula: "Ti",
    description:
      "O titânio é um metal de transição forte, leve e resistente à corrosão. É usado em implantes médicos, aeronaves e equipamentos esportivos.",
    images: [
      "assets/img/elements/22/1.jpg",
      "assets/img/elements/22/2.jpg",
      "assets/img/elements/22/3.jpg",
      "assets/img/elements/22/4.jpg",
    ],
  },
  23: {
    name: "Vanádio",
    symbol: "V",
    formula: "V",
    description:
      "O vanádio é um metal de transição duro e cinza-prateado. É usado em ligas de aço para aumentar a resistência e na produção de catalisadores.",
    images: [
      "assets/img/elements/23/1.jpg",
      "assets/img/elements/23/2.jpg",
      "assets/img/elements/23/3.jpg",
      "assets/img/elements/23/4.jpg",
    ],
  },
  24: {
    name: "Cromo",
    symbol: "Cr",
    formula: "Cr",
    description:
      "O cromo é um metal de transição duro e brilhante. É usado em revestimentos decorativos, ligas de aço inoxidável e pigmentos.",
    images: [
      "assets/img/elements/24/1.jpg",
      "assets/img/elements/24/2.jpg",
      "assets/img/elements/24/3.jpg",
      "assets/img/elements/24/4.jpg",
    ],
  },
  25: {
    name: "Manganês",
    symbol: "Mn",
    formula: "Mn",
    description:
      "O manganês é um metal de transição essencial para a vida. É usado em ligas de aço, baterias e como catalisador em processos químicos.",
    images: [
      "assets/img/elements/25/1.jpg",
      "assets/img/elements/25/2.jpg",
      "assets/img/elements/25/3.jpg",
      "assets/img/elements/25/4.jpg",
    ],
  },
  26: {
    name: "Ferro",
    symbol: "Fe",
    formula: "Fe",
    description:
      "O ferro é um metal de transição essencial para a vida. É o principal componente do aço e é vital para o transporte de oxigênio no sangue.",
    images: [
      "assets/img/elements/26/1.jpg",
      "assets/img/elements/26/2.jpg",
      "assets/img/elements/26/3.jpg",
      "assets/img/elements/26/4.jpg",
    ],
  },
  27: {
    name: "Cobalto",
    symbol: "Co",
    formula: "Co",
    description:
      "O cobalto é um metal de transição duro e prateado. É usado em baterias recarregáveis, ligas magnéticas e pigmentos azuis.",
    images: [
      "assets/img/elements/27/1.jpg",
      "assets/img/elements/27/2.jpg",
      "assets/img/elements/27/3.jpg",
      "assets/img/elements/27/4.jpg",
    ],
  },
  28: {
    name: "Níquel",
    symbol: "Ni",
    formula: "Ni",
    description:
      "O níquel é um metal de transição resistente à corrosão. É usado em moedas, baterias recarregáveis e ligas de aço inoxidável.",
    images: [
      "assets/img/elements/28/1.jpg",
      "assets/img/elements/28/2.jpg",
      "assets/img/elements/28/3.jpg",
      "assets/img/elements/28/4.jpg",
    ],
  },
  29: {
    name: "Cobre",
    symbol: "Cu",
    formula: "Cu",
    description:
      "O cobre é um metal de transição excelente condutor de eletricidade. É usado em fios elétricos, moedas e tubulações.",
    images: [
      "assets/img/elements/29/1.jpg",
      "assets/img/elements/29/2.jpg",
      "assets/img/elements/29/3.jpg",
      "assets/img/elements/29/4.jpg",
    ],
  },
  30: {
    name: "Zinco",
    symbol: "Zn",
    formula: "Zn",
    description:
      "O zinco é um metal de transição essencial para a vida. É usado em galvanização, baterias e como suplemento nutricional.",
    images: [
      "assets/img/elements/30/1.jpg",
      "assets/img/elements/30/2.jpg",
      "assets/img/elements/30/3.jpg",
      "assets/img/elements/30/4.jpg",
    ],
  },
  31: {
    name: "Gálio",
    symbol: "Ga",
    formula: "Ga",
    description:
      "O gálio é um metal macio e prateado que derrete próximo à temperatura ambiente. É usado em semicondutores e LEDs.",
    images: [
      "assets/img/elements/31/1.jpg",
      "assets/img/elements/31/2.jpg",
      "assets/img/elements/31/3.jpg",
      "assets/img/elements/31/4.jpg",
    ],
  },
  32: {
    name: "Germânio",
    symbol: "Ge",
    formula: "Ge",
    description:
      "O germânio é um semimetal usado em semicondutores e fibra óptica. Foi crucial para o desenvolvimento da eletrônica moderna.",
    images: [
      "assets/img/elements/32/1.jpg",
      "assets/img/elements/32/2.jpg",
      "assets/img/elements/32/3.jpg",
      "assets/img/elements/32/4.jpg",
    ],
  },
  33: {
    name: "Arsênio",
    symbol: "As",
    formula: "As",
    description:
      "O arsênio é um semimetal tóxico usado em pesticidas e preservativos de madeira. Também tem aplicações em semicondutores.",
    images: [
      "assets/img/elements/33/1.jpg",
      "assets/img/elements/33/2.jpg",
      "assets/img/elements/33/3.jpg",
      "assets/img/elements/33/4.jpg",
    ],
  },
  34: {
    name: "Selênio",
    symbol: "Se",
    formula: "Se",
    description:
      "O selênio é um não-metal essencial em pequenas quantidades. É usado em células solares, fotocopiadoras e suplementos nutricionais.",
    images: [
      "assets/img/elements/34/1.jpg",
      "assets/img/elements/34/2.jpg",
      "assets/img/elements/34/3.jpg",
      "assets/img/elements/34/4.jpg",
    ],
  },
  35: {
    name: "Bromo",
    symbol: "Br",
    formula: "Br₂",
    description:
      "O bromo é um halogênio líquido vermelho-acastanhado. É usado em retardantes de chama, produtos farmacêuticos e fotografia.",
    images: [
      "assets/img/elements/35/1.jpg",
      "assets/img/elements/35/2.jpg",
      "assets/img/elements/35/3.jpg",
      "assets/img/elements/35/4.jpg",
    ],
  },
  36: {
    name: "Criptônio",
    symbol: "Kr",
    formula: "Kr",
    description:
      "O criptônio é um gás nobre usado em lâmpadas, lasers e anestésicos. É incolor e inerte, emitindo luz branca quando ionizado.",
    images: [
      "assets/img/elements/36/1.jpg",
      "assets/img/elements/36/2.jpg",
      "assets/img/elements/36/3.jpg",
      "assets/img/elements/36/4.jpg",
    ],
  },
  37: {
    name: "Rubídio",
    symbol: "Rb",
    formula: "Rb",
    description:
      "O rubídio é um metal alcalino macio e prateado. É usado em relógios atômicos, células fotoelétricas e como catalisador.",
    images: [
      "assets/img/elements/37/1.jpg",
      "assets/img/elements/37/2.jpg",
      "assets/img/elements/37/3.jpg",
      "assets/img/elements/37/4.jpg",
    ],
  },
  38: {
    name: "Estrôncio",
    symbol: "Sr",
    formula: "Sr",
    description:
      "O estrôncio é um metal alcalino-terroso usado em fogos de artifício (produz cor vermelha) e em tubos de raios catódicos.",
    images: [
      "assets/img/elements/38/1.jpg",
      "assets/img/elements/38/2.jpg",
      "assets/img/elements/38/3.jpg",
      "assets/img/elements/38/4.jpg",
    ],
  },
  39: {
    name: "Ítrio",
    symbol: "Y",
    formula: "Y",
    description:
      "O ítrio é um metal de transição usado em supercondutores, LEDs e lasers. Também é usado em ligas de alumínio e magnésio.",
    images: [
      "assets/img/elements/39/1.jpg",
      "assets/img/elements/39/2.jpg",
      "assets/img/elements/39/3.jpg",
      "assets/img/elements/39/4.jpg",
    ],
  },
  40: {
    name: "Zircônio",
    symbol: "Zr",
    formula: "Zr",
    description:
      "O zircônio é um metal de transição resistente à corrosão. É usado em reatores nucleares, implantes médicos e joias.",
    images: [
      "assets/img/elements/40/1.jpg",
      "assets/img/elements/40/2.jpg",
      "assets/img/elements/40/3.jpg",
      "assets/img/elements/40/4.jpg",
    ],
  },
  41: {
    name: "Nióbio",
    symbol: "Nb",
    formula: "Nb",
    description:
      "O nióbio é um metal de transição usado em supercondutores e ligas de aço. É resistente à corrosão e tem propriedades magnéticas.",
    images: [
      "assets/img/elements/41/1.jpg",
      "assets/img/elements/41/2.jpg",
      "assets/img/elements/41/3.jpg",
      "assets/img/elements/41/4.jpg",
    ],
  },
  42: {
    name: "Molibdênio",
    symbol: "Mo",
    formula: "Mo",
    description:
      "O molibdênio é um metal de transição usado em ligas de aço, lubrificantes e catalisadores. É essencial para algumas enzimas.",
    images: [
      "assets/img/elements/42/1.jpg",
      "assets/img/elements/42/2.jpg",
      "assets/img/elements/42/3.jpg",
      "assets/img/elements/42/4.jpg",
    ],
  },
  43: {
    name: "Tecnécio",
    symbol: "Tc",
    formula: "Tc",
    description:
      "O tecnécio é o primeiro elemento artificial da tabela periódica. É usado em medicina nuclear para diagnóstico e tratamento.",
    images: [
      "assets/img/elements/43/1.jpg",
      "assets/img/elements/43/2.jpg",
      "assets/img/elements/43/3.jpg",
      "assets/img/elements/43/4.jpg",
    ],
  },
  44: {
    name: "Rutênio",
    symbol: "Ru",
    formula: "Ru",
    description:
      "O rutênio é um metal de transição usado em joias, eletrônica e como catalisador. É resistente à corrosão e tem propriedades magnéticas.",
    images: [
      "assets/img/elements/44/1.jpg",
      "assets/img/elements/44/2.jpg",
      "assets/img/elements/44/3.jpg",
      "assets/img/elements/44/4.jpg",
    ],
  },
  45: {
    name: "Ródio",
    symbol: "Rh",
    formula: "Rh",
    description:
      "O ródio é um metal de transição precioso usado em conversores catalíticos, joias e como catalisador em processos químicos.",
    images: [
      "assets/img/elements/45/1.jpg",
      "assets/img/elements/45/2.jpg",
      "assets/img/elements/45/3.jpg",
      "assets/img/elements/45/4.jpg",
    ],
  },
  46: {
    name: "Paládio",
    symbol: "Pd",
    formula: "Pd",
    description:
      "O paládio é um metal de transição precioso usado em conversores catalíticos, joias e odontologia. É um excelente catalisador.",
    images: [
      "assets/img/elements/46/1.jpg",
      "assets/img/elements/46/2.jpg",
      "assets/img/elements/46/3.jpg",
      "assets/img/elements/46/4.jpg",
    ],
  },
  47: {
    name: "Prata",
    symbol: "Ag",
    formula: "Ag",
    description:
      "A prata é um metal de transição precioso usado em joias, moedas e fotografia. É o melhor condutor de eletricidade e calor.",
    images: [
      "assets/img/elements/47/1.jpg",
      "assets/img/elements/47/2.jpg",
      "assets/img/elements/47/3.jpg",
      "assets/img/elements/47/4.jpg",
    ],
  },
  48: {
    name: "Cádmio",
    symbol: "Cd",
    formula: "Cd",
    description:
      "O cádmio é um metal de transição usado em baterias, pigmentos e revestimentos. É tóxico e deve ser manuseado com cuidado.",
    images: [
      "assets/img/elements/48/1.jpg",
      "assets/img/elements/48/2.jpg",
      "assets/img/elements/48/3.jpg",
      "assets/img/elements/48/4.jpg",
    ],
  },
  49: {
    name: "Índio",
    symbol: "In",
    formula: "In",
    description:
      "O índio é um metal macio e prateado usado em telas de toque, painéis solares e soldas. É um componente importante da tecnologia moderna.",
    images: [
      "assets/img/elements/49/1.jpg",
      "assets/img/elements/49/2.jpg",
      "assets/img/elements/49/3.jpg",
      "assets/img/elements/49/4.jpg",
    ],
  },
  50: {
    name: "Estanho",
    symbol: "Sn",
    formula: "Sn",
    description:
      "O estanho é um metal usado em soldas, latas e ligas como o bronze. É resistente à corrosão e tem baixa toxicidade.",
    images: [
      "assets/img/elements/50/1.jpg",
      "assets/img/elements/50/2.jpg",
      "assets/img/elements/50/3.jpg",
      "assets/img/elements/50/4.jpg",
    ],
  },
  51: {
    name: "Antimônio",
    symbol: "Sb",
    formula: "Sb",
    description:
      "O antimônio é um semimetal usado em ligas, retardantes de chama e eletrônica. Tem propriedades tanto de metal quanto de não-metal.",
    images: [
      "assets/img/elements/51/1.jpg",
      "assets/img/elements/51/2.jpg",
      "assets/img/elements/51/3.jpg",
      "assets/img/elements/51/4.jpg",
    ],
  },
  52: {
    name: "Telúrio",
    symbol: "Te",
    formula: "Te",
    description:
      "O telúrio é um semimetal usado em painéis solares, ligas metálicas e como corante. É um elemento raro na crosta terrestre.",
    images: [
      "assets/img/elements/52/1.jpg",
      "assets/img/elements/52/2.jpg",
      "assets/img/elements/52/3.jpg",
      "assets/img/elements/52/4.jpg",
    ],
  },
  53: {
    name: "Iodo",
    symbol: "I",
    formula: "I₂",
    description:
      "O iodo é um halogênio essencial para a vida. É usado em desinfetantes, contrastes radiológicos e suplementos nutricionais.",
    images: [
      "assets/img/elements/53/1.jpg",
      "assets/img/elements/53/2.jpg",
      "assets/img/elements/53/3.jpg",
      "assets/img/elements/53/4.jpg",
    ],
  },
  54: {
    name: "Xenônio",
    symbol: "Xe",
    formula: "Xe",
    description:
      "O xenônio é um gás nobre usado em lâmpadas, lasers e anestésicos. É incolor, inodoro e praticamente inerte.",
    images: [
      "assets/img/elements/54/1.jpg",
      "assets/img/elements/54/2.jpg",
      "assets/img/elements/54/3.jpg",
      "assets/img/elements/54/4.jpg",
    ],
  },
  55: {
    name: "Césio",
    symbol: "Cs",
    formula: "Cs",
    description:
      "O césio é um metal alcalino macio e dourado. É usado em relógios atômicos, células fotoelétricas e como catalisador.",
    images: [
      "assets/img/elements/55/1.jpg",
      "assets/img/elements/55/2.jpg",
      "assets/img/elements/55/3.jpg",
      "assets/img/elements/55/4.jpg",
    ],
  },
  56: {
    name: "Bário",
    symbol: "Ba",
    formula: "Ba",
    description:
      "O bário é um metal alcalino-terroso usado em contrastes radiológicos, fogos de artifício e vidros especiais.",
    images: [
      "assets/img/elements/56/1.jpg",
      "assets/img/elements/56/2.jpg",
      "assets/img/elements/56/3.jpg",
      "assets/img/elements/56/4.jpg",
    ],
  },
  57: {
    name: "Lantânio",
    symbol: "La",
    formula: "La",
    description:
      "O lantânio é o primeiro elemento da série dos lantanídeos. É usado em baterias recarregáveis, lentes de câmera e ligas metálicas.",
    images: [
      "assets/img/elements/57/1.jpg",
      "assets/img/elements/57/2.jpg",
      "assets/img/elements/57/3.jpg",
      "assets/img/elements/57/4.jpg",
    ],
  },
  58: {
    name: "Cério",
    symbol: "Ce",
    formula: "Ce",
    description:
      "O cério é um lantanídeo usado em catalisadores, ligas metálicas e polimento de vidros. É o mais abundante dos elementos terras raras.",
    images: [
      "assets/img/elements/58/1.jpg",
      "assets/img/elements/58/2.jpg",
      "assets/img/elements/58/3.jpg",
      "assets/img/elements/58/4.jpg",
    ],
  },
  59: {
    name: "Praseodímio",
    symbol: "Pr",
    formula: "Pr",
    description:
      "O praseodímio é um lantanídeo usado em ligas metálicas, lasers e vidros especiais. Tem propriedades magnéticas interessantes.",
    images: [
      "assets/img/elements/59/1.jpg",
      "assets/img/elements/59/2.jpg",
      "assets/img/elements/59/3.jpg",
      "assets/img/elements/59/4.jpg",
    ],
  },
  60: {
    name: "Neodímio",
    symbol: "Nd",
    formula: "Nd",
    description:
      "O neodímio é um lantanídeo usado em ímãs poderosos, lasers e vidros coloridos. É essencial para a tecnologia moderna.",
    images: [
      "assets/img/elements/60/1.jpg",
      "assets/img/elements/60/2.jpg",
      "assets/img/elements/60/3.jpg",
      "assets/img/elements/60/4.jpg",
    ],
  },
  61: {
    name: "Promécio",
    symbol: "Pm",
    formula: "Pm",
    description:
      "O promécio é um lantanídeo radioativo usado em baterias nucleares e fontes de luz. É o único elemento radioativo entre os lantanídeos.",
    images: [
      "assets/img/elements/61/1.jpg",
      "assets/img/elements/61/2.jpg",
      "assets/img/elements/61/3.jpg",
      "assets/img/elements/61/4.jpg",
    ],
  },
  62: {
    name: "Samário",
    symbol: "Sm",
    formula: "Sm",
    description:
      "O samário é um lantanídeo usado em ímãs, lasers e medicina nuclear. Tem propriedades magnéticas e luminescentes importantes.",
    images: [
      "assets/img/elements/62/1.jpg",
      "assets/img/elements/62/2.jpg",
      "assets/img/elements/62/3.jpg",
      "assets/img/elements/62/4.jpg",
    ],
  },
  63: {
    name: "Európio",
    symbol: "Eu",
    formula: "Eu",
    description:
      "O európio é um lantanídeo usado em telas de TV, lâmpadas fluorescentes e lasers. É um dos elementos mais reativos das terras raras.",
    images: [
      "assets/img/elements/63/1.jpg",
      "assets/img/elements/63/2.jpg",
      "assets/img/elements/63/3.jpg",
      "assets/img/elements/63/4.jpg",
    ],
  },
  64: {
    name: "Gadolínio",
    symbol: "Gd",
    formula: "Gd",
    description:
      "O gadolínio é um lantanídeo usado em contrastes de ressonância magnética, ligas metálicas e reatores nucleares.",
    images: [
      "assets/img/elements/64/1.jpg",
      "assets/img/elements/64/2.jpg",
      "assets/img/elements/64/3.jpg",
      "assets/img/elements/64/4.jpg",
    ],
  },
  65: {
    name: "Térbio",
    symbol: "Tb",
    formula: "Tb",
    description:
      "O térbio é um lantanídeo usado em telas coloridas, lasers e dispositivos de armazenamento de dados. Tem propriedades luminescentes únicas.",
    images: [
      "assets/img/elements/65/1.jpg",
      "assets/img/elements/65/2.jpg",
      "assets/img/elements/65/3.jpg",
      "assets/img/elements/65/4.jpg",
    ],
  },
  66: {
    name: "Disprósio",
    symbol: "Dy",
    formula: "Dy",
    description:
      "O disprósio é um lantanídeo usado em ímãs poderosos, lasers e reatores nucleares. É essencial para tecnologias verdes.",
    images: [
      "assets/img/elements/66/1.jpg",
      "assets/img/elements/66/2.jpg",
      "assets/img/elements/66/3.jpg",
      "assets/img/elements/66/4.jpg",
    ],
  },
  67: {
    name: "Hólmio",
    symbol: "Ho",
    formula: "Ho",
    description:
      "O hólmio é um lantanídeo usado em lasers, ímãs e controle de reatores nucleares. Tem as propriedades magnéticas mais fortes de qualquer elemento.",
    images: [
      "assets/img/elements/67/1.jpg",
      "assets/img/elements/67/2.jpg",
      "assets/img/elements/67/3.jpg",
      "assets/img/elements/67/4.jpg",
    ],
  },
  68: {
    name: "Érbio",
    symbol: "Er",
    formula: "Er",
    description:
      "O érbio é um lantanídeo usado em fibras ópticas, lasers e ligas metálicas. É essencial para a comunicação moderna.",
    images: [
      "assets/img/elements/68/1.jpg",
      "assets/img/elements/68/2.jpg",
      "assets/img/elements/68/3.jpg",
      "assets/img/elements/68/4.jpg",
    ],
  },
  69: {
    name: "Túlio",
    symbol: "Tm",
    formula: "Tm",
    description:
      "O túlio é um lantanídeo usado em lasers, fontes de raios X portáteis e dispositivos de segurança. É um dos elementos mais raros das terras raras.",
    images: [
      "assets/img/elements/69/1.jpg",
      "assets/img/elements/69/2.jpg",
      "assets/img/elements/69/3.jpg",
      "assets/img/elements/69/4.jpg",
    ],
  },
  70: {
    name: "Itérbio",
    symbol: "Yb",
    formula: "Yb",
    description:
      "O itérbio é um lantanídeo usado em lasers, relógios atômicos e aço inoxidável. Tem propriedades ópticas e magnéticas importantes.",
    images: [
      "assets/img/elements/70/1.jpg",
      "assets/img/elements/70/2.jpg",
      "assets/img/elements/70/3.jpg",
      "assets/img/elements/70/4.jpg",
    ],
  },
  71: {
    name: "Lutécio",
    symbol: "Lu",
    formula: "Lu",
    description:
      "O lutécio é o último elemento da série dos lantanídeos. É usado em catalisadores, detectores de radiação e na produção de vidros especiais.",
    images: [
      "assets/img/elements/71/1.jpg",
      "assets/img/elements/71/2.jpg",
      "assets/img/elements/71/3.jpg",
      "assets/img/elements/71/4.jpg",
    ],
  },
  72: {
    name: "Háfnio",
    symbol: "Hf",
    formula: "Hf",
    description:
      "O háfnio é um metal de transição usado em reatores nucleares, processadores de computador e ligas de alta resistência.",
    images: [
      "assets/img/elements/72/1.jpg",
      "assets/img/elements/72/2.jpg",
      "assets/img/elements/72/3.jpg",
      "assets/img/elements/72/4.jpg",
    ],
  },
  73: {
    name: "Tântalo",
    symbol: "Ta",
    formula: "Ta",
    description:
      "O tântalo é um metal de transição resistente à corrosão. É usado em capacitores eletrônicos, implantes médicos e ferramentas de corte.",
    images: [
      "assets/img/elements/73/1.jpg",
      "assets/img/elements/73/2.jpg",
      "assets/img/elements/73/3.jpg",
      "assets/img/elements/73/4.jpg",
    ],
  },
  74: {
    name: "Tungstênio",
    symbol: "W",
    formula: "W",
    description:
      "O tungstênio é o metal com o ponto de fusão mais alto. É usado em filamentos de lâmpadas, ferramentas de corte e blindagem contra radiação.",
    images: [
      "assets/img/elements/74/1.jpg",
      "assets/img/elements/74/2.jpg",
      "assets/img/elements/74/3.jpg",
      "assets/img/elements/74/4.jpg",
    ],
  },
  75: {
    name: "Rênio",
    symbol: "Re",
    formula: "Re",
    description:
      "O rênio é um metal de transição raro usado em catalisadores, superligas e termopares. É um dos elementos mais densos da tabela periódica.",
    images: [
      "assets/img/elements/75/1.jpg",
      "assets/img/elements/75/2.jpg",
      "assets/img/elements/75/3.jpg",
      "assets/img/elements/75/4.jpg",
    ],
  },
  76: {
    name: "Ósmio",
    symbol: "Os",
    formula: "Os",
    description:
      "O ósmio é o elemento mais denso da tabela periódica. É usado em ligas duras, pontas de canetas e catalisadores.",
    images: [
      "assets/img/elements/76/1.jpg",
      "assets/img/elements/76/2.jpg",
      "assets/img/elements/76/3.jpg",
      "assets/img/elements/76/4.jpg",
    ],
  },
  77: {
    name: "Irídio",
    symbol: "Ir",
    formula: "Ir",
    description:
      "O irídio é um metal de transição extremamente denso e resistente à corrosão. É usado em contatos elétricos, joias e na produção de ligas especiais.",
    images: [
      "assets/img/elements/77/1.jpg",
      "assets/img/elements/77/2.jpg",
      "assets/img/elements/77/3.jpg",
      "assets/img/elements/77/4.jpg",
    ],
  },
  78: {
    name: "Platina",
    symbol: "Pt",
    formula: "Pt",
    description:
      "A platina é um metal precioso usado em joias, catalisadores automotivos e equipamentos de laboratório. É resistente à corrosão e tem excelente condutividade.",
    images: [
      "assets/img/elements/78/1.jpg",
      "assets/img/elements/78/2.jpg",
      "assets/img/elements/78/3.jpg",
      "assets/img/elements/78/4.jpg",
    ],
  },
  79: {
    name: "Ouro",
    symbol: "Au",
    formula: "Au",
    description:
      "O ouro é um metal precioso usado em joias, eletrônica e como reserva de valor. É altamente maleável, dúctil e resistente à corrosão.",
    images: [
      "assets/img/elements/79/1.jpg",
      "assets/img/elements/79/2.jpg",
      "assets/img/elements/79/3.jpg",
      "assets/img/elements/79/4.jpg",
    ],
  },
  80: {
    name: "Mercúrio",
    symbol: "Hg",
    formula: "Hg",
    description:
      "O mercúrio é o único metal líquido à temperatura ambiente. É usado em termômetros, lâmpadas fluorescentes e processos industriais, mas é altamente tóxico.",
    images: [
      "assets/img/elements/80/1.jpg",
      "assets/img/elements/80/2.jpg",
      "assets/img/elements/80/3.jpg",
      "assets/img/elements/80/4.jpg",
    ],
  },
  81: {
    name: "Tálio",
    symbol: "Tl",
    formula: "Tl",
    description:
      "O tálio é um metal macio e cinza usado em detectores de radiação, vidros especiais e semicondutores. É altamente tóxico e foi usado como veneno no passado.",
    images: [
      "assets/img/elements/81/1.jpg",
      "assets/img/elements/81/2.jpg",
      "assets/img/elements/81/3.jpg",
      "assets/img/elements/81/4.jpg",
    ],
  },
  82: {
    name: "Chumbo",
    symbol: "Pb",
    formula: "Pb",
    description:
      "O chumbo é um metal pesado usado em baterias, blindagem contra radiação e soldas. Foi amplamente usado em tubulações e tintas, mas seu uso foi reduzido devido à toxicidade.",
    images: [
      "assets/img/elements/82/1.jpg",
      "assets/img/elements/82/2.jpg",
      "assets/img/elements/82/3.jpg",
      "assets/img/elements/82/4.jpg",
    ],
  },
  83: {
    name: "Bismuto",
    symbol: "Bi",
    formula: "Bi",
    description:
      "O bismuto é um metal pesado usado em medicamentos, cosméticos e ligas de baixo ponto de fusão. É o elemento natural mais diamagnético e tem baixa toxicidade.",
    images: [
      "assets/img/elements/83/1.jpg",
      "assets/img/elements/83/2.jpg",
      "assets/img/elements/83/3.jpg",
      "assets/img/elements/83/4.jpg",
    ],
  },
  84: {
    name: "Polônio",
    symbol: "Po",
    formula: "Po",
    description:
      "O polônio é um elemento radioativo extremamente raro e perigoso. Foi usado em fontes de calor para satélites e como veneno. É um dos elementos mais radioativos conhecidos.",
    images: [
      "assets/img/elements/84/1.jpg",
      "assets/img/elements/84/2.jpg",
      "assets/img/elements/84/3.jpg",
      "assets/img/elements/84/4.jpg",
    ],
  },
  85: {
    name: "Ástato",
    symbol: "At",
    formula: "At",
    description:
      "O ástato é o halogênio mais raro e radioativo. É tão raro que sua quantidade total na crosta terrestre é estimada em menos de 1 grama. Tem aplicações limitadas em medicina nuclear.",
    images: [
      "assets/img/elements/85/1.jpg",
      "assets/img/elements/85/2.jpg",
      "assets/img/elements/85/3.jpg",
      "assets/img/elements/85/4.jpg",
    ],
  },
  86: {
    name: "Radônio",
    symbol: "Rn",
    formula: "Rn",
    description:
      "O radônio é um gás nobre radioativo que ocorre naturalmente como produto do decaimento do urânio. É a segunda principal causa de câncer de pulmão após o tabagismo.",
    images: [
      "assets/img/elements/86/1.jpg",
      "assets/img/elements/86/2.jpg",
      "assets/img/elements/86/3.jpg",
      "assets/img/elements/86/4.jpg",
    ],
  },
  87: {
    name: "Frâncio",
    symbol: "Fr",
    formula: "Fr",
    description:
      "O frâncio é o metal alcalino mais pesado e radioativo. É extremamente raro e instável, com meia-vida de apenas 22 minutos. Tem poucas aplicações práticas devido à sua raridade.",
    images: [
      "assets/img/elements/87/1.jpg",
      "assets/img/elements/87/2.jpg",
      "assets/img/elements/87/3.jpg",
      "assets/img/elements/87/4.jpg",
    ],
  },
  88: {
    name: "Rádio",
    symbol: "Ra",
    formula: "Ra",
    description:
      "O rádio é um metal alcalino-terroso radioativo que brilha no escuro. Foi usado em tintas luminosas e tratamento de câncer, mas seu uso foi reduzido devido à radioatividade.",
    images: [
      "assets/img/elements/88/1.jpg",
      "assets/img/elements/88/2.jpg",
      "assets/img/elements/88/3.jpg",
      "assets/img/elements/88/4.jpg",
    ],
  },
  89: {
    name: "Actínio",
    symbol: "Ac",
    formula: "Ac",
    description:
      "O actínio é o primeiro elemento da série dos actinídeos. É radioativo e brilhante no escuro. Tem aplicações limitadas em geradores termoelétricos e fontes de nêutrons.",
    images: [
      "assets/img/elements/89/1.jpg",
      "assets/img/elements/89/2.jpg",
      "assets/img/elements/89/3.jpg",
      "assets/img/elements/89/4.jpg",
    ],
  },
  90: {
    name: "Tório",
    symbol: "Th",
    formula: "Th",
    description:
      "O tório é um actinídeo radioativo usado como combustível nuclear e em ligas de magnésio. É mais abundante que o urânio e tem potencial para energia nuclear mais segura.",
    images: [
      "assets/img/elements/90/1.jpg",
      "assets/img/elements/90/2.jpg",
      "assets/img/elements/90/3.jpg",
      "assets/img/elements/90/4.jpg",
    ],
  },
  91: {
    name: "Protactínio",
    symbol: "Pa",
    formula: "Pa",
    description:
      "O protactínio é um actinídeo radioativo extremamente raro. É um dos elementos mais caros e difíceis de obter, com poucas aplicações práticas além da pesquisa científica.",
    images: [
      "assets/img/elements/91/1.jpg",
      "assets/img/elements/91/2.jpg",
      "assets/img/elements/91/3.jpg",
      "assets/img/elements/91/4.jpg",
    ],
  },
  92: {
    name: "Urânio",
    symbol: "U",
    formula: "U",
    description:
      "O urânio é o elemento mais conhecido dos actinídeos, usado como combustível nuclear e em armas atômicas. É radioativo e foi crucial para o desenvolvimento da energia nuclear.",
    images: [
      "assets/img/elements/92/1.jpg",
      "assets/img/elements/92/2.jpg",
      "assets/img/elements/92/3.jpg",
      "assets/img/elements/92/4.jpg",
    ],
  },
  93: {
    name: "Netúnio",
    symbol: "Np",
    formula: "Np",
    description:
      "O netúnio foi o primeiro elemento transurânico sintetizado. É usado em detectores de nêutrons e como precursor para a produção de plutônio.",
    images: [
      "assets/img/elements/93/1.jpg",
      "assets/img/elements/93/2.jpg",
      "assets/img/elements/93/3.jpg",
      "assets/img/elements/93/4.jpg",
    ],
  },
  94: {
    name: "Plutônio",
    symbol: "Pu",
    formula: "Pu",
    description:
      "O plutônio é um actinídeo altamente radioativo usado em armas nucleares e como combustível em reatores. É um dos elementos mais perigosos e controlados do mundo.",
    images: [
      "assets/img/elements/94/1.jpg",
      "assets/img/elements/94/2.jpg",
      "assets/img/elements/94/3.jpg",
      "assets/img/elements/94/4.jpg",
    ],
  },
  95: {
    name: "Amerício",
    symbol: "Am",
    formula: "Am",
    description:
      "O amerício é um actinídeo sintético usado em detectores de fumaça e como fonte de radiação em equipamentos industriais. Foi descoberto durante o Projeto Manhattan.",
    images: [
      "assets/img/elements/95/1.jpg",
      "assets/img/elements/95/2.jpg",
      "assets/img/elements/95/3.jpg",
      "assets/img/elements/95/4.jpg",
    ],
  },
  96: {
    name: "Cúrio",
    symbol: "Cm",
    formula: "Cm",
    description:
      "O cúrio é um actinídeo sintético altamente radioativo. É usado em geradores termoelétricos para naves espaciais e em fontes de nêutrons para pesquisa.",
    images: [
      "assets/img/elements/96/1.jpg",
      "assets/img/elements/96/2.jpg",
      "assets/img/elements/96/3.jpg",
      "assets/img/elements/96/4.jpg",
    ],
  },
  97: {
    name: "Berquélio",
    symbol: "Bk",
    formula: "Bk",
    description:
      "O berquélio é um actinídeo sintético extremamente raro. Tem poucas aplicações práticas e é usado principalmente em pesquisa científica.",
    images: [
      "assets/img/elements/97/1.jpg",
      "assets/img/elements/97/2.jpg",
      "assets/img/elements/97/3.jpg",
      "assets/img/elements/97/4.jpg",
    ],
  },
  98: {
    name: "Califórnio",
    symbol: "Cf",
    formula: "Cf",
    description:
      "O califórnio é um actinídeo sintético usado como fonte de nêutrons em equipamentos de análise e tratamento de câncer. É um dos elementos mais caros do mundo.",
    images: [
      "assets/img/elements/98/1.jpg",
      "assets/img/elements/98/2.jpg",
      "assets/img/elements/98/3.jpg",
      "assets/img/elements/98/4.jpg",
    ],
  },
  99: {
    name: "Einstênio",
    symbol: "Es",
    formula: "Es",
    description:
      "O einstênio é um actinídeo sintético extremamente raro e radioativo. Foi descoberto nos resíduos da primeira explosão de bomba de hidrogênio.",
    images: [
      "assets/img/elements/99/1.jpg",
      "assets/img/elements/99/2.jpg",
      "assets/img/elements/99/3.jpg",
      "assets/img/elements/99/4.jpg",
    ],
  },
  100: {
    name: "Férmio",
    symbol: "Fm",
    formula: "Fm",
    description:
      "O férmio é um elemento sintético radioativo da série dos actinídeos. Foi descoberto nos resíduos da explosão da primeira bomba de hidrogênio e tem aplicações limitadas devido à sua alta radioatividade.",
    images: [
      "assets/img/elements/100/1.jpg",
      "assets/img/elements/100/2.jpg",
      "assets/img/elements/100/3.jpg",
      "assets/img/elements/100/4.jpg",
    ],
  },
  101: {
    name: "Mendelévio",
    symbol: "Md",
    formula: "Md",
    description:
      "O mendelévio é um elemento sintético radioativo, nomeado em homenagem a Dmitri Mendeleev. É produzido em aceleradores de partículas e tem aplicações limitadas devido à sua alta radioatividade.",
    images: [
      "assets/img/elements/101/1.jpg",
      "assets/img/elements/101/2.jpg",
      "assets/img/elements/101/3.jpg",
      "assets/img/elements/101/4.jpg",
    ],
  },
  102: {
    name: "Nobélio",
    symbol: "No",
    formula: "No",
    description:
      "O nobélio é um elemento sintético radioativo da série dos actinídeos. Foi nomeado em homenagem a Alfred Nobel e é produzido em aceleradores de partículas.",
    images: [
      "assets/img/elements/102/1.jpg",
      "assets/img/elements/102/2.jpg",
      "assets/img/elements/102/3.jpg",
      "assets/img/elements/102/4.jpg",
    ],
  },
  103: {
    name: "Laurêncio",
    symbol: "Lr",
    formula: "Lr",
    description:
      "O laurêncio é um elemento sintético radioativo, o último da série dos actinídeos. Foi nomeado em homenagem a Ernest Lawrence e é produzido em aceleradores de partículas.",
    images: [
      "assets/img/elements/103/1.jpg",
      "assets/img/elements/103/2.jpg",
      "assets/img/elements/103/3.jpg",
      "assets/img/elements/103/4.jpg",
    ],
  },
  104: {
    name: "Rutherfórdio",
    symbol: "Rf",
    formula: "Rf",
    description:
      "O rutherfórdio é um elemento sintético radioativo, o primeiro dos elementos transactinídeos. Foi nomeado em homenagem a Ernest Rutherford e é produzido em aceleradores de partículas.",
    images: [
      "assets/img/elements/104/1.jpg",
      "assets/img/elements/104/2.jpg",
      "assets/img/elements/104/3.jpg",
      "assets/img/elements/104/4.jpg",
    ],
  },
  105: {
    name: "Dúbnio",
    symbol: "Db",
    formula: "Db",
    description:
      "O dúbnio é um elemento sintético radioativo, produzido em aceleradores de partículas. Foi nomeado em homenagem ao Instituto Conjunto de Pesquisa Nuclear em Dubna, Rússia.",
    images: [
      "assets/img/elements/105/1.jpg",
      "assets/img/elements/105/2.jpg",
      "assets/img/elements/105/3.jpg",
      "assets/img/elements/105/4.jpg",
    ],
  },
  106: {
    name: "Seabórgio",
    symbol: "Sg",
    formula: "Sg",
    description:
      "O seabórgio é um elemento sintético radioativo, produzido em aceleradores de partículas. Foi nomeado em homenagem a Glenn T. Seaborg, um dos descobridores dos elementos transurânicos.",
    images: [
      "assets/img/elements/106/1.jpg",
      "assets/img/elements/106/2.jpg",
      "assets/img/elements/106/3.jpg",
      "assets/img/elements/106/4.jpg",
    ],
  },
  107: {
    name: "Bóhrio",
    symbol: "Bh",
    formula: "Bh",
    description:
      "O bóhrio é um elemento sintético radioativo, produzido em aceleradores de partículas. Foi nomeado em homenagem a Niels Bohr, um dos fundadores da física quântica.",
    images: [
      "assets/img/elements/107/1.jpg",
      "assets/img/elements/107/2.jpg",
      "assets/img/elements/107/3.jpg",
      "assets/img/elements/107/4.jpg",
    ],
  },
  108: {
    name: "Hássio",
    symbol: "Hs",
    formula: "Hs",
    description:
      "O hássio é um elemento sintético radioativo, produzido em aceleradores de partículas. Foi nomeado em homenagem ao estado alemão de Hesse, onde está localizado o laboratório onde foi descoberto.",
    images: [
      "assets/img/elements/108/1.jpg",
      "assets/img/elements/108/2.jpg",
      "assets/img/elements/108/3.jpg",
      "assets/img/elements/108/4.jpg",
    ],
  },
  109: {
    name: "Meitnério",
    symbol: "Mt",
    formula: "Mt",
    description:
      "O meitnério é um elemento sintético radioativo, produzido em aceleradores de partículas. Foi nomeado em homenagem a Lise Meitner, uma das descobridoras da fissão nuclear.",
    images: [
      "assets/img/elements/109/1.jpg",
      "assets/img/elements/109/2.jpg",
      "assets/img/elements/109/3.jpg",
      "assets/img/elements/109/4.jpg",
    ],
  },
  110: {
    name: "Darmstádio",
    symbol: "Ds",
    formula: "Ds",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem à cidade de Darmstadt, na Alemanha, onde foi descoberto.",
    images: [
      "assets/img/elements/110/1.jpg",
      "assets/img/elements/110/2.jpg",
      "assets/img/elements/110/3.jpg",
      "assets/img/elements/110/4.jpg",
    ],
  },
  111: {
    name: "Roentgênio",
    symbol: "Rg",
    formula: "Rg",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao físico alemão Wilhelm Röntgen, descobridor dos raios X.",
    images: [
      "assets/img/elements/111/1.jpg",
      "assets/img/elements/111/2.jpg",
      "assets/img/elements/111/3.jpg",
      "assets/img/elements/111/4.jpg",
    ],
  },
  112: {
    name: "Copernício",
    symbol: "Cn",
    formula: "Cn",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao astrônomo Nicolau Copérnico.",
    images: [
      "assets/img/elements/112/1.jpg",
      "assets/img/elements/112/2.jpg",
      "assets/img/elements/112/3.jpg",
      "assets/img/elements/112/4.jpg",
    ],
  },
  113: {
    name: "Nihônio",
    symbol: "Nh",
    formula: "Nh",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao Japão (Nihon em japonês), onde foi descoberto.",
    images: [
      "assets/img/elements/113/1.jpg",
      "assets/img/elements/113/2.jpg",
      "assets/img/elements/113/3.jpg",
      "assets/img/elements/113/4.jpg",
    ],
  },
  114: {
    name: "Fleróvio",
    symbol: "Fl",
    formula: "Fl",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao físico nuclear russo Georgy Flyorov.",
    images: [
      "assets/img/elements/114/1.jpg",
      "assets/img/elements/114/2.jpg",
      "assets/img/elements/114/3.jpg",
      "assets/img/elements/114/4.jpg",
    ],
  },
  115: {
    name: "Moscóvio",
    symbol: "Mc",
    formula: "Mc",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem à região de Moscou, na Rússia.",
    images: [
      "assets/img/elements/115/1.jpg",
      "assets/img/elements/115/2.jpg",
      "assets/img/elements/115/3.jpg",
      "assets/img/elements/115/4.jpg",
    ],
  },
  116: {
    name: "Livermório",
    symbol: "Lv",
    formula: "Lv",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao Laboratório Nacional Lawrence Livermore, nos EUA.",
    images: [
      "assets/img/elements/116/1.jpg",
      "assets/img/elements/116/2.jpg",
      "assets/img/elements/116/3.jpg",
      "assets/img/elements/116/4.jpg",
    ],
  },
  117: {
    name: "Tenessino",
    symbol: "Ts",
    formula: "Ts",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao estado do Tennessee, nos EUA.",
    images: [
      "assets/img/elements/117/1.jpg",
      "assets/img/elements/117/2.jpg",
      "assets/img/elements/117/3.jpg",
      "assets/img/elements/117/4.jpg",
    ],
  },
  118: {
    name: "Oganessônio",
    symbol: "Og",
    formula: "Og",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao físico nuclear russo Yuri Oganessian.",
    images: [
      "assets/img/elements/118/1.jpg",
      "assets/img/elements/118/2.jpg",
      "assets/img/elements/118/3.jpg",
      "assets/img/elements/118/4.jpg",
    ],
  },
  // Adicione mais elementos seguindo o mesmo padrão...
};

// Elementos do DOM
const modal = document.getElementById("elementModal");
const closeButton = document.querySelector(".close-modal");
const elementName = document.querySelector(".element-name");
const elementSymbol = document.querySelector(".element-symbol");
const elementFormula = document.querySelector(".element-formula");
const elementDescription = document.querySelector(".element-description");
const elementImages = document.querySelectorAll(".element-image");

// Função para carregar imagens de forma lazy
function lazyLoadImages(elementNumber) {
  const element = elementsData[elementNumber];
  if (!element) return;

  const modalImages = document.querySelectorAll(".element-image");
  modalImages.forEach((img, index) => {
    if (element.images[index]) {
      img.src = element.images[index];
      img.classList.remove("lazy");
    }
  });
}

// Função para abrir o modal
function openModal(elementNumber) {
  const element = elementsData[elementNumber];
  if (!element) return;

  const modal = document.getElementById("elementModal");
  const modalContent = modal.querySelector(".modal-content");

  // Atualizar conteúdo do modal
  modal.querySelector(".element-name").textContent = element.name;
  modal.querySelector(".element-symbol").textContent = element.symbol;
  modal.querySelector(".element-formula").textContent = element.formula;
  modal.querySelector(".element-description").textContent = element.description;

  // Resetar imagens
  const modalImages = document.querySelectorAll(".element-image");
  modalImages.forEach((img) => {
    img.src = "";
    img.classList.add("lazy");
  });

  // Mostrar modal
  modal.classList.add("active");
  modalContent.style.animation = "none";
  modalContent.offsetHeight; // Trigger reflow
  modalContent.style.animation = "";

  // Carregar imagens de forma lazy
  lazyLoadImages(elementNumber);
}

// Função para fechar o modal
function closeModal() {
  modal.classList.remove("active");
}

// Event Listeners
document.querySelectorAll(".element").forEach((element) => {
  element.addEventListener("click", () => {
    const elementNumber = element.getAttribute("data-number");
    if (elementNumber && !element.classList.contains("extension")) {
      openModal(elementNumber);
    }
  });
});

closeButton.addEventListener("click", closeModal);

// Fechar modal ao clicar fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Fechar modal com a tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
