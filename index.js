const app = "I don't do much."
const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
kittens.push(name)
return kittens
}

/*
  describe('destructivelyPrependKitten(name)', function() {
    it('prepends a kitten to the beginning of the kittens array', function() {
      destructivelyPrependKitten("Bob")

      expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
    })
  })*/
  
function destructivelyPrependKitten(name) { 
  kittens.unshift(name)
  return kittens;
}
