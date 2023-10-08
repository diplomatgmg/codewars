function enough(cap, on, wait) {
    const max = cap - on - wait;

    return max < 0 ? Math.abs(max): 0
}