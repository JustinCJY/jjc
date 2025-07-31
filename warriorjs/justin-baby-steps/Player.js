class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      warrior.walk()
    } else {
      warrior.attack()
    }

    // Cool code goes here.
  }
}
