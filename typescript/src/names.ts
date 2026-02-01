export const DIRECTION = [
  "Northern", "Eastern", "Southern", "Western"
]

export const REGION = [
  "American", "Asian", "European", "African", "Oceanic", "Arctic",  // Continents
  "Canadian", "Brazilian", "Jamaican", "Chinese", "Japanese", "Peruvian", "Polish", "Kenyan", "Finnish", "Russian", "English",  // Countries
  "Mediterranean", "Appalachian", "Himalayan",
]

export const BIOME = [
  "Mountain", "Swamp", "Bog", "Coastal", "Inland", "Tropical", "Alpine", "River", "Desert", "Meadow", "Tundra",
]

export const MISC = [
  "False", "Common", "Water", "King", "Plain", "Smooth", "Devil's", "Deep", "Horse", "Weeping",
]

export const COLOUR = [
  "Black", "White", "Blue", "Red", "Green", "Purple",
]

export const ALL_MODIFIERS = DIRECTION.concat(REGION, BIOME, MISC, COLOUR)

export const SPECIES = [
  "Maple", "Birch", "Ash", "Aspen", "Oak", "Poplar", "Locust", "Dogwood", "Alder", "Acacia", "Beech", "Ginkgo", 
  "Sycamore", "Hawthorn", "Willow", "Elm", "Mangrove", "Hickory", "Mahogany", "Cottonwood", "Eucalyptus",
  "Magnolia", "Alder", "Linden", "Sumac", "Hazel", "Jacaranda",  // Deciduous
  "Fir", "Pine", "Spruce", "Redwood", "Sequoia", "Larch", "Cypress", "Cedar", "Yew", "Juniper", "Hemlock",
  "Laurel",  // Conifer
  "Chestnut", "Walnut",  // Nuts
  "Apple", "Crabapple", "Cherry", "Lemon", "Fig", "Plum", "Mulberry", "Chokecherry",  // Fruit
]