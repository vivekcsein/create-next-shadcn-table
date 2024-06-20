

// interface taskDataType {
//     id: number;
//     assetSKU: string;
//     defect: string;
//     previousBid: number;
//     images: Array<string> | undefined;
// }
const taskData: Array<taskDataType> | null = [];

for (let x = 0; x < 1000; x++) {
    taskData.push({
        id: 11586178,
        assetSKU: "SEAGATE SEAGATE TESTDRIVE/7200/SATA/1000 GB/0/0",
        defect: "Screen broken",
        previousBid: 200,
        images: []
    });
}

export default taskData;