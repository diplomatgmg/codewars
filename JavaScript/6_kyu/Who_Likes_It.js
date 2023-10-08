function likes(names) {
    if (names.length === 0) {
        return "no one likes this";
    }

    let firstNames;

    switch (names.length) {
        case 0:
            return `no one likes this`;
        case 1:
            return `${names[0]} likes this`;
        case 2:
            firstNames = names.slice(0, 2).join(" and ");
            return `${firstNames} like this`;
        case 3:
            firstNames = names.slice(0, 2).join(", ");
            return `${firstNames} and ${names[2]} like this`
        default:
            firstNames = names.slice(0, 2).join(", ");
            return `${firstNames} and ${names.length - 2} others like this`

    }
}