function abbrevName(name){
    return name.split(' ').map((a) => a[0].toUpperCase()).join('.')
}