export interface Artist {
    id: string;
    slug: string;
    name: string;
    imageUrl: string;
}

export const mockedArtrist: Artist[] = [
    {
        id: "123",
        slug: "lady-gaga",
        name: "Lady Gaga",
        imageUrl: "https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6",
    },
    {
        id: "456",
        slug: "the-weekend",
        name: "The Weekend",
        imageUrl: "https://i.scdn.co/image/ab676161000051749e528993a2820267b97f6aae",
    },
    {
        id: "789",
        slug: "mirian-bryant",
        name: "Miran Bryant",
        imageUrl: "https://i.scdn.co/image/ab676161000051747994b16479f2784ee5511662",
    }
];