function carouselData() {
    return {
        IMG_URL: './resources/images/',
        images: ['circuit1.png', 'circuit2.png', 'circuit3.png', 'circuit4.png', 'circuit5.png', 'circuit6.png'],
        circuits: ['TSAL', 'Dummy TSAL', 'IMD-latch', 'LED card', 'Precharge', 'Starting logic'],
        index: 3,
        prev() { this.index = (this.index - 1 + 6) % 6 },
        next() { this.index = (this.index + 1) % 6 },
        imgSrc(offset) { return this.IMG_URL + this.images[(this.index + offset + 6) % 6] },
    }
}
