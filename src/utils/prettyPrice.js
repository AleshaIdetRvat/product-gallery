const prettyPrice = (price) => {
    let normalizePrice = price

    if (typeof price !== "string") {
        if (typeof price === "number") normalizePrice = String(price)
        else throw new Error()
    }
    normalizePrice = normalizePrice.replace(/\D/g, "")

    let res = []

    for (let i = normalizePrice.length; i > -1; i -= 3) {
        const end = i
        const start = i > 3 ? i - 3 : 0

        res.unshift(normalizePrice.slice(start, end))
    }

    return res.join(" ")
}

const parsePrettyPrice = (prettyPrice) => {
    return +prettyPrice.replace(/\s/g, "")
}

export { prettyPrice, parsePrettyPrice }
