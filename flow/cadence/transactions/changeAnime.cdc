import Anime from "../contracts/Anime.cdc"

transaction(myNewAnime: String) {

  prepare(signer: AuthAccount) {}

  execute {
    Anime.changeAnime(newAnime: myNewAnime)
  }
}