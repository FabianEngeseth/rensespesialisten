const problems = [
  {
    title: "Hundelukt i sofa og bilsete",
    description:
      "Vi bryter ned luktstoffene ved roten — ikke bare overdekker dem. Helt trygt for hund, katt og barn etterpå.",
    tag: "Kjæledyr",
  },
  {
    title: "Rødvin, kaffe og saft",
    description:
      "Fargeflekker som har fått satt seg i stoffet. Vi kombinerer varme, trykk og riktig middel tilpasset materialet.",
    tag: "Flekker",
  },
  {
    title: "Urin i madrass eller sofa",
    description:
      "Både nye og gamle uhell. Vi trekker ut væsken fra dypet av polstringen og fjerner lukten fullstendig.",
    tag: "Hygiene",
  },
  {
    title: "Røyklukt etter utleie",
    description:
      "Stoff husker røyk i årevis. Vi dyprenser tekstilene og lufter ut det ingen vaskemiddel klarer alene.",
    tag: "Utleie",
  },
  {
    title: "Husstøvmidd og allergener",
    description:
      "Opp mot 2 kg støv og partikler samler seg i en gammel sofa. Dyprens gir målbart bedre luftkvalitet.",
    tag: "Allergi",
  },
  {
    title: "Fuktlukt i bobil eller hytte",
    description:
      "Tekstiler som har stått stille i fuktige rom utvikler kjellerlukt. Vi trekker ut mugg og forebygger at det kommer tilbake.",
    tag: "Bobil",
  },
  {
    title: "Matsøl på spisestoler",
    description:
      "Ketchup, olje, pastasaus. Familier med barn vet hvor fort det går. Vi får stolene til å se nye ut igjen.",
    tag: "Hverdag",
  },
  {
    title: "Etter flytting eller oppussing",
    description:
      "Byggestøv, maling eller grått smuss i møblene etter oppussingsperioden. Full reset før du tar i bruk rommet.",
    tag: "Oppussing",
  },
];

export default function CommonProblems() {
  return (
    <section id="utfordringer" className="py-24 lg:py-32 bg-cream-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-forest-600" />
            <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
              Vanlige utfordringer
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-5 leading-tight">
            Hvis du kjenner deg igjen, <span className="italic text-forest-700">kan vi fikse det</span>
          </h2>
          <p className="text-lg text-forest-800/70 leading-relaxed">
            Dette er de mest vanlige grunnene folk ringer oss. Er ditt
            problem på lista? Send oss et bilde — vi sier ifra med én gang
            om vi kan redde det eller ikke.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group relative bg-cream-100 rounded-xl p-6 border border-forest-900/10 hover:border-amber-accent hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10 transition-all duration-300"
            >
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-amber-accent mb-4 px-2 py-1 bg-amber-accent/10 rounded">
                {p.tag}
              </span>
              <h3 className="font-serif text-lg font-bold text-forest-950 mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-forest-800/70 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
