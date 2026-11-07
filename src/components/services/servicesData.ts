export interface ServicePhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface ServiceItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  desc: string;
  icon: string;
  photos: ServicePhoto[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 0,
    slug: "dining-experience",
    title: "Dining Experience",
    category: "Gastronomy & Degustation",
    shortDesc:
      "Multi-course fine dining curation, live clay ovens, artisanal mocktail bars, and silver-service banqueting tailored for your event.",
    desc: "From celebratory multi-course degustation menus to live interactive kitchen stations, our executive culinary team crafts unforgettable gastronomic journeys using pure, premium ingredients.",
    icon: "restaurant",
    photos: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdwQnQjVgyXCqPSv227ZBLengcRbI3b0ogyqjgneVd1HXULmJ8XeF2zOynWhCDZUgpd2H7ZASuwL6Jm_NibevQtd933dM_dOJ1AYetd7OVpdpBnByltLpuF1ayDEXOCx4Xz9op-gXYVl3Br_YJyZY9wPdEXKZm5lLMaPy5pptDBfYWq7SCszvhiXhdCJpewoFu0ybz1osyik17iUHOtoM0-9x4xN6mT-3WHg52JdM",
        alt: "Fine dining restaurant banquet table setting with silver cutlery and crystal glassware",
        caption: "Bespoke banquet table settings with fine bone china, silver-tier service, and ambient dinner illumination.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVOh4OU61ipNKiEGlN6-GBBL-UEKCgNkdX1zAgufkWJT6d_v8H0wkMDrETUNZCaHldRgGfZgSWnPg3N0ym0yJNFdPYQH-lxYygsAQOONiN3rgbSm7GM4ShC_jqhDWTgOGv04ReuMGfQ8KIZ3ql44jJjp4VoHqSQ-Q8QRDMG9LTqwGbCXN2env-svSLZhslSn7ksVDVCHTPCX7TZYwpZsr4VP2EcwwT2POPpFndOoY",
        alt: "Bistro signature cocktail bar with illuminated brass bottle shelves",
        caption: "Artisan mocktail craft counters and signature hospitality beverage stations.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzQn8TOR9PYfkQer6_BwSuDeLDa4YxAv8tQNprvN__dhTDq7GCH_AAWsDrQxAAMbZ_kTy3YulXflwFW42HZ9wjQ80hZhdcaF_h3WEBO2VYln2BzNJi2pnzok6d7gfjYepCiQIRPtwbAMBfnH1upUWS_icJ5Bd6M8dGPzH7BIizNFXsgVz7iF8AYZm_W8-8yXDM2bkm6gIcMpO46Y0Qho7WOf0f0E7AAzeSIUL5yD4",
        alt: "Live chef theatre kitchen station preparing culinary specialties",
        caption: "Interactive live cooking theatres with dedicated chef stations for customized event menus.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKIrxbLZj4BmmRMhJW2pw8JB2UKMXfN27aM6Vt22pYYGcp3tl0jvrx6kgMfI-iFJYzIB1_RCj-shD_yemdHGn7duy_N0H9DSAaO_ZdbxnmpX6Hi8gj1MHewiX-_q6LYwT04K0NE77Xhg3j3P84l7Nxz5vtDqGCtuedDMRywpP66acFFGZo_dZbtALEllNQagYI5dA10Imn26xB20fmgp1Tx24mn-xM9OERJgyp0LI",
        alt: "Private candlelit dining salon for intimate gatherings",
        caption: "Exclusive private dining salons accommodating intimate celebratory banquets and family gatherings.",
      },
    ],
  },
  {
    id: 1,
    slug: "jaimala-themes",
    title: "Jaimala Themes & Scenography",
    category: "Matrimonial Architecture",
    shortDesc:
      "Grand architectural stages, revolving matrimonial platforms, suspended floral chandeliers, and timed atmospheric effects.",
    desc: "Create an indelible first impression with our custom-engineered Jaimala stage productions featuring imported fresh florals, dynamic lighting sequences, and elegant couple seating.",
    icon: "celebration",
    photos: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr6tdfgBdZlfZFLUzdaTHyPEciPmmCeki40UxsfQ0sqxmYUhSciM7dwnlsCnEYaAyGg_c5aoVSrSoCIdFaOYkeGPcK9YcjbPQ9djgp7k8nwinr7_uNol-0AdWb5rMG_mKOC1lpb6BSbMmGlDFcntEGqyJsdR4LttuSnTDe6_R2N3ttXqHr8QyeLxySR0IQWyiuHx5Od7GB9dUAWIbDEpLMJ8Vewr3l7HIZiPHpIvs",
        alt: "Opulent wedding Jaimala stage setup with fresh white and blush flower arches",
        caption: "Monumental floral stage arches with layered ambient sconce lighting and grand couple banquettes.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGqlv5YLwc1dbdd4AeCiOrLvZpeoXtWDtY2f22osupiEFkfah-nAmkg8WarDJFLp8z5-Xw3jt59zaL8E8ml77DzIfccOeqEyFMuTcE2UZ-bJKFnXPGjOGbVrO77L27HFsJcvai8W_Vhja6wrsWTMkkjKfSTKTVkTXjKJsOcsnjp9OlJMmJKPRCbpE7bV1DjItL10ERsmPEtw8yyX8cmrKJywIxzfuQNrjPzwasFPU",
        alt: "Lavish matrimonial scenography with cascading orchids and candlelit tiers",
        caption: "Cascading floral scenography with mirror-finish aisle walks and architectural pillar wash lighting.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwgWlpUfSwixgT9iLvL7CTDSXsnffT6AdZR0L-fUL5voTc3GOr2A4CUSUdeJu5XIWt30jMhNcRQzu2kQAyYmUAZZ7CSJsGEFAuS2ClahiSNgtLdoMnDmX9zw2FLPAQmIUcdq8EdWK-zFXVPX1oYbq52aayz_UP3qkzw4YliP4GgyCONdeYuG4TZC9hP65LSiAF_QLwxdaA9EBPgyP8gB37x3Vu4y1YgNp1deBxnWQ",
        alt: "Grand matrimonial setup inside pillarless ballroom",
        caption: "Pillarless ballroom integration allowing completely unobstructed sightlines for all wedding attendees.",
      },
    ],
  },
  {
    id: 2,
    slug: "wedding-decoration",
    title: "Wedding Decoration & Styling",
    category: "Bespoke Event Design",
    shortDesc:
      "Contemporary thematic ballroom styling, bespoke crystal table scapes, imported floral installations, and hand-pleated ceiling drapes.",
    desc: "Transform our expansive celebration venues with coordinated themes, artisanal floral runner centerpieces, ambient pin-spot lighting, and tailored color palettes.",
    icon: "auto_awesome",
    photos: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5OHDKVxZYR0H4HZQYWp6MRm4rxoWs4OsD0T25b3dDXTFy9t2_QXAUROMX2fC7OH8I5l2XopOzZu4zgu7cKUqN8oX8FK3FNKcZUWw3X6Odg8SV5Z-zPR3WE9Q0H5gtahSiVCk20bESRHMUhlbOPNR5jWgZ9tdC8BRlAiFjJQeu1gBSa6HY3Sip6HBNnGkBhci3mdRMg8M90dYh04NTbr2n-DBjmS_C5w47Ao-8dw8",
        alt: "Grand wedding ballroom decoration with crystal chandeliers and draped ceiling",
        caption: "Artistic ceiling drapery, imported crystal chandeliers, and gold Chiavari dining arrangements.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4U5000eO906eUZ_MXo3jpeQB1pCfg22CGttmJbNca9Spd8__Lebk4qRCGos2ex0e55h-r_sSVLsJq2vPEEq5IU2DeUKkYCnageTUki-PYy-krta8cpNaybo9rSUnvub2fWYKKubO2I2DEUrRoMXBpNJDXcdtzlchnTyKiw6Y0JmK-d-Ksac3kcu8oZiOcWwtPr5TdA_OS6si6gvcpCr1Cy3KYVjlvLEkgWk-OCx0",
        alt: "Astor Ballroom decorated with ambient warm uplighting and tiered dining",
        caption: "Warm architectural downlighting and custom floral table scapes for landmark wedding receptions.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZSwNWFl3eus121E82bgNdZY3lQEJvjjBSYROhTaHAyvcFamJjEplk4y2nahcSmlBcXq-8xURgP3ZQ8whQCR5Nukn9nWcJ4lQ6nJqtWVSXUgRuznpo_yTnSSKRtgGNbwdLbu-07kKXXfNwPWarRcc-vzu6ql5VvjbNKM6yI5S_7p4FH49G4NL7_KUhZ1oDhVooSyPCfqgulMwXwolrOCN4GAib6NIsVqJIvXyzRqI",
        alt: "Pre-function foyer welcoming guests with contemporary sculptural decor",
        caption: "Double-height pre-function reception area styled for guest greeting, welcome beverages, and photography.",
      },
    ],
  },
  {
    id: 3,
    slug: "live-band-service",
    title: "Live Band Service",
    category: "Acoustic & Musical Ensemble",
    shortDesc:
      "Classical symphony ensembles, contemporary fusion bands, acoustic stage sound checks, and tailor-made celebratory setlists.",
    desc: "Elevate your celebrations with handpicked live acoustic artists, instrumental quartets, and celebratory musical ensembles tailored to your event timeline.",
    icon: "music_note",
    photos: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsUJbvGAd3VMqQdX_LjPNLnN1a6hq-SyJevyZ2LsTHXSUehXcvtGMdI4oO0POtU2iHhzBi7ApzD1QNOG9uA8Dp6MD0XzerlMXYPbKquMYu5KrHRX97kYjFBgXn__R5YHY1ncQpiebHHITaPBsypvlnHIeJYJ2jtiJxHAQe7Oy9HPmxs2G-ap45j1lcUiN7ORWscVFRpyvW6MxEG2mYuKeI4XM5PEkMiqrfWQ2WKbM",
        alt: "Live wedding musical band performing on a luxury hotel stage",
        caption: "Acoustic live music ensembles with professional stage acoustics and warm spotlighting.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnik7eKxySHHIzcbIx_XMc2IORujZsZkr96imocIZCEsXoVBXXKp4AYyDHtPZmzWz5CEOlbChi0RYWZp3HrEguG8jzEkqMh8xfGkLvyiKSh2JeLvkVE3HY8_RdEHIbcyxllQO4bRkY-cZPN4YOY96nmSKauBGePkkLy0NlIEi9MmEjEzePN2FqymL5RCBlcaIErJQJwvexa4GIolRIorULi-NoTVTwY_g7APNx2O0",
        alt: "Musical concert arena with dynamic stage illumination",
        caption: "Full concert sound engineering and synchronized stage beam lighting for high-energy celebratory evenings.",
      },
    ],
  },
  {
    id: 4,
    slug: "dj-sound",
    title: "DJ & Sound Entertainment",
    category: "Audio-Visual Revelry",
    shortDesc:
      "Celebrity and resident DJs, concert-grade line array audio, 4K curved LED walls, and synchronized intelligent beam lighting.",
    desc: "Complete club-grade and celebratory acoustic systems with dual digital mixers, bass subwoofers, moving head lighting fixtures, and dedicated dance floor installations.",
    icon: "graphic_eq",
    photos: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2fUBkxBSlD-TSdFTgyF7O89PNROmlU6OjNT7wqUA8pXpLrBm4JcsYifXZ_fAVK8soPc8hjXKAYcc2kD2Q4mbRkobtiZKq732kYBpc5Jv-kOZsPPUX6_MiRNFqFUNekXxmzrI17o5m7ijZ7-AmT-Y29KSd1Sb7A_6arifeZ5oqmJBZy1yHBhC4tzb-veoKXwPlK-5fungKF9C_IIPkny4IbpzBwlnAIAuNhfBG7Dw",
        alt: "Hotel event DJ booth with professional audio mixers and architectural lighting",
        caption: "Concert line-array audio, professional DJ mixing consoles, and intelligent moving beam heads.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnik7eKxySHHIzcbIx_XMc2IORujZsZkr96imocIZCEsXoVBXXKp4AYyDHtPZmzWz5CEOlbChi0RYWZp3HrEguG8jzEkqMh8xfGkLvyiKSh2JeLvkVE3HY8_RdEHIbcyxllQO4bRkY-cZPN4YOY96nmSKauBGePkkLy0NlIEi9MmEjEzePN2FqymL5RCBlcaIErJQJwvexa4GIolRIorULi-NoTVTwY_g7APNx2O0",
        alt: "Celebration dance floor with synchronized lighting",
        caption: "High-octane Sangeet and reception dance floor setup with soundproofed perimeter acoustics.",
      },
    ],
  },
  {
    id: 5,
    slug: "valet-parking",
    title: "Valet Parking & Portico",
    category: "Arrival Hospitality",
    shortDesc:
      "Weather-protected double-height porte-cochère, 150+ vehicle capacity, computerized digital tagging, and 24/7 monitored CCTV.",
    desc: "Ensure seamless arrival for every dignitary and attendee. Our uniformed valet personnel manage guest car drop-off, retrieval, and dedicated security coordination under an architectural canopy.",
    icon: "local_parking",
    photos: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnr5exQo273gDunQ8-bDvKDxfjXCQfVguDVP2pS3sYq2h3sX394W2BFi4kgkAGVcTXJakJhQ4uWRspu3KQ7lCJJ63NBWKyRn07r82bP-kkgv9SOzKva80gElEiBuk6VGjyqEQM3kXwjut5PWkNFRx7c_niSamqClUW1DB7Q-slogcxRlrkyI64n36SAWDzw67IUkjLI5SLFdfkqUqzt33xw1znvzGHU2KYKFXDc_c",
        alt: "Grand arrival portico with uniformed valet attendant opening car door",
        caption: "Uniformed valet attendants providing warm personalized arrival assistance for every guest.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbjhhsZDTUMRjOT-kJ1c_VlOg02Ie8s7D-i9kzEcM3OLBGoi66rvzcixfdxQ5_453oobgOnSQGmolLp0pwi_VQFNXluotSv9APOiE33JqjS9npqQIQckeV6sf45ToBcsFUc-5ml6-nTcoA-Aip1zMasV4TETydR4jRHwSzsc9KYd1vAyKflHzhFN_ki-CLOUqbbaGu06t39t8wUduJhTOzNv9QXfg3aRP9OqZzyo8",
        alt: "Illuminated porte-cochere canopy with reflections",
        caption: "Grand illuminated porte-cochère with sheltered weather-protected arrival and dedicated lanes.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARgmPCu7bJNBBBzizWDtKYunYtarNTR9tupzg0YzLwwq17tkacoW7MXIhbyjKN_mInApp_xUZjugjR1FQNzLjuEKxexFs7_IsK-JsuKQVtdMTp9oI4FO1AhQFCp4N5WU5a1zeya9xI2jhhJxtm4k7k6jyvrFHB4oldT-HY8HxS5dtSGAUgY0d2pghFja_IJ5FpZMEZFvH83HeDsi-kaUcNgE-cu8ailjS_rQtaqgs",
        alt: "Portico canopy welcoming guests at dusk",
        caption: "24/7 dedicated porter desk and secure monitored parking for up to 150+ vehicles.",
      },
    ],
  },
  {
    id: 6,
    slug: "event-services",
    title: "Event & Celebration Services",
    category: "Milestone Choreography",
    shortDesc:
      "Turnkey planning for Roka, Sangeet, anniversaries, corporate summits, guest RSVP concierge, and dedicated host butler support.",
    desc: "From initial scheduling to day-of stage management, our Senior Event Directors handle all logistics, supplier coordination, and timeline enforcement for complete peace of mind.",
    icon: "manage_accounts",
    photos: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuynm-bZjo5I9u50V7wRSzM857-VgjPzn0eQzsCjeuJZ9ZpSmQF39ZL21QIK6vDk9JzZcHk36TPZrVoULaNWRtvEFwbuPX22u6V-2QMTYNf2aNd7YGoSQl0v4zwrY9Mf9mVmEREu1m8lwvPDPavCbRAHOrXsJn1Nl74dNmSh2A9fLxunsb3RIPo3-xTDkHusp6UtrcMDa7pLqjrm9rDfmwzXPDwI7JE7yuepEVeDw",
        alt: "Event coordinator and concierge team discussing celebration itinerary with hosts",
        caption: "Dedicated Event Directors reviewing every milestone detail with family hosts.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGrfztHPXxQTxwWIPfyXBtxJMuyx1GCGtJWoK4kwX2gasJpXnMhOo_zLNh2T9nLN8aGEUmk7YPznSCsdtQqyIJlOcp9nFtwx6X23GbygereDod81knI7wi79aALo-OfvTTxyc7k7_rKcAmBfMkLl_V8aPAe9S5dZxrr1QaKwKkM_ogIXWusF__ZGdS3mcMNqKVXDuS4Eq9C1Tmw8rC4ZZhm0Cr-MB0zTEKHrg5TKU",
        alt: "The Conclave Boardroom for planning and coordinator meetings",
        caption: "Private planning boardrooms equipped for pre-event reviews, AV rehearsals, and vendor alignment.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD00T6_ffQrh_ekMVyfn2ypt84j0UcZ3VbmYsj50RwCE2rtVqUNl7foEd1PPwTuUGl5IOrggC-QI0TSt5Qtl0Cox7lPFpYOuULRUKbHuLNzDCcImYnEqFQuO0wN_J9_CqDfn_JpwD492CrpCXOnAXkyFXjYaN3bOZHbeAabsxYY5OK4_YGSAF-jIS1cOF5BJXFm9Ibi8cL8kpxX9xOUeRN-p9UiJOARpSnC48MN7Qg",
        alt: "Grand staircase connecting lobby to ballroom mezzanine",
        caption: "Photogenic grand staircase designed for dramatic couple entrances and celebratory processions.",
      },
    ],
  },
  {
    id: 7,
    slug: "banquet-arrangements",
    title: "Banquet & Arrangements",
    category: "Comprehensive Hospitality",
    shortDesc:
      "Pillarless Grand Astor & Crystal ballrooms across 10,500 sq. ft., dual private bridal suites, and dedicated multi-bay buffets.",
    desc: "Complete venue configuration with high acoustic ceilings, private VIP bride and groom preparation sanctuaries, seamless food stations, and round-the-clock service staff.",
    icon: "apartment",
    photos: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwgWlpUfSwixgT9iLvL7CTDSXsnffT6AdZR0L-fUL5voTc3GOr2A4CUSUdeJu5XIWt30jMhNcRQzu2kQAyYmUAZZ7CSJsGEFAuS2ClahiSNgtLdoMnDmX9zw2FLPAQmIUcdq8EdWK-zFXVPX1oYbq52aayz_UP3qkzw4YliP4GgyCONdeYuG4TZC9hP65LSiAF_QLwxdaA9EBPgyP8gB37x3Vu4y1YgNp1deBxnWQ",
        alt: "Pillarless banquet ballroom setup for an opulent wedding reception",
        caption: "Column-free grand ballroom layout allowing flexible seating configurations up to 400+ guests.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJNHEMP84_f3REXhI5xm2WLUbrN5FTzS-k_34WeF63Pe95L5wk6Wvxjy145_JbRxwNfXMHGVmzv_SMskrMRUm2hrq6vczMtJOw824UFzyn7P73h2GhohSHluqf-CUZd4Dq_tZXNtXuXBVtgrgjmm_cZ6Ds7gM-uaoq0j30WOYePHREoj5zffA7781_VvTKC747hqyYbamU-0b8ZoNuTxvqXNhKIb2WfZrjYYx0ans",
        alt: "The Crystal Hall with daylight fenestration",
        caption: "Naturally daylit Crystal Hall suited for morning matrimonial ceremonies and corporate assemblies.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4U5000eO906eUZ_MXo3jpeQB1pCfg22CGttmJbNca9Spd8__Lebk4qRCGos2ex0e55h-r_sSVLsJq2vPEEq5IU2DeUKkYCnageTUki-PYy-krta8cpNaybo9rSUnvub2fWYKKubO2I2DEUrRoMXBpNJDXcdtzlchnTyKiw6Y0JmK-d-Ksac3kcu8oZiOcWwtPr5TdA_OS6si6gvcpCr1Cy3KYVjlvLEkgWk-OCx0",
        alt: "The Grand Astor Ballroom at Twilight with crystal chandeliers",
        caption: "Artisanal crystal chandeliers and climate-controlled ballroom space for up to 400+ banquet seating.",
      },
    ],
  },
];

