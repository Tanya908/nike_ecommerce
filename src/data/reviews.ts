import type { Review } from "../types/product";

export const reviews: Review[] = [
    // Nike Air Force 1 '07 — Men's Shoes
    {
        id: "review-1",
        productId: "air-force-1",
        author: "John D.",
        rating: 5,
        title: "Perfect everyday sneakers",
        comment:
            "Very comfortable from the first wear. The cushioning feels great, and the leather quality is excellent. I've been wearing them daily and they're still in perfect condition.",
        date: "May 12, 2025",
    },
    {
        id: "review-2",
        productId: "air-force-1",
        author: "Emma R.",
        rating: 4,
        title: "Great style and comfort",
        comment:
            "These sneakers match almost every outfit. They fit true to size and are comfortable enough for long walks. The sole is solid and durable — I've had no issues after three months of regular use.",
        date: "June 3, 2025",
    },
    {
        id: "review-3",
        productId: "air-force-1",
        author: "Carlos M.",
        rating: 5,
        title: "A classic that never gets old",
        comment:
            "Bought my third pair of AF1s and they never disappoint. The all-white colorway stays clean longer than I expected, and the padded collar makes them really comfortable to wear all day.",
        date: "March 21, 2025",
    },
    {
        id: "review-4",
        productId: "air-force-1",
        author: "Sophie W.",
        rating: 3,
        title: "Nice look, runs a little narrow",
        comment:
            "I love the aesthetic but my feet are slightly wide so they were a bit tight at first. After breaking them in they're fine, but I'd suggest going half a size up if you have wider feet.",
        date: "January 9, 2025",
    },

    // Nike Air Max 90 — Women's Shoes
    {
        id: "review-5",
        productId: "air-max-90",
        author: "Aisha T.",
        rating: 5,
        title: "Iconic silhouette, incredible comfort",
        comment:
            "I've always loved the Air Max 90 design, and wearing them is just as good as looking at them. The visible Air unit in the heel makes a real difference — so much bounce and cushioning for city walks.",
        date: "February 14, 2025",
    },
    {
        id: "review-6",
        productId: "air-max-90",
        author: "Laura K.",
        rating: 4,
        title: "Stylish and supportive",
        comment:
            "Really happy with this purchase. The mesh upper is breathable and the sole provides excellent support. Wore them during a full day of sightseeing and my feet felt great.",
        date: "April 5, 2025",
    },
    {
        id: "review-7",
        productId: "air-max-90",
        author: "Nicole B.",
        rating: 5,
        title: "Better than I remembered",
        comment:
            "Had a pair back in the day and decided to revisit the silhouette. The modern version feels even more refined. The materials feel premium and the Air cushioning is noticeably plush.",
        date: "May 30, 2025",
    },
    {
        id: "review-8",
        productId: "air-max-90",
        author: "Grace H.",
        rating: 4,
        title: "Love the colorway",
        comment:
            "Ordered the grey and white colorway and it goes with everything. Fits true to size, lacing system is secure, and the tongue doesn't slip. Would love more color options.",
        date: "March 8, 2025",
    },

    // Nike Dunk Low — Lifestyle Shoes
    {
        id: "review-9",
        productId: "dunk-low",
        author: "Jake P.",
        rating: 5,
        title: "Worth every cent",
        comment:
            "The Dunk Low has earned its hype. Clean lines, great materials, and surprisingly comfortable right out of the box. The padded collar provides great ankle support for a low-top.",
        date: "January 22, 2025",
    },
    {
        id: "review-10",
        productId: "dunk-low",
        author: "Priya S.",
        rating: 4,
        title: "Versatile everyday shoe",
        comment:
            "Wore these with jeans, joggers, and even a skirt — they work with everything. The leather feels sturdy and the two-tone upper is eye-catching without being flashy.",
        date: "March 15, 2025",
    },
    {
        id: "review-11",
        productId: "dunk-low",
        author: "Marcus L.",
        rating: 5,
        title: "Exceeded my expectations",
        comment:
            "I was skeptical about the fit since I usually wear running shoes, but these broke in super quickly. The rubber cupsole is grippy and the stitching looks premium. A great lifestyle pick.",
        date: "April 27, 2025",
    },
    {
        id: "review-12",
        productId: "dunk-low",
        author: "Tamsin O.",
        rating: 3,
        title: "Great shoe, sizing issue",
        comment:
            "Love the style but they ran about half a size large for me. Exchanged for a smaller size and everything's fine now. The actual shoe quality is excellent — just order accordingly.",
        date: "February 2, 2025",
    },

    // Nike Pegasus 41 — Running Shoes
    {
        id: "review-13",
        productId: "pegasus-41",
        author: "Daniel F.",
        rating: 5,
        title: "My go-to daily trainer",
        comment:
            "I've been running in the Pegasus series for years and the 41 is the best yet. The ReactX foam feels more responsive than previous versions and my knees thank me after long runs. Perfect for 5K to half marathon training.",
        date: "January 31, 2025",
    },
    {
        id: "review-14",
        productId: "pegasus-41",
        author: "Chloe M.",
        rating: 4,
        title: "Reliable and comfortable",
        comment:
            "Solid trainer for everyday running. The fit is snug without being restrictive and the forefoot flexibility feels natural in my stride. Cushioning holds up well even after 200+ miles.",
        date: "March 20, 2025",
    },
    {
        id: "review-15",
        productId: "pegasus-41",
        author: "Ryan T.",
        rating: 5,
        title: "Handles everything I throw at it",
        comment:
            "Road running, treadmill, light trails — the Peg 41 handles it all. The updated upper wraps the foot nicely and there's no hot spots or rubbing. Breathability is top tier.",
        date: "May 7, 2025",
    },
    {
        id: "review-16",
        productId: "pegasus-41",
        author: "Isabelle G.",
        rating: 4,
        title: "Great upgrade from the previous version",
        comment:
            "The added stack height makes recovery runs much more comfortable. Slightly heavier than I'd like for tempo days, but as a daily trainer it's nearly perfect.",
        date: "June 11, 2025",
    },

    // Air Jordan 1 Mid — Basketball Shoes
    {
        id: "review-17",
        productId: "air-jordan-1-mid",
        author: "Darius W.",
        rating: 5,
        title: "Court ready and street approved",
        comment:
            "The Jordan 1 Mid delivers on both style and performance. The high-top construction gives solid ankle lockdown and the Nike Air cushioning handles landing impact well. I wear them on and off the court.",
        date: "February 19, 2025",
    },
    {
        id: "review-18",
        productId: "air-jordan-1-mid",
        author: "Kira J.",
        rating: 5,
        title: "Legendary design, modern comfort",
        comment:
            "These are everything I expected from a Jordan. The leather quality is premium, the Wings logo detail looks sharp, and the rubber outsole provides excellent traction on indoor courts.",
        date: "April 14, 2025",
    },
    {
        id: "review-19",
        productId: "air-jordan-1-mid",
        author: "Andre N.",
        rating: 4,
        title: "Great basketball sneaker",
        comment:
            "Played in these for a few pickup games and they feel stable and well-cushioned. The toe cap holds up nicely against court scuffs. Could use slightly more cushion in the heel for my taste.",
        date: "May 25, 2025",
    },
    {
        id: "review-20",
        productId: "air-jordan-1-mid",
        author: "Tanya R.",
        rating: 5,
        title: "Best sneaker purchase this year",
        comment:
            "Ordered the black and red colorway and they look stunning in person. Comfortable for long periods of wear, and the padded collar keeps my ankle secure. Getting a second pair for sure.",
        date: "March 3, 2025",
    },

    // Nike Court Vision Low — Women's Shoes
    {
        id: "review-21",
        productId: "court-vision",
        author: "Maya C.",
        rating: 5,
        title: "Simple and polished",
        comment:
            "These are the perfect clean sneaker for everyday wear. The low-profile silhouette looks sleek and the leather upper keeps its shape really well. I've worn them non-stop since I got them.",
        date: "February 28, 2025",
    },
    {
        id: "review-22",
        productId: "court-vision",
        author: "Hannah P.",
        rating: 4,
        title: "Light and easy to style",
        comment:
            "Very lightweight compared to other court-inspired sneakers I've tried. Fits true to size and the foam midsole is comfortable for standing long hours at work. A solid everyday option.",
        date: "April 9, 2025",
    },
    {
        id: "review-23",
        productId: "court-vision",
        author: "Vivian L.",
        rating: 4,
        title: "Great value, classic look",
        comment:
            "Understated and versatile — exactly what I was looking for. The perforated toe adds a nice detail and the rubber outsole has good grip on smooth floors. Happy with the quality at this price point.",
        date: "June 17, 2025",
    },

    // Nike Blazer Mid '77 — Lifestyle Shoes
    {
        id: "review-24",
        productId: "blazer-mid",
        author: "Oscar V.",
        rating: 5,
        title: "Retro vibes done right",
        comment:
            "The Blazer Mid '77 nails that vintage basketball aesthetic. The distressed midsole finish is a cool detail that makes it look worn in without sacrificing quality. Fits perfectly and is extremely comfortable.",
        date: "January 14, 2025",
    },
    {
        id: "review-25",
        productId: "blazer-mid",
        author: "Nina F.",
        rating: 4,
        title: "A wardrobe essential",
        comment:
            "These replaced my old canvas high-tops and I couldn't be happier. The leather holds its shape even after months of wear and the foam midsole keeps things comfortable throughout the day.",
        date: "March 28, 2025",
    },
    {
        id: "review-26",
        productId: "blazer-mid",
        author: "Ben A.",
        rating: 5,
        title: "Goes with literally everything",
        comment:
            "From casual jeans to smarter outfits — the Blazer Mid just works. The color blocking is subtle enough to be versatile and the high-top collar keeps things interesting. Highly recommend.",
        date: "May 4, 2025",
    },
    {
        id: "review-27",
        productId: "blazer-mid",
        author: "Sofia E.",
        rating: 3,
        title: "Nice shoe, break-in period needed",
        comment:
            "The leather was quite stiff initially and took about two weeks of consistent wear before they felt truly comfortable. Once broken in they're great, but it's worth noting if you plan to wear them straight away.",
        date: "February 10, 2025",
    },

    // Nike Revolution 8 — Kids' Shoes
    {
        id: "review-28",
        productId: "revolution-8",
        author: "Sarah K.",
        rating: 5,
        title: "My son refuses to wear anything else",
        comment:
            "Bought these for my 8-year-old and he absolutely loves them. The lace design makes it easy for him to put them on himself and they're holding up great on the playground. Durable and comfortable.",
        date: "February 6, 2025",
    },
    {
        id: "review-29",
        productId: "revolution-8",
        author: "Tom B.",
        rating: 4,
        title: "Great fit for active kids",
        comment:
            "My daughter wears these for PE and after-school activities. They provide good support for her growing feet and the breathable mesh upper keeps things cool. Sizing is accurate — no need to size up.",
        date: "April 22, 2025",
    },
    {
        id: "review-30",
        productId: "revolution-8",
        author: "Rachel M.",
        rating: 5,
        title: "Lightweight and easy to clean",
        comment:
            "These are the lightest kids' shoes I've come across. My son runs around all day in them and never complains about tired feet. Cleaning the mesh is quick with a damp cloth — perfect for messy kids.",
        date: "June 1, 2025",
    },

    // Nike Vomero 18 — Running Shoes
    {
        id: "review-31",
        productId: "vomero-18",
        author: "Kevin O.",
        rating: 5,
        title: "The plushest run I've ever had",
        comment:
            "The Vomero 18 is a cloud of a running shoe. The thick foam stack makes long slow miles feel effortless and my legs feel noticeably fresher after recovery runs. Worth every penny.",
        date: "January 18, 2025",
    },
    {
        id: "review-32",
        productId: "vomero-18",
        author: "Erin S.",
        rating: 5,
        title: "Perfect recovery run companion",
        comment:
            "I use these specifically for my easy and recovery runs and they're brilliant for that purpose. The wide base is stable, the upper is accommodating, and the foam stays plush even after 300 miles.",
        date: "March 12, 2025",
    },
    {
        id: "review-33",
        productId: "vomero-18",
        author: "Aaron J.",
        rating: 4,
        title: "Superb cushioning, slightly heavy",
        comment:
            "Hands down the most cushioned shoe I've ever worn. The trade-off is that they're a bit heavier than my usual trainers, so I wouldn't race in them. For long comfortable miles they're unmatched.",
        date: "May 16, 2025",
    },
    {
        id: "review-34",
        productId: "vomero-18",
        author: "Leah N.",
        rating: 4,
        title: "Ideal for high-mileage weeks",
        comment:
            "Training for my first marathon and the Vomero 18 has been my go-to for the big mileage days. The cushioning protects my joints and the breathable upper keeps my feet from overheating.",
        date: "April 30, 2025",
    },

    // Nike Free Metcon 6 — Training Shoes
    {
        id: "review-35",
        productId: "free-metcon",
        author: "Tyler H.",
        rating: 5,
        title: "Built for the gym floor",
        comment:
            "These are the best training shoes I've owned. The wide, flat heel gives incredible stability for squats and deadlifts, and the forefoot flexibility is perfect for box jumps and rope climbs. A true do-it-all gym shoe.",
        date: "February 25, 2025",
    },
    {
        id: "review-36",
        productId: "free-metcon",
        author: "Jade C.",
        rating: 4,
        title: "Versatile cross-trainer",
        comment:
            "I use these for CrossFit and HIIT classes and they handle everything well. The grip on the outsole is excellent for lateral movements and the reinforced upper holds up to rope work. Highly functional.",
        date: "April 3, 2025",
    },
    {
        id: "review-37",
        productId: "free-metcon",
        author: "Chris V.",
        rating: 5,
        title: "Stable, durable, and comfortable",
        comment:
            "After going through several cross-trainers that fell apart quickly, the Metcon 6 has been a revelation. Six months in and there's no significant wear on the outsole. The heel clip provides a locked-in feel during heavy lifts.",
        date: "January 27, 2025",
    },
    {
        id: "review-38",
        productId: "free-metcon",
        author: "Megan D.",
        rating: 4,
        title: "Great for lifting, okay for running",
        comment:
            "If your workout is mostly lifting with some cardio mixed in, these are ideal. The flat sole is great for weight work but feels a bit stiff for long running segments. For pure cross-training they're hard to beat.",
        date: "June 20, 2025",
    },

    // Nike Invincible 4 — Road Running Shoes
    {
        id: "review-39",
        productId: "invincible-4",
        author: "Patrick S.",
        rating: 5,
        title: "Maximum cushion, maximum comfort",
        comment:
            "The Invincible 4 is in a league of its own for long-distance road running. The foam is incredibly energetic and the rocker geometry keeps my stride smooth mile after mile. Best long-run shoe I've tried.",
        date: "March 6, 2025",
    },
    {
        id: "review-40",
        productId: "invincible-4",
        author: "Claire B.",
        rating: 5,
        title: "My legs never feel fatigued",
        comment:
            "Since switching to the Invincible 4 for my long runs, my post-run recovery has improved significantly. The thick foam absorbs so much impact and the wide outsole keeps me stable even late in a run.",
        date: "May 20, 2025",
    },
    {
        id: "review-41",
        productId: "invincible-4",
        author: "Liam F.",
        rating: 4,
        title: "Excellent for easy miles",
        comment:
            "These are my Sunday long-run shoes and they've been great. The cushioning is phenomenal and the upper fits securely without pressure points. I wouldn't use them for speedwork but for easy paces they're perfect.",
        date: "April 12, 2025",
    },
    {
        id: "review-42",
        productId: "invincible-4",
        author: "Samantha G.",
        rating: 5,
        title: "Changed my running experience",
        comment:
            "I was dealing with knee pain during marathon training and a physio recommended a maximalist shoe. The Invincible 4 has been a game changer — no knee pain and I've hit 50-mile weeks comfortably.",
        date: "February 17, 2025",
    },

    // Nike Air Max Plus — Lifestyle Shoes
    {
        id: "review-43",
        productId: "air-max-plus",
        author: "Leo M.",
        rating: 5,
        title: "Aggressive style, surprisingly comfortable",
        comment:
            "The TN design is bold and it turns heads everywhere I go. I expected them to sacrifice comfort for style but they're actually really comfortable. The Tuned Air cushioning in the heel feels fantastic on long days.",
        date: "January 5, 2025",
    },
    {
        id: "review-44",
        productId: "air-max-plus",
        author: "Zara A.",
        rating: 4,
        title: "Statement shoe that delivers",
        comment:
            "The gradient colorway is stunning and the layered upper construction is unlike anything else in my rotation. Fits true to size and the rubber outsole has solid traction on wet pavement.",
        date: "March 25, 2025",
    },
    {
        id: "review-45",
        productId: "air-max-plus",
        author: "Shane K.",
        rating: 5,
        title: "Old school cool",
        comment:
            "Been wearing TNs for years and the Air Max Plus still delivers that same satisfaction. The updated materials feel more durable than older versions and the cushioning is noticeably improved.",
        date: "May 10, 2025",
    },
    {
        id: "review-46",
        productId: "air-max-plus",
        author: "Bianca N.",
        rating: 3,
        title: "Stylish but narrow fit",
        comment:
            "Love the look of these shoes but they're cut quite narrow. I have a standard width foot and they felt a bit constricting at first. The style is undeniable but if you have wide feet, size up.",
        date: "June 8, 2025",
    },

    // Nike Flex Runner 3 — Kids' Shoes
    {
        id: "review-47",
        productId: "flex-runner",
        author: "Amy J.",
        rating: 5,
        title: "Perfect for little runners",
        comment:
            "My 6-year-old loves these and I love how easy they are to get on and off. The slip-on design is a huge win for kids who struggle with laces. Very flexible sole and lightweight enough that she barely notices she's wearing shoes.",
        date: "February 12, 2025",
    },
    {
        id: "review-48",
        productId: "flex-runner",
        author: "David C.",
        rating: 4,
        title: "Durable for energetic kids",
        comment:
            "Bought these for my 7-year-old who destroys shoes within weeks. Three months in and these are still holding up great. The foam midsole keeps his feet comfortable during sports day and the grip is solid on grass and gym floors.",
        date: "April 17, 2025",
    },
    {
        id: "review-49",
        productId: "flex-runner",
        author: "Natalie R.",
        rating: 5,
        title: "My daughter asks for these by name",
        comment:
            "She saw a friend wearing them and had to have a pair. They fit great, look fun, and are genuinely comfortable for all-day wear at school. Sizing runs true and the colors are vibrant. We'll definitely repurchase.",
        date: "May 29, 2025",
    },

    // Nike Air Max Dn — Lifestyle Shoes
    {
        id: "review-50",
        productId: "air-max-dn",
        author: "Jordan P.",
        rating: 5,
        title: "The future of Air Max",
        comment:
            "The Dual Air system is genuinely different from anything else Nike makes. You can actually feel the dynamic cushioning adjusting as you walk. Bold design that gets compliments constantly. Worth the investment.",
        date: "March 18, 2025",
    },
    {
        id: "review-51",
        productId: "air-max-dn",
        author: "Fiona T.",
        rating: 5,
        title: "Head-turning and comfortable",
        comment:
            "Ordered these on a whim after seeing them online and I'm so glad I did. The upper is comfortable from day one and the cushioning feels uniquely soft compared to standard Air Max models. Very futuristic look.",
        date: "May 3, 2025",
    },
    {
        id: "review-52",
        productId: "air-max-dn",
        author: "Will E.",
        rating: 4,
        title: "Innovative cushioning system",
        comment:
            "The Dual Air unit is genuinely noticeable and feels unlike any other shoe I've worn. The top-load Air tube gives a soft, springy feel underfoot. Only minor issue is the tongue slips slightly — otherwise excellent.",
        date: "February 22, 2025",
    },
    {
        id: "review-53",
        productId: "air-max-dn",
        author: "Rosa I.",
        rating: 4,
        title: "Bold choice that pays off",
        comment:
            "These are not subtle shoes — and I love them for it. The chunky sole and bright colorway are exactly what my wardrobe needed. Comfortable for walking all day and the materials feel premium.",
        date: "June 15, 2025",
    },

    // Nike Zoom Fly 6 — Performance Running Shoes
    {
        id: "review-54",
        productId: "zoom-fly-6",
        author: "Ethan R.",
        rating: 5,
        title: "Race-day performance in a training shoe",
        comment:
            "The carbon fiber plate in the Zoom Fly 6 gives a propulsive toe-off that makes fast running feel effortless. Wore these for a half marathon PR and they were a huge part of that result. Highly recommend for any serious runner.",
        date: "April 6, 2025",
    },
    {
        id: "review-55",
        productId: "zoom-fly-6",
        author: "Olivia M.",
        rating: 5,
        title: "Fastest shoe I've ever trained in",
        comment:
            "Used the Zoom Fly 6 for my tempo runs and the difference is immediately noticeable. The plate snaps you forward and the ReactX foam keeps the energy return high. Fit is snug and secure — no heel slippage.",
        date: "February 8, 2025",
    },
    {
        id: "review-56",
        productId: "zoom-fly-6",
        author: "Nathan C.",
        rating: 5,
        title: "Exceptional for speed work",
        comment:
            "I use these specifically for track workouts and tempo runs. The stiff plate and aggressive rocker make sub-4:00/km pace feel sustainable. Cushioning is just right — firm enough to be fast, soft enough not to beat up your legs.",
        date: "May 22, 2025",
    },
    {
        id: "review-57",
        productId: "zoom-fly-6",
        author: "Alicia D.",
        rating: 4,
        title: "Great race-day option",
        comment:
            "Ran my first sub-2-hour half in these. The plate provides noticeable propulsion and the upper is comfortable without being loose. I'd recommend them as a race or tempo shoe rather than a daily trainer given the firm midsole.",
        date: "March 30, 2025",
    },
    {
        id: "review-58",
        productId: "zoom-fly-6",
        author: "Marcus T.",
        rating: 4,
        title: "Carbon plate makes a real difference",
        comment:
            "Skeptical about carbon plates until I tried the Zoom Fly 6. The stiffness translates energy into forward momentum in a way no foam-only shoe can replicate. Durable enough to last a full training block without any breakdown.",
        date: "June 24, 2025",
    },
];
