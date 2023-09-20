var singleNumber = function (nums) {
    let obj = []
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        obj.includes(nums[i])
            ? obj.splice(obj.indexOf(nums[i]), 1)
            : obj.push(nums[i])
    }
    return obj[0];
};

nums = [2, 2, 1];
console.log(singleNumber(nums));