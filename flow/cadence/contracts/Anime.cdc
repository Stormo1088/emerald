 pub contract Anime {

    pub var anime: String

    pub fun changeAnime(newAnime: String) {
        self.anime = newAnime
    }

    init() {
        self.anime = "MHA"
    }
}