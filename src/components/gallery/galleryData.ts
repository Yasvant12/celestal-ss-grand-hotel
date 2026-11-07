export interface GalleryPlate {
  id: number;
  plateNumber: string;
  badge: string;
  title: string;
  category: string;
  categories: string[];
  description: string;
  alt: string;
  src: string;
  colSpan: string;
  aspect: string;
  minHeight?: string;
}

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Photos", count: 48 },
  { id: "exterior", label: "Hotel & Exterior", count: 8 },
  { id: "rooms", label: "Rooms & Suites", count: 10 },
  { id: "dining", label: "Restaurant & Dining", count: 8 },
  { id: "banquet", label: "Banquet & Celebrations", count: 12 },
  { id: "weddings", label: "Weddings & Events", count: 6 },
  { id: "facilities", label: "Hotel Facilities", count: 4 },
];

export const GALLERY_PLATES: GalleryPlate[] = [
  {
    id: 0,
    plateNumber: "Plate 01",
    badge: "Signature Venue",
    title: "The Grand Astor Ballroom at Twilight",
    category: "Banquet & Celebrations",
    categories: ["banquet", "weddings"],
    description:
      "Column-free acoustic expanse featuring artisanal crystal chandeliers, bespoke warm uplighting, and banquet hospitality designed for grand galas up to 900 attendees.",
    alt: "Expansive architectural photography of the Astor Ballroom at twilight with crystal chandeliers illuminating tiered round banquet dining tables adorned with cream linen and fragrant floral centerpieces.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4U5000eO906eUZ_MXo3jpeQB1pCfg22CGttmJbNca9Spd8__Lebk4qRCGos2ex0e55h-r_sSVLsJq2vPEEq5IU2DeUKkYCnageTUki-PYy-krta8cpNaybo9rSUnvub2fWYKKubO2I2DEUrRoMXBpNJDXcdtzlchnTyKiw6Y0JmK-d-Ksac3kcu8oZiOcWwtPr5TdA_OS6si6gvcpCr1Cy3KYVjlvLEkgWk-OCx0",
    colSpan: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    id: 1,
    plateNumber: "Plate 02",
    badge: "Suite Sanctuaries",
    title: "Executive Club Master Suite",
    category: "Rooms & Suites",
    categories: ["rooms"],
    description:
      "Deep tranquil aesthetic highlighted by custom acoustic millwork, plush king bedding, and ambient layered illumination.",
    alt: "Serene luxury bedroom interior of an executive club suite featuring a king-size upholstered bed with Egyptian cotton duvets, backlit textured walnut wall panels, modern brass reading lamps, and warm champagne upholstery.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnr61N6Q99rrG2oYz4XUPIdo8ZD0OC12SgCAcQpLNdLUfY5xe4uJLsn3pIlJFNkjhiLfqnwcDhlmh_FRK_lLVd9yFnImOOmM-H7FDG7yg-hrjD10fAt1SYHdWBukd6LBldpdVDS1GpTBHB708BVXsZygb-kj98t4mRkQvuQy-DfzPbMzphF4uRh3ffl39MBy-tAIhpc6LpM4xeMZihJIMof7z-HtoYuM0DDmvs6BE",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    id: 2,
    plateNumber: "Plate 03",
    badge: "Banqueting",
    title: "The Crystal Hall with Daylight",
    category: "Banquet & Celebrations",
    categories: ["banquet"],
    description:
      "Natural luminosity and fluid proportions suited for private matrimonial banquets and high-profile corporate convenings.",
    alt: "Daylit modern banquet hall interior with floor-to-ceiling glass fenestration, impeccably aligned champagne banquet seating, ivory floral runner arrangements, and sleek modern architecture.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJNHEMP84_f3REXhI5xm2WLUbrN5FTzS-k_34WeF63Pe95L5wk6Wvxjy145_JbRxwNfXMHGVmzv_SMskrMRUm2hrq6vczMtJOw824UFzyn7P73h2GhohSHluqf-CUZd4Dq_tZXNtXuXBVtgrgjmm_cZ6Ds7gM-uaoq0j30WOYePHREoj5zffA7781_VvTKC747hqyYbamU-0b8ZoNuTxvqXNhKIb2WfZrjYYx0ans",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    plateNumber: "Plate 04",
    badge: "Mixology & Lounge",
    title: "Bistro Signature Cocktail Bar",
    category: "Restaurant & Dining",
    categories: ["dining"],
    description:
      "Artisan craft mixology and rare single malts served across a polished nero marquina counter.",
    alt: "Artisanal cocktail being garnished by a mixologist at a sleek dark obsidian marble bar counter with illuminated brass bottle shelves and glowing pendant lights in a high-end luxury hotel lounge.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVOh4OU61ipNKiEGlN6-GBBL-UEKCgNkdX1zAgufkWJT6d_v8H0wkMDrETUNZCaHldRgGfZgSWnPg3N0ym0yJNFdPYQH-lxYygsAQOONiN3rgbSm7GM4ShC_jqhDWTgOGv04ReuMGfQ8KIZ3ql44jJjp4VoHqSQ-Q8QRDMG9LTqwGbCXN2env-svSLZhslSn7ksVDVCHTPCX7TZYwpZsr4VP2EcwwT2POPpFndOoY",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    plateNumber: "Plate 05",
    badge: "Architecture",
    title: "Illuminated Porte-Cochere",
    category: "Hotel & Exterior",
    categories: ["exterior"],
    description:
      "Grand nighttime arrival with warm architectural wash lights, reflection pond, and valet pavilion.",
    alt: "Dramatic night architectural exterior of Celestal SS Grand Hotel showing the illuminated geometric glass and limestone facade, cantilevered porte-cochere canopy, luxury cars, and reflective water fountains.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbjhhsZDTUMRjOT-kJ1c_VlOg02Ie8s7D-i9kzEcM3OLBGoi66rvzcixfdxQ5_453oobgOnSQGmolLp0pwi_VQFNXluotSv9APOiE33JqjS9npqQIQckeV6sf45ToBcsFUc-5ml6-nTcoA-Aip1zMasV4TETydR4jRHwSzsc9KYd1vAyKflHzhFN_ki-CLOUqbbaGu06t39t8wUduJhTOzNv9QXfg3aRP9OqZzyo8",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    plateNumber: "Plate 06",
    badge: "Private Terraces",
    title: "Garden Courtyard Deluxe Terrace",
    category: "Rooms & Suites",
    categories: ["rooms", "exterior"],
    description:
      "Private open-air sanctuary overlooking landscaped verdant courtyards for peaceful morning teas.",
    alt: "Sun-drenched luxury private hotel suite terrace with modern woven sun loungers, low marble cocktail table, blooming potted topiaries overlooking an impeccably manicured interior courtyard garden.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_P-xFIgtlr6qUJrQroL5qjJTkeHrwIjPYD24SmFXIq3BPiDx7drPqVqd9JqYoJrQCcvWFlWE0nl7yiNBD6ThB9fv4bJyuYVOk8BioaMDZLQ_yC9P31e1SJCUoEhSXVd37HIqBvx3O7jwz6HAFSyD94Varuov79XlsB6_ClNMbUyCDWpIB0HIM4jva20bOtZan5jTXlncd0fHrYzQ1URdXRQIhsGBOMh6zgGRfHnU",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 6,
    plateNumber: "Plate 07",
    badge: "Culinary Artistry",
    title: "Epicurean Plating & Degustation",
    category: "Restaurant & Dining",
    categories: ["dining"],
    description:
      "Contemporary multi-course degustation created by executive chefs featuring regional seasonal ingredients.",
    alt: "Close up gourmet plating presentation of contemporary fine dining cuisine served on artisanal handcrafted earthenware with edible gold leaf, micro-greens, reduced jus, accompanied by polished gold cutlery and crystal wine glasses.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9S-Z8ZmFiVIxon0p8fGHzCis4UBFkHOWtqUMoGlMxG94q4CPM-MIr8mEVF4ErXiZslN3e3NLG8hKGr2R8BrI3Otcfk00YFNpkG5FX_auXDhAy5jd223oaQgdjc7XDHDkHU6kw20t4zKW-DMhkwBCLxu1km8byGg7xLWFGejZdGdSJQRqsIkb3AjZfmHq6GuqBPivWi-_DbIc4rhICcMCI2rkvDaSxGfK36cDeSk",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 7,
    plateNumber: "Plate 08",
    badge: "Landmark Celebrations",
    title: "Lavish Grand Matrimonial Scenography",
    category: "Weddings & Events",
    categories: ["weddings", "banquet"],
    description:
      "Immersive floral artistry, custom illuminated backdrops, and majestic seating staged for world-class wedding receptions.",
    alt: "Breathtaking wide wedding stage scenography inside a high-ceiling luxury ballroom featuring cascading white and pale gold orchids, warm architectural pillar wash lights, glowing candlelit tiers, and mirror-finished aisle walk.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGqlv5YLwc1dbdd4AeCiOrLvZpeoXtWDtY2f22osupiEFkfah-nAmkg8WarDJFLp8z5-Xw3jt59zaL8E8ml77DzIfccOeqEyFMuTcE2UZ-bJKFnXPGjOGbVrO77L27HFsJcvai8W_Vhja6wrsWTMkkjKfSTKTVkTXjKJsOcsnjp9OlJMmJKPRCbpE7bV1DjItL10ERsmPEtw8yyX8cmrKJywIxzfuQNrjPzwasFPU",
    colSpan: "lg:col-span-12",
    aspect: "aspect-[21/9]",
    minHeight: "min-h-[340px]",
  },
  {
    id: 8,
    plateNumber: "Plate 09",
    badge: "Architectural Foyer",
    title: "The Astor Pre-Function Foyer",
    category: "Banquet & Celebrations",
    categories: ["exterior", "banquet"],
    description:
      "Double-height ceilings and gallery artwork welcoming guests before landmark assemblies.",
    alt: "Spacious luxury pre-function foyer with high double-height ceilings, mirror-finished bottochino marble floors, custom contemporary brass sculpture installations, and recessed ambient lighting.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZSwNWFl3eus121E82bgNdZY3lQEJvjjBSYROhTaHAyvcFamJjEplk4y2nahcSmlBcXq-8xURgP3ZQ8whQCR5Nukn9nWcJ4lQ6nJqtWVSXUgRuznpo_yTnSSKRtgGNbwdLbu-07kKXXfNwPWarRcc-vzu6ql5VvjbNKM6yI5S_7p4FH49G4NL7_KUhZ1oDhVooSyPCfqgulMwXwolrOCN4GAib6NIsVqJIvXyzRqI",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 9,
    plateNumber: "Plate 10",
    badge: "Hydrotherapy",
    title: "En-Suite Marble Soaking Sanctuary",
    category: "Rooms & Suites",
    categories: ["rooms", "facilities"],
    description:
      "Deep oval tub, monsoon shower systems, and signature aromatic luxury amenities.",
    alt: "Monolithic Italian white statuario marble bathroom with freestanding soaking tub, gold brushed hardware, warm under-vanity illumination, plush rolled towels, and frameless glass rain shower.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdRlwX6_HCS1z-tAoPKcDSQ3o-M7YEK8PgxXc6oplPuBeZbxwmKaOBcQKtUF_GKppx941RzYlHN9xAx77ngiZuuZB2sqcBiqN46S4EFya1fBMwV9As9cIkIjyXIPqi7e6cIc9byeJ868rrFoUmUfU2qxgQyHc4S7YOBpVLCem_e0qsxo_QEleVBXtXZpJ3Kxd4CdipmoVLkzi2CV_xxBSPHxMh--C6vVur8STD1Rw",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 10,
    plateNumber: "Plate 11",
    badge: "Live Gastronomy",
    title: "Live Chef Theatres & Stations",
    category: "Restaurant & Dining",
    categories: ["dining"],
    description:
      "Master culinary artisans presenting handcrafted clay oven specialties with live interactive service.",
    alt: "Interactive live kitchen show station with executive chef in spotless white uniform preparing skewered artisanal kebabs over warm glowing clay tandoor ovens with clean brass copper exhaust hoods.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzQn8TOR9PYfkQer6_BwSuDeLDa4YxAv8tQNprvN__dhTDq7GCH_AAWsDrQxAAMbZ_kTy3YulXflwFW42HZ9wjQ80hZhdcaF_h3WEBO2VYln2BzNJi2pnzok6d7gfjYepCiQIRPtwbAMBfnH1upUWS_icJ5Bd6M8dGPzH7BIizNFXsgVz7iF8AYZm_W8-8yXDM2bkm6gIcMpO46Y0Qho7WOf0f0E7AAzeSIUL5yD4",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 11,
    plateNumber: "Plate 12",
    badge: "Executive Enclaves",
    title: "The Conclave Boardroom",
    category: "Hotel Facilities",
    categories: ["facilities"],
    description:
      "Private state-of-the-art meeting space with 4K video infrastructure and high-privacy acoustic design.",
    alt: "Executive boardroom suite with a long polished solid walnut conference table, ergonomic leather executive chairs, integrated video conferencing technology, and acoustic fluted wood wall panelling.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGrfztHPXxQTxwWIPfyXBtxJMuyx1GCGtJWoK4kwX2gasJpXnMhOo_zLNh2T9nLN8aGEUmk7YPznSCsdtQqyIJlOcp9nFtwx6X23GbygereDod81knI7wi79aALo-OfvTTxyc7k7_rKcAmBfMkLl_V8aPAe9S5dZxrr1QaKwKkM_ogIXWusF__ZGdS3mcMNqKVXDuS4Eq9C1Tmw8rC4ZZhm0Cr-MB0zTEKHrg5TKU",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 12,
    plateNumber: "Plate 13",
    badge: "Private Salons",
    title: "Private Candlelit Dining Salon",
    category: "Restaurant & Dining",
    categories: ["dining"],
    description:
      "Exclusive dinner engagements with dedicated butler service and customized champagne pairings.",
    alt: "Romantic private dining salon setup for an intimate party of six, with warm taper candles, fine crystal stemware, silver champagne ice bucket, velvet armchairs, and private sommelier station.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKIrxbLZj4BmmRMhJW2pw8JB2UKMXfN27aM6Vt22pYYGcp3tl0jvrx6kgMfI-iFJYzIB1_RCj-shD_yemdHGn7duy_N0H9DSAaO_ZdbxnmpX6Hi8gj1MHewiX-_q6LYwT04K0NE77Xhg3j3P84l7Nxz5vtDqGCtuedDMRywpP66acFFGZo_dZbtALEllNQagYI5dA10Imn26xB20fmgp1Tx24mn-xM9OERJgyp0LI",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 13,
    plateNumber: "Plate 14",
    badge: "Architectural Monument",
    title: "The Bronze Grand Staircase",
    category: "Hotel & Exterior",
    categories: ["exterior"],
    description:
      "Curving bronze balustrades connecting the main lobby level to the grand ballroom mezzanine.",
    alt: "Architectural spiral grand staircase with curving hand-cast bronze balustrades and ivory marble steps illuminated from underneath by subtle linear LED light strips in a soaring atrium.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD00T6_ffQrh_ekMVyfn2ypt84j0UcZ3VbmYsj50RwCE2rtVqUNl7foEd1PPwTuUGl5IOrggC-QI0TSt5Qtl0Cox7lPFpYOuULRUKbHuLNzDCcImYnEqFQuO0wN_J9_CqDfn_JpwD492CrpCXOnAXkyFXjYaN3bOZHbeAabsxYY5OK4_YGSAF-jIS1cOF5BJXFm9Ibi8cL8kpxX9xOUeRN-p9UiJOARpSnC48MN7Qg",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 14,
    plateNumber: "Plate 15",
    badge: "Musical Celebrations",
    title: "Sangeet Musical Concert Arena",
    category: "Weddings & Events",
    categories: ["weddings"],
    description:
      "Synchronized kinetic lighting rigs and acoustic mastering for joyous high-energy celebratory evenings.",
    alt: "Atmospheric sangeet celebration night with dynamic gold and warm amber stage lighting, professional concert-grade acoustics, VIP lounge banquettes, and celebration dance floor in a grand ballroom.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnik7eKxySHHIzcbIx_XMc2IORujZsZkr96imocIZCEsXoVBXXKp4AYyDHtPZmzWz5CEOlbChi0RYWZp3HrEguG8jzEkqMh8xfGkLvyiKSh2JeLvkVE3HY8_RdEHIbcyxllQO4bRkY-cZPN4YOY96nmSKauBGePkkLy0NlIEi9MmEjEzePN2FqymL5RCBlcaIErJQJwvexa4GIolRIorULi-NoTVTwY_g7APNx2O0",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 15,
    plateNumber: "Plate 16",
    badge: "Arrival Hospitality",
    title: "Valet Portico & Concierge Arrival",
    category: "Hotel Facilities",
    categories: ["facilities", "exterior"],
    description:
      "Uninterrupted 24/7 dedicated valet and porter reception under architectural weather-protected canopies.",
    alt: "Chauffeured luxury cars arriving under an illuminated brass and glass porte-cochere canopy at dusk, with uniformed doormen welcoming arriving guests into a warm golden foyer.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARgmPCu7bJNBBBzizWDtKYunYtarNTR9tupzg0YzLwwq17tkacoW7MXIhbyjKN_mInApp_xUZjugjR1FQNzLjuEKxexFs7_IsK-JsuKQVtdMTp9oI4FO1AhQFCp4N5WU5a1zeya9xI2jhhJxtm4k7k6jyvrFHB4oldT-HY8HxS5dtSGAUgY0d2pghFja_IJ5FpZMEZFvH83HeDsi-kaUcNgE-cu8ailjS_rQtaqgs",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
];

