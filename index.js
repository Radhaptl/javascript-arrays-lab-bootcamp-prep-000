const app = "I don't do much."
const kittens = ['Milo', 'Otis', 'Garfield'];

 /*describe('destructivelyAppendKitten(name)', function() {
    it('appends a kitten to the end of the kittens array', function() {
      destructivelyAppendKitten('Ralph')
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])*/
      
function destructivelyAppendKitten(name){
kittens.push(name)
return kittens
}