

// export const taskData = [
// { id: 0, assetSKU: 'SEAGATE SEAGATE TESTDRIVE/7200/SATA/1000 GB/0/0', defect: 'Screen broken', previousBid: 100, yourBid: 20, images: [] },
// { id: 1, assetSKU: 'SEAGATE SEAGATE TESTDRIVE/7200/SATA/1000 GB/0/0', defect: 'Screen broken', previousBid: 200, yourBid: 100, images: [] },
// { id: 2, assetSKU: 'SEAGATE SEAGATE TESTDRIVE/7200/SATA/1000 GB/0/0', defect: 'Screen broken', previousBid: 300, yourBid: 100, images: [] },
// { id: 3, assetSKU: 'SEAGATE SEAGATE TESTDRIVE/7200/SATA/1000 GB/0/0', defect: 'Screen broken', previousBid: 400, yourBid: 300, images: [] },

// {
//     id: 1,
//     avatar: "/placeholder-user.jpg",
//     name: "John Doe",
//     productName: "Cozy Blanket",
//     productDescription: "Warm and Soft for Chilly Nights",
//     quantity: 2,
//     price: 29.99,
//     image: "/placeholder.svg",
// },
// {
//     id: 2,
//     avatar: "/placeholder-user.jpg",
//     name: "Jane Smith",
//     productName: "Autumn Mug",
//     productDescription: "Enjoy Your Hot Beverages in Style",
//     quantity: 1,
//     price: 12.99,
//     image: "/placeholder.svg",
// },
// {
//     id: 3,
//     avatar: "/placeholder-user.jpg",
//     name: "Michael Johnson",
//     productName: "Fall Fragrance Candle",
//     productDescription: "Fill Your Space with a Cozy Scent",
//     quantity: 3,
//     price: 16.99,
//     image: "/placeholder.svg",
// },
// {
//     id: 4,
//     avatar: "/placeholder-user.jpg",
//     name: "Emily Davis",
//     productName: "Autumn Leaves Wall Art",
//     productDescription: "Decorate Your Space with Nature's Beauty",
//     quantity: 1,
//     price: 39.99,
//     image: "/placeholder.svg",
// },
// {
//     id: 5,
//     avatar: "/placeholder-user.jpg",
//     name: "David Wilson",
//     productName: "Fall Harvest Wreath",
//     productDescription: "Welcome the Season with a Beautiful Wreath",
//     quantity: 2,
//     price: 49.99,
//     image: "/placeholder.svg",
// },
// ]

// const taskData: Array<taskDataType> = new Array(50).map((_, index) => ({ id: index, assetSKU: 'SEAGATE SEAGATE TESTDRIVE/7200/SATA/1000 GB/0/0', defect: 'Screen broken', previousBid: 200, images: [] }));

// export default taskData;
export const taskData = () => {

    const arr = [];
    for (let i = 0; i < 1000; i++) {
        arr.push({
            id: i + 1,
            assetSKU: `Asset${i}`,
            defect: `Screen broken${i}`,
            previousBid: i, yourBid: i * 2,
        })
    }
    return arr;
}
