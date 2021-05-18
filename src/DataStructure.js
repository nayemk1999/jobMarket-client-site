class Dictionary  {
    constructor() {
        this.dictionary = {}
        
    }
    add(key, value){
        this.dictionary[key] = value
    }
    get(key){
       return this.dictionary[key]
    }
    
}
const students = new Dictionary;
students.add('Mahi', '0151752464')
console.log(students);