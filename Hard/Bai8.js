function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function countStrAInStrB(target, source) {
    // Validate input
    if (typeof target !== "string" || typeof source !== "string") {
        console.log("Invalid input: must be strings");
        return 0;
    }

    if (target.length === 0) {
        console.log("Target string cannot be empty");
        return 0;
    }

    // Escape regex special characters
    const safeTarget = escapeRegex(target);

    // Create regex safely
    const regex = new RegExp(safeTarget, "g");

    const matches = source.match(regex);

    return matches ? matches.length : 0;
}

const strA = "tin";
const strB = "tinbontinbonten";

console.log("===== STRING COUNT TEST =====");
console.log(`Target: "${strA}"`);
console.log(`Source: "${strB}"`);

const result = countStrAInStrB(strA, strB);

console.log("-----------------------------");
console.log(`Occurrences: ${result}`);