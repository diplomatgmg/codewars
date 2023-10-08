function meeting(s) {
    const splitFullNames = s.split(";");

    const splitNames = splitFullNames.map(name => name.split(":"));

    const joinFullName = splitNames.map((fullName) => `(${fullName[1]}, ${fullName[0]})`.toUpperCase());
    return joinFullName.sort().join('');
}