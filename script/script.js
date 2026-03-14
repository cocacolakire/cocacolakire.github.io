function terminalData() {
    return {
        lines: [
            { prompt: 'user@portfolio:~$', cmd: ' whoami' },
            { prompt: '>', cmd: ' 28 year old engineer with interest in technology' },
            { prompt: 'user@portfolio:~$', cmd: ' cat bio.txt' },
            { prompt: '>', cmd: ' I am a civil engineer situated in Sweden, currently working as a Business Intelligence engineer in Karlstad. I have a big interest in technology and I love to learn new stuff. In my spare time I like to play baseball, read, and take on different projects.' },
        ],
        displayed: [],
        cursorLine: 0,
        init() {
            this.typeLines(0, 0);
        },
        typeLines(lineIdx, charIdx) {
            if (lineIdx >= this.lines.length) {
                this.cursorLine = -1;
                return;
            }
            if (charIdx === 0) {
                this.displayed.push('');
                this.cursorLine = lineIdx;
            }
            const line = this.lines[lineIdx].cmd;
            if (charIdx < line.length) {
                this.displayed[lineIdx] += line[charIdx];
                setTimeout(() => this.typeLines(lineIdx, charIdx + 1), 18);
            } else {
                setTimeout(() => this.typeLines(lineIdx + 1, 0), 300);
            }
        },
    }
}

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
