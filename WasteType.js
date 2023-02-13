const wasteTypeList =[]

class WasteType{
  constructor(name, id, unit){
    this.name = name,
    this.id = id,    
    this.unit = unit,
    this.counter = 0,
    this.productionList= [],
    this.assemblyList = []
    wasteTypeList.push(this)
  }
}

const wasteType1 = new WasteType("PP Biały", 830025, "kg")
const wasteType2 = new WasteType("PP Hostacom+ Alfater", 830024, "kg")
const wasteType3 = new WasteType("PP Natur", 830028, "kg")
const wasteType4 = new WasteType("Pył", 830040, "kg")
const wasteType5 = new WasteType("ABS Bayblend", 830016, "kg")
const wasteType6 = new WasteType("ABS Biały", 830010, "kg")
const wasteType7 = new WasteType("ABS Grey/Black", 830009, "kg")
const wasteType8 = new WasteType("ABS Pomieszane", 830012, "kg")
const wasteType9 = new WasteType("Grauzonen", 830017, "kg")
const wasteType10 = new WasteType("Lexan", 830019, "kg")
const wasteType11 = new WasteType("PA", 830023, "kg")
const wasteType12 = new WasteType("PA6+ POM", 830022, "kg")
const wasteType13 = new WasteType("PA66/6 SMA", 830008, "kg")
const wasteType14 = new WasteType("Plexiglas", 830011, "kg")
const wasteType15 = new WasteType("PMMA", 830021, "kg")
const wasteType16 = new WasteType("PP", 830014, "kg")
const wasteType17 = new WasteType("PP Bezbarwny", 830015, "kg")
const wasteType18 = new WasteType("PP Pomieszane", 830013, "kg") 
const wasteType19 = new WasteType("PP Ramki", 830018, "kg")
const wasteType20 = new WasteType("PP+ TPE", 830020, "kg")
const wasteType21 = new WasteType("SMMA", 830060, "kg")
const wasteType22 = new WasteType("Odpad Szklany", 830002, "szt") 
const wasteType23 = new WasteType("TPE 66033", 830050, "kg")
const wasteType24 = new WasteType("PS Crystal Clear", 830101, "kg")
const wasteType25 = new WasteType("PA6 Durethan", 830090, "kg")
const wasteType26 = new WasteType("Luran", 830091, "kg")
const wasteType27 = new WasteType("PPE/ PS Xyron", 830092, "kg")
const wasteType28 = new WasteType("Okna Pomieszane", 830137, "szt")
const wasteType29 = new WasteType("ABS PA Faurecia", 830171, "kg")
const wasteType30 = new WasteType("Odpad z metalem", 830140, "kg")
const wasteType31 = new WasteType("Pianowanie Pomieszane", 830139, "kg")
const wasteType32 = new WasteType("PP Softell Forvia", 830200, "kg")
const wasteType33 = new WasteType("PC ABS Pomieszane", 830027, "kg")

export { wasteTypeList }