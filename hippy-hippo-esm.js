const _adjectives = [
  "affectionate",
  "agreeable",
  "amiable",
  "bright",
  "charming",
  "creative",
  "determined",
  "diligent",
  "diplomatic",
  "dynamic",
  "energetic",
  "friendly",
  "hardworking",
  "helpful",
  "imaginative",
  "kind",
  "likable",
  "loyal",
  "patient",
  "polite",
  "sincere",
]

const _nouns = [
  "Alpaca",
  "Badger",
  "Bee",
  "Camel",
  "Cat",
  "Caterpillar",
  "Chipmunk",
  "Crab",
  "Cricket",
  "Deer",
  "Donkey",
  "Dove",
  "Dragonfly",
  "Duck",
  "Eagle",
  "Elephant",
  "Emu",
  "Flamingo",
  "Fox",
  "Frog",
  "Goose",
  "Gopher",
  "Gorilla",
  "Hamster",
  "Hare",
  "Hippo",
  "Hummingbird",
  "Kangaroo",
  "Ladybug",
  "Leopard",
  "Lion",
  "Mongoose",
  "Mouse",
  "Octopus",
  "Otter",
  "Owl",
  "Panda",
  "Parrot",
  "Peacock",
  "Pelican",
  "Penguin",
  "Pig",
  "Pigeon",
  "Porcupine",
  "Rabbit",
  "Walrus",
  "Whale",
].map(v => v.toLowerCase())

export class HippyHippo {
  static getNickName(_n, __adjectives, __nouns) {
    let n
    if (typeof _n === 'undefined' || _n === null) {
      n = HippyHippo.getRandomId()
    } else {
      n = _n
    }
    if (typeof n !== 'number') {
      throw new Error('argument to getNickName must be a number.');
    }
    if (Number.isNaN(n)) {
      throw new Error('argument to getNickName cannot be NaN');
    }
    const adjectives = __adjectives || _adjectives
    const nouns = __nouns || _nouns
    // cast any non NaN number to uint32 integer... I think...
    const index = new Uint32Array(new Float32Array([n]).buffer)[0]
    const adjective = adjectives[index % adjectives.length]
    const noun = nouns[index % nouns.length]
    return `${adjective} ${noun}`
  }

  static getRandomId(max=65535) {
    return Math.floor(Math.random() * max)
  }

  constructor(adjectives=_adjectives, nouns=_nouns) {
    this.adjectives = adjectives
    this.nouns = nouns
  }

  setAdjectives(adjectives) {
    this.adjectives = adjectives
  }

  setNouns(nouns) {
    this.nouns = nouns
  }

  getNickName(n) {
    if (this.adjectives.length === 0) throw new Error(`If using instanced HippyHippo, this.adjectives must be at least one.`)
    if (this.nouns.length === 0) throw new Error(`If using instanced HippyHippo, this.nouns must be at least one.`)
    return HippyHippo.getNickName(n, this.adjectives, this.nouns)
  }
}
