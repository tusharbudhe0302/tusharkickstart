const MAX_SIZE = 10;
class Dictionary {
    constructor() {
        this.dictionary = new Array(MAX_SIZE);
    }
    get(key) {
        const idxx = key.hashCode() % MAX_SIZE
        return this.dictionary[this.idxx(key)][1];
    }

    set(key, value) {
        this.dictionary[this.idx(key)] = [key, value]
    }

    contains(key) {
        return this.dictionary[this.idx(key)] !== null;
    }

    idx(key) {
        return key.hashCode() % MAX_SIZE;
    }
}

String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    console.log(`hash : ${hash}`);
    return hash;
};

function processData(input) {
    const d = new Dictionary();
    const lines = input.split('\n');
    lines.forEach((line) => {
        const words = line.split(' ');
        switch (words[0]) {
            case 'get':
                console.log(d.get(words[1]));
                break;
            case 'set':
                d.set(words[1], words[2]);
                break;
            case 'contains?':
                console.log(d.contains(words[1]));
                break;
        }
    });
}
processData('set  \n ab ab');
processData('get \n ab');

