function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let negativeNumbers = [];

    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        const delimiter = numbers.substring(2, delimiterEndIndex);
        numbers = numbers.substring(delimiterEndIndex + 1);

        const numArray = numbers.split(delimiter);
        const sum = numArray.reduce((sum, num) => {
            const value = parseInt(num, 10);
            if (value < 0) {
                negativeNumbers.push(value);
            }
            return sum + value;
        }, 0);

        if (negativeNumbers.length > 0) {
            throw new Error("negative numbers not allowed " + negativeNumbers.join(","));
        }
        return sum;
    }

    const numArray = numbers.split(/[\n,]/);
    const sum = numArray.reduce((sum, num) => {
        const value = parseInt(num, 10);
        if (value < 0) {
            negativeNumbers.push(value);
        }
        return sum + value;
    }, 0);

    if (negativeNumbers.length > 0) {
        throw new Error("negative numbers not allowed " + negativeNumbers.join(","));
    }

    return sum;
}

module.exports = add;