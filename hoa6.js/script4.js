class Point {
    constructor(x, y) {
        this.type = "point";
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(pointsArray) {
        this.type = "line";
        this.points = pointsArray.map(p => new Point(p[0], p[1]));
    }
}

class Figure {
    constructor(elements = null) {
        this.elements = {
            points: [],
            lines: []
        };

        if (elements) {
            this.fromJSON(elements, true);
        }
    }

    addPoint(x, y) {
        this.elements.points.push(new Point(x, y));
    }

    addLine(pointsArray) {
        this.elements.lines.push(new Line(pointsArray));
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(jsonData, append = false) {
        let data = typeof jsonData === "string" ? JSON.parse(jsonData) : jsonData;

        if (!append) {
            this.deleteAll();
        }

        if (data.points) {
            data.points.forEach(p => {
                this.addPoint(p.x, p.y);
            });
        }

        if (data.lines) {
            data.lines.forEach(l => {
                let pts = l.points.map(p => [p.x, p.y]);
                this.addLine(pts);
            });
        }
    }

    deleteAll() {
        this.elements.points = [];
        this.elements.lines = [];
    }
}

/* ===== TEST ===== */

let f = new Figure();
f.addPoint(10,20);
f.addPoint(10,10);
f.addLine([[10,20], [30,40], [50,60]]);

let json = f.toJSON();
console.log(json);

f.fromJSON(json, true);
console.log(f.elements.points.length);
console.log(f.elements.lines.length);

f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":10}]}]}');

console.log(f.elements.points.length);
console.log(f.elements.lines.length);