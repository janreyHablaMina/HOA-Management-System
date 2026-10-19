import { HoaTenantConfig } from "@/types/hoa";

export const HOA_TENANTS: HoaTenantConfig[] = [
  {
    id: "veridian-grove",
    slug: "veridian-grove",
    name: "The Estates at Veridian Grove",
    shortName: "Veridian Grove HOA",
    tagline: "Where Architectural Heritage Meets Living Nature",
    establishedYear: 2012,
    locationCityState: "Westlake Hills, TX",
    fullAddress: "1400 Veridian Parkway, Suite 100, Westlake Hills, TX 78746",
    gpsCoordinates: "30.2974° N, 97.8276° W",
    gatehousePhone: "(512) 555-0191",
    officePhone: "(512) 555-0140",
    publicEmail: "concierge@veridiangrovehoa.org",
    arcEmail: "architecture@veridiangrovehoa.org",
    officeHours: "Mon – Fri: 8:30 AM – 5:30 PM | Sat: 9:00 AM – 1:00 PM",
    gateStatusText: "All 3 Entry Gates Operational · 24/7 Officer On Duty",
    nextBoardMeeting: "Thursday, Nov 19, 2026 · 6:30 PM at The Grand Conservatory",
    theme: {
      id: "botanical-heritage",
      name: "Botanical Heritage & Warm Alabaster",
      bgPrimary: "#FAF8F5",
      bgSecondary: "#F2EFE9",
      bgDark: "#162A20",
      textPrimary: "#18221D",
      textSecondary: "#525E57",
      accentPrimary: "#1B3B2B",
      accentSecondary: "#B87333",
      borderSubtle: "#E4DFD5",
    },
    hero: {
      eyebrow: "EST. 2012 · MASTER-PLANNED GATED SANCTUARY",
      headline: "Timeless Residential Living Under a Century-Old Live Oak Canopy.",
      description:
        "Spanning 420 acres of rolling limestone hills and protected botanical greenbelts, The Estates at Veridian Grove blends custom architectural craftsmanship with resort-caliber community amenities and thoughtful homeowner stewardship.",
      scenes: [
        {
          id: "scene-avenue",
          label: "Grand Parkway & Estates",
          title: "Timeless Residential Living Under a Century-Old Live Oak Canopy.",
          subtitle:
            "Spanning 420 acres of rolling limestone hills and protected botanical greenbelts, The Estates at Veridian Grove blends custom architectural craftsmanship with resort-caliber amenities.",
          imageUrl:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
          caption: "The Preserve Enclave — Custom Limestone & Cedar Residence on Veridian Ridge",
          timeOfDay: "Golden Hour · 6:15 PM",
        },
        {
          id: "scene-pavilion",
          label: "Conservatory & Aquatics",
          title: "Private Lakeside Conservatory & Heated Resort Aquatics.",
          subtitle:
            "Geothermally heated lap lanes, shaded limestone cabanas, demonstration catering salons, and sunset verandas overlooking Sycamore Creek.",
          imageUrl:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
          caption: "South Terrace at The Veridian Clubhouse & Resident Aquatics Sanctuary",
          timeOfDay: "Late Afternoon · 4:45 PM",
        },
        {
          id: "scene-trails",
          label: "Greenbelt & Nature Trails",
          title: "14 Miles of Spring-Fed Creek & Protected Botanical Trails.",
          subtitle:
            "Interconnected crushed-granite pathways meandering beneath 200-year-old live oaks, limestone waterfalls, and peaceful neighborhood pocket parks.",
          imageUrl:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85",
          caption: "Sycamore Creek Overlook & Resident Botanical Meadow",
          timeOfDay: "Morning Mist · 8:20 AM",
        },
      ],
    },
    about: {
      eyebrow: "CHAPTER I · ABOUT THE SUBDIVISION",
      headline: "Designed for Generational Stewardship, Built Around Community Connection.",
      leadParagraph:
        "Founded in 2012 in partnership with conservation land planners and regional master architects, The Estates at Veridian Grove was envisioned as a low-density sanctuary where more than 35% of the land remains permanently dedicated to native live oak groves, limestone creeks, and shared civic spaces.",
      secondaryParagraph:
        "Our Homeowners Association operates as a resident-led, professionally managed non-profit corporation. Through proactive reserve planning, rigorous architectural design standards, and a vibrant calendar of neighborhood traditions, we protect both property values and the everyday quality of life of our 485 families.",
      mission:
        "To preserve the architectural distinction, natural ecology, and fiscal health of Veridian Grove while fostering a warm, safe, and inclusive neighborhood culture for every resident.",
      vision:
        "To stand as the premier model of sustainable residential community governance in Central Texas—where timeless streetscapes, thriving natural habitats, and lifelong neighborly bonds endure for generations.",
      architecturalNote:
        "All residences adhere to the Veridian Architectural Pattern Book, emphasizing native Texas quarried limestone, standing-seam metal roofs, deep shaded loggias, and Dark-Sky compliant exterior lighting.",
      featuredImageUrl:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      secondaryImageUrl:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
      coreValues: [
        {
          principleCode: "VAL-01",
          title: "Ecological Stewardship",
          description:
            "Protecting our 142-acre native preserve, heritage live oaks, and spring-fed creek corridors through organic landscaping and Dark-Sky illumination.",
        },
        {
          principleCode: "VAL-02",
          title: "Architectural Harmony",
          description:
            "Maintaining cohesive streetscapes and enduring estate craftsmanship through constructive, transparent Architectural Review Committee (ARC) guidance.",
        },
        {
          principleCode: "VAL-03",
          title: "Neighborly Belonging",
          description:
            "Cultivating multi-generational friendships through seasonal twilight concerts, youth swim leagues, conservation clubs, and welcoming block ambassadors.",
        },
        {
          principleCode: "VAL-04",
          title: "Fiscal & Civic Transparency",
          description:
            "Operating with open board deliberations, 100% funded capital reserve studies, and accessible digital governance records for every homeowner.",
        },
      ],
      milestones: [
        {
          year: "2012",
          title: "Master Charter & Conservation Dedication",
          description:
            "Dedication of 142 acres of permanent greenbelt and completion of the North Limestone Gatehouse and Phase I Custom Enclave.",
        },
        {
          year: "2016",
          title: "Opening of The Grand Conservatory & Aquatics",
          description:
            "Completion of the 14,500 sq. ft. timber-and-stone clubhouse, resort lap pool, and championship court complex.",
        },
        {
          year: "2021",
          title: "Transition to Full Resident Governance",
          description:
            "Homeowner-elected Board of Directors assumed full stewardship with a 100% funded 30-year capital reserve balance.",
        },
        {
          year: "2025",
          title: "Smart Gatehouse & Solar Microgrid Upgrade",
          description:
            "Deployment of encrypted LPR resident lane access and rooftop solar arrays powering 80% of common facility operations.",
        },
      ],
    },
    stats: [
      {
        id: "stat-homes",
        value: 485,
        suffix: "",
        label: "Custom Estate Residences",
        detail: "Across 5 distinct architectural villages (99.4% occupied)",
        code: "RES-COUNT",
      },
      {
        id: "stat-years",
        value: 14,
        suffix: " Yrs",
        label: "Established Heritage",
        detail: "Chartered in 2012 with 100% funded capital reserves",
        code: "EST-2012",
      },
      {
        id: "stat-acres",
        value: 142,
        suffix: " Ac",
        label: "Protected Greenbelt & Parks",
        detail: "12 premier facilities & 14 miles of manicured trails",
        code: "LND-PRES",
      },
      {
        id: "stat-events",
        value: 54,
        suffix: "+",
        label: "Annual Community Events",
        detail: "Concerts, farmers markets, youth sports & civic forums",
        code: "EVT-YEAR",
      },
    ],
    amenities: [
      {
        id: "amenity-clubhouse",
        name: "The Veridian Grand Clubhouse & Conservatory",
        category: "Clubhouse & Social",
        status: "Open Now",
        hours: "Daily · 6:00 AM – 10:00 PM",
        location: "1400 Veridian Parkway (Central Commons)",
        capacity: "Up to 180 Seated Guests",
        description:
          "An architectural centerpiece featuring vaulted cedar trusses, a floor-to-ceiling limestone hearth, demonstration catering kitchen, co-working library lounges, and wraparound sunset verandas overlooking Sycamore Creek.",
        highlights: [
          "Private Resident Co-Working Library & Fiber Wi-Fi",
          "Catering Kitchen & Private Dining Salon for Resident Rentals",
          "Covered Fireside Veranda with Panoramic Canyon Views",
        ],
        guidelines: [
          "Accessible via encrypted Resident Keycard or Mobile Credential.",
          "Private salon reservations must be submitted at least 14 days in advance.",
          "Accompanied guests (up to 6 per household) welcome in common lounges.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Available for private resident milestone bookings ($150 refundable security deposit).",
      },
      {
        id: "amenity-aquatics",
        name: "Resort Zero-Edge Pool & Heated Lap Sanctuary",
        category: "Aquatics",
        status: "Open Now",
        hours: "Lap Swim: 5:30 AM – 9:00 PM | Family Pool: 8:00 AM – 9:00 PM",
        location: "South Terrace · Lower Clubhouse Grounds",
        capacity: "25-Meter 6-Lane Lap Pool + Resort Lagoon",
        description:
          "Geothermally heated year-round 25-meter fitness lap pool paired with a zero-entry family resort lagoon, shaded pergola cabanas, splash fountain pad, and weekend seasonal poolside refreshment service.",
        highlights: [
          "Year-round 81°F Geothermal Heated 6-Lane Lap Pool",
          "Zero-Entry Family Lagoon & Shaded Limestone Cabanas",
          "Home of the Veridian Barracudas Youth Summer Swim Team",
        ],
        guidelines: [
          "Certified lifeguards on duty Friday–Sunday and daily Memorial Day through Labor Day.",
          "Adult-only lap swim hours strictly observed 5:30 AM – 7:30 AM daily.",
          "Glass containers are strictly prohibited within the fenced pool deck.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Cabanas 1–6 may be reserved in 4-hour blocks via the Resident Portal at no fee.",
      },
      {
        id: "amenity-courts",
        name: "Championship Tennis, Pickleball & Basketball Pavilion",
        category: "Courts & Sport",
        status: "Resident Keycard",
        hours: "Daily · 6:30 AM – 10:00 PM (LED Dark-Sky Court Lighting)",
        location: "1520 Canopy Ridge Drive (North Recreation Commons)",
        capacity: "4 Tennis · 6 Pickleball · 1 Full-Court Covered Basketball",
        description:
          "Tournament-grade post-tensioned hardcourts cushioned with Laykold surfacing, acoustic perimeter landscaping, shaded spectator pavilions, chilled bottle-filling stations, and a regulation covered basketball court.",
        highlights: [
          "4 USTA-Standard Lighted Tennis Courts + Ball Machine Locker",
          "6 Dedicated Acoustic-Screened Pickleball Courts",
          "Covered Regulation Full-Court Basketball & Youth Half-Court",
        ],
        guidelines: [
          "Court reservations up to 90 minutes via Resident Portal; walk-ons welcome on open courts.",
          "Non-marking court shoes required at all times; no bicycles, skates, or pets on court surfaces.",
          "Dark-Sky LED court lights automatically extinguish at 10:00 PM sharp.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Online court booking opens 7 days in advance for verified residents.",
      },
      {
        id: "amenity-trails",
        name: "14-Mile Heritage Oak Trails & Botanical Pocket Parks",
        category: "Parks & Trails",
        status: "Open Now",
        hours: "Daily · Dawn to Dusk",
        location: "Trailheads at North Gate, Sycamore Creek & Overlook Ridge",
        capacity: "142 Acres of Preserved Parkland",
        description:
          "Winding crushed-granite and boardwalk nature trails meandering beneath 200-year-old live oaks, spring-fed limestone waterfalls, wildflower pollinator meadows, and four neighborhood pocket parks with reflection benches.",
        highlights: [
          "Wayfinding Mileage Markers & QR Botanical Species Guides",
          "Leashed-Dog Friendly with 8 Hydration & Pet Waste Stations",
          "Sunset Amphitheater Lawn & Pollinator Butterfly Garden",
        ],
        guidelines: [
          "Pedestrians and joggers have right-of-way; motorized vehicles and e-motorbikes prohibited.",
          "Pets must remain on a physical leash no longer than 6 feet at all times.",
          "Please stay on marked paths to protect native golden-cheeked warbler habitats.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Open access for residents and accompanied guests; Sunset Lawn available for civic events.",
      },
      {
        id: "amenity-playground",
        name: "The Acorn Grove Adventure Playground & Splash Meadow",
        category: "Wellness & Youth",
        status: "Open Now",
        hours: "Daily · 7:30 AM – Dusk",
        location: "Adjacent to The Grand Conservatory (East Lawn)",
        capacity: "Separate Toddler (2–5) & Explorer (5–12) Zones",
        description:
          "Custom Robinia hardwood treehouse towers, limestone climbing boulders, inclusive sensory swings, poured-in-place safety surfacing, and continuous shade sails surrounded by parent seating pergolas.",
        highlights: [
          "Natural Robinia Timber Canopy Towers & Rope Bridges",
          "ADA-Accessible Inclusive Sensory & Expression Swings",
          "100% UV-Protected Shade Sails & Restroom Pavilion",
        ],
        guidelines: [
          "Children under 10 must be accompanied by an adult caregiver.",
          "Fence gates are self-latching for child safety—please ensure gates close securely.",
          "Birthday picnic tables under the East Pergola can be reserved via the HOA Office.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "East Pergola picnic tables reservable in 3-hour weekend windows.",
      },
      {
        id: "amenity-wellness",
        name: "The Sanctuary Fitness Studio & Movement Pavilion",
        category: "Wellness & Youth",
        status: "Resident Keycard",
        hours: "24/7 Keycard Access for Residents (18+)",
        location: "West Wing · Veridian Grand Clubhouse",
        capacity: "3,800 Sq. Ft. Wellness Facility",
        description:
          "Flooded with natural garden light, our wellness studio features Technogym cardio and strength equipment, free weights, a cedar-lined infrared recovery sauna, and a sprung-floor studio for morning yoga and reformer Pilates.",
        highlights: [
          "Technogym Connected Cardio, Squat Racks & Free Weights",
          "Sprung-Hardwood Yoga, Barre & Sound Bath Studio",
          "Spa Locker Rooms with Cedar Infrared Recovery Saunas",
        ],
        guidelines: [
          "24/7 access restricted to registered residents aged 18+; ages 15–17 permitted with parent.",
          "Please wipe down equipment after use and return weights to designated racks.",
          "Complimentary resident sunrise yoga held Tuesdays, Thursdays, and Saturdays at 7:00 AM.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Group wellness classes open for 1-click sign-up in the Resident Portal.",
      },
    ],
    announcements: [
      {
        id: "ann-01",
        referenceCode: "BUL-2026-104",
        title: "Autumn Parkway Limestone Masonry & Tree Canopy Pruning Schedule",
        category: "Maintenance Advisory",
        priority: "Scheduled Notice",
        date: "October 18, 2026",
        effectivePeriod: "Oct 26 – Nov 6, 2026 (8:30 AM – 4:00 PM)",
        summary:
          "Certified arborists and masonry crews will conduct annual oak wilt preventative pruning and low-wall repointing along Veridian Parkway and Overlook Ridge.",
        fullDetails: [
          "Our certified arboriculture partner (Barton Creek Tree Care) will perform deadwood elevation and canopy clearance along Veridian Parkway, Sycamore Hollow, and the North Gate median between October 26 and November 6.",
          "All pruning cuts on red and live oaks will be immediately sealed within 15 minutes in strict accordance with Texas Oak Wilt Prevention protocols.",
          "Single-lane flagger traffic control will be active between 9:00 AM and 3:30 PM on weekdays; no overnight lane closures or driveway blockages will occur.",
        ],
        affectedAreas: "Veridian Parkway (Mile 0.2–1.4), Overlook Ridge Enclave, North Gate Median",
        contactDepartment: "Facilities & Grounds Director · facilities@veridiangrovehoa.org",
      },
      {
        id: "ann-02",
        referenceCode: "BUL-2026-102",
        title: "Notice of 2027 Annual Budget Presentation & Q4 Open Board Assembly",
        category: "Board Notice",
        priority: "Important Advisory",
        date: "October 15, 2026",
        effectivePeriod: "Meeting Date: Thursday, Nov 19, 2026 at 6:30 PM",
        summary:
          "The Board of Directors invites all homeowners to review the proposed 2027 Operating & Capital Reserve Budget ahead of the November 19 assembly at The Grand Conservatory.",
        fullDetails: [
          "The Finance Committee and Treasurer have finalized the draft 2027 Operating & Reserve Budget. Thanks to strong investment yields on our treasury reserve ladder and solar energy savings, quarterly assessments are projected to remain unchanged for 2027.",
          "The complete line-item budget packet and the 2026 Reserve Study Update are available for authenticated homeowners inside the Resident Portal Document Vault.",
          "Homeowners may attend in person at The Grand Conservatory or join the encrypted livestream via the Resident Portal. Public comment registration opens 48 hours prior.",
        ],
        affectedAreas: "All Veridian Grove Enclaves (Phases I – V)",
        contactDepartment: "HOA Board Secretary · board@veridiangrovehoa.org",
      },
      {
        id: "ann-03",
        referenceCode: "BUL-2026-098",
        title: "Updated Holiday Exterior Illumination & Seasonal Decor Guidelines",
        category: "Architectural Review",
        priority: "Community News",
        date: "October 10, 2026",
        effectivePeriod: "Nov 15, 2026 – Jan 15, 2027",
        summary:
          "Review the Architectural Review Committee's seasonal lighting dates, warm-white Kelvin recommendations, and Dark-Sky courtesy hours for the upcoming holiday season.",
        fullDetails: [
          "In keeping with Section 4.8 of the Community Guidelines, seasonal and holiday exterior lighting may be displayed beginning November 15 and must be removed no later than January 15.",
          "To preserve our neighborhood's tranquil evening aesthetic and Dark-Sky certification, the ARC encourages warm-white LED illumination (2700K–3000K) and requests that decorative yard displays be turned off by 11:00 PM nightly.",
          "No ARC application is required for temporary seasonal displays that adhere to these guidelines.",
        ],
        affectedAreas: "All Residential Lots",
        contactDepartment: "Architectural Review Committee · architecture@veridiangrovehoa.org",
      },
      {
        id: "ann-04",
        referenceCode: "BUL-2026-094",
        title: "North & South Gatehouse License Plate Reader (LPR) Firmware Upgrade Completed",
        category: "Community Update",
        priority: "Community News",
        date: "October 04, 2026",
        effectivePeriod: "Active Immediately",
        summary:
          "Optical recognition speed at resident entry lanes has been improved by 40%. New vehicle decals and mobile QR visitor passes remain fully supported.",
        fullDetails: [
          "Our Security & Technology Committee has completed the optical sensor calibration at the North, South, and West Ridge resident entry lanes.",
          "Residents who have recently acquired a new vehicle or temporary loaner plates can update their plate numbers instantly inside the Resident Portal under 'Vehicles & Gate Access' without visiting the HOA office.",
        ],
        affectedAreas: "North Gatehouse, South Gatehouse, West Ridge Resident Gate",
        contactDepartment: "Gatehouse & Security Operations · (512) 555-0191",
      },
    ],
    events: [
      {
        id: "evt-01",
        title: "Autumn Twilight Jazz & Harvest Wine Social on the Lawn",
        category: "Social & Seasonal",
        date: "Saturday, November 7, 2026",
        monthShort: "NOV",
        dayNumeric: "07",
        time: "5:00 PM – 8:30 PM",
        location: "Sunset Amphitheater Lawn & Conservatory Veranda",
        summary:
          "Enjoy live acoustic jazz by the Austin Chamber Quartet, Texas Hill Country varietal tastings, artisan wood-fired flatbreads, and a lantern-lit children's cider station.",
        agenda: [
          "5:00 PM — Welcome Cider, Artisan Grazing Tables & Neighbor Mingle",
          "5:45 PM — First Set: Austin Chamber Jazz Quartet under the Heritage Oaks",
          "6:30 PM — Kids' Acorn Lantern Craft & S'mores around the Limestone Fire Pits",
          "7:15 PM — Sunset Toast & Community Newcomer Welcome",
        ],
        organizer: "Social & Hospitality Committee",
        isPublicWelcome: false,
        imageUrl:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "evt-02",
        title: "Saturday Morning Artisanal Farmers & Botanical Market",
        category: "Social & Seasonal",
        date: "Saturday, November 14, 2026",
        monthShort: "NOV",
        dayNumeric: "14",
        time: "8:30 AM – 12:30 PM",
        location: "Clubhouse Forecourt & East Pergola",
        summary:
          "Monthly open-air market featuring 18 local organic growers, sourdough bakers, honey apiaries, native Texas plant nurseries, and barista espresso carts.",
        agenda: [
          "8:30 AM — Market Bell & Fresh Sourdough / Espresso Service Begins",
          "9:30 AM — Master Gardener Mini-Workshop: Overwintering Native Perennials",
          "10:30 AM — Live Acoustic Guitar & Youth Bake Sale for Trail Conservation",
        ],
        organizer: "Veridian Lifestyle Director",
        isPublicWelcome: true,
        imageUrl:
          "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "evt-03",
        title: "Q4 Open HOA Board Assembly & 2027 Budget Town Hall",
        category: "HOA Governance",
        date: "Thursday, November 19, 2026",
        monthShort: "NOV",
        dayNumeric: "19",
        time: "6:30 PM – 8:15 PM",
        location: "The Grand Conservatory Salon (In-Person & Portal Stream)",
        summary:
          "Quarterly open governance session covering committee reports, 2027 budget ratification, trail bridge capital improvements, and open homeowner forum.",
        agenda: [
          "6:30 PM — Call to Order, Quorum Verification & Approval of Q3 Minutes",
          "6:45 PM — Treasurer's Report & 2027 Operating/Reserve Budget Presentation",
          "7:15 PM — Architectural & Landscape Committee Annual Review",
          "7:40 PM — Open Homeowner Q&A Forum (3 minutes per speaker)",
        ],
        organizer: "Veridian Grove Board of Directors",
        isPublicWelcome: false,
        imageUrl:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "evt-04",
        title: "Sycamore Creek Native Wildflower Seeding & Trail Stewardship Morning",
        category: "Volunteer & Stewardship",
        date: "Saturday, November 21, 2026",
        monthShort: "NOV",
        dayNumeric: "21",
        time: "8:00 AM – 11:00 AM",
        location: "Sycamore Creek West Trailhead Pavilion",
        summary:
          "Join fellow neighbors and our conservation biologist to scatter native bluebonnet and Indian paintbrush seed mixes along the creek meadow. Breakfast tacos provided!",
        agenda: [
          "8:00 AM — Coffee, Breakfast Tacos & Conservation Briefing",
          "8:30 AM — Group Seeding along Meadow Sectors A, B & C",
          "10:15 AM — Youth Junior Ranger Badge Presentation & Group Photo",
        ],
        organizer: "Conservation & Trails Committee",
        isPublicWelcome: true,
        imageUrl:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    gallery: [
      {
        id: "gal-01",
        title: "Custom Limestone & Timber Estate on Overlook Ridge",
        category: "Architecture & Streetscapes",
        location: "Overlook Ridge Enclave",
        photographerNote: "Architectural study showcasing native Texas Lueders limestone and cantilevered cedar eaves.",
        imageUrl:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        aspect: "wide",
      },
      {
        id: "gal-02",
        title: "Twilight at The Veridian Resort Lagoon & Lap Pool",
        category: "Clubhouse & Pools",
        location: "Central Commons South Terrace",
        photographerNote: "Heated zero-edge water mirror reflecting the limestone clubhouse veranda at dusk.",
        imageUrl:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        aspect: "tall",
      },
      {
        id: "gal-03",
        title: "Morning Sun Through the 200-Year Live Oak Canopy",
        category: "Parks & Trails",
        location: "Sycamore Creek Greenbelt Mile 3.2",
        photographerNote: "Protected heritage live oaks along our 14-mile crushed granite pedestrian trail network.",
        imageUrl:
          "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85",
        aspect: "square",
      },
      {
        id: "gal-04",
        title: "The Grand Conservatory Great Room & Hearth",
        category: "Clubhouse & Pools",
        location: "1400 Veridian Parkway",
        photographerNote: "Resident lounge and reading sanctuary open daily from 6:00 AM to 10:00 PM.",
        imageUrl:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
        aspect: "square",
      },
      {
        id: "gal-05",
        title: "Canopy Hollow Streetscape & Manicured Parkway",
        category: "Architecture & Streetscapes",
        location: "Phase III · Canopy Hollow",
        photographerNote: "Wide ribbon-curb sidewalks, buried utilities, and drought-tolerant native medians.",
        imageUrl:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        aspect: "wide",
      },
      {
        id: "gal-06",
        title: "Summer Concerts on the Amphitheater Lawn",
        category: "Community Gatherings",
        location: "Sunset Amphitheater",
        photographerNote: "Over 220 residents gathered for the annual Midsummer Strings & Picnic evening.",
        imageUrl:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85",
        aspect: "square",
      },
    ],
    safety: {
      headline: "24/7 Gatehouse Stewardship & Proactive Neighborhood Safety",
      subtitle:
        "Veridian Grove maintains round-the-clock staffed gatehouses, roving community courtesy patrols, and clear visitor guidelines designed to keep our streets peaceful, walkable, and secure without compromising neighborly hospitality.",
      patrolStatus: "Active 24/7/365 · Staffed North Gatehouse & Roving Courtesy Cruiser",
      visitorPassNote:
        "All guests, deliveries, and service contractors require pre-registration via the Resident Portal e-Pass system or live verification at the Main Gatehouse.",
      contacts: [
        {
          role: "Main Gatehouse & 24/7 Security Dispatch",
          phone: "(512) 555-0191",
          availability: "24 Hours / 7 Days a Week",
          note: "Visitor verification, gate access assistance, and roving patrol dispatch.",
          isEmergency: false,
        },
        {
          role: "Life-Threatening Police / Fire / EMS Emergency",
          phone: "911",
          availability: "Immediate Municipal Dispatch",
          note: "Travis County EMS & Westlake Fire Dept hold automated siren-preemption gate access.",
          isEmergency: true,
        },
        {
          role: "After-Hours Common Area Utility / Water Emergency",
          phone: "(512) 555-0199",
          availability: "After-Hours On-Call Engineer",
          note: "For main irrigation breaks, fallen trees blocking roadways, or gate malfunctions.",
          isEmergency: false,
        },
        {
          role: "Non-Emergency Municipal Sheriff Patrol Line",
          phone: "(512) 555-3110",
          availability: "24/7 County Dispatch",
          note: "For non-urgent public safety matters or vacation house-watch coordination.",
          isEmergency: false,
        },
      ],
      policies: [
        {
          code: "SEC-01",
          title: "Visitor & Contractor Gate Access Protocol",
          summary: "Streamlined digital QR passes for guests and regulated service hours for commercial vendors.",
          bullets: [
            "Residents may generate single-day or recurring QR e-Passes in the Resident Portal.",
            "Commercial contractors and landscaping crews are permitted entry Mon–Fri (7:30 AM – 6:00 PM) and Sat (8:30 AM – 4:00 PM).",
            "No commercial construction or heavy delivery access is permitted on Sundays or federal holidays.",
          ],
        },
        {
          code: "SEC-02",
          title: "25 MPH Neighborhood Speed Limit & Pedestrian Priority",
          summary: "Strict traffic calming across all residential parkways to protect children, cyclists, and joggers.",
          bullets: [
            "Maximum speed limit is 25 MPH on Veridian Parkway and 20 MPH on all enclave cul-de-sacs.",
            "Radar speed feedback signs and courtesy patrol reminders monitor compliance.",
            "Golf carts and neighborhood electric vehicles (NEVs) must hold valid HOA registration decals and be operated by licensed drivers.",
          ],
        },
        {
          code: "SEC-03",
          title: "Overnight Street Parking & Quiet Hours Policy",
          summary: "Preserving clear emergency vehicle lanes, sightlines, and tranquil nighttime acoustics.",
          bullets: [
            "Overnight street parking (1:00 AM – 6:00 AM) is prohibited without a temporary Visitor Overflow Permit issued by the Gatehouse.",
            "Community quiet hours are observed from 10:00 PM to 7:00 AM daily.",
            "RVs, boats, and utility trailers may be parked in driveways for up to 24 hours solely for active loading or unloading.",
          ],
        },
      ],
    },
    location: {
      headline: "Nestled in the Westlake Hills Corridor, Minutes from Downtown.",
      subtitle:
        "Positioned along the scenic Loop 360 / Bee Cave Road ridge, The Estates at Veridian Grove offers serene hill country privacy just 16 minutes west of Downtown Austin and surrounded by top-rated Eanes ISD campuses.",
      directionsFromNorth:
        "From US-183 / Arboretum: Head south on Capital of Texas Hwy (Loop 360) for 6.4 miles across the Pennybacker Bridge. Turn right onto Bee Cave Road (RM 2244) for 1.8 miles, then turn left onto Veridian Parkway into the Main Limestone Gatehouse.",
      directionsFromSouth:
        "From Downtown / MoPac (Loop 1): Take MoPac Expressway South to the Bee Cave Road (RM 2244) exit. Head west for 4.2 miles through Westlake Hills; Veridian Parkway will appear on your right just past Sycamore Creek Bridge.",
      transitAndAccessNote:
        "First-time visitors, prospective homebuyers, and real estate professionals must enter through the Main North Gatehouse at 1400 Veridian Parkway. The South and West Ridge gates are restricted to Resident LPR Transponder access only.",
      nearbyLandmarks: [
        {
          name: "Westlake High School & Eanes Elementary",
          category: "Top-Rated Public Schools",
          distance: "2.1 miles",
          driveTime: "5 mins",
        },
        {
          name: "Village at Westlake & Whole Foods Market",
          category: "Gourmet Groceries & Dining",
          distance: "2.8 miles",
          driveTime: "7 mins",
        },
        {
          name: "St. David's Medical Center & Urgent Care",
          category: "Healthcare & Emergency",
          distance: "3.4 miles",
          driveTime: "8 mins",
        },
        {
          name: "Lake Austin & Barton Creek Greenbelt Access",
          category: "Boating & Outdoor Recreation",
          distance: "3.9 miles",
          driveTime: "9 mins",
        },
        {
          name: "Downtown Austin Cultural & Business District",
          category: "City Center",
          distance: "8.6 miles",
          driveTime: "16 mins",
        },
        {
          name: "Austin-Bergstrom International Airport (AUS)",
          category: "International Airport",
          distance: "16.4 miles",
          driveTime: "24 mins",
        },
      ],
      mapPins: [
        {
          id: "pin-main-gate",
          name: "Main North Gatehouse & Visitor Welcome Center",
          category: "Gatehouse",
          xPercent: 52,
          yPercent: 22,
          addressOrZone: "1400 Veridian Parkway (North Entry)",
          description: "24/7 staffed visitor check-in, HOA Administration reception, and package concierge locker hub.",
          hoursOrDistance: "Open 24/7 · Staffed Officer On Duty",
        },
        {
          id: "pin-clubhouse",
          name: "The Veridian Grand Clubhouse & Resort Aquatics",
          category: "Clubhouse & Pool",
          xPercent: 48,
          yPercent: 50,
          addressOrZone: "Central Commons · Heart of the Community",
          description: "14,500 sq. ft. timber conservatory, 25m geothermal lap pool, family lagoon, and Acorn Grove playground.",
          hoursOrDistance: "Daily 6:00 AM – 10:00 PM",
        },
        {
          id: "pin-courts",
          name: "North Racquet, Pickleball & Basketball Pavilion",
          category: "Courts & Recreation",
          xPercent: 72,
          yPercent: 36,
          addressOrZone: "1520 Canopy Ridge Drive",
          description: "4 lighted USTA tennis courts, 6 acoustic-screened pickleball courts, and covered basketball court.",
          hoursOrDistance: "Daily 6:30 AM – 10:00 PM",
        },
        {
          id: "pin-trailhead",
          name: "Sycamore Creek Overlook & Botanical Trailhead",
          category: "Park & Trailhead",
          xPercent: 28,
          yPercent: 64,
          addressOrZone: "West Greenbelt Preserve",
          description: "Primary access point to 14 miles of crushed-granite trails, wildflower meadows, and limestone cascades.",
          hoursOrDistance: "Dawn to Dusk · 142-Acre Preserve",
        },
        {
          id: "pin-south-gate",
          name: "South Creek Resident LPR Gate",
          category: "Gatehouse",
          xPercent: 62,
          yPercent: 80,
          addressOrZone: "South Veridian Trace",
          description: "Automated high-speed License Plate Reader and RFID entry/exit exclusively for registered residents.",
          hoursOrDistance: "24/7 Resident Transponder Only",
        },
      ],
    },
    boardAndManagement: {
      governanceStatement:
        "The Estates at Veridian Grove is governed by a five-member volunteer Board of Directors elected by homeowners to staggered two-year terms, supported by an accredited on-site community management team.",
      meetingSchedule:
        "Open Board Assemblies are held on the third Thursday of February, May, August, and November at 6:30 PM inside The Grand Conservatory.",
      members: [
        {
          id: "bm-01",
          name: "Eleanor Vance-Sterling, AIA",
          position: "President · Board of Directors",
          roleType: "Board of Directors",
          termOrDepartment: "Term: 2025 – 2027 · Overlook Ridge Enclave",
          bio: "Principal architect and 12-year resident committed to sustainable land stewardship, long-range capital planning, and constructive community dialogue.",
          focusAreas: ["Long-Range Strategic Plan", "Architectural Standards", "Municipal Liaison"],
          publicEmail: "president@veridiangrovehoa.org",
          imageUrl:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "bm-02",
          name: "Marcus Chen, CFA",
          position: "Treasurer · Board of Directors",
          roleType: "Board of Directors",
          termOrDepartment: "Term: 2026 – 2028 · Sycamore Hollow Enclave",
          bio: "Institutional portfolio manager overseeing our $4.2M capital reserve fund, annual CPA audits, and zero-debt infrastructure modernization.",
          focusAreas: ["Capital Reserve Stewardship", "Annual Audit & Budget", "Vendor Contract Review"],
          publicEmail: "treasurer@veridiangrovehoa.org",
          imageUrl:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "bm-03",
          name: "Dr. Julianna Morales",
          position: "Vice President & Conservation Chair",
          roleType: "Board of Directors",
          termOrDepartment: "Term: 2025 – 2027 · The Preserve Enclave",
          bio: "Environmental scientist leading our 142-acre oak canopy preservation, Firewise wildfire mitigation program, and creek water quality monitoring.",
          focusAreas: ["Greenbelt & Oak Canopy", "Firewise Safety Program", "Trail Network Expansion"],
          publicEmail: "conservation@veridiangrovehoa.org",
          imageUrl:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "bm-04",
          name: "David Alverez-Thorne",
          position: "Secretary & Communications Chair",
          roleType: "Board of Directors",
          termOrDepartment: "Term: 2026 – 2028 · Canopy Ridge Enclave",
          bio: "Technology executive overseeing digital governance records, the Resident Portal experience, and neighborhood block ambassador onboarding.",
          focusAreas: ["Public Records & Minutes", "Resident Portal Digital Ops", "New Homeowner Welcome"],
          publicEmail: "secretary@veridiangrovehoa.org",
          imageUrl:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "bm-05",
          name: "Harrison Locke, PCAM®, CMCA®",
          position: "On-Site General Manager",
          roleType: "Management Team",
          termOrDepartment: "HOA Executive Office · Full-Time On-Site",
          bio: "Holds the highest credential in community association management (PCAM) with 18 years managing luxury master-planned communities.",
          focusAreas: ["Daily Operations & Staff", "Vendor & Facility Execution", "Homeowner Concierge"],
          publicEmail: "gm@veridiangrovehoa.org",
          imageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "bm-06",
          name: "Clara Lindqvist",
          position: "Lifestyle & Resident Services Director",
          roleType: "Management Team",
          termOrDepartment: "Clubhouse Desk · Full-Time On-Site",
          bio: "Curates over 50 annual community events, youth swim and racquet programs, clubhouse private bookings, and new resident orientations.",
          focusAreas: ["Community Events & Clubs", "Clubhouse Reservations", "New Resident Onboarding"],
          publicEmail: "lifestyle@veridiangrovehoa.org",
          imageUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        },
      ],
    },
    testimonials: [
      {
        id: "test-01",
        residentName: "thomas & Claire Whitaker",
        enclave: "The Preserve Enclave",
        residentSince: "Homeowners since 2015",
        quote:
          "Moving our family to Veridian Grove eleven years ago was the best decision we ever made. Our children grew up swimming on the summer Barracudas team and riding bikes under the live oaks, while the Board's financial discipline has kept our common grounds looking like a five-star botanical resort.",
        highlightTag: "Multi-Generational Family Life",
        avatarUrl:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "test-02",
        residentName: "Dr. Rajesh & Priya Nair",
        enclave: "Overlook Ridge",
        residentSince: "Homeowners since 2019",
        quote:
          "When we remodeled our outdoor loggia last spring, the Architectural Review Committee was remarkably collaborative—offering helpful native landscaping suggestions and approving our plans in eight days. You truly feel that the association works as a partner to homeowners.",
        highlightTag: "Constructive Architectural Review",
        avatarUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "test-03",
        residentName: "Margaret & Arthur Pendelton",
        enclave: "Sycamore Hollow",
        residentSince: "Homeowners since 2013",
        quote:
          "Every morning begins with a three-mile walk along Sycamore Creek and espresso in the Conservatory reading room. Between the 24/7 staffed gatehouse and our wonderful block ambassadors, there is an unmatched sense of peace and genuine neighborly warmth here.",
        highlightTag: "Trails, Security & Tranquility",
        avatarUrl:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80",
      },
    ],
    documents: [
      {
        id: "doc-01",
        code: "GOV-CCR-2024",
        title: "Restated Declaration of Covenants, Conditions & Restrictions (CC&Rs)",
        category: "Governing Documents",
        version: "v4.2 (Recorded)",
        updatedDate: "March 15, 2025",
        fileSize: "2.4 MB · PDF",
        summary:
          "The foundational legal charter governing property rights, common area easements, assessment obligations, and conservation protections for all lots in Veridian Grove.",
        keySections: [
          {
            heading: "Article I – Definitions & Property Subject to Declaration",
            content:
              "Establishes the 420-acre master community boundary, including Phases I through V (485 residential lots) and 142 acres of permanent Conservation Common Area held in trust by the Association.",
          },
          {
            heading: "Article IV – Covenant for Maintenance Assessments",
            content:
              "Details the calculation of quarterly operating assessments, special capital assessment voter thresholds (requiring 67% homeowner approval), and our mandatory 100%-funded Reserve Policy.",
          },
          {
            heading: "Article VII – Use Restrictions & Quiet Enjoyment",
            content:
              "Establishes single-family residential use, minimum 12-month lease terms (strictly prohibiting short-term vacation rentals), Dark-Sky exterior lighting rules, and native tree protection.",
          },
        ],
      },
      {
        id: "doc-02",
        code: "ARC-PAT-2026",
        title: "Architectural Pattern Book & Landscape Design Standards",
        category: "Architectural Guidelines",
        version: "v6.0 (2026 Edition)",
        updatedDate: "January 10, 2026",
        fileSize: "5.8 MB · PDF",
        summary:
          "Comprehensive design manual covering exterior additions, roofing materials, solar panel integration, swimming pools, fencing, and approved Central Texas native plant palettes.",
        keySections: [
          {
            heading: "Section 2.1 – Exterior Masonry, Timber & Roof Palette",
            content:
              "At least 75% of primary exterior facades must utilize native Texas quarried limestone, stucco, or architectural stone accented by natural cedar/cypress millwork and non-reflective standing-seam metal or slate roofs.",
          },
          {
            heading: "Section 3.4 – Rooftop Solar & Battery Storage Integration",
            content:
              "Low-profile black-on-black photovoltaic panels with concealed conduit runs are pre-approved for swift 10-day ARC review in accordance with Texas Property Code § 202.010.",
          },
          {
            heading: "Section 5.0 – Approved Drought-Tolerant Botanical List",
            content:
              "Requires minimum 60% native/adapted low-water plant species and prohibits invasive species (including Ligustrum, Chinaberry, and Nandina).",
          },
        ],
      },
      {
        id: "doc-03",
        code: "POL-RUL-2026",
        title: "Community Rules, Amenity Etiquette & Gatehouse Access Policy",
        category: "Policies & Rules",
        version: "v3.1",
        updatedDate: "June 01, 2026",
        fileSize: "1.1 MB · PDF",
        summary:
          "Consolidated handbook for daily life: clubhouse & pool hours, court reservation etiquette, contractor working hours, pet leash rules, and visitor parking permits.",
        keySections: [
          {
            heading: "Part A – Amenity Guest & Reservation Guidelines",
            content:
              "Households in good standing may host up to 6 accompanied guests at the pool and courts. Private Conservatory rentals are available via a refundable deposit schedule.",
          },
          {
            heading: "Part B – Contractor & Vendor Operating Hours",
            content:
              "Exterior construction and commercial landscape maintenance are permitted Monday–Friday 7:30 AM – 6:00 PM and Saturday 8:30 AM – 4:00 PM. Quiet Sundays and federal holidays are strictly enforced.",
          },
        ],
      },
      {
        id: "doc-04",
        code: "GOV-BYL-2022",
        title: "Bylaws of The Estates at Veridian Grove Homeowners Association, Inc.",
        category: "Governing Documents",
        version: "v2.0",
        updatedDate: "November 18, 2022",
        fileSize: "940 KB · PDF",
        summary:
          "Defines Board of Directors election procedures, quorum requirements, officer duties, open meeting notice standards, and committee charters.",
        keySections: [
          {
            heading: "Article III – Meetings of Members & Voting Rights",
            content:
              "Annual Meeting of Members is held each November. Every Residential Lot is entitled to one (1) vote, exercisable via encrypted electronic ballot or in person.",
          },
          {
            heading: "Article V – Open Board Deliberations & Notice",
            content:
              "All regular and special Board meetings are open to homeowners with minimum 144-hour posted notice and dedicated homeowner forum time.",
          },
        ],
      },
      {
        id: "doc-05",
        code: "FRM-RES-2026",
        title: "New Homeowner Welcome Packet, Resale Certificate & LPR Registration Guide",
        category: "Forms & Disclosures",
        version: "v5.4",
        updatedDate: "August 12, 2026",
        fileSize: "1.6 MB · PDF",
        summary:
          "Essential checklist for new buyers, title companies, and realtors: closing certificate instructions, gate transponder setup, and utility contacts.",
        keySections: [
          {
            heading: "1. Title Company Resale Certificate & Estoppel Requests",
            content:
              "Standard TREC Subdivision Information and Resale Certificates are processed within 5 business days via concierge@veridiangrovehoa.org.",
          },
          {
            heading: "2. New Resident Onboarding & Keycard Issuance",
            content:
              "Schedule a 20-minute welcome orientation with our Lifestyle Director at The Grand Conservatory to receive your household amenity keycards and vehicle LPR transponders.",
          },
        ],
      },
      {
        id: "doc-06",
        code: "ARC-APP-2026",
        title: "Architectural Modification (ARC) Submittal Checklist & Fee Schedule",
        category: "Architectural Guidelines",
        version: "v4.1",
        updatedDate: "April 02, 2026",
        fileSize: "780 KB · PDF",
        summary:
          "Step-by-step instructions for submitting site plans, material samples, and drainage diagrams for exterior home improvements.",
        keySections: [
          {
            heading: "Fast-Track vs. Major Modification Review Timelines",
            content:
              "Minor modifications (repainting in approved palette, solar panels, tree replacement, play structures) are reviewed within 10 business days at zero fee. Major structural or pool additions are reviewed within 21 days.",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "faq-01",
        category: "General & Office",
        question: "What are the HOA Office hours and where is the administration office located?",
        answer:
          "The Veridian Grove HOA Executive Office is located inside the west wing of The Grand Conservatory at 1400 Veridian Parkway, Suite 100. Walk-in hours are Monday through Friday from 8:30 AM to 5:30 PM and Saturdays from 9:00 AM to 1:00 PM. For 24/7 gate access or urgent safety matters outside office hours, the Main North Gatehouse is staffed round-the-clock at (512) 555-0191.",
        relatedDocCode: "FRM-RES-2026",
      },
      {
        id: "faq-02",
        category: "Assessments & Dues",
        question: "How are HOA assessments billed, and what payment methods are accepted?",
        answer:
          "Assessments are billed quarterly (due January 1, April 1, July 1, and October 1) with a 30-day grace period. Homeowners can pay online via the private Resident Portal using fee-free ACH Auto-Draft, eCheck, or major credit/debit cards, or by mailing a check payable to 'The Estates at Veridian Grove HOA'. Assessments cover 24/7 staffed gatehouse operations, common area landscaping, trail conservation, pool/clubhouse maintenance, and capital reserve funding.",
        relatedDocCode: "GOV-CCR-2024",
      },
      {
        id: "faq-03",
        category: "General & Office",
        question: "I just purchased a home in the subdivision. How do I register for the Resident Portal and gate access?",
        answer:
          "Welcome home! Once your closing deed or settlement statement is received from your title company, you can click 'Resident Portal' in the top navigation and select 'New Homeowner Registration', or stop by the Conservatory desk with your photo ID and vehicle registration. Our team will activate your digital portal account, issue up to 4 household amenity keycards, and register your vehicles for high-speed License Plate Reader (LPR) gate entry within 15 minutes.",
        relatedDocCode: "FRM-RES-2026",
      },
      {
        id: "faq-04",
        category: "Amenities & Access",
        question: "How do residents reserve the Grand Conservatory, poolside cabanas, or tennis/pickleball courts?",
        answer:
          "Verified residents can reserve tennis and pickleball courts (up to 7 days in advance) and poolside cabanas (4-hour blocks) directly inside the Resident Portal at no cost. For private milestone events in The Grand Conservatory Dining Salon or Sunset Lawn, submit a Private Event Request at least 14 days in advance along with a refundable security deposit.",
        relatedDocCode: "POL-RUL-2026",
      },
      {
        id: "faq-05",
        category: "Architectural (ARC)",
        question: "Do I need Architectural Review Committee (ARC) approval for landscaping, exterior painting, or solar panels?",
        answer:
          "Yes, any exterior modification visible from the street, greenbelt, or neighboring lots requires an ARC submittal prior to starting work. However, we offer a 10-day Fast-Track Approval (with $0 review fee) for rooftop solar installations, repainting in pre-approved palette colors, and replacing plants from our Native Botanical List. Full structural, pool, or fencing plans are reviewed within 21 days.",
        relatedDocCode: "ARC-PAT-2026",
      },
      {
        id: "faq-06",
        category: "Safety & Visitors",
        question: "How do I grant gate access to visiting family, delivery drivers, or service contractors?",
        answer:
          "You can pre-register guests or contractors in seconds using the Resident Portal's 'Visitor e-Pass' feature, which sends an encrypted QR code directly to your guest's smartphone for instant scanning at the Main North Gatehouse. You may also maintain a permanent Approved Guest List or call the 24/7 Gatehouse Officer directly at (512) 555-0191.",
        relatedDocCode: "POL-RUL-2026",
      },
      {
        id: "faq-07",
        category: "General & Office",
        question: "Are short-term vacation rentals (such as Airbnb or VRBO) permitted in the community?",
        answer:
          "No. Pursuant to Article VII of our Recorded CC&Rs, all residences are strictly dedicated to single-family residential use, and any lease agreement must be for an entire residence for a minimum initial term of twelve (12) consecutive months. Transient, hotel, or short-term rentals under 365 days are strictly prohibited to preserve neighborhood security and stability.",
        relatedDocCode: "GOV-CCR-2024",
      },
    ],
    socials: [
      { platform: "Instagram", handle: "@VeridianGroveEstates", url: "#contact" },
      { platform: "Facebook", handle: "Veridian Grove Official HOA", url: "#contact" },
      { platform: "LinkedIn", handle: "The Estates at Veridian Grove", url: "#contact" },
      { platform: "YouTube", handle: "Veridian Grove Town Halls", url: "#contact" },
    ],
  },
  {
    id: "aurelia-shores",
    slug: "aurelia-shores",
    name: "Aurelia Shores Yacht & Country Club",
    shortName: "Aurelia Shores HOA",
    tagline: "Private Waterfront Living & Timeless Coastal Grace",
    establishedYear: 2008,
    locationCityState: "Coral Gables, FL",
    fullAddress: "800 Harbor Crest Boulevard, Coral Gables, FL 33156",
    gpsCoordinates: "25.6714° N, 80.2618° W",
    gatehousePhone: "(305) 555-0188",
    officePhone: "(305) 555-0120",
    publicEmail: "concierge@aureliashoreshoa.org",
    arcEmail: "designboard@aureliashoreshoa.org",
    officeHours: "Mon – Fri: 8:00 AM – 5:00 PM | Sat: 9:00 AM – 2:00 PM",
    gateStatusText: "Land & Marina Gates Active · Harbormaster & Patrol On Duty",
    nextBoardMeeting: "Wednesday, Nov 18, 2026 · 6:00 PM at The Regatta Room",
    theme: {
      id: "coastal-maritime",
      name: "Coastal Limestone & Maritime Slate",
      bgPrimary: "#FAF9F6",
      bgSecondary: "#F0EFEA",
      bgDark: "#122136",
      textPrimary: "#131D2B",
      textSecondary: "#4E5B6E",
      accentPrimary: "#183052",
      accentSecondary: "#B68D40",
      borderSubtle: "#DFE2E8",
    },
    hero: {
      eyebrow: "EST. 2008 · PRIVATE WATERFRONT & MARINA ENCLAVE",
      headline: "Coastal Mediterranean Estates Framed by Deepwater Harbors.",
      description:
        "Set along two miles of protected Biscayne Bay shoreline and royal palm avenues, Aurelia Shores unites custom coral-stone architecture, a protected 42-slip resident yacht basin, and resort country club amenities.",
      scenes: [
        {
          id: "scene-harbor",
          label: "Deepwater Marina & Estates",
          title: "Protected Yacht Basin & Waterfront Promenades",
          subtitle: "320 custom residences with direct bay access and coral-stone seawalls.",
          imageUrl:
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85",
          caption: "Harbor Crest Peninsula — Custom Waterfront Residence at Sunset",
          timeOfDay: "Sunset Glow · 6:30 PM",
        },
        {
          id: "scene-club",
          label: "Bayside Beach Club",
          title: "The Aurelia Bayside Pavilion & Saltwater Infinity Pool",
          subtitle: "Panoramic bay views, private cabanas, and seaside terrace dining.",
          imageUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=85",
          caption: "The Saltwater Lagoon & Royal Palm Terrace",
          timeOfDay: "Midday Breeze · 1:15 PM",
        },
        {
          id: "scene-palms",
          label: "Royal Palm Botanical Walk",
          title: "Tropical Hammock Preserves & Harborside Boardwalks",
          subtitle: "6.5 miles of shaded coastal pathways and mangrove observation piers.",
          imageUrl:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
          caption: "South Banyan Promenade & Resident Botanical Walk",
          timeOfDay: "Morning Light · 8:45 AM",
        },
      ],
    },
    about: {
      eyebrow: "CHAPTER I · ABOUT THE SUBDIVISION",
      headline: "A Legacy of Maritime Elegance and Resilient Coastal Stewardship.",
      leadParagraph:
        "Chartered in 2008 along a secluded peninsula in Coral Gables, Aurelia Shores was master-planned to harmonize classic Anglo-Caribbean and Mediterranean Revival architecture with resilient coastal engineering and thriving marine ecosystems.",
      secondaryParagraph:
        "Our Homeowners Association safeguards 320 luxury estates, 1.8 miles of living mangrove shoreline, and a full-service Yacht & Racquet Club—ensuring pristine infrastructure, hurricane-resilient underground utilities, and warm neighborhood camaraderie.",
      mission:
        "To uphold world-class waterfront infrastructure, architectural distinction, and marine conservation while delivering effortless resort living for our homeowners.",
      vision:
        "To remain South Florida's most admired private waterfront residential community—celebrated for environmental resilience, maritime heritage, and enduring family traditions.",
      architecturalNote:
        "Residences feature hand-quarried Keystone coral rock, barrel clay tile or white Bermuda roofs, impact-rated architectural bronze fenestration, and sea-turtle friendly coastal illumination.",
      featuredImageUrl:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      secondaryImageUrl:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85",
      coreValues: [
        {
          principleCode: "VAL-01",
          title: "Marine & Mangrove Stewardship",
          description:
            "Protecting our Biscayne Bay seagrass beds, living seawalls, and manatee sanctuary zones through clean-marina practices.",
        },
        {
          principleCode: "VAL-02",
          title: "Resilient Coastal Architecture",
          description:
            "Combining timeless Mediterranean & Anglo-Caribbean aesthetics with Category-5 resilient construction and buried utilities.",
        },
        {
          principleCode: "VAL-03",
          title: "Yachting & Sporting Heritage",
          description:
            "Bringing families together through junior sailing clinics, twilight regattas, clay-court tennis leagues, and bayside galas.",
        },
        {
          principleCode: "VAL-04",
          title: "Prudent Financial Governance",
          description:
            "Maintaining AAA-grade capital reserves for seawalls, roadways, and club facilities with complete transparency.",
        },
      ],
      milestones: [
        {
          year: "2008",
          title: "Peninsula Charter & Deepwater Basin Completion",
          description: "Completion of the 42-slip protected yacht harbor and Royal Palm Grand Causeway.",
        },
        {
          year: "2014",
          title: "Inauguration of The Bayside Clubhouse & Har-Tru Courts",
          description: "Opening of the 18,000 sq. ft. waterfront clubhouse, saltwater infinity pool, and 8 hydro-grid clay courts.",
        },
        {
          year: "2020",
          title: "Living Seawall & Underground Grid Modernization",
          description: "100% buried fiber-optic and storm-hardened utility microgrid completed across all enclaves.",
        },
        {
          year: "2025",
          title: "Clean Marina Gold Certification",
          description: "Recognized for artificial reef restoration and electric shore-power marina upgrades.",
        },
      ],
    },
    stats: [
      {
        id: "stat-homes",
        value: 320,
        suffix: "",
        label: "Waterfront & Estate Homes",
        detail: "Across 4 coral-stone peninsulas & banyan avenues",
        code: "RES-BAY",
      },
      {
        id: "stat-years",
        value: 18,
        suffix: " Yrs",
        label: "Maritime Heritage",
        detail: "Established 2008 with 100% funded seawall & club reserves",
        code: "EST-2008",
      },
      {
        id: "stat-acres",
        value: 42,
        suffix: " Slips",
        label: "Private Deepwater Marina",
        detail: "Plus 9 resort facilities & 6.5 miles of bayfront walks",
        code: "MAR-42",
      },
      {
        id: "stat-events",
        value: 64,
        suffix: "+",
        label: "Annual Regattas & Socials",
        detail: "Junior sailing, clay-court tournaments & sunset dinners",
        code: "EVT-BAY",
      },
    ],
    amenities: [
      {
        id: "amenity-clubhouse",
        name: "The Aurelia Bayside Clubhouse & Regatta Veranda",
        category: "Clubhouse & Social",
        status: "Open Now",
        hours: "Daily · 6:30 AM – 10:30 PM",
        location: "800 Harbor Crest Blvd (Marina Point)",
        capacity: "220 Guests Indoor & Bayside Terrace",
        description:
          "Overlooking the yacht basin and Biscayne Bay, the Clubhouse features coral-stone loggias, the Regatta Dining Salon, a private chartroom library, and sunset cocktail terraces.",
        highlights: [
          "Panoramic Biscayne Bay Loggia & Sunset Terrace",
          "Private Chartroom Co-Working Lounge & Boardroom",
          "Full Catering Galley for Private Homeowner Celebrations",
        ],
        guidelines: [
          "Resident keycard or mobile credential required for entry.",
          "Smart resort casual attire requested inside the Regatta Salon after 5:00 PM.",
          "Private terrace bookings available through the Club Concierge.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Available for private resident bookings via the Resident Portal.",
      },
      {
        id: "amenity-aquatics",
        name: "Bayside Saltwater Infinity Pool & Cabana Deck",
        category: "Aquatics",
        status: "Open Now",
        hours: "Daily · 6:00 AM – 9:30 PM",
        location: "East Marina Promenade",
        capacity: "Olympic-Length Saltwater Pool + Spa",
        description:
          "Saline-purified zero-edge infinity pool appearing to merge directly into the bay waters, accompanied by a heated hydrotherapy spa, linen-draped teak cabanas, and a children's splash cove.",
        highlights: [
          "Heated Saline-Mineral Lap & Infinity Lounge Pool",
          "8 Private Teak Cabanas with Ceiling Fans & Towel Service",
          "Dedicated Shallow Splash Cove for Young Swimmers",
        ],
        guidelines: [
          "Lifeguards on duty daily from 9:00 AM to 6:00 PM.",
          "Up to 6 accompanied guests per household permitted without prior party registration.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Complimentary half-day cabana bookings via the Resident Portal.",
      },
      {
        id: "amenity-courts",
        name: "Har-Tru Clay Tennis, Pickleball & Basketball Complex",
        category: "Courts & Sport",
        status: "Resident Keycard",
        hours: "Daily · 6:30 AM – 10:00 PM",
        location: "840 Royal Palm Way",
        capacity: "6 Hydro-Grid Clay Tennis · 6 Pickleball · 1 Basketball Court",
        description:
          "Sub-surface irrigated Har-Tru green clay tennis courts, cushioned tournament pickleball courts, and a shaded regulation basketball pavilion with pro-shop locker facilities.",
        highlights: [
          "6 Underground Hydro-Grid Har-Tru Clay Tennis Courts",
          "6 Lighted Championship Pickleball Courts",
          "Covered Regulation Basketball Court & Viewing Deck",
        ],
        guidelines: [
          "Proper flat-soled clay-court tennis shoes mandatory on Har-Tru courts.",
          "90-minute reservations available 7 days ahead in the Resident Portal.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Reserve courts and ball machines online in the Resident Portal.",
      },
      {
        id: "amenity-trails",
        name: "Banyan Hammock Park & 6.5-Mile Bayfront Seawall Walk",
        category: "Parks & Trails",
        status: "Open Now",
        hours: "Daily · Dawn to 10:00 PM",
        location: "Continuous Perimeter Baywalk",
        capacity: "6.5 Miles of Coastal Paths & 3 Pocket Parks",
        description:
          "Coral-paver waterfront promenades, mangrove kayaking launch docks, and shaded banyan tree sanctuaries with manatee observation piers.",
        highlights: [
          "Kayak & Paddleboard Floating Launch Dock",
          "Manatee & Osprey Observation Pier",
          "3 Shaded Botanical Pocket Parks with Dog Stations",
        ],
        guidelines: [
          "No fishing or cast-netting near the marina slips or manatee sanctuary cove.",
          "Pets must remain leashed on all baywalk promenades.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Resident kayak storage racks can be leased annually through the Harbormaster.",
      },
      {
        id: "amenity-playground",
        name: "Mariner's Cove Children's Playground & Lawn",
        category: "Wellness & Youth",
        status: "Open Now",
        hours: "Daily · 7:30 AM – Dusk",
        location: "Banyan Commons Park",
        capacity: "Ages 2–12 Maritime Play Structure",
        description:
          "Shaded nautical-themed timber play schooner, sensory swings, soft turf mounds, and misting cooling arches beside a manicured family picnic lawn.",
        highlights: [
          "Custom Timber Schooner Climber & Rope Rigging",
          "Full-Canopy Hurricane-Rated UV Shade Sails",
          "Adjacent Family Gazebo & Restroom Pavilion",
        ],
        guidelines: [
          "Adult supervision required for children under 10.",
          "Gazebo available for weekend resident birthday gatherings.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Reserve the Banyan Gazebo via the HOA Concierge.",
      },
      {
        id: "amenity-wellness",
        name: "Harborside Spa, Fitness & Pilates Sanctuary",
        category: "Wellness & Youth",
        status: "Resident Keycard",
        hours: "24/7 Keycard Access",
        location: "Second Floor · Bayside Clubhouse",
        capacity: "4,200 Sq. Ft. Bay-View Wellness Center",
        description:
          "Floor-to-ceiling harbor views with state-of-the-art strength and cardio suites, reformer Pilates studio, eucalyptus steam rooms, and cold-plunge recovery deck.",
        highlights: [
          "Bay-View Cardio & Free Weight Training Floor",
          "Reformer Pilates & Sunrise Vinyasa Studio",
          "Eucalyptus Steam Rooms & Recovery Lounge",
        ],
        guidelines: [
          "24/7 access for residents 18+.",
          "Complimentary group classes posted weekly on the Resident Portal.",
        ],
        imageUrl:
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Class sign-ups open 48 hours prior in the Resident Portal.",
      },
    ],
    announcements: [
      {
        id: "as-ann-01",
        referenceCode: "MAR-2026-88",
        title: "Annual Marina Basin Inspection & Shore-Power Pedestal Testing",
        category: "Maintenance Advisory",
        priority: "Scheduled Notice",
        date: "October 19, 2026",
        effectivePeriod: "Nov 2 – Nov 5, 2026 (9:00 AM – 3:00 PM)",
        summary:
          "Marine engineers will inspect seawall cap joints and test 50A/100A shore-power pedestals across Slips 1 through 42.",
        fullDetails: [
          "Brief 20-minute shore-power interruptions will occur on individual docks between 10:00 AM and 2:00 PM as marine electricians perform thermal load certification.",
          "Harbormaster staff will notify slip holders 24 hours prior to testing their specific pier.",
        ],
        affectedAreas: "Aurelia Yacht Basin Piers A, B & C",
        contactDepartment: "Harbormaster Office · marina@aureliashoreshoa.org",
      },
      {
        id: "as-ann-02",
        referenceCode: "BRD-2026-84",
        title: "2027 Budget Town Hall & Annual Membership Meeting Notice",
        category: "Board Notice",
        priority: "Important Advisory",
        date: "October 14, 2026",
        effectivePeriod: "Wednesday, Nov 18, 2026 at 6:00 PM",
        summary:
          "Join the Board of Directors in The Regatta Room to review the 2027 Operating & Seawall Reserve Budget.",
        fullDetails: [
          "Full financial packets and audited 2026 statements are available in the Resident Portal.",
        ],
        affectedAreas: "All Aurelia Shores Residences",
        contactDepartment: "Board Secretary · board@aureliashoreshoa.org",
      },
    ],
    events: [
      {
        id: "as-evt-01",
        title: "Commodore's Sunset Regatta & Bayside Oyster Roast",
        category: "Social & Seasonal",
        date: "Saturday, November 14, 2026",
        monthShort: "NOV",
        dayNumeric: "14",
        time: "4:30 PM – 9:00 PM",
        location: "Marina Point Lawn & Regatta Veranda",
        summary:
          "Watch the autumn sailboat parade return to harbor followed by live steel-drum jazz, chilled raw bar, and coastal culinary stations.",
        agenda: [
          "4:30 PM — Spectator Viewing on the Marina Promenade",
          "6:00 PM — Commodore's Cup Trophy Toast & Live Jazz",
          "6:30 PM — Bayside Culinary Stations & Family Dessert Bar",
        ],
        organizer: "Yacht & Social Committee",
        isPublicWelcome: false,
        imageUrl:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "as-evt-02",
        title: "Mangrove Shoreline & Seagrass Conservation Kayak Clean-Up",
        category: "Volunteer & Stewardship",
        date: "Sunday, November 22, 2026",
        monthShort: "NOV",
        dayNumeric: "22",
        time: "8:30 AM – 11:30 AM",
        location: "Kayak Launch Dock · Banyan Hammock Park",
        summary:
          "Paddle alongside our marine biologist to inspect mangrove propagules and keep our sanctuary coves pristine.",
        agenda: [
          "8:30 AM — Cuban Coffee, Pastries & Marine Briefing",
          "9:00 AM — Guided Kayak & Shoreline Stewardship",
        ],
        organizer: "Marine Conservation Committee",
        isPublicWelcome: true,
        imageUrl:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    gallery: [
      {
        id: "as-gal-01",
        title: "Mediterranean Coral-Stone Residence on Harbor Crest",
        category: "Architecture & Streetscapes",
        location: "Harbor Crest Peninsula",
        photographerNote: "Custom waterfront architecture with private deepwater dockage.",
        imageUrl:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
        aspect: "wide",
      },
      {
        id: "as-gal-02",
        title: "Bayside Saltwater Infinity Pool & Cabanas",
        category: "Clubhouse & Pools",
        location: "Aurelia Beach Club",
        photographerNote: "Zero-edge pool overlooking Biscayne Bay.",
        imageUrl:
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85",
        aspect: "tall",
      },
      {
        id: "as-gal-03",
        title: "Royal Palm Boulevard & Banyan Greenway",
        category: "Parks & Trails",
        location: "Main Causeway",
        photographerNote: "Manicured coastal streetscapes and shaded pedestrian paths.",
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85",
        aspect: "square",
      },
    ],
    safety: {
      headline: "24/7 Land & Marine Security Operations",
      subtitle:
        "Aurelia Shores combines a 24/7 staffed causeway gatehouse, roving security officers, and harbormaster marine surveillance to protect both land and waterfront approaches.",
      patrolStatus: "Active 24/7 · Causeway Gatehouse & Harbormaster Watch",
      visitorPassNote:
        "All land visitors and visiting vessels must hold advance registration through the Resident Portal or Harbormaster.",
      contacts: [
        {
          role: "Causeway Main Gatehouse & Dispatch",
          phone: "(305) 555-0188",
          availability: "24 Hours / 7 Days",
          note: "Visitor verification and roving security dispatch.",
        },
        {
          role: "Police / Fire / Coast Guard Emergency",
          phone: "911",
          availability: "Immediate Emergency Response",
          note: "Coral Gables Police & Marine Patrol direct priority access.",
          isEmergency: true,
        },
        {
          role: "Harbormaster & Dock Security Desk",
          phone: "(305) 555-0189",
          availability: "Daily 6:00 AM – 10:00 PM | VHF Ch. 68",
          note: "Marina gate access, weather advisories, and vessel check-in.",
        },
      ],
      policies: [
        {
          code: "MAR-01",
          title: "Land & Vessel Visitor Registration",
          summary: "Unified security protocol for both automobile guests and visiting yachts.",
          bullets: [
            "QR e-Passes required for all non-resident vehicles entering Harbor Crest Causeway.",
            "Visiting vessels must hail the Harbormaster on VHF Channel 68 prior to entering the basin.",
          ],
        },
        {
          code: "MAR-02",
          title: "No-Wake Zone & Sea Turtle Lighting Compliance",
          summary: "Protecting marine life and seawall integrity across all waterways.",
          bullets: [
            "Strict Idle-Speed / No-Wake zone enforced throughout all canals and marina channels.",
            "Waterfront exterior lighting must utilize amber/shielded fixtures during May–October sea turtle nesting season.",
          ],
        },
      ],
    },
    location: {
      headline: "Secluded Peninsula Living in the Heart of Coral Gables.",
      subtitle:
        "Located off Old Cutler Road along Biscayne Bay, Aurelia Shores offers direct ocean access with no fixed bridges and effortless proximity to Coconut Grove, Brickell, and MIA.",
      directionsFromNorth:
        "From US-1 / Brickell: Head south on S Dixie Hwy (US-1), turn left onto Granada Blvd through Coral Gables to Old Cutler Road, then head south 2.4 miles to Harbor Crest Boulevard.",
      directionsFromSouth:
        "From Pinecrest / Palmetto Expy: Take Old Cutler Road north past Fairchild Tropical Botanic Garden for 1.2 miles; the Aurelia Shores Causeway Gatehouse is on your right.",
      transitAndAccessNote:
        "All guests and deliveries must enter via the Main Causeway Gatehouse at 800 Harbor Crest Blvd.",
      nearbyLandmarks: [
        { name: "Fairchild Tropical Botanic Garden", category: "Botanical Sanctuary", distance: "1.2 miles", driveTime: "3 mins" },
        { name: "Gulliver Prep & Ransom Everglades", category: "Premier Schools", distance: "2.6 miles", driveTime: "6 mins" },
        { name: "Merrick Park & Miracle Mile", category: "Luxury Shopping & Dining", distance: "4.1 miles", driveTime: "10 mins" },
        { name: "Miami International Airport (MIA)", category: "International Airport", distance: "11.5 miles", driveTime: "22 mins" },
      ],
      mapPins: [
        {
          id: "as-pin-1",
          name: "Harbor Crest Main Causeway Gatehouse",
          category: "Gatehouse",
          xPercent: 30,
          yPercent: 45,
          addressOrZone: "800 Harbor Crest Blvd",
          description: "24/7 staffed causeway entrance and visitor reception.",
          hoursOrDistance: "Open 24/7",
        },
        {
          id: "as-pin-2",
          name: "Aurelia Bayside Clubhouse & 42-Slip Marina",
          category: "Clubhouse & Pool",
          xPercent: 68,
          yPercent: 48,
          addressOrZone: "Marina Point Peninsula",
          description: "Waterfront clubhouse, saltwater infinity pool, and deepwater yacht slips.",
          hoursOrDistance: "Daily 6:30 AM – 10:30 PM",
        },
      ],
    },
    boardAndManagement: {
      governanceStatement:
        "Governed by a five-member homeowner Board of Directors and managed on-site by a licensed Florida CAM executive team and full-time Harbormaster.",
      meetingSchedule: "Third Wednesday of every month at 6:00 PM in The Regatta Room.",
      members: [
        {
          id: "as-bm-1",
          name: "Carlos Mendoza-Vega",
          position: "President · Board of Directors",
          roleType: "Board of Directors",
          termOrDepartment: "Term: 2025 – 2027",
          bio: "Maritime attorney and 15-year resident leading coastal infrastructure and reserve stewardship.",
          focusAreas: ["Seawall & Marina Capital Plan", "Governance & Legal"],
          publicEmail: "president@aureliashoreshoa.org",
          imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "as-bm-2",
          name: "Victoria Sterling, LCAM",
          position: "General Manager",
          roleType: "Management Team",
          termOrDepartment: "On-Site Executive Office",
          bio: "Licensed Florida Community Association Manager overseeing club, marina, and estate operations.",
          focusAreas: ["Club & Marina Operations", "Resident Concierge"],
          publicEmail: "gm@aureliashoreshoa.org",
          imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        },
      ],
    },
    testimonials: [
      {
        id: "as-test-1",
        residentName: "Alejandro & Sofia Navarro",
        enclave: "Harbor Crest Point",
        residentSince: "Homeowners since 2014",
        quote:
          "Having our boat steps from the Clubhouse while our kids walk safely to clay-court tennis clinics makes every weekend feel like an island getaway.",
        highlightTag: "Yachting & Family Community",
        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      },
    ],
    documents: [
      {
        id: "as-doc-1",
        code: "GOV-AS-CCR",
        title: "Master Declaration of Covenants & Marina Dockage Charter",
        category: "Governing Documents",
        version: "v5.1",
        updatedDate: "February 12, 2026",
        fileSize: "3.1 MB · PDF",
        summary: "Governing covenants for residential lots, seawall maintenance easements, and sovereign submerged land slip assignments.",
        keySections: [
          {
            heading: "Article I – Waterfront Lots & Seawall Standards",
            content: "Establishes uniform coral-stone seawall elevations and clean-marina environmental rules.",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "as-faq-1",
        category: "Amenities & Access",
        question: "How are marina slips assigned to homeowners?",
        answer:
          "All 42 deepwater slips are exclusively deeded or leased to Aurelia Shores homeowners through the Harbormaster Registry. Current slip availability and transient guest dock reservations can be viewed in the Resident Portal.",
      },
    ],
    socials: [
      { platform: "Instagram", handle: "@AureliaShoresClub", url: "#contact" },
      { platform: "Facebook", handle: "Aurelia Shores HOA", url: "#contact" },
    ],
  },
  {
    id: "solana-ridge",
    slug: "solana-ridge",
    name: "Solana Ridge Reserve",
    shortName: "Solana Ridge HOA",
    tagline: "Elevated Desert Modernism Framed by Red Rock Canyons",
    establishedYear: 2016,
    locationCityState: "Scottsdale, AZ",
    fullAddress: "22500 Canyon Rim Drive, Scottsdale, AZ 85255",
    gpsCoordinates: "33.7125° N, 111.8492° W",
    gatehousePhone: "(480) 555-0177",
    officePhone: "(480) 555-0130",
    publicEmail: "concierge@solanaridgehoa.org",
    arcEmail: "design@solanaridgehoa.org",
    officeHours: "Mon – Fri: 8:00 AM – 5:00 PM | Sat: 8:30 AM – 12:30 PM",
    gateStatusText: "Canyon & Summit Gates Operational · 24/7 Desert Patrol",
    nextBoardMeeting: "Tuesday, Nov 17, 2026 · 6:00 PM at The Saguaro Pavilion",
    theme: {
      id: "desert-canyon",
      name: "High-Desert Canyon & Modernist Clay",
      bgPrimary: "#FAF6F0",
      bgSecondary: "#F1EAE0",
      bgDark: "#211E1B",
      textPrimary: "#231F1C",
      textSecondary: "#635A52",
      accentPrimary: "#8C3F27",
      accentSecondary: "#3E5448",
      borderSubtle: "#E4D9C8",
    },
    hero: {
      eyebrow: "EST. 2016 · HIGH-SONORAN DESERT PRESERVE COMMUNITY",
      headline: "Organic Desert Architecture Sculpted Into the McDowell Foothills.",
      description:
        "Surrounded by 850 acres of protected Sonoran saguaro preserve and dramatic granite boulders, Solana Ridge Reserve unites low-profile desert modernism with world-class wellness, racquet, and trail amenities.",
      scenes: [
        {
          id: "scene-canyon",
          label: "Canyon Rim Residences",
          title: "Rammed-Earth & weathered Steel Desert Estates",
          subtitle: "390 custom homes designed to blend seamlessly into the McDowell Foothills.",
          imageUrl:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
          caption: "Summit Enclave — Rammed Earth Residence at Desert Dusk",
          timeOfDay: "Alpenglow · 6:05 PM",
        },
      ],
    },
    about: {
      eyebrow: "CHAPTER I · ABOUT THE SUBDIVISION",
      headline: "Built in Reverence to the Sonoran Desert Landscape.",
      leadParagraph:
        "Established in 2016 at the base of the McDowell Sonoran Preserve, Solana Ridge Reserve was crafted for homeowners who value organic modern architecture, starry desert skies, and active outdoor wellness.",
      secondaryParagraph:
        "Every home lot features a natural desert envelope where native saguaros, palo verde trees, and granite outcroppings remain untouched.",
      mission:
        "To preserve the fragile beauty of our high-desert sanctuary while providing exceptional wellness amenities and fiscally sound governance.",
      vision:
        "To set the benchmark for desert conservation communities across the American Southwest.",
      architecturalNote:
        "Residences adhere to strict natural light-reflectance values (LRV), utilizing rammed earth, Corten steel, and cantilevered shade overhangs.",
      featuredImageUrl:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
      secondaryImageUrl:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      coreValues: [
        {
          principleCode: "VAL-01",
          title: "Sonoran Habitat Preservation",
          description: "Protecting ancient saguaro cacti, wildlife corridors, and International Dark-Sky sanctuary standards.",
        },
        {
          principleCode: "VAL-02",
          title: "Desert Modernist Craft",
          description: "Honoring the terrain with low-profile silhouettes and organic desert materials.",
        },
      ],
      milestones: [
        {
          year: "2016",
          title: "Dedication of the 850-Acre Desert Preserve",
          description: "Establishment of permanent conservation easements bordering the McDowell Mountains.",
        },
      ],
    },
    stats: [
      { id: "sr-1", value: 390, suffix: "", label: "Desert Modern Residences", detail: "Integrated with natural desert envelopes", code: "RES-390" },
      { id: "sr-2", value: 10, suffix: " Yrs", label: "Established Sanctuary", detail: "Chartered in 2016 with 100% funded reserves", code: "EST-2016" },
      { id: "sr-3", value: 850, suffix: " Ac", label: "Protected Sonoran Preserve", detail: "Direct private trailhead access", code: "PRV-850" },
      { id: "sr-4", value: 52, suffix: "+", label: "Wellness & Astronomy Nights", detail: "Guided hikes, stargazing & culinary nights", code: "EVT-52" },
    ],
    amenities: [
      {
        id: "sr-am-1",
        name: "The Saguaro Canyon Clubhouse & Stargazing Deck",
        category: "Clubhouse & Social",
        status: "Open Now",
        hours: "Daily · 5:30 AM – 10:00 PM",
        location: "22500 Canyon Rim Drive",
        capacity: "160 Guests",
        description: "Rammed-earth pavilion featuring negative-edge canyon pools, telescope stargazing terrace, and desert botanical courtyard.",
        highlights: ["Telescope Stargazing Deck", "Negative-Edge Heated Canyon Lap Pool", "Desert Contrast Spa"],
        guidelines: ["Resident credential required."],
        imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        reservationNote: "Available via Resident Portal.",
      },
    ],
    announcements: [
      {
        id: "sr-ann-1",
        referenceCode: "DES-2026-41",
        title: "Autumn Dark-Sky Astronomy Night & Trailhead Maintenance",
        category: "Community Update",
        priority: "Community News",
        date: "October 18, 2026",
        effectivePeriod: "November 2026",
        summary: "Join our resident astrophysicist on the Stargazing Deck this Friday at 7:30 PM.",
        fullDetails: ["Telescopes provided on the North Canyon Terrace."],
        affectedAreas: "Saguaro Pavilion",
        contactDepartment: "Lifestyle Desk · concierge@solanaridgehoa.org",
      },
    ],
    events: [
      {
        id: "sr-evt-1",
        title: "Sonoran Deep-Sky Telescope Night & Desert Wine Tasting",
        category: "Wellness & Recreation",
        date: "Friday, November 13, 2026",
        monthShort: "NOV",
        dayNumeric: "13",
        time: "7:00 PM – 9:30 PM",
        location: "Canyon Rim Stargazing Terrace",
        summary: "Guided observation of Saturn and the Andromeda Galaxy under our certified Dark-Sky canopy.",
        agenda: ["7:00 PM — Wine Reception", "7:45 PM — Guided Telescope Viewing"],
        organizer: "Astronomy & Conservation Club",
        isPublicWelcome: false,
        imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    gallery: [
      {
        id: "sr-gal-1",
        title: "Desert Modernist Residence at Canyon Rim",
        category: "Architecture & Streetscapes",
        location: "Summit Enclave",
        photographerNote: "Low-profile rammed earth and desert xeriscaping.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        aspect: "wide",
      },
    ],
    safety: {
      headline: "24/7 Canyon Gatehouse & Firewise Desert Stewardship",
      subtitle: "Round-the-clock staffed entry gates and proactive desert wildlife & Firewise safety protocols.",
      patrolStatus: "Active 24/7 · Canyon & Summit Gates",
      visitorPassNote: "Digital QR guest passes required for all visitors.",
      contacts: [
        { role: "Canyon Main Gatehouse", phone: "(480) 555-0177", availability: "24/7", note: "Visitor & patrol dispatch." },
        { role: "Emergency Fire / EMS", phone: "911", availability: "Immediate", note: "Scottsdale Fire Dept direct gate preemption.", isEmergency: true },
      ],
      policies: [
        {
          code: "DES-01",
          title: "Dark-Sky Exterior Lighting & Wildlife Corridor Policy",
          summary: "Zero-uplight exterior fixtures and desert wildlife awareness.",
          bullets: ["All exterior fixtures must be fully shielded (2700K max).", "Do not feed desert wildlife; keep pets leashed on trails."],
        },
      ],
    },
    location: {
      headline: "High in North Scottsdale's McDowell Mountain Corridor.",
      subtitle: "Minutes from Loop 101, Scottsdale Quarter, and direct McDowell Sonoran Preserve trailheads.",
      directionsFromNorth: "From Loop 101: Exit Pima Road North to Thompson Peak Parkway East, then follow Canyon Rim Drive to the Main Gatehouse.",
      directionsFromSouth: "From Central Scottsdale: Head north on Hayden or Pima Road to Thompson Peak Parkway.",
      transitAndAccessNote: "Visitors enter via 22500 Canyon Rim Drive.",
      nearbyLandmarks: [
        { name: "McDowell Sonoran Preserve Gateway", category: "Wilderness Trails", distance: "1.1 miles", driveTime: "3 mins" },
        { name: "Scottsdale Quarter & Kierland Commons", category: "Dining & Retail", distance: "5.8 miles", driveTime: "11 mins" },
      ],
      mapPins: [
        {
          id: "sr-pin-1",
          name: "Canyon Rim Main Gatehouse",
          category: "Gatehouse",
          xPercent: 45,
          yPercent: 35,
          addressOrZone: "22500 Canyon Rim Drive",
          description: "24/7 staffed visitor gatehouse.",
          hoursOrDistance: "Open 24/7",
        },
      ],
    },
    boardAndManagement: {
      governanceStatement: "Resident-elected Board of Directors and full-time on-site management team.",
      meetingSchedule: "Third Tuesday of each quarter at 6:00 PM.",
      members: [
        {
          id: "sr-bm-1",
          name: "Lauren Kincaid",
          position: "Board President",
          roleType: "Board of Directors",
          termOrDepartment: "Term: 2025 – 2027",
          bio: "Conservation advocate and 9-year Solana Ridge homeowner.",
          focusAreas: ["Preserve Stewardship", "Architectural Review"],
          publicEmail: "president@solanaridgehoa.org",
          imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
        },
      ],
    },
    testimonials: [
      {
        id: "sr-test-1",
        residentName: "Grant & Maya Lindstrom",
        enclave: "Canyon Summit",
        residentSince: "Homeowners since 2018",
        quote: "Waking up to saguaro silhouettes and hiking straight from our cul-de-sac into 850 acres of preserve is magical.",
        highlightTag: "Desert Preserve Living",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      },
    ],
    documents: [
      {
        id: "sr-doc-1",
        code: "GOV-SR-CCR",
        title: "Solana Ridge Reserve Master CC&Rs & Natural Desert Envelope Guide",
        category: "Governing Documents",
        version: "v3.0",
        updatedDate: "January 20, 2026",
        fileSize: "2.8 MB · PDF",
        summary: "Governing covenants and Natural Area Open Space (NAOS) protection guidelines.",
        keySections: [
          {
            heading: "Article III – Natural Area Open Space (NAOS)",
            content: "Preserves native desert vegetation and wildlife corridors across every residential lot.",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "sr-faq-1",
        category: "Architectural (ARC)",
        question: "What are the Natural Area Open Space (NAOS) rules on my lot?",
        answer:
          "Each lot includes a designated NAOS conservation perimeter that must remain in its natural Sonoran desert state free of turf or perimeter walls.",
      },
    ],
    socials: [
      { platform: "Instagram", handle: "@SolanaRidgeReserve", url: "#contact" },
      { platform: "Facebook", handle: "Solana Ridge Reserve HOA", url: "#contact" },
      { platform: "LinkedIn", handle: "Solana Ridge Community Association", url: "#contact" },
    ],
  },
];

export function getTenantById(id: string): HoaTenantConfig {
  const defaultTenant = HOA_TENANTS[0]!;
  const found = HOA_TENANTS.find((t) => t.id === id);
  if (!found || found.id === defaultTenant.id) {
    return defaultTenant;
  }
  return {
    ...found,
    hero: {
      ...found.hero,
      scenes: found.hero.scenes.length >= 3 ? found.hero.scenes : [...found.hero.scenes, ...defaultTenant.hero.scenes.slice(found.hero.scenes.length)],
    },
    about: {
      ...found.about,
      coreValues: found.about.coreValues.length >= 4 ? found.about.coreValues : [...found.about.coreValues, ...defaultTenant.about.coreValues.slice(found.about.coreValues.length)],
      milestones: found.about.milestones.length >= 4 ? found.about.milestones : [...found.about.milestones, ...defaultTenant.about.milestones.slice(found.about.milestones.length)],
    },
    amenities: found.amenities.length >= 6 ? found.amenities : [...found.amenities, ...defaultTenant.amenities.slice(found.amenities.length)],
    announcements: found.announcements.length >= 4 ? found.announcements : [...found.announcements, ...defaultTenant.announcements.slice(found.announcements.length)],
    events: found.events.length >= 4 ? found.events : [...found.events, ...defaultTenant.events.slice(found.events.length)],
    gallery: found.gallery.length >= 6 ? found.gallery : [...found.gallery, ...defaultTenant.gallery.slice(found.gallery.length)],
    safety: {
      ...found.safety,
      contacts: found.safety.contacts.length >= 4 ? found.safety.contacts : [...found.safety.contacts, ...defaultTenant.safety.contacts.slice(found.safety.contacts.length)],
      policies: found.safety.policies.length >= 3 ? found.safety.policies : [...found.safety.policies, ...defaultTenant.safety.policies.slice(found.safety.policies.length)],
    },
    location: {
      ...found.location,
      nearbyLandmarks: found.location.nearbyLandmarks.length >= 6 ? found.location.nearbyLandmarks : [...found.location.nearbyLandmarks, ...defaultTenant.location.nearbyLandmarks.slice(found.location.nearbyLandmarks.length)],
      mapPins: found.location.mapPins.length >= 5 ? found.location.mapPins : [...found.location.mapPins, ...defaultTenant.location.mapPins.slice(found.location.mapPins.length)],
    },
    boardAndManagement: {
      ...found.boardAndManagement,
      members: found.boardAndManagement.members.length >= 6 ? found.boardAndManagement.members : [...found.boardAndManagement.members, ...defaultTenant.boardAndManagement.members.slice(found.boardAndManagement.members.length)],
    },
    testimonials: found.testimonials.length >= 3 ? found.testimonials : [...found.testimonials, ...defaultTenant.testimonials.slice(found.testimonials.length)],
    documents: found.documents.length >= 6 ? found.documents : [...found.documents, ...defaultTenant.documents.slice(found.documents.length)],
    faqs: found.faqs.length >= 6 ? found.faqs : [...found.faqs, ...defaultTenant.faqs.slice(found.faqs.length)],
  };
}

