const sampleListings =
[
  {
    title: "Aromatherapy Boost",
    category: "Starter",
    description: "Light a scented candle or diffuse essential oils to create a soothing atmosphere and lift your mood.",
    mood_benefit: ["Relaxation", "Calmness"],
    tools_needed: ["Essential oils", "Diffuser", "Scented candles"],
    tags: ["self-care", "aromatherapy", "relaxation"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/483/483356.png"
  },
  {
    title: "Fresh Flowers Uplift",
    category: "Starter",
    description: "Place fresh flowers in your space to instantly brighten your mood and surroundings.",
    mood_benefit: ["Joy", "Appreciation"],
    tools_needed: ["Vase", "Flowers"],
    tags: ["decor", "nature", "mood boost"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/616/616430.png"
  },
  {
    title: "Comfort Sips & Green Sips",
    category: "Starter",
    description: "Prepare a cozy hot drink or an energizing green juice to recharge your body and mind.",
    mood_benefit: ["Comfort", "Hydration"],
    tools_needed: ["Mug", "Juicer", "Ingredients"],
    tags: ["nutrition", "hydration", "comfort"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/3500/3500893.png"
  },
  {
    title: "Feel-Good Snacking",
    category: "Starter",
    description: "Enjoy a tasty, nutritious snack to fuel your body and satisfy cravings.",
    mood_benefit: ["Energy", "Satisfaction"],
    tools_needed: ["Snack bowl"],
    tags: ["nutrition", "energy", "feel-good"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/590/590836.png"
  },
  {
    title: "Mini Cleanup Reset",
    category: "Starter",
    description: "Tidy a small area of your home to boost mental clarity and feel refreshed.",
    mood_benefit: ["Focus", "Calm"],
    tools_needed: ["Storage boxes", "Dust cloth"],
    tags: ["clean", "space", "reset"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/6395/6395164.png"
  },
  {
    title: "Inspiration Pinning",
    category: "Starter",
    description: "Browse Pinterest for aesthetic or motivational content that sparks joy or ideas.",
    mood_benefit: ["Inspiration", "Creativity"],
    tools_needed: ["Phone", "Pinterest app"],
    tags: ["digital", "visual", "creative"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
  },
  {
    title: "Steam Shower Reset",
    category: "Starter",
    description: "Take a hot shower to melt stress and renew your senses.",
    mood_benefit: ["Calm", "Reset"],
    tools_needed: ["Shower", "Towel"],
    tags: ["hygiene", "relaxation", "self-care"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/4003/4003005.png"
  },
  {
    title: "DIY Creative Flow",
    category: "Main Course",
    description: "Engage in a creative hands-on project like crafting, building, or painting.",
    mood_benefit: ["Productivity", "Creativity"],
    tools_needed: ["Craft tools", "Materials"],
    tags: ["hands-on", "creative", "focus"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/926/926272.png"
  },
  {
    title: "Baking Therapy",
    category: "Main Course",
    description: "Bake a sweet or savory treat and enjoy the process of making something with love.",
    mood_benefit: ["Accomplishment", "Joy"],
    tools_needed: ["Oven", "Baking ingredients"],
    tags: ["cooking", "skill", "fun"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/2922/2922701.png"
  },
  {
    title: "Deep Space Declutter",
    category: "Main Course",
    description: "Fully organize one space to feel more focused and at peace.",
    mood_benefit: ["Order", "Relief"],
    tools_needed: ["Broom", "Cleaner"],
    tags: ["cleaning", "focus", "refresh"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
  },
  {
    title: "Fresh Sheet Upgrade",
    category: "Main Course",
    description: "Change your bedding to enjoy a cleaner and cozier sleep space.",
    mood_benefit: ["Comfort", "Calm"],
    tools_needed: ["Fresh linens"],
    tags: ["comfort", "bedroom", "reset"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/1046/1046746.png"
  },
  {
    title: "Self-Care Glow-Up",
    category: "Main Course",
    description: "Take time for full grooming—skincare, hair, nails—for a full reset.",
    mood_benefit: ["Confidence", "Peace"],
    tools_needed: ["Toiletries"],
    tags: ["self-love", "routine", "grooming"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/4714/4714694.png"
  },
  {
    title: "Book Retreat",
    category: "Main Course",
    description: "Escape into a fictional world or absorb knowledge through reading.",
    mood_benefit: ["Escape", "Insight"],
    tools_needed: ["Book", "Light"],
    tags: ["reading", "relaxation", "focus"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/2991/2991231.png"
  },
  {
    title: "Rearrange & Refresh",
    category: "Main Course",
    description: "Move around furniture or decor to bring a fresh perspective to your space.",
    mood_benefit: ["Novelty", "Control"],
    tools_needed: ["Furniture", "Time"],
    tags: ["change", "space", "design"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/9644/9644797.png"
  },
  {
    title: "Mini Party Host",
    category: "Dessert",
    description: "Plan a cozy hangout with snacks and laughs for mood-boosting connection.",
    mood_benefit: ["Joy", "Socialization"],
    tools_needed: ["Decor", "Snacks"],
    tags: ["social", "fun", "connection"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
  },
  {
    title: "Game Night Fun",
    category: "Dessert",
    description: "Play your favorite board games and bond with friends or family.",
    mood_benefit: ["Fun", "Bonding"],
    tools_needed: ["Board games"],
    tags: ["games", "social", "fun"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/2518/2518912.png"
  },
  {
    title: "Dance It Out",
    category: "Dessert",
    description: "Hit the dance floor or turn your living room into one. Just move and feel free.",
    mood_benefit: ["Energy", "Freedom"],
    tools_needed: ["Music", "Space"],
    tags: ["dance", "movement", "joy"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
  },
  {
    title: "Intentional Date Night",
    category: "Dessert",
    description: "Go out or plan a cozy evening with your partner for meaningful connection.",
    mood_benefit: ["Love", "Connection"],
    tools_needed: ["Setup", "Ambience"],
    tags: ["romance", "bonding", "special"],
    icon_url: "https://cdn-icons-png.flaticon.com/512/3658/3658751.png"
  }
];



module.exports = {data:sampleListings};
