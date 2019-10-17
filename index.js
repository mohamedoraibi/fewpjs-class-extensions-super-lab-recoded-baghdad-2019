// Write your classes here

class Tree{
  constructor(species){
    this.species=species
  this.definition="A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
   static definition(){
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}

class Deciduous extends Tree{
  constructor(definition,name) {
        super(definition);
        this.name=name
    }
  static definition(){
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually."
    }
}


class Evergreen extends Tree{
  constructor(definition,name) {
        super(definition);
        this.name=name
    }
  static definition(){
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round."
    }
}