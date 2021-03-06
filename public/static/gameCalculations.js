export const angle = (x1, y1, x2, y2) => {
    let valid = typeof x1 === 'number' && typeof y1 === 'number' && typeof x2 === 'number' && typeof y2 === 'number';
    if(!valid) {
        throw new Error('all arguments must be numbers');
    }

    let mvtAngle = Math.atan2(
        y1 - y2,
        x1 - x2
    );
    if (mvtAngle > 0.0) {
        if (mvtAngle < Math.PI * 0.5) {
            mvtAngle = 0.0;
        } else {
            mvtAngle = Math.PI;
        }
    }

    return mvtAngle + Math.PI * 0.5;
}