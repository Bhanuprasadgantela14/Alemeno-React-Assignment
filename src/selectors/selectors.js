//// what was the point of making this separate again?

export function authorsFormattedForDropdown(authors) {
    return authors.map(authorFormattedForDropdown);
}

export function authorFormattedForDropdown(author) {
    return {
        value: author.id,
        text: author.firstName + " " + author.lastName,
    };
}
