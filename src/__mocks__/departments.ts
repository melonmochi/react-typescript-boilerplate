import { department } from "./departments.d";

const data: department[] = [];
for (let i = 0; i < 46; i += 1) {
  data.push({
    key: `d00${i}`,
    deptNo: `d00${i}`,
    name: `Marketing ${i}`
  });
}

export default (): Promise<{
  data: department[];
  success: true;
}> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data,
        success: true
      });
    }, 1000);
  });
