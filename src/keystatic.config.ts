import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  singletons: {
    settings: singleton({
      label: "Nettstedsinnstillinger",
      path: "content/settings",
      schema: {
        siteName: fields.text({ label: "Nettstedsnavn", defaultValue: "Rensespesialisten" }),
        tagline: fields.text({ label: "Slagord", defaultValue: "Profesjonell rengjøring i Namdalen" }),
        phone: fields.text({ label: "Telefon", defaultValue: "400 00 000" }),
        email: fields.text({ label: "E-post", defaultValue: "post@rensespesialisten.no" }),
        address: fields.text({ label: "Adresse", defaultValue: "Namsos" }),
        orgNumber: fields.text({ label: "Organisasjonsnummer" }),
        openingHoursWeekdays: fields.text({
          label: "Åpningstider hverdager",
          defaultValue: "Mandag–fredag: 07:00–17:00",
        }),
        openingHoursWeekend: fields.text({
          label: "Åpningstider helg",
          defaultValue: "Lørdag: 08:00–14:00",
        }),
        facebookUrl: fields.url({ label: "Facebook URL" }),
      },
    }),

    hero: singleton({
      label: "Forsideinnhold (hero)",
      path: "content/hero",
      schema: {
        heading: fields.text({
          label: "Overskrift",
          defaultValue: "Profesjonell rengjøring — du slipper å tenke på det",
        }),
        subheading: fields.text({
          label: "Underoverskrift",
          multiline: true,
          defaultValue:
            "Vi leverer grundig og pålitelig rengjøring til private og bedrifter i Namdalen. Fast pris, ingen overraskelser.",
        }),
        ctaPrimaryText: fields.text({ label: "Knapp 1 tekst", defaultValue: "Få tilbud" }),
        ctaSecondaryText: fields.text({ label: "Knapp 2 tekst", defaultValue: "Se tjenester" }),
        badge: fields.text({ label: "Badge-tekst", defaultValue: "Lokal bedrift i Namdalen" }),
      },
    }),

    about: singleton({
      label: "Om oss — innhold",
      path: "content/about",
      schema: {
        heading: fields.text({ label: "Overskrift", defaultValue: "Om Rensespesialisten" }),
        intro: fields.text({
          label: "Ingress",
          multiline: true,
          defaultValue:
            "Vi er et lokalt rengjøringsselskap med base i Namdalen. Vår misjon er å levere topp kvalitet til hjemmet og arbeidsplassen din — slik at du kan bruke tid på det som betyr noe.",
        }),
        body: fields.document({
          label: "Brødtekst",
          formatting: true,
          dividers: true,
          links: true,
        }),
        values: fields.array(
          fields.object({
            title: fields.text({ label: "Tittel" }),
            description: fields.text({ label: "Beskrivelse", multiline: true }),
          }),
          {
            label: "Verdier",
            itemLabel: (props) => props.fields.title.value || "Verdi",
          }
        ),
      },
    }),

    contactPage: singleton({
      label: "Kontaktside — innhold",
      path: "content/contact-page",
      schema: {
        heading: fields.text({ label: "Overskrift", defaultValue: "Ta kontakt" }),
        subheading: fields.text({
          label: "Underoverskrift",
          defaultValue: "Vi svarer raskt og gir deg et konkret tilbud.",
        }),
        mapEmbed: fields.text({ label: "Google Maps innbygningskode (valgfri)", multiline: true }),
      },
    }),
  },

  collections: {
    services: collection({
      label: "Tjenester",
      path: "content/services/*",
      slugField: "title",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Tittel" } }),
        shortDescription: fields.text({
          label: "Kort beskrivelse",
          multiline: true,
        }),
        description: fields.document({
          label: "Detaljert beskrivelse",
          formatting: true,
          dividers: true,
          links: true,
        }),
        icon: fields.select({
          label: "Ikon",
          options: [
            { label: "Hjem", value: "home" },
            { label: "Kontor", value: "office" },
            { label: "Vindu", value: "window" },
            { label: "Sparkle", value: "sparkle" },
            { label: "Trapp", value: "stairs" },
            { label: "Kalender", value: "calendar" },
          ],
          defaultValue: "sparkle",
        }),
        featured: fields.checkbox({ label: "Vis på forsiden", defaultValue: true }),
        sortOrder: fields.number({ label: "Sorteringsrekkefølge", defaultValue: 1 }),
      },
    }),

    testimonials: collection({
      label: "Kundeomtaler",
      path: "content/testimonials/*",
      slugField: "name",
      format: { data: "json" },
      schema: {
        name: fields.slug({ name: { label: "Navn" } }),
        location: fields.text({ label: "Sted/bedrift" }),
        text: fields.text({ label: "Omtale", multiline: true }),
        rating: fields.number({ label: "Rangering (1–5)", defaultValue: 5 }),
        photo: fields.text({
          label: "Foto-sti (valgfri, f.eks. /omtale-rita.jpg)",
        }),
      },
    }),
  },
});
