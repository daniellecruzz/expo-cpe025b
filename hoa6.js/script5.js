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
    constructor() {
        this.elements = {
            points: [],
            lines: []
        };
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

    fromJSON(json, append = false) {
        let data = typeof json === "string" ? JSON.parse(json) : json;

        if (!append) this.deleteAll();

        data.points?.forEach(p => this.addPoint(p.x, p.y));
        data.lines?.forEach(l => {
            let pts = l.points.map(p => [p.x, p.y]);
            this.addLine(pts);
        });
    }

    deleteAll() {
        this.elements.points = [];
        this.elements.lines = [];
    }

    /* ===== REQUIRED METHODS ===== */

    static isSamePoint(p1, p2) {
        return p1 && p2 &&
               p1.x === p2.x &&
               p1.y === p2.y;
    }

    static isSameLine(l1, l2) {
        if (!l1 || !l2 || l1.points.length !== l2.points.length)
            return false;

        return l1.points.every((p, i) =>
            p.x === l2.points[i].x &&
            p.y === l2.points[i].y
        );
    }

    sortPoints() {
        this.elements.points.sort((a, b) =>
            b.x === a.x ? b.y - a.y : b.x - a.x
        );
    }

    sortLines() {
        this.elements.lines.sort((l1, l2) => {
            for (let i = 0; i < l1.points.length; i++) {
                let diff = l2.points[i].x - l1.points[i].x ||
                           l2.points[i].y - l1.points[i].y;
                if (diff !== 0) return diff;
            }
            return 0;
        });
    }

    cleanUp() {
        this.sortPoints();

        this.elements.points =
            this.elements.points.reduce((acc, cur) => {
                if (!Figure.isSamePoint(acc[acc.length - 1], cur))
                    acc.push(cur);
                return acc;
            }, []);

        this.sortLines();

        this.elements.lines =
            this.elements.lines.reduce((acc, cur) => {
                if (!Figure.isSameLine(acc[acc.length - 1], cur))
                    acc.push(cur);
                return acc;
            }, []);
    }
}

/* ===== TEST ===== */

let f = new Figure();
f.addPoint(10, 20);
f.addPoint(10, 20); // duplicate
f.addPoint(5, 15);

f.addLine([[0,0],[10,10]]);
f.addLine([[0,0],[10,10]]); // duplicate

f.cleanUp();

console.log(f.elements);