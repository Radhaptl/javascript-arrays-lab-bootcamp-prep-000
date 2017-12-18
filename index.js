const app = "I don't do much."
const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
kittens.push(name)
return kittens
}

function destructivelyPrependKitten(name) { 
  kittens.unshift(name)
  return kittens;
}

/* describe('destructivelyRemoveLastKitten()', function() {
    it('removes the last kitten from the kittens array', function() {
      destructivelyRemoveLastKitten()

      expect(window.kittens).toEqual(["Milo", "Otis"])
    })
  })*/
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}